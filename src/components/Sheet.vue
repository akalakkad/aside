<template>
  <div @keydown.meta="getSelection" class="sheet-container">
    <div class="sheettitle-box">
      <h2 class="sheet-title">{{ data.title }}</h2>
      <EditButton @click.native="toggleEdit"></EditButton>
    </div>

    <div @keyup="autoSave" @mouseup="getSelection" :class="{'editor-active': edit}" class="sheet-editor" :contenteditable="edit" ref="sheet">
        {{data.body}}
    </div>

  </div>
</template>

<script>
import EditButton from "@/components/buttons/EditButton.vue";

export default {
  components: { EditButton },
  props: ["data"],
  data() {
    return {
      text: "",
      edit: true,
      throttle: null
    };
  },
  methods: {
    getSelection() {
      let selection = window.getSelection();
      let selectedString = selection.toString();
      this.$store.commit("update", selectedString);
      selectedString.length > 0 ? console.log(selectedString) : null;
    },
    toggleEdit() {
      if (this.edit) {
        this.saveContents();
      }

      this.edit = !this.edit;
    },
    saveContents() {
        console.log("saving");
        console.log(this.$store.state.asides);
        this.$store.commit("saveSheet", { h: this.data.hash, b: this.$refs.sheet.innerHTML});
    },
    autoSave() {
        clearTimeout(this.throttle);
        this.throttle = setTimeout(this.saveContents, 3000);
    }
  },
  watch: {
      data: function() {
          this.$refs.sheet.innerHTML = this.data.body;
      }
  }
};
</script>

<style>
.sheet-container {
  display: inline-block;
  width: 50%;
  height: 100%;
  padding: 10px;
  border: solid #5a97e6 1px;
  border-radius: 12px;
}

.sheettitle-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
}

.sheet-title {
  display: inline-block;
  margin: 0;
  color: #3a4891;
}

.sheet-text {
  display: block;
  width: 100%;
  height: auto;
  padding: 10px;
  font-size: 16px;
  background-color: white;
  color: black;
}

.sheet-editor {
  display: block;
  max-width: 100%;
  width: 100%;
  height: 90%;
  padding: 0px;
  border: none;
  border-radius: 6px;
  background-color: #fff;
  resize: none;
  outline: none;
  font-size: 20px;
}

.editor-active {
    background-color: #e6f2fc;
    padding: 10px;
}
</style>
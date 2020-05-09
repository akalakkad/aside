<template>
  <div @keydown.meta="getSelection" class="sheet-container">
    <div class="sheettitle-box">
      <h2 class="sheet-title">{{ data.title }}</h2>
      <EditButton @click.native="toggleEdit"></EditButton>
    </div>
    <span v-show="!edit" class="sheet-text">
        {{ data.body }}
    </span>

    <textarea
      v-model="$store.state.local"
      v-show="edit"
      @mouseup="getSelection"
      @keyup="logKey"
      class="sheet-editor"
      ref="sheet"
    ></textarea>
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
      hash: this.data.hash,
      edit: true,
      local: this.data.body
    };
  },
  mounted() {
    this.$refs.sheet.value = this.data.body;
  },
  methods: {
    logKey() {
      this.text = this.$refs.sheet.value;
    },
    getSelection() {
      let selection = window.getSelection();
      let selectedString = selection.toString();
      this.$store.commit("update", selectedString);
      selectedString.length > 0 ? console.log(selectedString) : null;
    },
    toggleEdit() {
      if (this.edit) {
        console.log("saving");
        console.log(this.$store.state.local)
        this.$store.commit("saveSheet", { h: this.hash, b: this.$store.state.local });
      }

      this.edit = !this.edit;
    }
  }
};
</script>

<style>
.sheet-container {
  display: inline-block;
  width: 480px;
  height: 640px;
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
  height: 80%;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: #e6f2fc;
  resize: none;
  outline: none;
  font-size: 16px;
}
</style>
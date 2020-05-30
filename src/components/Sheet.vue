<template>
  <div @keydown.meta="getSelection" class="sheet-container">
    <div class="sheettitle-box">
        <h2 @keyup="autoSave" :contenteditable="edit" class="sheet-title" :class="{'editor-active': edit}" ref="title">{{ data.title }}</h2>
        <div style="display: flex; justify-content: flex-start;">
            <EditButton @click.native="toggleEdit" :state="edit"></EditButton>
            <Save :icon="saveState ? 'cloud_upload' : 'cloud_done' "></Save>
        </div>  
    </div>

    <div @keyup="autoSave" @mouseup="getSelection" :class="{'editor-active': edit}" class="sheet-editor" :contenteditable="edit" ref="sheet">
        {{data.body}}
    </div>

  </div>
</template>

<script>
import EditButton from "@/components/buttons/EditButton.vue";
import Save from '@/components/states/Save';

export default {
  components: { EditButton, Save },
  props: ["data"],
  data() {
    return {
      text: "",
      edit: false,
      throttle: null,
      saveState: false
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
        this.$store.commit("saveSheet", {h: this.data.hash, t: this.$refs.title.innerHTML,  b: this.$refs.sheet.innerHTML});
        this.saveState = false;
    },
    autoSave() {
        clearTimeout(this.throttle);
        this.saveState = true;
        this.throttle = setTimeout(this.saveContents, 1000);
    }
  },
  watch: {
      data: function() {
          this.$refs.sheet.innerHTML = this.data.body;
          this.$refs.title.innerHTML = this.data.title;
      }
  }
};
</script>

<style>
.sheet-container {
  display: block;
  width: 55%;
  height: 100%;
  padding: 20px;
  border: solid #5a97e6 1px;
  border-radius: 12px;
}

.sheettitle-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 5px 0 10px 0;
  margin-bottom: 20px;
  border-bottom: solid #c2def8 1px;
}

.sheet-title {
  display: inline-block;
  margin: 0;
  border-radius: 6px;
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
  width: 100%;
  height: 80%;
  padding: 0px;
  margin: 0;
  border: none;
  border-radius: 6px;
  background-color: #fff;
  resize: none;
  outline: none;
  font-size: 20px;
  color: #3a4891;

  overflow-y: scroll;
}

.editor-active {
    background-color: #e6f2fc;
    padding: 10px;
}
</style>
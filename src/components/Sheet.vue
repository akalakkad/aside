<template>
  <div @click="getHash" @keydown.meta="getSelection" class="sheet-container">
      <h4>
         {{ data.title }} 
      </h4>
      <textarea @mouseup="getSelection" @keyup="logKey" class="sheet-text" ref="sheet">

      </textarea>
  </div>
</template>

<script>
export default {
    components: {},
    props: ['data'],
    data() {
        return {
            text: '',
            hash: this.data.hash
        }
    },
    methods: {
        logKey() {
            this.text = this.$refs.sheet.value;
        },
        getSelection() {
            let selection = window.getSelection();
            let selectedString = selection.toString();
            this.$store.commit('update', selectedString);
            selectedString.length > 0 ? console.log(selectedString) : null;
        },
        getHash() {
            alert(this.hash);
        }
    },
    computed: {
  
    }
}
</script>

<style>
    .sheet-container {
        display: inline-block;
        width: 480px;
        height: 640px;
        padding: 10px;
        border: solid lightgrey 1px;
        border-radius: 12px;
    }

    .sheet-text {
        display: block;
        max-width: 100%;
        width: 100%;
        height: 90%;
        padding: 10px;
        border: none;
        border-radius: 6px;
        background-color: #f7f7f7;
        resize: none;
        outline: none;
        font-size: 16px;
    }

</style>
<template>
  <div class="sheet-container">
      <textarea @click="getSelection" @keydown="logKey" class="sheet-text" ref="sheet">

      </textarea>
  </div>
</template>

<script>
export default {
    components: {},
    props: [],
    data() {
        return {
            text: '',
            snippet: ''
        }
    },
    methods: {
        logKey(k) {
            this.text += k.key;
        },
        getSelection() {
            let s = window.getSelection();
            this.snippet = s.toString();
        }
    },
    computed: {

    }
}
</script>

<style>
    .sheet-container {
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
        height: 100%;
        padding: 10px;
        border: none;
        border-radius: 6px;
        background-color: #f7f7f7;
        resize: none;
        outline: none;
        font-size: 16px;
    }

</style>
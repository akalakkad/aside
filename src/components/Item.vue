<template>
  <div @click="setHash" class="item-container">
      {{ data }}
  </div>
</template>

<script>
export default {
    components: {},
    props: ['data'],
    data() {
        return {

        }
    },
    methods: {
        setHash() {
            this.$store.state.currentSheet = this.data;
        }
    }
}
</script>

<style>
    .item-container {
        width: 100%;
        min-height: 30px;
        height: auto;
        padding: 15px;
        margin-bottom: 5px;
        background-color: #fff;
        border: solid #5a97e6 1px;
        border-radius: 6px;
        color: #3a4891;
    }

    .item-container:hover {
        border: solid #5a97e600 1px;
        background-color: #e6f2fc;
    }
</style>
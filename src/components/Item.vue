<template>
  <div @click="setHash" class="item-container">
      {{ title }}
  </div>
</template>

<script>
export default {
    components: {},
    props: ['title', 'hash'],
    data() {
        return {

        }
    },
    methods: {
        setHash() {
            this.$store.state.current = this.hash;
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
        background-color: #e6f2fc;
        border-radius: 6px;
        color: #3a4891;
    }
</style>
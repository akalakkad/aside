<template>
  <div class="asidebutton-container">
      <button @click="newAside" class="asidebutton">
          ✂︎
      </button>
  </div>
</template>

<script>
export default {
    components: {},
    props: [],
    data() {
        return {

        }
    },
    methods: {
        newAside() {
           if(this.$store.state.snippet !== '') {
                this.$store.commit('addAside', this.$store.state.current);
                this.$store.commit('update', '');
           }
        }
    }
}
</script>

<style>
    .asidebutton-container {
        min-width: 40px;
        width: auto;
        height: 40px;        
    }

    .asidebutton {
        width: 100%;
        height: auto;
        padding: 10px;
        background-color: #e6f2fc;
        border: none;
        border-radius: 100px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        color: #3a4891;
        outline: none;
    }

</style>
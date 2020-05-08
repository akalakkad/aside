<template>
  <div class="asidebutton-container">
      <button @click="newAside" class="asidebutton">
          ✂︎ CREATE
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
                this.$store.commit('addAside');
                this.$store.commit('update', '');
           }
        }
    }
}
</script>

<style>
    .asidebutton-container {
        min-width: 150px;
        width: auto;
        height: auto;        
    }

    .asidebutton {
        width: 100%;
        height: auto;
        padding: 10px;
        background-color: mediumseagreen;
        border: none;
        border-radius: 100px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        color: white;
        outline: none;
    }

</style>
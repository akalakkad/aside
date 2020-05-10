<template>
  <div class="asidebutton-container">
      <button @click="newAside" class="asidebutton">
        <i style="font-size: 20px;" class="material-icons">
            add_circle
        </i>
        <span style="margin-left: 10px;">
            Add aside
        </span>
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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        padding: 10px;
        background-color: #e6f2fc;
        border: none;
        border-radius: 100px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        color: #3a4891;
        outline: none;
    }

</style>
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

import {db} from '@/fb/index';

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
                db.ref('sheets').push({title: this.$store.state.snippet, body: " ", parent: this.$store.state.currentSheet})
                .then(res => {
                    db.ref('sheets/' + this.$store.state.currentSheet + '/child').push({key: res.key});
                    this.$store.state.currentSheet = res.key;
                });

           }
        }
    },
    computed: {

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
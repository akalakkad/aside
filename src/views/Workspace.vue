<template>
  <div class="workspace-container">
      <ToolBar></ToolBar>
      <Thread :sheetData="sheets[0]"></Thread>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar';
import Thread from '@/components/Thread';

import {db} from '@/fb/index';

export default {
    components: {ToolBar, Thread},
    props: [],
    data() {
        return {
            sheets: []
        }
    },
    firebase: {
        sheets: db.ref('sheets')
    },
    mounted() {
        console.log(this.sheets);
    },
    computed: {
        currentSheet() {
            let cIdx = this.$store.state.asides.findIndex(element => {
                return element.hash === this.$store.state.current;
            });

            return this.$store.state.asides[cIdx];
        }
    }
}
</script>

<style>
    .workspace-container {
        width: 90%;
        min-height: 100%;
        height: 100%;
        padding: 10px;
    }
</style>
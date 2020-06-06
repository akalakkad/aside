<template>
  <div class="workspace-container">
      <ToolBar></ToolBar>
      <Thread :sheetData="currentSheet"></Thread>
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
    computed: {
        currentSheet() {
            let cIdx = this.sheets.findIndex(element => {
                return element['.key'] === this.$store.state.currentSheet;
            });

            return this.sheets[cIdx];
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
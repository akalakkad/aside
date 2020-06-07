<template>
  <div class="workspace-container">
      <ToolBar></ToolBar>
      <Thread :sheetData="sheets[$store.state.currentSheet]"></Thread>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar';
import Thread from '@/components/Thread';

import {db} from '@/fb/index';

let sheetsRef = db.ref('sheets');

export default {
    components: {ToolBar, Thread},
    props: [],
    data() {
        return {
            sheets: {}
        }
    },
    firebase: {
        sheets: sheetsRef
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
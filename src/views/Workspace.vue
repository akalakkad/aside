<template>
  <div class="workspace-container">
      <ToolBar></ToolBar>
      <Thread :sheetData="this.$store.state.asides[0]"></Thread>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar';
import Thread from '@/components/Thread';

export default {
    components: {ToolBar, Thread},
    props: [],
    data() {
        return {

        }
    }
}
</script>

<style>
    .workspace-container {
        width: 100%;
        height: auto;

    }
</style>
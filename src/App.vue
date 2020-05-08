<template>
  <div class="app-container">
    <ToolBar></ToolBar>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar';

export default {
  components: { ToolBar },
  props: [],
  data() {
    return {};
  }
};
</script>

<style>
html {
  width: 100%;
  min-height: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

body {
  width: 100%;
  min-width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.app-container {
  width: 100%;
  min-height: 100%;
  height: 100%;
  padding: 0;
}
</style>
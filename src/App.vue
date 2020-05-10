<template>
  <div class="app-container">
    <Workspace></Workspace>
  </div>
</template>

<script>
import Workspace from '@/views/Workspace';

export default {
  components: { Workspace },
  props: [],
  data() {
    return {};
  }
};
</script>

<style>

* {
  box-sizing: border-box;
}

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
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
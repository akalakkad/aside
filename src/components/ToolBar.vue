<template>
  <div class="toolbar-container">
      <span style="font-size: 24px">
          Aside
      </span>
      <AsideButton></AsideButton>
  </div>
</template>

<script>
import AsideButton from '@/components/buttons/AsideButton';
export default {
    components: {AsideButton},
    props: [],
    data() {
        return {

        }
    }
}
</script>

<style>
    .toolbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        min-height: 40px;
        height: 10%;
        padding: 10px;
        margin: auto;
    }
</style>
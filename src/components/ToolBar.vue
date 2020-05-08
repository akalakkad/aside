<template>
  <div class="toolbar-container">
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
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 50px;
        padding: 25px;
        border-bottom: solid lightgrey 1px;
    }
</style>
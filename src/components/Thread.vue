<template>
  <div class="thread-container">

        <Sheet :data="sheetData"></Sheet>

        <Contents></Contents>
  </div>
</template>

<script>
import Sheet from '@/components/Sheet';
import Contents from '@/components/Contents';

export default {
    components: { Sheet, Contents },
    props: ['sheetData'],
    data() {
        return {

        }
    }
}
</script>

<style>
    .thread-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 80%;
        padding: 10px;;
    }
</style>
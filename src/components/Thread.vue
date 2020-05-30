<template>
  <div class="thread-container">

    <Sheet :data="sheetData"></Sheet>
    <div style="width: 40%;">
        Parent
        <Contents :content="sheetData.parent"></Contents>
        <br />
        Child
        <Contents :content="sheetData.child"></Contents>

    </div>
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
<template>
  <div class="thread-container">

    <Sheet :sheetInfo="sheetData"></Sheet>
    <!-- <div style="width: 40%;">
        Parent
        <Contents v-if="sheetData.parent" :content="sheetData.parent"></Contents>
        <br />
        Child
        <Contents v-if="sheetData.child" :content="sheetData.child"></Contents>

    </div> -->
  </div>
</template>

<script>
import Sheet from '@/components/Sheet';
// import Contents from '@/components/Contents';

export default {
    components: { Sheet },
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
<template>
  <div class="thread-container">
      <!-- <div style="display: inline-block" v-for="s in sheets" :key="s.title"> -->
          <Sheet :data="sheetData"></Sheet>
      <!-- </div> -->
  </div>
</template>

<script>
import Sheet from '@/components/Sheet';
export default {
    components: {Sheet},
    props: ['sheetData'],
    data() {
        return {

        }
    }
}
</script>

<style>
    .thread-container {
        width: 100%;
        height: 100%;
        padding: 10px;
    }
</style>
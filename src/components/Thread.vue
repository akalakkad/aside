<template>
  <div class="thread-container">
      <Sheet></Sheet>
  </div>
</template>

<script>
import Sheet from '@/components/Sheet';
export default {
    components: {Sheet},
    props: [],
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
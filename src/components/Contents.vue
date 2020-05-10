<template>
  <div class="contents-container">
      <div v-for="i in $store.state.asides" :key="i.title">
          <Item :title="i.title" :hash="i.hash"></Item>
      </div>
  </div>
</template>

<script>
import Item from '@/components/Item';

export default {
    components: { Item },
    props: [],
    data() {
        return {

        }
    }
}
</script>

<style>
    .contents-container {
        width: 40%;
        height: auto;
    }
</style>
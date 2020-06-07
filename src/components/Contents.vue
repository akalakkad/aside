<template>
  <div class="contents-container">
      <div v-for="c in content" :key="c.key">
          <Item :data="c.key"></Item>
      </div>
  </div>
</template>

<script>
import Item from '@/components/Item';

export default {
    components: { Item },
    props: ['content'],
    data() {
        return {

        }
    }
}
</script>

<style>
    .contents-container {
        width: 100%;
        height: auto;
    }
    
</style>
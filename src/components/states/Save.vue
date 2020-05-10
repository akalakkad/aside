<template>
  <div class="save-container">
    <span style="font-size: 20px;" class="material-icons">
        {{ icon }}
    </span>
  </div>
</template>

<script>
export default {
    components: {},
    props: ['icon'],
    data() {
        return {

        }
    }
}
</script>

<style>
    .save-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        font-size: 16px;
        color: #3a4891;
    }
</style>
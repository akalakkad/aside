<template>
  <div class="editbutton-container">
        <i style="font-size: 20px;" class="material-icons edit-button">
            edit
        </i>
  </div>
</template>

<script>
export default {
    components: {},
    props: [],
    data() {
        return {

        }
    }
}
</script>

<style>
    .editbutton-container {
        display: inline-block;
        width: auto;
        height: auto;

        cursor: pointer;
    }

    .edit-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        padding: 5px;
        border: none;
        border-radius: 100px;
        background-color: #e6f2fc;
        font-size: 12px;
        color: #3a4891;


    }
</style>
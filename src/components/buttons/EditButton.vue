<template>
  <div class="editbutton-container">
        <i style="font-size: 20px;"  :class="{'edit-active': state}"  class="material-icons edit-button">
            edit
        </i>
  </div>
</template>

<script>
export default {
    components: {},
    props: ['state'],
    data() {
        return {

        }
    }
}
</script>

<style>
    .editbutton-container {
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
        background-color: transparent;
        font-size: 16px;
        color: #3a4891;
    }

    .edit-active {
        background-color: #e6f2fc;
    }
</style>
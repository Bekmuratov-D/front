<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .btn{
        margin: 0 10px;
        padding: 10px 75px;
        border: 2px solid rgb(63, 83, 200);
        border-radius: 40px;
        color: rgb(63, 83, 200);
    }
</style>
<template>
    <div class="wrapper">
        <h1 class="title">КЛИНИНГОВЫЕ УСЛУГИ</h1>
        <my-carousel/>
        <action-button>
            Заказать уборку
        </action-button>
    </div>
</template>

<script>
import MyCarousel from '@/components/MyCarousel.vue'
import ActionButton from '@/components/UI/ActionButton.vue'
export default {
  components: { MyCarousel, ActionButton },
    
}
</script>

<style scoped>
.wrapper{
    max-width: 1200px;
    margin: 0 auto;
}
.title{
    max-width: 400px;
    margin: 0 auto;
}
</style>
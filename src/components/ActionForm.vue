<template>
  <div class="wrapper">
    <h3 class="title">Оставте заявку</h3>
    <p class="text">и мы свяжемся с Вами в течение нескольких минут</p>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-text-field
            label="Имя"
            required
        ></v-text-field>

        <v-text-field
            label="Номер телефона"
            required
        ></v-text-field>
        <v-btn
            color="success"
            class="mr-4"
        >
            Заказать
        </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.wrapper{
    max-width: 700px;
    padding: 40px;
    margin: 0 auto;
    border: 3px solid rgb(73, 176, 85);
    border-radius: 30px;
}
.title{
    font-size: 25px;
    margin: 0 auto;
    max-width: 200px;
    margin-bottom: 10px;
}
.text{
    margin: 0 auto;
    max-width: 400px;
    margin-bottom: 40px;
}
@media print{
.wrapper{
    display: none;
}
}
</style>
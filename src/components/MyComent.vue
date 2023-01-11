<template>
    <div class="wrapper">
      <h3 class="title">Отзыв об услуге</h3>
      <v-form
            class="form"
        >
            <v-row>
                <v-col>
                    <v-text-field
                        :counter="10"
                        label="Ваш коментарий"
                        required
                    />
                </v-col>
            </v-row>
            <v-card
                class="mx-auto"
                max-width="1000"
                >
                <v-list>
                    <div class="coment__item">
                        <p><strong>Дима2</strong></p>
                        <p>Всем доброго дня, заказали уборку квартиры в данной компании. Приехали в назначенное время, все о чем обговаривали, было выполнено на 5. Осенью закажем уборку в загородном доме. Спасибо.</p>
                    </div>
                </v-list>
            </v-card>
        </v-form>
    </div>
</template>
  
<script>
export default {
    
}
</script>

<style scoped>
.wrapper{
    max-width: 1000px;
    margin: 0 auto;
}
.title{
    font-size: 25px;
    margin: 0 auto;
    max-width: 200px;
    margin-bottom: 10px;
}
.form{
    max-width: 1000px;
    margin: 40px auto;
}
.coment__item{
    margin: 10px 20px;
}
</style>
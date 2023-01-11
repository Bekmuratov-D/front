<template>
    <v-card
      class="mx-auto"
      max-width="344"
      variant="outlined"
    >
      <v-card-item>
        <div>
          <div class="text-overline mb-1">
            Бекмуратов Д
          </div>
          <div class="text-caption">Всем доброго дня, заказали уборку квартиры в данной компании. Приехали в назначенное время, все о чем обговаривали, было выполнено на 5. Осенью закажем уборку в загородном доме. Спасибо.</div>
        </div>
      </v-card-item>
      <rating/>
    </v-card>
</template>

<script>
import Rating from './Rating.vue'
  export default {
  components: { Rating },

  }
</script>
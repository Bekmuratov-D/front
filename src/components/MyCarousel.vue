<template>
    <v-container>
        <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows="hover"
            >
            <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
            >
                <v-sheet
                :color="colors[i]"
                height="100%"
                >
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">
                    {{ slide }} уборка
                    </div>
                </div>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
        ],
        slides: [
          'Генеральная',
          'Поддерживающая',
          'После ремонта',
          'Основная',
        ],
      }
    }
}
</script>

<style scoped>
</style>
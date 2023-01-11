<template>
    <div class="wrapper">
        <h1 class="servise_title">Виды уборки</h1>
        <p class="servise_text">Закажите уборку, остальное - наша забота.</p>
        <div class="news__items" > 
            <div class="news__item" v-for="n in allArticles" :key="n.id" @click="$router.push(`/services/${n.id}`)">
                <v-card
                class="mx-auto"
                color="grey-lighten-4"
                height="450px"
                >
                    <v-img
                    :aspect-ratio="16/16"
                    cover
                    :src="require(`@/img/${n.preview_image}`)"
                    >
                    </v-img>
                    <h3 class="title__card text-h5 mb-2">
                        {{n.name}}
                    </h3>
                    <v-card-text
                    class="pt-6"
                    style="position: relative;"
                    >
                    <div class="font-weight-light text-h6 mb-2">
                        {{n.price}}p
                    </div>
                    </v-card-text>
                    <action-button class="action_btn">
                        Заказать
                    </action-button>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ActionButton from "@/components/UI/ActionButton.vue";
export default {
    components: {
            ActionButton,
        },
    computed: mapGetters(["allArticles"]),
    methods: mapActions(['fetchPosts']),
    async mounted() {
        this.fetchPosts()
    }
    
}
</script>

<style scoped>
.wrapper{
    max-width: 1200px;
    margin: 0 auto;
}
    .news__items{
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    .news__item{
        margin: 10px;
        cursor: pointer;
        width: 250px;
        margin: 10px auto;
    }
    .servise_title{
        margin: 0 auto;
    }
</style>
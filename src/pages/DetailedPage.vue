<template>
    <div class="servise__items" > 
        <v-card
        class="mx-auto"
        color="grey-lighten-4"
        max-width="1000"
        
        >
            <v-img
            :aspect-ratio="16/9"
            cover
            :src="require(`@/img/${detailedPage.full_image}`)"
            >
            </v-img>
            <v-card-text
            class="pt-6"
            style="position: relative;"
            >
            <div class="font-weight-light text-grey text-h6 mb-2">
                {{detailedPage.date}}
            </div>
            <h3 class="text-h4 font-weight-light text-orange mb-2">
                {{detailedPage.name}}
            </h3>
            <div class="font-weight-light text-h6 mb-2">
                {{detailedPage.desc}}
            </div>
            </v-card-text>
        </v-card>
    </div>
    <action-form
    style="margin-bottom: 100px"
    />
    <div class="reviews">
        <my-reviews/>
        <my-reviews/>
        <my-reviews/>  
    </div>
    <div class="add-rev">
        <add-reviews/>
    </div>
</template>

<script>
import ActionForm from '@/components/ActionForm.vue'
import article from "../../public/article.json"
import MyReviews from '@/components/MyReviews.vue'
import AddReviews from '@/components/AddReviews.vue'
export default {
  components: { ActionForm, MyReviews, AddReviews },
    data(){
        return{
            detailedPage: article.filter(t => t.id == this.$route.params.id )[0]
        }
    }
}
</script>

<style scoped>
.servise__items{
    margin-bottom: 100px;
}    
.reviews{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 50px;
}
.add-rev{
    max-width: 600px;
    margin: 50px auto;
}
</style>
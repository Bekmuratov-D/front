<template>
    <v-container
        max-width="1400"
        class="wrapper"
    >
        <v-app-bar>
            <v-app-bar-title>
                <router-link to="/">
                <img src="	https://cleantime365.ru/wp-content/themes/cleantime_wewowo/img/svg/Cleaning_logo_cyr.svg" alt="logo" style="width:100px; height: 100px;">
                </router-link>
            </v-app-bar-title>
            <v-spacer/>

            <v-responsive
                class="mx-auto"
                max-width="344"
            >
                <v-text-field
                label="Search"
                hide-details="auto"
                ></v-text-field>
            </v-responsive>
            <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-spacer/>
            <v-btn>
                <router-link to="/">Главная</router-link>
            </v-btn>
            <v-btn>
                <router-link to="/services">Услуги</router-link>
            </v-btn>
            <v-btn class="login__btn" >
                <router-link to="/login">Войти</router-link>
            </v-btn>
            <v-btn>
                <router-link to="/user">
                    Бекмуратов
                </router-link>
            </v-btn>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.login__btn{
    background-color: rgb(79, 151, 81);
    color: white;
}
@media print{
.wrapper{
    display: none;
}
}
</style>
<template>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-textarea
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Ведите ваш отзыв"
        required
      ></v-textarea>
  
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Имя или название компании"
        required
      ></v-text-field>
  
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Сколько балов поставите"
        required
      ></v-select>
      <v-btn
        color="success"
        @click="resetValidation"
      >
        Отправить
      </v-btn>
    </v-form>
</template>


<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        '1',
        '2',
        '3',
        '4',
        '5',
      ],
      checkbox: false,
    }),

    methods: {
      async validate () {
        const { valid } = await this.$refs.form.validate()

        if (valid) alert('Form is valid')
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
</style>
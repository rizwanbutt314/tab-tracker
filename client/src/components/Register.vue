<template>

  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">

        </div>
          <input
            name='email'
            type='email'
            v-model='email'
            palceholder='Email'/>
          <br>
          <input
            name='password'
            type='password'
            v-model='password'
            palceholder='password'/>
          <br>
          <div class="err" v-html="error"/>
          <v-btn class="cyan" @click="register()">Register</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      } catch (e) {
        this.error = e.response.data.error
      }
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('Email has changed', value)
  //   }
  // },
  mounted () {
    // setTimeout(() => {
    //   this.email = 'rizwan'
    // }, 2000)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.err{
  color: red;
}
</style>

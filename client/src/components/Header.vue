<template>
    <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">
        <span class="home" @click="navigateTo({name: 'root'})">Tab Tracker</span>
      </v-toolbar-title>
      <!--TODO: Implement me later-->
      <!--<v-toolbar-items>-->
        <!--<v-btn flat dark>-->
          <!--Browser-->
        <!--</v-btn>-->
      <!--</v-toolbar-items>-->

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'login'})">
          Login
        </v-btn>
        <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'Register'})">
          Sign Up
        </v-btn>
        <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout({name: 'root'})">
          Log Out
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout(route){
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home{
  cursor: pointer;
}
</style>

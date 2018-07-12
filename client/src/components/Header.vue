<template>
    <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">Tab Tracker</v-toolbar-title>
      <!--TODO: Implement me later-->
      <!--<v-toolbar-items>-->
        <!--<v-btn flat dark>-->
          <!--Browser-->
        <!--</v-btn>-->
      <!--</v-toolbar-items>-->

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat dark @click="navigateTo({name: 'Register'})">
          Sign Up
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
    }
  }
}
</script>

<style scoped>

</style>

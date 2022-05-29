<template>
  <v-app class="background" :style="{background: $vuetify.theme.themes.light.background}">
    <drawerComponent  @click="openNav($event)"/>
   <navbarComponent/>

    <v-main  >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import navbarComponent from './components/navbarComponent';
import drawerComponent from './components/drawerComponent';
export default {
  name: 'App',

  components: {
    navbarComponent,
    drawerComponent,
  },

  data: () => ({
    //

  }),
};
</script>
<style>
/*body{*/
/*  font-family*/
/*}*/

</style>
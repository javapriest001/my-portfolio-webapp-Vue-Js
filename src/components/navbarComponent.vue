<template>
  <v-app-bar
      app
      color="#ECECFE"
      elevate-on-scroll
      elevation="6"
      :class="$vuetify.breakpoint.mdAndDown? '': ''"

  >
    <div class="d-flex align-center">
     <h2 class=" ms-5  logo_text_first logo_text">CYBERMATE<span class="text-muted">Pro</span></h2>
    </div>

    <v-spacer></v-spacer>

    <v-btn
    color="#060863"
    icon
    class="hidden-md-and-up"
    @click="drawNav"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-btn
        class="me-5 hidden-sm-and-down"
        v-for="item in navbarItems" :key="item.title"

        target="_blank"
        small
        text
    >
      <span class="mr-2 ">{{ item.title }}</span>
      <v-icon small color="#060863">{{ item.icon }}</v-icon>
    </v-btn>



  </v-app-bar>

<!--  <v-container>-->
<!--    <v-row class="text-center">-->
<!--      <v-col cols="12">-->
<!--        <v-img-->
<!--          :src="require('../assets/logo.svg')"-->
<!--          class="my-3"-->
<!--          contain-->
<!--          height="200"-->
<!--        />-->
<!--      </v-col>-->

<!--      <v-col class="mb-4">-->
<!--        <h1 class="display-2 font-weight-bold mb-3">-->
<!--          Welcome to Vuetify-->
<!--        </h1>-->

<!--        <p class="subheading font-weight-regular">-->
<!--          For help and collaboration with other Vuetify developers,-->
<!--          <br>please join our online-->
<!--          <a-->
<!--            href="https://community.vuetifyjs.com"-->
<!--            target="_blank"-->
<!--          >Discord Community</a>-->
<!--        </p>-->
<!--      </v-col>-->

<!--      <v-col-->
<!--        class="mb-5"-->
<!--        cols="12"-->
<!--      >-->
<!--        <h2 class="headline font-weight-bold mb-3">-->
<!--          What's next?-->
<!--        </h2>-->

<!--        <v-row justify="center">-->
<!--          <a-->
<!--            v-for="(next, i) in whatsNext"-->
<!--            :key="i"-->
<!--            :href="next.href"-->
<!--            class="subheading mx-3"-->
<!--            target="_blank"-->
<!--          >-->
<!--            {{ next.text }}-->
<!--          </a>-->
<!--        </v-row>-->
<!--      </v-col>-->

<!--      <v-col-->
<!--        class="mb-5"-->
<!--        cols="12"-->
<!--      >-->
<!--        <h2 class="headline font-weight-bold mb-3">-->
<!--          Important Links-->
<!--        </h2>-->

<!--        <v-row justify="center">-->
<!--          <a-->
<!--            v-for="(link, i) in importantLinks"-->
<!--            :key="i"-->
<!--            :href="link.href"-->
<!--            class="subheading mx-3"-->
<!--            target="_blank"-->
<!--          >-->
<!--            {{ link.text }}-->
<!--          </a>-->
<!--        </v-row>-->
<!--      </v-col>-->

<!--      <v-col-->
<!--        class="mb-5"-->
<!--        cols="12"-->
<!--      >-->
<!--        <h2 class="headline font-weight-bold mb-3">-->
<!--          Ecosystem-->
<!--        </h2>-->

<!--        <v-row justify="center">-->
<!--          <a-->
<!--            v-for="(eco, i) in ecosystem"-->
<!--            :key="i"-->
<!--            :href="eco.href"-->
<!--            class="subheading mx-3"-->
<!--            target="_blank"-->
<!--          >-->
<!--            {{ eco.text }}-->
<!--          </a>-->
<!--        </v-row>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--  </v-container>-->



</template>

<script>
import {bus} from "@/main";

export default {
    name: 'navbarComponent',

    data(){
      return{
        navbarItems:[
          {title: "Home", icon: "mdi-home"},
          {title: "About  ", icon: "mdi-face-man"},
          {title: "Blog" , icon: "mdi-newspaper-plus"},
          {title: "Projects" , icon: "mdi-folder-open-outline"},

        ],


      }
    },
    methods: {
      drawNav(){
        bus.$emit('toggleNav');
      }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,700;0,800;1,100;1,300;1,500;1,700&display=swap');
.logo_text_first{
  color: #060863;
}
.logo_text{
  font-size: 24px;
  font-weight: 800;
  font-family: 'Raleway', sans-serif;
}


</style>
<template>
<div>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="#ECECFE"
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
import {bus} from "@/main";
export default {
  name: "drawerComponent",
  data: ()=> ({
    drawer: false,
}),

  methods: {

  },
  created() {
    bus.$on('toggleNav',()=>{
      this.drawer= !this.drawer;
    })
  }

}
</script>

<style scoped>

</style>
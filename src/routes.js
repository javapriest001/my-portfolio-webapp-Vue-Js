import VueRouter from "vue-router"
import vue  from "vue";
import homeComponent from "./views/homeComponent.vue"

vue.use(VueRouter);

export default[
    {
        path: '/',
        component: homeComponent,
        name: 'Home'
    }
]

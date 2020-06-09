import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/home/Home';
import News from '@/views/home/news/News';
import Dynamic from '@/views/home/Dynamic';


Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/news',
    name:'News',
    component:News
  },
  {
    path:'/dynamic',
    name:'Dynamic',
    component:Dynamic
  }
];

const router = new VueRouter({
  routes
});

export default router;

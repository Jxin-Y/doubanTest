import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/home/Home';
import News from '@/views/home/news/News';
import Dynamic from '@/views/home/Dynamic';
import Douban_home from '@/views/douban/Douban_home';
import Film from '@/views/douban/Film';
import Recommend from '@/views/home/Recommend';
import Search from '@/views/home/Search';
import Novel from '@/views/douban/Novel';
import Music from '@/views/douban/Music';
import City from '@/views/douban/City';
import City_choice from '@/views/douban/City_choice';
import City_sort from '@/views/douban/City_sort';
import Book from '@/views/douban/Book';
import Teleplay from '@/views/douban/Teleplay';
import Group from '@/views/group/Group';
import Message from '@/views/home/Message';
import Chat from '@/views/home/Chat';
import My from '@/views/my/My';



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
  },
  {
    path:'/douban_home',
    name:'Douban_home',
    component:Douban_home
  },
  {
    path:'/film',
    name:'Film',
    component:Film
  },
  {
    path:'/recommend',
    name:'Recommend',
    component:Recommend
  },
  {
    path:'/search',
    name:'Search',
    component:Search
  },
  {
    path:'/novel',
    name:'Novel',
    component:Novel
  },
  {
    path:'/music',
    name:'Music',
    component:Music
  },
  {
    path:'/city',
    name:'City',
    component:City
  },
  {
    path:'/city_choice',
    name:'City_choice',
    component:City_choice
  },
  {
    path:'/city_sort',
    name:'City_sort',
    component:City_sort
  },
  {
    path:'/book',
    name:'Book',
    component:Book
  },
  {
    path:'/teleplay',
    name:'Teleply',
    component:Teleplay
  },
  {
    path:'/group',
    name:'Group',
    component:Group
  },
  {
    path:'/message',
    name:'Message',
    component:Message
  },
  {
    path:'/chat',
    name:'Chat',
    component:Chat
  },
  {
    path:'/my',
    name:'My',
    component:My
  }
];

const router = new VueRouter({
  routes
});

export default router;

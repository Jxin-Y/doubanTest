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
import Market from '@/views/market/Market';
import Bottom from '@/views/home/Bottom';
import Setting from '@/views/my/Setting';
import Music_classify from '@/views/douban/Music_classify';
import Music_classify_in from '@/views/douban/Music_classify_in';
import Myself from '@/views/my/Myself';
import Money from '@/views/my/Money';
import Money_ticket from '@/views/my/Money_ticket';
import Setting_number from '@/views/my/Setting_number';
import Push from '@/views/my/Push';
import Market_recommend from '@/views/market/Market_recommend';





Vue.use(VueRouter);

const routes = [
 
  {
    path:'/bottom',
    name:'Bottom',
    component:Bottom
  },
  {
    path: '/',
    name: 'Layout',
    meta: {title:'首页底部导航栏'},
    component: Bottom,
    redirect:'home',
    children:[
      {
    path:'/home',
    name:'Home',
    component:Home
    },
    {
    path:'/douban_home',
    name:'Douban_home',
    component:Douban_home
    },
    {
      path:'/group',
      name:'Group',
      component:Group
    },
    {
      path:'/market',
      name:'Market',
      component:Market
    },
    {
      path:'/my',
      name:'My',
      component:My
    }
    ]
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
    path:'/setting',
    name:'Setting',
    component:Setting
  },
  {
    path:'/music_classify',
    name:'Music_classify',
    component:Music_classify
  },
  {
    path:'/music_classify_in',
    name:'Music_classify_in',
    component:Music_classify_in
  },
  {
    path:'/myself',
    name:'Myself',
    component:Myself
  },
  {
    path:'/money',
    name:'Money',
    component:Money
  },
  {
    path:'/money_ticket',
    name:'Money_ticket',
    component:Money_ticket
  },
  {
    path:'/setting_number',
    name:'Setting_number',
    component:Setting_number
  },
  {
    path:'/push',
    name:'Push',
    component:Push
  },
  {
    path:'/market_recommend',
    name:'Market_recommend',
    component:Market_recommend
  }
  
  
];

const router = new VueRouter({
  routes
});

export default router;

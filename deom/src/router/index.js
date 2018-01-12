import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import AboutUs from '@/components/AboutUs'
import GuestRoomShow from '@/components/GuestRoomShow'
import BusinessPhilosophy from '@/components/BusinessPhilosophy'
import meetings from '@/components/meetings'
import ContactUs from '@/components/ContactUs'
import Product from '@/components/Product'
import AboutUs1 from '@/components/AboutUs1'
import AboutUs2 from '@/components/AboutUs2'
import AboutUs3 from '@/components/AboutUs3'
import Article from '@/components/Article'
import Article1 from '@/components/Article1'
import Article2 from '@/components/Article2'
import Article3 from '@/components/Article3'
import Article4 from '@/components/Article4'
import GuestRoomShow1 from '@/components/GuestRoomShow1'
import GuestRoomShow2 from '@/components/GuestRoomShow2'
import GuestRoomShow3 from '@/components/GuestRoomShow3'
import GuestRoomShow4 from '@/components/GuestRoomShow4'


Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      component: HelloWorld,
    },
    {
      path: '/HelloWorld',
      component: HelloWorld,
    },
    {
    	path:'/News',
    	component:News
    },
    {
    	path:'/AboutUs',
    	component:AboutUs
    },
    {
    	path:'/GuestRoomShow',
    	component:GuestRoomShow
    },
    {
    	path:'/BusinessPhilosophy',
    	component:BusinessPhilosophy
    },
    {
    	path:'/meetings',
    	component:meetings
    },
    {
    	path:'/ContactUs',
    	component:ContactUs
    },
    {
    	path:'/Product',
    	component:Product
    },
    {
    	path:'/AboutUs1',
    	component:AboutUs1
    },
    {
    	path:'/AboutUs2',
    	component:AboutUs2
    },
    {
    	path:'/AboutUs3',
    	component:AboutUs3
    },
    {
    	path:'/Article',
    	component:Article
    },
    {
    	path:'/Article1',
    	component:Article1
    },
    {
    	path:'/Article2',
    	component:Article2
    },
    {
    	path:'/Article3',
    	component:Article3
    },
    {
    	path:'/GuestRoomShow1',
    	component:GuestRoomShow1
    },
    {
    	path:'/GuestRoomShow2',
    	component:GuestRoomShow2
    },
    {
    	path:'/GuestRoomShow3',
    	component:GuestRoomShow3
    },
    {
    	path:'/GuestRoomShow4',
    	component:GuestRoomShow4
    }
  ]
})

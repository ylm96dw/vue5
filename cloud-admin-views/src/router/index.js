import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const components= {
  login:()=>import('@/views/login/login'),
  layout:() =>import('@/views/layout/layout'),
  index:() =>import('@/views/index/index'),
  users:() =>import('@/views/users/index'),
  addAdmin:()=>import('@/views/addAdmin/addAdmin'),
  userEdit:()=>import('@/views/userEdit/userEdit'),
  viewdetail:()=>import('@/views/viewdetail/viewdetail'),
  booklist:()=>import('@/views/book/booklist'),
  bookEdit:()=>import('@/views/book/bookEdit'),
  addbook:()=>import('@/views/book/addbook'),
  sortlist:()=>import('@/views/sort/sortlist'),
  addsort:()=>import('@/views/sort/addsort'),
  changesort:()=>import('@/views/sort/changesort'),
  details:()=>import('@/views/sort/details'),
  addSwiper:()=>import('@/views/swiper/addSwiper'),
  swiperlist:()=>import('@/views/swiper/swiperlist'),
  editSwiper:()=>import('@/views/swiper/editSwiper')
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
       path: '/login',
       component:components.login
    },
    {
      path:'/layout',
      component:components.layout,
      redirect:'/layout/index',
      meta:{
        title: '首页'
      },
      children:[
        {
          path:'index',
          component:components.index
        },
        {
          path:'users',
          meta:{
            title:'用户管理'
          },
          component:components.users
        },
        {
          path:'addAdmin',
          // meta:{
          //   title:'添加管理员'
          // },
          component:components.addAdmin
        },
        {
          path:'userEdit',
          meta:{
            title:'修改用户'
          },
          component:components.userEdit
        },
        {
          path:'viewdetail',
          meta:{
            title:'查看详情'
          },
          component:components.viewdetail
        },
        {
          path: 'booklist',
          meta:{
            title:'书籍列表'
          },
          component:components.booklist,

        },
        {
          path:'bookEdit',
          meta:{
            title:'图书编辑'
          },
          component:components.bookEdit
        },
        {
          path:'addbook',
          meta:{
            title:'添加图书'
          },
          component:components.addbook
        },
        {
          path:'sortlist',
          meta:{
            title:'列表页面'
          },
          component:components.sortlist
        },
        {
          path:'addsort',
          meta:{
            title:'添加分类列表'
          },
          component:components.addsort
        },
        {
          path:'changesort',
          meta:{
            title:'修改列表'
          },
          component:components.changesort
        },
        {
          path:'details',
          meta:{
            title:'列表详情'
          },
          component:components.details
        },
        {
          path:'addSwiper',
          meta:{
            title:'添加轮播图'
          },
          component:components.addSwiper
        },
        {
          path:'swiperlist',
          meta:{
            title:'轮播图列表'
          },
          component:components.swiperlist
        },
        {
          path:'editSwiper',
          meta:{
            title:'编辑轮播图'
          },
          component:components.editSwiper
        }
      ]
    },


  ]
})

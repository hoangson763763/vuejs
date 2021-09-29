import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
import Register from '../components/Register.vue'
// import App from '../App.vue'
import Home from '../components/Home.vue'
// import ProductList from '../components/Product/ProductList.vue'
// import Category from '../components/Product/CategoryList.vue'

export const routes = [
    {path : '/admin/',component : Index, name:'admin'},
    // {path : '/admin/danh-sach-san-pham',component : ProductList, name:'productList'},
    // {path : '/admin/danh-sach-danh-muc-san-pham',component : Category, name:'categoryList'},
    // PARAM ROUTE
    
    {path : '/login',component : Login, name:'login'},
    {path : '/register',component : Register, name:'register'},
    
    {path : '/',component : Home, name:'home'},
  ]



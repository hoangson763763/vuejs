<template>
  <div style="height: 100%;">
    <header>
        <div class="brand">
          <h2>Admin</h2>
        </div>
        <div class="head-left">
          <div class="nav-menu">
            <ul>
                <li class="show-sidebar"><i class="fas fa-bars"></i></li>
                <li><i class="fas fa-archive"></i>
                    <span>8</span>
                </li>
                <li><i class="far fa-envelope"></i>
                    <span style="background: #ff6c60;">3</span>
                </li>
                <li><i class="far fa-bell"></i>
                    <span style="background:#FCB322">2</span>
                </li>
            </ul>
          </div>
          <div class="user">
            <div class="search">
              <form>
                  <button>
                      <i class="fas fa-search"></i>
                  </button>
                  <input type="" name="" placeholder="Search">
              </form>
            </div>
            <div class="info-user">
                <div class="username">
                    <img src="image/2.png" alt="">
                    <p>{{user.name}}</p>
                    <b class="caret"></b>
                </div>
                <div class="menu-user">
                    <ul>
                        <li><a href=""><i class="fas fa-id-card"></i>Profile</a></li>
                        <li><a href=""><i class="fas fa-cog"></i>Setting</a></li>
                        <li><a href=""><i class="fas fa-sign-out-alt"></i>Logout</a></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
    </header>
    <div class="wrapper">
      <SideBar @setComponent="selectedComponent = $event"></SideBar>
      <div id="main" class="main" >
        <component :is="selectedComponent" @setComponent="selectedComponent = $event"></component>
      </div>
      

    </div>
    <div class="footer">
      <div>
        Copy right by Hoàng Sơn
      </div>
    </div>
  </div>
</template>

<script>
  import RequestApi from '../core/configRequest'
  import SideBar from './SideBar.vue'
  import ProductList from './MainComponent/ProductList.vue'
  import CategoryList from './MainComponent/CategoryList.vue'
  import ParentCategoryList from './MainComponent/ParentCategoryList.vue'
  import AddParentCategory from './MainComponent/AddParentCategory.vue'
  import AddCategory from './MainComponent/AddCategory.vue'
  import AddProduct from './MainComponent/AddProduct.vue'
  
  export default{
    name : 'Index',
    components : {
      SideBar,
      ProductList,
      CategoryList,
      ParentCategoryList,
      AddParentCategory,
      AddCategory,
      AddProduct
    },
    data(){
      return {
        token : '',
        user : {},
        product : {},
        selectedComponent : 'ParentCategoryList'
      }
    },
    created(){
      this.checkLoginUser();
    },
    mounted(){
      

    },
    methods : {

      checkLoginUser : function(){
        let token = window.localStorage.getItem('token')

        // axios.get('http://127.0.0.1:8000/api/user',
        //     { headers: { Authorization: 'Bearer ' +  token } }
        // )
        RequestApi.get('user',token)
        .then(response => {
          if(response.data.level != 1)
          {
             this.$router.push({ name: 'home' })
          }
          else{
            this.user = response.data
          }
        })
        .catch(() => {
          this.$router.push({ name: 'login' })
        })
      },
      
    },
  }
</script>
<style scoped="">
  html,body{
    background-image: url("/image/bg.jpg");
  }
  
  .main{
    overflow: scroll;
    width: 100%;
   
  }
</style>
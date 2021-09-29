<template>

  <div class="login container">
    <!-- <div class="popup-warning"><i class="fas fa-check-circle"></i>Errors</div> -->
    <div class="title">
      <p>ONLINE LOGIN FORM</p>

    </div>
    
    <form action="" method="" @submit.prevent @keyup.enter="login()">
      <label>LOGIN QUICK</label>
      <div class="fix-input">
        <input type="email" name="email" v-model="users.email" placeholder="E-mail" >
      </div>
      <div v-if="errors.email"  class="error-respone">
        <p >{{errors.email[0]}}</p>
      </div>
      <div class="fix-input">
        <input type="password" name="password" v-model="users.password" placeholder="Password">
      </div>
      <div v-if="errors.password"  class="error-respone">
        <p >{{errors.password[0]}}</p>
      </div>
      <div v-if="message"  class="error-respone">
        <p>{{message}}</p>
      </div>
      <div class="link-register">
        <p>
          <router-link to="/register">Bạn chưa có tài khoản?</router-link>
        </p>
        
      </div>
      <div>
      </div>  
      <div class="submit"> 
        <button @click="login()">Login</button>
      </div>
    </form>
    <div class="copy-r">
      <p>© 2017 Online Login Form. All rights reserved | Design by W3layouts</p>
    </div>
  </div>
</template>
<script>
  // import axios from 'axios'
  import $ from 'jquery'
  import RequestApi from '../core/configRequest'
  export default {
    name : 'Login',
    data(){
      return {
        users : {
          email : '',
          password : ''
        },
        errors : {},
        message : '',

      }
    },
    beforeCreate(){
      $(document).ready(function(){
       
      })
    },
    mounted(){
      $(document).ready(function(){
        if($('.error-respone').css('display') == 'block'){
          setTimeout(function(){
            $('.error-respone').fadeOut(2000);
          },5000)
        }
      })
      
    },
    created(){
      this.checkLoginUser()
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
            this.$router.push({ name: 'admin' })
          }
        })
        .catch(() => {
          this.$router.push({ name: 'login' })
        })
      },
      login : function(){
        this.errors = {}
        let param = {
          email : this.users.email,
          password : this.users.password
        }
        // axios.post('http://127.0.0.1:8000/api/login',param)
        RequestApi.post('login',param)
        .then( (response) => {
          if(response.data.message){
            this.message = response.data.message
          }
          else
          {
            if(response.data.level != 1){
              window.localStorage.setItem('token',response.data.token)
              this.$router.push({ name: 'home' })
            }
            else{
              window.localStorage.setItem('token',response.data.token)
              this.$router.push({ name: 'admin' })
            }
          }
        })
        .catch(error => {
          this.errors = error.response.data.errors
        })
      },

    },
  }


</script>

<style scoped="">
* {
margin: 0;
padding: 0; }

.error-respone{
  
  margin: 0;
  text-align: center;
}

.error-respone p{
  width: 60%;
  padding: 5px 0;
  margin: 0 auto;
  color: red;
}
.fix-input{
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 10px 0;
}

#app .popup-warning{
  position: absolute;
  display: block;
  top: 10px;
  right: 20px;
  z-index: 9;
  padding: 10px 14px;
  font-weight: 500;
  color: #fff;
  border-radius: 4px;
  font-size: 18px;
}

#app  .popup-warning i{
    margin-right: 10px;
  }
body {
  background-image: url('/image/bg_login.jpg');
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  background-attachment: fixed;
  background-position: center;
  text-align: center;
  height: 100%;
  font-family: 'Open Sans', sans-serif; }
body .container {
color: #fff;
width: 40%;
margin: auto; }
body .container .title {
  text-transform: uppercase;
  font-size: 40px;
  margin-bottom: 10%;
  letter-spacing: 8px;
  text-align: center;
  margin-top: 35px; }
  body .container form {
    text-align: center;
  }
body .container form .link-register p {
  width: 60%;
  margin: auto;
  text-align: right; }
body .container form .link-register p a {
color: #fff;
text-decoration: none; }
body .container form label {
  font-size: 1.2em;
  color: #fff;
  letter-spacing: 4px;
  margin-bottom: 1.5em;
  text-transform: uppercase; }
body .container form div input {
  width: 60%;
  border-radius: 100px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  outline: none;
   }
body .container form div button {
  margin-top: 15px;
  width: 25%;
  border-radius: 100px;
  padding: 5px 10px;
  outline: none;
  background: #ea2858;
  color: #fff;
  border: none;
  transition: 0.3s; }
body .container form div button:hover {
background: #fff;
color: #000;
transition: 0.3s; }
body .container .copy-r {
  text-align: center;
  margin-top: 200px; }

@media only screen and (max-width: 600px) {
body .login {
  width: 100%; }
body .login .title {
  margin-top: 10px;
  font-size: 20px; }
body .login form div input {
  width: 80%; } }
@media only screen and (min-width: 601px) and (max-width: 1200px) {
body .login {
width: 60%; }
body .login .title {
  margin-top: 10px;
  font-size: 20px; }
body .login form div input {
  width: 60%; } }

/*# sourceMappingURL=login.css.map */

</style>
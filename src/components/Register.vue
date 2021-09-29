<template>
  <div class="login container">
    <div class="title">
      <p>ONLINE LOGIN FORM</p>
    </div>
    <form @submit.prevent>
      <label>Register QUICK</label>
      <div>
        <input type="email" name="email" placeholder="E-mail">
      </div>
      <div>
        <input type="text" name="username" placeholder="Username">
      </div>
      <div>
        <input type="text" name="phone" placeholder="Phone Number">
      </div>
      <div>
        <input type="password" name="password" placeholder="Password">
      </div>
      <div>
        <input type="password" name="re-pass" placeholder="Re-enter password">
      </div>
      <div class="submit">
        <router-link :to="{ name : 'login'}">Login</router-link> 
        <button>Register</button> 
      </div>
    </form>
    <div class="copy-r">
      <p>© 2017 Online Login Form. All rights reserved | Design by W3layouts</p>
    </div>
  </div>
</template>
<script>
  export default {
    
  }
</script>

<style scoped>
  * {
margin: 0;
padding: 0; }

body {
  background: url("/image/bg.jpg") no-repeat center top;
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
  margin-bottom: 20px; }
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
.submit button{
  margin-right: 20px;
}

.submit a{
  margin-right: 20px;
  display: inline-block;
  margin-top: 15px;
  width: 25%;
  border-radius: 100px;
  padding: 5px 10px;
  outline: none;
  background: #ea2858;
  color: #fff;
  border: none;
  transition: 0.3s;
  text-decoration: none;
}

.submit a:hover{
  background: #fff;
  color: #000;
  transition: 0.3s;
}

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
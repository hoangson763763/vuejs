<template>
  <div>
    This is page Home
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    name : 'Home',
    data(){
      return {

      }
    },
    created(){
      this.checkLoginUser()
    },
    methods : {
      checkLoginUser : function(){
            let token = window.localStorage.getItem('token')

            axios.get('http://127.0.0.1:8000/api/user',
                { headers: { Authorization: 'Bearer ' +  token } }
            )
            .then(response => {
              console.log(response)
            })
            .catch(() => {
              this.$router.push({ name: 'login' })
            })
      },
    }
  }
</script>
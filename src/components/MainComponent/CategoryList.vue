<template>
  <div class="table-agile-info">
    <div class="add-menu-btn">
        <div>
            <h2>List Category</h2>
        </div>
        <div style="cursor:pointer;">
           <a @click="selectedComponent = $emit('setComponent','AddCategory')">Add Category</a>
        </div>
    </div>
    <div  class="add-menu-btn fix" style="justify-content: flex-start;">
        <div style="cursor: pointer;" @click="checkAll(1)">
           <a>CheckAll</a>
        </div>
        <div style="cursor: pointer;" @click="checkAll(0)">
           <a>UncheckAll</a>
        </div>
        <div style="cursor: pointer;">
           <a>Delete</a>
        </div>
    </div>
    <table class="table table-striped display">
      <thead>
        <tr>
          <th scope="col" style="width: 60px;"> </th>
          <th scope="col">Name</th>
          <th scope="col">Code</th>
          <th scope="col">Parent</th>
          <th scope="col">Code Parent</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row"><input type="checkbox" v-model="category.checked"></th>
          <td >{{category.name}}</td>
          <td >{{category.code}}</td>
          <td>{{category.parent.name}}</td>
          <th scope="row">{{category.parent.code}}</th>
          <td><i class="fas fa-pencil-alt"></i></td>
          <td><i class="far fa-trash-alt"></i></td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name : 'Main',
    data(){
      return {
        categories : {
          
        }
      }
    },
    created(){
      this.getData();
    },
    methods : {
      checkAll : function(flag){
        this.categories.forEach(item => {
          item.checked = flag
          
        })
        console.log('ok')
      },
      getData : function(){
        axios.get('http://127.0.0.1:8000/api/category/show')
          .then( response => {
            this.categories = response.data
          })
          .catch( () => {

          })
      }
    }
  }
</script>
<style scoped>
  @media only screen and (max-width: 992px){
    .main{
      overflow: scroll;
      width: 100%;
    }
  }
  th,td{
    text-align: center;
    vertical-align: middle ;
    padding: 20px 0;
  }
  .table{
    border: 1px solid #ccc;
  }
  .edit{
    display: block;
    padding: 2px 10px;
    background: yellow;
    border: 1px solid #333;
    border-radius: 4px;
    color: #000;
    text-align: center;
    margin-bottom: 2px;
  }
  .delete{
    text-align: center;
    display: block;
    padding: 2px 10px;
    border-radius: 4px;
    border: 1px solid #333;
    background: red;
    color: #fff;
  }
  .fix div{
    margin-right: 10px ;
  }
  
</style>

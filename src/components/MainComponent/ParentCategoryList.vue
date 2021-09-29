<template>
  <div class="table-agile-info">
    <div class="add-menu-btn">
        <div>
            <h2>List Parent Category</h2>
        </div>
        <div style="cursor:pointer;">
           <a @click="$emit('setComponent','AddParentCategory')">Add Parent Category</a>
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
          <th scope="">ID</th>
          <th scope="">Name</th>
          <th scope="">Code</th>
          <th scope="">Slug</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="parent in parents" :key="parent.id">
          <th scope="row"><input type="checkbox" v-model="parent.checked"></th>
          <td >{{parent.id}}</td>
          <td >{{parent.name}}</td>
          <td >{{parent.code}}</td>
          <td>{{parent.slug}}</td>
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
        parents : {
          
        }
      }
    },
    created(){
      axios.get('http://127.0.0.1:8000/api/parent-category/show')
      .then( response => {

        this.parents = response.data
      })
      .catch( () => {

      })
    },
    methods : {
      checkAll : function(flag){
        this.parents.forEach(item => {
          item.checked = flag
          
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
  i{

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

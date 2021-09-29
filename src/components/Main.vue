<template>
	<div id="main" class="main" >
    <!-- <div class="table-agile-info">
      <div class="add-menu-btn">
          <div>
              <h2>List Product</h2>
          </div>
          <div>
             <a>Add Product</a>
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
            <th scope="col"> </th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Category Name</th>
            <th scope="col">Discount</th>
            <th scope="col">Feauture Image</th>
            <th scope="col">Add image</th>
            <th scope="col">List Image Product</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <th scope="row"><input type="checkbox" v-model="product.checked"></th>
            <td >{{product.code}}</td>
            <td >{{product.name}}</td>
            <td>{{product.category.name}}</td>
            <th scope="row">{{product.discount}}</th>
            <td>Image</td>
            <td><span>Add Image</span></td>
            <td>List Image</td>
            <td><a href="" class="edit">Edit</a> <a class="delete"> Delete</a></td>
          </tr>
          
        </tbody>
      </table>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
	export default {
		name : 'Main',
    data(){
      return {
        products : {
          
        }
      }
    },
    created(){
      axios.get('http://127.0.0.1:8000/api/product')
      .then( response => {
        this.products = response.data
      })
      .catch( () => {

      })
    },
    methods : {
      checkAll : function(flag){
        this.products.forEach(item => {
          item.checked = flag
          
        })
        console.log('ok')
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
    text-align: justify;
    vertical-align: middle ;
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
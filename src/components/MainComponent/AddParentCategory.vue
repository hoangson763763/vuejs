<template>
	<div class="table-agile-info">
    <div class="add-menu-btn">
        <h2>Add Parent Category</h2>
        <a>Parent Category List</a>
    </div>
    <form @submit.prevent>   	
        <div class="form-group">
            <label for="exampleFormControlInput1">Parent Category Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" name="name" v-model="parents.name">         
        </div>

        <div class="form-group">
            <label for="exampleFormControlInput1">Code Parent Category</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" name="code" v-model="parents.code">          
        </div>
    
        <button type="submit" class="btn btn-primary" @click="AddParentCategory()">Submit</button>	
    </form> 
</div>
</template>
<script>
import RequestApi from './core/configRequest'

export default{
    data : function(){
        return {
            parents : {
                name : '',
                code : '',
            }
        }
    },
    methods : {
        AddParentCategory : function(){
            RequestApi.post('parent-category/post')
        }
    }
}
</script>
<style>
	
</style>
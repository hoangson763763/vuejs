<template>
	<div class="side-bar">
        <ul >
            <li><router-link :to="{name : 'admin'}"><i class="fas fa-tachometer-alt"></i>Dashboard</router-link></li>
            <li><a href="javascript:;"><i class="fab fa-symfony"></i>Parent Category</a>
                <span class="dcjq-icon"></span>
                <ul class="sub-menu">
                    <li @click="selectedComponent = $emit('setComponent','ParentCategoryList')"><a>List Parent Category</a></li>
                    
                    <li @click="selectedComponent = $emit('setComponent','AddParentCategory')"><a>Add Parent Category</a></li>
                </ul>
            </li>
            <li><a href="javascript:;"><i class="fas fa-book"></i>Category</a>
                <span class="dcjq-icon"></span>
                <ul class="sub-menu">
                    <li @click="selectedComponent = $emit('setComponent','CategoryList')"><a>List Category</a></li>
                    <li @click="selectedComponent = $emit('setComponent','AddCategory')"><a>Add Category</a></li>
                </ul>
            </li>
            <li><a href="javascript:;"><i class="fab fa-symfony"></i>Product</a>
                <span class="dcjq-icon"></span>
                <ul class="sub-menu">
                    <li @click="selectedComponent = $emit('setComponent','ProductList')"><a>List Product</a></li>
                    <li><a @click="$emit('setComponent','AddProduct')">Add Product</a></li>
                </ul>
            </li>
            
           
        </ul>
      </div>
</template>
<script>
	export default {
		name : 'SideBar',
        data : function(){
            return {
                selectedComponent : ''
            }
        },
        
	}
</script>
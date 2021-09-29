<template>
  <div class="table-agile-info">
      <div class="add-menu-btn">
          <h2>Add Product</h2>
          <a >Product List</a>
      </div>
      
      <form  enctype="multipart/form-data">
        
          <div class="form-group">
              <label for="name">Product Name</label>
              <input type="text" class="form-control" id="name" name="name" >
          </div>
          <div class="form-group">
              <label for="code">Product Code</label>
              <input type="text" class="form-control" id="code" name="code" >
          </div>
          <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title" name="title" >
          </div>
          <div class="form-group">
              <label for="color">Color</label>
              <input type="text" class="form-control" id="color" name="color" >
          </div>
          <div class="form-group">
              <label for="size">Size</label>
              <input type="text" class="form-control" id="size" name="size" >
          </div>
          <div class="form-group">
              <label for="cate">Category</label>
              <select name="cate" class="form-control" id="cate">
                  <option value="">Chọn danh mục cho sản phẩm</option>
                  <option></option>
              </select>
          </div>
          
          <div class="form-group">
              <label for="price">Price</label>
              <input type="number" class="form-control" id="price" name="price" >
          </div>
          <div class="form-group">
              <label for="quantity">Quantity</label>
              <input type="number" class="form-control" id="quantity" name="quantity" >
          </div>
          <div class="form-group">
              <label for="discount">Discount</label>
              <input type="text" class="form-control" id="discount" name="discount" >
          </div>
          <div class="form-group">
              <label for="feature_image">Feature Image</label>
              <input type="file" class="form-control" id="feature_image" name="feature_image" >
          </div>
          <div class="form-group">
              <label for="special_image">Special Image</label>
              <input type="file" class="form-control" id="special_image" name="special_image" >
          </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" rows="2" id="description" name="description">

            </textarea>
        </div>
          <div class="form-group">
              <label for="content">Content</label>
              <textarea class="form-control" id=" content" rows="10" name="content">

              </textarea>
              
          </div>
          <button type="submit" class="btn btn-primary">Submit</button> 
      </form> 
  </div>
</template>
<script>
  
</script>
<style>
  
</style>
<template>
    <div class="table-agile-info">
    <div class="add-menu-btn">
        <h2>Add Category</h2>
        <a>Category List</a>
    </div>
    <form>
        
        <div class="form-group">
            <label for="exampleFormControlInput1">Category Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" name="name"> 
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">Category Code</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" name="code">        
        </div>
        <div class="form-group">
                <label for="exampleFormControlInput1">Parent Category</label>
                <select name="parent" class="form-control" id="exampleFormControlSelect2">
                    <option></option>
                </select>
                <!-- @error('cate')
                    <p style="margin-top: 10px;color:red">{{$errors->first('cate')}}</p>
                @enderror -->
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>   
    </form> 
</div>
</template>

<script>
    
</script>

<style>
    
</style>
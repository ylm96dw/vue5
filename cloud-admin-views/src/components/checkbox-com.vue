<!--封装了一多选框-->

<template>
  <label class="checkbox-com">
    <input type="checkbox" class="checkbox-com-input" v-model="currentValue" value="this">
    <div class="box-wrap"></div>
  </label>
</template>

<script>
export default {
  props:{
    value:{
      type:[String,Number]
    }
  },
  data(){
    return{
      currentValue:this.value
    }
  },
  watch:{
    currentValue(newValue){
      this.$emit('input',newValue)
      this.$emit('change',newValue)
    }
  },
  value(){
    this.currentValue = this.value
  }
}
</script>

<style>
.checkbox-com{

  width: 50px;
  height: 50px;
  display: inline-block;
  border: 1px solid #a1a1a1;
  border-radius: 4px;
}
.box-wrap{
  transform: scale(0);
  position: relative;
  display: inline-block;
  width:100%;
  height: 100%
}
.checkbox-com-input:checked + .box-wrap{
  transform: scale(1);
  transition: transform .2s ease;
  background: #4091ff
}
.checkbox-com-input:checked + .box-wrap::after{
  content: '';
  position: absolute;
  left: 50%;
  top: 38%;
  display: block;
  /* width: 0;
  height: 0; */
  /* border: 20px solid transparent; */
  /* border-top:20px solid transparent;
  border-right: 40px solid transparent; */
  width: 30px;
  height: 14px;
  border-left: 4px solid #fff;
  border-bottom: 4px solid #fff;
  transform:translate(-50%,-50%) rotate(-45deg)
}
.checkbox-com-input{
  display: none
}
</style>


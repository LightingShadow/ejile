<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <router-link class='tab-item' to='/goods'>
      商品
     </router-link>
      <router-link class='tab-item' to='/ratings'>
      评论
     </router-link>
      <router-link class='tab-item' to='/seller'>
      商家
     </router-link>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import header from './components/header/header';
const ERR_OK = 0;
export default {

  data(){
    return {
      seller:{},

    }
  },

  created(){
    this.$http.get('http://localhost:3000/api/seller').then((response)=>{
       let data=response.body.seller;
       let errno=response.body.errno;
       if(errno===ERR_OK){
         this.seller=data;
         console.log(this.seller);
       }
    })
  },

  components: {
    'v-header':header
  }
};
</script>

<style lang="stylus" scoped>
@import "./common/stylus/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      &>a
        font-size: 14px
        color: rgb(77, 85, 93)
      &.active
          color: rgb(240, 20, 20)
</style>


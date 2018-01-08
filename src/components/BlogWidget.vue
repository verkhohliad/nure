<template>
  <div class="blog-news">
    <h2>Новое в блоге</h2>
    <div class="post" v-for="item in items" :key="item.id">
      <div class="date">
        <time>{{ item.date }}</time>
     <h4> <a href="#">{{ item.title }}</a></h4>
      </div>
   
      <div class="description">
       
        <p> {{ item.description }} </p> 
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'BlogWidget',
    props: {
      info: Array
    },
    data: function () {
      return {}
    },
    created: function () {
      this.items = this.info;
    }
  }
</script>

<style scoped>


  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #05384d;
    text-decoration:none;
  }

  a:hover{
    text-decoration:underline;
    color:#032735;
  }

   time { 
        font-size: 20px;
    background: #f0f0f0;
    padding: 7px;
    margin: 0px 16px 0px 0px;

     }
    
     .blog-news h2 {
    display: block;
    background: #05384d;
    color: #fff;
    margin: 0;
    padding: 10px;

  }

.blog-news h4{
  font-size:19px;
  padding-top:11px;
  font-weight: bold;
}
.date{
  padding:7px 7px 7px 0px;
  width:90%;
  display:flex;
}
.description{
  text-align: start;
    width: 57%;
    display: inline-flex;
}
.blog-news{
  margin-left:10px;
}


</style>


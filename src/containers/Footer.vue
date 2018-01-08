<template>
  <v-footer class="test">
  
    

    <div id="footer_menu">
      <div>
        <h4>Свяжитесь с нами</h4>

    <ul>
      <li>
        <i class="material-icons" id="first">place</i>
        <span>
          <a href="place">     Kharkov,Ukraine</a>
        </span>
         </li>
      
      
      <li>
        <i class="material-icons" id="second">mail_outline</i>
        <span>
          <a href="mailto:"> nure@nure.ua</a>
        </span>
         </li>
 <li>
        <i class="material-icons" id="third">phone</i>
        <span>
         <a href="tel:0657594"> 0570657594</a>
        </span>
         </li>


      
    </ul>
    </div>
    <div>
      <h4 id="menu2">Меню 2</h4>
    <ul>
      <li>  </li>
      <li> </li>
      <li> </li>
    </ul>
    </div>


    <div>
      <h4 id="menu3">Меню 3</h4>
    <ul>
      <li>vfdsgrrg </li>
      <li> dfdsf</li>
      <li>dfsdfrf </li>
    </ul>

    </div>
</div>
   


   
  </v-footer>
  </div>
</template>

<script>



  export default {
    name: 'Footer',
    data: function () {
      return {}
    },
    created: function () {

    },
    methods: {}
  }
</script>

<style scoped>

#footer_menu h4{
  padding: 2px;
  border-bottom: 1px solid white;

}

.material-icons{
  color: white;

}

#second{
  padding-right: 10px;

}


#third{
padding-right: 40px;
}
#footer_menu #menu2{
  padding: 2px 60px;
}
#footer_menu #menu3{
  padding: 2px 60px;
}
span a{
  color: white;
}
li{
  width: 100%;
  list-style:none;
}
li i{
  width: 20%;
}
  .test {
    height:100%;
    background: #05384d !important;
    color: #fff;

  }

  #footer_menu {
    margin: 0 auto;
    font-size: 15px;
    flex-wrap: wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 85%;

}

.copy{
  width: 100%;
  display: inline-block;
}
</style>


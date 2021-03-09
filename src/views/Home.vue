<template>
  <div>
    <h4>Featured Catalog {{ new Date().toLocaleString() }}</h4>
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductList from "../components/mockDataComponent.vue"
export default {
  name: 'Home',
  components: {
    ProductList
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.bookName.toLowerCase());
    }
  },
}
</script>

<style scoped>

form {
  display: table;
  width: 100%;
}

h1{
  font-size: 19px;
  padding-left: 400px;
  padding-right: 400px;
}

h3 {

  font-family:Khula;
  font-size:4em;
  text-align:center;
  height:200px;
  width:1100px;
  display:block;
  position:absolute;
  color:white;
  top:-200px;
  bottom:0;
  left:-300px;
  right:-300px;
  margin:auto;

}
h1 {

  /*font-family:Khula;*/
  /*top:3900px;*/
  padding-top: 220px;
  padding-left:-300px;
  padding-right:-300px;
}

p {
  color: white;
}

h4 {
  font-family:Khula;
  font-size:2.3em;
  color:white;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  h4 {
    /*top:2px;*/
    font-family:Khula;
    font-size:0.8em;
    color:white;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  h4 {
    font-family:Khula;
    font-size:1em;
    color:white;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  h4 {
    font-family:Khula;
    font-size:2.3em;
    color:white;
  }
}


</style>

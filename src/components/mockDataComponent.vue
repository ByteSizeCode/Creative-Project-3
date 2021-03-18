<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="(product, index) in products" :key="product.id">

<!--        Stagger every other book-->
<!--        <li v-for="index in (product.id % 2)" :key="index">-->
<!--          <br><br>-->
<!--        </li>-->

        <div class="info">
          <h1>{{ product.bookName }}</h1>
          <p> By {{ product.author }}</p>
          <button @click="deleteEvent(index)">Remove</button>
        </div>
        <div class="image">
          <img :src="'/books/'+product.image">
        </div>
        <div class="price">
          <h2>{{product.price}}</h2>
        </div>


        <button @click="showEditField = !showEditField">Edit</button>
        <div v-if="showEditField === true">
          <p>Title</p> <textarea v-model="product.bookName">
            </textarea>
          <p>Author</p> <textarea v-model="product.author">
            </textarea>
          <p>Price</p> <textarea v-model="product.price">
            </textarea>
          <p>Description</p> <textarea v-model="product.description">
            </textarea>
        </div>

        <p>Description:</p>
        <div class="price">
          <h6>{{product.description}}</h6>
        </div>
        <span class="line"></span>
      </div>



    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',

  data() {
    return {
      showEditField: false,
    }
  },
  props: {
    products: Array
  },
  methods: {
    deleteEvent: function(key) {
      // this.$delete(this.products, 1)
      let copyArr = this.products
      this.products = []
      this.$delete(copyArr, key);
      this.products = copyArr

      // this.products.splice(this.products.indexOf(key),1);
      // // this.$delete(this.products, key);
      // console.log(key)
      // this.products = []
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
  border-radius:10px;
  transform-style: preserve-3d;
  box-shadow: 5px 5px 0px #999;
  padding: 5px;
}

img:hover {
  border: solid 1px #CCC;
  box-shadow: 1px 1px 1px #999;
  padding: 5px;
  transform: scale(1.1)
}

/*img:hover{ position: relative;*/
/*  top: 50px;*/
/*  left:30px;*/
/*  }*/

img:hover{
  /*position: relative;*/
  /*top: 50px;*/
  /*left:30px;*/
  /*transition: all 100ms linear;*/
  filter: grayscale(100%);
}


.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #000;
  color: #000;
  padding: 2px 10px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
  justify-content: center;
  color: white;
}

.auto {
  margin-left: auto;
}

</style>
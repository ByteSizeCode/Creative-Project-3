<template>
  <div class="about">
    <h3>Welcome to the Global Store </h3>
    <br>
    <h1>We aim to be your one stop shop for all things books. Originally founded in 1832 as a small book store in the country, we now have over 536 retail chains worldwide. See some of our books of the week- available in all stores at a bargain price!</h1>
  </div>
</template>

<style>

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .about h1{
    font-size: 17px;
    top:-200px;
  }
  body {
    background: #111;
  }

  .about h3 {

    font-family:Khula;
    font-size:1.2em;
    /*text-align:center;*/
    padding-left:50px;
    padding-right:50px;
    display:block;
    /*position:absolute;*/
    color:white;

  }
  .about h1 {
    padding-left:-300px;
    padding-right:-300px;
  }
  img {
    height: 150px;
    width: 250px;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .about h1{
    font-size: 17px;
    top:-200px;
  }
  body {
    background: #111;
  }

  .about h3 {

    font-family:Khula;
    font-size:1.2em;

    padding-left:-300px;
    padding-right:-300px;
    display:block;

    color:white;
  }
  .about h1 {
    padding-left:100px;
    padding-right:100px;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .about h1{
    font-size: 17px;
    top:-200px;
  }
  body {
    background: #111;
  }

  .about h3 {

    font-family:Khula;
    font-size:1.2em;

    padding-left:-300px;
    padding-right:-300px;
    display:block;

    color:white;
  }
  .about h1 {

    padding-left:300px;
    padding-right:300px;
  }
}

</style>

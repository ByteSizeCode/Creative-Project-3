<template>
  <div class="about">
    <h3>Find The Nearest Global Store </h3>
    <br>
    <h1>It appears the nearest store is in Houston, Texas</h1>
    <img src="/map.png">
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

    padding-left:-300px;
    padding-right:-300px;
    display:block;

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

    padding-left:-300px;
    padding-right:-300px;
  }
  img {
    height: 250px;
    width: 450px;
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
    padding-left:-300px;
    padding-right:-300px;
  }
  img {
    height: 290px;
    width: 740px;
  }
}

p, h1, h7 {
  color: white;
}
</style>

<template>
  <div class="col-lg-12" id="errMessage">
    <div class="alert alert-dismissable alert-danger text-center p-5">
        <h3 style="color: #707070;"> Opps!, I'm lost 😭😭😭😭😭</h3>
        <h3>
          Go to 
          <router-link to="/">HOME</router-link>
          <router-link to="/stats">STATS</router-link>
        </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',

}
</script>

<style scoped>
  #errMessage {
    margin-top: 100px;
  }

  h3 {
    color: #707070;
    font-size: 24px;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.1;
  }

  a {
    border: 2px dashed #000;
    display: inline-block;
    padding: 5px;
    margin: 5px 10px;
  }
</style>
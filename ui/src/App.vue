<template>
  <main class="" :class="{ 'dark-mode':isDark }">
    <div class="container pb-5">
      <div class="row mx-auto">
        <a id="dark-mode-btn" @Click="toggleTheme"><font-awesome-icon :icon="faMoon" /></a>
      </div>
      <section class="mx-3 mx-md-0 mx-lg-5">
        <div class="row">
          <h1 class="mx-auto my-4" id="logo">
          <router-link to="/">Miny-URL <font-awesome-icon :icon="faLink" /></router-link></h1>
        </div>
        <router-view v-on:new_url="storeData" :data="data"/>
      </section>
    </div>
    <Footer/>
  </main>
</template>


<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faLink, faMoon } from '@fortawesome/free-solid-svg-icons';
  import { ref } from 'vue';
  import Footer from './components/Footer';

  export default {
    name: 'App',
    setup(){
      const isDark = ref(false);
      const data = ref({});

      const toggleTheme = () =>{
        isDark.value = !isDark.value;
      };

      const storeData = (payload) => {
        data.value = payload;
      }

      return {
        faLink,
        faMoon,
        FontAwesomeIcon,
        Footer,
        isDark,
        toggleTheme,
        storeData,
        data
      }
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
  
  *{
    margin: 0;
    padding: 0;
    margin: border-box;
  }

  html, body, #app, main {
    width: 100%;
    min-height: 100vh;
  }

  main {
    background: none rgb(241, 241, 241);
    transition: all 500ms ease 0s;
  }

  #dark-mode-btn {
    position: absolute;
    top: 26px;
    right: 16px;
    display: inline-block;
    color: black;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px 0.5em;
    border-radius: 50%;
    transition: all 250ms ease-in-out 0s;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    cursor: pointer;
  }

  h1 {
    font-family: 'Russo One', sans-serif;
    text-transform:uppercase;
    font-size: 6.5rem !important;
  }

  .input-group input, .input-group button {
    box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.3);
  }

  .input-group-btn .btn {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #438bca;
    color: #fff;
  }

  .input-group-btn .btn {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #007bff;
    color: #fff;
  }


  main.dark-mode {
    background-color: rgb(34, 34, 34);
    color: rgb(238, 238, 238);
  }

  main.dark-mode #dark-mode-btn {
    color: white;
    background-color: rgb(51, 51, 51);
  }

  main.dark-mode .form-control {
    background-color: rgb(68, 68, 68);
    color: rgb(238, 238, 238);
    border-color: rgb(102, 102, 102);
  }

  main.dark-mode .input-group-text {
    background-color: rgb(102, 102, 102);
    color: rgb(238, 238, 238);
    border-color: rgb(102, 102, 102);
  }
</style>

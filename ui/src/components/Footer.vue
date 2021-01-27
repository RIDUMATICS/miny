<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
    <router-link class="navbar-brand" to="/">Miny</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/" :active="false">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/stats">Stats</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
a.router-link-active {
    color: #fff !important;
    border: 2px solid #007bff;
}
a.router-link-active.navbar-brand {
    color: #fff;
    border: none ;
}
</style>
<template>
  <div class="col-md-6 mb-md-4 col-lg-4 mb-4">
    <div class="text-center p-4 panel">
      <h2>{{ title }}</h2>
      <h2>{{ body }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .panel {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 8px -3px;
    border-radius: 8px;
    overflow: hidden;
    border-style: solid;
    border-width: 1px;
    transition: all 500ms ease 0s;
    border-color: rgb(221, 221, 221);
    background-color: #fff;
}

  main.dark-mode .panel {
    background-color: rgb(68, 68, 68) !important;
    color: rgb(238, 238, 238);
    border-color: rgb(102, 102, 102) !important;
  }
</style>
<template>
  <div class="home">
    <div v-if="success.message" class="alert alert-dismissable alert-success">
        <p class=" my-auto">
          <span class="d-inline-block mr-2">{{ success.status }}</span> {{ success.message }} 
        </p> 
    </div>
    <div v-if="error.message" class="alert alert-dismissable alert-danger">
        <p class=" my-auto">
          <span class="d-inline-block mr-2">{{ error.status }}</span> {{error.message}}
        </p> 
    </div>
    <form @submit.prevent="createUrl">
      <div class="form-group col-lg-12 px-0 mx-auto url">
        <label for="longurl" class="sr-only">long url</label>
        <div class="input-group">
          <input type="url" class="form-control form-control-lg" v-model="url" id="longUrl" placeholder="https://">
          <span class="input-group-btn">
            <button class="btn btn-lg" type="submit" id="submit">Minify!</button>
          </span>
        </div>
      
      </div>
      <div class="form-group col-lg-12 px-0 mx-auto">
        <label for="slug" class="sr-only">slug</label>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">https://miny.netlify.app/</div>
          </div>
          <input type="text" v-model="slug" class="form-control" id="slug" placeholder="Custom slug (OPTIONAL)">
        </div>  
      </div> 
    </form>
  </div>
  <Details/>
</template>

<script>
import Details from '../components/Details'
import axios from 'axios';

export default {
  name: 'Home',
  components:{
      Details
  },
  data(){
    return{
      slug: '',
      url: '',
      error: {
      status: null,
      message: null
      },
      success: {
        status: null,
        message: null
      }
    }
  },

  methods:{
    async showInfo(message, status, data){
      console.log(message);
      this.success.message = message;
      this.success.status = status;
      this.$emit('new_url', data);

      await setTimeout(() => {
        this.success.message = null;
        this.success.status = null;
        this.$router.push({path: 'stats', query: { slug: data.slug }});
      }, 3000);  // This will toggle off the alert after 3s
    },

    showError(message, status){
      this.error.message = message;
      this.error.status = status;

      setTimeout(() => {
        this.error.message = null;
        this.error.status = null;
      }, 3000);  // This will toggle off the alert after 3s
    },
    async createUrl(){
      try {
        const result = await axios.post('/url', {
          url: this.url,
          slug: this.slug
        });

        this.showInfo(result.data.message, result.status, result.data.data);
      } catch (err) {
        console.log(err.response.data);
        if (err.response)
          this.showError(err.response.data.message, err.response.status);
        else{
          this.showError(err.message, 500);
        }
      }
    }
  },

  
}
</script>

<style scoped>
  .alert > p {
    color: #707070;
    font-size: 12pt;
  }
  .alert > p > span {
    font-weight: bolder;
  }
</style>

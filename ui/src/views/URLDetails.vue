<template>
  <div class="about">
    <form @submit.prevent="parseSlug">
      <div class="form-group col-lg-12 px-0 mx-auto url">
        <label for="longurl" class="sr-only">miny url</label>
        <div class="input-group">
          <input type="url" class="form-control form-control-lg disabled" id="longUrl" v-model="minyUrl" required placeholder="Enter miny url">
          <span class="input-group-btn">
            <button class="btn btn-lg" type="submit" id="submit">Show Details</button>
          </span>
        </div>
      </div>
    </form>
    <div class="row" v-if="data.minyUrl">
      <div class="col-lg-8">
        <div class="card col-lg-12 p-0 mb-4">
          <div class="card-header">
            <h2>Miny URL</h2>
          </div>
          <div class="card-body miny_url">
            <p>miny-url.herokuapp.com/{{ data.slug }}</p>  <a :href='data.slug' target="_blank" class="btn btn-sm btn-success" type="submit" id="submit" role="button">open</a>
          </div>
        </div>
        <div class="card col-lg-12 p-0">
          <div class="card-header">
            <h2>Original Url</h2>
          </div>
          <div class="card-body">
            <p>{{data.url}}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 p-2 m-lg-0 mx-sm-3 my-sm-4" id="stats">
        <h2>Total Hits</h2>
        <h3>{{data.hit}}</h3>
        <hr/>
        <h2>Last Visit</h2>
        <h3>{{lastVisitTime}}</h3>
        <hr/>
        <h2>Date Created</h2>
        <h3>{{ createdOn }}</h3>
      </div>
    </div>
    <div v-if="error.message && slug" class="alert alert-dismissable alert-danger">
        <p class=" my-auto">
          <span class="d-inline-block mr-2">{{ error.status }}</span> {{error.message}}
        </p> 
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import moment from 'moment'

export default {
  name: 'URLDetails',
  data(){
    return {
      data: {},
      lastVisitTime: '',
      slug: '',
      minyUrl: '',
      error: {
        status: null,
        message: null
      },
    }
  },
  created: async function () {
    await this.fetchDetails();
    setInterval(() => {
      this.lastVisit();
    }, 1000);
  },
  mounted(){
  },
  computed: {
    createdOn: function () {
      return moment(this.data.createdOn).format('D MMM YYYY');
    }
  },

  methods: {
    fetchDetails: async function(){
      try {
        this.slug = this.$route.query.slug;
        const resp = await Axios.get(`/url/${this.slug}`);
        this.data = resp.data.data;
        this.error = { message: null, status: null}
      } catch (error) {
        this.data = {}
        if(error.message === 'Request failed with status code 404')
          error.message = 'Link not found 😭😢😿😭'
          error.status = 404
        this.error.message = error.message;
        this.error.status = error.status;
      }
    },
    timeAgo: function (){
      moment.updateLocale('en', {
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: number => number + "s ago",
          ss: "%ds ago",
          m: "1 minute ago",
          mm: "%d minutes ago",
          h: "1 hour ago",
          hh: "%d hours ago",
          d: "1 day ago",
          dd: "%d days ago",

        }
      });
      let secondsElapsed = moment().diff(this.data.lastVisit, 'seconds');
      let dayStart = moment("2018-01-01").startOf('day').seconds(secondsElapsed);
      console.log(secondsElapsed);
      if(secondsElapsed > 300){
        return moment(this.data.lastVisit).fromNow(true);
      } else if (secondsElapsed < 60) {
        return dayStart.format('s') + 's ago';
      } else {
        return dayStart.format('m:ss') + 'm ago'
      }
    },
    parseSlug: async function(){
      this.slug = this.minyUrl.split('/').pop();
      this.$route.query.slug = this.slug
      await this.fetchDetails()
    },
    lastVisit: function () {
      if (this.data.lastVisit) {
        this.lastVisitTime = this.timeAgo();
        // console.log(this.timeAgo());
        return this.timeAgo();
      }
      return 'Not Visited'
    }
}
}
</script>

<style scoped>
  .card {
    border-radius: 8px;
    box-shadow: 0 4px 8px -3px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: all 500ms ease;
  }

  .card-header{
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }

  .card:nth-of-type(2) > .card-header {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
  }

  .card-header h2 {
    font-weight: bolder;
    font-size: 18pt;
    text-align: center;
  }

  main.dark-mode .card-body {
    background-color: #444;
    color: #eee;
  }

  .card-body {
    color: #4f4f4f;
  }

  .card-body p {
    display: inline-block;
    width: 100%;
    font-weight: 500;
    line-height: 1.1;
    font-size: 24px;
    text-align: center;
  }

  #stats {
    border-radius: 5px;
    box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
    background-color: #428bc9;
    color: #fff;
    text-align: center;
  }

  #stats h2 {
    font-size: 30px;
    font-weight: bold;
    line-height: 1.1;
  }

  #stats h3 {
   font-size: 24px;
   font-weight: 500;
    line-height: 1.1;
  }

  .miny_url {
    display: flex;
  }

  .alert > p {
    color: #707070;
    font-size: 15pt;
  }
  .alert > p > span {
    font-weight: bolder;
  }
</style>
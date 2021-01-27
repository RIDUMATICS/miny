<template>
  <div class="row my-5">
    <Detail title="Total Hits" :body="total_hits" />
    <Detail title="Total URLs" :body="total_urls" />
    <Detail title="Today URLs" :body="today_urls" />
  </div>
</template>

<script>
import Axios from 'axios';
import Pusher from 'pusher-js';
import Detail from './Detail';
export default {
  name: 'Details',
  data(){
    return {
      total_hits: "",
      total_urls: "",
      today_urls: "",
    };
  },
  components: {
    Detail
  },

  methods: {
    getDetails: async function () {
      const result = await Axios.get('/urls');
      console.log(result.data);
      this.total_hits = result.data.total_hits;
      this.total_urls = result.data.total_urls;
      this.today_urls = result.data.today_urls;
    }
  },
  async created(){
    try {
      this.getDetails()
      let pusher = new Pusher('cd4f09e4d90a8c340704', {
        cluster: 'eu',
        encrypted: true
      });
      const channel = pusher.subscribe('miny');
      channel.bind('update_details', () => {
        this.getDetails()
      });
    } catch (error) {
      console.log(error);
    }
  },
}
</script>
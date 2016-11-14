<style>
  #mainbox {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #mainbox.offline {
    background: red;
  }
  #mainbox.online {
    background: green;
  }
</style>

<template>
  <div id="mainbox" :class="{online:isOnline, offline:!isOnline}">
    <h1>AEM is currently <p >{{status}}.</p></h1>
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'

  export default {
    data () {
      return {
        url: 'http://cns-etcqauth1.englishtown.com/sites.html/content',
        isOnline: true
      }
    },
    components: {
      CurrentPage
    },
    computed: {
      status: function () {
        return this.isOnline ? 'up' : 'down'
      }
    },
    methods: {
      checkStatus: function () {
        const self = this
        this.$http.get(this.url).then((response) => {
          self.isOnline = true
        }).catch((response) => {
          console.log(response)
          self.isOnline = false
        })
        return status
      }
    },
    mounted: function () {
      setInterval(this.checkStatus, 10000)
    },
    watch: {
      isOnline: function (val) {
        if (val === false) {
          let downNotification = new window.Notification('AEM Status', {
            body: 'AEM has gone down. Find something else to do.',
            silent: true
          })
          downNotification
        } else if (val === true) {
          let upNotification = new window.Notification('AEM Status', {
            body: 'AEM is back online!',
            silent: true
          })
          upNotification
        }
      }
    },
    name: 'landing-page'
  }
</script>

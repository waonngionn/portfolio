<template src="./About.html"></template>
<style lang="scss" src="./About.scss"></style>

<script>
import HeaderItem from '../HeaderItem/HeaderItem.vue'

export default {
  components: {
    HeaderItem
  },
  name: 'About',
  methods: {
    getDevice: function () {
      const useragent = navigator.userAgent
      if (useragent.indexOf('iPhone') > 0 || useragent.indexOf('iPod') > 0 || useragent.indexOf('Android') > 0 && useragent.indexOf('Mobile') > 0) {
        return 'sp'
      }
      return 'pc'
    }
  },
  mounted: function () {
    if (this.getDevice === 'pc') {
      let contents = document.getElementsByClassName('box_contents')
      contents[1].style.height = contents[0].clientHeight + 'px'
    }
  }
}
</script>

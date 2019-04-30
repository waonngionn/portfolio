<template src="./Works.html"></template>
<style lang="scss" src="./Works.scss"></style>

<script>
import HeaderItem from '../HeaderItem/HeaderItem.vue'

export default {
  components: {
    HeaderItem
  },
  name: 'Works',
  methods: {
    gotoWork: function (index) {
      // calunit
      // background-color change
      // utopia
      const WorkLinkArr = [
        'http://waonn.sakura.ne.jp/calunitfornit/',
        'https://chrome.google.com/webstore/detail/change-background-color/jcodcbmhkoiolfcdhdjndolalehoonoo?hl=ja',
        'https://chrome.google.com/webstore/detail/go-to-utopia/dakkdjbokdpjgihfcafddmeacoagidib?hl=ja'
      ]
      // window.location.href = WorkLinkArr[index]
      open(WorkLinkArr[index], '_blank')
    }
  },
  mounted: function () {
    const target = document.getElementsByClassName('box_work')
    const self = this
    Object.keys(target).forEach(function (index) {
      target[index].addEventListener('click', function () {
        self.gotoWork(index)
      }, false)
    })
  }
}
</script>

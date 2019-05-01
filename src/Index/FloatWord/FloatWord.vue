<template src="./FloatWord.html"></template>
<style lang="scss" src="./FloatWord.scss"></style>

<script>
export default {
  name: 'FloatWord',
  data: function () {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      // 12個ある
      bottoms: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
      lefts: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100],
      contents: ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'JavaScript', 'Vue.js', 'jQuery', 'PHP', 'Laravel', 'C/C++', 'AdobeXD', 'SEO']
    }
  },
  methods: {
    // テキストを上に動かす関数
    movingFloatWord: function (self) {
      setInterval(function () {
        Object.keys(self.bottoms).forEach(function (index) {
          // 画面上部から上に出たら最下部に移動
          if (self.bottoms[index] > 950) {
            self.$set(self.bottoms, index, 0)
          } else {
            self.$set(self.bottoms, index, self.bottoms[index] + 0.07)
          }
        })
      }, 1)
    },
    // 下からの位置をランダムに決める関数
    setBottomsByRandom: function (self) {
      Object.keys(self.bottoms).forEach(function (index) {
        let bottom = Math.random() * (1000 - 0) + 0
        self.$set(self.bottoms, index, bottom)
      })
    },
    // 左からの位置をランダムに決める関数
    setLeftsByrandom: function (self) {
      let lefts = [0]
      let leftspace = Math.floor(self.width / 12)
      for (let i = 0; i < 12; i++) {
        lefts.push(leftspace * (i + 1))
      }
      Object.keys(self.lefts).forEach(function (index) {
        let selectindex = Math.floor(Math.random() * (12 - index) + 0)
        if (lefts[selectindex] || lefts[selectindex] === 0) {
          self.$set(self.lefts, index, lefts[selectindex])
          lefts.splice(selectindex, 1)
        }
      })
    },
    // 画面幅が変わったイベントを検知してdataを変更
    handleResize: function () {
      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  },
  mounted: function () {
    // 画面幅が変わったイベントを検知してdataを変更
    window.addEventListener('resize', this.handleResize)
    let self = this
    this.setBottomsByRandom(self)
    this.setLeftsByrandom(self)
    this.movingFloatWord(self)
  }
}
</script>

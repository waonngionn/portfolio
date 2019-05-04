<template src="./Index.html"></template>
<style lang="scss" src="./Index.scss"></style>

<script>
import Opening from './Opening/Opening.vue'
import FloatWord from './FloatWord/FloatWord.vue'

export default {
  components: {
    Opening,
    FloatWord
  },
  name: 'Index',
  mounted: function () {
    console.log('○△□')
    // param
    let btnopentextbox = document.getElementById('btn_open_textbox')
    let boxeastereggtextbox = document.getElementById('box_easter_egg_textbox')
    let textboxeasteregg = document.getElementById('textbox_easter_egg')
    let btneasteregg = document.getElementById('btn_easter_egg')

    btnopentextbox.addEventListener('click', function () {
      console.log('clicked')
      // textbox 出現
      boxeastereggtextbox.style.opacity = 1
      boxeastereggtextbox.style.zIndex = 10
      // click button 隠す
      btnopentextbox.style.opacity = 0
    })

    btneasteregg.addEventListener('click', function () {
      if (textboxeasteregg.value === '○△□') {
        alert('クソガキども、世界を変えろ！')
      } else {
        alert('違うよ！ヒント（リチプア）')
      }
    })
  }
}
</script>

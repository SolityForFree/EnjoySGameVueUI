<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Hey, what's your deal? :cool:"/> -->
  <div v-if="game">
  <GodotGame/>
  </div>
  <div v-else>
    <h1>The QR Code scanner.</h1>
    <qrcode-stream @detect="onDetect"></qrcode-stream>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const game = ref(false)

</script>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import GodotGame from './components/GodotGame.vue'
import {QrcodeStream} from 'vue-qrcode-reader'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    GodotGame,
    QrcodeStream
  },
  methods: {
  onDetect (detectedCodes) {
    console.log(detectedCodes)
  }
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

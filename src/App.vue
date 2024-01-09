<template>

  <div v-if="menu">
    <h1> Welcome to bottanica erotica! </h1>
    <div class="button-container">
      <button @click="CreateServer">Create Server</button>
      <button @click="JoinGame">Join Game</button>
    </div>
  </div>
  <div v-else-if="createServer">
    <GodotGame :server="server"/>
  </div>
  <div v-else-if="joinGame">
    <h1>The QR Code scanner.</h1>
    <qrcode-stream @detect="onDetect"></qrcode-stream>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const createServer = ref(false)
const joinGame = ref(false)
const menu = ref(true)
let server = ""
//const server = ""
function onDetect (detectedCodes) 
{
    server = detectedCodes[0].rawValue
    createServer.value = true
    console.log(detectedCodes[0].rawValue)
}

function CreateServer()
{
  server = (Math.random() + 1).toString(36).substring(3);
  createServer.value = true
  menu.value = false
}
function JoinGame()
{
  menu.value = false
  joinGame.value = true  
}
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

.button-container {
  display: block;
  gap: 10px; /* Adjust the gap between buttons */
}
</style>

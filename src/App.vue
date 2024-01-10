<template>
  <div v-if="menu" class="h-100 container-fluid">
    <div class="h-75 d-flex align-items-center justify-content-center">
      <div class="d-flex flex-column" >
        <h2 class="d-flex justify-content-center display-1 text-light text-center mb-5"> Welcome to bottanica erotica! </h2>
        <div class="d-grid gap-3 flex-fill">
        <button @click="CreateServer" class="btn btn-primary btn-lg">Create Server</button>
        <button @click="JoinGame" class="btn btn-primary btn-lg">Join Game</button>      
      </div>
      </div>
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
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  /* margin-top: 60px; */
}

body {
      min-height: 100vh;
      display: flex;
      /* justify-content: center; */
      /* align-items: center; */
      background-color: #000000;
}

.no-padding {
    padding: 0 !important;
}

</style>

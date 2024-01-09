<template>
<iframe :src="url + '?networkGame=true&networkGameId=' + server" :width="width" :height="height" frameborder="0"></iframe>
</template>

<script setup>
import {ref} from 'vue'

let h = window.innerHeight
const height = ref(h)

let w = window.innerWidth
const width = ref(w)

let url = process.env.NODE_ENV == "production" ? "https://solityforfree.github.io/EnjoySGamePages/" : "https://localhost/enjoysgame/"

</script>

<script>
export default {
  name: 'GodotGame',
  props: {
    server :
    { 
        type : String,
        required: true
    }
  }
}
</script>

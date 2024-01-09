<template>
<iframe src="https://localhost/enjoysgame/?networkGame=true&networkGameId=i8zb60cwt" :width="width" :height="height" frameborder="0"></iframe>
</template>

<script setup>
import {ref} from 'vue'

let h = window.innerHeight
const height = ref(h)

let w = window.innerWidth
const width = ref(w)
</script>
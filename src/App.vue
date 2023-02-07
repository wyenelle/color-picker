<script setup>
import {useColors} from './composable/color.js'
const {message,colors,matchColor} = useColors()

</script>

<template >
   <h1>Color Picker Game </h1>
   <div>{{ message }}</div>
        <button v-for="color in colors" :key="color" @click="matchColor(color)">
            {{ color }}
        </button>
</template>


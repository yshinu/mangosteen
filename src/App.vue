<template>
  <div>
  {{ count }}
  </div>
  <button @click="onClick">+1</button>
</template>

<script  setup lang="ts">
import { ref } from 'vue';

const count = ref(0)
const onClick = function(){
  count.value++
}
</script>

<style scoped>

</style>
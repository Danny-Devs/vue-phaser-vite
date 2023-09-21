<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const openExperiment001 = () => {
  console.log('openExperiment001')
  router.push({ name: 'Experiment001' })
}
</script>

<template>
  <div class="container mx-auto py-4">
    <h1 class="text-2xl mb-3 font-bold">Welcome to my homepage</h1>
    <p>This is where I'll put a bunch of my Phaser JS experiments.</p>
    <p>I might also eventually put Pixi JS experiments here too.</p>
    <p>Did you know that Phaser is built on top of Pixi JS? Good to know.</p>

    <div class="mt-6">
      <button @click="openExperiment001" class="btn btn-primary">Experiment 001</button>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import type { Game } from 'phaser'

let gameInstance: Game | null = null
const containerId = 'game-container'
const game = await import('@/game/game')

onMounted(() => {
  gameInstance = game.launch(containerId)

  // Listen for events from Phaser
  gameInstance.events.on('my-event', (payload: any) => {
    console.log('Received event from Phaser: ', payload.data)
  })
})

onUnmounted(() => {
  gameInstance?.destroy(false)
})
</script>

<template>
  <div :id="containerId" />
</template>

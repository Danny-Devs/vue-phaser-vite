import { Scene } from 'phaser'
import PlayScene2 from './PlayScene2'
export default class PlayScene extends Scene {
  constructor() {
    super({ key: 'PlayScene' })
  }

  create() {
    this.add.image(400, 300, 'sky')

    const bombs = []
    for (let i=0; i < 21; i++ ) {
      const bomb = this.physics.add.image(100 + i * 50, 100, 'bomb')
      bomb.setCollideWorldBounds(true)
      bomb.setBounce(1)
      bomb.setVelocity(150, 0)
      bombs.push(bomb)
    }

    for (let i = 0; i < bombs.length; i++) {
      for (let j = i + 1; j < bombs.length; j++) {
        this.physics.add.collider(bombs[i], bombs[j])
      }
    }

    this.sound.add('thud')
    this.physics.world.on('worldbounds', () => {
      this.sound.play('thud', { volume: 0.01 })
    })

    const button = this.add.image(100, 100, 'bomb').setInteractive()
    button.on('pointerdown', () => {
      // load the next scene
      this.scene.start('PlayScene2')
    })
  }

  update() {}
}

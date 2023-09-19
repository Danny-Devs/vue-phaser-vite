import { Scene } from 'phaser'

export default class PlayScene2 extends Scene {
  constructor() {
    super({ key: 'PlayScene2' })
  }

  create() {
   

    // const bomb = this.physics.add.image(400, 200, 'bomb')
    // bomb.setCollideWorldBounds(true)
    // bomb.body.onWorldBounds = true // enable worldbounds collision event
    // bomb.setBounce(1)
    // bomb.setVelocity(100, 20)

    // const bomb2 = this.physics.add.image(400, 200, 'bomb')
    // bomb2.setCollideWorldBounds(true)
    // bomb2.body.onWorldBounds = true // enable worldbounds collision event
    // bomb2.setBounce(1)
    // bomb2.setVelocity(-200, 20)

    // const bomb3 = this.physics.add.image(400, 200, 'bomb')
    // bomb3.setCollideWorldBounds(true)
    // bomb3.body.onWorldBounds = true // enable worldbounds collision event
    // bomb3.setBounce(1)
    // bomb3.setVelocity(-100, 20)

    // this.physics.add.collider(bomb, bomb2)
    // this.physics.add.collider(bomb, bomb3)
    // this.physics.add.collider(bomb2, bomb3)
    // this.physics.add.collider(bomb, bomb3)

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
  }

  update() {}
}

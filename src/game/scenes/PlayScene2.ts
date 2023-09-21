import { Scene } from 'phaser'
import { text } from 'stream/consumers'

export default class PlayScene2 extends Phaser.Scene {
  constructor() {
    super({ key: 'PlayScene2' })
  }

  create() {
    // add some text on screen
    this.add.text(100, 100, 'Hello from PlayScene2!', { fill: 'white' })
    
  }

  update() {}
}

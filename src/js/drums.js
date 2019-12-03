import { Howl } from 'howler';
import getKits from './drumimporter.js';

export class DrumKit {
  constructor(number) {
    this.sounds = getKits(number);
    this.drums = this.assignSounds();
  }


  assignSounds() {
    const allDrums = [];
    for(let i = 0; i < this.sounds.length; i++) {
      let sound = new Howl({
        src: [this.sounds[i]]
      });
      allDrums.push(sound);
    }
    return allDrums;
  }
}

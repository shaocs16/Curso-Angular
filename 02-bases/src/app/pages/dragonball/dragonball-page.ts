import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { single } from 'rxjs';


interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.html',
  imports: [
    //NgClass
  ]
})

export class DragonBallPageComponent {

  name = signal("")
  power = signal(0)

  characters = signal<Character[]>([
    {
      id: 1,
      name: "Goku",
      power: 9001
    }/* ,
    {
      id: 2,
      name: "Vegeta",
      power: 5700
    },
    {
      id: 3,
      name: "Picolo",
      power: 6499
    },
    {
      id: 4,
      name: "Yamcha",
      power: 500
    }, */
  ]);

  /* powerClasses = computed( () => {
    return {
      'text-danger' : true
    }
  }) */

  addCharacter() {
    if(!this.name() || !this.power() || this.power() <= 0) {
      return
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update(
      (list) => [... list, newCharacter]
    )
    this.resetFields()
  }

  resetFields() {
    this.name.set('')
    this.power.set(0)
  }
}

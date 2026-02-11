import { DragonBallService } from './../../services/dragonball.service';
import { NgClass } from '@angular/common';
import { Component, signal, computed, inject } from '@angular/core';
import { single } from 'rxjs';
import { CharacterListComponent } from "../../components/dragonball/characters/character-list";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add";


@Component({
  templateUrl: './dragonball-super-page.html',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
],
  selector: "dragonball-super"
})

export class DragonBallSuperPageComponent {

  public dragonballService = inject(DragonBallService)

  /* powerClasses = computed( () => {
    return {
      'text-danger' : true
    }
  }) */

}

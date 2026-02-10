import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.html'
})

export class HeroPageComponent {
  name = signal("Ironman")
  age = signal(47)

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`
  }

  changeHero() {
    this.name.set("Spiderman")
    this.age.set(22)
  }

  changeAge() {
    this.age.set(60)
  }

  resetForm() {
    this.name.set("Ironman")
    this.age.set(47)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero(){
    return this.name='Spiderman'
  }

  changeAge(){
    return this.age=25
  }

  Reset():void{
    this.name='Ironman';
    this.age=45
  }

}

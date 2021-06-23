import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  charactersArray: any = [];

  constructor(
    private charService: CharactersService
  ) {}

  ngOnInit(): void{
    this.getCharacters();
  }

  ionViewDidEnter(){
    this.getCharacters();
  }

  getCharacters() {
    this.charService.getCharacters().subscribe(characters =>{
      console.log(characters);
      this.charactersArray = characters;
    });
  }
}

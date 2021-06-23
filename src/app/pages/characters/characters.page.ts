import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  charactersArray: any = [];
  constructor(
    private routeActive: ActivatedRoute,
    private charService: CharactersService
  ) { }

  ngOnInit() {
    //Obtener el id
    const id = this.routeActive.snapshot.paramMap.get('id');
    console.log(id);
    this.charService.getCharacter(id).subscribe(char =>{
      console.log(char);
      this.charactersArray = char;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  locationsArray: any = [];

  constructor(
    private locService: LocationsService
  ) {}

    ngOnInit(): void{
      this.getLocations();
    }

    ionViewDidEnter() {
      this.getLocations();
    }

    getLocations() {
      this.locService.getLocations().subscribe(loc =>{
        console.log(loc);
        this.locationsArray = loc;
      });
    }
}

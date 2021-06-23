import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../services/episodes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  episodesArray: any = [];

  constructor(
    private epiService: EpisodesService
  ) {}

    ngOnInit(): void {
      this.getEpisodes();
    }

    ionViewDidEnter(){
      this.getEpisodes();
    }

    getEpisodes() {
      this.epiService.getEpisodes().subscribe(epi => {
        console.log(epi);
        this.episodesArray = epi;
      });
    }
}

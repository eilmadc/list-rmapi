import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/services/episodes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
  episodesArray: any = [];

  constructor(
    private epiService: EpisodesService,
    private routeActive: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.paramMap.get('id');
    console.log(id);
    this.epiService.getEpisode(id).subscribe(epi=> {
        console.log(epi);
        this.episodesArray = epi;
      });
  }
}

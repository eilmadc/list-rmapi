import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from 'src/environments/RMAPI';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(
    private http: HttpClient
    ) {  }

  getEpisodes() {
    return this.http.get(APIURL.episodes);
  }

  getEpisode(id) {
    return this.http.get(`${APIURL.episodes}/${id}`);
  }

}

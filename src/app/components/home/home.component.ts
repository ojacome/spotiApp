import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading = true;


  constructor(private spotifySvc: SpotifyService) { 

    this.loading = true;
    this.spotifySvc.getNewReleases()
    .subscribe( (res: any) => {
      
      this.loading = false;
      this.nuevasCanciones = res;
    })
  }

}

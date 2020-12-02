import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any;
  loading = true;
  topTracks: any[];



  constructor(private route: ActivatedRoute, private spotiSvc: SpotifyService, private location: Location) {
    this.route.params.subscribe( ({id}) => {
      
      this.cargarArtista(id);
      this.getTracks(id);
    })
   }

  ngOnInit(): void {
  }

  cargarArtista(id :string){
    this.loading = true;
    this.spotiSvc.getArtist(id)
    .subscribe( artista => {
      
      this.loading = false;
      this.artista = artista})
  }

  getTracks( id: string){
    this.spotiSvc.getTopTracks(id)
    .subscribe( tracks => {
      console.log(tracks);
      this.topTracks = tracks;
      
    })
  }

  regresar(){
    this.location.back();
  }
}

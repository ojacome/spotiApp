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



  constructor(private route: ActivatedRoute, private spotiSvc: SpotifyService) {
    this.route.params.subscribe( ({id}) => {
      
      this.cargarArtista(id);
    })
   }

  ngOnInit(): void {
  }

  cargarArtista(id :string){
    this.loading = true;
    this.spotiSvc.getArtist(id)
    .subscribe( artista => {
      console.log(artista);
      this.loading = false;
      this.artista = artista})
  }

}

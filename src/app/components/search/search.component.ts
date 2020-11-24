import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;


  constructor(private spotifySvc: SpotifyService) { }



  buscar(termino: string){
    if(termino.length < 2) { return ;}
    
    this.loading = true;
    this.spotifySvc.searchArtist(termino)
    .subscribe( (res: any) => {
      console.log(res);
      this.loading = false;
      this.artistas = res;
    })
  }
}

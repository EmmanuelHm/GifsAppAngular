import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Bucar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor (private gifsService: GifsService){};

  public searchTag(){
    // Obtener valor del input
    const  newTag = this.tagInput.nativeElement.value;

    // Llamar al servicio para buscar tag
    this.gifsService.searchTag(newTag);

    // Limpiar input
    this.tagInput.nativeElement.value = '';
  }
  
}

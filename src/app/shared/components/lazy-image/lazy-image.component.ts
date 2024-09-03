import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit{
  
  // Propiedades de entrada
  @Input()
  public url!: string;
  @Input()
  public alt: string = "";

  // Atributtes
  public hasLoaded: boolean = false;
  
  ngOnInit(): void {
    if( !this.url ) throw new Error('URL property is required')
  }

  onLoac() {
    console.log('Image loaded');
    this.hasLoaded = true;
  }
  

}

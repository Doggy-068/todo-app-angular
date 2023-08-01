import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core'
import * as mapboxgl from 'mapbox-gl'
import { mapboxglToken } from '../../../../../private'

@Component({
  selector: 'view-map',
  standalone: true,
  templateUrl: './map.component.html'
})
export class ViewMapComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef<HTMLDivElement>

  ngAfterViewInit(): void {
    setTimeout(() => {
      new mapboxgl.Map({
        accessToken: mapboxglToken,
        container: this.container.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12'
      })
    })
  }
}

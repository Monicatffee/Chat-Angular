import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagen-contacto',
  templateUrl: './imagen-contacto.component.html',
  styleUrls: ['./imagen-contacto.component.css']
})
export class ImagenContactoComponent implements OnInit {
  @Input() url: string;
  constructor() { }

  ngOnInit() {
  }

}

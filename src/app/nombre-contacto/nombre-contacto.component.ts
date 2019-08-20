import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nombre-contacto',
  templateUrl: './nombre-contacto.component.html',
  styleUrls: ['./nombre-contacto.component.css']
})
export class NombreContactoComponent implements OnInit {
  @Input() nombre: string;
  constructor() { }

  ngOnInit() {
  }

}

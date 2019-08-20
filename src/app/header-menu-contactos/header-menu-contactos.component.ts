import { Component, OnInit } from '@angular/core';
import { faCircleNotch, faCommentDots, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header-menu-contactos',
  templateUrl: './header-menu-contactos.component.html',
  styleUrls: ['./header-menu-contactos.component.css']
})
export class HeaderMenuContactosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  faCircleNotch = faCircleNotch;
  faCommentDots = faCommentDots;
  faEllipsisV = faEllipsisV;
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttoms',
  templateUrl: './buttoms.page.html',
  styleUrls: ['./buttoms.page.scss'],
})
export class ButtomsPage implements OnInit {

  favorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.favorito = !this.favorito;
  }

}

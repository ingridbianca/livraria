import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  abrir: boolean = false

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.abrir = !this.abrir;
  }
}

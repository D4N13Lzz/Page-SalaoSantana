import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ss-not-found',
  templateUrl: './ss-not-found.component.html',
  styleUrls: ['./ss-not-found.component.css']
})
export class SsNotFoundComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Erro 404 - Página Não Encontrada | Salão Santana');
  }

}

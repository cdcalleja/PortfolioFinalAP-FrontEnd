import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerda-de',
  templateUrl: './acerda-de.component.html',
  styleUrls: ['./acerda-de.component.css']
})
export class AcerdaDeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public onOpenModal(mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
  
    if (mode === 'edit') {
      button.setAttribute('data-target', '#updateAcercaDe');
    }
    container?.appendChild(button);
    button.click();
  }
}

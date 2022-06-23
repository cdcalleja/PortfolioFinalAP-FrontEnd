import { Component, OnInit } from '@angular/core';
import { TokenService } from '../security/service/token.service';

@Component({
  selector: 'app-acerda-de',
  templateUrl: './acerda-de.component.html',
  styleUrls: ['./acerda-de.component.css']
})
export class AcerdaDeComponent implements OnInit {
  roles: string[];
  isAdmin = false;

  constructor(
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
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

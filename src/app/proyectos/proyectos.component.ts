import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenService } from '../security/service/token.service';
import { Proyectos } from './proyectos';
import { ProyectosService } from './proyectos.service';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyecto: Proyectos[];
  public editProyecto: Proyectos;
  public deleteProyecto: Proyectos;
  roles: string[];
  isAdmin = false;

  constructor(private proyectosService: ProyectosService, 
    private tokenService: TokenService) { 
   }
  

  ngOnInit() {
    this.getProyectos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  public getProyectos(): void {
    this.proyectosService.getProyectos().subscribe(
      (response: Proyectos[]) => {
        this.proyecto = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProyecto (addForm: NgForm): void {
    document.getElementById('add-proyecto-modal')?.click();
    this.proyectosService.addProyecto(addForm.value).subscribe(
      (response: Proyectos) => {
        console.log(response);
        this.getProyectos;
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset()
      },
    )
  }

  public onUpdateProyecto (proyecto: Proyectos): void {
    this.proyectosService.updateProyecto(proyecto).subscribe(
      (response: Proyectos) => {
        console.log(response);
        this.getProyectos;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }
  

  public onDeleteProyecto (proyectoId: number): void {
    this.proyectosService.deleteProyecto(proyectoId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProyectos;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }


  public onOpenModal(proyecto: Proyectos, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProyectoModal');
    }
    if (mode === 'edit') {
      this.editProyecto = proyecto;
      button.setAttribute('data-target', '#updateProyectoModal');
    }
    if (mode === 'delete') {
      this.deleteProyecto = proyecto;
      button.setAttribute('data-target', '#deleteProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

}

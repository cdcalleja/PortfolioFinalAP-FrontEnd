import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenService } from '../security/service/token.service';
import { Educacion } from './educacion';
import { EducacionService } from './educacion.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  public educacion: Educacion[];
  public editEducacion: Educacion;
  public deleteEducacion: Educacion;
  roles: string[];
  isAdmin = false;

  constructor(
    private educacionService: EducacionService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.getEducaciones();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  public getEducaciones(): void {
    this.educacionService.getEducaciones().subscribe(
      (response: Educacion[]) => {
        this.educacion = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEducacion(addForm: NgForm): void {
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.addEducacion(addForm.value).subscribe(
      (response: Educacion) => {
        console.log(response);
        this.getEducaciones;
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEducacion(educacion: Educacion): void {
    this.educacionService.updateEducacion(educacion).subscribe(
      (response: Educacion) => {
        console.log(response);
        this.getEducaciones;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEducacion(educacionId: number): void {
    this.educacionService.deleteEducacion(educacionId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEducaciones;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(educacion: Educacion, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEducacionaModal');
    }
    if (mode === 'edit') {
      this.editEducacion = educacion;
      button.setAttribute('data-target', '#updateEducacionModal');
    }
    if (mode === 'delete') {
      this.deleteEducacion = educacion;
      button.setAttribute('data-target', '#deleteEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }
}

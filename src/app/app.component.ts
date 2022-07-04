import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from './educacion/educacion';
import { EducacionService } from './educacion/educacion.service';
import { Experiencia } from './experiencia/experiencia';
import { ExperienciaService } from './experiencia/experiencia.service';
import { Persona } from './header/persona';
import { PersonaService } from './header/persona.service';
import { Proyectos } from './proyectos/proyectos';
import { ProyectosService } from './proyectos/proyectos.service';
import { Skills } from './skills/skills';
import { SkillsService } from './skills/skills.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

title = 'PortfolioFinalAP';
  // public persona: Persona[];
  // public educacion: Educacion[];
  // public experiencia: Experiencia[];
  // public skill: Skills [];
  // public proyecto: Proyectos[];

  // constructor(private personaService: PersonaService, private educacionService: EducacionService, 
  //   private experienciaService: ExperienciaService, private skillsService: SkillsService, private proyectosService: ProyectosService) { 
  //   this.persona = [];
  //   this.educacion = [];
  //   this.experiencia = [];
  //   this.skill = [];
  //   this.proyecto = [];
  // }

  // ngOnInit() {
  //   this.getPersonas();
  //   this.getEducaciones();
  //   this.getExperiencias();
  //   this.getProyectos();
  //   this.getSkills();
  // }
  // public getPersonas(): void {
  //   this.personaService.getPersonas().subscribe(
  //     (response: Persona[]) => {
  //       this.persona = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public getEducaciones(): void {
  //   this.educacionService.getEducaciones().subscribe(
  //     (response: Educacion[]) => {
  //       this.educacion = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
    
  // public getExperiencias(): void {
  //   this.experienciaService.getExperiencias().subscribe(
  //     (response: Experiencia[]) => {
  //       this.experiencia = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public getSkills(): void {
  //   this.skillsService.getSkills().subscribe(
  //     (response: Skills[]) => {
  //       this.skill = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public getProyectos(): void {
  //   this.proyectosService.getProyectos().subscribe(
  //     (response: Proyectos[]) => {
  //       this.proyecto = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
    
  }






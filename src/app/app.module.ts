import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EducacionService } from './educacion.service';
import { ExperienciaService } from './experiencia.service';
import { PersonaService } from './persona.service';
import { ProyectosService } from './proyectos.service';
import { SkillsService } from './skills.service';
import { HeaderComponent } from './header/header.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { AcerdaDeComponent } from './acerda-de/acerda-de.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    AcerdaDeComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [PersonaService, ExperienciaService, EducacionService, SkillsService, ProyectosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

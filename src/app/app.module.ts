import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { AcerdaDeComponent } from './acerda-de/acerda-de.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { interceptorProvider } from './security/interceptors/portfolio-interceptor.service';

import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './security/navbar/navbar.component';
import { LoginComponent } from './security/auth/login.component';
import { RegistroComponent } from './security/auth/registro.component';
import { InicioComponent } from './security/inicio/inicio.component';
import { IndexComponent } from './security/index/index.component';
import { AppRoutingModule } from './app-routing.module';

// import { EducacionService } from './educacion/educacion.service';
// import { ExperienciaService } from './experiencia/experiencia.service';
// import { ProyectosService } from './proyectos/proyectos.service';
// import { SkillsService } from './skills/skills.service';
// import { PersonaService } from './header/persona.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    AcerdaDeComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    IndexComponent,

   

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    

  ],
  // providers: [PersonaService, ExperienciaService, EducacionService, SkillsService, ProyectosService],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

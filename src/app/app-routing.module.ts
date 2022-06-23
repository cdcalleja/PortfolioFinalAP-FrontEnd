import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcerdaDeComponent } from './acerda-de/acerda-de.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './security/navbar/navbar.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './security/auth/login.component';
import { IndexComponent } from './security/index/index.component';
import { InicioComponent } from './security/inicio/inicio.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioGuardService as guard } from './security/guards/portfolio-guard.service';



const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'login', component: LoginComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'header', component: HeaderComponent, canActivate:[guard], data: {expectedRol: ['admin', 'user']}},
    {path: 'acercade', component:AcerdaDeComponent, canActivate:[guard], data: {expectedRol: ['admin', 'user']}},
    {path: 'experiencia-laboral', component: ExperienciaComponent, canActivate:[guard], data: {expectedRol: ['admin', 'user']}},
    {path: 'educacion', component: EducacionComponent, canActivate:[guard], data: {expectedRol: ['admin', 'user']}},
    {path: 'skills', component: SkillsComponent, canActivate:[guard], data: {expectedRol: ['admin', 'user']}},
    {path: 'proyectos', component: ProyectosComponent, canActivate:[guard], data: {expectedRol: ['admin', 'user']}},

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
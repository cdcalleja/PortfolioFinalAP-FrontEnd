import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proyectos } from './proyectos';
import { environment } from 'src/environments/environment';

@Injectable ({
    providedIn: "root",
})

export class ProyectosService {
    private apiServerUrl = environment.apiBaseUrl;
    
    constructor(private http: HttpClient) {}

    public getProyectos(): Observable<Proyectos[]> {
        return this.http.get<Proyectos[]>(`${this.apiServerUrl}/proyectos/all`);
    }

    public addProyecto(proyecto: Proyectos): Observable<Proyectos> {
        return this.http.post<Proyectos>(`${this.apiServerUrl}/proyectos/add`, proyecto);
    }

    public updateProyecto(proyecto: Proyectos): Observable<Proyectos> {
        return this.http.put<Proyectos>(`${this.apiServerUrl}/proyectos/update`, proyecto);
    }

    public deleteProyecto(proyectoId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/proyectos/delete/${proyectoId}`);
    }
}
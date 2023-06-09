import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/api/cursos';

  constructor(private httpClient: HttpClient) { }

  list(){
   return this.httpClient.get<Course[]>(this.API).pipe();
  }
}

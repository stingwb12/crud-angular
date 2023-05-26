import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private hettpClient: HttpClient) { }

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'Front-End' }
    ];
  }
}

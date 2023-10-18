import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, delay, first, tap } from 'rxjs';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/mock/courses.json';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      // take(1),
      first(),
      delay(1000),
      tap((courses) => console.log(courses))
    );
  }
}

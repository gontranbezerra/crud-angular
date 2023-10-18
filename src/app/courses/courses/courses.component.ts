import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // courses: Course[];
  courses: Observable<Course[]>;
  displayedColumns: string[];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    this.displayedColumns = ['name', 'category'];

    // this.coursesService = new CoursesService();
    // this.courses = [{ _id: '1', name: 'Angular', category: 'Front-end' }];
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {}
}

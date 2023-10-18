import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, catchError, of } from 'rxjs';

import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // courses: Course[];
  courses$: Observable<Course[]>;
  displayedColumns: string[];

  // coursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) {
    this.displayedColumns = ['name', 'category'];

    // this.coursesService = new CoursesService();
    // this.courses = [{ _id: '1', name: 'Angular', category: 'Front-end' }];
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  private onError(data: string) {
    this.dialog.open(ErrorDialogComponent, {
      data,
    });
  }
}

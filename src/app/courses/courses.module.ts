import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from '../shared/material/material.module';

import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesComponent } from './courses/courses.component';

@NgModule({
    declarations: [CoursesComponent],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        MaterialModule,
        SharedModule
    ]
})
export class CoursesModule {}

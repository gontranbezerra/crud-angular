import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { CategoryPipe } from './pipes/category.pipe';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [ErrorDialogComponent, CategoryPipe],
  imports: [CommonModule, MaterialModule],
  exports: [ErrorDialogComponent, CategoryPipe]
})
export class SharedModule {}

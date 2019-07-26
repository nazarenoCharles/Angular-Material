import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CategoryRoutes } from './category.routing';
import { CategoryService} from './category.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryDialog } from './category.component'
import { DeleteCategoryDialog } from './category.component'
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(CategoryRoutes)
  ],
  declarations: [CategoryComponent, CategoryDialog, DeleteCategoryDialog],
  providers : [CategoryService],
  entryComponents: [CategoryDialog, DeleteCategoryDialog]
 
})
export class CategoryModule { }

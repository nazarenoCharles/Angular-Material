import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.routing';
import { DialogOverviewExampleDialog } from './product.component'

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(ProductRoutes)
  ],
  declarations: [ProductComponent,DialogOverviewExampleDialog],
  entryComponents: [DialogOverviewExampleDialog]
})
export class ProductModule { }

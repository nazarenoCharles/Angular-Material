import { Component, Inject } from '@angular/core';
import { CategoryService } from './category.service'
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'option', 'status'];
  category: any[] = [];
  animal: string;

  public errorMsg: string;

  constructor(private _categoryService: CategoryService, private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }
  ngOnInit() {
    this.displayCategory();
  }
  
  displayCategory() {
    this._categoryService.getCategories().subscribe(data => this.category = data,
      error => this.errorMsg = error);
  }
  deleteThis(id :number){
    this._categoryService.deleteCategories(id).subscribe(data => data, error => this.errorMsg = error);
    this.displayCategory();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryDialog, {
      width: '850px',
      height: '630px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this._categoryService.addCategories(result)
      .subscribe(data=> {
        this.displayCategory()
      }, error => {this.errorMsg = error});
    });
  }
  deleteCategory(): void{
    const dialogRef = this.dialog.open(DeleteCategoryDialog, {
      width:'300px',
      
    });
    dialogRef.afterClosed().subscribe(result =>
      // if(id != dialogRef){
      //   this.deleteCategory(id)
      // }
        console.log("The dialog was closed."));
    
  }
}
@Component({
  selector: 'delete-category-dialog',
  templateUrl: 'delete.category.dialog.html',
})
export class DeleteCategoryDialog{
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DeleteCategoryDialog>,
    @Inject(MAT_DIALOG_DATA) public category: any) { }

}

@Component({
  selector: 'category-dialog',
  templateUrl: 'category.dialog.html',
})
export class CategoryDialog {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CategoryDialog>, private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public category: any) { }
    ngOnInit() {
      this.initCategoryForm(true)

    }
  categoryForm: FormGroup;
  categoryAdd: any = {};
  mode: string = "Create";
  public errorMsg: string;

  
    submitForm() {
      if (this.mode == "Create") {
        this.addCategory()
      } 
    }
    initCategoryForm(isNew:boolean){
      if (isNew){
        this.categoryForm = this.fb.group({
          id: [''],
          name:['', Validators.required],
          description:[''],
        });
      } else {
        this.categoryForm = this.fb.group({
          id: [this.categoryAdd.id],
          name: [this.categoryAdd.name],
          description: [this.categoryAdd.description],
        });
      }
    }
    assignCategoryFormValue(isNew : boolean){
      const formValues = Object.assign({}, this.categoryForm.value);
      if(isNew){
        this.categoryAdd = {}
        this.categoryAdd.name = formValues['name'];
        this.categoryAdd.description = formValues['description'];
      }
      else {
        this.categoryAdd = {}
        this.categoryAdd.id = formValues['id'];
        this.categoryAdd.name = formValues['name'];
        this.categoryAdd.description = formValues['description'];
      }
    }
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }
    addCategory(){
      this.assignCategoryFormValue(true)
      this.dialogRef.close(this.categoryAdd)
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

}


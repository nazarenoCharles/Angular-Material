import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ProductList {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}
export interface DialogData {
  name: string;
  anime: string;
}

const ELEMENT_DATA: ProductList[] = [
  { id: 1, name: 'Adidas Superstar White', imageUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/542b2cdfd6cd47229a7aa80b00bc7598_9366/Superstar_Shoes_White_C77154.jpg", price: 5400, description: 'Original Adidas Superstar' },
  { id: 2, name: 'Rolls Royce Phantom 2019', imageUrl: "https://www.cstatic-images.com/car-pictures/maxWidth503/usc80rrc041a01300.png", price: 459999, description: 'Best car ever. No other like it.' },
  { id: 3, name: 'Cherub Baby Wipes', imageUrl: "http://cebugrocer.net/wp-content/uploads/2017/07/CHERUB-BB-WIPES-50s.jpg", price: 150, description: 'Best wipes ever. No other like it.' },
  { id: 4, name: 'Chinese 5x5 Rubiks Cube', imageUrl: "https://i5.walmartimages.com/asr/1d75064f-32c6-43ce-9bc0-90b8c8836777_1.d8d5d301d85920089ca165f69400affa.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF", price: 350, description: 'Worsrt rubiks cube ever. No one likes it' },
  { id: 5, name: 'MSI Raider Bag', imageUrl: "https://c1.neweggimages.com/NeweggImage/ProductImage/00-979-009-01.jpg", price: 2500, description: 'Best bag ever. No other like it' },
  { id: 6, name: 'Del Monte Mango Juice Drink', imageUrl: "https://i5.walmartimages.com/asr/6d1621c6-ace4-476d-80af-e974285a75ab_1.ded5bea364f39a0ea4b6dd1822ae0b4b.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF", price: 500000, description: 'Good juice' },
  { id: 7, name: 'Starbucks Tumbler', imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51xjPBG7jCL._SX425_.jpg", price: 550, description: 'Starbucks Tumbler' },
  { id: 8, name: 'Camel Electric Fan', imageUrl: "https://cf.shopee.ph/file/d00cbe6cb748bd741999c289b12d29ae", price: 1399, description: 'Electric fan with heater' },
  { id: 9, name: 'Samsung Galaxy S7 Edge', imageUrl: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-s/pdp/sm-g935azbaatt/gallery/smg935azbaatt-gallery1-1114.png?$product-details-jpg$", price: 20000, description: 'Samsung Galaxy S7 Edge 2017 Edition' },
  { id: 10, name: 'iPhone XS Max', imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-space-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409906", price: 80000, description: 'Beautiful Rose Gold Iphone 512Gb  ' },
];


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  displayedColumns: string[] = ['id', 'imageUrl', 'name', 'description', 'price', 'option', 'status'];
  dataSource = ELEMENT_DATA;

  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '850px',
      height: '630px',

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private matDialog: MatDialog) { }
  
  ngOnInit() {
  }
}

// @Component({
//   selector: 'app-dialog-product',
//   templateUrl: '../modals/product.html',
// })
// export class DialogProduct{
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData)
// }
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDialogModule,
        MatTooltipModule
    ],
    exports:[
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDialogModule,
        MatTooltipModule
    ]
  })

  export class MaterialModule{}
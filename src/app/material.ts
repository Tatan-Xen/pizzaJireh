import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDialogModule,
        MatTooltipModule,
        MatTabsModule
    ],
    exports:[
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDialogModule,
        MatTooltipModule,
        MatTabsModule
    ]
  })

  export class MaterialModule{}
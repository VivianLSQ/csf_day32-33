
import { MatInputModule, MatInput } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldControl} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:[
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatHint,
    MatInput, 
    MatRadioModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }

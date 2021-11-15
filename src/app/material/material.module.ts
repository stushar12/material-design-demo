import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatBadgeModule } from '@angular/material/badge'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatFormFieldModule } from '@angular/material/form-field'
// import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'


const MaterialComponents =[MatButtonModule,MatIconModule,MatDividerModule,MatBadgeModule,
  MatTableModule,MatPaginatorModule,MatFormFieldModule,
  MatInputModule]

@NgModule({

  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }

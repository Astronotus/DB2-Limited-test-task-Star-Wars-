import { NgModule } from '@angular/core';
import { MaterialModule } from '@core/material/material.module';
import { PublicComponent } from '@public/public.component';
import { CommonModule } from '@angular/common';
import { PublicRouting } from '@public/public.routing';
import { HeaderComponent } from '@components/navigation/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PublicRouting
  ],
  declarations: [ PublicComponent, HeaderComponent ]
})
export class PublicModule {}

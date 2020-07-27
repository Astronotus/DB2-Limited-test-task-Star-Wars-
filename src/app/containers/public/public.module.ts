import { NgModule } from '@angular/core';
import { MaterialModule } from '@core/material/material.module';
import { PublicComponent } from '@public/public.component';
import { CommonModule } from '@angular/common';
import { PublicRouting } from '@public/public.routing';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    PublicRouting,
    FlexModule
  ],
  declarations: [ PublicComponent ]
})
export class PublicModule {}

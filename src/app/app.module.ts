import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PublicModule } from '@public/public.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    AppRouting,
    RouterModule,
    PublicModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PublicModule } from '@public/public.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from '@components/navigation/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '@core/http/http.service';

@NgModule({
  imports: [
    HttpClientModule,
    FlexLayoutModule,
    AppRouting,
    RouterModule,
    PublicModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ HttpService ],
  declarations: [ AppComponent, HeaderComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';

import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    ResourceDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

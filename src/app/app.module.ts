import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';

import { ResourceService } from './resource.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    ResourceDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule  
  ],
  providers: [
    ResourceService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

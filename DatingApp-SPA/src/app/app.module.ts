import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './Messages/Messages.component';
import { MemberListComponent } from './member-list/member-list.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    MessagesComponent,
    MemberListComponent,
    NavComponent,
    RegisterComponent
],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}

/**
 * Import Angular modules and components
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * Import App modules and components
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Import custom modules and components
 */
import { UsersComponent } from './shared/components/users/users.component';
import { InputErrorComponent } from './shared/components/input-error/input-error.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    InputErrorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

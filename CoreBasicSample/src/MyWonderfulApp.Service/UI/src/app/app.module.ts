import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { API_BASE_URL } from './services/myWonderfulAppServices.web';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: API_BASE_URL, useValue: window.location.origin },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

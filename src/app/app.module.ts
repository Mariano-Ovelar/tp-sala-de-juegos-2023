import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { SharedModule } from './components/shared/shared.module';
import { ErrorComponent } from './pages/error/error.component';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsJuegosModule } from './components/components-juegos/components-juegos.module';
import { JuegosModule } from './pages/juegos/juegos.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent, ErrorComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    AngularFireAuthModule,
    ComponentsJuegosModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    SharedModule,
    JuegosModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

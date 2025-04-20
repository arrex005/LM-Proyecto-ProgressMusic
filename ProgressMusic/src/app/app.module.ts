import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module'; 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        MainComponent
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

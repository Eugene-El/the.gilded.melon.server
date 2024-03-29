import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routers/app-routing.module';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../pages/home/home.component';
import { LogoComponent } from '../components/logo/logo.component';
import { MenuComponent } from '../components/menu/menu.component';
import { SharedModule } from './shared.module';
import { RulesComponent } from '../pages/rules/rules.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { FooterComponent } from '../components/footer/footer.component';
import { GentlemanComponent } from '../pages/gentleman/gentleman.component';
import { LeadersComponent } from '../pages/leaders/leaders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent,
    MenuComponent,
    RulesComponent,
    NotFoundComponent,
    FooterComponent,
    GentlemanComponent,
    LeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

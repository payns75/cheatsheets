import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './commons/app.material.module';
import { FlextoolsComponent } from './pages/flextools/flextools.component';
import { AngularCliComponent } from './pages/angular-cli/angular-cli.component';
import { PackageModuleComponent } from './package-module/package-module.component';
import { RouteComponent } from './pages/route/route.component';
import { FormsComponent } from './pages/forms/forms.component';
import { AnimationsComponent } from './pages/animations/animations.component';

@NgModule({
  declarations: [
    AppComponent,
    FlextoolsComponent,
    AngularCliComponent,
    PackageModuleComponent,
    RouteComponent,
    FormsComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

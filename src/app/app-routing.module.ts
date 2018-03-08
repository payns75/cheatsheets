import { AnimationsComponent } from './pages/animations/animations.component';
import { FormsComponent } from './pages/forms/forms.component';
import { PackageModuleComponent } from './package-module/package-module.component';
import { AngularCliComponent } from './pages/angular-cli/angular-cli.component';
import { FlextoolsComponent } from './pages/flextools/flextools.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteComponent } from './pages/route/route.component';

const routes: Routes = [
  { path: '', component: AngularCliComponent, data: { title: 'plop'} },
  { path: 'angularcli', component: AngularCliComponent },
  { path: 'packagemodule', component: PackageModuleComponent },
  { path: 'route', component: RouteComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'flexbox', component: FlextoolsComponent },
  { path: '**', component: AngularCliComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

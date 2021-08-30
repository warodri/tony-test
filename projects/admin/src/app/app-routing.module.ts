import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbOauth2LoginComponent } from './components/nb-oauth2-login/nb-oauth2-login.component';
import { NbOauth2CallbackComponent } from './components/nb-oauth2-callback/nb-oauth2-callback.component';

const routes: Routes = [
    { path: '', component: NbOauth2LoginComponent },
    { path: 'callback', component: NbOauth2CallbackComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

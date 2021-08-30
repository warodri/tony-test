import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * Firebase
 */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'projects/admin/src/environments/environment';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
/**
 * Nebular
 */
import { NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ResponseType } from '@nebular/auth';
import { NbFirebaseGoogleStrategy } from '@nebular/firebase-auth';
import { NbOauth2LoginComponent } from './components/nb-oauth2-login/nb-oauth2-login.component';
import { NbOauth2CallbackComponent } from './components/nb-oauth2-callback/nb-oauth2-callback.component';
/**
 * Rest of the implementations
 */

@NgModule({
    declarations: [
        AppComponent,
        NbOauth2LoginComponent,
        NbOauth2CallbackComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbLayoutModule,
        NbEvaIconsModule,
        NbAuthModule.forRoot({
            strategies: [
                NbOAuth2AuthStrategy.setup({
                    name: 'google',
                    clientId: '852063999319-v0s3va11k4ag7vnhu49dmhusvl1rf2bu.apps.googleusercontent.com',
                    clientSecret: '1H2XtNpxARcFEMsxOgw5-8wP',
                    authorize: {
                        endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
                        responseType: NbOAuth2ResponseType.TOKEN,
                        scope: 'https://www.googleapis.com/auth/userinfo.profile',
                    },
                }),
                NbFirebaseGoogleStrategy.setup({
                    name: 'google',
                }),
            ],
            forms: {},
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

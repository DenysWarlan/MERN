import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {localStorageSync} from "ngrx-store-localstorage";
import {BooksService} from "./library/services/library.service";
import {reducers} from "./index";
import {authService} from "./auth/services/auth.service";
import {AuthEffects} from "./auth/effects/auth.effects";
import {AuthGuard} from "./auth/guards/auth.guard";
import {environment} from "../../environments/environment";

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(
    reducer
  );
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
const appEffects = [
  AuthEffects
]

@NgModule({
  declarations: [  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot(appEffects),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [authService, AuthGuard, BooksService],
  bootstrap: []
})
export class AppReducersModule { }

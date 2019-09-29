import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WarpNavComponent } from './warp-nav/warp-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    WarpNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WarpNavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor(private injector: Injector) {
    const wrapNavElement = createCustomElement(WarpNavComponent, { injector: this.injector });

    customElements.define('wrap-nav', wrapNavElement);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
} from '@angular/material';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [
    CommonModule,
    TranslateModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  exports: [
    TranslateModule,
    WebviewDirective,
    MatButtonModule,
  ]
})
export class SharedModule {}

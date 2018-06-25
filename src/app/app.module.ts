import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { OptionsComponent } from './options/options.component';
import { ResultComponent } from './result/result.component';

@NgModule({
    declarations: [
        AppComponent,
        OptionsComponent,
        ResultComponent,
    ],
    imports: [
        BrowserModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }

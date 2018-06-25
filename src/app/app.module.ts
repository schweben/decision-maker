import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { OptionsComponent } from './options/options.component';
import { ResultComponent } from './result/result.component';
import { ResultService } from './service/result.service';

@NgModule({
    declarations: [
        AppComponent,
        OptionsComponent,
        ResultComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    providers: [
        ResultService,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }

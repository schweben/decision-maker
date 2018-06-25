import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatToolbarModule,
    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
    ],
})
export class MaterialModule { }
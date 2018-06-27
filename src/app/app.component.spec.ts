import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';

import { MockOptionsComponent } from './mocks/mock.options.component';
import { MockResultComponent } from './mocks/mock.result.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                MockOptionsComponent,
                MockResultComponent,
            ],
            imports: [
                MaterialModule,
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});

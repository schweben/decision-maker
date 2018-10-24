import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { MaterialModule } from '../material.module';
import { ResultService } from '../service/result.service';
import { ResultComponent } from './result.component';

describe('ResultComponent', () => {

    let component: ResultComponent;
    let fixture: ComponentFixture<ResultComponent>;
    let resultService: ResultService;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                ResultComponent,
            ],
            imports: [
                MaterialModule,
            ],
            providers: [
                ResultService,
            ],
        }).compileComponents();

        resultService = TestBed.get(ResultService);
    }));

    beforeEach(() => {
        spyOn(resultService, 'getResult').and.returnValue(of({
            option: 'Test',
            score: 42,
        }));

        fixture = TestBed.createComponent(ResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', async(() => {
        expect(component).toBeTruthy();
        expect(resultService.getResult).toHaveBeenCalled();
    }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';
import { ResultService } from '../service/result.service';
import { OptionsComponent } from './options.component';

describe('OptionsComponent', () => {

    let component: OptionsComponent;
    let fixture: ComponentFixture<OptionsComponent>;
    let resultService: ResultService;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                OptionsComponent,
            ],
            imports: [
                FormsModule,
                MaterialModule,
                NoopAnimationsModule,
            ],
            providers: [
                ResultService,
            ],
        }).compileComponents();

        resultService = TestBed.get(ResultService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OptionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should set default options', async(() => {
        expect(component.options).toEqual([
            {
                option: '',
                score: 0,
            },
            {
                option: '',
                score: 0,
            },
        ]);
    }));

    it('should add a new blank option to the options list', async(() => {
        spyOn(resultService, 'setResult');
        expect(component.options.length).toEqual(2);

        component.addOption();

        expect(component.options).toEqual([
            {
                option: '',
                score: 0,
            },
            {
                option: '',
                score: 0,
            },
            {
                option: '',
                score: 0,
            },
        ]);
        expect(resultService.setResult).toHaveBeenCalledWith(null);
    }));

    it('should remove an option from the options list', async(() => {
        spyOn(resultService, 'setResult');
        expect(component.options.length).toEqual(2);

        component.deleteOption(1);

        expect(component.options.length).toEqual(1);
        expect(resultService.setResult).toHaveBeenCalledWith(null);
    }));

    it('should return invalid if there is only one option in the list', async(() => {
        component.options = [
            {
                option: 'Dave',
                score: 0,
            },
        ];

        expect(component.isValid()).toEqual(false);
    }));

    it('should return invalid if there is any option has no text', async(() => {
        component.options = [
            {
                option: 'Dave',
                score: 0,
            },
            {
                option: '',
                score: 0,
            },
        ];

        expect(component.isValid()).toEqual(false);
    }));

    it('should return valid if there is more than one option and all have text', async(() => {
        component.options = [
            {
                option: 'Dave',
                score: 0,
            },
            {
                option: 'Fred',
                score: 0,
            },
        ];

        expect(component.isValid()).toEqual(true);
    }));

    it('should generate a score for each option', async(() => {
        spyOn(resultService, 'setResult');

        component.options = [
            {
                option: 'Banana',
                score: 0,
            },
            {
                option: 'Apple',
                score: 0,
            },
        ];

        component.onClick();

        expect(component.options[0].score).toBeGreaterThan(0);
        expect(component.options[1].score).toBeGreaterThan(0);

        if (component.options[0].score > component.options[1].score) {
            expect(resultService.setResult).toHaveBeenCalledWith({
                option: 'Banana',
                score: component.options[0].score,
            });
        } else {
            expect(resultService.setResult).toHaveBeenCalledWith({
                option: 'Apple',
                score: component.options[1].score,
            });
        }
    }));

    it('should clear the result via the result service', async(() => {
        spyOn(resultService, 'setResult');

        component.resetResult();

        expect(resultService.setResult).toHaveBeenCalledWith(null);
    }));
});

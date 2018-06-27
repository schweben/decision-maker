import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscription } from 'rxjs/Subscription';

import { Option } from '../options/option';
import { ResultService } from './result.service';

describe('ResultService', () => {

    let resultService: ResultService;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
            ],
            imports: [
            ],
            providers: [
                ResultService,
            ],
        });

        resultService = TestBed.get(ResultService);
    }));

    it('should update the subscribed result when set', async(() => {
        const option: Option = {
            option: 'Banana',
            score: 42,
        };

        const testSubscription: Subscription = resultService.getResult().subscribe((result) => {
            expect(result).toEqual(option);
        });

        resultService.setResult(option);
    }));
});

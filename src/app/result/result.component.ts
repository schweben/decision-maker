import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Option } from '../options/option';
import { ResultService } from '../service/result.service';

@Component({
    selector: 'dm-result',
    templateUrl: './result.component.html',
    styleUrls: [ './result.component.css' ],
})
export class ResultComponent implements OnDestroy {

    public result: Option;

    private resultSubscription: Subscription;

    constructor(private resultService: ResultService) {
        this.resultSubscription = this.resultService.getResult().subscribe((result) => {
            this.result = result;
        });
    }

    public ngOnDestroy() {
        this.resultSubscription.unsubscribe();
    }
}

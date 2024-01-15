import { Injectable } from '@angular/core';

import { Observable ,  Subject } from 'rxjs';

import { Option } from '../options/option';

@Injectable()
export class ResultService {

    private result = new Subject<Option>();

    public setResult(result: Option): void {
        this.result.next(result);
    }

    public getResult(): Observable<Option> {
        return this.result.asObservable();
    }
}

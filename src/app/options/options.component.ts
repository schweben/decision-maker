import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResultService } from '../service/result.service';
import { Option } from './option';

@Component({
    selector: 'dm-options',
    templateUrl: './options.component.html',
    styleUrls: [ './options.component.css' ],
})
export class OptionsComponent implements OnInit, OnDestroy {

    public options: Option[] = [];

    private resultSubscription: Subscription;

    constructor(private resultService: ResultService) {
    }

    public ngOnInit(): void {
        this.options[0] = {
            option: '',
            score: 0,
        };
        this.options[1] = {
            option: '',
            score: 0,
        };
    }

    public ngOnDestroy() {
        this.resultSubscription.unsubscribe();
    }

    public onClick(): void {

        let currentBest;

        this.options.forEach((option) => {
            option.score = this.getRandomScore();
            if (!currentBest) {
                currentBest = option;
            } else {
                if (option.score > currentBest.score) {
                    currentBest = option;
                }
            }
        });

        // Pass a copy of the object to the result so that updating an input doesn't change the result
        this.resultService.setResult({
            option: currentBest.option,
            score: currentBest.score,
        });
    }

    public reset(): void {
        this.resultService.setResult(null);
    }

    public addOption(): void {
        this.options.push({
            option: '',
            score: 0,
        });
    }

    public deleteOption(optionIndex: number): void {
        this.options.splice(optionIndex, 1);
    }

    public isValid(): boolean {
        if (this.options.length < 2) {
            return false;
        }

        let valid = true;
        this.options.forEach((option) => {
            if (!option.option) {
                valid = false;
            }
        });
        return valid;
    }
    private getRandomScore(): number {
        return Math.floor(Math.random() * 1000);
    }
}

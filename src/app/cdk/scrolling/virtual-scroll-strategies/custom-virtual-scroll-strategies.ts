import {FixedSizeVirtualScrollStrategy} from "@angular/cdk/scrolling";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomVirtualScrollStrategies extends FixedSizeVirtualScrollStrategy {
    constructor() {
        super(50, 250, 500);
    }
}


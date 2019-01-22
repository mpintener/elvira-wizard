/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { WizardStep } from './wizard-step.interface';
import { EventEmitter } from '@angular/core';
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
export class WizardCompletionStep extends WizardStep {
    /**
     * Basic functionality every wizard completion step needs to provide
     *
     * @author Marc Arndt
     */
    constructor() {
        super(...arguments);
        /**
         * @inheritDoc
         */
        this.stepExit = new EventEmitter();
        /**
         * @inheritDoc
         */
        this.canExit = false;
    }
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    enter(direction) {
        this.completed = true;
        this.stepEnter.emit(direction);
    }
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    exit(direction) {
        // set this completion step as incomplete
        this.completed = false;
        this.stepExit.emit(direction);
    }
}
if (false) {
    /**
     * @inheritDoc
     * @type {?}
     */
    WizardCompletionStep.prototype.stepExit;
    /**
     * @inheritDoc
     * @type {?}
     */
    WizardCompletionStep.prototype.canExit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFPM0MsTUFBTSwyQkFBcUMsU0FBUSxVQUFVO0lBTDdEOzs7O09BSUc7SUFDSDs7UUFDRTs7V0FFRztRQUNJLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUV0RDs7V0FFRztRQUNJLFlBQU8sR0FBd0QsS0FBSyxDQUFDO0lBa0I5RSxDQUFDOzs7Ozs7SUFiUSxLQUFLLENBQUMsU0FBMEI7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBS00sSUFBSSxDQUFDLFNBQTBCO1FBQ3BDLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7Ozs7OztJQXZCQyx3Q0FBc0Q7Ozs7O0lBS3RELHVDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4vbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBCYXNpYyBmdW5jdGlvbmFsaXR5IGV2ZXJ5IHdpemFyZCBjb21wbGV0aW9uIHN0ZXAgbmVlZHMgdG8gcHJvdmlkZVxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2l6YXJkQ29tcGxldGlvblN0ZXAgZXh0ZW5kcyBXaXphcmRTdGVwIHtcbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgc3RlcEV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcblxuICAvKipcbiAgICogQGluaGVyaXREb2NcbiAgICovXG4gIHB1YmxpYyBjYW5FeGl0OiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQGluaGVyaXREb2NcbiAgICovXG4gIHB1YmxpYyBlbnRlcihkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IHZvaWQge1xuICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0ZXBFbnRlci5lbWl0KGRpcmVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQGluaGVyaXREb2NcbiAgICovXG4gIHB1YmxpYyBleGl0KGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgLy8gc2V0IHRoaXMgY29tcGxldGlvbiBzdGVwIGFzIGluY29tcGxldGVcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RlcEV4aXQuZW1pdChkaXJlY3Rpb24pO1xuICB9XG59XG4iXX0=
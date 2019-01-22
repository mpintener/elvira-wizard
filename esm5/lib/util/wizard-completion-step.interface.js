/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { WizardStep } from './wizard-step.interface';
import { EventEmitter } from '@angular/core';
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
var /**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
WizardCompletionStep = /** @class */ (function (_super) {
    tslib_1.__extends(WizardCompletionStep, _super);
    /**
     * Basic functionality every wizard completion step needs to provide
     *
     * @author Marc Arndt
     */
    function WizardCompletionStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @inheritDoc
         */
        _this.stepExit = new EventEmitter();
        /**
         * @inheritDoc
         */
        _this.canExit = false;
        return _this;
    }
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    WizardCompletionStep.prototype.enter = /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        this.completed = true;
        this.stepEnter.emit(direction);
    };
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    WizardCompletionStep.prototype.exit = /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        // set this completion step as incomplete
        this.completed = false;
        this.stepExit.emit(direction);
    };
    return WizardCompletionStep;
}(WizardStep));
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
export { WizardCompletionStep };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBTzNDOzs7Ozs7O0lBQW1ELGdEQUFVO0lBTDdEOzs7O09BSUc7SUFDSDtRQUFBLHFFQTJCQztRQTFCQzs7V0FFRztRQUNJLGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUV0RDs7V0FFRztRQUNJLGFBQU8sR0FBd0QsS0FBSyxDQUFDOztJQWtCOUUsQ0FBQztJQWhCQzs7T0FFRzs7Ozs7O0lBQ0ksb0NBQUs7Ozs7O0lBQVosVUFBYSxTQUEwQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLG1DQUFJOzs7OztJQUFYLFVBQVksU0FBMEI7UUFDcEMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUEzQkQsQ0FBbUQsVUFBVSxHQTJCNUQ7Ozs7Ozs7Ozs7Ozs7SUF2QkMsd0NBQXNEOzs7OztJQUt0RCx1Q0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4vd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQmFzaWMgZnVuY3Rpb25hbGl0eSBldmVyeSB3aXphcmQgY29tcGxldGlvbiBzdGVwIG5lZWRzIHRvIHByb3ZpZGVcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwIGV4dGVuZHMgV2l6YXJkU3RlcCB7XG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcHVibGljIHN0ZXBFeGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgY2FuRXhpdDogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgZW50ZXIoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGVwRW50ZXIuZW1pdChkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgZXhpdChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IHZvaWQge1xuICAgIC8vIHNldCB0aGlzIGNvbXBsZXRpb24gc3RlcCBhcyBpbmNvbXBsZXRlXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0ZXBFeGl0LmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxufVxuIl19
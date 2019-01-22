/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { WizardStepTitleDirective } from '../directives/wizard-step-title.directive';
import { ContentChild, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { isBoolean } from 'util';
import { WizardStepSymbolDirective } from '../directives/wizard-step-symbol.directive';
/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
var WizardStep = /** @class */ (function () {
    /**
     * Basic functionality every type of wizard step needs to provide
     *
     * @author Marc Arndt
     */
    function WizardStep() {
        /**
         * A symbol property, which contains an optional symbol for the step inside the navigation bar.
         * Takes effect when `stepSymbolTemplate` is not defined or null.
         */
        this.navigationSymbol = { symbol: '' };
        /**
         * A boolean describing if the wizard step has been completed
         */
        this.completed = false;
        /**
         * A boolean describing if the wizard step is currently selected
         */
        this.selected = false;
        /**
         * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
         */
        this.defaultSelected = false;
        /**
         * A boolean describing if the wizard step is an optional step
         */
        this.optional = false;
        /**
         * A function or boolean deciding, if this step can be entered
         */
        this.canEnter = true;
        /**
         * A function or boolean deciding, if this step can be exited
         */
        this.canExit = true;
        /**
         * This [[EventEmitter]] is called when the step is entered.
         * The bound method should be used to do initialization work.
         */
        this.stepEnter = new EventEmitter();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new EventEmitter();
    }
    Object.defineProperty(WizardStep.prototype, "hidden", {
        /**
         * Returns if this wizard step should be visible to the user.
         * If the step should be visible to the user false is returned, otherwise true
         */
        get: /**
         * Returns if this wizard step should be visible to the user.
         * If the step should be visible to the user false is returned, otherwise true
         * @return {?}
         */
        function () {
            return !this.selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @param condition A condition variable, deciding if the step can be transitioned
     * @param direction The direction in which this step should be transitioned
     * @returns A [[Promise]] containing `true`, if this step can transitioned in the given direction
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     */
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     * @param {?} condition A condition variable, deciding if the step can be transitioned
     * @param {?} direction The direction in which this step should be transitioned
     * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     */
    WizardStep.canTransitionStep = /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     * @param {?} condition A condition variable, deciding if the step can be transitioned
     * @param {?} direction The direction in which this step should be transitioned
     * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     */
    function (condition, direction) {
        if (isBoolean(condition)) {
            return Promise.resolve((/** @type {?} */ (condition)));
        }
        else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
        }
        else {
            return Promise.reject(new Error("Input value '" + condition + "' is neither a boolean nor a function"));
        }
    };
    /**
     * A function called when the step is entered
     *
     * @param direction The direction in which the step is entered
     */
    /**
     * A function called when the step is entered
     *
     * @param {?} direction The direction in which the step is entered
     * @return {?}
     */
    WizardStep.prototype.enter = /**
     * A function called when the step is entered
     *
     * @param {?} direction The direction in which the step is entered
     * @return {?}
     */
    function (direction) {
        this.stepEnter.emit(direction);
    };
    /**
     * A function called when the step is exited
     *
     * @param direction The direction in which the step is exited
     */
    /**
     * A function called when the step is exited
     *
     * @param {?} direction The direction in which the step is exited
     * @return {?}
     */
    WizardStep.prototype.exit = /**
     * A function called when the step is exited
     *
     * @param {?} direction The direction in which the step is exited
     * @return {?}
     */
    function (direction) {
        this.stepExit.emit(direction);
    };
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be entered
     * @returns A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     */
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be entered
     * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     */
    WizardStep.prototype.canEnterStep = /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be entered
     * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     */
    function (direction) {
        return WizardStep.canTransitionStep(this.canEnter, direction);
    };
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be left
     * @returns A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     */
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be left
     * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     */
    WizardStep.prototype.canExitStep = /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be left
     * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     */
    function (direction) {
        return WizardStep.canTransitionStep(this.canExit, direction);
    };
    WizardStep.propDecorators = {
        stepTitleTemplate: [{ type: ContentChild, args: [WizardStepTitleDirective,] }],
        stepSymbolTemplate: [{ type: ContentChild, args: [WizardStepSymbolDirective,] }],
        stepId: [{ type: Input }],
        stepTitle: [{ type: Input }],
        navigationSymbol: [{ type: Input }],
        canEnter: [{ type: Input }],
        canExit: [{ type: Input }],
        stepEnter: [{ type: Output }],
        stepExit: [{ type: Output }],
        hidden: [{ type: HostBinding, args: ['hidden',] }]
    };
    return WizardStep;
}());
export { WizardStep };
if (false) {
    /**
     * A step title property, which contains the visible header title of the step.
     * This title is then shown inside the navigation bar.
     * Compared to `stepTitle` this property can contain any html content and not only plain text
     * @type {?}
     */
    WizardStep.prototype.stepTitleTemplate;
    /**
     * A step symbol property that, if defined, overrides `navigationSymbol`.
     * Allows to display arbitrary content as a step symbol instead of plain text.
     * @type {?}
     */
    WizardStep.prototype.stepSymbolTemplate;
    /**
     * A step id, unique to the step
     * @type {?}
     */
    WizardStep.prototype.stepId;
    /**
     * A step title property, which contains the visible header title of the step.
     * This title is only shown inside the navigation bar, if `stepTitleTemplate` is not defined or null.
     * @type {?}
     */
    WizardStep.prototype.stepTitle;
    /**
     * A symbol property, which contains an optional symbol for the step inside the navigation bar.
     * Takes effect when `stepSymbolTemplate` is not defined or null.
     * @type {?}
     */
    WizardStep.prototype.navigationSymbol;
    /**
     * A boolean describing if the wizard step has been completed
     * @type {?}
     */
    WizardStep.prototype.completed;
    /**
     * A boolean describing if the wizard step is currently selected
     * @type {?}
     */
    WizardStep.prototype.selected;
    /**
     * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
     * @type {?}
     */
    WizardStep.prototype.defaultSelected;
    /**
     * A boolean describing if the wizard step is an optional step
     * @type {?}
     */
    WizardStep.prototype.optional;
    /**
     * A function or boolean deciding, if this step can be entered
     * @type {?}
     */
    WizardStep.prototype.canEnter;
    /**
     * A function or boolean deciding, if this step can be exited
     * @type {?}
     */
    WizardStep.prototype.canExit;
    /**
     * This [[EventEmitter]] is called when the step is entered.
     * The bound method should be used to do initialization work.
     * @type {?}
     */
    WizardStep.prototype.stepEnter;
    /**
     * This [[EventEmitter]] is called when the step is exited.
     * The bound method can be used to do cleanup work.
     * @type {?}
     */
    WizardStep.prototype.stepExit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7O0FBT3JGO0lBTEE7Ozs7T0FJRztJQUNIO1FBNkJFOzs7V0FHRztRQUVJLHFCQUFnQixHQUFxQixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUUzRDs7V0FFRztRQUNJLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFekI7O1dBRUc7UUFDSSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXhCOztXQUVHO1FBQ0ksb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFL0I7O1dBRUc7UUFDSSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXhCOztXQUVHO1FBRUksYUFBUSxHQUE2RyxJQUFJLENBQUM7UUFFakk7O1dBRUc7UUFFSSxZQUFPLEdBQTZHLElBQUksQ0FBQztRQUVoSTs7O1dBR0c7UUFFSSxjQUFTLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRXRGOzs7V0FHRztRQUVJLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUE0RXZGLENBQUM7SUF0RUMsc0JBQ1csOEJBQU07UUFMakI7OztXQUdHOzs7Ozs7UUFDSDtZQUVFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7SUFDWSw0QkFBaUI7Ozs7Ozs7OztJQUFoQyxVQUFpQyxTQUVTLEVBQ1QsU0FBMEI7UUFDekQsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLG1CQUFBLFNBQVMsRUFBVyxDQUFDLENBQUM7U0FDOUM7YUFBTSxJQUFJLFNBQVMsWUFBWSxRQUFRLEVBQUU7WUFDeEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsa0JBQWdCLFNBQVMsMENBQXVDLENBQUMsQ0FBQyxDQUFDO1NBQ3BHO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSSwwQkFBSzs7Ozs7O0lBQVosVUFBYSxTQUEwQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNJLHlCQUFJOzs7Ozs7SUFBWCxVQUFZLFNBQTBCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7OztJQUNJLGlDQUFZOzs7Ozs7Ozs7SUFBbkIsVUFBb0IsU0FBMEI7UUFDNUMsT0FBTyxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7SUFDSSxnQ0FBVzs7Ozs7Ozs7O0lBQWxCLFVBQW1CLFNBQTBCO1FBQzNDLE9BQU8sVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7b0NBckpBLFlBQVksU0FBQyx3QkFBd0I7cUNBT3JDLFlBQVksU0FBQyx5QkFBeUI7eUJBTXRDLEtBQUs7NEJBT0wsS0FBSzttQ0FPTCxLQUFLOzJCQTBCTCxLQUFLOzBCQU1MLEtBQUs7NEJBT0wsTUFBTTsyQkFPTixNQUFNO3lCQU9OLFdBQVcsU0FBQyxRQUFROztJQXNFdkIsaUJBQUM7Q0FBQSxBQTVKRCxJQTRKQztTQTVKcUIsVUFBVTs7Ozs7Ozs7SUFNOUIsdUNBQ21EOzs7Ozs7SUFNbkQsd0NBQ3FEOzs7OztJQUtyRCw0QkFDc0I7Ozs7OztJQU10QiwrQkFDeUI7Ozs7OztJQU16QixzQ0FDMkQ7Ozs7O0lBSzNELCtCQUF5Qjs7Ozs7SUFLekIsOEJBQXdCOzs7OztJQUt4QixxQ0FBK0I7Ozs7O0lBSy9CLDhCQUF3Qjs7Ozs7SUFLeEIsOEJBQ2lJOzs7OztJQUtqSSw2QkFDZ0k7Ozs7OztJQU1oSSwrQkFDc0Y7Ozs7OztJQU10Riw4QkFDcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7Q29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aXNCb29sZWFufSBmcm9tICd1dGlsJztcbmltcG9ydCB7TmF2aWdhdGlvblN5bWJvbH0gZnJvbSAnLi9uYXZpZ2F0aW9uLXN5bWJvbC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXN5bWJvbC5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIEJhc2ljIGZ1bmN0aW9uYWxpdHkgZXZlcnkgdHlwZSBvZiB3aXphcmQgc3RlcCBuZWVkcyB0byBwcm92aWRlXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaXphcmRTdGVwIHtcbiAgLyoqXG4gICAqIEEgc3RlcCB0aXRsZSBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgdGhlIHZpc2libGUgaGVhZGVyIHRpdGxlIG9mIHRoZSBzdGVwLlxuICAgKiBUaGlzIHRpdGxlIGlzIHRoZW4gc2hvd24gaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogQ29tcGFyZWQgdG8gYHN0ZXBUaXRsZWAgdGhpcyBwcm9wZXJ0eSBjYW4gY29udGFpbiBhbnkgaHRtbCBjb250ZW50IGFuZCBub3Qgb25seSBwbGFpbiB0ZXh0XG4gICAqL1xuICBAQ29udGVudENoaWxkKFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSlcbiAgcHVibGljIHN0ZXBUaXRsZVRlbXBsYXRlOiBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIEEgc3RlcCBzeW1ib2wgcHJvcGVydHkgdGhhdCwgaWYgZGVmaW5lZCwgb3ZlcnJpZGVzIGBuYXZpZ2F0aW9uU3ltYm9sYC5cbiAgICogQWxsb3dzIHRvIGRpc3BsYXkgYXJiaXRyYXJ5IGNvbnRlbnQgYXMgYSBzdGVwIHN5bWJvbCBpbnN0ZWFkIG9mIHBsYWluIHRleHQuXG4gICAqL1xuICBAQ29udGVudENoaWxkKFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUpXG4gIHB1YmxpYyBzdGVwU3ltYm9sVGVtcGxhdGU6IFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIEEgc3RlcCBpZCwgdW5pcXVlIHRvIHRoZSBzdGVwXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc3RlcElkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3RlcCB0aXRsZSBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgdGhlIHZpc2libGUgaGVhZGVyIHRpdGxlIG9mIHRoZSBzdGVwLlxuICAgKiBUaGlzIHRpdGxlIGlzIG9ubHkgc2hvd24gaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciwgaWYgYHN0ZXBUaXRsZVRlbXBsYXRlYCBpcyBub3QgZGVmaW5lZCBvciBudWxsLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHN0ZXBUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN5bWJvbCBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgYW4gb3B0aW9uYWwgc3ltYm9sIGZvciB0aGUgc3RlcCBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxuICAgKiBUYWtlcyBlZmZlY3Qgd2hlbiBgc3RlcFN5bWJvbFRlbXBsYXRlYCBpcyBub3QgZGVmaW5lZCBvciBudWxsLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdmlnYXRpb25TeW1ib2w6IE5hdmlnYXRpb25TeW1ib2wgPSB7IHN5bWJvbDogJycgfTtcblxuICAvKipcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcgaWYgdGhlIHdpemFyZCBzdGVwIGhhcyBiZWVuIGNvbXBsZXRlZFxuICAgKi9cbiAgcHVibGljIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaXMgY3VycmVudGx5IHNlbGVjdGVkXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcsIGlmIHRoZSB3aXphcmQgc3RlcCBzaG91bGQgYmUgc2VsZWN0ZWQgYnkgZGVmYXVsdCwgaS5lLiBhZnRlciB0aGUgd2l6YXJkIGhhcyBiZWVuIGluaXRpYWxpemVkIGFzIHRoZSBpbml0aWFsIHN0ZXBcbiAgICovXG4gIHB1YmxpYyBkZWZhdWx0U2VsZWN0ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcgaWYgdGhlIHdpemFyZCBzdGVwIGlzIGFuIG9wdGlvbmFsIHN0ZXBcbiAgICovXG4gIHB1YmxpYyBvcHRpb25hbCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIG9yIGJvb2xlYW4gZGVjaWRpbmcsIGlmIHRoaXMgc3RlcCBjYW4gYmUgZW50ZXJlZFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNhbkVudGVyOiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IFByb21pc2U8Ym9vbGVhbj4pIHwgYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gb3IgYm9vbGVhbiBkZWNpZGluZywgaWYgdGhpcyBzdGVwIGNhbiBiZSBleGl0ZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjYW5FeGl0OiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IFByb21pc2U8Ym9vbGVhbj4pIHwgYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBlbnRlcmVkLlxuICAgKiBUaGUgYm91bmQgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHRvIGRvIGluaXRpYWxpemF0aW9uIHdvcmsuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHN0ZXBFbnRlcjogRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcblxuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZC5cbiAgICogVGhlIGJvdW5kIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBkbyBjbGVhbnVwIHdvcmsuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHN0ZXBFeGl0OiBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoaXMgd2l6YXJkIHN0ZXAgc2hvdWxkIGJlIHZpc2libGUgdG8gdGhlIHVzZXIuXG4gICAqIElmIHRoZSBzdGVwIHNob3VsZCBiZSB2aXNpYmxlIHRvIHRoZSB1c2VyIGZhbHNlIGlzIHJldHVybmVkLCBvdGhlcndpc2UgdHJ1ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdoaWRkZW4nKVxuICBwdWJsaWMgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuc2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0cnVlLCBpZiB0aGlzIHdpemFyZCBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWQgd2l0aCBhIGdpdmVuIGRpcmVjdGlvbi5cbiAgICogVHJhbnNpdGlvbmVkIGluIHRoaXMgY2FzZSBtZWFucyBlaXRoZXIgZW50ZXJlZCBvciBleGl0ZWQsIGRlcGVuZGluZyBvbiB0aGUgZ2l2ZW4gYGNvbmRpdGlvbmAgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBAcGFyYW0gY29uZGl0aW9uIEEgY29uZGl0aW9uIHZhcmlhYmxlLCBkZWNpZGluZyBpZiB0aGUgc3RlcCBjYW4gYmUgdHJhbnNpdGlvbmVkXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGlzIHN0ZXAgc2hvdWxkIGJlIHRyYW5zaXRpb25lZFxuICAgKiBAcmV0dXJucyBBIFtbUHJvbWlzZV1dIGNvbnRhaW5pbmcgYHRydWVgLCBpZiB0aGlzIHN0ZXAgY2FuIHRyYW5zaXRpb25lZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24gaWYgYGNvbmRpdGlvbmAgaXMgbmVpdGhlciBhIGZ1bmN0aW9uIG5vciBhIGJvb2xlYW5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGNhblRyYW5zaXRpb25TdGVwKGNvbmRpdGlvbjogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IFByb21pc2U8Ym9vbGVhbj4pIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmIChpc0Jvb2xlYW4oY29uZGl0aW9uKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25kaXRpb24gYXMgYm9vbGVhbik7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25kaXRpb24oZGlyZWN0aW9uKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYElucHV0IHZhbHVlICcke2NvbmRpdGlvbn0nIGlzIG5laXRoZXIgYSBib29sZWFuIG5vciBhIGZ1bmN0aW9uYCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGVudGVyZWRcbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBzdGVwIGlzIGVudGVyZWRcbiAgICovXG4gIHB1YmxpYyBlbnRlcihkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IHZvaWQge1xuICAgIHRoaXMuc3RlcEVudGVyLmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZFxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXAgaXMgZXhpdGVkXG4gICAqL1xuICBwdWJsaWMgZXhpdChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikge1xuICAgIHRoaXMuc3RlcEV4aXQuZW1pdChkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSwgaWYgdGhpcyB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBmcm9tIHRoZSBnaXZlbiBkaXJlY3Rpb24uXG4gICAqIEJlY2F1c2UgdGhpcyBtZXRob2QgZGVwZW5kcyBvbiB0aGUgdmFsdWUgYGNhbkVudGVyYCwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciwgaWYgYGNhbkVudGVyYCBpcyBuZWl0aGVyIGEgYm9vbGVhblxuICAgKiBub3IgYSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgZW50ZXJlZFxuICAgKiBAcmV0dXJucyBBIFtbUHJvbWlzZV1dIGNvbnRhaW5pbmcgYHRydWVgLCBpZiB0aGUgc3RlcCBjYW4gYmUgZW50ZXJlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLCBmYWxzZSBvdGhlcndpc2VcbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biBpZiBgYW5FbnRlcmAgaXMgbmVpdGhlciBhIGZ1bmN0aW9uIG5vciBhIGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBjYW5FbnRlclN0ZXAoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gV2l6YXJkU3RlcC5jYW5UcmFuc2l0aW9uU3RlcCh0aGlzLmNhbkVudGVyLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSwgaWYgdGhpcyB3aXphcmQgc3RlcCBjYW4gYmUgZXhpdGVkIGludG8gZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBCZWNhdXNlIHRoaXMgbWV0aG9kIGRlcGVuZHMgb24gdGhlIHZhbHVlIGBjYW5FeGl0YCwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciwgaWYgYGNhbkV4aXRgIGlzIG5laXRoZXIgYSBib29sZWFuXG4gICAqIG5vciBhIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhpcyBzdGVwIHNob3VsZCBiZSBsZWZ0XG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoZSBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24gaWYgYGNhbkV4aXRgIGlzIG5laXRoZXIgYSBmdW5jdGlvbiBub3IgYSBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgY2FuRXhpdFN0ZXAoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gV2l6YXJkU3RlcC5jYW5UcmFuc2l0aW9uU3RlcCh0aGlzLmNhbkV4aXQsIGRpcmVjdGlvbik7XG4gIH1cbn1cbiJdfQ==
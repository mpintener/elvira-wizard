/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { WizardState } from '../navigation/wizard-state.model';
/**
 * The `awResetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button awResetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var ResetWizardDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     */
    function ResetWizardDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */
        this.finalize = new EventEmitter();
    }
    Object.defineProperty(ResetWizardDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the wizard
     */
    /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    ResetWizardDirective.prototype.onClick = /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // do some optional cleanup work
        this.finalize.emit();
        // reset the wizard to its initial state
        this.navigationMode.reset();
    };
    ResetWizardDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awResetWizard]'
                },] }
    ];
    ResetWizardDirective.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    ResetWizardDirective.propDecorators = {
        finalize: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ResetWizardDirective;
}());
export { ResetWizardDirective };
if (false) {
    /**
     * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
     * @type {?}
     */
    ResetWizardDirective.prototype.finalize;
    /** @type {?} */
    ResetWizardDirective.prototype.wizardState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtd2l6YXJkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBZTdEO0lBaUJFOzs7O09BSUc7SUFDSCw4QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFsQjVDOztXQUVHO1FBRUksYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBY1QsQ0FBQztJQVRqRCxzQkFBWSxnREFBYztRQUgxQjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFTRDs7T0FFRzs7Ozs7O0lBQ2dDLHNDQUFPOzs7OztJQUExQyxVQUEyQyxLQUFZO1FBQ3JELGdDQUFnQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7OztnQkFqQk8sV0FBVzs7OzJCQXNCaEIsTUFBTTswQkFvQk4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFNbkMsMkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTlCWSxvQkFBb0I7Ozs7OztJQUkvQix3Q0FDeUQ7O0lBYzdDLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd1Jlc2V0V2l6YXJkYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gcmVzZXQgdGhlIHdpemFyZCB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cbiAqIFRoaXMgZGlyZWN0aXZlIGFjY2VwdHMgYW4gb3V0cHV0LCB3aGljaCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHNvbWUgY3VzdG9tIGNsZWFudXAgd29yayBkdXJpbmcgdGhlIHJlc2V0IHByb2Nlc3MuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gYXdSZXNldFdpemFyZCAoZmluYWxpemUpPVwiY3VzdG9tIHJlc2V0IHRhc2tcIj4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdSZXNldFdpemFyZF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0V2l6YXJkRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIEFuIFtbRXZlbnRFbWl0dGVyXV0gY29udGFpbmluZyBzb21lIHRhc2tzIHRvIGJlIGRvbmUsIGRpcmVjdGx5IGJlZm9yZSB0aGUgd2l6YXJkIGlzIGJlaW5nIHJlc2V0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIGZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHdpemFyZCBzdGF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHsgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHdpemFyZFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIC8vIGRvIHNvbWUgb3B0aW9uYWwgY2xlYW51cCB3b3JrXG4gICAgdGhpcy5maW5hbGl6ZS5lbWl0KCk7XG4gICAgLy8gcmVzZXQgdGhlIHdpemFyZCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUucmVzZXQoKTtcbiAgfVxufVxuIl19
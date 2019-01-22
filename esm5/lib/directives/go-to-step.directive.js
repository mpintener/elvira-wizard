/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Created by marc on 09.01.17.
 */
import { Directive, EventEmitter, HostListener, Input, Optional, Output } from '@angular/core';
import { isStepOffset } from '../util/step-offset.interface';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardState } from '../navigation/wizard-state.model';
import { isStepId } from '../util/step-id.interface';
import { isStepIndex } from '../util/step-index.interface';
/**
 * The `awGoToStep` directive can be used to navigate to a given step.
 * This step can be defined in one of multiple formats
 *
 * ### Syntax
 *
 * With absolute step index:
 *
 * ```html
 * <button [awGoToStep]="{ stepIndex: absolute step index }" (finalize)="finalize method">...</button>
 * ```
 *
 * With unique step id:
 *
 * ```html
 * <button [awGoToStep]="{ stepId: 'step id of destination step' }" (finalize)="finalize method">...</button>
 * ```
 *
 * With a wizard step object:
 *
 * ```html
 * <button [awGoToStep]="wizard step object" (finalize)="finalize method">...</button>
 * ```
 *
 * With an offset to the defining step:
 *
 * ```html
 * <button [awGoToStep]="{ stepOffset: offset }" (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var GoToStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     * @param wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    function GoToStepDirective(wizardState, wizardStep) {
        this.wizardState = wizardState;
        this.wizardStep = wizardStep;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    Object.defineProperty(GoToStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: /**
         * A convenience field for `preFinalize`
         * @return {?}
         */
        function () {
            return this.preFinalize;
        },
        /**
         * A convenience name for `preFinalize`
         *
         * @param emitter The [[EventEmitter]] to be set
         */
        set: /**
         * A convenience name for `preFinalize`
         *
         * @param {?} emitter The [[EventEmitter]] to be set
         * @return {?}
         */
        function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoToStepDirective.prototype, "navigationMode", {
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
    Object.defineProperty(GoToStepDirective.prototype, "destinationStep", {
        /**
         * Returns the destination step of this directive as an absolute step index inside the wizard
         *
         * @returns The index of the destination step
         * @throws If `targetStep` is of an unknown type an `Error` is thrown
         */
        get: /**
         * Returns the destination step of this directive as an absolute step index inside the wizard
         *
         * @throws If `targetStep` is of an unknown type an `Error` is thrown
         * @return {?} The index of the destination step
         */
        function () {
            /** @type {?} */
            var destinationStep;
            if (isStepIndex(this.targetStep)) {
                destinationStep = this.targetStep.stepIndex;
            }
            else if (isStepId(this.targetStep)) {
                destinationStep = this.wizardState.getIndexOfStepWithId(this.targetStep.stepId);
            }
            else if (isStepOffset(this.targetStep) && this.wizardStep !== null) {
                destinationStep = this.wizardState.getIndexOfStep(this.wizardStep) + this.targetStep.stepOffset;
            }
            else if (this.targetStep instanceof WizardStep) {
                destinationStep = this.wizardState.getIndexOfStep(this.targetStep);
            }
            else {
                throw new Error("Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId");
            }
            return destinationStep;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     * @param {?} event
     * @return {?}
     */
    GoToStepDirective.prototype.onClick = /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.navigationMode.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
    };
    GoToStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awGoToStep]'
                },] }
    ];
    GoToStepDirective.ctorParameters = function () { return [
        { type: WizardState },
        { type: WizardStep, decorators: [{ type: Optional }] }
    ]; };
    GoToStepDirective.propDecorators = {
        preFinalize: [{ type: Output }],
        postFinalize: [{ type: Output }],
        finalize: [{ type: Output }],
        targetStep: [{ type: Input, args: ['awGoToStep',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return GoToStepDirective;
}());
export { GoToStepDirective };
if (false) {
    /**
     * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
     * @type {?}
     */
    GoToStepDirective.prototype.preFinalize;
    /**
     * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
     * @type {?}
     */
    GoToStepDirective.prototype.postFinalize;
    /**
     * The destination step, to which the wizard should navigate, after the component, having this directive has been activated.
     * This destination step can be given either as a [[WizardStep]] containing the step directly,
     * a [[StepOffset]] between the current step and the `wizardStep`, in which this directive has been used,
     * or a step index as a number or string
     * @type {?}
     */
    GoToStepDirective.prototype.targetStep;
    /** @type {?} */
    GoToStepDirective.prototype.wizardState;
    /** @type {?} */
    GoToStepDirective.prototype.wizardStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tdG8tc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9nby10by1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxZQUFZLEVBQWEsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRTdELE9BQU8sRUFBQyxRQUFRLEVBQVMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDcEU7SUFtREU7Ozs7O09BS0c7SUFDSCwyQkFBb0IsV0FBd0IsRUFBc0IsVUFBc0I7UUFBcEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXJEeEY7O1dBRUc7UUFFSSxnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVEOztXQUVHO1FBRUksaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQTRDN0QsQ0FBQztJQXJDRCxzQkFDVyx1Q0FBUTtRQUtuQjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO1FBaEJEOzs7O1dBSUc7Ozs7Ozs7UUFDSCxVQUNvQixPQUEyQjtZQUM3QywwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFzQkQsc0JBQVksNkNBQWM7UUFIMUI7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBaUJELHNCQUFJLDhDQUFlO1FBTm5COzs7OztXQUtHOzs7Ozs7O1FBQ0g7O2dCQUNNLGVBQXVCO1lBRTNCLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDaEMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO2FBQzdDO2lCQUFNLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDcEMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqRjtpQkFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7Z0JBQ3BFLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7YUFDakc7aUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLFVBQVUsRUFBRTtnQkFDaEQsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNwRTtpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUM7YUFDaEc7WUFFRCxPQUFPLGVBQWUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVEOzs7T0FHRzs7Ozs7OztJQUVILG1DQUFPOzs7Ozs7SUFEUCxVQUNRLEtBQVk7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRixDQUFDOztnQkEzRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7O2dCQXZDTyxXQUFXO2dCQURYLFVBQVUsdUJBK0YrQixRQUFROzs7OEJBbER0RCxNQUFNOytCQU1OLE1BQU07MkJBUU4sTUFBTTs2QkFvQk4sS0FBSyxTQUFDLFlBQVk7MEJBK0NsQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQUluQyx3QkFBQztDQUFBLEFBNUZELElBNEZDO1NBekZZLGlCQUFpQjs7Ozs7O0lBSTVCLHdDQUM0RDs7Ozs7SUFLNUQseUNBQzZEOzs7Ozs7OztJQTJCN0QsdUNBQ2dFOztJQWVwRCx3Q0FBZ0M7O0lBQUUsdUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1hcmMgb24gMDkuMDEuMTcuXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3B0aW9uYWwsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2lzU3RlcE9mZnNldCwgU3RlcE9mZnNldH0gZnJvbSAnLi4vdXRpbC9zdGVwLW9mZnNldC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtpc1N0ZXBJZCwgU3RlcElkfSBmcm9tICcuLi91dGlsL3N0ZXAtaWQuaW50ZXJmYWNlJztcbmltcG9ydCB7aXNTdGVwSW5kZXgsIFN0ZXBJbmRleH0gZnJvbSAnLi4vdXRpbC9zdGVwLWluZGV4LmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd0dvVG9TdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gbmF2aWdhdGUgdG8gYSBnaXZlbiBzdGVwLlxuICogVGhpcyBzdGVwIGNhbiBiZSBkZWZpbmVkIGluIG9uZSBvZiBtdWx0aXBsZSBmb3JtYXRzXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIFdpdGggYWJzb2x1dGUgc3RlcCBpbmRleDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cInsgc3RlcEluZGV4OiBhYnNvbHV0ZSBzdGVwIGluZGV4IH1cIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIHVuaXF1ZSBzdGVwIGlkOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwieyBzdGVwSWQ6ICdzdGVwIGlkIG9mIGRlc3RpbmF0aW9uIHN0ZXAnIH1cIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGEgd2l6YXJkIHN0ZXAgb2JqZWN0OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwid2l6YXJkIHN0ZXAgb2JqZWN0XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogV2l0aCBhbiBvZmZzZXQgdG8gdGhlIGRlZmluaW5nIHN0ZXA6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ7IHN0ZXBPZmZzZXQ6IG9mZnNldCB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd0dvVG9TdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgR29Ub1N0ZXBEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHByZUZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHBvc3RGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIG5hbWUgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICpcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIFtbRXZlbnRFbWl0dGVyXV0gdG8gYmUgc2V0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHNldCBmaW5hbGl6ZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRoaXMucHJlRmluYWxpemUgPSBlbWl0dGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICovXG4gIHB1YmxpYyBnZXQgZmluYWxpemUoKTogRXZlbnRFbWl0dGVyPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5wcmVGaW5hbGl6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVzdGluYXRpb24gc3RlcCwgdG8gd2hpY2ggdGhlIHdpemFyZCBzaG91bGQgbmF2aWdhdGUsIGFmdGVyIHRoZSBjb21wb25lbnQsIGhhdmluZyB0aGlzIGRpcmVjdGl2ZSBoYXMgYmVlbiBhY3RpdmF0ZWQuXG4gICAqIFRoaXMgZGVzdGluYXRpb24gc3RlcCBjYW4gYmUgZ2l2ZW4gZWl0aGVyIGFzIGEgW1tXaXphcmRTdGVwXV0gY29udGFpbmluZyB0aGUgc3RlcCBkaXJlY3RseSxcbiAgICogYSBbW1N0ZXBPZmZzZXRdXSBiZXR3ZWVuIHRoZSBjdXJyZW50IHN0ZXAgYW5kIHRoZSBgd2l6YXJkU3RlcGAsIGluIHdoaWNoIHRoaXMgZGlyZWN0aXZlIGhhcyBiZWVuIHVzZWQsXG4gICAqIG9yIGEgc3RlcCBpbmRleCBhcyBhIG51bWJlciBvciBzdHJpbmdcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2F3R29Ub1N0ZXAnKVxuICBwdWJsaWMgdGFyZ2V0U3RlcDogV2l6YXJkU3RlcCB8IFN0ZXBPZmZzZXQgfCBTdGVwSW5kZXggfCBTdGVwSWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHdpemFyZCBzdGF0ZVxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAsIHdoaWNoIGNvbnRhaW5zIHRoaXMgW1tHb1RvU3RlcERpcmVjdGl2ZV1dXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSwgQE9wdGlvbmFsKCkgcHJpdmF0ZSB3aXphcmRTdGVwOiBXaXphcmRTdGVwKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGVzdGluYXRpb24gc3RlcCBvZiB0aGlzIGRpcmVjdGl2ZSBhcyBhbiBhYnNvbHV0ZSBzdGVwIGluZGV4IGluc2lkZSB0aGUgd2l6YXJkXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKiBAdGhyb3dzIElmIGB0YXJnZXRTdGVwYCBpcyBvZiBhbiB1bmtub3duIHR5cGUgYW4gYEVycm9yYCBpcyB0aHJvd25cbiAgICovXG4gIGdldCBkZXN0aW5hdGlvblN0ZXAoKTogbnVtYmVyIHtcbiAgICBsZXQgZGVzdGluYXRpb25TdGVwOiBudW1iZXI7XG5cbiAgICBpZiAoaXNTdGVwSW5kZXgodGhpcy50YXJnZXRTdGVwKSkge1xuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy50YXJnZXRTdGVwLnN0ZXBJbmRleDtcbiAgICB9IGVsc2UgaWYgKGlzU3RlcElkKHRoaXMudGFyZ2V0U3RlcCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0SW5kZXhPZlN0ZXBXaXRoSWQodGhpcy50YXJnZXRTdGVwLnN0ZXBJZCk7XG4gICAgfSBlbHNlIGlmIChpc1N0ZXBPZmZzZXQodGhpcy50YXJnZXRTdGVwKSAmJiB0aGlzLndpemFyZFN0ZXAgIT09IG51bGwpIHtcbiAgICAgIGRlc3RpbmF0aW9uU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0SW5kZXhPZlN0ZXAodGhpcy53aXphcmRTdGVwKSArIHRoaXMudGFyZ2V0U3RlcC5zdGVwT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXRTdGVwIGluc3RhbmNlb2YgV2l6YXJkU3RlcCkge1xuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcCh0aGlzLnRhcmdldFN0ZXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0ICd0YXJnZXRTdGVwJyBpcyBuZWl0aGVyIGEgV2l6YXJkU3RlcCwgU3RlcE9mZnNldCwgU3RlcEluZGV4IG9yIFN0ZXBJZGApO1xuICAgIH1cblxuICAgIHJldHVybiBkZXN0aW5hdGlvblN0ZXA7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXIgbWV0aG9kIGZvciBgY2xpY2tgIGV2ZW50cyBvbiB0aGUgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqIEFmdGVyIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0aGUgd2l6YXJkIHdpbGwgdHJ5IHRvIHRyYW5zaXRpb24gdG8gdGhlIGBkZXN0aW5hdGlvblN0ZXBgXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5nb1RvU3RlcCh0aGlzLmRlc3RpbmF0aW9uU3RlcCwgdGhpcy5wcmVGaW5hbGl6ZSwgdGhpcy5wb3N0RmluYWxpemUpO1xuICB9XG59XG4iXX0=
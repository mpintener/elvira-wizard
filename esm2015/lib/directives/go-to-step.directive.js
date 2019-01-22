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
export class GoToStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizardState The wizard state
     * @param {?} wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    constructor(wizardState, wizardStep) {
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
    /**
     * A convenience name for `preFinalize`
     *
     * @param {?} emitter The [[EventEmitter]] to be set
     * @return {?}
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * A convenience field for `preFinalize`
     * @return {?}
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * The navigation mode
     * @return {?}
     */
    get navigationMode() {
        return this.wizardState.navigationMode;
    }
    /**
     * Returns the destination step of this directive as an absolute step index inside the wizard
     *
     * @throws If `targetStep` is of an unknown type an `Error` is thrown
     * @return {?} The index of the destination step
     */
    get destinationStep() {
        /** @type {?} */
        let destinationStep;
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
            throw new Error(`Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId`);
        }
        return destinationStep;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.navigationMode.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
    }
}
GoToStepDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awGoToStep]'
            },] }
];
GoToStepDirective.ctorParameters = () => [
    { type: WizardState },
    { type: WizardStep, decorators: [{ type: Optional }] }
];
GoToStepDirective.propDecorators = {
    preFinalize: [{ type: Output }],
    postFinalize: [{ type: Output }],
    finalize: [{ type: Output }],
    targetStep: [{ type: Input, args: ['awGoToStep',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tdG8tc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9nby10by1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxZQUFZLEVBQWEsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRTdELE9BQU8sRUFBQyxRQUFRLEVBQVMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDcEUsTUFBTTs7Ozs7OztJQXNESixZQUFvQixXQUF3QixFQUFzQixVQUFzQjtRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFzQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBckR4Rjs7V0FFRztRQUVJLGdCQUFXLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUQ7O1dBRUc7UUFFSSxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBNEM3RCxDQUFDOzs7Ozs7O0lBckNELElBQ1csUUFBUSxDQUFDLE9BQTJCO1FBQzdDLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztJQUM3QixDQUFDOzs7OztJQUtELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFlRCxJQUFZLGNBQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7O0lBaUJELElBQUksZUFBZTs7WUFDYixlQUF1QjtRQUUzQixJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDaEMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1NBQzdDO2FBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3BDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakY7YUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDcEUsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztTQUNqRzthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsWUFBWSxVQUFVLEVBQUU7WUFDaEQsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDO1NBQ2hHO1FBRUQsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQzs7Ozs7OztJQU9ELE9BQU8sQ0FBQyxLQUFZO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7O1lBM0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7O1lBdkNPLFdBQVc7WUFEWCxVQUFVLHVCQStGK0IsUUFBUTs7OzBCQWxEdEQsTUFBTTsyQkFNTixNQUFNO3VCQVFOLE1BQU07eUJBb0JOLEtBQUssU0FBQyxZQUFZO3NCQStDbEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQWpGakMsd0NBQzREOzs7OztJQUs1RCx5Q0FDNkQ7Ozs7Ozs7O0lBMkI3RCx1Q0FDZ0U7O0lBZXBELHdDQUFnQzs7SUFBRSx1Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbWFyYyBvbiAwOS4wMS4xNy5cbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPcHRpb25hbCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aXNTdGVwT2Zmc2V0LCBTdGVwT2Zmc2V0fSBmcm9tICcuLi91dGlsL3N0ZXAtb2Zmc2V0LmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge2lzU3RlcElkLCBTdGVwSWR9IGZyb20gJy4uL3V0aWwvc3RlcC1pZC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtpc1N0ZXBJbmRleCwgU3RlcEluZGV4fSBmcm9tICcuLi91dGlsL3N0ZXAtaW5kZXguaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgYGF3R29Ub1N0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSB0byBhIGdpdmVuIHN0ZXAuXG4gKiBUaGlzIHN0ZXAgY2FuIGJlIGRlZmluZWQgaW4gb25lIG9mIG11bHRpcGxlIGZvcm1hdHNcbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogV2l0aCBhYnNvbHV0ZSBzdGVwIGluZGV4OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwieyBzdGVwSW5kZXg6IGFic29sdXRlIHN0ZXAgaW5kZXggfVwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIFdpdGggdW5pcXVlIHN0ZXAgaWQ6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ7IHN0ZXBJZDogJ3N0ZXAgaWQgb2YgZGVzdGluYXRpb24gc3RlcCcgfVwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIFdpdGggYSB3aXphcmQgc3RlcCBvYmplY3Q6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ3aXphcmQgc3RlcCBvYmplY3RcIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGFuIG9mZnNldCB0byB0aGUgZGVmaW5pbmcgc3RlcDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cInsgc3RlcE9mZnNldDogb2Zmc2V0IH1cIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3R29Ub1N0ZXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBHb1RvU3RlcERpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGJlZm9yZSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcHJlRmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBhZnRlciB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcG9zdEZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgbmFtZSBmb3IgYHByZUZpbmFsaXplYFxuICAgKlxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgW1tFdmVudEVtaXR0ZXJdXSB0byBiZSBzZXRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2V0IGZpbmFsaXplKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx2b2lkPikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdGhpcy5wcmVGaW5hbGl6ZSA9IGVtaXR0ZXI7XG4gIH1cblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxuICAgKi9cbiAgcHVibGljIGdldCBmaW5hbGl6ZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnByZUZpbmFsaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0byB3aGljaCB0aGUgd2l6YXJkIHNob3VsZCBuYXZpZ2F0ZSwgYWZ0ZXIgdGhlIGNvbXBvbmVudCwgaGF2aW5nIHRoaXMgZGlyZWN0aXZlIGhhcyBiZWVuIGFjdGl2YXRlZC5cbiAgICogVGhpcyBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSBnaXZlbiBlaXRoZXIgYXMgYSBbW1dpemFyZFN0ZXBdXSBjb250YWluaW5nIHRoZSBzdGVwIGRpcmVjdGx5LFxuICAgKiBhIFtbU3RlcE9mZnNldF1dIGJldHdlZW4gdGhlIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGB3aXphcmRTdGVwYCwgaW4gd2hpY2ggdGhpcyBkaXJlY3RpdmUgaGFzIGJlZW4gdXNlZCxcbiAgICogb3IgYSBzdGVwIGluZGV4IGFzIGEgbnVtYmVyIG9yIHN0cmluZ1xuICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXdHb1RvU3RlcCcpXG4gIHB1YmxpYyB0YXJnZXRTdGVwOiBXaXphcmRTdGVwIHwgU3RlcE9mZnNldCB8IFN0ZXBJbmRleCB8IFN0ZXBJZDtcblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgbmF2aWdhdGlvbk1vZGUoKTogTmF2aWdhdGlvbk1vZGUge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLm5hdmlnYXRpb25Nb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgd2l6YXJkIHN0YXRlXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCwgd2hpY2ggY29udGFpbnMgdGhpcyBbW0dvVG9TdGVwRGlyZWN0aXZlXV1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlLCBAT3B0aW9uYWwoKSBwcml2YXRlIHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkZXN0aW5hdGlvbiBzdGVwIG9mIHRoaXMgZGlyZWN0aXZlIGFzIGFuIGFic29sdXRlIHN0ZXAgaW5kZXggaW5zaWRlIHRoZSB3aXphcmRcbiAgICpcbiAgICogQHJldHVybnMgVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIEB0aHJvd3MgSWYgYHRhcmdldFN0ZXBgIGlzIG9mIGFuIHVua25vd24gdHlwZSBhbiBgRXJyb3JgIGlzIHRocm93blxuICAgKi9cbiAgZ2V0IGRlc3RpbmF0aW9uU3RlcCgpOiBudW1iZXIge1xuICAgIGxldCBkZXN0aW5hdGlvblN0ZXA6IG51bWJlcjtcblxuICAgIGlmIChpc1N0ZXBJbmRleCh0aGlzLnRhcmdldFN0ZXApKSB7XG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLnRhcmdldFN0ZXAuc3RlcEluZGV4O1xuICAgIH0gZWxzZSBpZiAoaXNTdGVwSWQodGhpcy50YXJnZXRTdGVwKSkge1xuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcFdpdGhJZCh0aGlzLnRhcmdldFN0ZXAuc3RlcElkKTtcbiAgICB9IGVsc2UgaWYgKGlzU3RlcE9mZnNldCh0aGlzLnRhcmdldFN0ZXApICYmIHRoaXMud2l6YXJkU3RlcCAhPT0gbnVsbCkge1xuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcCh0aGlzLndpemFyZFN0ZXApICsgdGhpcy50YXJnZXRTdGVwLnN0ZXBPZmZzZXQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldFN0ZXAgaW5zdGFuY2VvZiBXaXphcmRTdGVwKSB7XG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwKHRoaXMudGFyZ2V0U3RlcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgJ3RhcmdldFN0ZXAnIGlzIG5laXRoZXIgYSBXaXphcmRTdGVwLCBTdGVwT2Zmc2V0LCBTdGVwSW5kZXggb3IgU3RlcElkYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uU3RlcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5lciBtZXRob2QgZm9yIGBjbGlja2AgZXZlbnRzIG9uIHRoZSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICogQWZ0ZXIgdGhpcyBtZXRob2QgaXMgY2FsbGVkIHRoZSB3aXphcmQgd2lsbCB0cnkgdG8gdHJhbnNpdGlvbiB0byB0aGUgYGRlc3RpbmF0aW9uU3RlcGBcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlLmdvVG9TdGVwKHRoaXMuZGVzdGluYXRpb25TdGVwLCB0aGlzLnByZUZpbmFsaXplLCB0aGlzLnBvc3RGaW5hbGl6ZSk7XG4gIH1cbn1cbiJdfQ==
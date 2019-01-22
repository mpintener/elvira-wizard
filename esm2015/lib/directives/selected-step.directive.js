/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Host } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `awSelectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step stepTitle="Step title" awSelectedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
export class SelectedStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizardStep The wizard step, which should be selected by default
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     * @return {?}
     */
    ngOnInit() {
        this.wizardStep.defaultSelected = true;
    }
}
SelectedStepDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awSelectedStep]'
            },] }
];
SelectedStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: Host }] }
];
if (false) {
    /** @type {?} */
    SelectedStepDirective.prototype.wizardStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zZWxlY3RlZC1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWtCekQsTUFBTTs7Ozs7O0lBTUosWUFBNEIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUNsRCxDQUFDOzs7OztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDekMsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7WUFqQk8sVUFBVSx1QkF3QkgsSUFBSTs7OztJQUFMLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd1NlbGVjdGVkU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIG9uIGEgW1tXaXphcmRTdGVwXV0gdG8gc2V0IGl0IGFzIHNlbGVjdGVkIGFmdGVyIHRoZSB3aXphcmQgaW5pdGlhbGlzYXRpb24gb3IgYSByZXNldC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgdGl0bGVcIiBhd1NlbGVjdGVkU3RlcD5cbiAqICAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3U2VsZWN0ZWRTdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRTdGVwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCwgd2hpY2ggc2hvdWxkIGJlIHNlbGVjdGVkIGJ5IGRlZmF1bHRcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSB3aXphcmRTdGVwOiBXaXphcmRTdGVwKSB7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy53aXphcmRTdGVwLmRlZmF1bHRTZWxlY3RlZCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MovingDirection } from '../util/moving-direction.enum';
import { navigationModeFactory } from './navigation-mode.provider';
/**
 * The internal model/state of a wizard.
 * This model contains:
 * - an array with all steps the wizard contains
 * - the index of the step the wizard currently resides inside
 * - information about the completeness of the wizard
 * - some additional helper methods
 *
 * @author Marc Arndt
 */
export class WizardState {
    /**
     * Constructor
     */
    constructor() {
        /**
         * The initial step index, as taken from the [[WizardComponent]]
         */
        this._defaultStepIndex = 0;
        /**
         * An array representation of all wizard steps belonging to this model
         */
        this.wizardSteps = [];
        /**
         * The index of the currently visible and selected step inside the wizardSteps QueryList.
         * If this wizard contains no steps, currentStepIndex is -1
         */
        this.currentStepIndex = -1;
    }
    /**
     * Sets the initial default step.
     * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
     *
     * @param {?} defaultStepIndex The new default wizard step index
     * @return {?}
     */
    set defaultStepIndex(defaultStepIndex) {
        this._defaultStepIndex = defaultStepIndex;
    }
    /**
     * The initial step index.
     * This value can be either:
     * - the index of a wizard step with a `selected` directive, or
     * - the default step index, set in the [[WizardComponent]]
     * @return {?}
     */
    get defaultStepIndex() {
        /** @type {?} */
        const foundDefaultStep = this.wizardSteps.find(step => step.defaultSelected);
        if (foundDefaultStep) {
            return this.getIndexOfStep(foundDefaultStep);
        }
        else {
            return this._defaultStepIndex;
        }
    }
    ;
    /**
     * The WizardStep object belonging to the currently visible and selected step.
     * The currentStep is always the currently selected wizard step.
     * The currentStep can be either completed, if it was visited earlier,
     * or not completed, if it is visited for the first time or its state is currently out of date.
     *
     * If this wizard contains no steps, currentStep is null
     * @return {?}
     */
    get currentStep() {
        if (this.hasStep(this.currentStepIndex)) {
            return this.wizardSteps[this.currentStepIndex];
        }
        else {
            return null;
        }
    }
    /**
     * The completeness of the wizard.
     * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
     * @return {?}
     */
    get completed() {
        return this.wizardSteps.every(step => step.completed || step.optional);
    }
    /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param {?} updatedNavigationMode The name of the new navigation mode
     * @return {?}
     */
    updateNavigationMode(updatedNavigationMode) {
        this.navigationMode = navigationModeFactory(updatedNavigationMode, this);
    }
    /**
     * Updates the wizard steps to the new array
     *
     * @param {?} updatedWizardSteps The updated wizard steps
     * @return {?}
     */
    updateWizardSteps(updatedWizardSteps) {
        // the wizard is currently not in the initialization phase
        if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
            this.currentStepIndex = updatedWizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
        }
        this.wizardSteps = updatedWizardSteps;
    }
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param {?} stepIndex The to be checked index of a step inside this wizard
     * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    hasStep(stepIndex) {
        return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
    }
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @return {?} True if this wizard has a previous step before the current step
     */
    hasPreviousStep() {
        return this.hasStep(this.currentStepIndex - 1);
    }
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @return {?} True if this wizard has a next step after the current step
     */
    hasNextStep() {
        return this.hasStep(this.currentStepIndex + 1);
    }
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @return {?} True if the wizard is currently inside its last step
     */
    isLastStep() {
        return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
    }
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     * @param {?} stepIndex The given index
     * @return {?} The found [[WizardStep]] at the given index `stepIndex`
     */
    getStepAtIndex(stepIndex) {
        if (!this.hasStep(stepIndex)) {
            throw new Error(`Expected a known step, but got stepIndex: ${stepIndex}.`);
        }
        return this.wizardSteps[stepIndex];
    }
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param {?} stepId The given step id
     * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    getIndexOfStepWithId(stepId) {
        return this.wizardSteps.findIndex(step => step.stepId === stepId);
    }
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param {?} step The given [[WizardStep]]
     * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
     */
    getIndexOfStep(step) {
        return this.wizardSteps.indexOf(step);
    }
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param {?} destinationStep The given destination step
     * @return {?} The calculated [[MovingDirection]]
     */
    getMovingDirection(destinationStep) {
        /** @type {?} */
        let movingDirection;
        if (destinationStep > this.currentStepIndex) {
            movingDirection = MovingDirection.Forwards;
        }
        else if (destinationStep < this.currentStepIndex) {
            movingDirection = MovingDirection.Backwards;
        }
        else {
            movingDirection = MovingDirection.Stay;
        }
        return movingDirection;
    }
}
WizardState.decorators = [
    { type: Injectable }
];
WizardState.ctorParameters = () => [];
if (false) {
    /**
     * The initial step index, as taken from the [[WizardComponent]]
     * @type {?}
     */
    WizardState.prototype._defaultStepIndex;
    /**
     * An array representation of all wizard steps belonging to this model
     * @type {?}
     */
    WizardState.prototype.wizardSteps;
    /**
     * The index of the currently visible and selected step inside the wizardSteps QueryList.
     * If this wizard contains no steps, currentStepIndex is -1
     * @type {?}
     */
    WizardState.prototype.currentStepIndex;
    /**
     * The navigation mode used to navigate inside the wizard
     * @type {?}
     */
    WizardState.prototype.navigationMode;
    /**
     * True, if the navigation bar shouldn't be used for navigating
     * @type {?}
     */
    WizardState.prototype.disableNavigationBar;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0YXRlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7QUFhakUsTUFBTTs7OztJQWdGSjtRQS9FQTs7V0FFRztRQUNLLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUU5Qjs7V0FFRztRQUNJLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQTRCM0M7OztXQUdHO1FBQ0kscUJBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUF3QzdCLENBQUM7Ozs7Ozs7O0lBaEVELElBQVcsZ0JBQWdCLENBQUMsZ0JBQWdCO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7OztJQVFELElBQVcsZ0JBQWdCOztjQUNuQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFNUUsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBQUEsQ0FBQzs7Ozs7Ozs7OztJQTBCRixJQUFXLFdBQVc7UUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFD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Ozs7WUF4TUYsVUFBVTs7Ozs7Ozs7SUFLVCx3Q0FBOEI7Ozs7O0lBSzlCLGtDQUEyQzs7Ozs7O0lBZ0MzQyx1Q0FBNkI7Ozs7O0lBSzdCLHFDQUFzQzs7Ozs7SUFLdEMsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge25hdmlnYXRpb25Nb2RlRmFjdG9yeX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUucHJvdmlkZXInO1xuXG4vKipcbiAqIFRoZSBpbnRlcm5hbCBtb2RlbC9zdGF0ZSBvZiBhIHdpemFyZC5cbiAqIFRoaXMgbW9kZWwgY29udGFpbnM6XG4gKiAtIGFuIGFycmF5IHdpdGggYWxsIHN0ZXBzIHRoZSB3aXphcmQgY29udGFpbnNcbiAqIC0gdGhlIGluZGV4IG9mIHRoZSBzdGVwIHRoZSB3aXphcmQgY3VycmVudGx5IHJlc2lkZXMgaW5zaWRlXG4gKiAtIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb21wbGV0ZW5lc3Mgb2YgdGhlIHdpemFyZFxuICogLSBzb21lIGFkZGl0aW9uYWwgaGVscGVyIG1ldGhvZHNcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpemFyZFN0YXRlIHtcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIHN0ZXAgaW5kZXgsIGFzIHRha2VuIGZyb20gdGhlIFtbV2l6YXJkQ29tcG9uZW50XV1cbiAgICovXG4gIHByaXZhdGUgX2RlZmF1bHRTdGVwSW5kZXggPSAwO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSByZXByZXNlbnRhdGlvbiBvZiBhbGwgd2l6YXJkIHN0ZXBzIGJlbG9uZ2luZyB0byB0aGlzIG1vZGVsXG4gICAqL1xuICBwdWJsaWMgd2l6YXJkU3RlcHM6IEFycmF5PFdpemFyZFN0ZXA+ID0gW107XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluaXRpYWwgZGVmYXVsdCBzdGVwLlxuICAgKiBCZXdhcmU6IFRoaXMgaW5pdGlhbCBkZWZhdWx0IGlzIG9ubHkgdXNlZCBpZiBubyB3aXphcmQgc3RlcCBoYXMgYmVlbiBlbmhhbmNlZCB3aXRoIHRoZSBgc2VsZWN0ZWRgIGRpcmVjdGl2ZVxuICAgKlxuICAgKiBAcGFyYW0gZGVmYXVsdFN0ZXBJbmRleCBUaGUgbmV3IGRlZmF1bHQgd2l6YXJkIHN0ZXAgaW5kZXhcbiAgICovXG4gIHB1YmxpYyBzZXQgZGVmYXVsdFN0ZXBJbmRleChkZWZhdWx0U3RlcEluZGV4KSB7XG4gICAgdGhpcy5fZGVmYXVsdFN0ZXBJbmRleCA9IGRlZmF1bHRTdGVwSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGluaXRpYWwgc3RlcCBpbmRleC5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgZWl0aGVyOlxuICAgKiAtIHRoZSBpbmRleCBvZiBhIHdpemFyZCBzdGVwIHdpdGggYSBgc2VsZWN0ZWRgIGRpcmVjdGl2ZSwgb3JcbiAgICogLSB0aGUgZGVmYXVsdCBzdGVwIGluZGV4LCBzZXQgaW4gdGhlIFtbV2l6YXJkQ29tcG9uZW50XV1cbiAgICovXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFN0ZXBJbmRleCgpOiBudW1iZXIge1xuICAgIGNvbnN0IGZvdW5kRGVmYXVsdFN0ZXAgPSB0aGlzLndpemFyZFN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmRlZmF1bHRTZWxlY3RlZCk7XG5cbiAgICBpZiAoZm91bmREZWZhdWx0U3RlcCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5kZXhPZlN0ZXAoZm91bmREZWZhdWx0U3RlcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U3RlcEluZGV4O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgdmlzaWJsZSBhbmQgc2VsZWN0ZWQgc3RlcCBpbnNpZGUgdGhlIHdpemFyZFN0ZXBzIFF1ZXJ5TGlzdC5cbiAgICogSWYgdGhpcyB3aXphcmQgY29udGFpbnMgbm8gc3RlcHMsIGN1cnJlbnRTdGVwSW5kZXggaXMgLTFcbiAgICovXG4gIHB1YmxpYyBjdXJyZW50U3RlcEluZGV4ID0gLTE7XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGUgdXNlZCB0byBuYXZpZ2F0ZSBpbnNpZGUgdGhlIHdpemFyZFxuICAgKi9cbiAgcHVibGljIG5hdmlnYXRpb25Nb2RlOiBOYXZpZ2F0aW9uTW9kZTtcblxuICAvKipcbiAgICogVHJ1ZSwgaWYgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZG4ndCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nXG4gICAqL1xuICBwdWJsaWMgZGlzYWJsZU5hdmlnYXRpb25CYXI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBXaXphcmRTdGVwIG9iamVjdCBiZWxvbmdpbmcgdG8gdGhlIGN1cnJlbnRseSB2aXNpYmxlIGFuZCBzZWxlY3RlZCBzdGVwLlxuICAgKiBUaGUgY3VycmVudFN0ZXAgaXMgYWx3YXlzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgd2l6YXJkIHN0ZXAuXG4gICAqIFRoZSBjdXJyZW50U3RlcCBjYW4gYmUgZWl0aGVyIGNvbXBsZXRlZCwgaWYgaXQgd2FzIHZpc2l0ZWQgZWFybGllcixcbiAgICogb3Igbm90IGNvbXBsZXRlZCwgaWYgaXQgaXMgdmlzaXRlZCBmb3IgdGhlIGZpcnN0IHRpbWUgb3IgaXRzIHN0YXRlIGlzIGN1cnJlbnRseSBvdXQgb2YgZGF0ZS5cbiAgICpcbiAgICogSWYgdGhpcyB3aXphcmQgY29udGFpbnMgbm8gc3RlcHMsIGN1cnJlbnRTdGVwIGlzIG51bGxcbiAgICovXG4gIHB1YmxpYyBnZXQgY3VycmVudFN0ZXAoKTogV2l6YXJkU3RlcCB7XG4gICAgaWYgKHRoaXMuaGFzU3RlcCh0aGlzLmN1cnJlbnRTdGVwSW5kZXgpKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwc1t0aGlzLmN1cnJlbnRTdGVwSW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGNvbXBsZXRlbmVzcyBvZiB0aGUgd2l6YXJkLlxuICAgKiBJZiB0aGUgd2l6YXJkIGhhcyBiZWVuIGNvbXBsZXRlZCwgaS5lLiBhbGwgc3RlcHMgYXJlIGVpdGhlciBjb21wbGV0ZWQgb3Igb3B0aW9uYWwsIHRoaXMgdmFsdWUgaXMgdHJ1ZSwgb3RoZXJ3aXNlIGl0IGlzIGZhbHNlXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNvbXBsZXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5ldmVyeShzdGVwID0+IHN0ZXAuY29tcGxldGVkIHx8IHN0ZXAub3B0aW9uYWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBuYXZpZ2F0aW9uIG1vZGUgdG8gdGhlIG5hdmlnYXRpb24gbW9kZSB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAqXG4gICAqIEBwYXJhbSB1cGRhdGVkTmF2aWdhdGlvbk1vZGUgVGhlIG5hbWUgb2YgdGhlIG5ldyBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIHVwZGF0ZU5hdmlnYXRpb25Nb2RlKHVwZGF0ZWROYXZpZ2F0aW9uTW9kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZSA9IG5hdmlnYXRpb25Nb2RlRmFjdG9yeSh1cGRhdGVkTmF2aWdhdGlvbk1vZGUsIHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHdpemFyZCBzdGVwcyB0byB0aGUgbmV3IGFycmF5XG4gICAqXG4gICAqIEBwYXJhbSB1cGRhdGVkV2l6YXJkU3RlcHMgVGhlIHVwZGF0ZWQgd2l6YXJkIHN0ZXBzXG4gICAqL1xuICB1cGRhdGVXaXphcmRTdGVwcyh1cGRhdGVkV2l6YXJkU3RlcHM6IEFycmF5PFdpemFyZFN0ZXA+KTogdm9pZCB7XG4gICAgLy8gdGhlIHdpemFyZCBpcyBjdXJyZW50bHkgbm90IGluIHRoZSBpbml0aWFsaXphdGlvbiBwaGFzZVxuICAgIGlmICh0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCA+IDAgJiYgdGhpcy5jdXJyZW50U3RlcEluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9IHVwZGF0ZWRXaXphcmRTdGVwcy5pbmRleE9mKHRoaXMud2l6YXJkU3RlcHNbdGhpcy5jdXJyZW50U3RlcEluZGV4XSk7XG4gICAgfVxuXG4gICAgdGhpcy53aXphcmRTdGVwcyA9IHVwZGF0ZWRXaXphcmRTdGVwcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YCBpcyBpbnNpZGUgdGhlIHJhbmdlIG9mIHBvc3NpYmxlIHdpemFyZCBzdGVwcyBpbnNpZGUgdGhpcyB3aXphcmRcbiAgICpcbiAgICogQHBhcmFtIHN0ZXBJbmRleCBUaGUgdG8gYmUgY2hlY2tlZCBpbmRleCBvZiBhIHN0ZXAgaW5zaWRlIHRoaXMgd2l6YXJkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIGBzdGVwSW5kZXhgIGlzIGNvbnRhaW5lZCBpbnNpZGUgdGhpcyB3aXphcmQsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgaGFzU3RlcChzdGVwSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCA+IDAgJiYgMCA8PSBzdGVwSW5kZXggJiYgc3RlcEluZGV4IDwgdGhpcy53aXphcmRTdGVwcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGhhcyBhIHByZXZpb3VzIHN0ZXAsIGNvbXBhcmVkIHRvIHRoZSBjdXJyZW50IHN0ZXBcbiAgICpcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIHdpemFyZCBoYXMgYSBwcmV2aW91cyBzdGVwIGJlZm9yZSB0aGUgY3VycmVudCBzdGVwXG4gICAqL1xuICBoYXNQcmV2aW91c1N0ZXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzU3RlcCh0aGlzLmN1cnJlbnRTdGVwSW5kZXggLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhpcyB3aXphcmQgaGFzIGEgbmV4dCBzdGVwLCBjb21wYXJlZCB0byB0aGUgY3VycmVudCBzdGVwXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgaGFzIGEgbmV4dCBzdGVwIGFmdGVyIHRoZSBjdXJyZW50IHN0ZXBcbiAgICovXG4gIGhhc05leHRTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1N0ZXAodGhpcy5jdXJyZW50U3RlcEluZGV4ICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGlzIGN1cnJlbnRseSBpbnNpZGUgaXRzIGxhc3Qgc3RlcFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB3aXphcmQgaXMgY3VycmVudGx5IGluc2lkZSBpdHMgbGFzdCBzdGVwXG4gICAqL1xuICBpc0xhc3RTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCA+IDAgJiYgdGhpcy5jdXJyZW50U3RlcEluZGV4ID09PSB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIFtbV2l6YXJkU3RlcF1dIGF0IHRoZSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YC5cbiAgICogSWYgbm8gW1tXaXphcmRTdGVwXV0gZXhpc3RzIGF0IHRoZSBnaXZlbiBpbmRleCBhbiBFcnJvciBpcyB0aHJvd25cbiAgICpcbiAgICogQHBhcmFtIHN0ZXBJbmRleCBUaGUgZ2l2ZW4gaW5kZXhcbiAgICogQHJldHVybnMgVGhlIGZvdW5kIFtbV2l6YXJkU3RlcF1dIGF0IHRoZSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YFxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duLCBpZiB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAgZG9lc24ndCBleGlzdFxuICAgKi9cbiAgZ2V0U3RlcEF0SW5kZXgoc3RlcEluZGV4OiBudW1iZXIpOiBXaXphcmRTdGVwIHtcbiAgICBpZiAoIXRoaXMuaGFzU3RlcChzdGVwSW5kZXgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGEga25vd24gc3RlcCwgYnV0IGdvdCBzdGVwSW5kZXg6ICR7c3RlcEluZGV4fS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwc1tzdGVwSW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgc3RlcCB3aXRoIHRoZSBnaXZlbiBgc3RlcElkYC5cbiAgICogSWYgbm8gc3RlcCB3aXRoIHRoZSBnaXZlbiBgc3RlcElkYCBleGlzdHMsIGAtMWAgaXMgcmV0dXJuZWRcbiAgICpcbiAgICogQHBhcmFtIHN0ZXBJZCBUaGUgZ2l2ZW4gc3RlcCBpZFxuICAgKiBAcmV0dXJucyBUaGUgZm91bmQgaW5kZXggb2YgYSBzdGVwIHdpdGggdGhlIGdpdmVuIHN0ZXAgaWQsIG9yIGAtMWAgaWYgbm8gc3RlcCB3aXRoIHRoZSBnaXZlbiBpZCBpcyBpbmNsdWRlZCBpbiB0aGUgd2l6YXJkXG4gICAqL1xuICBnZXRJbmRleE9mU3RlcFdpdGhJZChzdGVwSWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuZmluZEluZGV4KHN0ZXAgPT4gc3RlcC5zdGVwSWQgPT09IHN0ZXBJZCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIGluZGV4IG9mIHRoZSBnaXZlbiBbW1dpemFyZFN0ZXBdXSBgc3RlcGAuXG4gICAqIElmIHRoZSBnaXZlbiBbW1dpemFyZFN0ZXBdXSBpcyBub3QgY29udGFpbmVkIGluc2lkZSB0aGlzIHdpemFyZCwgYC0xYCBpcyByZXR1cm5lZFxuICAgKlxuICAgKiBAcGFyYW0gc3RlcCBUaGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV1cbiAgICogQHJldHVybnMgVGhlIGZvdW5kIGluZGV4IG9mIGBzdGVwYCBvciBgLTFgIGlmIHRoZSBzdGVwIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgd2l6YXJkXG4gICAqL1xuICBnZXRJbmRleE9mU3RlcChzdGVwOiBXaXphcmRTdGVwKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5pbmRleE9mKHN0ZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGNvcnJlY3QgW1tNb3ZpbmdEaXJlY3Rpb25dXSB2YWx1ZSBmb3IgYSBnaXZlbiBgZGVzdGluYXRpb25TdGVwYCBjb21wYXJlZCB0byB0aGUgYGN1cnJlbnRTdGVwSW5kZXhgLlxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25TdGVwIFRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIFtbTW92aW5nRGlyZWN0aW9uXV1cbiAgICovXG4gIGdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvblN0ZXA6IG51bWJlcik6IE1vdmluZ0RpcmVjdGlvbiB7XG4gICAgbGV0IG1vdmluZ0RpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uO1xuXG4gICAgaWYgKGRlc3RpbmF0aW9uU3RlcCA+IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLkZvcndhcmRzO1xuICAgIH0gZWxzZSBpZiAoZGVzdGluYXRpb25TdGVwIDwgdGhpcy5jdXJyZW50U3RlcEluZGV4KSB7XG4gICAgICBtb3ZpbmdEaXJlY3Rpb24gPSBNb3ZpbmdEaXJlY3Rpb24uQmFja3dhcmRzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZpbmdEaXJlY3Rpb24gPSBNb3ZpbmdEaXJlY3Rpb24uU3RheTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW92aW5nRGlyZWN0aW9uO1xuICB9XG59XG4iXX0=
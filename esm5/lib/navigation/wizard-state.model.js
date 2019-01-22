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
var WizardState = /** @class */ (function () {
    /**
     * Constructor
     */
    function WizardState() {
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
    Object.defineProperty(WizardState.prototype, "defaultStepIndex", {
        /**
         * The initial step index.
         * This value can be either:
         * - the index of a wizard step with a `selected` directive, or
         * - the default step index, set in the [[WizardComponent]]
         */
        get: /**
         * The initial step index.
         * This value can be either:
         * - the index of a wizard step with a `selected` directive, or
         * - the default step index, set in the [[WizardComponent]]
         * @return {?}
         */
        function () {
            /** @type {?} */
            var foundDefaultStep = this.wizardSteps.find(function (step) { return step.defaultSelected; });
            if (foundDefaultStep) {
                return this.getIndexOfStep(foundDefaultStep);
            }
            else {
                return this._defaultStepIndex;
            }
        },
        /**
         * Sets the initial default step.
         * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
         *
         * @param defaultStepIndex The new default wizard step index
         */
        set: /**
         * Sets the initial default step.
         * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
         *
         * @param {?} defaultStepIndex The new default wizard step index
         * @return {?}
         */
        function (defaultStepIndex) {
            this._defaultStepIndex = defaultStepIndex;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WizardState.prototype, "currentStep", {
        /**
         * The WizardStep object belonging to the currently visible and selected step.
         * The currentStep is always the currently selected wizard step.
         * The currentStep can be either completed, if it was visited earlier,
         * or not completed, if it is visited for the first time or its state is currently out of date.
         *
         * If this wizard contains no steps, currentStep is null
         */
        get: /**
         * The WizardStep object belonging to the currently visible and selected step.
         * The currentStep is always the currently selected wizard step.
         * The currentStep can be either completed, if it was visited earlier,
         * or not completed, if it is visited for the first time or its state is currently out of date.
         *
         * If this wizard contains no steps, currentStep is null
         * @return {?}
         */
        function () {
            if (this.hasStep(this.currentStepIndex)) {
                return this.wizardSteps[this.currentStepIndex];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardState.prototype, "completed", {
        /**
         * The completeness of the wizard.
         * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
         */
        get: /**
         * The completeness of the wizard.
         * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
         * @return {?}
         */
        function () {
            return this.wizardSteps.every(function (step) { return step.completed || step.optional; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param updatedNavigationMode The name of the new navigation mode
     */
    /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param {?} updatedNavigationMode The name of the new navigation mode
     * @return {?}
     */
    WizardState.prototype.updateNavigationMode = /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param {?} updatedNavigationMode The name of the new navigation mode
     * @return {?}
     */
    function (updatedNavigationMode) {
        this.navigationMode = navigationModeFactory(updatedNavigationMode, this);
    };
    /**
     * Updates the wizard steps to the new array
     *
     * @param updatedWizardSteps The updated wizard steps
     */
    /**
     * Updates the wizard steps to the new array
     *
     * @param {?} updatedWizardSteps The updated wizard steps
     * @return {?}
     */
    WizardState.prototype.updateWizardSteps = /**
     * Updates the wizard steps to the new array
     *
     * @param {?} updatedWizardSteps The updated wizard steps
     * @return {?}
     */
    function (updatedWizardSteps) {
        // the wizard is currently not in the initialization phase
        if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
            this.currentStepIndex = updatedWizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
        }
        this.wizardSteps = updatedWizardSteps;
    };
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param stepIndex The to be checked index of a step inside this wizard
     * @returns True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param {?} stepIndex The to be checked index of a step inside this wizard
     * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    WizardState.prototype.hasStep = /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param {?} stepIndex The to be checked index of a step inside this wizard
     * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    function (stepIndex) {
        return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
    };
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @returns True if this wizard has a previous step before the current step
     */
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @return {?} True if this wizard has a previous step before the current step
     */
    WizardState.prototype.hasPreviousStep = /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @return {?} True if this wizard has a previous step before the current step
     */
    function () {
        return this.hasStep(this.currentStepIndex - 1);
    };
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @returns True if this wizard has a next step after the current step
     */
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @return {?} True if this wizard has a next step after the current step
     */
    WizardState.prototype.hasNextStep = /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @return {?} True if this wizard has a next step after the current step
     */
    function () {
        return this.hasStep(this.currentStepIndex + 1);
    };
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @returns True if the wizard is currently inside its last step
     */
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @return {?} True if the wizard is currently inside its last step
     */
    WizardState.prototype.isLastStep = /**
     * Checks if this wizard is currently inside its last step
     *
     * @return {?} True if the wizard is currently inside its last step
     */
    function () {
        return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
    };
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @param stepIndex The given index
     * @returns The found [[WizardStep]] at the given index `stepIndex`
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     */
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     * @param {?} stepIndex The given index
     * @return {?} The found [[WizardStep]] at the given index `stepIndex`
     */
    WizardState.prototype.getStepAtIndex = /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     * @param {?} stepIndex The given index
     * @return {?} The found [[WizardStep]] at the given index `stepIndex`
     */
    function (stepIndex) {
        if (!this.hasStep(stepIndex)) {
            throw new Error("Expected a known step, but got stepIndex: " + stepIndex + ".");
        }
        return this.wizardSteps[stepIndex];
    };
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param stepId The given step id
     * @returns The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param {?} stepId The given step id
     * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    WizardState.prototype.getIndexOfStepWithId = /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param {?} stepId The given step id
     * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    function (stepId) {
        return this.wizardSteps.findIndex(function (step) { return step.stepId === stepId; });
    };
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param step The given [[WizardStep]]
     * @returns The found index of `step` or `-1` if the step is not included in the wizard
     */
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param {?} step The given [[WizardStep]]
     * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
     */
    WizardState.prototype.getIndexOfStep = /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param {?} step The given [[WizardStep]]
     * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
     */
    function (step) {
        return this.wizardSteps.indexOf(step);
    };
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param destinationStep The given destination step
     * @returns The calculated [[MovingDirection]]
     */
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param {?} destinationStep The given destination step
     * @return {?} The calculated [[MovingDirection]]
     */
    WizardState.prototype.getMovingDirection = /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param {?} destinationStep The given destination step
     * @return {?} The calculated [[MovingDirection]]
     */
    function (destinationStep) {
        /** @type {?} */
        var movingDirection;
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
    };
    WizardState.decorators = [
        { type: Injectable }
    ];
    WizardState.ctorParameters = function () { return []; };
    return WizardState;
}());
export { WizardState };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0YXRlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7QUFZakU7SUE4RUU7O09BRUc7SUFDSDtRQS9FQTs7V0FFRztRQUNLLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUU5Qjs7V0FFRztRQUNJLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQTRCM0M7OztXQUdHO1FBQ0kscUJBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUF3QzdCLENBQUM7SUFoRUQsc0JBQVcseUNBQWdCO1FBSTNCOzs7OztXQUtHOzs7Ozs7OztRQUNIOztnQkFDUSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxlQUFlLEVBQXBCLENBQW9CLENBQUM7WUFFNUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7YUFDL0I7UUFDSCxDQUFDO1FBeEJEOzs7OztXQUtHOzs7Ozs7OztRQUNILFVBQTRCLGdCQUFnQjtZQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFnQkEsQ0FBQztJQTBCRixzQkFBVyxvQ0FBVztRQVJ0Qjs7Ozs7OztXQU9HOzs7Ozs7Ozs7O1FBQ0g7WUFD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ZSxJQUFnQjtRQUM3QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7OztJQUNILHdDQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLGVBQXVCOztZQUNwQyxlQUFnQztRQUVwQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0MsZUFBZSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7U0FDNUM7YUFBTSxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDbEQsZUFBZSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7U0FDN0M7YUFBTTtZQUNMLGVBQWUsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQzs7Z0JBeE1GLFVBQVU7OztJQXlNWCxrQkFBQztDQUFBLEFBek1ELElBeU1DO1NBeE1ZLFdBQVc7Ozs7OztJQUl0Qix3Q0FBOEI7Ozs7O0lBSzlCLGtDQUEyQzs7Ozs7O0lBZ0MzQyx1Q0FBNkI7Ozs7O0lBSzdCLHFDQUFzQzs7Ozs7SUFLdEMsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge25hdmlnYXRpb25Nb2RlRmFjdG9yeX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUucHJvdmlkZXInO1xuXG4vKipcbiAqIFRoZSBpbnRlcm5hbCBtb2RlbC9zdGF0ZSBvZiBhIHdpemFyZC5cbiAqIFRoaXMgbW9kZWwgY29udGFpbnM6XG4gKiAtIGFuIGFycmF5IHdpdGggYWxsIHN0ZXBzIHRoZSB3aXphcmQgY29udGFpbnNcbiAqIC0gdGhlIGluZGV4IG9mIHRoZSBzdGVwIHRoZSB3aXphcmQgY3VycmVudGx5IHJlc2lkZXMgaW5zaWRlXG4gKiAtIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb21wbGV0ZW5lc3Mgb2YgdGhlIHdpemFyZFxuICogLSBzb21lIGFkZGl0aW9uYWwgaGVscGVyIG1ldGhvZHNcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpemFyZFN0YXRlIHtcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIHN0ZXAgaW5kZXgsIGFzIHRha2VuIGZyb20gdGhlIFtbV2l6YXJkQ29tcG9uZW50XV1cbiAgICovXG4gIHByaXZhdGUgX2RlZmF1bHRTdGVwSW5kZXggPSAwO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSByZXByZXNlbnRhdGlvbiBvZiBhbGwgd2l6YXJkIHN0ZXBzIGJlbG9uZ2luZyB0byB0aGlzIG1vZGVsXG4gICAqL1xuICBwdWJsaWMgd2l6YXJkU3RlcHM6IEFycmF5PFdpemFyZFN0ZXA+ID0gW107XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluaXRpYWwgZGVmYXVsdCBzdGVwLlxuICAgKiBCZXdhcmU6IFRoaXMgaW5pdGlhbCBkZWZhdWx0IGlzIG9ubHkgdXNlZCBpZiBubyB3aXphcmQgc3RlcCBoYXMgYmVlbiBlbmhhbmNlZCB3aXRoIHRoZSBgc2VsZWN0ZWRgIGRpcmVjdGl2ZVxuICAgKlxuICAgKiBAcGFyYW0gZGVmYXVsdFN0ZXBJbmRleCBUaGUgbmV3IGRlZmF1bHQgd2l6YXJkIHN0ZXAgaW5kZXhcbiAgICovXG4gIHB1YmxpYyBzZXQgZGVmYXVsdFN0ZXBJbmRleChkZWZhdWx0U3RlcEluZGV4KSB7XG4gICAgdGhpcy5fZGVmYXVsdFN0ZXBJbmRleCA9IGRlZmF1bHRTdGVwSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGluaXRpYWwgc3RlcCBpbmRleC5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgZWl0aGVyOlxuICAgKiAtIHRoZSBpbmRleCBvZiBhIHdpemFyZCBzdGVwIHdpdGggYSBgc2VsZWN0ZWRgIGRpcmVjdGl2ZSwgb3JcbiAgICogLSB0aGUgZGVmYXVsdCBzdGVwIGluZGV4LCBzZXQgaW4gdGhlIFtbV2l6YXJkQ29tcG9uZW50XV1cbiAgICovXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFN0ZXBJbmRleCgpOiBudW1iZXIge1xuICAgIGNvbnN0IGZvdW5kRGVmYXVsdFN0ZXAgPSB0aGlzLndpemFyZFN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmRlZmF1bHRTZWxlY3RlZCk7XG5cbiAgICBpZiAoZm91bmREZWZhdWx0U3RlcCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5kZXhPZlN0ZXAoZm91bmREZWZhdWx0U3RlcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U3RlcEluZGV4O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgdmlzaWJsZSBhbmQgc2VsZWN0ZWQgc3RlcCBpbnNpZGUgdGhlIHdpemFyZFN0ZXBzIFF1ZXJ5TGlzdC5cbiAgICogSWYgdGhpcyB3aXphcmQgY29udGFpbnMgbm8gc3RlcHMsIGN1cnJlbnRTdGVwSW5kZXggaXMgLTFcbiAgICovXG4gIHB1YmxpYyBjdXJyZW50U3RlcEluZGV4ID0gLTE7XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGUgdXNlZCB0byBuYXZpZ2F0ZSBpbnNpZGUgdGhlIHdpemFyZFxuICAgKi9cbiAgcHVibGljIG5hdmlnYXRpb25Nb2RlOiBOYXZpZ2F0aW9uTW9kZTtcblxuICAvKipcbiAgICogVHJ1ZSwgaWYgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZG4ndCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nXG4gICAqL1xuICBwdWJsaWMgZGlzYWJsZU5hdmlnYXRpb25CYXI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBXaXphcmRTdGVwIG9iamVjdCBiZWxvbmdpbmcgdG8gdGhlIGN1cnJlbnRseSB2aXNpYmxlIGFuZCBzZWxlY3RlZCBzdGVwLlxuICAgKiBUaGUgY3VycmVudFN0ZXAgaXMgYWx3YXlzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgd2l6YXJkIHN0ZXAuXG4gICAqIFRoZSBjdXJyZW50U3RlcCBjYW4gYmUgZWl0aGVyIGNvbXBsZXRlZCwgaWYgaXQgd2FzIHZpc2l0ZWQgZWFybGllcixcbiAgICogb3Igbm90IGNvbXBsZXRlZCwgaWYgaXQgaXMgdmlzaXRlZCBmb3IgdGhlIGZpcnN0IHRpbWUgb3IgaXRzIHN0YXRlIGlzIGN1cnJlbnRseSBvdXQgb2YgZGF0ZS5cbiAgICpcbiAgICogSWYgdGhpcyB3aXphcmQgY29udGFpbnMgbm8gc3RlcHMsIGN1cnJlbnRTdGVwIGlzIG51bGxcbiAgICovXG4gIHB1YmxpYyBnZXQgY3VycmVudFN0ZXAoKTogV2l6YXJkU3RlcCB7XG4gICAgaWYgKHRoaXMuaGFzU3RlcCh0aGlzLmN1cnJlbnRTdGVwSW5kZXgpKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwc1t0aGlzLmN1cnJlbnRTdGVwSW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGNvbXBsZXRlbmVzcyBvZiB0aGUgd2l6YXJkLlxuICAgKiBJZiB0aGUgd2l6YXJkIGhhcyBiZWVuIGNvbXBsZXRlZCwgaS5lLiBhbGwgc3RlcHMgYXJlIGVpdGhlciBjb21wbGV0ZWQgb3Igb3B0aW9uYWwsIHRoaXMgdmFsdWUgaXMgdHJ1ZSwgb3RoZXJ3aXNlIGl0IGlzIGZhbHNlXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNvbXBsZXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5ldmVyeShzdGVwID0+IHN0ZXAuY29tcGxldGVkIHx8IHN0ZXAub3B0aW9uYWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBuYXZpZ2F0aW9uIG1vZGUgdG8gdGhlIG5hdmlnYXRpb24gbW9kZSB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAqXG4gICAqIEBwYXJhbSB1cGRhdGVkTmF2aWdhdGlvbk1vZGUgVGhlIG5hbWUgb2YgdGhlIG5ldyBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIHVwZGF0ZU5hdmlnYXRpb25Nb2RlKHVwZGF0ZWROYXZpZ2F0aW9uTW9kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZSA9IG5hdmlnYXRpb25Nb2RlRmFjdG9yeSh1cGRhdGVkTmF2aWdhdGlvbk1vZGUsIHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHdpemFyZCBzdGVwcyB0byB0aGUgbmV3IGFycmF5XG4gICAqXG4gICAqIEBwYXJhbSB1cGRhdGVkV2l6YXJkU3RlcHMgVGhlIHVwZGF0ZWQgd2l6YXJkIHN0ZXBzXG4gICAqL1xuICB1cGRhdGVXaXphcmRTdGVwcyh1cGRhdGVkV2l6YXJkU3RlcHM6IEFycmF5PFdpemFyZFN0ZXA+KTogdm9pZCB7XG4gICAgLy8gdGhlIHdpemFyZCBpcyBjdXJyZW50bHkgbm90IGluIHRoZSBpbml0aWFsaXphdGlvbiBwaGFzZVxuICAgIGlmICh0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCA+IDAgJiYgdGhpcy5jdXJyZW50U3RlcEluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9IHVwZGF0ZWRXaXphcmRTdGVwcy5pbmRleE9mKHRoaXMud2l6YXJkU3RlcHNbdGhpcy5jdXJyZW50U3RlcEluZGV4XSk7XG4gICAgfVxuXG4gICAgdGhpcy53aXphcmRTdGVwcyA9IHVwZGF0ZWRXaXphcmRTdGVwcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YCBpcyBpbnNpZGUgdGhlIHJhbmdlIG9mIHBvc3NpYmxlIHdpemFyZCBzdGVwcyBpbnNpZGUgdGhpcyB3aXphcmRcbiAgICpcbiAgICogQHBhcmFtIHN0ZXBJbmRleCBUaGUgdG8gYmUgY2hlY2tlZCBpbmRleCBvZiBhIHN0ZXAgaW5zaWRlIHRoaXMgd2l6YXJkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIGBzdGVwSW5kZXhgIGlzIGNvbnRhaW5lZCBpbnNpZGUgdGhpcyB3aXphcmQsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgaGFzU3RlcChzdGVwSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCA+IDAgJiYgMCA8PSBzdGVwSW5kZXggJiYgc3RlcEluZGV4IDwgdGhpcy53aXphcmRTdGVwcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGhhcyBhIHByZXZpb3VzIHN0ZXAsIGNvbXBhcmVkIHRvIHRoZSBjdXJyZW50IHN0ZXBcbiAgICpcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIHdpemFyZCBoYXMgYSBwcmV2aW91cyBzdGVwIGJlZm9yZSB0aGUgY3VycmVudCBzdGVwXG4gICAqL1xuICBoYXNQcmV2aW91c1N0ZXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzU3RlcCh0aGlzLmN1cnJlbnRTdGVwSW5kZXggLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhpcyB3aXphcmQgaGFzIGEgbmV4dCBzdGVwLCBjb21wYXJlZCB0byB0aGUgY3VycmVudCBzdGVwXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgaGFzIGEgbmV4dCBzdGVwIGFmdGVyIHRoZSBjdXJyZW50IHN0ZXBcbiAgICovXG4gIGhhc05leHRTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1N0ZXAodGhpcy5jdXJyZW50U3RlcEluZGV4ICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGlzIGN1cnJlbnRseSBpbnNpZGUgaXRzIGxhc3Qgc3RlcFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB3aXphcmQgaXMgY3VycmVudGx5IGluc2lkZSBpdHMgbGFzdCBzdGVwXG4gICAqL1xuICBpc0xhc3RTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCA+IDAgJiYgdGhpcy5jdXJyZW50U3RlcEluZGV4ID09PSB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIFtbV2l6YXJkU3RlcF1dIGF0IHRoZSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YC5cbiAgICogSWYgbm8gW1tXaXphcmRTdGVwXV0gZXhpc3RzIGF0IHRoZSBnaXZlbiBpbmRleCBhbiBFcnJvciBpcyB0aHJvd25cbiAgICpcbiAgICogQHBhcmFtIHN0ZXBJbmRleCBUaGUgZ2l2ZW4gaW5kZXhcbiAgICogQHJldHVybnMgVGhlIGZvdW5kIFtbV2l6YXJkU3RlcF1dIGF0IHRoZSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YFxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duLCBpZiB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAgZG9lc24ndCBleGlzdFxuICAgKi9cbiAgZ2V0U3RlcEF0SW5kZXgoc3RlcEluZGV4OiBudW1iZXIpOiBXaXphcmRTdGVwIHtcbiAgICBpZiAoIXRoaXMuaGFzU3RlcChzdGVwSW5kZXgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGEga25vd24gc3RlcCwgYnV0IGdvdCBzdGVwSW5kZXg6ICR7c3RlcEluZGV4fS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwc1tzdGVwSW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgc3RlcCB3aXRoIHRoZSBnaXZlbiBgc3RlcElkYC5cbiAgICogSWYgbm8gc3RlcCB3aXRoIHRoZSBnaXZlbiBgc3RlcElkYCBleGlzdHMsIGAtMWAgaXMgcmV0dXJuZWRcbiAgICpcbiAgICogQHBhcmFtIHN0ZXBJZCBUaGUgZ2l2ZW4gc3RlcCBpZFxuICAgKiBAcmV0dXJucyBUaGUgZm91bmQgaW5kZXggb2YgYSBzdGVwIHdpdGggdGhlIGdpdmVuIHN0ZXAgaWQsIG9yIGAtMWAgaWYgbm8gc3RlcCB3aXRoIHRoZSBnaXZlbiBpZCBpcyBpbmNsdWRlZCBpbiB0aGUgd2l6YXJkXG4gICAqL1xuICBnZXRJbmRleE9mU3RlcFdpdGhJZChzdGVwSWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuZmluZEluZGV4KHN0ZXAgPT4gc3RlcC5zdGVwSWQgPT09IHN0ZXBJZCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIGluZGV4IG9mIHRoZSBnaXZlbiBbW1dpemFyZFN0ZXBdXSBgc3RlcGAuXG4gICAqIElmIHRoZSBnaXZlbiBbW1dpemFyZFN0ZXBdXSBpcyBub3QgY29udGFpbmVkIGluc2lkZSB0aGlzIHdpemFyZCwgYC0xYCBpcyByZXR1cm5lZFxuICAgKlxuICAgKiBAcGFyYW0gc3RlcCBUaGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV1cbiAgICogQHJldHVybnMgVGhlIGZvdW5kIGluZGV4IG9mIGBzdGVwYCBvciBgLTFgIGlmIHRoZSBzdGVwIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgd2l6YXJkXG4gICAqL1xuICBnZXRJbmRleE9mU3RlcChzdGVwOiBXaXphcmRTdGVwKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5pbmRleE9mKHN0ZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGNvcnJlY3QgW1tNb3ZpbmdEaXJlY3Rpb25dXSB2YWx1ZSBmb3IgYSBnaXZlbiBgZGVzdGluYXRpb25TdGVwYCBjb21wYXJlZCB0byB0aGUgYGN1cnJlbnRTdGVwSW5kZXhgLlxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25TdGVwIFRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIFtbTW92aW5nRGlyZWN0aW9uXV1cbiAgICovXG4gIGdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvblN0ZXA6IG51bWJlcik6IE1vdmluZ0RpcmVjdGlvbiB7XG4gICAgbGV0IG1vdmluZ0RpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uO1xuXG4gICAgaWYgKGRlc3RpbmF0aW9uU3RlcCA+IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLkZvcndhcmRzO1xuICAgIH0gZWxzZSBpZiAoZGVzdGluYXRpb25TdGVwIDwgdGhpcy5jdXJyZW50U3RlcEluZGV4KSB7XG4gICAgICBtb3ZpbmdEaXJlY3Rpb24gPSBNb3ZpbmdEaXJlY3Rpb24uQmFja3dhcmRzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZpbmdEaXJlY3Rpb24gPSBNb3ZpbmdEaXJlY3Rpb24uU3RheTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW92aW5nRGlyZWN0aW9uO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NavigationMode } from './navigation-mode.interface';
import { MovingDirection } from '../util/moving-direction.enum';
/**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
export class StrictNavigationMode extends NavigationMode {
    /**
     * Constructor
     *
     * @param {?} wizardState The state of the wizard, that is configured with this navigation mode
     */
    constructor(wizardState) {
        super(wizardState);
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    canGoToStep(destinationIndex) {
        /** @type {?} */
        const hasStep = this.wizardState.hasStep(destinationIndex);
        /** @type {?} */
        const movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        /** @type {?} */
        const canExitCurrentStep = (previous) => {
            return previous ? this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        };
        /** @type {?} */
        const canEnterDestinationStep = (previous) => {
            return previous ? this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        };
        /** @type {?} */
        const allPreviousStepsComplete = (previous) => {
            if (previous) {
                return Promise.resolve(this.wizardState.wizardSteps
                    .filter((step, index) => index < destinationIndex && index !== this.wizardState.currentStepIndex)
                    .every(step => step.completed || step.optional));
            }
            else {
                return Promise.resolve(false);
            }
        };
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep)
            .then(allPreviousStepsComplete);
    }
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - all steps between the old current step and the destination step are marked as incomplete
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    goToStep(destinationIndex, preFinalize, postFinalize) {
        this.canGoToStep(destinationIndex).then(navigationAllowed => {
            if (navigationAllowed) {
                /** @type {?} */
                const movingDirection = this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                this.wizardState.currentStep.completed = true;
                this.wizardState.currentStep.exit(movingDirection);
                this.wizardState.currentStep.selected = false;
                // set all steps after the destination step to incomplete
                this.wizardState.wizardSteps
                    .filter((step, index) => this.wizardState.currentStepIndex > destinationIndex && index > destinationIndex)
                    .forEach(step => step.completed = false);
                this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                this.wizardState.currentStep.enter(movingDirection);
                this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                this.wizardState.currentStep.exit(MovingDirection.Stay);
                this.wizardState.currentStep.enter(MovingDirection.Stay);
            }
        });
    }
    /**
     * @param {?} destinationIndex
     * @return {?}
     */
    isNavigable(destinationIndex) {
        // a wizard step can be navigated to through the navigation bar, iff it's located before the current wizard step
        return destinationIndex < this.wizardState.currentStepIndex;
    }
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    reset() {
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error(`The wizard doesn't contain a step with index ${this.wizardState.defaultStepIndex}`);
        }
        // at least one step is before the default step, that is not optional
        /** @type {?} */
        const illegalDefaultStep = this.wizardState.wizardSteps
            .filter((step, index) => index < this.wizardState.defaultStepIndex)
            .some(step => !step.optional);
        if (illegalDefaultStep) {
            throw new Error(`The default step index ${this.wizardState.defaultStepIndex} is located after a non optional step`);
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach(step => {
            step.completed = false;
            step.selected = false;
        });
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(MovingDirection.Forwards);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaWN0LW5hdmlnYXRpb24tbW9kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0aW9uL3N0cmljdC1uYXZpZ2F0aW9uLW1vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7OztBQVk5RCxNQUFNLDJCQUE0QixTQUFRLGNBQWM7Ozs7OztJQU10RCxZQUFZLFdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7Ozs7Ozs7OztJQVlELFdBQVcsQ0FBQyxnQkFBd0I7O2NBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7Y0FFcEQsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7O2NBRXZFLGtCQUFrQixHQUFHLENBQUMsUUFBaUIsRUFBRSxFQUFFO1lBQy9DLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkcsQ0FBQzs7Y0FFSyx1QkFBdUIsR0FBRyxDQUFDLFFBQWlCLEVBQUUsRUFBRTtZQUNwRCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0gsQ0FBQzs7Y0FFSyx3QkFBd0Is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c0NvbnRlbnQiOlsiaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBbW05hdmlnYXRpb25Nb2RlXV0sIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBuYXZpZ2F0ZSB3aXRoIHN0cmljdCBsaW1pdGF0aW9ucy5cbiAqIFRoZSB1c2VyIGNhbiBvbmx5IG5hdmlnYXRpb24gdG8gYSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLCBpZjpcbiAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAqIC0gYWxsIHByZXZpb3VzIHN0ZXBzIHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGhhdmUgYmVlbiBjb21wbGV0ZWQgb3IgYXJlIG9wdGlvbmFsXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpY3ROYXZpZ2F0aW9uTW9kZSBleHRlbmRzIE5hdmlnYXRpb25Nb2RlIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgc3RhdGUgb2YgdGhlIHdpemFyZCwgdGhhdCBpcyBjb25maWd1cmVkIHdpdGggdGhpcyBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xuICAgIHN1cGVyKHdpemFyZFN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgd2l6YXJkIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAuXG4gICAqIEEgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgaWY6XG4gICAqIC0gaXQgZXhpc3RzXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogLSBhbGwgcHJldmlvdXMgc3RlcHMgdG8gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaGF2ZSBiZWVuIGNvbXBsZXRlZCBvciBhcmUgb3B0aW9uYWxcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBoYXNTdGVwID0gdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgY29uc3QgbW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICBjb25zdCBjYW5FeGl0Q3VycmVudFN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY2FuRXhpdFN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbkVudGVyRGVzdGluYXRpb25TdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpLmNhbkVudGVyU3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWxsUHJldmlvdXNTdGVwc0NvbXBsZXRlID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXG4gICAgICAgICAgLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IGluZGV4IDwgZGVzdGluYXRpb25JbmRleCAmJiBpbmRleCAhPT0gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4KVxuICAgICAgICAgIC5ldmVyeShzdGVwID0+IHN0ZXAuY29tcGxldGVkIHx8IHN0ZXAub3B0aW9uYWwpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxuICAgICAgLnRoZW4oY2FuRXhpdEN1cnJlbnRTdGVwKVxuICAgICAgLnRoZW4oY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXApXG4gICAgICAudGhlbihhbGxQcmV2aW91c1N0ZXBzQ29tcGxldGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIGVudGVyIHRoZSB3aXphcmQgc3RlcCB3aXRoIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cbiAgICogV2hlbiBlbnRlcmluZyB0aGUgZGVzdGluYXRpb24gc3RlcCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyBjb21wbGV0ZWRcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgdW5zZWxlY3RlZFxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIGV4aXRlZFxuICAgKiAtIGFsbCBzdGVwcyBiZXR3ZWVuIHRoZSBvbGQgY3VycmVudCBzdGVwIGFuZCB0aGUgZGVzdGluYXRpb24gc3RlcCBhcmUgbWFya2VkIGFzIGluY29tcGxldGVcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBzZXQgYXMgc2VsZWN0ZWRcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBlbnRlcmVkXG4gICAqXG4gICAqIFdoZW4gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY291bGRuJ3QgYmUgZW50ZXJlZCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGFuZCBlbnRlcmVkIGluIHRoZSBkaXJlY3Rpb24gYE1vdmluZ0RpcmVjdGlvbi5TdGF5YFxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwLCB3aGljaCBzaG91bGQgYmUgZW50ZXJlZFxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIHBvc3RGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqL1xuICBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICB0aGlzLmNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXgpLnRoZW4obmF2aWdhdGlvbkFsbG93ZWQgPT4ge1xuICAgICAgaWYgKG5hdmlnYXRpb25BbGxvd2VkKSB7XG4gICAgICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwcmVGaW5hbGl6ZSkge1xuICAgICAgICAgIHByZUZpbmFsaXplLmVtaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxlYXZlIGN1cnJlbnQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChtb3ZpbmdEaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gc2V0IGFsbCBzdGVwcyBhZnRlciB0aGUgZGVzdGluYXRpb24gc3RlcCB0byBpbmNvbXBsZXRlXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcbiAgICAgICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID4gZGVzdGluYXRpb25JbmRleCAmJiBpbmRleCA+IGRlc3RpbmF0aW9uSW5kZXgpXG4gICAgICAgICAgLmZvckVhY2goc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlKTtcblxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSBkZXN0aW5hdGlvbkluZGV4O1xuXG4gICAgICAgIC8vIGdvIHRvIG5leHQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocG9zdEZpbmFsaXplKSB7XG4gICAgICAgICAgcG9zdEZpbmFsaXplLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RlcCBjYW4ndCBiZSBsZWZ0LCByZWVudGVyIHRoZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAvLyBhIHdpemFyZCBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG8gdGhyb3VnaCB0aGUgbmF2aWdhdGlvbiBiYXIsIGlmZiBpdCdzIGxvY2F0ZWQgYmVmb3JlIHRoZSBjdXJyZW50IHdpemFyZCBzdGVwXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uSW5kZXggPCB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBzdGF0ZSBvZiB0aGlzIHdpemFyZC5cbiAgICogQSByZXNldCB0cmFuc2l0aW9ucyB0aGUgd2l6YXJkIGF1dG9tYXRpY2FsbHkgdG8gdGhlIGZpcnN0IHN0ZXAgYW5kIHNldHMgYWxsIHN0ZXBzIGFzIGluY29tcGxldGUuXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcbiAgICovXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIC8vIHRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXhcbiAgICBpZiAoIXRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcCh0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIGluZGV4ICR7dGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4fWApO1xuICAgIH1cblxuICAgIC8vIGF0IGxlYXN0IG9uZSBzdGVwIGlzIGJlZm9yZSB0aGUgZGVmYXVsdCBzdGVwLCB0aGF0IGlzIG5vdCBvcHRpb25hbFxuICAgIGNvbnN0IGlsbGVnYWxEZWZhdWx0U3RlcCA9IHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcbiAgICAgIC5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiBpbmRleCA8IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleClcbiAgICAgIC5zb21lKHN0ZXAgPT4gIXN0ZXAub3B0aW9uYWwpO1xuXG4gICAgaWYgKGlsbGVnYWxEZWZhdWx0U3RlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBzdGVwIGluZGV4ICR7dGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4fSBpcyBsb2NhdGVkIGFmdGVyIGEgbm9uIG9wdGlvbmFsIHN0ZXBgKTtcbiAgICB9XG5cbiAgICAvLyByZXNldCB0aGUgc3RlcCBpbnRlcm5hbCBzdGF0ZVxuICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgIHN0ZXAuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICBzdGVwLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgdGhlIGZpcnN0IHN0ZXAgYXMgdGhlIGN1cnJlbnQgc3RlcFxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleDtcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5Gb3J3YXJkcyk7XG4gIH1cbn1cbiJdfQ==
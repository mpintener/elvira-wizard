/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NavigationMode } from './navigation-mode.interface';
import { MovingDirection } from '../util/moving-direction.enum';
/**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
var /**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
FreeNavigationMode = /** @class */ (function (_super) {
    tslib_1.__extends(FreeNavigationMode, _super);
    /**
     * Constructor
     *
     * @param wizardState The model/state of the wizard, that is configured with this navigation mode
     */
    function FreeNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param destinationIndex The index of the destination wizard step
     * @returns True if the destination wizard step can be entered, false otherwise
     */
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    FreeNavigationMode.prototype.canGoToStep = /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    function (destinationIndex) {
        var _this = this;
        /** @type {?} */
        var hasStep = this.wizardState.hasStep(destinationIndex);
        /** @type {?} */
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        /** @type {?} */
        var canExitCurrentStep = function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        };
        /** @type {?} */
        var canEnterDestinationStep = function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        };
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
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
    FreeNavigationMode.prototype.goToStep = /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
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
    function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then(function (navigationAllowed) {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                /** @type {?} */
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(MovingDirection.Stay);
                _this.wizardState.currentStep.enter(MovingDirection.Stay);
            }
        });
    };
    /**
     * @param {?} destinationIndex
     * @return {?}
     */
    FreeNavigationMode.prototype.isNavigable = /**
     * @param {?} destinationIndex
     * @return {?}
     */
    function (destinationIndex) {
        return true;
    };
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     */
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    FreeNavigationMode.prototype.reset = /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    function () {
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach(function (step) {
            step.completed = false;
            step.selected = false;
        });
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(MovingDirection.Forwards);
    };
    return FreeNavigationMode;
}(NavigationMode));
/**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
export { FreeNavigationMode };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZS1uYXZpZ2F0aW9uLW1vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvbmF2aWdhdGlvbi9mcmVlLW5hdmlnYXRpb24tbW9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7QUFVOUQ7Ozs7Ozs7SUFBd0MsOENBQWM7SUFDcEQ7Ozs7T0FJRztJQUNILDRCQUFZLFdBQXdCO2VBQ2xDLGtCQUFNLFdBQVcsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7SUFDSCx3Q0FBVzs7Ozs7Ozs7O0lBQVgsVUFBWSxnQkFBd0I7UUFBcEMsaUJBZ0JDOztZQWZPLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7WUFFcEQsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7O1lBRXZFLGtCQUFrQixHQUFHLFVBQUMsUUFBaUI7WUFDM0MsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RyxDQUFDOztZQUVLLHVCQUF1QixHQUFHLFVBQUMsUUFBaUI7WUFDaEQsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdILENBQUM7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Y0FBYyxHQWlIckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIFtbTmF2aWdhdGlvbk1vZGVdXSwgd2hpY2ggYWxsb3dzIHRoZSB1c2VyIHRvIG5hdmlnYXRlIHdpdGhvdXQgYW55IGxpbWl0YXRpb25zLFxuICogYXMgbG9uZyBhcyB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvblxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgY2xhc3MgRnJlZU5hdmlnYXRpb25Nb2RlIGV4dGVuZHMgTmF2aWdhdGlvbk1vZGUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBtb2RlbC9zdGF0ZSBvZiB0aGUgd2l6YXJkLCB0aGF0IGlzIGNvbmZpZ3VyZWQgd2l0aCB0aGlzIG5hdmlnYXRpb24gbW9kZVxuICAgKi9cbiAgY29uc3RydWN0b3Iod2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gICAgc3VwZXIod2l6YXJkU3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSB3aXphcmQgY2FuIGJlIHRyYW5zaXRpb25lZCB0byB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcC5cbiAgICogQSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBpZjpcbiAgICogLSBpdCBleGlzdHNcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGhhc1N0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAoZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgIGNvbnN0IGNhbkV4aXRDdXJyZW50U3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jYW5FeGl0U3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCkuY2FuRW50ZXJTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGhhc1N0ZXApXG4gICAgICAudGhlbihjYW5FeGl0Q3VycmVudFN0ZXApXG4gICAgICAudGhlbihjYW5FbnRlckRlc3RpbmF0aW9uU3RlcCk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gZW50ZXIgdGhlIHdpemFyZCBzdGVwIHdpdGggdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LlxuICAgKiBXaGVuIGVudGVyaW5nIHRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIGNvbXBsZXRlZFxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyB1bnNlbGVjdGVkXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgc2V0IGFzIHNlbGVjdGVkXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgZW50ZXJlZFxuICAgKlxuICAgKiBXaGVuIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNvdWxkbid0IGJlIGVudGVyZWQsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBhbmQgZW50ZXJlZCBpbiB0aGUgZGlyZWN0aW9uIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGVudGVyZWRcbiAgICogQHBhcmFtIHByZUZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqIEBwYXJhbSBwb3N0RmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKi9cbiAgZ29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyLCBwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XG4gICAgdGhpcy5jYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4KS50aGVuKG5hdmlnYXRpb25BbGxvd2VkID0+IHtcbiAgICAgIGlmIChuYXZpZ2F0aW9uQWxsb3dlZCkge1xuICAgICAgICAvLyB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvblxuICAgICAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJlRmluYWxpemUpIHtcbiAgICAgICAgICBwcmVGaW5hbGl6ZS5lbWl0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZWF2ZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQobW92aW5nRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IGRlc3RpbmF0aW9uSW5kZXg7XG5cbiAgICAgICAgLy8gZ28gdG8gbmV4dCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIobW92aW5nRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwb3N0RmluYWxpemUpIHtcbiAgICAgICAgICBwb3N0RmluYWxpemUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGVwIGNhbid0IGJlIGxlZnQsIHJlZW50ZXIgdGhlIGN1cnJlbnQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzTmF2aWdhYmxlKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgc3RhdGUgb2YgdGhpcyB3aXphcmQuXG4gICAqIEEgcmVzZXQgdHJhbnNpdGlvbnMgdGhlIHdpemFyZCBhdXRvbWF0aWNhbGx5IHRvIHRoZSBmaXJzdCBzdGVwIGFuZCBzZXRzIGFsbCBzdGVwcyBhcyBpbmNvbXBsZXRlLlxuICAgKiBJbiBhZGRpdGlvbiB0aGUgd2hvbGUgd2l6YXJkIGlzIHNldCBhcyBpbmNvbXBsZXRlXG4gICAqL1xuICByZXNldCgpOiB2b2lkIHtcbiAgICAvLyB0aGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCB0aGUgZGVmYXVsdCBzdGVwIGluZGV4XG4gICAgaWYgKCF0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAodGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH1gKTtcbiAgICB9XG5cbiAgICAvLyByZXNldCB0aGUgc3RlcCBpbnRlcm5hbCBzdGF0ZVxuICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgIHN0ZXAuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICBzdGVwLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgdGhlIGZpcnN0IHN0ZXAgYXMgdGhlIGN1cnJlbnQgc3RlcFxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleDtcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5Gb3J3YXJkcyk7XG4gIH1cbn1cbiJdfQ==
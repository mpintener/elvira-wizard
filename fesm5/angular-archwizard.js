import { Directive, TemplateRef, ContentChild, EventEmitter, HostBinding, Input, Output, Injectable, Component, ContentChildren, ViewEncapsulation, forwardRef, Host, HostListener, Optional, NgModule } from '@angular/core';
import { isBoolean } from 'util';
import { __extends, __values } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `awWizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
 * to define the content of a step title inside the navigation bar.
 * This step title can be freely created and can contain more than only plain text
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepTitle>
 *     ...
 * </ng-template>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepTitleDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    function WizardStepTitleDirective(templateRef) {
        this.templateRef = templateRef;
    }
    WizardStepTitleDirective.decorators = [
        {
            type: Directive, args: [{
                selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
            },]
        }
    ];
    WizardStepTitleDirective.ctorParameters = function () {
        return [
            { type: TemplateRef }
        ];
    };
    return WizardStepTitleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `awWizardStepSymbol` directive can be used as an alternative to the `navigationSymbol` input of a [[WizardStep]]
 * to define the step symbol inside the navigation bar.  This way step symbol may contain arbitrary content.
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepSymbol>
 *     ...
 * </ng-template>
 * ```
 */
var WizardStepSymbolDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
     */
    function WizardStepSymbolDirective(templateRef) {
        this.templateRef = templateRef;
    }
    WizardStepSymbolDirective.decorators = [
        {
            type: Directive, args: [{
                selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
            },]
        }
    ];
    WizardStepSymbolDirective.ctorParameters = function () {
        return [
            { type: TemplateRef }
        ];
    };
    return WizardStepSymbolDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The direction in which a step transition was made
 *
 * @author Marc Arndt
 */
/** @enum {number} */
var MovingDirection = {
    /**
     * A forward step transition
     */
    Forwards: 0,
    /**
     * A backward step transition
     */
    Backwards: 1,
    /**
     * No step transition was done
     */
    Stay: 2,
};
MovingDirection[MovingDirection.Forwards] = 'Forwards';
MovingDirection[MovingDirection.Backwards] = 'Backwards';
MovingDirection[MovingDirection.Stay] = 'Stay';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * An interface describing the basic functionality, which must be provided by a navigation mode.
 * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
 *
 * @author Marc Arndt
 * @abstract
 */
var  /**
 * An interface describing the basic functionality, which must be provided by a navigation mode.
 * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
 *
 * @author Marc Arndt
 * @abstract
 */
    NavigationMode = /** @class */ (function () {
        function NavigationMode(wizardState) {
            this.wizardState = wizardState;
        }
        /**
         * Tries to transition the wizard to the previous step from the `currentStep`
         */
        /**
         * Tries to transition the wizard to the previous step from the `currentStep`
         * @param {?=} preFinalize
         * @param {?=} postFinalize
         * @return {?}
         */
        NavigationMode.prototype.goToPreviousStep = /**
     * Tries to transition the wizard to the previous step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
            function (preFinalize, postFinalize) {
                if (this.wizardState.hasPreviousStep()) {
                    this.goToStep(this.wizardState.currentStepIndex - 1, preFinalize, postFinalize);
                }
            };
        /**
         * Tries to transition the wizard to the next step from the `currentStep`
         */
        /**
         * Tries to transition the wizard to the next step from the `currentStep`
         * @param {?=} preFinalize
         * @param {?=} postFinalize
         * @return {?}
         */
        NavigationMode.prototype.goToNextStep = /**
     * Tries to transition the wizard to the next step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
            function (preFinalize, postFinalize) {
                if (this.wizardState.hasNextStep()) {
                    this.goToStep(this.wizardState.currentStepIndex + 1, preFinalize, postFinalize);
                }
            };
        return NavigationMode;
    }());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
var  /**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
    FreeNavigationMode = /** @class */ (function (_super) {
        __extends(FreeNavigationMode, _super);
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
var  /**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
    WizardCompletionStep = /** @class */ (function (_super) {
        __extends(WizardCompletionStep, _super);
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * A [[NavigationMode]], which allows the user to navigate with some limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - a completion step can only be entered, if all "normal" wizard steps have been completed
 *
 * @author Marc Arndt
 */
var  /**
 * A [[NavigationMode]], which allows the user to navigate with some limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - a completion step can only be entered, if all "normal" wizard steps have been completed
 *
 * @author Marc Arndt
 */
    SemiStrictNavigationMode = /** @class */ (function (_super) {
        __extends(SemiStrictNavigationMode, _super);
        /**
         * Constructor
         *
         * @param wizardState The model/state of the wizard, that is configured with this navigation mode
         */
        function SemiStrictNavigationMode(wizardState) {
            return _super.call(this, wizardState) || this;
        }
        /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
         *
         * @param destinationIndex The index of the destination wizard step
         * @returns True if the destination wizard step can be entered, false otherwise
         */
        /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
         *
         * @param {?} destinationIndex The index of the destination wizard step
         * @return {?} True if the destination wizard step can be entered, false otherwise
         */
        SemiStrictNavigationMode.prototype.canGoToStep = /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
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
                // provide the destination step as a lambda in case the index doesn't exist (i.e. hasStep === false)
                /** @type {?} */
                var destinationStep = function (previous) {
                    if (previous) {
                        /** @type {?} */
                        var allNormalStepsCompleted = _this.wizardState.wizardSteps
                            .filter(function (step, index) { return index < destinationIndex; })
                            .every(function (step) { return step.completed || step.optional || step.selected; });
                        return Promise.resolve(!(_this.wizardState.getStepAtIndex(destinationIndex) instanceof WizardCompletionStep) || allNormalStepsCompleted);
                    }
                    else {
                        return Promise.resolve(false);
                    }
                };
                return Promise.resolve(hasStep)
                    .then(canExitCurrentStep)
                    .then(canEnterDestinationStep)
                    .then(destinationStep);
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
        SemiStrictNavigationMode.prototype.goToStep = /**
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
         * @inheritDoc
         */
        /**
         * @inheritDoc
         * @param {?} destinationIndex
         * @return {?}
         */
        SemiStrictNavigationMode.prototype.isNavigable = /**
     * @inheritDoc
     * @param {?} destinationIndex
     * @return {?}
     */
            function (destinationIndex) {
                if (this.wizardState.getStepAtIndex(destinationIndex) instanceof WizardCompletionStep) {
                    // a completion step can only be entered, if all previous steps have been completed, are optional, or selected
                    return this.wizardState.wizardSteps.filter(function (step, index) { return index < destinationIndex; })
                        .every(function (step) { return step.completed || step.optional || step.selected; });
                }
                else {
                    // a "normal" step can always be entered
                    return true;
                }
            };
        /**
         * @inheritDoc
         */
        /**
         * @inheritDoc
         * @return {?}
         */
        SemiStrictNavigationMode.prototype.reset = /**
     * @inheritDoc
     * @return {?}
     */
            function () {
                // the wizard doesn't contain a step with the default step index
                if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
                    throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
                }
                // the default step is a completion step and the wizard contains more than one step
                /** @type {?} */
                var defaultCompletionStep = this.wizardState.getStepAtIndex(this.wizardState.defaultStepIndex) instanceof WizardCompletionStep &&
                    this.wizardState.wizardSteps.length !== 1;
                if (defaultCompletionStep) {
                    throw new Error("The default step index " + this.wizardState.defaultStepIndex + " references a completion step");
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
        return SemiStrictNavigationMode;
    }(NavigationMode));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
var  /**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
    StrictNavigationMode = /** @class */ (function (_super) {
        __extends(StrictNavigationMode, _super);
        /**
         * Constructor
         *
         * @param wizardState The state of the wizard, that is configured with this navigation mode
         */
        function StrictNavigationMode(wizardState) {
            return _super.call(this, wizardState) || this;
        }
        /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         * - all previous steps to the destination step have been completed or are optional
         *
         * @param destinationIndex The index of the destination wizard step
         * @returns True if the destination wizard step can be entered, false otherwise
         */
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
        StrictNavigationMode.prototype.canGoToStep = /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
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
                /** @type {?} */
                var allPreviousStepsComplete = function (previous) {
                    if (previous) {
                        return Promise.resolve(_this.wizardState.wizardSteps
                            .filter(function (step, index) { return index < destinationIndex && index !== _this.wizardState.currentStepIndex; })
                            .every(function (step) { return step.completed || step.optional; }));
                    }
                    else {
                        return Promise.resolve(false);
                    }
                };
                return Promise.resolve(hasStep)
                    .then(canExitCurrentStep)
                    .then(canEnterDestinationStep)
                    .then(allPreviousStepsComplete);
            };
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
        StrictNavigationMode.prototype.goToStep = /**
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
            function (destinationIndex, preFinalize, postFinalize) {
                var _this = this;
                this.canGoToStep(destinationIndex).then(function (navigationAllowed) {
                    if (navigationAllowed) {
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
                        // set all steps after the destination step to incomplete
                        _this.wizardState.wizardSteps
                            .filter(function (step, index) { return _this.wizardState.currentStepIndex > destinationIndex && index > destinationIndex; })
                            .forEach(function (step) { return step.completed = false; });
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
        StrictNavigationMode.prototype.isNavigable = /**
     * @param {?} destinationIndex
     * @return {?}
     */
            function (destinationIndex) {
                // a wizard step can be navigated to through the navigation bar, iff it's located before the current wizard step
                return destinationIndex < this.wizardState.currentStepIndex;
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
        StrictNavigationMode.prototype.reset = /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
            function () {
                var _this = this;
                // the wizard doesn't contain a step with the default step index
                if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
                    throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
                }
                // at least one step is before the default step, that is not optional
                /** @type {?} */
                var illegalDefaultStep = this.wizardState.wizardSteps
                    .filter(function (step, index) { return index < _this.wizardState.defaultStepIndex; })
                    .some(function (step) { return !step.optional; });
                if (illegalDefaultStep) {
                    throw new Error("The default step index " + this.wizardState.defaultStepIndex + " is located after a non optional step");
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
        return StrictNavigationMode;
    }(NavigationMode));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * A factory method used to create [[NavigationMode]] instances
 *
 * @param {?} navigationMode The name of the to be used navigation mode
 * @param {?} wizardState The wizard state of the wizard
 * @return {?} The created [[NavigationMode]]
 */
function navigationModeFactory(navigationMode, wizardState) {
    switch (navigationMode) {
        case 'free':
            return new FreeNavigationMode(wizardState);
        case 'semi-strict':
            return new SemiStrictNavigationMode(wizardState);
        case 'strict':
        default:
            return new StrictNavigationMode(wizardState);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `aw-wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <aw-wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </aw-wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 * </aw-wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-completion-step>...</aw-wizard-completion-step>
 * </aw-wizard>
 * ```
 *
 * @author Marc Arndt
 */
var WizardComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param model The model for this wizard component
     */
    function WizardComponent(model) {
        this.model = model;
        /**
         * The location of the navigation bar inside the wizard.
         * This location can be either top, bottom, left or right
         */
        this.navBarLocation = 'top';
        /**
         * The layout of the navigation bar inside the wizard.
         * The layout can be either small, large-filled, large-empty or large-symbols
         */
        this.navBarLayout = 'small';
        /**
         * The direction in which the steps inside the navigation bar should be shown.
         * The direction can be either `left-to-right` or `right-to-left`
         */
        this.navBarDirection = 'left-to-right';
        /**
         * The navigation mode used for transitioning between different steps.
         * The navigation mode can be either `strict`, `semi-strict` or `free`
         */
        this.navigationMode = 'strict';
        /**
         * The initially selected step, represented by its index
         */
        this.defaultStepIndex = 0;
        /**
         * True, if the navigation bar shouldn't be used for navigating
         */
        this.disableNavigationBar = false;
    }
    Object.defineProperty(WizardComponent.prototype, "horizontalOrientation", {
        /**
         * Returns true if this wizard uses a horizontal orientation.
         * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
         *
         * @returns True if this wizard uses a horizontal orientation
         */
        get: /**
         * Returns true if this wizard uses a horizontal orientation.
         * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
         *
         * @return {?} True if this wizard uses a horizontal orientation
         */
            function () {
                return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
            },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "verticalOrientation", {
        /**
         * Returns true if this wizard uses a vertical orientation.
         * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
         *
         * @returns True if this wizard uses a vertical orientation
         */
        get: /**
         * Returns true if this wizard uses a vertical orientation.
         * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
         *
         * @return {?} True if this wizard uses a vertical orientation
         */
            function () {
                return this.navBarLocation === 'left' || this.navBarLocation === 'right';
            },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "navigation", {
        /**
         * The navigation mode for this wizard
         */
        get: /**
         * The navigation mode for this wizard
         * @return {?}
         */
            function () {
                return this.model.navigationMode;
            },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the model after certain input values have changed
     *
     * @param changes The detected changes
     */
    /**
     * Updates the model after certain input values have changed
     *
     * @param {?} changes The detected changes
     * @return {?}
     */
    WizardComponent.prototype.ngOnChanges = /**
     * Updates the model after certain input values have changed
     *
     * @param {?} changes The detected changes
     * @return {?}
     */
        function (changes) {
            var e_1, _a;
            try {
                for (var _b = __values(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var propName = _c.value;
                    /** @type {?} */
                    var change = changes[propName];
                    if (!change.firstChange) {
                        switch (propName) {
                            case 'defaultStepIndex':
                                this.model.defaultStepIndex = parseInt(change.currentValue, 10);
                                break;
                            case 'disableNavigationBar':
                                this.model.disableNavigationBar = change.currentValue;
                                break;
                            case 'navigationMode':
                                this.model.updateNavigationMode(change.currentValue);
                                break;
                            /* istanbul ignore next */
                            default:
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    WizardComponent.prototype.ngAfterContentInit = /**
     * Initialization work
     * @return {?}
     */
        function () {
            var _this = this;
            // add a subscriber to the wizard steps QueryList to listen to changes in the DOM
            this.wizardSteps.changes.subscribe(function (changedWizardSteps) {
                _this.model.updateWizardSteps(changedWizardSteps.toArray());
            });
            // initialize the model
            this.model.disableNavigationBar = this.disableNavigationBar;
            this.model.defaultStepIndex = this.defaultStepIndex;
            this.model.updateWizardSteps(this.wizardSteps.toArray());
            this.model.updateNavigationMode(this.navigationMode);
            // finally reset the whole wizard state
            this.navigation.reset();
        };
    WizardComponent.decorators = [
        {
            type: Component, args: [{
                selector: 'aw-wizard',
                template: "<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'left',\n    horizontal: navBarLocation == 'top',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n\n<div [ngClass]=\"{\n  'wizard-steps': true,\n  vertical: navBarLocation == 'left' || navBarLocation == 'right',\n  horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\n}\">\n  <ng-content></ng-content>\n</div>\n\n<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'right',\n    horizontal: navBarLocation == 'bottom',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [WizardState],
                styles: ["aw-wizard{display:flex;justify-content:flex-start}aw-wizard.vertical{flex-direction:row}aw-wizard.horizontal{flex-direction:column}aw-wizard .wizard-steps{top:0;display:flex}aw-wizard .wizard-steps.vertical{min-width:calc(100% - 280px);width:80%;height:100%;flex-direction:column}aw-wizard .wizard-steps.horizontal{width:100%;flex-direction:row}"]
            }]
        }
    ];
    WizardComponent.ctorParameters = function () {
        return [
            { type: WizardState }
        ];
    };
    WizardComponent.propDecorators = {
        wizardSteps: [{ type: ContentChildren, args: [WizardStep,] }],
        navBarLocation: [{ type: Input }],
        navBarLayout: [{ type: Input }],
        navBarDirection: [{ type: Input }],
        navigationMode: [{ type: Input }],
        defaultStepIndex: [{ type: Input }],
        disableNavigationBar: [{ type: Input }],
        horizontalOrientation: [{ type: HostBinding, args: ['class.horizontal',] }],
        verticalOrientation: [{ type: HostBinding, args: ['class.vertical',] }]
    };
    return WizardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepComponent = /** @class */ (function (_super) {
    __extends(WizardCompletionStepComponent, _super);
    /**
     * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
     * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
     * leaving it again to a previous step.
     * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
     * as completed.
     *
     * ### Syntax
     *
     * ```html
     * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
     *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
     *    (stepEnter)="event emitter to be called when the wizard step is entered"
     *    (stepExit)="event emitter to be called when the wizard step is exited">
     *    ...
     * </aw-wizard-completion-step>
     * ```
     *
     * ### Example
     *
     * ```html
     * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
     *    ...
     * </aw-wizard-completion-step>
     * ```
     *
     * With a navigation symbol from the `font-awesome` font:
     *
     * ```html
     * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </aw-wizard-completion-step>
     * ```
     *
     * @author Marc Arndt
     */
    function WizardCompletionStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepComponent.decorators = [
        {
            type: Component, args: [{
                selector: 'aw-wizard-completion-step',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    { provide: WizardStep, useExisting: forwardRef(function () { return WizardCompletionStepComponent; }) },
                    { provide: WizardCompletionStep, useExisting: forwardRef(function () { return WizardCompletionStepComponent; }) }
                ],
                styles: ["aw-wizard-completion-step{height:auto;width:100%}"]
            }]
        }
    ];
    return WizardCompletionStepComponent;
}(WizardCompletionStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
 * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
 * otherwise it will look like a normal `ul` component.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-navigation-bar></aw-wizard-navigation-bar>
 * ```
 *
 * @author Marc Arndt
 */
var WizardNavigationBarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state the wizard currently resides in
     */
    function WizardNavigationBarComponent(wizardState) {
        this.wizardState = wizardState;
        /**
         * The direction in which the wizard steps should be shown in the navigation bar.
         * This value can be either `left-to-right` or `right-to-left`
         */
        this.direction = 'left-to-right';
    }
    Object.defineProperty(WizardNavigationBarComponent.prototype, "navigationMode", {
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
    Object.defineProperty(WizardNavigationBarComponent.prototype, "wizardSteps", {
        /**
         * Returns all [[WizardStep]]s contained in the wizard
         *
         * @returns An array containing all [[WizardStep]]s
         */
        get: /**
         * Returns all [[WizardStep]]s contained in the wizard
         *
         * @return {?} An array containing all [[WizardStep]]s
         */
            function () {
                switch (this.direction) {
                    case 'right-to-left':
                        return this.wizardState.wizardSteps.slice().reverse();
                    case 'left-to-right':
                    default:
                        return this.wizardState.wizardSteps;
                }
            },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationBarComponent.prototype, "numberOfWizardSteps", {
        /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @returns The number of wizard steps to be displayed
         */
        get: /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @return {?} The number of wizard steps to be displayed
         */
            function () {
                return this.wizardState.wizardSteps.length;
            },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as current
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as current
     */
    WizardNavigationBarComponent.prototype.isCurrent = /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as current
     */
        function (wizardStep) {
            return wizardStep.selected && !wizardStep.completed && !this.wizardState.completed;
        };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as done
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as done
     */
    WizardNavigationBarComponent.prototype.isDone = /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as done
     */
        function (wizardStep) {
            return (wizardStep.completed && !wizardStep.selected) || this.wizardState.completed;
        };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as default
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as default
     */
    WizardNavigationBarComponent.prototype.isDefault = /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as default
     */
        function (wizardStep) {
            return !wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
        };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as editing
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as editing
     */
    WizardNavigationBarComponent.prototype.isEditing = /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as editing
     */
        function (wizardStep) {
            return wizardStep.selected && wizardStep.completed && !this.wizardState.completed;
        };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as optional
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as optional
     */
    WizardNavigationBarComponent.prototype.isOptional = /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as optional
     */
        function (wizardStep) {
            return wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
        };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as navigable
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as navigable
     */
    WizardNavigationBarComponent.prototype.isNavigable = /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as navigable
     */
        function (wizardStep) {
            return !wizardStep.selected && !this.wizardState.disableNavigationBar &&
                this.navigationMode.isNavigable(this.wizardState.getIndexOfStep(wizardStep));
        };
    WizardNavigationBarComponent.decorators = [
        {
            type: Component, args: [{
                selector: 'aw-wizard-navigation-bar',
                template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li *ngFor=\"let step of wizardSteps\"\n      [ngClass]=\"{\n        default: isDefault(step),\n        current: isCurrent(step),\n        done: isDone(step),\n        editing: isEditing(step),\n        optional: isOptional(step),\n        navigable: isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\" [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["aw-wizard-navigation-bar.horizontal.small ul.steps-indicator{padding:24px 0 10px}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 14px);top:-7px;left:calc(50% + 14px / 2)}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li .step-indicator{position:absolute;top:-14px;left:calc(50% - 14px / 2);width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.default a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid #5cd179}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#5cd179}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:#5cd179}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:#5cd179;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:#5cd179;border:2px solid #5cd179}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#5cd179;color:#5cd179}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:#5cd179;color:#5cd179}aw-wizard-navigation-bar.horizontal ul.steps-indicator{display:flex;flex-direction:row;justify-content:center;margin:0;width:100%;list-style:none}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2:before{left:25%;right:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2 li{width:50%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3:before{left:16.66666667%;right:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3 li{width:33.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4:before{left:12.5%;right:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4 li{width:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5:before{left:10%;right:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5 li{width:20%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6:before{left:8.33333333%;right:8.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6 li{width:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7:before{left:7.14285714%;right:7.14285714%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7 li{width:14.28571429%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8:before{left:6.25%;right:6.25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8 li{width:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9:before{left:5.55555556%;right:5.55555556%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9 li{width:11.11111111%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10:before{left:5%;right:5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10 li{width:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.horizontal ul.steps-indicator li{position:relative;margin:0;padding:0;pointer-events:none;text-align:center}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a{cursor:pointer}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a .label{display:inline-block;padding-top:10px;color:#5cd179;line-height:14px;font-size:10px;text-decoration:none;text-transform:uppercase;text-align:center;font-weight:400;transition:.25s}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a:hover .label{color:#01638e}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a .label{color:#9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a{cursor:auto}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a .label{color:#9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing .step-indicator{border:2px solid #5cd179}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a div.label{color:#5cd179}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a div.step-indicator{border:2px solid #5cd179}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.editing a div.label{color:#5cd179}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.editing a div.step-indicator{border:2px solid #5cd179!important}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done.navigable a div.label{color:#9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done.navigable a div.step-indicator{border:2px solid #9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.navigable{pointer-events:auto}", "aw-wizard-navigation-bar.vertical{max-width:280px;width:20%;height:100%;position:-webkit-sticky;position:sticky;top:0}aw-wizard-navigation-bar.vertical.small ul.steps-indicator{padding:5px 5px 5px 19px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-7px;top:14px;height:calc(100% - 14px);width:1px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-14px;width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li div{min-height:14px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing .step-indicator{background-color:#9e9e9e}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing a:hover .step-indicator{background-color:#919191}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.default a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li div{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing .step-indicator{background-color:#9e9e9e}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing a:hover .step-indicator{background-color:#919191}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li div{min-height:54px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid #5cd179}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing .step-indicator{border:2px solid #9e9e9e}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#5cd179}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing a:hover .step-indicator{border-color:#858585}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:#5cd179}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li div{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:#5cd179;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing .step-indicator{background-color:#9e9e9e;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator{background-color:#919191}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:#5cd179}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li div{min-height:54px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:#5cd179;border:2px solid #5cd179}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing .step-indicator{color:#9e9e9e;border:2px solid #9e9e9e}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#5cd179;color:#5cd179}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator{border-color:#858585;color:#858585}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:#5cd179;color:#5cd179}aw-wizard-navigation-bar.vertical ul.steps-indicator{display:flex;flex-direction:column;justify-content:center;list-style:none;margin:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.vertical ul.steps-indicator li{position:relative;pointer-events:none}aw-wizard-navigation-bar.vertical ul.steps-indicator li:not(:last-child){margin-bottom:0;padding-bottom:10px}aw-wizard-navigation-bar.vertical ul.steps-indicator li a{cursor:pointer}aw-wizard-navigation-bar.vertical ul.steps-indicator li a .label{margin-left:15px;color:#5cd179;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:left;font-weight:700;transition:.25s}aw-wizard-navigation-bar.vertical ul.steps-indicator li a:hover .label{color:#01638e}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a .label{color:#5cd179}aw-wizard-navigation-bar.vertical ul.steps-indicator li.navigable{pointer-events:auto}"]
            }]
        }
    ];
    WizardNavigationBarComponent.ctorParameters = function () {
        return [
            { type: WizardState }
        ];
    };
    WizardNavigationBarComponent.propDecorators = {
        direction: [{ type: Input }]
    };
    return WizardNavigationBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard-step` component is used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepComponent = /** @class */ (function (_super) {
    __extends(WizardStepComponent, _super);
    /**
     * The `aw-wizard-step` component is used to define a normal step inside a wizard.
     *
     * ### Syntax
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
     *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    ...
     * </aw-wizard-step>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <aw-wizard-step"
     *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    <ng-template awWizardStepTitle>
     *        step title
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        symbol
     *    </ng-template>
     *    ...
     * </aw-wizard-step>
     * ```
     *
     * ### Example
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </aw-wizard-step>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <aw-wizard-step>
     *    <ng-template awWizardStepTitle>
     *        Address information
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        <i class="fa fa-taxi"></i>
     *    </ng-template>
     * </aw-wizard-step>
     * ```
     *
     * @author Marc Arndt
     */
    function WizardStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepComponent.decorators = [
        {
            type: Component, args: [{
                selector: 'aw-wizard-step',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    { provide: WizardStep, useExisting: forwardRef(function () { return WizardStepComponent; }) }
                ],
                styles: ["aw-wizard-step{height:auto;width:100%}"]
            }]
        }
    ];
    return WizardStepComponent;
}(WizardStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `awEnableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step awEnableBackLinks (stepExit)="exit function">
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Final step" awEnableBackLinks>
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var EnableBackLinksDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param completionStep The wizard completion step, which should be exitable
     */
    function EnableBackLinksDirective(completionStep) {
        this.completionStep = completionStep;
        /**
         * This EventEmitter is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new EventEmitter();
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    EnableBackLinksDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
        function () {
            this.completionStep.canExit = true;
            this.completionStep.stepExit = this.stepExit;
        };
    EnableBackLinksDirective.decorators = [
        {
            type: Directive, args: [{
                selector: '[awEnableBackLinks]'
            },]
        }
    ];
    EnableBackLinksDirective.ctorParameters = function () {
        return [
            { type: WizardCompletionStep, decorators: [{ type: Host }] }
        ];
    };
    EnableBackLinksDirective.propDecorators = {
        stepExit: [{ type: Output }]
    };
    return EnableBackLinksDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepOffset]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepOffset]] and false otherwise
 */
function isStepOffset(value) {
    return value.hasOwnProperty('stepOffset');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepId]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepId]] and false otherwise
 */
function isStepId(value) {
    return value.hasOwnProperty('stepId') && !(value instanceof WizardStep);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepIndex]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepIndex]] and false otherwise
 */
function isStepIndex(value) {
    return value.hasOwnProperty('stepIndex');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        {
            type: Directive, args: [{
                selector: '[awGoToStep]'
            },]
        }
    ];
    GoToStepDirective.ctorParameters = function () {
        return [
            { type: WizardState },
            { type: WizardStep, decorators: [{ type: Optional }] }
        ];
    };
    GoToStepDirective.propDecorators = {
        preFinalize: [{ type: Output }],
        postFinalize: [{ type: Output }],
        finalize: [{ type: Output }],
        targetStep: [{ type: Input, args: ['awGoToStep',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return GoToStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `awNextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button awNextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var NextStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard
     */
    function NextStepDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    Object.defineProperty(NextStepDirective.prototype, "finalize", {
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
    Object.defineProperty(NextStepDirective.prototype, "navigationMode", {
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
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     * @param {?} event
     * @return {?}
     */
    NextStepDirective.prototype.onClick = /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     * @param {?} event
     * @return {?}
     */
        function (event) {
            this.navigationMode.goToNextStep(this.preFinalize, this.postFinalize);
        };
    NextStepDirective.decorators = [
        {
            type: Directive, args: [{
                selector: '[awNextStep]'
            },]
        }
    ];
    NextStepDirective.ctorParameters = function () {
        return [
            { type: WizardState }
        ];
    };
    NextStepDirective.propDecorators = {
        preFinalize: [{ type: Output }],
        postFinalize: [{ type: Output }],
        finalize: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return NextStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `awOptionalStep` directive can be used to define an optional `wizard-step`.
 * An optional wizard step is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="Second step" awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var OptionalStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    function OptionalStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    OptionalStepDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
        function () {
            this.wizardStep.optional = true;
        };
    OptionalStepDirective.decorators = [
        {
            type: Directive, args: [{
                selector: '[awOptionalStep]'
            },]
        }
    ];
    OptionalStepDirective.ctorParameters = function () {
        return [
            { type: WizardStep, decorators: [{ type: Host }] }
        ];
    };
    return OptionalStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `awPreviousStep` directive can be used to navigate to the previous step.
 * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
 *
 * ### Syntax
 *
 * ```html
 * <button awPreviousStep>...</button>
 * ```
 *
 * @author Marc Arndt
 */
var PreviousStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard
     */
    function PreviousStepDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    Object.defineProperty(PreviousStepDirective.prototype, "finalize", {
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
         * A convenience field for `preFinalize`
         *
         * @param emitter The [[EventEmitter]] to be set
         */
        set: /**
         * A convenience field for `preFinalize`
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
    Object.defineProperty(PreviousStepDirective.prototype, "navigationMode", {
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
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     */
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     * @param {?} event
     * @return {?}
     */
    PreviousStepDirective.prototype.onClick = /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     * @param {?} event
     * @return {?}
     */
        function (event) {
            this.navigationMode.goToPreviousStep(this.preFinalize, this.postFinalize);
        };
    PreviousStepDirective.decorators = [
        {
            type: Directive, args: [{
                selector: '[awPreviousStep]'
            },]
        }
    ];
    PreviousStepDirective.ctorParameters = function () {
        return [
            { type: WizardState }
        ];
    };
    PreviousStepDirective.propDecorators = {
        preFinalize: [{ type: Output }],
        postFinalize: [{ type: Output }],
        finalize: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return PreviousStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        {
            type: Directive, args: [{
                selector: '[awResetWizard]'
            },]
        }
    ];
    ResetWizardDirective.ctorParameters = function () {
        return [
            { type: WizardState }
        ];
    };
    ResetWizardDirective.propDecorators = {
        finalize: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ResetWizardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
var SelectedStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which should be selected by default
     */
    function SelectedStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    SelectedStepDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
        function () {
            this.wizardStep.defaultSelected = true;
        };
    SelectedStepDirective.decorators = [
        {
            type: Directive, args: [{
                selector: '[awSelectedStep]'
            },]
        }
    ];
    SelectedStepDirective.ctorParameters = function () {
        return [
            { type: WizardStep, decorators: [{ type: Host }] }
        ];
    };
    return SelectedStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `awWizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
 * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard`, and all steps inside the `wizard`,
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <div awWizardCompletionStep [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'font-family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </div>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepDirective = /** @class */ (function (_super) {
    __extends(WizardCompletionStepDirective, _super);
    /**
     * The `awWizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
     * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
     * leaving it again to a previous step.
     * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard`, and all steps inside the `wizard`,
     * as completed.
     *
     * ### Syntax
     *
     * ```html
     * <div awWizardCompletionStep [stepTitle]="title of the wizard step"
     *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'font-family' }"
     *    (stepEnter)="event emitter to be called when the wizard step is entered"
     *    (stepExit)="event emitter to be called when the wizard step is exited">
     *    ...
     * </div>
     * ```
     *
     * ### Example
     *
     * ```html
     * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
     *    ...
     * </div>
     * ```
     *
     * With a navigation symbol from the `font-awesome` font:
     *
     * ```html
     * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </div>
     * ```
     *
     * @author Marc Arndt
     */
    function WizardCompletionStepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepDirective.decorators = [
        {
            type: Directive, args: [{
                selector: '[awWizardCompletionStep]',
                providers: [
                    { provide: WizardStep, useExisting: forwardRef(function () { return WizardCompletionStepDirective; }) },
                    { provide: WizardCompletionStep, useExisting: forwardRef(function () { return WizardCompletionStepDirective; }) }
                ]
            },]
        }
    ];
    return WizardCompletionStepDirective;
}(WizardCompletionStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The `awWizardStep` directive can be used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepDirective = /** @class */ (function (_super) {
    __extends(WizardStepDirective, _super);
    /**
     * The `awWizardStep` directive can be used to define a normal step inside a wizard.
     *
     * ### Syntax
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
     *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    ...
     * </div>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    <ng-template awWizardStepTitle>
     *        step title
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        symbol
     *    </ng-template>
     *    ...
     * </div>
     * ```
     *
     * ### Example
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </div>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <div awWizardStep>
     *    <ng-template awWizardStepTitle>
     *        Address information
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        <i class="fa fa-taxi"></i>
     *    </ng-template>
     * </div>
     * ```
     *
     * @author Marc Arndt
     */
    function WizardStepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepDirective.decorators = [
        {
            type: Directive, args: [{
                selector: '[awWizardStep]',
                providers: [
                    { provide: WizardStep, useExisting: forwardRef(function () { return WizardStepDirective; }) }
                ]
            },]
        }
    ];
    return WizardStepDirective;
}(WizardStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The module defining all the content inside `angular-archwizard`
 *
 * @author Marc Arndt
 */
var ArchwizardModule = /** @class */ (function () {
    /**
     * The module defining all the content inside `angular-archwizard`
     *
     * @author Marc Arndt
     */
    function ArchwizardModule() {
    }
    /* istanbul ignore next */
    /* istanbul ignore next */
    /**
     * @return {?}
     */
    ArchwizardModule.forRoot = /* istanbul ignore next */
        /**
         * @return {?}
         */
        function () {
            return { ngModule: ArchwizardModule, providers: [] };
        };
    ArchwizardModule.decorators = [
        {
            type: NgModule, args: [{
                declarations: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective
                ]
            },]
        }
    ];
    return ArchwizardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ArchwizardModule, WizardComponent, WizardCompletionStepComponent, WizardNavigationBarComponent, WizardStepComponent, EnableBackLinksDirective, GoToStepDirective, NextStepDirective, OptionalStepDirective, PreviousStepDirective, ResetWizardDirective, SelectedStepDirective, WizardCompletionStepDirective, WizardStepDirective, WizardStepTitleDirective, FreeNavigationMode, NavigationMode, SemiStrictNavigationMode, StrictNavigationMode, WizardState, navigationModeFactory, MovingDirection, WizardCompletionStep, WizardStep, isStepId, isStepIndex, isStepOffset, WizardCompletionStepComponent as ɵh, WizardNavigationBarComponent as ɵg, WizardStepComponent as ɵf, WizardComponent as ɵa, EnableBackLinksDirective as ɵn, GoToStepDirective as ɵj, NextStepDirective as ɵk, OptionalStepDirective as ɵm, PreviousStepDirective as ɵl, ResetWizardDirective as ɵr, SelectedStepDirective as ɵq, WizardCompletionStepDirective as ɵp, WizardStepSymbolDirective as ɵe, WizardStepTitleDirective as ɵd, WizardStepDirective as ɵo, WizardState as ɵb, WizardCompletionStep as ɵi, WizardStep as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1hcmNod2l6YXJkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9mcmVlLW5hdmlnYXRpb24tbW9kZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vc2VtaS1zdHJpY3QtbmF2aWdhdGlvbi1tb2RlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vc3RyaWN0LW5hdmlnYXRpb24tbW9kZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5wcm92aWRlci50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvY29tcG9uZW50cy93aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvY29tcG9uZW50cy93aXphcmQtc3RlcC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9lbmFibGUtYmFjay1saW5rcy5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvdXRpbC9zdGVwLW9mZnNldC5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvdXRpbC9zdGVwLWlkLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3N0ZXAtaW5kZXguaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvZ28tdG8tc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9uZXh0LXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvb3B0aW9uYWwtc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9wcmV2aW91cy1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9zZWxlY3RlZC1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2FyY2h3aXphcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtYXJjIG9uIDAxLjA2LjE3LlxuICovXG5pbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBgYXdXaXphcmRTdGVwVGl0bGVgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byB0aGUgYHN0ZXBUaXRsZWAgaW5wdXQgb2YgYSBbW1dpemFyZFN0ZXBdXVxuICogdG8gZGVmaW5lIHRoZSBjb250ZW50IG9mIGEgc3RlcCB0aXRsZSBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxuICogVGhpcyBzdGVwIHRpdGxlIGNhbiBiZSBmcmVlbHkgY3JlYXRlZCBhbmQgY2FuIGNvbnRhaW4gbW9yZSB0aGFuIG9ubHkgcGxhaW4gdGV4dFxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwVGl0bGU+XG4gKiAgICAgLi4uXG4gKiA8L25nLXRlbXBsYXRlPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F3U3RlcFRpdGxlXSwgbmctdGVtcGxhdGVbYXdXaXphcmRTdGVwVGl0bGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlUmVmIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250ZW50IG9mIHRoZSBgbmctdGVtcGxhdGVgIHRoYXQgY29udGFpbnMgdGhpcyBbW1dpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZV1dXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGUgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIGFzIGFuIGFsdGVybmF0aXZlIHRvIHRoZSBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXQgb2YgYSBbW1dpemFyZFN0ZXBdXVxuICogdG8gZGVmaW5lIHRoZSBzdGVwIHN5bWJvbCBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLiAgVGhpcyB3YXkgc3RlcCBzeW1ib2wgbWF5IGNvbnRhaW4gYXJiaXRyYXJ5IGNvbnRlbnQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBTeW1ib2w+XG4gKiAgICAgLi4uXG4gKiA8L25nLXRlbXBsYXRlPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F3U3RlcFN5bWJvbF0sIG5nLXRlbXBsYXRlW2F3V2l6YXJkU3RlcFN5bWJvbF0nXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlUmVmIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250ZW50IG9mIHRoZSBgbmctdGVtcGxhdGVgIHRoYXQgY29udGFpbnMgdGhpcyBbW1dpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmVdXVxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cbiIsImltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge1dpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZX0gZnJvbSAnLi4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc0Jvb2xlYW59IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uU3ltYm9sfSBmcm9tICcuL25hdmlnYXRpb24tc3ltYm9sLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogQmFzaWMgZnVuY3Rpb25hbGl0eSBldmVyeSB0eXBlIG9mIHdpemFyZCBzdGVwIG5lZWRzIHRvIHByb3ZpZGVcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpemFyZFN0ZXAge1xuICAvKipcbiAgICogQSBzdGVwIHRpdGxlIHByb3BlcnR5LCB3aGljaCBjb250YWlucyB0aGUgdmlzaWJsZSBoZWFkZXIgdGl0bGUgb2YgdGhlIHN0ZXAuXG4gICAqIFRoaXMgdGl0bGUgaXMgdGhlbiBzaG93biBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxuICAgKiBDb21wYXJlZCB0byBgc3RlcFRpdGxlYCB0aGlzIHByb3BlcnR5IGNhbiBjb250YWluIGFueSBodG1sIGNvbnRlbnQgYW5kIG5vdCBvbmx5IHBsYWluIHRleHRcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlKVxuICBwdWJsaWMgc3RlcFRpdGxlVGVtcGxhdGU6IFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZTtcblxuICAvKipcbiAgICogQSBzdGVwIHN5bWJvbCBwcm9wZXJ0eSB0aGF0LCBpZiBkZWZpbmVkLCBvdmVycmlkZXMgYG5hdmlnYXRpb25TeW1ib2xgLlxuICAgKiBBbGxvd3MgdG8gZGlzcGxheSBhcmJpdHJhcnkgY29udGVudCBhcyBhIHN0ZXAgc3ltYm9sIGluc3RlYWQgb2YgcGxhaW4gdGV4dC5cbiAgICovXG4gIEBDb250ZW50Q2hpbGQoV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSlcbiAgcHVibGljIHN0ZXBTeW1ib2xUZW1wbGF0ZTogV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZTtcblxuICAvKipcbiAgICogQSBzdGVwIGlkLCB1bmlxdWUgdG8gdGhlIHN0ZXBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdGVwSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzdGVwIHRpdGxlIHByb3BlcnR5LCB3aGljaCBjb250YWlucyB0aGUgdmlzaWJsZSBoZWFkZXIgdGl0bGUgb2YgdGhlIHN0ZXAuXG4gICAqIFRoaXMgdGl0bGUgaXMgb25seSBzaG93biBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLCBpZiBgc3RlcFRpdGxlVGVtcGxhdGVgIGlzIG5vdCBkZWZpbmVkIG9yIG51bGwuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc3RlcFRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3ltYm9sIHByb3BlcnR5LCB3aGljaCBjb250YWlucyBhbiBvcHRpb25hbCBzeW1ib2wgZm9yIHRoZSBzdGVwIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIFRha2VzIGVmZmVjdCB3aGVuIGBzdGVwU3ltYm9sVGVtcGxhdGVgIGlzIG5vdCBkZWZpbmVkIG9yIG51bGwuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmF2aWdhdGlvblN5bWJvbDogTmF2aWdhdGlvblN5bWJvbCA9IHsgc3ltYm9sOiAnJyB9O1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaGFzIGJlZW4gY29tcGxldGVkXG4gICAqL1xuICBwdWJsaWMgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nIGlmIHRoZSB3aXphcmQgc3RlcCBpcyBjdXJyZW50bHkgc2VsZWN0ZWRcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZywgaWYgdGhlIHdpemFyZCBzdGVwIHNob3VsZCBiZSBzZWxlY3RlZCBieSBkZWZhdWx0LCBpLmUuIGFmdGVyIHRoZSB3aXphcmQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYXMgdGhlIGluaXRpYWwgc3RlcFxuICAgKi9cbiAgcHVibGljIGRlZmF1bHRTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaXMgYW4gb3B0aW9uYWwgc3RlcFxuICAgKi9cbiAgcHVibGljIG9wdGlvbmFsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gb3IgYm9vbGVhbiBkZWNpZGluZywgaWYgdGhpcyBzdGVwIGNhbiBiZSBlbnRlcmVkXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgY2FuRW50ZXI6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfCBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBvciBib29sZWFuIGRlY2lkaW5nLCBpZiB0aGlzIHN0ZXAgY2FuIGJlIGV4aXRlZFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNhbkV4aXQ6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfCBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGVudGVyZWQuXG4gICAqIFRoZSBib3VuZCBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgdG8gZG8gaW5pdGlhbGl6YXRpb24gd29yay5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc3RlcEVudGVyOiBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZXhpdGVkLlxuICAgKiBUaGUgYm91bmQgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGRvIGNsZWFudXAgd29yay5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc3RlcEV4aXQ6IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhpcyB3aXphcmQgc3RlcCBzaG91bGQgYmUgdmlzaWJsZSB0byB0aGUgdXNlci5cbiAgICogSWYgdGhlIHN0ZXAgc2hvdWxkIGJlIHZpc2libGUgdG8gdGhlIHVzZXIgZmFsc2UgaXMgcmV0dXJuZWQsIG90aGVyd2lzZSB0cnVlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2hpZGRlbicpXG4gIHB1YmxpYyBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5zZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZCB3aXRoIGEgZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBUcmFuc2l0aW9uZWQgaW4gdGhpcyBjYXNlIG1lYW5zIGVpdGhlciBlbnRlcmVkIG9yIGV4aXRlZCwgZGVwZW5kaW5nIG9uIHRoZSBnaXZlbiBgY29uZGl0aW9uYCBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSBjb25kaXRpb24gQSBjb25kaXRpb24gdmFyaWFibGUsIGRlY2lkaW5nIGlmIHRoZSBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgdHJhbnNpdGlvbmVkXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoaXMgc3RlcCBjYW4gdHJhbnNpdGlvbmVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biBpZiBgY29uZGl0aW9uYCBpcyBuZWl0aGVyIGEgZnVuY3Rpb24gbm9yIGEgYm9vbGVhblxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgY2FuVHJhbnNpdGlvblN0ZXAoY29uZGl0aW9uOiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKGlzQm9vbGVhbihjb25kaXRpb24pKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbmRpdGlvbiBhcyBib29sZWFuKTtcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbmRpdGlvbihkaXJlY3Rpb24pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgSW5wdXQgdmFsdWUgJyR7Y29uZGl0aW9ufScgaXMgbmVpdGhlciBhIGJvb2xlYW4gbm9yIGEgZnVuY3Rpb25gKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZW50ZXJlZFxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXAgaXMgZW50ZXJlZFxuICAgKi9cbiAgcHVibGljIGVudGVyKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5zdGVwRW50ZXIuZW1pdChkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZXhpdGVkXG4gICAqXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgc3RlcCBpcyBleGl0ZWRcbiAgICovXG4gIHB1YmxpYyBleGl0KGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSB7XG4gICAgdGhpcy5zdGVwRXhpdC5lbWl0KGRpcmVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0cnVlLCBpZiB0aGlzIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkIGZyb20gdGhlIGdpdmVuIGRpcmVjdGlvbi5cbiAgICogQmVjYXVzZSB0aGlzIG1ldGhvZCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSBgY2FuRW50ZXJgLCBpdCB3aWxsIHRocm93IGFuIGVycm9yLCBpZiBgY2FuRW50ZXJgIGlzIG5laXRoZXIgYSBib29sZWFuXG4gICAqIG5vciBhIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhpcyBzdGVwIHNob3VsZCBiZSBlbnRlcmVkXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoZSBzdGVwIGNhbiBiZSBlbnRlcmVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duIGlmIGBhbkVudGVyYCBpcyBuZWl0aGVyIGEgZnVuY3Rpb24gbm9yIGEgYm9vbGVhblxuICAgKi9cbiAgcHVibGljIGNhbkVudGVyU3RlcChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBXaXphcmRTdGVwLmNhblRyYW5zaXRpb25TdGVwKHRoaXMuY2FuRW50ZXIsIGRpcmVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0cnVlLCBpZiB0aGlzIHdpemFyZCBzdGVwIGNhbiBiZSBleGl0ZWQgaW50byBnaXZlbiBkaXJlY3Rpb24uXG4gICAqIEJlY2F1c2UgdGhpcyBtZXRob2QgZGVwZW5kcyBvbiB0aGUgdmFsdWUgYGNhbkV4aXRgLCBpdCB3aWxsIHRocm93IGFuIGVycm9yLCBpZiBgY2FuRXhpdGAgaXMgbmVpdGhlciBhIGJvb2xlYW5cbiAgICogbm9yIGEgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGlzIHN0ZXAgc2hvdWxkIGJlIGxlZnRcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhlIHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLCBmYWxzZSBvdGhlcndpc2VcbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biBpZiBgY2FuRXhpdGAgaXMgbmVpdGhlciBhIGZ1bmN0aW9uIG5vciBhIGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBjYW5FeGl0U3RlcChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBXaXphcmRTdGVwLmNhblRyYW5zaXRpb25TdGVwKHRoaXMuY2FuRXhpdCwgZGlyZWN0aW9uKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIGEgc3RlcCB0cmFuc2l0aW9uIHdhcyBtYWRlXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cblxuLyoqXG4gKiBUaGlzIGVudW0gY29udGFpbnMgdGhlIGRpZmZlcmVudCBwb3NzaWJsZSBtb3ZpbmcgZGlyZWN0aW9ucyBpbiB3aGljaCBhIHdpemFyZCBjYW4gYmUgdHJhdmVyc2VkXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBlbnVtIE1vdmluZ0RpcmVjdGlvbiB7XG4gIC8qKlxuICAgKiBBIGZvcndhcmQgc3RlcCB0cmFuc2l0aW9uXG4gICAqL1xuICBGb3J3YXJkcyxcbiAgLyoqXG4gICAqIEEgYmFja3dhcmQgc3RlcCB0cmFuc2l0aW9uXG4gICAqL1xuICBCYWNrd2FyZHMsXG4gIC8qKlxuICAgKiBObyBzdGVwIHRyYW5zaXRpb24gd2FzIGRvbmVcbiAgICovXG4gIFN0YXlcbn1cbiIsImltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBbiBpbnRlcmZhY2UgZGVzY3JpYmluZyB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0eSwgd2hpY2ggbXVzdCBiZSBwcm92aWRlZCBieSBhIG5hdmlnYXRpb24gbW9kZS5cbiAqIEEgbmF2aWdhdGlvbiBtb2RlIG1hbmFnZXMgdGhlIG5hdmlnYXRpb24gYmV0d2VlbiBkaWZmZXJlbnQgd2l6YXJkIHN0ZXBzLCB0aGlzIGNvbnRhaW5zIHRoZSB2YWxpZGF0aW9uLCBpZiBhIHN0ZXAgdHJhbnNpdGlvbiBjYW4gYmUgZG9uZVxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmF2aWdhdGlvbk1vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgd2l6YXJkIHN0ZXAsIGFzIGRlZmluZWQgYnkgdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvLlxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZCB0byBhbmQgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBhYnN0cmFjdCBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiBUcmllcyB0byB0cmFuc2l0aW9uIHRvIHRoZSB3aXphcmQgc3RlcCwgYXMgZGVub3RlZCBieSB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXG4gICAqIElmIHRoaXMgaXMgbm90IHBvc3NpYmxlLCB0aGUgY3VycmVudCB3aXphcmQgc3RlcCBzaG91bGQgYmUgZXhpdGVkIGFuZCB0aGVuIHJlZW50ZXJlZCB3aXRoIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICovXG4gIGFic3RyYWN0IGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciB0aGUgd2l6YXJkIHN0ZXAsIGxvY2F0ZWQgYXQgdGhlIGdpdmVuIGluZGV4LCBpcyBjYW4gYmUgbmF2aWdhdGVkIHRvXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG8sIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgYWJzdHJhY3QgaXNOYXZpZ2FibGUoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBzdGF0ZSBvZiB0aGlzIHdpemFyZC5cbiAgICogQSByZXNldCB0cmFuc2l0aW9ucyB0aGUgd2l6YXJkIGF1dG9tYXRpY2FsbHkgdG8gdGhlIGZpcnN0IHN0ZXAgYW5kIHNldHMgYWxsIHN0ZXBzIGFzIGluY29tcGxldGUuXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcbiAgICovXG4gIGFic3RyYWN0IHJlc2V0KCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIHRyYW5zaXRpb24gdGhlIHdpemFyZCB0byB0aGUgcHJldmlvdXMgc3RlcCBmcm9tIHRoZSBgY3VycmVudFN0ZXBgXG4gICAqL1xuICBnb1RvUHJldmlvdXNTdGVwKHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy53aXphcmRTdGF0ZS5oYXNQcmV2aW91c1N0ZXAoKSkge1xuICAgICAgdGhpcy5nb1RvU3RlcCh0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggLSAxLCBwcmVGaW5hbGl6ZSwgcG9zdEZpbmFsaXplKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gdHJhbnNpdGlvbiB0aGUgd2l6YXJkIHRvIHRoZSBuZXh0IHN0ZXAgZnJvbSB0aGUgYGN1cnJlbnRTdGVwYFxuICAgKi9cbiAgZ29Ub05leHRTdGVwKHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy53aXphcmRTdGF0ZS5oYXNOZXh0U3RlcCgpKSB7XG4gICAgICB0aGlzLmdvVG9TdGVwKHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCArIDEsIHByZUZpbmFsaXplLCBwb3N0RmluYWxpemUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBbW05hdmlnYXRpb25Nb2RlXV0sIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBuYXZpZ2F0ZSB3aXRob3V0IGFueSBsaW1pdGF0aW9ucyxcbiAqIGFzIGxvbmcgYXMgdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGNsYXNzIEZyZWVOYXZpZ2F0aW9uTW9kZSBleHRlbmRzIE5hdmlnYXRpb25Nb2RlIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgbW9kZWwvc3RhdGUgb2YgdGhlIHdpemFyZCwgdGhhdCBpcyBjb25maWd1cmVkIHdpdGggdGhpcyBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xuICAgIHN1cGVyKHdpemFyZFN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgd2l6YXJkIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAuXG4gICAqIEEgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgaWY6XG4gICAqIC0gaXQgZXhpc3RzXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBoYXNTdGVwID0gdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgY29uc3QgbW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICBjb25zdCBjYW5FeGl0Q3VycmVudFN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY2FuRXhpdFN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbkVudGVyRGVzdGluYXRpb25TdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpLmNhbkVudGVyU3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxuICAgICAgLnRoZW4oY2FuRXhpdEN1cnJlbnRTdGVwKVxuICAgICAgLnRoZW4oY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIGVudGVyIHRoZSB3aXphcmQgc3RlcCB3aXRoIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cbiAgICogV2hlbiBlbnRlcmluZyB0aGUgZGVzdGluYXRpb24gc3RlcCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyBjb21wbGV0ZWRcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgdW5zZWxlY3RlZFxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIGV4aXRlZFxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIHNldCBhcyBzZWxlY3RlZFxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIGVudGVyZWRcbiAgICpcbiAgICogV2hlbiB0aGUgZGVzdGluYXRpb24gc3RlcCBjb3VsZG4ndCBiZSBlbnRlcmVkLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgYW5kIGVudGVyZWQgaW4gdGhlIGRpcmVjdGlvbiBgTW92aW5nRGlyZWN0aW9uLlN0YXlgXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBlbnRlcmVkXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICovXG4gIGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xuICAgIHRoaXMuY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleCkudGhlbihuYXZpZ2F0aW9uQWxsb3dlZCA9PiB7XG4gICAgICBpZiAobmF2aWdhdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByZUZpbmFsaXplKSB7XG4gICAgICAgICAgcHJlRmluYWxpemUuZW1pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGVhdmUgY3VycmVudCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSBkZXN0aW5hdGlvbkluZGV4O1xuXG4gICAgICAgIC8vIGdvIHRvIG5leHQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocG9zdEZpbmFsaXplKSB7XG4gICAgICAgICAgcG9zdEZpbmFsaXplLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RlcCBjYW4ndCBiZSBsZWZ0LCByZWVudGVyIHRoZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxuICAgKiBBIHJlc2V0IHRyYW5zaXRpb25zIHRoZSB3aXphcmQgYXV0b21hdGljYWxseSB0byB0aGUgZmlyc3Qgc3RlcCBhbmQgc2V0cyBhbGwgc3RlcHMgYXMgaW5jb21wbGV0ZS5cbiAgICogSW4gYWRkaXRpb24gdGhlIHdob2xlIHdpemFyZCBpcyBzZXQgYXMgaW5jb21wbGV0ZVxuICAgKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgLy8gdGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggdGhlIGRlZmF1bHQgc3RlcCBpbmRleFxuICAgIGlmICghdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9YCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGhlIHN0ZXAgaW50ZXJuYWwgc3RhdGVcbiAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgc3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHRoZSBmaXJzdCBzdGVwIGFzIHRoZSBjdXJyZW50IHN0ZXBcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXg7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHMpO1xuICB9XG59XG4iLCJpbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4vd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQmFzaWMgZnVuY3Rpb25hbGl0eSBldmVyeSB3aXphcmQgY29tcGxldGlvbiBzdGVwIG5lZWRzIHRvIHByb3ZpZGVcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwIGV4dGVuZHMgV2l6YXJkU3RlcCB7XG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcHVibGljIHN0ZXBFeGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgY2FuRXhpdDogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgZW50ZXIoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGVwRW50ZXIuZW1pdChkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgZXhpdChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IHZvaWQge1xuICAgIC8vIHNldCB0aGlzIGNvbXBsZXRpb24gc3RlcCBhcyBpbmNvbXBsZXRlXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0ZXBFeGl0LmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIFtbTmF2aWdhdGlvbk1vZGVdXSwgd2hpY2ggYWxsb3dzIHRoZSB1c2VyIHRvIG5hdmlnYXRlIHdpdGggc29tZSBsaW1pdGF0aW9ucy5cbiAqIFRoZSB1c2VyIGNhbiBvbmx5IG5hdmlnYXRpb24gdG8gYSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLCBpZjpcbiAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAqIC0gYSBjb21wbGV0aW9uIHN0ZXAgY2FuIG9ubHkgYmUgZW50ZXJlZCwgaWYgYWxsIFwibm9ybWFsXCIgd2l6YXJkIHN0ZXBzIGhhdmUgYmVlbiBjb21wbGV0ZWRcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbWlTdHJpY3ROYXZpZ2F0aW9uTW9kZSBleHRlbmRzIE5hdmlnYXRpb25Nb2RlIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgbW9kZWwvc3RhdGUgb2YgdGhlIHdpemFyZCwgdGhhdCBpcyBjb25maWd1cmVkIHdpdGggdGhpcyBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xuICAgIHN1cGVyKHdpemFyZFN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgd2l6YXJkIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAuXG4gICAqIEEgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgaWY6XG4gICAqIC0gaXQgZXhpc3RzXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogLSBhbGwgXCJub3JtYWxcIiB3aXphcmQgc3RlcHMgaGF2ZSBiZWVuIGNvbXBsZXRlZCwgYXJlIG9wdGlvbmFsIG9yIHNlbGVjdGVkLCBvciB0aGUgZGVzdGluYXRpb24gc3RlcCBpc24ndCBhIGNvbXBsZXRpb24gc3RlcFxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGhhc1N0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAoZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgIGNvbnN0IGNhbkV4aXRDdXJyZW50U3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jYW5FeGl0U3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCkuY2FuRW50ZXJTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH07XG5cbiAgICAvLyBwcm92aWRlIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGFzIGEgbGFtYmRhIGluIGNhc2UgdGhlIGluZGV4IGRvZXNuJ3QgZXhpc3QgKGkuZS4gaGFzU3RlcCA9PT0gZmFsc2UpXG4gICAgY29uc3QgZGVzdGluYXRpb25TdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgY29uc3QgYWxsTm9ybWFsU3RlcHNDb21wbGV0ZWQgPSB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXG4gICAgICAgICAgLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IGluZGV4IDwgZGVzdGluYXRpb25JbmRleClcbiAgICAgICAgICAuZXZlcnkoc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCB8fCBzdGVwLm9wdGlvbmFsIHx8IHN0ZXAuc2VsZWN0ZWQpO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgISh0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpIGluc3RhbmNlb2YgV2l6YXJkQ29tcGxldGlvblN0ZXApIHx8IGFsbE5vcm1hbFN0ZXBzQ29tcGxldGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGhhc1N0ZXApXG4gICAgICAudGhlbihjYW5FeGl0Q3VycmVudFN0ZXApXG4gICAgICAudGhlbihjYW5FbnRlckRlc3RpbmF0aW9uU3RlcClcbiAgICAgIC50aGVuKGRlc3RpbmF0aW9uU3RlcCk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gZW50ZXIgdGhlIHdpemFyZCBzdGVwIHdpdGggdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LlxuICAgKiBXaGVuIGVudGVyaW5nIHRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIGNvbXBsZXRlZFxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyB1bnNlbGVjdGVkXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgc2V0IGFzIHNlbGVjdGVkXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgZW50ZXJlZFxuICAgKlxuICAgKiBXaGVuIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNvdWxkbid0IGJlIGVudGVyZWQsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBhbmQgZW50ZXJlZCBpbiB0aGUgZGlyZWN0aW9uIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGVudGVyZWRcbiAgICogQHBhcmFtIHByZUZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqIEBwYXJhbSBwb3N0RmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKi9cbiAgZ29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyLCBwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XG4gICAgdGhpcy5jYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4KS50aGVuKG5hdmlnYXRpb25BbGxvd2VkID0+IHtcbiAgICAgIGlmIChuYXZpZ2F0aW9uQWxsb3dlZCkge1xuICAgICAgICAvLyB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvblxuICAgICAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJlRmluYWxpemUpIHtcbiAgICAgICAgICBwcmVGaW5hbGl6ZS5lbWl0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZWF2ZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQobW92aW5nRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IGRlc3RpbmF0aW9uSW5kZXg7XG5cbiAgICAgICAgLy8gZ28gdG8gbmV4dCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIobW92aW5nRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwb3N0RmluYWxpemUpIHtcbiAgICAgICAgICBwb3N0RmluYWxpemUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGVwIGNhbid0IGJlIGxlZnQsIHJlZW50ZXIgdGhlIGN1cnJlbnQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgaXNOYXZpZ2FibGUoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCkgaW5zdGFuY2VvZiBXaXphcmRDb21wbGV0aW9uU3RlcCkge1xuICAgICAgLy8gYSBjb21wbGV0aW9uIHN0ZXAgY2FuIG9ubHkgYmUgZW50ZXJlZCwgaWYgYWxsIHByZXZpb3VzIHN0ZXBzIGhhdmUgYmVlbiBjb21wbGV0ZWQsIGFyZSBvcHRpb25hbCwgb3Igc2VsZWN0ZWRcbiAgICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IGluZGV4IDwgZGVzdGluYXRpb25JbmRleClcbiAgICAgICAgLmV2ZXJ5KHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgfHwgc3RlcC5vcHRpb25hbCB8fCBzdGVwLnNlbGVjdGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYSBcIm5vcm1hbFwiIHN0ZXAgY2FuIGFsd2F5cyBiZSBlbnRlcmVkXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGluaGVyaXREb2NcbiAgICovXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIC8vIHRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXhcbiAgICBpZiAoIXRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcCh0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIGluZGV4ICR7dGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4fWApO1xuICAgIH1cblxuICAgIC8vIHRoZSBkZWZhdWx0IHN0ZXAgaXMgYSBjb21wbGV0aW9uIHN0ZXAgYW5kIHRoZSB3aXphcmQgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBzdGVwXG4gICAgY29uc3QgZGVmYXVsdENvbXBsZXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleCh0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXgpIGluc3RhbmNlb2YgV2l6YXJkQ29tcGxldGlvblN0ZXAgJiZcbiAgICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMubGVuZ3RoICE9PSAxO1xuXG4gICAgaWYgKGRlZmF1bHRDb21wbGV0aW9uU3RlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBzdGVwIGluZGV4ICR7dGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4fSByZWZlcmVuY2VzIGEgY29tcGxldGlvbiBzdGVwYCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGhlIHN0ZXAgaW50ZXJuYWwgc3RhdGVcbiAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgc3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHRoZSBmaXJzdCBzdGVwIGFzIHRoZSBjdXJyZW50IHN0ZXBcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXg7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHMpO1xuICB9XG59XG4iLCJpbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIFtbTmF2aWdhdGlvbk1vZGVdXSwgd2hpY2ggYWxsb3dzIHRoZSB1c2VyIHRvIG5hdmlnYXRlIHdpdGggc3RyaWN0IGxpbWl0YXRpb25zLlxuICogVGhlIHVzZXIgY2FuIG9ubHkgbmF2aWdhdGlvbiB0byBhIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAsIGlmOlxuICogLSB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICogLSBhbGwgcHJldmlvdXMgc3RlcHMgdG8gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaGF2ZSBiZWVuIGNvbXBsZXRlZCBvciBhcmUgb3B0aW9uYWxcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmljdE5hdmlnYXRpb25Nb2RlIGV4dGVuZHMgTmF2aWdhdGlvbk1vZGUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBzdGF0ZSBvZiB0aGUgd2l6YXJkLCB0aGF0IGlzIGNvbmZpZ3VyZWQgd2l0aCB0aGlzIG5hdmlnYXRpb24gbW9kZVxuICAgKi9cbiAgY29uc3RydWN0b3Iod2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gICAgc3VwZXIod2l6YXJkU3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSB3aXphcmQgY2FuIGJlIHRyYW5zaXRpb25lZCB0byB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcC5cbiAgICogQSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBpZjpcbiAgICogLSBpdCBleGlzdHNcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKiAtIGFsbCBwcmV2aW91cyBzdGVwcyB0byB0aGUgZGVzdGluYXRpb24gc3RlcCBoYXZlIGJlZW4gY29tcGxldGVkIG9yIGFyZSBvcHRpb25hbFxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGhhc1N0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAoZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgIGNvbnN0IGNhbkV4aXRDdXJyZW50U3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jYW5FeGl0U3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCkuY2FuRW50ZXJTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxQcmV2aW91c1N0ZXBzQ29tcGxldGUgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcbiAgICAgICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCBkZXN0aW5hdGlvbkluZGV4ICYmIGluZGV4ICE9PSB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXgpXG4gICAgICAgICAgLmV2ZXJ5KHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgfHwgc3RlcC5vcHRpb25hbClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGhhc1N0ZXApXG4gICAgICAudGhlbihjYW5FeGl0Q3VycmVudFN0ZXApXG4gICAgICAudGhlbihjYW5FbnRlckRlc3RpbmF0aW9uU3RlcClcbiAgICAgIC50aGVuKGFsbFByZXZpb3VzU3RlcHNDb21wbGV0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gZW50ZXIgdGhlIHdpemFyZCBzdGVwIHdpdGggdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LlxuICAgKiBXaGVuIGVudGVyaW5nIHRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIGNvbXBsZXRlZFxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyB1bnNlbGVjdGVkXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkXG4gICAqIC0gYWxsIHN0ZXBzIGJldHdlZW4gdGhlIG9sZCBjdXJyZW50IHN0ZXAgYW5kIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGFyZSBtYXJrZWQgYXMgaW5jb21wbGV0ZVxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIHNldCBhcyBzZWxlY3RlZFxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIGVudGVyZWRcbiAgICpcbiAgICogV2hlbiB0aGUgZGVzdGluYXRpb24gc3RlcCBjb3VsZG4ndCBiZSBlbnRlcmVkLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgYW5kIGVudGVyZWQgaW4gdGhlIGRpcmVjdGlvbiBgTW92aW5nRGlyZWN0aW9uLlN0YXlgXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBlbnRlcmVkXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICovXG4gIGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xuICAgIHRoaXMuY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleCkudGhlbihuYXZpZ2F0aW9uQWxsb3dlZCA9PiB7XG4gICAgICBpZiAobmF2aWdhdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgY29uc3QgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByZUZpbmFsaXplKSB7XG4gICAgICAgICAgcHJlRmluYWxpemUuZW1pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGVhdmUgY3VycmVudCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBzZXQgYWxsIHN0ZXBzIGFmdGVyIHRoZSBkZXN0aW5hdGlvbiBzdGVwIHRvIGluY29tcGxldGVcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwc1xuICAgICAgICAgIC5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPiBkZXN0aW5hdGlvbkluZGV4ICYmIGluZGV4ID4gZGVzdGluYXRpb25JbmRleClcbiAgICAgICAgICAuZm9yRWFjaChzdGVwID0+IHN0ZXAuY29tcGxldGVkID0gZmFsc2UpO1xuXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IGRlc3RpbmF0aW9uSW5kZXg7XG5cbiAgICAgICAgLy8gZ28gdG8gbmV4dCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIobW92aW5nRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwb3N0RmluYWxpemUpIHtcbiAgICAgICAgICBwb3N0RmluYWxpemUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGVwIGNhbid0IGJlIGxlZnQsIHJlZW50ZXIgdGhlIGN1cnJlbnQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzTmF2aWdhYmxlKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIC8vIGEgd2l6YXJkIHN0ZXAgY2FuIGJlIG5hdmlnYXRlZCB0byB0aHJvdWdoIHRoZSBuYXZpZ2F0aW9uIGJhciwgaWZmIGl0J3MgbG9jYXRlZCBiZWZvcmUgdGhlIGN1cnJlbnQgd2l6YXJkIHN0ZXBcbiAgICByZXR1cm4gZGVzdGluYXRpb25JbmRleCA8IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxuICAgKiBBIHJlc2V0IHRyYW5zaXRpb25zIHRoZSB3aXphcmQgYXV0b21hdGljYWxseSB0byB0aGUgZmlyc3Qgc3RlcCBhbmQgc2V0cyBhbGwgc3RlcHMgYXMgaW5jb21wbGV0ZS5cbiAgICogSW4gYWRkaXRpb24gdGhlIHdob2xlIHdpemFyZCBpcyBzZXQgYXMgaW5jb21wbGV0ZVxuICAgKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgLy8gdGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggdGhlIGRlZmF1bHQgc3RlcCBpbmRleFxuICAgIGlmICghdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9YCk7XG4gICAgfVxuXG4gICAgLy8gYXQgbGVhc3Qgb25lIHN0ZXAgaXMgYmVmb3JlIHRoZSBkZWZhdWx0IHN0ZXAsIHRoYXQgaXMgbm90IG9wdGlvbmFsXG4gICAgY29uc3QgaWxsZWdhbERlZmF1bHRTdGVwID0gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwc1xuICAgICAgLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IGluZGV4IDwgdGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4KVxuICAgICAgLnNvbWUoc3RlcCA9PiAhc3RlcC5vcHRpb25hbCk7XG5cbiAgICBpZiAoaWxsZWdhbERlZmF1bHRTdGVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IHN0ZXAgaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9IGlzIGxvY2F0ZWQgYWZ0ZXIgYSBub24gb3B0aW9uYWwgc3RlcGApO1xuICAgIH1cblxuICAgIC8vIHJlc2V0IHRoZSBzdGVwIGludGVybmFsIHN0YXRlXG4gICAgdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgc3RlcC5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgIHN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIHNldCB0aGUgZmlyc3Qgc3RlcCBhcyB0aGUgY3VycmVudCBzdGVwXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gdGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4O1xuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLkZvcndhcmRzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtGcmVlTmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vZnJlZS1uYXZpZ2F0aW9uLW1vZGUnO1xuaW1wb3J0IHtTZW1pU3RyaWN0TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vc2VtaS1zdHJpY3QtbmF2aWdhdGlvbi1tb2RlJztcbmltcG9ydCB7U3RyaWN0TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vc3RyaWN0LW5hdmlnYXRpb24tbW9kZSc7XG5cbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5cbi8qKlxuICogQSBmYWN0b3J5IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSBbW05hdmlnYXRpb25Nb2RlXV0gaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIG5hdmlnYXRpb25Nb2RlIFRoZSBuYW1lIG9mIHRoZSB0byBiZSB1c2VkIG5hdmlnYXRpb24gbW9kZVxuICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSB3aXphcmQgc3RhdGUgb2YgdGhlIHdpemFyZFxuICogQHJldHVybnMgVGhlIGNyZWF0ZWQgW1tOYXZpZ2F0aW9uTW9kZV1dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW9uTW9kZUZhY3RvcnkobmF2aWdhdGlvbk1vZGU6IHN0cmluZywgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKTogTmF2aWdhdGlvbk1vZGUge1xuICBzd2l0Y2ggKG5hdmlnYXRpb25Nb2RlKSB7XG4gICAgY2FzZSAnZnJlZSc6XG4gICAgICByZXR1cm4gbmV3IEZyZWVOYXZpZ2F0aW9uTW9kZSh3aXphcmRTdGF0ZSk7XG4gICAgY2FzZSAnc2VtaS1zdHJpY3QnOlxuICAgICAgcmV0dXJuIG5ldyBTZW1pU3RyaWN0TmF2aWdhdGlvbk1vZGUod2l6YXJkU3RhdGUpO1xuICAgIGNhc2UgJ3N0cmljdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXcgU3RyaWN0TmF2aWdhdGlvbk1vZGUod2l6YXJkU3RhdGUpO1xuICB9XG59O1xuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge25hdmlnYXRpb25Nb2RlRmFjdG9yeX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUucHJvdmlkZXInO1xuXG4vKipcbiAqIFRoZSBpbnRlcm5hbCBtb2RlbC9zdGF0ZSBvZiBhIHdpemFyZC5cbiAqIFRoaXMgbW9kZWwgY29udGFpbnM6XG4gKiAtIGFuIGFycmF5IHdpdGggYWxsIHN0ZXBzIHRoZSB3aXphcmQgY29udGFpbnNcbiAqIC0gdGhlIGluZGV4IG9mIHRoZSBzdGVwIHRoZSB3aXphcmQgY3VycmVudGx5IHJlc2lkZXMgaW5zaWRlXG4gKiAtIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb21wbGV0ZW5lc3Mgb2YgdGhlIHdpemFyZFxuICogLSBzb21lIGFkZGl0aW9uYWwgaGVscGVyIG1ldGhvZHNcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpemFyZFN0YXRlIHtcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIHN0ZXAgaW5kZXgsIGFzIHRha2VuIGZyb20gdGhlIFtbV2l6YXJkQ29tcG9uZW50XV1cbiAgICovXG4gIHByaXZhdGUgX2RlZmF1bHRTdGVwSW5kZXggPSAwO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSByZXByZXNlbnRhdGlvbiBvZiBhbGwgd2l6YXJkIHN0ZXBzIGJlbG9uZ2luZyB0byB0aGlzIG1vZGVsXG4gICAqL1xuICBwdWJsaWMgd2l6YXJkU3RlcHM6IEFycmF5PFdpemFyZFN0ZXA+ID0gW107XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluaXRpYWwgZGVmYXVsdCBzdGVwLlxuICAgKiBCZXdhcmU6IFRoaXMgaW5pdGlhbCBkZWZhdWx0IGlzIG9ubHkgdXNlZCBpZiBubyB3aXphcmQgc3RlcCBoYXMgYmVlbiBlbmhhbmNlZCB3aXRoIHRoZSBgc2VsZWN0ZWRgIGRpcmVjdGl2ZVxuICAgKlxuICAgKiBAcGFyYW0gZGVmYXVsdFN0ZXBJbmRleCBUaGUgbmV3IGRlZmF1bHQgd2l6YXJkIHN0ZXAgaW5kZXhcbiAgICovXG4gIHB1YmxpYyBzZXQgZGVmYXVsdFN0ZXBJbmRleChkZWZhdWx0U3RlcEluZGV4KSB7XG4gICAgdGhpcy5fZGVmYXVsdFN0ZXBJbmRleCA9IGRlZmF1bHRTdGVwSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGluaXRpYWwgc3RlcCBpbmRleC5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgZWl0aGVyOlxuICAgKiAtIHRoZSBpbmRleCBvZiBhIHdpemFyZCBzdGVwIHdpdGggYSBgc2VsZWN0ZWRgIGRpcmVjdGl2ZSwgb3JcbiAgICogLSB0aGUgZGVmYXVsdCBzdGVwIGluZGV4LCBzZXQgaW4gdGhlIFtbV2l6YXJkQ29tcG9uZW50XV1cbiAgICovXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFN0ZXBJbmRleCgpOiBudW1iZXIge1xuICAgIGNvbnN0IGZvdW5kRGVmYXVsdFN0ZXAgPSB0aGlzLndpemFyZFN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmRlZmF1bHRTZWxlY3RlZCk7XG5cbiAgICBpZiAoZm91bmREZWZhdWx0U3RlcCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5kZXhPZlN0ZXAoZm91bmREZWZhdWx0U3RlcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U3RlcEluZGV4O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgdmlzaWJsZSBhbmQgc2VsZWN0ZWQgc3RlcCBpbnNpZGUgdGhlIHdpemFyZFN0ZXBzIFF1ZXJ5TGlzdC5cbiAgICogSWYgdGhpcyB3aXphcmQgY29udGFpbnMgbm8gc3RlcHMsIGN1cnJlbnRTdGVwSW5kZXggaXMgLTFcbiAgICovXG4gIHB1YmxpYyBjdXJyZW50U3RlcEluZGV4ID0gLTE7XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGUgdXNlZCB0byBuYXZpZ2F0ZSBpbnNpZGUgdGhlIHdpemFyZFxuICAgKi9cbiAgcHVibGljIG5hdmlnYXRpb25Nb2RlOiBOYXZpZ2F0aW9uTW9kZTtcblxuICAvKipcbiAgICogVHJ1ZSwgaWYgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZG4ndCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nXG4gICAqL1xuICBwdWJsaWMgZGlzYWJsZU5hdmlnYXRpb25CYXI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBXaXphcmRTdGVwIG9iamVjdCBiZWxvbmdpbmcgdG8gdGhlIGN1cnJlbnRseSB2aXNpYmxlIGFuZCBzZWxlY3RlZCBzdGVwLlxuICAgKiBUaGUgY3VycmVudFN0ZXAgaXMgYWx3YXlzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgd2l6YXJkIHN0ZXAuXG4gICAqIFRoZSBjdXJyZW50U3RlcCBjYW4gYmUgZWl0aGVyIGNvbXBsZXRlZCwgaWYgaXQgd2FzIHZpc2l0ZWQgZWFybGllcixcbiAgICogb3Igbm90IGNvbXBsZXRlZCwgaWYgaXQgaXMgdmlzaXRlZCBmb3IgdGhlIGZpcnN0IHRpbWUgb3IgaXRzIHN0YXRlIGlzIGN1cnJlbnRseSBvdXQgb2YgZGF0ZS5cbiAgICpcbiAgICogSWYgdGhpcyB3aXphcmQgY29udGFpbnMgbm8gc3RlcHMsIGN1cnJlbnRTdGVwIGlzIG51bGxcbiAgICovXG4gIHB1YmxpYyBnZXQgY3VycmVudFN0ZXAoKTogV2l6YXJkU3RlcCB7XG4gICAgaWYgKHRoaXMuaGFzU3RlcCh0aGlzLmN1cnJlbnRTdGVwSW5kZXgpKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwc1t0aGlzLmN1cnJlbnRTdGVwSW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGNvbXBsZXRlbmVzcyBvZiB0aGUgd2l6YXJkLlxuICAgKiBJZiB0aGUgd2l6YXJkIGhhcyBiZWVuIGNvbXBsZXRlZCwgaS5lLiBhbGwgc3RlcHMgYXJlIGVpdGhlciBjb21wbGV0ZWQgb3Igb3B0aW9uYWwsIHRoaXMgdmFsdWUgaXMgdHJ1ZSwgb3RoZXJ3aXNlIGl0IGlzIGZhbHNlXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNvbXBsZXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5ldmVyeShzdGVwID0+IHN0ZXAuY29tcGxldGVkIHx8IHN0ZXAub3B0aW9uYWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBuYXZpZ2F0aW9uIG1vZGUgdG8gdGhlIG5hdmlnYXRpb24gbW9kZSB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAqXG4gICAqIEBwYXJhbSB1cGRhdGVkTmF2aWdhdGlvbk1vZGUgVGhlIG5hbWUgb2YgdGhlIG5ldyBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIHVwZGF0ZU5hdmlnYXRpb25Nb2RlKHVwZGF0ZWROYXZpZ2F0aW9uTW9kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZSA9IG5hdmlnYXRpb25Nb2RlRmFjdG9yeSh1cGRhdGVkTmF2aWdhdGlvbk1vZGUsIHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHdpemFyZCBzdGVwcyB0byB0aGUgbmV3IGFycmF5XG4gICAqXG4gICAqIEBwYXJhbSB1cGRhdGVkV2l6YXJkU3RlcHMgVGhlIHVwZGF0ZWQgd2l6YXJkIHN0ZXBzXG4gICAqL1xuICB1cGRhdGVXaXphcmRTdGVwcyh1cGRhdGVkV2l6YXJkU3RlcHM6IEFycmF5PFdpemFyZFN0ZXA+KTogdm9pZCB7XG4gICAgLy8gdGhlIHdpemFyZCBpcyBjdXJyZW50bHkgbm90IGluIHRoZSBpbml0aWFsaXphdGlvbiBwaGFzZVxuICAgIGlmICh0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCA+IDAgJiYgdGhpcy5jdXJyZW50U3RlcEluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9IHVwZGF0ZWRXaXphcmRTdGVwcy5pbmRleE9mKHRoaXMud2l6YXJkU3RlcHNbdGhpcy5jdXJyZW50U3RlcEluZGV4XSk7XG4gICAgfVxuXG4gICAgdGhpcy53aXphcmRTdGVwcyA9IHVwZGF0ZWRXaXphcmRTdGVwcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YCBpcyBpbnNpZGUgdGhlIHJhbmdlIG9mIHBvc3NpYmxlIHdpemFyZCBzdGVwcyBpbnNpZGUgdGhpcyB3aXphcmRcbiAgICpcbiAgICogQHBhcmFtIHN0ZXBJbmRleCBUaGUgdG8gYmUgY2hlY2tlZCBpbmRleCBvZiBhIHN0ZXAgaW5zaWRlIHRoaXMgd2l6YXJkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIGBzdGVwSW5kZXhgIGlzIGNvbnRhaW5lZCBpbnNpZGUgdGhpcyB3aXphcmQsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgaGFzU3RlcChzdGVwSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCA+IDAgJiYgMCA8PSBzdGVwSW5kZXggJiYgc3RlcEluZGV4IDwgdGhpcy53aXphcmRTdGVwcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGhhcyBhIHByZXZpb3VzIHN0ZXAsIGNvbXBhcmVkIHRvIHRoZSBjdXJyZW50IHN0ZXBcbiAgICpcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIHdpemFyZCBoYXMgYSBwcmV2aW91cyBzdGVwIGJlZm9yZSB0aGUgY3VycmVudCBzdGVwXG4gICAqL1xuICBoYXNQcmV2aW91c1N0ZXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzU3RlcCh0aGlzLmN1cnJlbnRTdGVwSW5kZXggLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhpcyB3aXphcmQgaGFzIGEgbmV4dCBzdGVwLCBjb21wYXJlZCB0byB0aGUgY3VycmVudCBzdGVwXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgaGFzIGEgbmV4dCBzdGVwIGFmdGVyIHRoZSBjdXJyZW50IHN0ZXBcbiAgICovXG4gIGhhc05leHRTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1N0ZXAodGhpcy5jdXJyZW50U3RlcEluZGV4ICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGlzIGN1cnJlbnRseSBpbnNpZGUgaXRzIGxhc3Qgc3RlcFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB3aXphcmQgaXMgY3VycmVudGx5IGluc2lkZSBpdHMgbGFzdCBzdGVwXG4gICAqL1xuICBpc0xhc3RTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCA+IDAgJiYgdGhpcy5jdXJyZW50U3RlcEluZGV4ID09PSB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIFtbV2l6YXJkU3RlcF1dIGF0IHRoZSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YC5cbiAgICogSWYgbm8gW1tXaXphcmRTdGVwXV0gZXhpc3RzIGF0IHRoZSBnaXZlbiBpbmRleCBhbiBFcnJvciBpcyB0aHJvd25cbiAgICpcbiAgICogQHBhcmFtIHN0ZXBJbmRleCBUaGUgZ2l2ZW4gaW5kZXhcbiAgICogQHJldHVybnMgVGhlIGZvdW5kIFtbV2l6YXJkU3RlcF1dIGF0IHRoZSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YFxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duLCBpZiB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAgZG9lc24ndCBleGlzdFxuICAgKi9cbiAgZ2V0U3RlcEF0SW5kZXgoc3RlcEluZGV4OiBudW1iZXIpOiBXaXphcmRTdGVwIHtcbiAgICBpZiAoIXRoaXMuaGFzU3RlcChzdGVwSW5kZXgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGEga25vd24gc3RlcCwgYnV0IGdvdCBzdGVwSW5kZXg6ICR7c3RlcEluZGV4fS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwc1tzdGVwSW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgc3RlcCB3aXRoIHRoZSBnaXZlbiBgc3RlcElkYC5cbiAgICogSWYgbm8gc3RlcCB3aXRoIHRoZSBnaXZlbiBgc3RlcElkYCBleGlzdHMsIGAtMWAgaXMgcmV0dXJuZWRcbiAgICpcbiAgICogQHBhcmFtIHN0ZXBJZCBUaGUgZ2l2ZW4gc3RlcCBpZFxuICAgKiBAcmV0dXJucyBUaGUgZm91bmQgaW5kZXggb2YgYSBzdGVwIHdpdGggdGhlIGdpdmVuIHN0ZXAgaWQsIG9yIGAtMWAgaWYgbm8gc3RlcCB3aXRoIHRoZSBnaXZlbiBpZCBpcyBpbmNsdWRlZCBpbiB0aGUgd2l6YXJkXG4gICAqL1xuICBnZXRJbmRleE9mU3RlcFdpdGhJZChzdGVwSWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuZmluZEluZGV4KHN0ZXAgPT4gc3RlcC5zdGVwSWQgPT09IHN0ZXBJZCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIGluZGV4IG9mIHRoZSBnaXZlbiBbW1dpemFyZFN0ZXBdXSBgc3RlcGAuXG4gICAqIElmIHRoZSBnaXZlbiBbW1dpemFyZFN0ZXBdXSBpcyBub3QgY29udGFpbmVkIGluc2lkZSB0aGlzIHdpemFyZCwgYC0xYCBpcyByZXR1cm5lZFxuICAgKlxuICAgKiBAcGFyYW0gc3RlcCBUaGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV1cbiAgICogQHJldHVybnMgVGhlIGZvdW5kIGluZGV4IG9mIGBzdGVwYCBvciBgLTFgIGlmIHRoZSBzdGVwIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgd2l6YXJkXG4gICAqL1xuICBnZXRJbmRleE9mU3RlcChzdGVwOiBXaXphcmRTdGVwKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5pbmRleE9mKHN0ZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGNvcnJlY3QgW1tNb3ZpbmdEaXJlY3Rpb25dXSB2YWx1ZSBmb3IgYSBnaXZlbiBgZGVzdGluYXRpb25TdGVwYCBjb21wYXJlZCB0byB0aGUgYGN1cnJlbnRTdGVwSW5kZXhgLlxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25TdGVwIFRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIFtbTW92aW5nRGlyZWN0aW9uXV1cbiAgICovXG4gIGdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvblN0ZXA6IG51bWJlcik6IE1vdmluZ0RpcmVjdGlvbiB7XG4gICAgbGV0IG1vdmluZ0RpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uO1xuXG4gICAgaWYgKGRlc3RpbmF0aW9uU3RlcCA+IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLkZvcndhcmRzO1xuICAgIH0gZWxzZSBpZiAoZGVzdGluYXRpb25TdGVwIDwgdGhpcy5jdXJyZW50U3RlcEluZGV4KSB7XG4gICAgICBtb3ZpbmdEaXJlY3Rpb24gPSBNb3ZpbmdEaXJlY3Rpb24uQmFja3dhcmRzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZpbmdEaXJlY3Rpb24gPSBNb3ZpbmdEaXJlY3Rpb24uU3RheTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW92aW5nRGlyZWN0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhdy13aXphcmRgIGNvbXBvbmVudCBkZWZpbmVzIHRoZSByb290IGNvbXBvbmVudCBvZiBhIHdpemFyZC5cbiAqIFRocm91Z2ggdGhlIHNldHRpbmcgb2YgaW5wdXQgcGFyYW1ldGVycyBmb3IgdGhlIGBhdy13aXphcmRgIGNvbXBvbmVudCBpdCdzIHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgbG9jYXRpb24gYW5kIHNpemVcbiAqIG9mIGl0cyBuYXZpZ2F0aW9uIGJhci5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkIFtuYXZCYXJMb2NhdGlvbl09XCJsb2NhdGlvbiBvZiBuYXZpZ2F0aW9uIGJhclwiIFtuYXZCYXJMYXlvdXRdPVwibGF5b3V0IG9mIG5hdmlnYXRpb24gYmFyXCI+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZD5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogV2l0aG91dCBjb21wbGV0aW9uIHN0ZXA6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZCBuYXZCYXJMb2NhdGlvbj1cInRvcFwiIG5hdkJhckxheW91dD1cInNtYWxsXCI+XG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XG4gKiA8L2F3LXdpemFyZD5cbiAqIGBgYFxuICpcbiAqIFdpdGggY29tcGxldGlvbiBzdGVwOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQgbmF2QmFyTG9jYXRpb249XCJ0b3BcIiBuYXZCYXJMYXlvdXQ9XCJzbWFsbFwiPlxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxuICogICAgIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwPi4uLjwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIDwvYXctd2l6YXJkPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZCcsXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3dpemFyZC5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtXaXphcmRTdGF0ZV1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqXG4gICAqIEEgUXVlcnlMaXN0IGNvbnRhaW5pbmcgYWxsIFtbV2l6YXJkU3RlcF1dcyBpbnNpZGUgdGhpcyB3aXphcmRcbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oV2l6YXJkU3RlcClcbiAgcHVibGljIHdpemFyZFN0ZXBzOiBRdWVyeUxpc3Q8V2l6YXJkU3RlcD47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhdGlvbiBvZiB0aGUgbmF2aWdhdGlvbiBiYXIgaW5zaWRlIHRoZSB3aXphcmQuXG4gICAqIFRoaXMgbG9jYXRpb24gY2FuIGJlIGVpdGhlciB0b3AsIGJvdHRvbSwgbGVmdCBvciByaWdodFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckxvY2F0aW9uID0gJ3RvcCc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYXlvdXQgb2YgdGhlIG5hdmlnYXRpb24gYmFyIGluc2lkZSB0aGUgd2l6YXJkLlxuICAgKiBUaGUgbGF5b3V0IGNhbiBiZSBlaXRoZXIgc21hbGwsIGxhcmdlLWZpbGxlZCwgbGFyZ2UtZW1wdHkgb3IgbGFyZ2Utc3ltYm9sc1xuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckxheW91dCA9ICdzbWFsbCc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXBzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkIGJlIHNob3duLlxuICAgKiBUaGUgZGlyZWN0aW9uIGNhbiBiZSBlaXRoZXIgYGxlZnQtdG8tcmlnaHRgIG9yIGByaWdodC10by1sZWZ0YFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckRpcmVjdGlvbiA9ICdsZWZ0LXRvLXJpZ2h0JztcblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSB1c2VkIGZvciB0cmFuc2l0aW9uaW5nIGJldHdlZW4gZGlmZmVyZW50IHN0ZXBzLlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlIGNhbiBiZSBlaXRoZXIgYHN0cmljdGAsIGBzZW1pLXN0cmljdGAgb3IgYGZyZWVgXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmF2aWdhdGlvbk1vZGUgPSAnc3RyaWN0JztcblxuICAvKipcbiAgICogVGhlIGluaXRpYWxseSBzZWxlY3RlZCBzdGVwLCByZXByZXNlbnRlZCBieSBpdHMgaW5kZXhcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkZWZhdWx0U3RlcEluZGV4ID0gMDtcblxuICAvKipcbiAgICogVHJ1ZSwgaWYgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZG4ndCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzYWJsZU5hdmlnYXRpb25CYXIgPSBmYWxzZTtcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLlxuICAgKiBUaGUgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLCBpZmYgdGhlIG5hdmlnYXRpb24gYmFyIGlzIHNob3duIGF0IHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoaXMgd2l6YXJkXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIGhvcml6b250YWwgb3JpZW50YXRpb25cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaG9yaXpvbnRhbCcpXG4gIHB1YmxpYyBnZXQgaG9yaXpvbnRhbE9yaWVudGF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAndG9wJyB8fCB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAnYm90dG9tJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIHZlcnRpY2FsIG9yaWVudGF0aW9uLlxuICAgKiBUaGUgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvbiwgaWZmIHRoZSBuYXZpZ2F0aW9uIGJhciBpcyBzaG93biBhdCB0aGUgbGVmdCBvciByaWdodCBvZiB0aGlzIHdpemFyZFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvblxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy52ZXJ0aWNhbCcpXG4gIHB1YmxpYyBnZXQgdmVydGljYWxPcmllbnRhdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMubmF2QmFyTG9jYXRpb24gPT09ICdyaWdodCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSBmb3IgdGhpcyB3aXphcmRcbiAgICovXG4gIHB1YmxpYyBnZXQgbmF2aWdhdGlvbigpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsIFRoZSBtb2RlbCBmb3IgdGhpcyB3aXphcmQgY29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZWw6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbW9kZWwgYWZ0ZXIgY2VydGFpbiBpbnB1dCB2YWx1ZXMgaGF2ZSBjaGFuZ2VkXG4gICAqXG4gICAqIEBwYXJhbSBjaGFuZ2VzIFRoZSBkZXRlY3RlZCBjaGFuZ2VzXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjaGFuZ2VzKSkge1xuICAgICAgbGV0IGNoYW5nZSA9IGNoYW5nZXNbcHJvcE5hbWVdO1xuXG4gICAgICBpZiAoIWNoYW5nZS5maXJzdENoYW5nZSkge1xuICAgICAgICBzd2l0Y2ggKHByb3BOYW1lKSB7XG4gICAgICAgICAgY2FzZSAnZGVmYXVsdFN0ZXBJbmRleCc6XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRlZmF1bHRTdGVwSW5kZXggPSBwYXJzZUludChjaGFuZ2UuY3VycmVudFZhbHVlLCAxMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkaXNhYmxlTmF2aWdhdGlvbkJhcic6XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRpc2FibGVOYXZpZ2F0aW9uQmFyID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ25hdmlnYXRpb25Nb2RlJzpcbiAgICAgICAgICAgIHRoaXMubW9kZWwudXBkYXRlTmF2aWdhdGlvbk1vZGUoY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIC8vIGFkZCBhIHN1YnNjcmliZXIgdG8gdGhlIHdpemFyZCBzdGVwcyBRdWVyeUxpc3QgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIERPTVxuICAgIHRoaXMud2l6YXJkU3RlcHMuY2hhbmdlcy5zdWJzY3JpYmUoY2hhbmdlZFdpemFyZFN0ZXBzID0+IHtcbiAgICAgIHRoaXMubW9kZWwudXBkYXRlV2l6YXJkU3RlcHMoY2hhbmdlZFdpemFyZFN0ZXBzLnRvQXJyYXkoKSk7XG4gICAgfSk7XG5cbiAgICAvLyBpbml0aWFsaXplIHRoZSBtb2RlbFxuICAgIHRoaXMubW9kZWwuZGlzYWJsZU5hdmlnYXRpb25CYXIgPSB0aGlzLmRpc2FibGVOYXZpZ2F0aW9uQmFyO1xuICAgIHRoaXMubW9kZWwuZGVmYXVsdFN0ZXBJbmRleCA9IHRoaXMuZGVmYXVsdFN0ZXBJbmRleDtcbiAgICB0aGlzLm1vZGVsLnVwZGF0ZVdpemFyZFN0ZXBzKHRoaXMud2l6YXJkU3RlcHMudG9BcnJheSgpKTtcbiAgICB0aGlzLm1vZGVsLnVwZGF0ZU5hdmlnYXRpb25Nb2RlKHRoaXMubmF2aWdhdGlvbk1vZGUpO1xuXG4gICAgLy8gZmluYWxseSByZXNldCB0aGUgd2hvbGUgd2l6YXJkIHN0YXRlXG4gICAgdGhpcy5uYXZpZ2F0aW9uLnJlc2V0KCk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBtYXJjIG9uIDIwLjA1LjE3LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcGAgY29tcG9uZW50IGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIGNvbXBsZXRpb24vc3VjY2VzcyBzdGVwIGF0IHRoZSBlbmQgb2YgeW91ciB3aXphcmRcbiAqIEFmdGVyIGEgYGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXBgIGhhcyBiZWVuIGVudGVyZWQsIGl0IGhhcyB0aGUgY2hhcmFjdGVyaXN0aWMgdGhhdCB0aGUgdXNlciBpcyBibG9ja2VkIGZyb21cbiAqIGxlYXZpbmcgaXQgYWdhaW4gdG8gYSBwcmV2aW91cyBzdGVwLlxuICogSW4gYWRkaXRpb24gZW50ZXJpbmcgYSBgYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcGAgYXV0b21hdGljYWxseSBzZXRzIHRoZSBgYXctd2l6YXJkYCBhbmQgYWxsIHN0ZXBzIGluc2lkZSB0aGUgYGF3LXdpemFyZGBcbiAqIGFzIGNvbXBsZXRlZC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAgW3N0ZXBUaXRsZV09XCJ0aXRsZSBvZiB0aGUgd2l6YXJkIHN0ZXBcIlxuICogICAgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICduYXZpZ2F0aW9uIHN5bWJvbCcsIGZvbnRGYW1pbHk6ICduYXZpZ2F0aW9uIHN5bWJvbCBmb250IGZhbWlseScgfVwiXG4gKiAgICAoc3RlcEVudGVyKT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGVudGVyZWRcIlxuICogICAgKHN0ZXBFeGl0KT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGV4aXRlZFwiPlxuICogICAgLi4uXG4gKiA8L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnMScgfVwiPlxuICogICAgLi4uXG4gKiA8L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGEgbmF2aWdhdGlvbiBzeW1ib2wgZnJvbSB0aGUgYGZvbnQtYXdlc29tZWAgZm9udDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy13aXphcmQtY29tcGxldGlvbi1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICd3aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogV2l6YXJkU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQpfSxcbiAgICB7cHJvdmlkZTogV2l6YXJkQ29tcGxldGlvblN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50KX1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCBleHRlbmRzIFdpemFyZENvbXBsZXRpb25TdGVwIHtcbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyYCBjb21wb25lbnQgY29udGFpbnMgdGhlIG5hdmlnYXRpb24gYmFyIGluc2lkZSBhIFtbV2l6YXJkQ29tcG9uZW50XV0uXG4gKiBUbyBjb3JyZWN0bHkgZGlzcGxheSB0aGUgbmF2aWdhdGlvbiBiYXIsIGl0J3MgcmVxdWlyZWQgdG8gc2V0IHRoZSByaWdodCBjc3MgY2xhc3NlcyBmb3IgdGhlIG5hdmlnYXRpb24gYmFyLFxuICogb3RoZXJ3aXNlIGl0IHdpbGwgbG9vayBsaWtlIGEgbm9ybWFsIGB1bGAgY29tcG9uZW50LlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLW5hdmlnYXRpb24tYmFyPjwvYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuaG9yaXpvbnRhbC5sZXNzJywgJ3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQudmVydGljYWwubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHdpemFyZCBzdGVwcyBzaG91bGQgYmUgc2hvd24gaW4gdGhlIG5hdmlnYXRpb24gYmFyLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBlaXRoZXIgYGxlZnQtdG8tcmlnaHRgIG9yIGByaWdodC10by1sZWZ0YFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGRpcmVjdGlvbiA9ICdsZWZ0LXRvLXJpZ2h0JztcblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZVxuICAgKi9cbiAgcHVibGljIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBzdGF0ZSB0aGUgd2l6YXJkIGN1cnJlbnRseSByZXNpZGVzIGluXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgW1tXaXphcmRTdGVwXV1zIGNvbnRhaW5lZCBpbiB0aGUgd2l6YXJkXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIFtbV2l6YXJkU3RlcF1dc1xuICAgKi9cbiAgZ2V0IHdpemFyZFN0ZXBzKCk6IEFycmF5PFdpemFyZFN0ZXA+IHtcbiAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdyaWdodC10by1sZWZ0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICBjYXNlICdsZWZ0LXRvLXJpZ2h0JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygd2l6YXJkIHN0ZXBzLCB0aGF0IG5lZWQgdG8gYmUgZGlzcGxhY2VkIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIHdpemFyZCBzdGVwcyB0byBiZSBkaXNwbGF5ZWRcbiAgICovXG4gIGdldCBudW1iZXJPZldpemFyZFN0ZXBzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGN1cnJlbnRgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgY3VycmVudFxuICAgKi9cbiAgcHVibGljIGlzQ3VycmVudCh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpemFyZFN0ZXAuc2VsZWN0ZWQgJiYgIXdpemFyZFN0ZXAuY29tcGxldGVkICYmICF0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBkb25lYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIGRvbmVcbiAgICovXG4gIHB1YmxpYyBpc0RvbmUod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAod2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXdpemFyZFN0ZXAuc2VsZWN0ZWQpIHx8IHRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGRlZmF1bHRgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgZGVmYXVsdFxuICAgKi9cbiAgcHVibGljIGlzRGVmYXVsdCh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF3aXphcmRTdGVwLm9wdGlvbmFsICYmICF3aXphcmRTdGVwLmNvbXBsZXRlZCAmJiAhd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5jb21wbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgZWRpdGluZ2AgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBlZGl0aW5nXG4gICAqL1xuICBwdWJsaWMgaXNFZGl0aW5nKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiB3aXphcmRTdGVwLmNvbXBsZXRlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5jb21wbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgb3B0aW9uYWxgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgb3B0aW9uYWxcbiAgICovXG4gIHB1YmxpYyBpc09wdGlvbmFsKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2l6YXJkU3RlcC5vcHRpb25hbCAmJiAhd2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXdpemFyZFN0ZXAuc2VsZWN0ZWQgJiYgIXRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgbmF2aWdhYmxlYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIEEgd2l6YXJkIHN0ZXAgY2FuIGJlIG5hdmlnYXRlZCB0byBpZjpcbiAgICogLSB0aGUgc3RlcCBpcyBjdXJyZW50bHkgbm90IHNlbGVjdGVkXG4gICAqIC0gdGhlIG5hdmlnYXRpb24gYmFyIGlzbid0IGRpc2FibGVkXG4gICAqIC0gdGhlIG5hdmlnYXRpb24gbW9kZSBhbGxvd3MgbmF2aWdhdGlvbiB0byB0aGUgc3RlcFxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgbmF2aWdhYmxlXG4gICAqL1xuICBwdWJsaWMgaXNOYXZpZ2FibGUod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5kaXNhYmxlTmF2aWdhdGlvbkJhciAmJlxuICAgICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5pc05hdmlnYWJsZSh0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwKHdpemFyZFN0ZXApKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXctd2l6YXJkLXN0ZXBgIGNvbXBvbmVudCBpcyB1c2VkIHRvIGRlZmluZSBhIG5vcm1hbCBzdGVwIGluc2lkZSBhIHdpemFyZC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogV2l0aCBgc3RlcFRpdGxlYCBhbmQgYG5hdmlnYXRpb25TeW1ib2xgIGlucHV0czpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXAgW3N0ZXBUaXRsZV09XCJzdGVwIHRpdGxlXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICdzeW1ib2wnLCBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknIH1cIlxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIC4uLlxuICogPC9hdy13aXphcmQtc3RlcD5cbiAqIGBgYFxuICpcbiAqIFdpdGggYGF3V2l6YXJkU3RlcFRpdGxlYCBhbmQgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlczpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXBcIlxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cbiAqICAgICAgICBzdGVwIHRpdGxlXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cbiAqICAgICAgICBzeW1ib2xcbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIFdpdGggYHN0ZXBUaXRsZWAgYW5kIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dHM6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIkFkZHJlc3MgaW5mb3JtYXRpb25cIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGBhd1dpemFyZFN0ZXBUaXRsZWAgYW5kIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZXM6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxuICogICAgICAgIEFkZHJlc3MgaW5mb3JtYXRpb25cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxuICogICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGF4aVwiPjwvaT5cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZC1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICd3aXphcmQtc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd3aXphcmQtc3RlcC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRTdGVwQ29tcG9uZW50KX1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwQ29tcG9uZW50IGV4dGVuZHMgV2l6YXJkU3RlcCB7XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd0VuYWJsZUJhY2tMaW5rc2AgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGFsbG93IHRoZSB1c2VyIHRvIGxlYXZlIGEgW1tXaXphcmRDb21wbGV0aW9uU3RlcF1dIGFmdGVyIGlzIGhhcyBiZWVuIGVudGVyZWQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIGF3RW5hYmxlQmFja0xpbmtzIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIHN0ZXBUaXRsZT1cIkZpbmFsIHN0ZXBcIiBhd0VuYWJsZUJhY2tMaW5rcz5cbiAqICAgICAuLi5cbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdFbmFibGVCYWNrTGlua3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVGhpcyBFdmVudEVtaXR0ZXIgaXMgY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZXhpdGVkLlxuICAgKiBUaGUgYm91bmQgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGRvIGNsZWFudXAgd29yay5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc3RlcEV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIGNvbXBsZXRpb25TdGVwIFRoZSB3aXphcmQgY29tcGxldGlvbiBzdGVwLCB3aGljaCBzaG91bGQgYmUgZXhpdGFibGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBjb21wbGV0aW9uU3RlcDogV2l6YXJkQ29tcGxldGlvblN0ZXApIHsgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXphdGlvbiB3b3JrXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGVwLmNhbkV4aXQgPSB0cnVlO1xuICAgIHRoaXMuY29tcGxldGlvblN0ZXAuc3RlcEV4aXQgPSB0aGlzLnN0ZXBFeGl0O1xuICB9XG59XG4iLCIvKipcbiAqIEFuIG9mZnNldCBiZXR3ZWVuIHR3byBzdGVwcy5cbiAqIFRoaXMgb2Zmc2V0IGNhbiBiZSBlaXRoZXIgcG9zaXRpdmUgb3IgbmVnYXRpdmUuXG4gKiBBIHBvc2l0aXZlIG9mZnNldCBtZWFucywgdGhhdCB0aGUgb2Zmc2V0IHN0ZXAgaXMgYWZ0ZXIgdGhlIG90aGVyIHN0ZXAsIHdoaWxlIGEgbmVnYXRpdmUgb2Zmc2V0IG1lYW5zLFxuICogdGhhdCB0aGUgb2Zmc2V0IHN0ZXAgaXMgYWhlYWQgb2YgdGhlIG90aGVyIHN0ZXAuXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcE9mZnNldCB7XG4gIC8qKlxuICAgKiBUaGUgb2Zmc2V0IHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqL1xuICBzdGVwT2Zmc2V0OiBudW1iZXJcbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gYHZhbHVlYCBpbXBsZW1lbnRzIHRoZSBpbnRlcmZhY2UgW1tTdGVwT2Zmc2V0XV0uXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjaGVja2VkXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpbXBsZW1lbnRzIFtbU3RlcE9mZnNldF1dIGFuZCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RlcE9mZnNldCh2YWx1ZTogYW55KTogdmFsdWUgaXMgU3RlcE9mZnNldCB7XG4gIHJldHVybiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnc3RlcE9mZnNldCcpO1xufVxuIiwiaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogQW4gdW5pcXVlIGlkZW50aWZpZXIgb2YgYSB3aXphcmQgc3RlcFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBJZCB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICovXG4gIHN0ZXBJZDogc3RyaW5nXG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGB2YWx1ZWAgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIFtbU3RlcElkXV0uXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjaGVja2VkXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpbXBsZW1lbnRzIFtbU3RlcElkXV0gYW5kIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdGVwSWQodmFsdWU6IGFueSk6IHZhbHVlIGlzIFN0ZXBJZCB7XG4gIHJldHVybiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnc3RlcElkJykgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFdpemFyZFN0ZXApO1xufVxuIiwiLyoqXG4gKiBBbiBpbmRleCBvZiBhIHdpemFyZCBzdGVwLlxuICogVGhpcyBpbmRleCBpcyB0aGUgaW5kZXggb2YgdGhlIHN0ZXAgaW5zaWRlIHRoZSB3aXphcmQuXG4gKiBUaGUgaW5kZXggaXMgYWx3YXlzIHplcm8gYmFzZWQsIGkuZS4gdGhlIHN0ZXAgd2l0aCBpbmRleCAwIGlzIHRoZSBmaXJzdCBzdGVwIG9mIHRoZSB3aXphcmRcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGVwSW5kZXgge1xuICAvKipcbiAgICogVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqL1xuICBzdGVwSW5kZXg6IG51bWJlclxufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBgdmFsdWVgIGltcGxlbWVudHMgdGhlIGludGVyZmFjZSBbW1N0ZXBJbmRleF1dLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZFxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaW1wbGVtZW50cyBbW1N0ZXBJbmRleF1dIGFuZCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RlcEluZGV4KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdGVwSW5kZXgge1xuICByZXR1cm4gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3N0ZXBJbmRleCcpO1xufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IG1hcmMgb24gMDkuMDEuMTcuXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3B0aW9uYWwsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2lzU3RlcE9mZnNldCwgU3RlcE9mZnNldH0gZnJvbSAnLi4vdXRpbC9zdGVwLW9mZnNldC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtpc1N0ZXBJZCwgU3RlcElkfSBmcm9tICcuLi91dGlsL3N0ZXAtaWQuaW50ZXJmYWNlJztcbmltcG9ydCB7aXNTdGVwSW5kZXgsIFN0ZXBJbmRleH0gZnJvbSAnLi4vdXRpbC9zdGVwLWluZGV4LmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd0dvVG9TdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gbmF2aWdhdGUgdG8gYSBnaXZlbiBzdGVwLlxuICogVGhpcyBzdGVwIGNhbiBiZSBkZWZpbmVkIGluIG9uZSBvZiBtdWx0aXBsZSBmb3JtYXRzXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIFdpdGggYWJzb2x1dGUgc3RlcCBpbmRleDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cInsgc3RlcEluZGV4OiBhYnNvbHV0ZSBzdGVwIGluZGV4IH1cIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIHVuaXF1ZSBzdGVwIGlkOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwieyBzdGVwSWQ6ICdzdGVwIGlkIG9mIGRlc3RpbmF0aW9uIHN0ZXAnIH1cIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGEgd2l6YXJkIHN0ZXAgb2JqZWN0OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwid2l6YXJkIHN0ZXAgb2JqZWN0XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogV2l0aCBhbiBvZmZzZXQgdG8gdGhlIGRlZmluaW5nIHN0ZXA6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ7IHN0ZXBPZmZzZXQ6IG9mZnNldCB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd0dvVG9TdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgR29Ub1N0ZXBEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHByZUZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHBvc3RGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIG5hbWUgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICpcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIFtbRXZlbnRFbWl0dGVyXV0gdG8gYmUgc2V0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHNldCBmaW5hbGl6ZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRoaXMucHJlRmluYWxpemUgPSBlbWl0dGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICovXG4gIHB1YmxpYyBnZXQgZmluYWxpemUoKTogRXZlbnRFbWl0dGVyPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5wcmVGaW5hbGl6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVzdGluYXRpb24gc3RlcCwgdG8gd2hpY2ggdGhlIHdpemFyZCBzaG91bGQgbmF2aWdhdGUsIGFmdGVyIHRoZSBjb21wb25lbnQsIGhhdmluZyB0aGlzIGRpcmVjdGl2ZSBoYXMgYmVlbiBhY3RpdmF0ZWQuXG4gICAqIFRoaXMgZGVzdGluYXRpb24gc3RlcCBjYW4gYmUgZ2l2ZW4gZWl0aGVyIGFzIGEgW1tXaXphcmRTdGVwXV0gY29udGFpbmluZyB0aGUgc3RlcCBkaXJlY3RseSxcbiAgICogYSBbW1N0ZXBPZmZzZXRdXSBiZXR3ZWVuIHRoZSBjdXJyZW50IHN0ZXAgYW5kIHRoZSBgd2l6YXJkU3RlcGAsIGluIHdoaWNoIHRoaXMgZGlyZWN0aXZlIGhhcyBiZWVuIHVzZWQsXG4gICAqIG9yIGEgc3RlcCBpbmRleCBhcyBhIG51bWJlciBvciBzdHJpbmdcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2F3R29Ub1N0ZXAnKVxuICBwdWJsaWMgdGFyZ2V0U3RlcDogV2l6YXJkU3RlcCB8IFN0ZXBPZmZzZXQgfCBTdGVwSW5kZXggfCBTdGVwSWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHdpemFyZCBzdGF0ZVxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAsIHdoaWNoIGNvbnRhaW5zIHRoaXMgW1tHb1RvU3RlcERpcmVjdGl2ZV1dXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSwgQE9wdGlvbmFsKCkgcHJpdmF0ZSB3aXphcmRTdGVwOiBXaXphcmRTdGVwKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGVzdGluYXRpb24gc3RlcCBvZiB0aGlzIGRpcmVjdGl2ZSBhcyBhbiBhYnNvbHV0ZSBzdGVwIGluZGV4IGluc2lkZSB0aGUgd2l6YXJkXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKiBAdGhyb3dzIElmIGB0YXJnZXRTdGVwYCBpcyBvZiBhbiB1bmtub3duIHR5cGUgYW4gYEVycm9yYCBpcyB0aHJvd25cbiAgICovXG4gIGdldCBkZXN0aW5hdGlvblN0ZXAoKTogbnVtYmVyIHtcbiAgICBsZXQgZGVzdGluYXRpb25TdGVwOiBudW1iZXI7XG5cbiAgICBpZiAoaXNTdGVwSW5kZXgodGhpcy50YXJnZXRTdGVwKSkge1xuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy50YXJnZXRTdGVwLnN0ZXBJbmRleDtcbiAgICB9IGVsc2UgaWYgKGlzU3RlcElkKHRoaXMudGFyZ2V0U3RlcCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0SW5kZXhPZlN0ZXBXaXRoSWQodGhpcy50YXJnZXRTdGVwLnN0ZXBJZCk7XG4gICAgfSBlbHNlIGlmIChpc1N0ZXBPZmZzZXQodGhpcy50YXJnZXRTdGVwKSAmJiB0aGlzLndpemFyZFN0ZXAgIT09IG51bGwpIHtcbiAgICAgIGRlc3RpbmF0aW9uU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0SW5kZXhPZlN0ZXAodGhpcy53aXphcmRTdGVwKSArIHRoaXMudGFyZ2V0U3RlcC5zdGVwT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXRTdGVwIGluc3RhbmNlb2YgV2l6YXJkU3RlcCkge1xuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcCh0aGlzLnRhcmdldFN0ZXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0ICd0YXJnZXRTdGVwJyBpcyBuZWl0aGVyIGEgV2l6YXJkU3RlcCwgU3RlcE9mZnNldCwgU3RlcEluZGV4IG9yIFN0ZXBJZGApO1xuICAgIH1cblxuICAgIHJldHVybiBkZXN0aW5hdGlvblN0ZXA7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXIgbWV0aG9kIGZvciBgY2xpY2tgIGV2ZW50cyBvbiB0aGUgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqIEFmdGVyIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0aGUgd2l6YXJkIHdpbGwgdHJ5IHRvIHRyYW5zaXRpb24gdG8gdGhlIGBkZXN0aW5hdGlvblN0ZXBgXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5nb1RvU3RlcCh0aGlzLmRlc3RpbmF0aW9uU3RlcCwgdGhpcy5wcmVGaW5hbGl6ZSwgdGhpcy5wb3N0RmluYWxpemUpO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBgYXdOZXh0U3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIHRvIHRoZSBuZXh0IHN0ZXAuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gYXdOZXh0U3RlcCAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3TmV4dFN0ZXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZXh0U3RlcERpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGJlZm9yZSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcHJlRmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBhZnRlciB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcG9zdEZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgbmFtZSBmb3IgYHByZUZpbmFsaXplYFxuICAgKlxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgW1tFdmVudEVtaXR0ZXJdXSB0byBiZSBzZXRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2V0IGZpbmFsaXplKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx2b2lkPikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdGhpcy5wcmVGaW5hbGl6ZSA9IGVtaXR0ZXI7XG4gIH1cblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxuICAgKi9cbiAgcHVibGljIGdldCBmaW5hbGl6ZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnByZUZpbmFsaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSB3aXphcmRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7IH1cblxuICAvKipcbiAgICogTGlzdGVuZXIgbWV0aG9kIGZvciBgY2xpY2tgIGV2ZW50cyBvbiB0aGUgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqIEFmdGVyIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0aGUgd2l6YXJkIHdpbGwgdHJ5IHRvIHRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RlcFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUuZ29Ub05leHRTdGVwKHRoaXMucHJlRmluYWxpemUsIHRoaXMucG9zdEZpbmFsaXplKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgYGF3T3B0aW9uYWxTdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGFuIG9wdGlvbmFsIGB3aXphcmQtc3RlcGAuXG4gKiBBbiBvcHRpb25hbCB3aXphcmQgc3RlcCBpcyBhIFtbV2l6YXJkU3RlcF1dIHRoYXQgZG9lc24ndCBuZWVkIHRvIGJlIGNvbXBsZXRlZCB0byB0cmFuc2l0aW9uIHRvIGxhdGVyIHdpemFyZCBzdGVwcy5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwIGF3T3B0aW9uYWxTdGVwPlxuICogICAgIC4uLlxuICogPC9hdy13aXphcmQtc3RlcD5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIlNlY29uZCBzdGVwXCIgYXdPcHRpb25hbFN0ZXA+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd09wdGlvbmFsU3RlcF0nXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbmFsU3RlcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAsIHdoaWNoIGNvbnRhaW5zIHRoaXMgW1tPcHRpb25hbFN0ZXBEaXJlY3RpdmVdXVxuICAgKi9cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApIHsgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXphdGlvbiB3b3JrXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLndpemFyZFN0ZXAub3B0aW9uYWwgPSB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBgYXdQcmV2aW91c1N0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSB0byB0aGUgcHJldmlvdXMgc3RlcC5cbiAqIENvbXBhcmVkIHRvIHRoZSBbW05leHRTdGVwRGlyZWN0aXZlXV0gaXQncyBpbXBvcnRhbnQgdG8gbm90ZSwgdGhhdCB0aGlzIGRpcmVjdGl2ZSBkb2Vzbid0IGNvbnRhaW4gYSBgZmluYWxpemVgIG91dHB1dCBtZXRob2QuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gYXdQcmV2aW91c1N0ZXA+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3UHJldmlvdXNTdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgUHJldmlvdXNTdGVwRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYmVmb3JlIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwcmVGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGFmdGVyIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwb3N0RmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxuICAgKlxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgW1tFdmVudEVtaXR0ZXJdXSB0byBiZSBzZXRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2V0IGZpbmFsaXplKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx2b2lkPikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdGhpcy5wcmVGaW5hbGl6ZSA9IGVtaXR0ZXI7XG4gIH1cblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxuICAgKi9cbiAgcHVibGljIGdldCBmaW5hbGl6ZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnByZUZpbmFsaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSB3aXphcmRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7IH1cblxuICAvKipcbiAgICogTGlzdGVuZXIgbWV0aG9kIGZvciBgY2xpY2tgIGV2ZW50cyBvbiB0aGUgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqIEFmdGVyIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0aGUgd2l6YXJkIHdpbGwgdHJ5IHRvIHRyYW5zaXRpb24gdG8gdGhlIHByZXZpb3VzIHN0ZXBcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlLmdvVG9QcmV2aW91c1N0ZXAodGhpcy5wcmVGaW5hbGl6ZSwgdGhpcy5wb3N0RmluYWxpemUpO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdSZXNldFdpemFyZGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIHJlc2V0IHRoZSB3aXphcmQgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gKiBUaGlzIGRpcmVjdGl2ZSBhY2NlcHRzIGFuIG91dHB1dCwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBzb21lIGN1c3RvbSBjbGVhbnVwIHdvcmsgZHVyaW5nIHRoZSByZXNldCBwcm9jZXNzLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGF3UmVzZXRXaXphcmQgKGZpbmFsaXplKT1cImN1c3RvbSByZXNldCB0YXNrXCI+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3UmVzZXRXaXphcmRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXNldFdpemFyZERpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBBbiBbW0V2ZW50RW1pdHRlcl1dIGNvbnRhaW5pbmcgc29tZSB0YXNrcyB0byBiZSBkb25lLCBkaXJlY3RseSBiZWZvcmUgdGhlIHdpemFyZCBpcyBiZWluZyByZXNldFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBmaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSB3aXphcmQgc3RhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7IH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSB3aXphcmRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBkbyBzb21lIG9wdGlvbmFsIGNsZWFudXAgd29ya1xuICAgIHRoaXMuZmluYWxpemUuZW1pdCgpO1xuICAgIC8vIHJlc2V0IHRoZSB3aXphcmQgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlLnJlc2V0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd1NlbGVjdGVkU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIG9uIGEgW1tXaXphcmRTdGVwXV0gdG8gc2V0IGl0IGFzIHNlbGVjdGVkIGFmdGVyIHRoZSB3aXphcmQgaW5pdGlhbGlzYXRpb24gb3IgYSByZXNldC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgdGl0bGVcIiBhd1NlbGVjdGVkU3RlcD5cbiAqICAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3U2VsZWN0ZWRTdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRTdGVwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCwgd2hpY2ggc2hvdWxkIGJlIHNlbGVjdGVkIGJ5IGRlZmF1bHRcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSB3aXphcmRTdGVwOiBXaXphcmRTdGVwKSB7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy53aXphcmRTdGVwLmRlZmF1bHRTZWxlY3RlZCA9IHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd1dpemFyZENvbXBsZXRpb25TdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgY29tcGxldGlvbi9zdWNjZXNzIHN0ZXAgYXQgdGhlIGVuZCBvZiB5b3VyIHdpemFyZFxuICogQWZ0ZXIgYSBbW1dpemFyZENvbXBsZXRpb25TdGVwXV0gaGFzIGJlZW4gZW50ZXJlZCwgaXQgaGFzIHRoZSBjaGFyYWN0ZXJpc3RpYyB0aGF0IHRoZSB1c2VyIGlzIGJsb2NrZWQgZnJvbVxuICogbGVhdmluZyBpdCBhZ2FpbiB0byBhIHByZXZpb3VzIHN0ZXAuXG4gKiBJbiBhZGRpdGlvbiBlbnRlcmluZyBhIFtbV2l6YXJkQ29tcGxldGlvblN0ZXBdXSBhdXRvbWF0aWNhbGx5IHNldHMgdGhlIGB3aXphcmRgLCBhbmQgYWxsIHN0ZXBzIGluc2lkZSB0aGUgYHdpemFyZGAsXG4gKiBhcyBjb21wbGV0ZWQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRDb21wbGV0aW9uU3RlcCBbc3RlcFRpdGxlXT1cInRpdGxlIG9mIHRoZSB3aXphcmQgc3RlcFwiXG4gKiAgICBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJ25hdmlnYXRpb24gc3ltYm9sJywgZm9udEZhbWlseTogJ2ZvbnQtZmFtaWx5JyB9XCJcbiAqICAgIChzdGVwRW50ZXIpPVwiZXZlbnQgZW1pdHRlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgd2l6YXJkIHN0ZXAgaXMgZW50ZXJlZFwiXG4gKiAgICAoc3RlcEV4aXQpPVwiZXZlbnQgZW1pdHRlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgd2l6YXJkIHN0ZXAgaXMgZXhpdGVkXCI+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IGF3V2l6YXJkQ29tcGxldGlvblN0ZXAgc3RlcFRpdGxlPVwiU3RlcCAxXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcxJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogV2l0aCBhIG5hdmlnYXRpb24gc3ltYm9sIGZyb20gdGhlIGBmb250LWF3ZXNvbWVgIGZvbnQ6XG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZENvbXBsZXRpb25TdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnJiN4ZjFiYTsnLCBmb250RmFtaWx5OiAnRm9udEF3ZXNvbWUnIH1cIj5cbiAqICAgIC4uLlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3V2l6YXJkQ29tcGxldGlvblN0ZXBdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSkgfSxcbiAgICB7IHByb3ZpZGU6IFdpemFyZENvbXBsZXRpb25TdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSkgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlIGV4dGVuZHMgV2l6YXJkQ29tcGxldGlvblN0ZXAge1xufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd1dpemFyZFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSBub3JtYWwgc3RlcCBpbnNpZGUgYSB3aXphcmQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIFdpdGggYHN0ZXBUaXRsZWAgYW5kIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dHM6XG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZFN0ZXAgW3N0ZXBUaXRsZV09XCJzdGVwIHRpdGxlXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICdzeW1ib2wnLCBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknIH1cIlxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIC4uLlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGBhd1dpemFyZFN0ZXBUaXRsZWAgYW5kIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZXM6XG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZFN0ZXAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cbiAqICAgICAgICBzdGVwIHRpdGxlXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cbiAqICAgICAgICBzeW1ib2xcbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRTdGVwIHN0ZXBUaXRsZT1cIkFkZHJlc3MgaW5mb3JtYXRpb25cIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogV2l0aCBgYXdXaXphcmRTdGVwVGl0bGVgIGFuZCBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmVzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRTdGVwPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxuICogICAgICAgIEFkZHJlc3MgaW5mb3JtYXRpb25cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxuICogICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGF4aVwiPjwvaT5cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdXaXphcmRTdGVwXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogV2l6YXJkU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkU3RlcERpcmVjdGl2ZSkgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZFN0ZXBEaXJlY3RpdmUgZXh0ZW5kcyBXaXphcmRTdGVwIHtcbn1cbiIsImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7V2l6YXJkQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQge1dpemFyZE5hdmlnYXRpb25CYXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7V2l6YXJkU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1zdGVwLmNvbXBvbmVudCc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5jb21wb25lbnQnO1xuXG5pbXBvcnQge05leHRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmV4dC1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1ByZXZpb3VzU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3ByZXZpb3VzLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7T3B0aW9uYWxTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvb3B0aW9uYWwtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtHb1RvU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2dvLXRvLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7V2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXN5bWJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtFbmFibGVCYWNrTGlua3NEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9lbmFibGUtYmFjay1saW5rcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtY29tcGxldGlvbi1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1NlbGVjdGVkU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdGVkLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7UmVzZXRXaXphcmREaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZXNldC13aXphcmQuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBUaGUgbW9kdWxlIGRlZmluaW5nIGFsbCB0aGUgY29udGVudCBpbnNpZGUgYGFuZ3VsYXItYXJjaHdpemFyZGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgV2l6YXJkQ29tcG9uZW50LFxuICAgIFdpemFyZFN0ZXBDb21wb25lbnQsXG4gICAgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCxcbiAgICBHb1RvU3RlcERpcmVjdGl2ZSxcbiAgICBOZXh0U3RlcERpcmVjdGl2ZSxcbiAgICBQcmV2aW91c1N0ZXBEaXJlY3RpdmUsXG4gICAgT3B0aW9uYWxTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlLFxuICAgIEVuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlLFxuICAgIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSxcbiAgICBSZXNldFdpemFyZERpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBXaXphcmRDb21wb25lbnQsXG4gICAgV2l6YXJkU3RlcENvbXBvbmVudCxcbiAgICBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50LFxuICAgIEdvVG9TdGVwRGlyZWN0aXZlLFxuICAgIE5leHRTdGVwRGlyZWN0aXZlLFxuICAgIFByZXZpb3VzU3RlcERpcmVjdGl2ZSxcbiAgICBPcHRpb25hbFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUsXG4gICAgRW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUsXG4gICAgU2VsZWN0ZWRTdGVwRGlyZWN0aXZlLFxuICAgIFJlc2V0V2l6YXJkRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXJjaHdpemFyZE1vZHVsZSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7bmdNb2R1bGU6IEFyY2h3aXphcmRNb2R1bGUsIHByb3ZpZGVyczogW119O1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7Ozs7OztJQVNFLGtDQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7S0FBSzs7Z0JBVHRELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMERBQTBEO2lCQUNyRTs7O2dCQW5Ca0IsV0FBVzs7SUEyQjlCLCtCQUFDO0NBVkQ7Ozs7OztBQ3BCQTs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7OztJQVNFLG1DQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7S0FBSzs7Z0JBVHRELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNERBQTREO2lCQUN2RTs7O2dCQWhCa0IsV0FBVzs7SUF3QjlCLGdDQUFDO0NBVkQ7Ozs7OztBQ2JBOzs7Ozs7QUFXQTs7Ozs7O0lBQUE7Ozs7O1FBa0NTLHFCQUFnQixHQUFxQixFQUFFLE1BQU0sRUFBRSxFQUFF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
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-archwizard', ['exports', '@angular/core', 'util', '@angular/common'], factory) :
    (factory((global['angular-archwizard'] = {}),global.ng.core,global.util,global.ng.common));
}(this, (function (exports,core,util,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

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
            { type: core.Directive, args: [{
                        selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
                    },] }
        ];
        WizardStepTitleDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
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
            { type: core.Directive, args: [{
                        selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
                    },] }
        ];
        WizardStepSymbolDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
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
            this.stepEnter = new core.EventEmitter();
            /**
             * This [[EventEmitter]] is called when the step is exited.
             * The bound method can be used to do cleanup work.
             */
            this.stepExit = new core.EventEmitter();
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
             */ function () {
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
                if (util.isBoolean(condition)) {
                    return Promise.resolve(( /** @type {?} */(condition)));
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
            stepTitleTemplate: [{ type: core.ContentChild, args: [WizardStepTitleDirective,] }],
            stepSymbolTemplate: [{ type: core.ContentChild, args: [WizardStepSymbolDirective,] }],
            stepId: [{ type: core.Input }],
            stepTitle: [{ type: core.Input }],
            navigationSymbol: [{ type: core.Input }],
            canEnter: [{ type: core.Input }],
            canExit: [{ type: core.Input }],
            stepEnter: [{ type: core.Output }],
            stepExit: [{ type: core.Output }],
            hidden: [{ type: core.HostBinding, args: ['hidden',] }]
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
    var /**
     * An interface describing the basic functionality, which must be provided by a navigation mode.
     * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
     *
     * @author Marc Arndt
     * @abstract
     */ NavigationMode = /** @class */ (function () {
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
    var /**
     * A [[NavigationMode]], which allows the user to navigate without any limitations,
     * as long as the current step can be exited in the given direction
     *
     * @author Marc Arndt
     */ FreeNavigationMode = /** @class */ (function (_super) {
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
    var /**
     * Basic functionality every wizard completion step needs to provide
     *
     * @author Marc Arndt
     * @abstract
     */ WizardCompletionStep = /** @class */ (function (_super) {
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
            _this.stepExit = new core.EventEmitter();
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
    var /**
     * A [[NavigationMode]], which allows the user to navigate with some limitations.
     * The user can only navigation to a given destination step, if:
     * - the current step can be exited in the direction of the destination step
     * - a completion step can only be entered, if all "normal" wizard steps have been completed
     *
     * @author Marc Arndt
     */ SemiStrictNavigationMode = /** @class */ (function (_super) {
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
    var /**
     * A [[NavigationMode]], which allows the user to navigate with strict limitations.
     * The user can only navigation to a given destination step, if:
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @author Marc Arndt
     */ StrictNavigationMode = /** @class */ (function (_super) {
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
             */ function () {
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
             */ function (defaultStepIndex) {
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
             */ function () {
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
             */ function () {
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
            { type: core.Injectable }
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
            { type: core.Component, args: [{
                        selector: 'aw-wizard',
                        template: "<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'left',\n    horizontal: navBarLocation == 'top',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n\n<div [ngClass]=\"{\n  'wizard-steps': true,\n  vertical: navBarLocation == 'left' || navBarLocation == 'right',\n  horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\n}\">\n  <ng-content></ng-content>\n</div>\n\n<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'right',\n    horizontal: navBarLocation == 'bottom',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [WizardState],
                        styles: ["aw-wizard{display:flex;justify-content:flex-start}aw-wizard.vertical{flex-direction:row}aw-wizard.horizontal{flex-direction:column}aw-wizard .wizard-steps{top:0;display:flex}aw-wizard .wizard-steps.vertical{min-width:calc(100% - 280px);width:80%;height:100%;flex-direction:column}aw-wizard .wizard-steps.horizontal{width:100%;flex-direction:row}"]
                    }] }
        ];
        WizardComponent.ctorParameters = function () {
            return [
                { type: WizardState }
            ];
        };
        WizardComponent.propDecorators = {
            wizardSteps: [{ type: core.ContentChildren, args: [WizardStep,] }],
            navBarLocation: [{ type: core.Input }],
            navBarLayout: [{ type: core.Input }],
            navBarDirection: [{ type: core.Input }],
            navigationMode: [{ type: core.Input }],
            defaultStepIndex: [{ type: core.Input }],
            disableNavigationBar: [{ type: core.Input }],
            horizontalOrientation: [{ type: core.HostBinding, args: ['class.horizontal',] }],
            verticalOrientation: [{ type: core.HostBinding, args: ['class.vertical',] }]
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
            { type: core.Component, args: [{
                        selector: 'aw-wizard-completion-step',
                        template: "<ng-content></ng-content>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [
                            { provide: WizardStep, useExisting: core.forwardRef(function () { return WizardCompletionStepComponent; }) },
                            { provide: WizardCompletionStep, useExisting: core.forwardRef(function () { return WizardCompletionStepComponent; }) }
                        ],
                        styles: ["aw-wizard-completion-step{height:auto;width:100%}"]
                    }] }
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'aw-wizard-navigation-bar',
                        template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li *ngFor=\"let step of wizardSteps\"\n      [ngClass]=\"{\n        default: isDefault(step),\n        current: isCurrent(step),\n        done: isDone(step),\n        editing: isEditing(step),\n        optional: isOptional(step),\n        navigable: isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\" [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["aw-wizard-navigation-bar.horizontal.small ul.steps-indicator{padding:24px 0 10px}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 14px);top:-7px;left:calc(50% + 14px / 2)}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li .step-indicator{position:absolute;top:-14px;left:calc(50% - 14px / 2);width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current .step-indicator{background-color:#01a9f4}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#0197db}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.default a:hover .step-indicator{background-color:#01a9f4}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current .step-indicator{background-color:#01a9f4}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#0197db}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:#01a9f4}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid #01a9f4}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#0186c1}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:#01a9f4}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:#01a9f4;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#0197db}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:#01a9f4}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:#01a9f4;border:2px solid #01a9f4}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#0186c1;color:#0186c1}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:#01a9f4;color:#01a9f4}aw-wizard-navigation-bar.horizontal ul.steps-indicator{display:flex;flex-direction:row;justify-content:center;margin:0;width:100%;list-style:none}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2:before{left:25%;right:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2 li{width:50%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3:before{left:16.66666667%;right:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3 li{width:33.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4:before{left:12.5%;right:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4 li{width:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5:before{left:10%;right:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5 li{width:20%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6:before{left:8.33333333%;right:8.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6 li{width:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7:before{left:7.14285714%;right:7.14285714%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7 li{width:14.28571429%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8:before{left:6.25%;right:6.25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8 li{width:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9:before{left:5.55555556%;right:5.55555556%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9 li{width:11.11111111%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10:before{left:5%;right:5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10 li{width:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.horizontal ul.steps-indicator li{position:relative;margin:0;padding:0;pointer-events:none;text-align:center}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a{cursor:pointer}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a .label{display:inline-block;padding-top:10px;color:#01a9f4;line-height:14px;font-size:10px;text-decoration:none;text-transform:uppercase;text-align:center;font-weight:400;transition:.25s}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a:hover .label{color:#01638e}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a .label{color:#9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a{cursor:auto}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a .label{color:#9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing .step-indicator{border:2px solid #01a9f4}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a div.label{color:#01a9f4}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a div.step-indicator{border:2px solid #01a9f4}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.editing a div.label{color:#01a9f4}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.editing a div.step-indicator{border:2px solid #01a9f4!important}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done.navigable a div.label{color:#9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done.navigable a div.step-indicator{border:2px solid #9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.navigable{pointer-events:auto}", "aw-wizard-navigation-bar.vertical{max-width:280px;width:20%;height:100%;position:-webkit-sticky;position:sticky;top:0}aw-wizard-navigation-bar.vertical.small ul.steps-indicator{padding:5px 5px 5px 19px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-7px;top:14px;height:calc(100% - 14px);width:1px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-14px;width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li div{min-height:14px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current .step-indicator{background-color:#01a9f4}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing .step-indicator{background-color:#9e9e9e}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#0197db}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing a:hover .step-indicator{background-color:#919191}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.default a:hover .step-indicator{background-color:#01a9f4}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li div{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current .step-indicator{background-color:#01a9f4}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing .step-indicator{background-color:#9e9e9e}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#0197db}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing a:hover .step-indicator{background-color:#919191}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:#01a9f4}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li div{min-height:54px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid #01a9f4}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing .step-indicator{border:2px solid #9e9e9e}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#0186c1}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing a:hover .step-indicator{border-color:#858585}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:#01a9f4}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li div{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:#01a9f4;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing .step-indicator{background-color:#9e9e9e;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#0197db}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator{background-color:#919191}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:#01a9f4}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li div{min-height:54px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:#01a9f4;border:2px solid #01a9f4}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing .step-indicator{color:#9e9e9e;border:2px solid #9e9e9e}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#0186c1;color:#0186c1}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator{border-color:#858585;color:#858585}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:#01a9f4;color:#01a9f4}aw-wizard-navigation-bar.vertical ul.steps-indicator{display:flex;flex-direction:column;justify-content:center;list-style:none;margin:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.vertical ul.steps-indicator li{position:relative;pointer-events:none}aw-wizard-navigation-bar.vertical ul.steps-indicator li:not(:last-child){margin-bottom:0;padding-bottom:10px}aw-wizard-navigation-bar.vertical ul.steps-indicator li a{cursor:pointer}aw-wizard-navigation-bar.vertical ul.steps-indicator li a .label{margin-left:15px;color:#01a9f4;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:left;font-weight:700;transition:.25s}aw-wizard-navigation-bar.vertical ul.steps-indicator li a:hover .label{color:#01638e}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a .label{color:#01a9f4}aw-wizard-navigation-bar.vertical ul.steps-indicator li.navigable{pointer-events:auto}"]
                    }] }
        ];
        WizardNavigationBarComponent.ctorParameters = function () {
            return [
                { type: WizardState }
            ];
        };
        WizardNavigationBarComponent.propDecorators = {
            direction: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'aw-wizard-step',
                        template: "<ng-content></ng-content>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [
                            { provide: WizardStep, useExisting: core.forwardRef(function () { return WizardStepComponent; }) }
                        ],
                        styles: ["aw-wizard-step{height:auto;width:100%}"]
                    }] }
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
            this.stepExit = new core.EventEmitter();
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
            { type: core.Directive, args: [{
                        selector: '[awEnableBackLinks]'
                    },] }
        ];
        EnableBackLinksDirective.ctorParameters = function () {
            return [
                { type: WizardCompletionStep, decorators: [{ type: core.Host }] }
            ];
        };
        EnableBackLinksDirective.propDecorators = {
            stepExit: [{ type: core.Output }]
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
            this.preFinalize = new core.EventEmitter();
            /**
             * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
             */
            this.postFinalize = new core.EventEmitter();
        }
        Object.defineProperty(GoToStepDirective.prototype, "finalize", {
            /**
             * A convenience field for `preFinalize`
             */
            get: /**
             * A convenience field for `preFinalize`
             * @return {?}
             */ function () {
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
             */ function (emitter) {
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
             */ function () {
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
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[awGoToStep]'
                    },] }
        ];
        GoToStepDirective.ctorParameters = function () {
            return [
                { type: WizardState },
                { type: WizardStep, decorators: [{ type: core.Optional }] }
            ];
        };
        GoToStepDirective.propDecorators = {
            preFinalize: [{ type: core.Output }],
            postFinalize: [{ type: core.Output }],
            finalize: [{ type: core.Output }],
            targetStep: [{ type: core.Input, args: ['awGoToStep',] }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
            this.preFinalize = new core.EventEmitter();
            /**
             * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
             */
            this.postFinalize = new core.EventEmitter();
        }
        Object.defineProperty(NextStepDirective.prototype, "finalize", {
            /**
             * A convenience field for `preFinalize`
             */
            get: /**
             * A convenience field for `preFinalize`
             * @return {?}
             */ function () {
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
             */ function (emitter) {
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
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[awNextStep]'
                    },] }
        ];
        NextStepDirective.ctorParameters = function () {
            return [
                { type: WizardState }
            ];
        };
        NextStepDirective.propDecorators = {
            preFinalize: [{ type: core.Output }],
            postFinalize: [{ type: core.Output }],
            finalize: [{ type: core.Output }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
            { type: core.Directive, args: [{
                        selector: '[awOptionalStep]'
                    },] }
        ];
        OptionalStepDirective.ctorParameters = function () {
            return [
                { type: WizardStep, decorators: [{ type: core.Host }] }
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
            this.preFinalize = new core.EventEmitter();
            /**
             * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
             */
            this.postFinalize = new core.EventEmitter();
        }
        Object.defineProperty(PreviousStepDirective.prototype, "finalize", {
            /**
             * A convenience field for `preFinalize`
             */
            get: /**
             * A convenience field for `preFinalize`
             * @return {?}
             */ function () {
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
             */ function (emitter) {
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
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[awPreviousStep]'
                    },] }
        ];
        PreviousStepDirective.ctorParameters = function () {
            return [
                { type: WizardState }
            ];
        };
        PreviousStepDirective.propDecorators = {
            preFinalize: [{ type: core.Output }],
            postFinalize: [{ type: core.Output }],
            finalize: [{ type: core.Output }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
            this.finalize = new core.EventEmitter();
        }
        Object.defineProperty(ResetWizardDirective.prototype, "navigationMode", {
            /**
             * The navigation mode
             */
            get: /**
             * The navigation mode
             * @return {?}
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[awResetWizard]'
                    },] }
        ];
        ResetWizardDirective.ctorParameters = function () {
            return [
                { type: WizardState }
            ];
        };
        ResetWizardDirective.propDecorators = {
            finalize: [{ type: core.Output }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
            { type: core.Directive, args: [{
                        selector: '[awSelectedStep]'
                    },] }
        ];
        SelectedStepDirective.ctorParameters = function () {
            return [
                { type: WizardStep, decorators: [{ type: core.Host }] }
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
            { type: core.Directive, args: [{
                        selector: '[awWizardCompletionStep]',
                        providers: [
                            { provide: WizardStep, useExisting: core.forwardRef(function () { return WizardCompletionStepDirective; }) },
                            { provide: WizardCompletionStep, useExisting: core.forwardRef(function () { return WizardCompletionStepDirective; }) }
                        ]
                    },] }
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
            { type: core.Directive, args: [{
                        selector: '[awWizardStep]',
                        providers: [
                            { provide: WizardStep, useExisting: core.forwardRef(function () { return WizardStepDirective; }) }
                        ]
                    },] }
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
            { type: core.NgModule, args: [{
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
                            common.CommonModule
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
                    },] }
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

    exports.ArchwizardModule = ArchwizardModule;
    exports.WizardComponent = WizardComponent;
    exports.WizardCompletionStepComponent = WizardCompletionStepComponent;
    exports.WizardNavigationBarComponent = WizardNavigationBarComponent;
    exports.WizardStepComponent = WizardStepComponent;
    exports.EnableBackLinksDirective = EnableBackLinksDirective;
    exports.GoToStepDirective = GoToStepDirective;
    exports.NextStepDirective = NextStepDirective;
    exports.OptionalStepDirective = OptionalStepDirective;
    exports.PreviousStepDirective = PreviousStepDirective;
    exports.ResetWizardDirective = ResetWizardDirective;
    exports.SelectedStepDirective = SelectedStepDirective;
    exports.WizardCompletionStepDirective = WizardCompletionStepDirective;
    exports.WizardStepDirective = WizardStepDirective;
    exports.WizardStepTitleDirective = WizardStepTitleDirective;
    exports.FreeNavigationMode = FreeNavigationMode;
    exports.NavigationMode = NavigationMode;
    exports.SemiStrictNavigationMode = SemiStrictNavigationMode;
    exports.StrictNavigationMode = StrictNavigationMode;
    exports.WizardState = WizardState;
    exports.navigationModeFactory = navigationModeFactory;
    exports.MovingDirection = MovingDirection;
    exports.WizardCompletionStep = WizardCompletionStep;
    exports.WizardStep = WizardStep;
    exports.isStepId = isStepId;
    exports.isStepIndex = isStepIndex;
    exports.isStepOffset = isStepOffset;
    exports.ɵh = WizardCompletionStepComponent;
    exports.ɵg = WizardNavigationBarComponent;
    exports.ɵf = WizardStepComponent;
    exports.ɵa = WizardComponent;
    exports.ɵn = EnableBackLinksDirective;
    exports.ɵj = GoToStepDirective;
    exports.ɵk = NextStepDirective;
    exports.ɵm = OptionalStepDirective;
    exports.ɵl = PreviousStepDirective;
    exports.ɵr = ResetWizardDirective;
    exports.ɵq = SelectedStepDirective;
    exports.ɵp = WizardCompletionStepDirective;
    exports.ɵe = WizardStepSymbolDirective;
    exports.ɵd = WizardStepTitleDirective;
    exports.ɵo = WizardStepDirective;
    exports.ɵb = WizardState;
    exports.ɵi = WizardCompletionStep;
    exports.ɵc = WizardStep;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1hcmNod2l6YXJkLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy93aXphcmQtc3RlcC10aXRsZS5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy93aXphcmQtc3RlcC1zeW1ib2wuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9uYXZpZ2F0aW9uL2ZyZWUtbmF2aWdhdGlvbi1tb2RlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9zZW1pLXN0cmljdC1uYXZpZ2F0aW9uLW1vZGUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9zdHJpY3QtbmF2aWdhdGlvbi1tb2RlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2NvbXBvbmVudHMvd2l6YXJkLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2NvbXBvbmVudHMvd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL2VuYWJsZS1iYWNrLWxpbmtzLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3N0ZXAtb2Zmc2V0LmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3N0ZXAtaWQuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL3V0aWwvc3RlcC1pbmRleC5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9nby10by1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL25leHQtc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9vcHRpb25hbC1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3ByZXZpb3VzLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvcmVzZXQtd2l6YXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3NlbGVjdGVkLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy93aXphcmQtc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvYXJjaHdpemFyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbWFyYyBvbiAwMS4wNi4xNy5cbiAqL1xuaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGUgYGF3V2l6YXJkU3RlcFRpdGxlYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgYXMgYW4gYWx0ZXJuYXRpdmUgdG8gdGhlIGBzdGVwVGl0bGVgIGlucHV0IG9mIGEgW1tXaXphcmRTdGVwXV1cbiAqIHRvIGRlZmluZSB0aGUgY29udGVudCBvZiBhIHN0ZXAgdGl0bGUgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAqIFRoaXMgc3RlcCB0aXRsZSBjYW4gYmUgZnJlZWx5IGNyZWF0ZWQgYW5kIGNhbiBjb250YWluIG1vcmUgdGhhbiBvbmx5IHBsYWluIHRleHRcbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxuICogICAgIC4uLlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthd1N0ZXBUaXRsZV0sIG5nLXRlbXBsYXRlW2F3V2l6YXJkU3RlcFRpdGxlXSdcbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZVJlZiBBIHJlZmVyZW5jZSB0byB0aGUgY29udGVudCBvZiB0aGUgYG5nLXRlbXBsYXRlYCB0aGF0IGNvbnRhaW5zIHRoaXMgW1tXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmVdXVxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byB0aGUgYG5hdmlnYXRpb25TeW1ib2xgIGlucHV0IG9mIGEgW1tXaXphcmRTdGVwXV1cbiAqIHRvIGRlZmluZSB0aGUgc3RlcCBzeW1ib2wgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci4gIFRoaXMgd2F5IHN0ZXAgc3ltYm9sIG1heSBjb250YWluIGFyYml0cmFyeSBjb250ZW50LlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxuICogICAgIC4uLlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthd1N0ZXBTeW1ib2xdLCBuZy10ZW1wbGF0ZVthd1dpemFyZFN0ZXBTeW1ib2xdJ1xufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZVJlZiBBIHJlZmVyZW5jZSB0byB0aGUgY29udGVudCBvZiB0aGUgYG5nLXRlbXBsYXRlYCB0aGF0IGNvbnRhaW5zIHRoaXMgW1tXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlXV1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iLCJpbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7Q29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aXNCb29sZWFufSBmcm9tICd1dGlsJztcbmltcG9ydCB7TmF2aWdhdGlvblN5bWJvbH0gZnJvbSAnLi9uYXZpZ2F0aW9uLXN5bWJvbC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXN5bWJvbC5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIEJhc2ljIGZ1bmN0aW9uYWxpdHkgZXZlcnkgdHlwZSBvZiB3aXphcmQgc3RlcCBuZWVkcyB0byBwcm92aWRlXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaXphcmRTdGVwIHtcbiAgLyoqXG4gICAqIEEgc3RlcCB0aXRsZSBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgdGhlIHZpc2libGUgaGVhZGVyIHRpdGxlIG9mIHRoZSBzdGVwLlxuICAgKiBUaGlzIHRpdGxlIGlzIHRoZW4gc2hvd24gaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogQ29tcGFyZWQgdG8gYHN0ZXBUaXRsZWAgdGhpcyBwcm9wZXJ0eSBjYW4gY29udGFpbiBhbnkgaHRtbCBjb250ZW50IGFuZCBub3Qgb25seSBwbGFpbiB0ZXh0XG4gICAqL1xuICBAQ29udGVudENoaWxkKFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSlcbiAgcHVibGljIHN0ZXBUaXRsZVRlbXBsYXRlOiBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIEEgc3RlcCBzeW1ib2wgcHJvcGVydHkgdGhhdCwgaWYgZGVmaW5lZCwgb3ZlcnJpZGVzIGBuYXZpZ2F0aW9uU3ltYm9sYC5cbiAgICogQWxsb3dzIHRvIGRpc3BsYXkgYXJiaXRyYXJ5IGNvbnRlbnQgYXMgYSBzdGVwIHN5bWJvbCBpbnN0ZWFkIG9mIHBsYWluIHRleHQuXG4gICAqL1xuICBAQ29udGVudENoaWxkKFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUpXG4gIHB1YmxpYyBzdGVwU3ltYm9sVGVtcGxhdGU6IFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIEEgc3RlcCBpZCwgdW5pcXVlIHRvIHRoZSBzdGVwXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc3RlcElkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3RlcCB0aXRsZSBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgdGhlIHZpc2libGUgaGVhZGVyIHRpdGxlIG9mIHRoZSBzdGVwLlxuICAgKiBUaGlzIHRpdGxlIGlzIG9ubHkgc2hvd24gaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciwgaWYgYHN0ZXBUaXRsZVRlbXBsYXRlYCBpcyBub3QgZGVmaW5lZCBvciBudWxsLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHN0ZXBUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN5bWJvbCBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgYW4gb3B0aW9uYWwgc3ltYm9sIGZvciB0aGUgc3RlcCBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxuICAgKiBUYWtlcyBlZmZlY3Qgd2hlbiBgc3RlcFN5bWJvbFRlbXBsYXRlYCBpcyBub3QgZGVmaW5lZCBvciBudWxsLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdmlnYXRpb25TeW1ib2w6IE5hdmlnYXRpb25TeW1ib2wgPSB7IHN5bWJvbDogJycgfTtcblxuICAvKipcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcgaWYgdGhlIHdpemFyZCBzdGVwIGhhcyBiZWVuIGNvbXBsZXRlZFxuICAgKi9cbiAgcHVibGljIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaXMgY3VycmVudGx5IHNlbGVjdGVkXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcsIGlmIHRoZSB3aXphcmQgc3RlcCBzaG91bGQgYmUgc2VsZWN0ZWQgYnkgZGVmYXVsdCwgaS5lLiBhZnRlciB0aGUgd2l6YXJkIGhhcyBiZWVuIGluaXRpYWxpemVkIGFzIHRoZSBpbml0aWFsIHN0ZXBcbiAgICovXG4gIHB1YmxpYyBkZWZhdWx0U2VsZWN0ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcgaWYgdGhlIHdpemFyZCBzdGVwIGlzIGFuIG9wdGlvbmFsIHN0ZXBcbiAgICovXG4gIHB1YmxpYyBvcHRpb25hbCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIG9yIGJvb2xlYW4gZGVjaWRpbmcsIGlmIHRoaXMgc3RlcCBjYW4gYmUgZW50ZXJlZFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNhbkVudGVyOiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IFByb21pc2U8Ym9vbGVhbj4pIHwgYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gb3IgYm9vbGVhbiBkZWNpZGluZywgaWYgdGhpcyBzdGVwIGNhbiBiZSBleGl0ZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjYW5FeGl0OiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IFByb21pc2U8Ym9vbGVhbj4pIHwgYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBlbnRlcmVkLlxuICAgKiBUaGUgYm91bmQgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHRvIGRvIGluaXRpYWxpemF0aW9uIHdvcmsuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHN0ZXBFbnRlcjogRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcblxuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZC5cbiAgICogVGhlIGJvdW5kIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBkbyBjbGVhbnVwIHdvcmsuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHN0ZXBFeGl0OiBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoaXMgd2l6YXJkIHN0ZXAgc2hvdWxkIGJlIHZpc2libGUgdG8gdGhlIHVzZXIuXG4gICAqIElmIHRoZSBzdGVwIHNob3VsZCBiZSB2aXNpYmxlIHRvIHRoZSB1c2VyIGZhbHNlIGlzIHJldHVybmVkLCBvdGhlcndpc2UgdHJ1ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdoaWRkZW4nKVxuICBwdWJsaWMgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuc2VsZWN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0cnVlLCBpZiB0aGlzIHdpemFyZCBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWQgd2l0aCBhIGdpdmVuIGRpcmVjdGlvbi5cbiAgICogVHJhbnNpdGlvbmVkIGluIHRoaXMgY2FzZSBtZWFucyBlaXRoZXIgZW50ZXJlZCBvciBleGl0ZWQsIGRlcGVuZGluZyBvbiB0aGUgZ2l2ZW4gYGNvbmRpdGlvbmAgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBAcGFyYW0gY29uZGl0aW9uIEEgY29uZGl0aW9uIHZhcmlhYmxlLCBkZWNpZGluZyBpZiB0aGUgc3RlcCBjYW4gYmUgdHJhbnNpdGlvbmVkXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGlzIHN0ZXAgc2hvdWxkIGJlIHRyYW5zaXRpb25lZFxuICAgKiBAcmV0dXJucyBBIFtbUHJvbWlzZV1dIGNvbnRhaW5pbmcgYHRydWVgLCBpZiB0aGlzIHN0ZXAgY2FuIHRyYW5zaXRpb25lZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24gaWYgYGNvbmRpdGlvbmAgaXMgbmVpdGhlciBhIGZ1bmN0aW9uIG5vciBhIGJvb2xlYW5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGNhblRyYW5zaXRpb25TdGVwKGNvbmRpdGlvbjogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IFByb21pc2U8Ym9vbGVhbj4pIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmIChpc0Jvb2xlYW4oY29uZGl0aW9uKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25kaXRpb24gYXMgYm9vbGVhbik7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25kaXRpb24oZGlyZWN0aW9uKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYElucHV0IHZhbHVlICcke2NvbmRpdGlvbn0nIGlzIG5laXRoZXIgYSBib29sZWFuIG5vciBhIGZ1bmN0aW9uYCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGVudGVyZWRcbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBzdGVwIGlzIGVudGVyZWRcbiAgICovXG4gIHB1YmxpYyBlbnRlcihkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IHZvaWQge1xuICAgIHRoaXMuc3RlcEVudGVyLmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZFxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXAgaXMgZXhpdGVkXG4gICAqL1xuICBwdWJsaWMgZXhpdChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikge1xuICAgIHRoaXMuc3RlcEV4aXQuZW1pdChkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSwgaWYgdGhpcyB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBmcm9tIHRoZSBnaXZlbiBkaXJlY3Rpb24uXG4gICAqIEJlY2F1c2UgdGhpcyBtZXRob2QgZGVwZW5kcyBvbiB0aGUgdmFsdWUgYGNhbkVudGVyYCwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciwgaWYgYGNhbkVudGVyYCBpcyBuZWl0aGVyIGEgYm9vbGVhblxuICAgKiBub3IgYSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgZW50ZXJlZFxuICAgKiBAcmV0dXJucyBBIFtbUHJvbWlzZV1dIGNvbnRhaW5pbmcgYHRydWVgLCBpZiB0aGUgc3RlcCBjYW4gYmUgZW50ZXJlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLCBmYWxzZSBvdGhlcndpc2VcbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biBpZiBgYW5FbnRlcmAgaXMgbmVpdGhlciBhIGZ1bmN0aW9uIG5vciBhIGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBjYW5FbnRlclN0ZXAoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gV2l6YXJkU3RlcC5jYW5UcmFuc2l0aW9uU3RlcCh0aGlzLmNhbkVudGVyLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSwgaWYgdGhpcyB3aXphcmQgc3RlcCBjYW4gYmUgZXhpdGVkIGludG8gZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBCZWNhdXNlIHRoaXMgbWV0aG9kIGRlcGVuZHMgb24gdGhlIHZhbHVlIGBjYW5FeGl0YCwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciwgaWYgYGNhbkV4aXRgIGlzIG5laXRoZXIgYSBib29sZWFuXG4gICAqIG5vciBhIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhpcyBzdGVwIHNob3VsZCBiZSBsZWZ0XG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoZSBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24gaWYgYGNhbkV4aXRgIGlzIG5laXRoZXIgYSBmdW5jdGlvbiBub3IgYSBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgY2FuRXhpdFN0ZXAoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gV2l6YXJkU3RlcC5jYW5UcmFuc2l0aW9uU3RlcCh0aGlzLmNhbkV4aXQsIGRpcmVjdGlvbik7XG4gIH1cbn1cbiIsIi8qKlxuICogVGhlIGRpcmVjdGlvbiBpbiB3aGljaCBhIHN0ZXAgdHJhbnNpdGlvbiB3YXMgbWFkZVxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5cbi8qKlxuICogVGhpcyBlbnVtIGNvbnRhaW5zIHRoZSBkaWZmZXJlbnQgcG9zc2libGUgbW92aW5nIGRpcmVjdGlvbnMgaW4gd2hpY2ggYSB3aXphcmQgY2FuIGJlIHRyYXZlcnNlZFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgZW51bSBNb3ZpbmdEaXJlY3Rpb24ge1xuICAvKipcbiAgICogQSBmb3J3YXJkIHN0ZXAgdHJhbnNpdGlvblxuICAgKi9cbiAgRm9yd2FyZHMsXG4gIC8qKlxuICAgKiBBIGJhY2t3YXJkIHN0ZXAgdHJhbnNpdGlvblxuICAgKi9cbiAgQmFja3dhcmRzLFxuICAvKipcbiAgICogTm8gc3RlcCB0cmFuc2l0aW9uIHdhcyBkb25lXG4gICAqL1xuICBTdGF5XG59XG4iLCJpbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIGRlc2NyaWJpbmcgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdHksIHdoaWNoIG11c3QgYmUgcHJvdmlkZWQgYnkgYSBuYXZpZ2F0aW9uIG1vZGUuXG4gKiBBIG5hdmlnYXRpb24gbW9kZSBtYW5hZ2VzIHRoZSBuYXZpZ2F0aW9uIGJldHdlZW4gZGlmZmVyZW50IHdpemFyZCBzdGVwcywgdGhpcyBjb250YWlucyB0aGUgdmFsaWRhdGlvbiwgaWYgYSBzdGVwIHRyYW5zaXRpb24gY2FuIGJlIGRvbmVcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5hdmlnYXRpb25Nb2RlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIHdpemFyZCBzdGVwLCBhcyBkZWZpbmVkIGJ5IHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleCwgY2FuIGJlIHRyYW5zaXRpb25lZCB0by5cbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gYW5kIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgYWJzdHJhY3QgY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPjtcblxuICAvKipcbiAgICogVHJpZXMgdG8gdHJhbnNpdGlvbiB0byB0aGUgd2l6YXJkIHN0ZXAsIGFzIGRlbm90ZWQgYnkgdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LlxuICAgKiBJZiB0aGlzIGlzIG5vdCBwb3NzaWJsZSwgdGhlIGN1cnJlbnQgd2l6YXJkIHN0ZXAgc2hvdWxkIGJlIGV4aXRlZCBhbmQgdGhlbiByZWVudGVyZWQgd2l0aCBgTW92aW5nRGlyZWN0aW9uLlN0YXlgXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIHBvc3RGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqL1xuICBhYnN0cmFjdCBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgdGhlIHdpemFyZCBzdGVwLCBsb2NhdGVkIGF0IHRoZSBnaXZlbiBpbmRleCwgaXMgY2FuIGJlIG5hdmlnYXRlZCB0b1xuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbmF2aWdhdGVkIHRvLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGFic3RyYWN0IGlzTmF2aWdhYmxlKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgc3RhdGUgb2YgdGhpcyB3aXphcmQuXG4gICAqIEEgcmVzZXQgdHJhbnNpdGlvbnMgdGhlIHdpemFyZCBhdXRvbWF0aWNhbGx5IHRvIHRoZSBmaXJzdCBzdGVwIGFuZCBzZXRzIGFsbCBzdGVwcyBhcyBpbmNvbXBsZXRlLlxuICAgKiBJbiBhZGRpdGlvbiB0aGUgd2hvbGUgd2l6YXJkIGlzIHNldCBhcyBpbmNvbXBsZXRlXG4gICAqL1xuICBhYnN0cmFjdCByZXNldCgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUcmllcyB0byB0cmFuc2l0aW9uIHRoZSB3aXphcmQgdG8gdGhlIHByZXZpb3VzIHN0ZXAgZnJvbSB0aGUgYGN1cnJlbnRTdGVwYFxuICAgKi9cbiAgZ29Ub1ByZXZpb3VzU3RlcChwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMud2l6YXJkU3RhdGUuaGFzUHJldmlvdXNTdGVwKCkpIHtcbiAgICAgIHRoaXMuZ29Ub1N0ZXAodGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4IC0gMSwgcHJlRmluYWxpemUsIHBvc3RGaW5hbGl6ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIHRyYW5zaXRpb24gdGhlIHdpemFyZCB0byB0aGUgbmV4dCBzdGVwIGZyb20gdGhlIGBjdXJyZW50U3RlcGBcbiAgICovXG4gIGdvVG9OZXh0U3RlcChwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMud2l6YXJkU3RhdGUuaGFzTmV4dFN0ZXAoKSkge1xuICAgICAgdGhpcy5nb1RvU3RlcCh0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggKyAxLCBwcmVGaW5hbGl6ZSwgcG9zdEZpbmFsaXplKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi93aXphcmQtc3RhdGUubW9kZWwnO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgW1tOYXZpZ2F0aW9uTW9kZV1dLCB3aGljaCBhbGxvd3MgdGhlIHVzZXIgdG8gbmF2aWdhdGUgd2l0aG91dCBhbnkgbGltaXRhdGlvbnMsXG4gKiBhcyBsb25nIGFzIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBjbGFzcyBGcmVlTmF2aWdhdGlvbk1vZGUgZXh0ZW5kcyBOYXZpZ2F0aW9uTW9kZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIG1vZGVsL3N0YXRlIG9mIHRoZSB3aXphcmQsIHRoYXQgaXMgY29uZmlndXJlZCB3aXRoIHRoaXMgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcbiAgICBzdXBlcih3aXphcmRTdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHdpemFyZCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLlxuICAgKiBBIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkIGlmOlxuICAgKiAtIGl0IGV4aXN0c1xuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXBcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaGFzU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcChkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgY29uc3QgY2FuRXhpdEN1cnJlbnRTdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNhbkV4aXRTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYW5FbnRlckRlc3RpbmF0aW9uU3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KS5jYW5FbnRlclN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaGFzU3RlcClcbiAgICAgIC50aGVuKGNhbkV4aXRDdXJyZW50U3RlcClcbiAgICAgIC50aGVuKGNhbkVudGVyRGVzdGluYXRpb25TdGVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byBlbnRlciB0aGUgd2l6YXJkIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXG4gICAqIFdoZW4gZW50ZXJpbmcgdGhlIGRlc3RpbmF0aW9uIHN0ZXAsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgY29tcGxldGVkXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIHVuc2VsZWN0ZWRcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWRcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBzZXQgYXMgc2VsZWN0ZWRcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBlbnRlcmVkXG4gICAqXG4gICAqIFdoZW4gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY291bGRuJ3QgYmUgZW50ZXJlZCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGFuZCBlbnRlcmVkIGluIHRoZSBkaXJlY3Rpb24gYE1vdmluZ0RpcmVjdGlvbi5TdGF5YFxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwLCB3aGljaCBzaG91bGQgYmUgZW50ZXJlZFxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIHBvc3RGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqL1xuICBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICB0aGlzLmNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXgpLnRoZW4obmF2aWdhdGlvbkFsbG93ZWQgPT4ge1xuICAgICAgaWYgKG5hdmlnYXRpb25BbGxvd2VkKSB7XG4gICAgICAgIC8vIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwcmVGaW5hbGl6ZSkge1xuICAgICAgICAgIHByZUZpbmFsaXplLmVtaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxlYXZlIGN1cnJlbnQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChtb3ZpbmdEaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gZGVzdGluYXRpb25JbmRleDtcblxuICAgICAgICAvLyBnbyB0byBuZXh0IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihtb3ZpbmdEaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHBvc3RGaW5hbGl6ZSkge1xuICAgICAgICAgIHBvc3RGaW5hbGl6ZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0ZXAgY2FuJ3QgYmUgbGVmdCwgcmVlbnRlciB0aGUgY3VycmVudCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNOYXZpZ2FibGUoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBzdGF0ZSBvZiB0aGlzIHdpemFyZC5cbiAgICogQSByZXNldCB0cmFuc2l0aW9ucyB0aGUgd2l6YXJkIGF1dG9tYXRpY2FsbHkgdG8gdGhlIGZpcnN0IHN0ZXAgYW5kIHNldHMgYWxsIHN0ZXBzIGFzIGluY29tcGxldGUuXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcbiAgICovXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIC8vIHRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXhcbiAgICBpZiAoIXRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcCh0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIGluZGV4ICR7dGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4fWApO1xuICAgIH1cblxuICAgIC8vIHJlc2V0IHRoZSBzdGVwIGludGVybmFsIHN0YXRlXG4gICAgdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgc3RlcC5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgIHN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIHNldCB0aGUgZmlyc3Qgc3RlcCBhcyB0aGUgY3VycmVudCBzdGVwXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gdGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4O1xuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLkZvcndhcmRzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEJhc2ljIGZ1bmN0aW9uYWxpdHkgZXZlcnkgd2l6YXJkIGNvbXBsZXRpb24gc3RlcCBuZWVkcyB0byBwcm92aWRlXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaXphcmRDb21wbGV0aW9uU3RlcCBleHRlbmRzIFdpemFyZFN0ZXAge1xuICAvKipcbiAgICogQGluaGVyaXREb2NcbiAgICovXG4gIHB1YmxpYyBzdGVwRXhpdCA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcHVibGljIGNhbkV4aXQ6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcHVibGljIGVudGVyKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RlcEVudGVyLmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcHVibGljIGV4aXQoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICAvLyBzZXQgdGhpcyBjb21wbGV0aW9uIHN0ZXAgYXMgaW5jb21wbGV0ZVxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGVwRXhpdC5lbWl0KGRpcmVjdGlvbik7XG4gIH1cbn1cbiIsImltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBbW05hdmlnYXRpb25Nb2RlXV0sIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBuYXZpZ2F0ZSB3aXRoIHNvbWUgbGltaXRhdGlvbnMuXG4gKiBUaGUgdXNlciBjYW4gb25seSBuYXZpZ2F0aW9uIHRvIGEgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcCwgaWY6XG4gKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gKiAtIGEgY29tcGxldGlvbiBzdGVwIGNhbiBvbmx5IGJlIGVudGVyZWQsIGlmIGFsbCBcIm5vcm1hbFwiIHdpemFyZCBzdGVwcyBoYXZlIGJlZW4gY29tcGxldGVkXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBjbGFzcyBTZW1pU3RyaWN0TmF2aWdhdGlvbk1vZGUgZXh0ZW5kcyBOYXZpZ2F0aW9uTW9kZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIG1vZGVsL3N0YXRlIG9mIHRoZSB3aXphcmQsIHRoYXQgaXMgY29uZmlndXJlZCB3aXRoIHRoaXMgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcbiAgICBzdXBlcih3aXphcmRTdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHdpemFyZCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLlxuICAgKiBBIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkIGlmOlxuICAgKiAtIGl0IGV4aXN0c1xuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIC0gYWxsIFwibm9ybWFsXCIgd2l6YXJkIHN0ZXBzIGhhdmUgYmVlbiBjb21wbGV0ZWQsIGFyZSBvcHRpb25hbCBvciBzZWxlY3RlZCwgb3IgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXNuJ3QgYSBjb21wbGV0aW9uIHN0ZXBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBoYXNTdGVwID0gdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgY29uc3QgbW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICBjb25zdCBjYW5FeGl0Q3VycmVudFN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY2FuRXhpdFN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbkVudGVyRGVzdGluYXRpb25TdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpLmNhbkVudGVyU3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgLy8gcHJvdmlkZSB0aGUgZGVzdGluYXRpb24gc3RlcCBhcyBhIGxhbWJkYSBpbiBjYXNlIHRoZSBpbmRleCBkb2Vzbid0IGV4aXN0IChpLmUuIGhhc1N0ZXAgPT09IGZhbHNlKVxuICAgIGNvbnN0IGRlc3RpbmF0aW9uU3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIGNvbnN0IGFsbE5vcm1hbFN0ZXBzQ29tcGxldGVkID0gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwc1xuICAgICAgICAgIC5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiBpbmRleCA8IGRlc3RpbmF0aW9uSW5kZXgpXG4gICAgICAgICAgLmV2ZXJ5KHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgfHwgc3RlcC5vcHRpb25hbCB8fCBzdGVwLnNlbGVjdGVkKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAgICEodGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KSBpbnN0YW5jZW9mIFdpemFyZENvbXBsZXRpb25TdGVwKSB8fCBhbGxOb3JtYWxTdGVwc0NvbXBsZXRlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxuICAgICAgLnRoZW4oY2FuRXhpdEN1cnJlbnRTdGVwKVxuICAgICAgLnRoZW4oY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXApXG4gICAgICAudGhlbihkZXN0aW5hdGlvblN0ZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIGVudGVyIHRoZSB3aXphcmQgc3RlcCB3aXRoIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cbiAgICogV2hlbiBlbnRlcmluZyB0aGUgZGVzdGluYXRpb24gc3RlcCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyBjb21wbGV0ZWRcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgdW5zZWxlY3RlZFxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIGV4aXRlZFxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIHNldCBhcyBzZWxlY3RlZFxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIGVudGVyZWRcbiAgICpcbiAgICogV2hlbiB0aGUgZGVzdGluYXRpb24gc3RlcCBjb3VsZG4ndCBiZSBlbnRlcmVkLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgYW5kIGVudGVyZWQgaW4gdGhlIGRpcmVjdGlvbiBgTW92aW5nRGlyZWN0aW9uLlN0YXlgXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBlbnRlcmVkXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICovXG4gIGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xuICAgIHRoaXMuY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleCkudGhlbihuYXZpZ2F0aW9uQWxsb3dlZCA9PiB7XG4gICAgICBpZiAobmF2aWdhdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByZUZpbmFsaXplKSB7XG4gICAgICAgICAgcHJlRmluYWxpemUuZW1pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGVhdmUgY3VycmVudCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSBkZXN0aW5hdGlvbkluZGV4O1xuXG4gICAgICAgIC8vIGdvIHRvIG5leHQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocG9zdEZpbmFsaXplKSB7XG4gICAgICAgICAgcG9zdEZpbmFsaXplLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RlcCBjYW4ndCBiZSBsZWZ0LCByZWVudGVyIHRoZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGluaGVyaXREb2NcbiAgICovXG4gIGlzTmF2aWdhYmxlKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpIGluc3RhbmNlb2YgV2l6YXJkQ29tcGxldGlvblN0ZXApIHtcbiAgICAgIC8vIGEgY29tcGxldGlvbiBzdGVwIGNhbiBvbmx5IGJlIGVudGVyZWQsIGlmIGFsbCBwcmV2aW91cyBzdGVwcyBoYXZlIGJlZW4gY29tcGxldGVkLCBhcmUgb3B0aW9uYWwsIG9yIHNlbGVjdGVkXG4gICAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiBpbmRleCA8IGRlc3RpbmF0aW9uSW5kZXgpXG4gICAgICAgIC5ldmVyeShzdGVwID0+IHN0ZXAuY29tcGxldGVkIHx8IHN0ZXAub3B0aW9uYWwgfHwgc3RlcC5zZWxlY3RlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGEgXCJub3JtYWxcIiBzdGVwIGNhbiBhbHdheXMgYmUgZW50ZXJlZFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICByZXNldCgpOiB2b2lkIHtcbiAgICAvLyB0aGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCB0aGUgZGVmYXVsdCBzdGVwIGluZGV4XG4gICAgaWYgKCF0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAodGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH1gKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgZGVmYXVsdCBzdGVwIGlzIGEgY29tcGxldGlvbiBzdGVwIGFuZCB0aGUgd2l6YXJkIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgc3RlcFxuICAgIGNvbnN0IGRlZmF1bHRDb21wbGV0aW9uU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgodGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4KSBpbnN0YW5jZW9mIFdpemFyZENvbXBsZXRpb25TdGVwICYmXG4gICAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmxlbmd0aCAhPT0gMTtcblxuICAgIGlmIChkZWZhdWx0Q29tcGxldGlvblN0ZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgc3RlcCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH0gcmVmZXJlbmNlcyBhIGNvbXBsZXRpb24gc3RlcGApO1xuICAgIH1cblxuICAgIC8vIHJlc2V0IHRoZSBzdGVwIGludGVybmFsIHN0YXRlXG4gICAgdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgc3RlcC5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgIHN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIHNldCB0aGUgZmlyc3Qgc3RlcCBhcyB0aGUgY3VycmVudCBzdGVwXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gdGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4O1xuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLkZvcndhcmRzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBbW05hdmlnYXRpb25Nb2RlXV0sIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBuYXZpZ2F0ZSB3aXRoIHN0cmljdCBsaW1pdGF0aW9ucy5cbiAqIFRoZSB1c2VyIGNhbiBvbmx5IG5hdmlnYXRpb24gdG8gYSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLCBpZjpcbiAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAqIC0gYWxsIHByZXZpb3VzIHN0ZXBzIHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGhhdmUgYmVlbiBjb21wbGV0ZWQgb3IgYXJlIG9wdGlvbmFsXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpY3ROYXZpZ2F0aW9uTW9kZSBleHRlbmRzIE5hdmlnYXRpb25Nb2RlIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgc3RhdGUgb2YgdGhlIHdpemFyZCwgdGhhdCBpcyBjb25maWd1cmVkIHdpdGggdGhpcyBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xuICAgIHN1cGVyKHdpemFyZFN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgd2l6YXJkIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAuXG4gICAqIEEgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgaWY6XG4gICAqIC0gaXQgZXhpc3RzXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogLSBhbGwgcHJldmlvdXMgc3RlcHMgdG8gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaGF2ZSBiZWVuIGNvbXBsZXRlZCBvciBhcmUgb3B0aW9uYWxcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBoYXNTdGVwID0gdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgY29uc3QgbW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICBjb25zdCBjYW5FeGl0Q3VycmVudFN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY2FuRXhpdFN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbkVudGVyRGVzdGluYXRpb25TdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpLmNhbkVudGVyU3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWxsUHJldmlvdXNTdGVwc0NvbXBsZXRlID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXG4gICAgICAgICAgLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IGluZGV4IDwgZGVzdGluYXRpb25JbmRleCAmJiBpbmRleCAhPT0gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4KVxuICAgICAgICAgIC5ldmVyeShzdGVwID0+IHN0ZXAuY29tcGxldGVkIHx8IHN0ZXAub3B0aW9uYWwpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxuICAgICAgLnRoZW4oY2FuRXhpdEN1cnJlbnRTdGVwKVxuICAgICAgLnRoZW4oY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXApXG4gICAgICAudGhlbihhbGxQcmV2aW91c1N0ZXBzQ29tcGxldGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIGVudGVyIHRoZSB3aXphcmQgc3RlcCB3aXRoIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cbiAgICogV2hlbiBlbnRlcmluZyB0aGUgZGVzdGluYXRpb24gc3RlcCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyBjb21wbGV0ZWRcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgdW5zZWxlY3RlZFxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIGV4aXRlZFxuICAgKiAtIGFsbCBzdGVwcyBiZXR3ZWVuIHRoZSBvbGQgY3VycmVudCBzdGVwIGFuZCB0aGUgZGVzdGluYXRpb24gc3RlcCBhcmUgbWFya2VkIGFzIGluY29tcGxldGVcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBzZXQgYXMgc2VsZWN0ZWRcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBlbnRlcmVkXG4gICAqXG4gICAqIFdoZW4gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY291bGRuJ3QgYmUgZW50ZXJlZCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGFuZCBlbnRlcmVkIGluIHRoZSBkaXJlY3Rpb24gYE1vdmluZ0RpcmVjdGlvbi5TdGF5YFxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwLCB3aGljaCBzaG91bGQgYmUgZW50ZXJlZFxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIHBvc3RGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqL1xuICBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICB0aGlzLmNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXgpLnRoZW4obmF2aWdhdGlvbkFsbG93ZWQgPT4ge1xuICAgICAgaWYgKG5hdmlnYXRpb25BbGxvd2VkKSB7XG4gICAgICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwcmVGaW5hbGl6ZSkge1xuICAgICAgICAgIHByZUZpbmFsaXplLmVtaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxlYXZlIGN1cnJlbnQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChtb3ZpbmdEaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gc2V0IGFsbCBzdGVwcyBhZnRlciB0aGUgZGVzdGluYXRpb24gc3RlcCB0byBpbmNvbXBsZXRlXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcbiAgICAgICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID4gZGVzdGluYXRpb25JbmRleCAmJiBpbmRleCA+IGRlc3RpbmF0aW9uSW5kZXgpXG4gICAgICAgICAgLmZvckVhY2goc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlKTtcblxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSBkZXN0aW5hdGlvbkluZGV4O1xuXG4gICAgICAgIC8vIGdvIHRvIG5leHQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocG9zdEZpbmFsaXplKSB7XG4gICAgICAgICAgcG9zdEZpbmFsaXplLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RlcCBjYW4ndCBiZSBsZWZ0LCByZWVudGVyIHRoZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAvLyBhIHdpemFyZCBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG8gdGhyb3VnaCB0aGUgbmF2aWdhdGlvbiBiYXIsIGlmZiBpdCdzIGxvY2F0ZWQgYmVmb3JlIHRoZSBjdXJyZW50IHdpemFyZCBzdGVwXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uSW5kZXggPCB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBzdGF0ZSBvZiB0aGlzIHdpemFyZC5cbiAgICogQSByZXNldCB0cmFuc2l0aW9ucyB0aGUgd2l6YXJkIGF1dG9tYXRpY2FsbHkgdG8gdGhlIGZpcnN0IHN0ZXAgYW5kIHNldHMgYWxsIHN0ZXBzIGFzIGluY29tcGxldGUuXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcbiAgICovXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIC8vIHRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXhcbiAgICBpZiAoIXRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcCh0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIGluZGV4ICR7dGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4fWApO1xuICAgIH1cblxuICAgIC8vIGF0IGxlYXN0IG9uZSBzdGVwIGlzIGJlZm9yZSB0aGUgZGVmYXVsdCBzdGVwLCB0aGF0IGlzIG5vdCBvcHRpb25hbFxuICAgIGNvbnN0IGlsbGVnYWxEZWZhdWx0U3RlcCA9IHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcbiAgICAgIC5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiBpbmRleCA8IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleClcbiAgICAgIC5zb21lKHN0ZXAgPT4gIXN0ZXAub3B0aW9uYWwpO1xuXG4gICAgaWYgKGlsbGVnYWxEZWZhdWx0U3RlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBzdGVwIGluZGV4ICR7dGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4fSBpcyBsb2NhdGVkIGFmdGVyIGEgbm9uIG9wdGlvbmFsIHN0ZXBgKTtcbiAgICB9XG5cbiAgICAvLyByZXNldCB0aGUgc3RlcCBpbnRlcm5hbCBzdGF0ZVxuICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgIHN0ZXAuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICBzdGVwLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgdGhlIGZpcnN0IHN0ZXAgYXMgdGhlIGN1cnJlbnQgc3RlcFxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleDtcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5Gb3J3YXJkcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7RnJlZU5hdmlnYXRpb25Nb2RlfSBmcm9tICcuL2ZyZWUtbmF2aWdhdGlvbi1tb2RlJztcbmltcG9ydCB7U2VtaVN0cmljdE5hdmlnYXRpb25Nb2RlfSBmcm9tICcuL3NlbWktc3RyaWN0LW5hdmlnYXRpb24tbW9kZSc7XG5pbXBvcnQge1N0cmljdE5hdmlnYXRpb25Nb2RlfSBmcm9tICcuL3N0cmljdC1uYXZpZ2F0aW9uLW1vZGUnO1xuXG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi93aXphcmQtc3RhdGUubW9kZWwnO1xuXG4vKipcbiAqIEEgZmFjdG9yeSBtZXRob2QgdXNlZCB0byBjcmVhdGUgW1tOYXZpZ2F0aW9uTW9kZV1dIGluc3RhbmNlc1xuICpcbiAqIEBwYXJhbSBuYXZpZ2F0aW9uTW9kZSBUaGUgbmFtZSBvZiB0aGUgdG8gYmUgdXNlZCBuYXZpZ2F0aW9uIG1vZGVcbiAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgd2l6YXJkIHN0YXRlIG9mIHRoZSB3aXphcmRcbiAqIEByZXR1cm5zIFRoZSBjcmVhdGVkIFtbTmF2aWdhdGlvbk1vZGVdXVxuICovXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGlvbk1vZGVGYWN0b3J5KG5hdmlnYXRpb25Nb2RlOiBzdHJpbmcsIHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSk6IE5hdmlnYXRpb25Nb2RlIHtcbiAgc3dpdGNoIChuYXZpZ2F0aW9uTW9kZSkge1xuICAgIGNhc2UgJ2ZyZWUnOlxuICAgICAgcmV0dXJuIG5ldyBGcmVlTmF2aWdhdGlvbk1vZGUod2l6YXJkU3RhdGUpO1xuICAgIGNhc2UgJ3NlbWktc3RyaWN0JzpcbiAgICAgIHJldHVybiBuZXcgU2VtaVN0cmljdE5hdmlnYXRpb25Nb2RlKHdpemFyZFN0YXRlKTtcbiAgICBjYXNlICdzdHJpY3QnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbmV3IFN0cmljdE5hdmlnYXRpb25Nb2RlKHdpemFyZFN0YXRlKTtcbiAgfVxufTtcbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtuYXZpZ2F0aW9uTW9kZUZhY3Rvcnl9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLnByb3ZpZGVyJztcblxuLyoqXG4gKiBUaGUgaW50ZXJuYWwgbW9kZWwvc3RhdGUgb2YgYSB3aXphcmQuXG4gKiBUaGlzIG1vZGVsIGNvbnRhaW5zOlxuICogLSBhbiBhcnJheSB3aXRoIGFsbCBzdGVwcyB0aGUgd2l6YXJkIGNvbnRhaW5zXG4gKiAtIHRoZSBpbmRleCBvZiB0aGUgc3RlcCB0aGUgd2l6YXJkIGN1cnJlbnRseSByZXNpZGVzIGluc2lkZVxuICogLSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY29tcGxldGVuZXNzIG9mIHRoZSB3aXphcmRcbiAqIC0gc29tZSBhZGRpdGlvbmFsIGhlbHBlciBtZXRob2RzXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGF0ZSB7XG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBzdGVwIGluZGV4LCBhcyB0YWtlbiBmcm9tIHRoZSBbW1dpemFyZENvbXBvbmVudF1dXG4gICAqL1xuICBwcml2YXRlIF9kZWZhdWx0U3RlcEluZGV4ID0gMDtcblxuICAvKipcbiAgICogQW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgYWxsIHdpemFyZCBzdGVwcyBiZWxvbmdpbmcgdG8gdGhpcyBtb2RlbFxuICAgKi9cbiAgcHVibGljIHdpemFyZFN0ZXBzOiBBcnJheTxXaXphcmRTdGVwPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbml0aWFsIGRlZmF1bHQgc3RlcC5cbiAgICogQmV3YXJlOiBUaGlzIGluaXRpYWwgZGVmYXVsdCBpcyBvbmx5IHVzZWQgaWYgbm8gd2l6YXJkIHN0ZXAgaGFzIGJlZW4gZW5oYW5jZWQgd2l0aCB0aGUgYHNlbGVjdGVkYCBkaXJlY3RpdmVcbiAgICpcbiAgICogQHBhcmFtIGRlZmF1bHRTdGVwSW5kZXggVGhlIG5ldyBkZWZhdWx0IHdpemFyZCBzdGVwIGluZGV4XG4gICAqL1xuICBwdWJsaWMgc2V0IGRlZmF1bHRTdGVwSW5kZXgoZGVmYXVsdFN0ZXBJbmRleCkge1xuICAgIHRoaXMuX2RlZmF1bHRTdGVwSW5kZXggPSBkZWZhdWx0U3RlcEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIHN0ZXAgaW5kZXguXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIGVpdGhlcjpcbiAgICogLSB0aGUgaW5kZXggb2YgYSB3aXphcmQgc3RlcCB3aXRoIGEgYHNlbGVjdGVkYCBkaXJlY3RpdmUsIG9yXG4gICAqIC0gdGhlIGRlZmF1bHQgc3RlcCBpbmRleCwgc2V0IGluIHRoZSBbW1dpemFyZENvbXBvbmVudF1dXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRTdGVwSW5kZXgoKTogbnVtYmVyIHtcbiAgICBjb25zdCBmb3VuZERlZmF1bHRTdGVwID0gdGhpcy53aXphcmRTdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5kZWZhdWx0U2VsZWN0ZWQpO1xuXG4gICAgaWYgKGZvdW5kRGVmYXVsdFN0ZXApIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEluZGV4T2ZTdGVwKGZvdW5kRGVmYXVsdFN0ZXApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFN0ZXBJbmRleDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudGx5IHZpc2libGUgYW5kIHNlbGVjdGVkIHN0ZXAgaW5zaWRlIHRoZSB3aXphcmRTdGVwcyBRdWVyeUxpc3QuXG4gICAqIElmIHRoaXMgd2l6YXJkIGNvbnRhaW5zIG5vIHN0ZXBzLCBjdXJyZW50U3RlcEluZGV4IGlzIC0xXG4gICAqL1xuICBwdWJsaWMgY3VycmVudFN0ZXBJbmRleCA9IC0xO1xuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlIHVzZWQgdG8gbmF2aWdhdGUgaW5zaWRlIHRoZSB3aXphcmRcbiAgICovXG4gIHB1YmxpYyBuYXZpZ2F0aW9uTW9kZTogTmF2aWdhdGlvbk1vZGU7XG5cbiAgLyoqXG4gICAqIFRydWUsIGlmIHRoZSBuYXZpZ2F0aW9uIGJhciBzaG91bGRuJ3QgYmUgdXNlZCBmb3IgbmF2aWdhdGluZ1xuICAgKi9cbiAgcHVibGljIGRpc2FibGVOYXZpZ2F0aW9uQmFyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgV2l6YXJkU3RlcCBvYmplY3QgYmVsb25naW5nIHRvIHRoZSBjdXJyZW50bHkgdmlzaWJsZSBhbmQgc2VsZWN0ZWQgc3RlcC5cbiAgICogVGhlIGN1cnJlbnRTdGVwIGlzIGFsd2F5cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHdpemFyZCBzdGVwLlxuICAgKiBUaGUgY3VycmVudFN0ZXAgY2FuIGJlIGVpdGhlciBjb21wbGV0ZWQsIGlmIGl0IHdhcyB2aXNpdGVkIGVhcmxpZXIsXG4gICAqIG9yIG5vdCBjb21wbGV0ZWQsIGlmIGl0IGlzIHZpc2l0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lIG9yIGl0cyBzdGF0ZSBpcyBjdXJyZW50bHkgb3V0IG9mIGRhdGUuXG4gICAqXG4gICAqIElmIHRoaXMgd2l6YXJkIGNvbnRhaW5zIG5vIHN0ZXBzLCBjdXJyZW50U3RlcCBpcyBudWxsXG4gICAqL1xuICBwdWJsaWMgZ2V0IGN1cnJlbnRTdGVwKCk6IFdpemFyZFN0ZXAge1xuICAgIGlmICh0aGlzLmhhc1N0ZXAodGhpcy5jdXJyZW50U3RlcEluZGV4KSkge1xuICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHNbdGhpcy5jdXJyZW50U3RlcEluZGV4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb21wbGV0ZW5lc3Mgb2YgdGhlIHdpemFyZC5cbiAgICogSWYgdGhlIHdpemFyZCBoYXMgYmVlbiBjb21wbGV0ZWQsIGkuZS4gYWxsIHN0ZXBzIGFyZSBlaXRoZXIgY29tcGxldGVkIG9yIG9wdGlvbmFsLCB0aGlzIHZhbHVlIGlzIHRydWUsIG90aGVyd2lzZSBpdCBpcyBmYWxzZVxuICAgKi9cbiAgcHVibGljIGdldCBjb21wbGV0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuZXZlcnkoc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCB8fCBzdGVwLm9wdGlvbmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbmF2aWdhdGlvbiBtb2RlIHRvIHRoZSBuYXZpZ2F0aW9uIG1vZGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgKlxuICAgKiBAcGFyYW0gdXBkYXRlZE5hdmlnYXRpb25Nb2RlIFRoZSBuYW1lIG9mIHRoZSBuZXcgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICB1cGRhdGVOYXZpZ2F0aW9uTW9kZSh1cGRhdGVkTmF2aWdhdGlvbk1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUgPSBuYXZpZ2F0aW9uTW9kZUZhY3RvcnkodXBkYXRlZE5hdmlnYXRpb25Nb2RlLCB0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB3aXphcmQgc3RlcHMgdG8gdGhlIG5ldyBhcnJheVxuICAgKlxuICAgKiBAcGFyYW0gdXBkYXRlZFdpemFyZFN0ZXBzIFRoZSB1cGRhdGVkIHdpemFyZCBzdGVwc1xuICAgKi9cbiAgdXBkYXRlV2l6YXJkU3RlcHModXBkYXRlZFdpemFyZFN0ZXBzOiBBcnJheTxXaXphcmRTdGVwPik6IHZvaWQge1xuICAgIC8vIHRoZSB3aXphcmQgaXMgY3VycmVudGx5IG5vdCBpbiB0aGUgaW5pdGlhbGl6YXRpb24gcGhhc2VcbiAgICBpZiAodGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuY3VycmVudFN0ZXBJbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPSB1cGRhdGVkV2l6YXJkU3RlcHMuaW5kZXhPZih0aGlzLndpemFyZFN0ZXBzW3RoaXMuY3VycmVudFN0ZXBJbmRleF0pO1xuICAgIH1cblxuICAgIHRoaXMud2l6YXJkU3RlcHMgPSB1cGRhdGVkV2l6YXJkU3RlcHM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAgaXMgaW5zaWRlIHRoZSByYW5nZSBvZiBwb3NzaWJsZSB3aXphcmQgc3RlcHMgaW5zaWRlIHRoaXMgd2l6YXJkXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwSW5kZXggVGhlIHRvIGJlIGNoZWNrZWQgaW5kZXggb2YgYSBzdGVwIGluc2lkZSB0aGlzIHdpemFyZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiBgc3RlcEluZGV4YCBpcyBjb250YWluZWQgaW5zaWRlIHRoaXMgd2l6YXJkLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGhhc1N0ZXAoc3RlcEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIDAgPD0gc3RlcEluZGV4ICYmIHN0ZXBJbmRleCA8IHRoaXMud2l6YXJkU3RlcHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBoYXMgYSBwcmV2aW91cyBzdGVwLCBjb21wYXJlZCB0byB0aGUgY3VycmVudCBzdGVwXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgaGFzIGEgcHJldmlvdXMgc3RlcCBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcFxuICAgKi9cbiAgaGFzUHJldmlvdXNTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1N0ZXAodGhpcy5jdXJyZW50U3RlcEluZGV4IC0gMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGhhcyBhIG5leHQgc3RlcCwgY29tcGFyZWQgdG8gdGhlIGN1cnJlbnQgc3RlcFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIGhhcyBhIG5leHQgc3RlcCBhZnRlciB0aGUgY3VycmVudCBzdGVwXG4gICAqL1xuICBoYXNOZXh0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNTdGVwKHRoaXMuY3VycmVudFN0ZXBJbmRleCArIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBpcyBjdXJyZW50bHkgaW5zaWRlIGl0cyBsYXN0IHN0ZXBcbiAgICpcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgd2l6YXJkIGlzIGN1cnJlbnRseSBpbnNpZGUgaXRzIGxhc3Qgc3RlcFxuICAgKi9cbiAgaXNMYXN0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9PT0gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBbW1dpemFyZFN0ZXBdXSBhdCB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAuXG4gICAqIElmIG5vIFtbV2l6YXJkU3RlcF1dIGV4aXN0cyBhdCB0aGUgZ2l2ZW4gaW5kZXggYW4gRXJyb3IgaXMgdGhyb3duXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwSW5kZXggVGhlIGdpdmVuIGluZGV4XG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBbW1dpemFyZFN0ZXBdXSBhdCB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGBcbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biwgaWYgdGhlIGdpdmVuIGluZGV4IGBzdGVwSW5kZXhgIGRvZXNuJ3QgZXhpc3RcbiAgICovXG4gIGdldFN0ZXBBdEluZGV4KHN0ZXBJbmRleDogbnVtYmVyKTogV2l6YXJkU3RlcCB7XG4gICAgaWYgKCF0aGlzLmhhc1N0ZXAoc3RlcEluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhIGtub3duIHN0ZXAsIGJ1dCBnb3Qgc3RlcEluZGV4OiAke3N0ZXBJbmRleH0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHNbc3RlcEluZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgdGhlIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gYHN0ZXBJZGAuXG4gICAqIElmIG5vIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gYHN0ZXBJZGAgZXhpc3RzLCBgLTFgIGlzIHJldHVybmVkXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwSWQgVGhlIGdpdmVuIHN0ZXAgaWRcbiAgICogQHJldHVybnMgVGhlIGZvdW5kIGluZGV4IG9mIGEgc3RlcCB3aXRoIHRoZSBnaXZlbiBzdGVwIGlkLCBvciBgLTFgIGlmIG5vIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gaWQgaXMgaW5jbHVkZWQgaW4gdGhlIHdpemFyZFxuICAgKi9cbiAgZ2V0SW5kZXhPZlN0ZXBXaXRoSWQoc3RlcElkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmZpbmRJbmRleChzdGVwID0+IHN0ZXAuc3RlcElkID09PSBzdGVwSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV0gYHN0ZXBgLlxuICAgKiBJZiB0aGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV0gaXMgbm90IGNvbnRhaW5lZCBpbnNpZGUgdGhpcyB3aXphcmQsIGAtMWAgaXMgcmV0dXJuZWRcbiAgICpcbiAgICogQHBhcmFtIHN0ZXAgVGhlIGdpdmVuIFtbV2l6YXJkU3RlcF1dXG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBpbmRleCBvZiBgc3RlcGAgb3IgYC0xYCBpZiB0aGUgc3RlcCBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIHdpemFyZFxuICAgKi9cbiAgZ2V0SW5kZXhPZlN0ZXAoc3RlcDogV2l6YXJkU3RlcCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuaW5kZXhPZihzdGVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBjb3JyZWN0IFtbTW92aW5nRGlyZWN0aW9uXV0gdmFsdWUgZm9yIGEgZ2l2ZW4gYGRlc3RpbmF0aW9uU3RlcGAgY29tcGFyZWQgdG8gdGhlIGBjdXJyZW50U3RlcEluZGV4YC5cbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uU3RlcCBUaGUgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcFxuICAgKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBbW01vdmluZ0RpcmVjdGlvbl1dXG4gICAqL1xuICBnZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25TdGVwOiBudW1iZXIpOiBNb3ZpbmdEaXJlY3Rpb24ge1xuICAgIGxldCBtb3ZpbmdEaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbjtcblxuICAgIGlmIChkZXN0aW5hdGlvblN0ZXAgPiB0aGlzLmN1cnJlbnRTdGVwSW5kZXgpIHtcbiAgICAgIG1vdmluZ0RpcmVjdGlvbiA9IE1vdmluZ0RpcmVjdGlvbi5Gb3J3YXJkcztcbiAgICB9IGVsc2UgaWYgKGRlc3RpbmF0aW9uU3RlcCA8IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLkJhY2t3YXJkcztcbiAgICB9IGVsc2Uge1xuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLlN0YXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmluZ0RpcmVjdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXctd2l6YXJkYCBjb21wb25lbnQgZGVmaW5lcyB0aGUgcm9vdCBjb21wb25lbnQgb2YgYSB3aXphcmQuXG4gKiBUaHJvdWdoIHRoZSBzZXR0aW5nIG9mIGlucHV0IHBhcmFtZXRlcnMgZm9yIHRoZSBgYXctd2l6YXJkYCBjb21wb25lbnQgaXQncyBwb3NzaWJsZSB0byBjaGFuZ2UgdGhlIGxvY2F0aW9uIGFuZCBzaXplXG4gKiBvZiBpdHMgbmF2aWdhdGlvbiBiYXIuXG4gKlxuICogIyMjIFN5bnRheFxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZCBbbmF2QmFyTG9jYXRpb25dPVwibG9jYXRpb24gb2YgbmF2aWdhdGlvbiBiYXJcIiBbbmF2QmFyTGF5b3V0XT1cImxheW91dCBvZiBuYXZpZ2F0aW9uIGJhclwiPlxuICogICAgIC4uLlxuICogPC9hdy13aXphcmQ+XG4gKiBgYGBcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIFdpdGhvdXQgY29tcGxldGlvbiBzdGVwOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQgbmF2QmFyTG9jYXRpb249XCJ0b3BcIiBuYXZCYXJMYXlvdXQ9XCJzbWFsbFwiPlxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxuICogPC9hdy13aXphcmQ+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGNvbXBsZXRpb24gc3RlcDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkIG5hdkJhckxvY2F0aW9uPVwidG9wXCIgbmF2QmFyTGF5b3V0PVwic21hbGxcIj5cbiAqICAgICA8YXctd2l6YXJkLXN0ZXA+Li4uPC9hdy13aXphcmQtc3RlcD5cbiAqICAgICA8YXctd2l6YXJkLXN0ZXA+Li4uPC9hdy13aXphcmQtc3RlcD5cbiAqICAgICA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD4uLi48L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XG4gKiA8L2F3LXdpemFyZD5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy13aXphcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3dpemFyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd3aXphcmQuY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbV2l6YXJkU3RhdGVdXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKlxuICAgKiBBIFF1ZXJ5TGlzdCBjb250YWluaW5nIGFsbCBbW1dpemFyZFN0ZXBdXXMgaW5zaWRlIHRoaXMgd2l6YXJkXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKFdpemFyZFN0ZXApXG4gIHB1YmxpYyB3aXphcmRTdGVwczogUXVlcnlMaXN0PFdpemFyZFN0ZXA+O1xuXG4gIC8qKlxuICAgKiBUaGUgbG9jYXRpb24gb2YgdGhlIG5hdmlnYXRpb24gYmFyIGluc2lkZSB0aGUgd2l6YXJkLlxuICAgKiBUaGlzIGxvY2F0aW9uIGNhbiBiZSBlaXRoZXIgdG9wLCBib3R0b20sIGxlZnQgb3IgcmlnaHRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuYXZCYXJMb2NhdGlvbiA9ICd0b3AnO1xuXG4gIC8qKlxuICAgKiBUaGUgbGF5b3V0IG9mIHRoZSBuYXZpZ2F0aW9uIGJhciBpbnNpZGUgdGhlIHdpemFyZC5cbiAgICogVGhlIGxheW91dCBjYW4gYmUgZWl0aGVyIHNtYWxsLCBsYXJnZS1maWxsZWQsIGxhcmdlLWVtcHR5IG9yIGxhcmdlLXN5bWJvbHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuYXZCYXJMYXlvdXQgPSAnc21hbGwnO1xuXG4gIC8qKlxuICAgKiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBzdGVwcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZCBiZSBzaG93bi5cbiAgICogVGhlIGRpcmVjdGlvbiBjYW4gYmUgZWl0aGVyIGBsZWZ0LXRvLXJpZ2h0YCBvciBgcmlnaHQtdG8tbGVmdGBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuYXZCYXJEaXJlY3Rpb24gPSAnbGVmdC10by1yaWdodCc7XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGUgdXNlZCBmb3IgdHJhbnNpdGlvbmluZyBiZXR3ZWVuIGRpZmZlcmVudCBzdGVwcy5cbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSBjYW4gYmUgZWl0aGVyIGBzdHJpY3RgLCBgc2VtaS1zdHJpY3RgIG9yIGBmcmVlYFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdmlnYXRpb25Nb2RlID0gJ3N0cmljdCc7XG5cbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsbHkgc2VsZWN0ZWQgc3RlcCwgcmVwcmVzZW50ZWQgYnkgaXRzIGluZGV4XG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGVmYXVsdFN0ZXBJbmRleCA9IDA7XG5cbiAgLyoqXG4gICAqIFRydWUsIGlmIHRoZSBuYXZpZ2F0aW9uIGJhciBzaG91bGRuJ3QgYmUgdXNlZCBmb3IgbmF2aWdhdGluZ1xuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGRpc2FibGVOYXZpZ2F0aW9uQmFyID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHdpemFyZCB1c2VzIGEgaG9yaXpvbnRhbCBvcmllbnRhdGlvbi5cbiAgICogVGhlIHdpemFyZCB1c2VzIGEgaG9yaXpvbnRhbCBvcmllbnRhdGlvbiwgaWZmIHRoZSBuYXZpZ2F0aW9uIGJhciBpcyBzaG93biBhdCB0aGUgdG9wIG9yIGJvdHRvbSBvZiB0aGlzIHdpemFyZFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhvcml6b250YWwnKVxuICBwdWJsaWMgZ2V0IGhvcml6b250YWxPcmllbnRhdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ2JvdHRvbSc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvbi5cbiAgICogVGhlIHdpemFyZCB1c2VzIGEgdmVydGljYWwgb3JpZW50YXRpb24sIGlmZiB0aGUgbmF2aWdhdGlvbiBiYXIgaXMgc2hvd24gYXQgdGhlIGxlZnQgb3IgcmlnaHQgb2YgdGhpcyB3aXphcmRcbiAgICpcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIHdpemFyZCB1c2VzIGEgdmVydGljYWwgb3JpZW50YXRpb25cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MudmVydGljYWwnKVxuICBwdWJsaWMgZ2V0IHZlcnRpY2FsT3JpZW50YXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2QmFyTG9jYXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAncmlnaHQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGUgZm9yIHRoaXMgd2l6YXJkXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5hdmlnYXRpb24oKTogTmF2aWdhdGlvbk1vZGUge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLm5hdmlnYXRpb25Nb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbCBUaGUgbW9kZWwgZm9yIHRoaXMgd2l6YXJkIGNvbXBvbmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIG1vZGVsOiBXaXphcmRTdGF0ZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIG1vZGVsIGFmdGVyIGNlcnRhaW4gaW5wdXQgdmFsdWVzIGhhdmUgY2hhbmdlZFxuICAgKlxuICAgKiBAcGFyYW0gY2hhbmdlcyBUaGUgZGV0ZWN0ZWQgY2hhbmdlc1xuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgT2JqZWN0LmtleXMoY2hhbmdlcykpIHtcbiAgICAgIGxldCBjaGFuZ2UgPSBjaGFuZ2VzW3Byb3BOYW1lXTtcblxuICAgICAgaWYgKCFjaGFuZ2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgc3dpdGNoIChwcm9wTmFtZSkge1xuICAgICAgICAgIGNhc2UgJ2RlZmF1bHRTdGVwSW5kZXgnOlxuICAgICAgICAgICAgdGhpcy5tb2RlbC5kZWZhdWx0U3RlcEluZGV4ID0gcGFyc2VJbnQoY2hhbmdlLmN1cnJlbnRWYWx1ZSwgMTApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZGlzYWJsZU5hdmlnYXRpb25CYXInOlxuICAgICAgICAgICAgdGhpcy5tb2RlbC5kaXNhYmxlTmF2aWdhdGlvbkJhciA9IGNoYW5nZS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICduYXZpZ2F0aW9uTW9kZSc6XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnVwZGF0ZU5hdmlnYXRpb25Nb2RlKGNoYW5nZS5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBhZGQgYSBzdWJzY3JpYmVyIHRvIHRoZSB3aXphcmQgc3RlcHMgUXVlcnlMaXN0IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSBET01cbiAgICB0aGlzLndpemFyZFN0ZXBzLmNoYW5nZXMuc3Vic2NyaWJlKGNoYW5nZWRXaXphcmRTdGVwcyA9PiB7XG4gICAgICB0aGlzLm1vZGVsLnVwZGF0ZVdpemFyZFN0ZXBzKGNoYW5nZWRXaXphcmRTdGVwcy50b0FycmF5KCkpO1xuICAgIH0pO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgbW9kZWxcbiAgICB0aGlzLm1vZGVsLmRpc2FibGVOYXZpZ2F0aW9uQmFyID0gdGhpcy5kaXNhYmxlTmF2aWdhdGlvbkJhcjtcbiAgICB0aGlzLm1vZGVsLmRlZmF1bHRTdGVwSW5kZXggPSB0aGlzLmRlZmF1bHRTdGVwSW5kZXg7XG4gICAgdGhpcy5tb2RlbC51cGRhdGVXaXphcmRTdGVwcyh0aGlzLndpemFyZFN0ZXBzLnRvQXJyYXkoKSk7XG4gICAgdGhpcy5tb2RlbC51cGRhdGVOYXZpZ2F0aW9uTW9kZSh0aGlzLm5hdmlnYXRpb25Nb2RlKTtcblxuICAgIC8vIGZpbmFsbHkgcmVzZXQgdGhlIHdob2xlIHdpemFyZCBzdGF0ZVxuICAgIHRoaXMubmF2aWdhdGlvbi5yZXNldCgpO1xuICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbWFyYyBvbiAyMC4wNS4xNy5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgYGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXBgIGNvbXBvbmVudCBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSBjb21wbGV0aW9uL3N1Y2Nlc3Mgc3RlcCBhdCB0aGUgZW5kIG9mIHlvdXIgd2l6YXJkXG4gKiBBZnRlciBhIGBhdy13aXphcmQtY29tcGxldGlvbi1zdGVwYCBoYXMgYmVlbiBlbnRlcmVkLCBpdCBoYXMgdGhlIGNoYXJhY3RlcmlzdGljIHRoYXQgdGhlIHVzZXIgaXMgYmxvY2tlZCBmcm9tXG4gKiBsZWF2aW5nIGl0IGFnYWluIHRvIGEgcHJldmlvdXMgc3RlcC5cbiAqIEluIGFkZGl0aW9uIGVudGVyaW5nIGEgYGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXBgIGF1dG9tYXRpY2FsbHkgc2V0cyB0aGUgYGF3LXdpemFyZGAgYW5kIGFsbCBzdGVwcyBpbnNpZGUgdGhlIGBhdy13aXphcmRgXG4gKiBhcyBjb21wbGV0ZWQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIFtzdGVwVGl0bGVdPVwidGl0bGUgb2YgdGhlIHdpemFyZCBzdGVwXCJcbiAqICAgIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnbmF2aWdhdGlvbiBzeW1ib2wnLCBmb250RmFtaWx5OiAnbmF2aWdhdGlvbiBzeW1ib2wgZm9udCBmYW1pbHknIH1cIlxuICogICAgKHN0ZXBFbnRlcik9XCJldmVudCBlbWl0dGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB3aXphcmQgc3RlcCBpcyBlbnRlcmVkXCJcbiAqICAgIChzdGVwRXhpdCk9XCJldmVudCBlbWl0dGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB3aXphcmQgc3RlcCBpcyBleGl0ZWRcIj5cbiAqICAgIC4uLlxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJzEnIH1cIj5cbiAqICAgIC4uLlxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxuICogYGBgXG4gKlxuICogV2l0aCBhIG5hdmlnYXRpb24gc3ltYm9sIGZyb20gdGhlIGBmb250LWF3ZXNvbWVgIGZvbnQ6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAgc3RlcFRpdGxlPVwiU3RlcCAxXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcmI3hmMWJhOycsIGZvbnRGYW1pbHk6ICdGb250QXdlc29tZScgfVwiPlxuICogICAgLi4uXG4gKiA8L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCcsXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd3aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IFdpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50KX0sXG4gICAge3Byb3ZpZGU6IFdpemFyZENvbXBsZXRpb25TdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCl9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQgZXh0ZW5kcyBXaXphcmRDb21wbGV0aW9uU3RlcCB7XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgYGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcmAgY29tcG9uZW50IGNvbnRhaW5zIHRoZSBuYXZpZ2F0aW9uIGJhciBpbnNpZGUgYSBbW1dpemFyZENvbXBvbmVudF1dLlxuICogVG8gY29ycmVjdGx5IGRpc3BsYXkgdGhlIG5hdmlnYXRpb24gYmFyLCBpdCdzIHJlcXVpcmVkIHRvIHNldCB0aGUgcmlnaHQgY3NzIGNsYXNzZXMgZm9yIHRoZSBuYXZpZ2F0aW9uIGJhcixcbiAqIG90aGVyd2lzZSBpdCB3aWxsIGxvb2sgbGlrZSBhIG5vcm1hbCBgdWxgIGNvbXBvbmVudC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcj48L2F3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy13aXphcmQtbmF2aWdhdGlvbi1iYXInLFxuICB0ZW1wbGF0ZVVybDogJ3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd3aXphcmQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50Lmhvcml6b250YWwubGVzcycsICd3aXphcmQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnZlcnRpY2FsLmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSB3aXphcmQgc3RlcHMgc2hvdWxkIGJlIHNob3duIGluIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgZWl0aGVyIGBsZWZ0LXRvLXJpZ2h0YCBvciBgcmlnaHQtdG8tbGVmdGBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXJlY3Rpb24gPSAnbGVmdC10by1yaWdodCc7XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIHB1YmxpYyBnZXQgbmF2aWdhdGlvbk1vZGUoKTogTmF2aWdhdGlvbk1vZGUge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLm5hdmlnYXRpb25Nb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgc3RhdGUgdGhlIHdpemFyZCBjdXJyZW50bHkgcmVzaWRlcyBpblxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIFtbV2l6YXJkU3RlcF1dcyBjb250YWluZWQgaW4gdGhlIHdpemFyZFxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBjb250YWluaW5nIGFsbCBbW1dpemFyZFN0ZXBdXXNcbiAgICovXG4gIGdldCB3aXphcmRTdGVwcygpOiBBcnJheTxXaXphcmRTdGVwPiB7XG4gICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSAncmlnaHQtdG8tbGVmdCc6XG4gICAgICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgICAgY2FzZSAnbGVmdC10by1yaWdodCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHdpemFyZCBzdGVwcywgdGhhdCBuZWVkIHRvIGJlIGRpc3BsYWNlZCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcbiAgICpcbiAgICogQHJldHVybnMgVGhlIG51bWJlciBvZiB3aXphcmQgc3RlcHMgdG8gYmUgZGlzcGxheWVkXG4gICAqL1xuICBnZXQgbnVtYmVyT2ZXaXphcmRTdGVwcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBjdXJyZW50YCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIGN1cnJlbnRcbiAgICovXG4gIHB1YmxpYyBpc0N1cnJlbnQod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aXphcmRTdGVwLnNlbGVjdGVkICYmICF3aXphcmRTdGVwLmNvbXBsZXRlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5jb21wbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgZG9uZWAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBkb25lXG4gICAqL1xuICBwdWJsaWMgaXNEb25lKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHdpemFyZFN0ZXAuY29tcGxldGVkICYmICF3aXphcmRTdGVwLnNlbGVjdGVkKSB8fCB0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBkZWZhdWx0YCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIGRlZmF1bHRcbiAgICovXG4gIHB1YmxpYyBpc0RlZmF1bHQod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhd2l6YXJkU3RlcC5vcHRpb25hbCAmJiAhd2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXdpemFyZFN0ZXAuc2VsZWN0ZWQgJiYgIXRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGVkaXRpbmdgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgZWRpdGluZ1xuICAgKi9cbiAgcHVibGljIGlzRWRpdGluZyh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpemFyZFN0ZXAuc2VsZWN0ZWQgJiYgd2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYG9wdGlvbmFsYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIG9wdGlvbmFsXG4gICAqL1xuICBwdWJsaWMgaXNPcHRpb25hbCh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpemFyZFN0ZXAub3B0aW9uYWwgJiYgIXdpemFyZFN0ZXAuY29tcGxldGVkICYmICF3aXphcmRTdGVwLnNlbGVjdGVkICYmICF0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZFxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYG5hdmlnYWJsZWAgaW4gdGhlIG5hdmlnYXRpb24gYmFyLlxuICAgKiBBIHdpemFyZCBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG8gaWY6XG4gICAqIC0gdGhlIHN0ZXAgaXMgY3VycmVudGx5IG5vdCBzZWxlY3RlZFxuICAgKiAtIHRoZSBuYXZpZ2F0aW9uIGJhciBpc24ndCBkaXNhYmxlZFxuICAgKiAtIHRoZSBuYXZpZ2F0aW9uIG1vZGUgYWxsb3dzIG5hdmlnYXRpb24gdG8gdGhlIHN0ZXBcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIG5hdmlnYWJsZVxuICAgKi9cbiAgcHVibGljIGlzTmF2aWdhYmxlKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXdpemFyZFN0ZXAuc2VsZWN0ZWQgJiYgIXRoaXMud2l6YXJkU3RhdGUuZGlzYWJsZU5hdmlnYXRpb25CYXIgJiZcbiAgICAgIHRoaXMubmF2aWdhdGlvbk1vZGUuaXNOYXZpZ2FibGUodGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcCh3aXphcmRTdGVwKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgYGF3LXdpemFyZC1zdGVwYCBjb21wb25lbnQgaXMgdXNlZCB0byBkZWZpbmUgYSBub3JtYWwgc3RlcCBpbnNpZGUgYSB3aXphcmQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIFdpdGggYHN0ZXBUaXRsZWAgYW5kIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dHM6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwIFtzdGVwVGl0bGVdPVwic3RlcCB0aXRsZVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnc3ltYm9sJywgZm9udEZhbWlseTogJ2ZvbnQtZmFtaWx5JyB9XCJcbiAqICAgIFtjYW5FeGl0XT1cImRlY2lkaW5nIGZ1bmN0aW9uXCIgKHN0ZXBFbnRlcik9XCJlbnRlciBmdW5jdGlvblwiIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGBhd1dpemFyZFN0ZXBUaXRsZWAgYW5kIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZXM6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwXCJcbiAqICAgIFtjYW5FeGl0XT1cImRlY2lkaW5nIGZ1bmN0aW9uXCIgKHN0ZXBFbnRlcik9XCJlbnRlciBmdW5jdGlvblwiIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwVGl0bGU+XG4gKiAgICAgICAgc3RlcCB0aXRsZVxuICogICAgPC9uZy10ZW1wbGF0ZT5cbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBTeW1ib2w+XG4gKiAgICAgICAgc3ltYm9sXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogICAgLi4uXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtc3RlcCBzdGVwVGl0bGU9XCJBZGRyZXNzIGluZm9ybWF0aW9uXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcmI3hmMWJhOycsIGZvbnRGYW1pbHk6ICdGb250QXdlc29tZScgfVwiPlxuICogICAgLi4uXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogV2l0aCBgYXdXaXphcmRTdGVwVGl0bGVgIGFuZCBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmVzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtc3RlcD5cbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cbiAqICAgICAgICBBZGRyZXNzIGluZm9ybWF0aW9uXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cbiAqICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRheGlcIj48L2k+XG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogPC9hdy13aXphcmQtc3RlcD5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy13aXphcmQtc3RlcCcsXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnd2l6YXJkLXN0ZXAuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogV2l6YXJkU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkU3RlcENvbXBvbmVudCl9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkU3RlcENvbXBvbmVudCBleHRlbmRzIFdpemFyZFN0ZXAge1xufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdFbmFibGVCYWNrTGlua3NgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBhbGxvdyB0aGUgdXNlciB0byBsZWF2ZSBhIFtbV2l6YXJkQ29tcGxldGlvblN0ZXBdXSBhZnRlciBpcyBoYXMgYmVlbiBlbnRlcmVkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBhd0VuYWJsZUJhY2tMaW5rcyAoc3RlcEV4aXQpPVwiZXhpdCBmdW5jdGlvblwiPlxuICogICAgIC4uLlxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBzdGVwVGl0bGU9XCJGaW5hbCBzdGVwXCIgYXdFbmFibGVCYWNrTGlua3M+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3RW5hYmxlQmFja0xpbmtzXSdcbn0pXG5leHBvcnQgY2xhc3MgRW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoaXMgRXZlbnRFbWl0dGVyIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZC5cbiAgICogVGhlIGJvdW5kIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBkbyBjbGVhbnVwIHdvcmsuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHN0ZXBFeGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBjb21wbGV0aW9uU3RlcCBUaGUgd2l6YXJkIGNvbXBsZXRpb24gc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGV4aXRhYmxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgY29tcGxldGlvblN0ZXA6IFdpemFyZENvbXBsZXRpb25TdGVwKSB7IH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb21wbGV0aW9uU3RlcC5jYW5FeGl0ID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGVwLnN0ZXBFeGl0ID0gdGhpcy5zdGVwRXhpdDtcbiAgfVxufVxuIiwiLyoqXG4gKiBBbiBvZmZzZXQgYmV0d2VlbiB0d28gc3RlcHMuXG4gKiBUaGlzIG9mZnNldCBjYW4gYmUgZWl0aGVyIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLlxuICogQSBwb3NpdGl2ZSBvZmZzZXQgbWVhbnMsIHRoYXQgdGhlIG9mZnNldCBzdGVwIGlzIGFmdGVyIHRoZSBvdGhlciBzdGVwLCB3aGlsZSBhIG5lZ2F0aXZlIG9mZnNldCBtZWFucyxcbiAqIHRoYXQgdGhlIG9mZnNldCBzdGVwIGlzIGFoZWFkIG9mIHRoZSBvdGhlciBzdGVwLlxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBPZmZzZXQge1xuICAvKipcbiAgICogVGhlIG9mZnNldCB0byB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKi9cbiAgc3RlcE9mZnNldDogbnVtYmVyXG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGB2YWx1ZWAgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIFtbU3RlcE9mZnNldF1dLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZFxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaW1wbGVtZW50cyBbW1N0ZXBPZmZzZXRdXSBhbmQgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0ZXBPZmZzZXQodmFsdWU6IGFueSk6IHZhbHVlIGlzIFN0ZXBPZmZzZXQge1xuICByZXR1cm4gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3N0ZXBPZmZzZXQnKTtcbn1cbiIsImltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEFuIHVuaXF1ZSBpZGVudGlmaWVyIG9mIGEgd2l6YXJkIHN0ZXBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGVwSWQge1xuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqL1xuICBzdGVwSWQ6IHN0cmluZ1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBgdmFsdWVgIGltcGxlbWVudHMgdGhlIGludGVyZmFjZSBbW1N0ZXBJZF1dLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZFxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaW1wbGVtZW50cyBbW1N0ZXBJZF1dIGFuZCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RlcElkKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdGVwSWQge1xuICByZXR1cm4gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3N0ZXBJZCcpICYmICEodmFsdWUgaW5zdGFuY2VvZiBXaXphcmRTdGVwKTtcbn1cbiIsIi8qKlxuICogQW4gaW5kZXggb2YgYSB3aXphcmQgc3RlcC5cbiAqIFRoaXMgaW5kZXggaXMgdGhlIGluZGV4IG9mIHRoZSBzdGVwIGluc2lkZSB0aGUgd2l6YXJkLlxuICogVGhlIGluZGV4IGlzIGFsd2F5cyB6ZXJvIGJhc2VkLCBpLmUuIHRoZSBzdGVwIHdpdGggaW5kZXggMCBpcyB0aGUgZmlyc3Qgc3RlcCBvZiB0aGUgd2l6YXJkXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcEluZGV4IHtcbiAgLyoqXG4gICAqIFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKi9cbiAgc3RlcEluZGV4OiBudW1iZXJcbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gYHZhbHVlYCBpbXBsZW1lbnRzIHRoZSBpbnRlcmZhY2UgW1tTdGVwSW5kZXhdXS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNoZWNrZWRcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGltcGxlbWVudHMgW1tTdGVwSW5kZXhdXSBhbmQgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0ZXBJbmRleCh2YWx1ZTogYW55KTogdmFsdWUgaXMgU3RlcEluZGV4IHtcbiAgcmV0dXJuIHZhbHVlLmhhc093blByb3BlcnR5KCdzdGVwSW5kZXgnKTtcbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBtYXJjIG9uIDA5LjAxLjE3LlxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc1N0ZXBPZmZzZXQsIFN0ZXBPZmZzZXR9IGZyb20gJy4uL3V0aWwvc3RlcC1vZmZzZXQuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7aXNTdGVwSWQsIFN0ZXBJZH0gZnJvbSAnLi4vdXRpbC9zdGVwLWlkLmludGVyZmFjZSc7XG5pbXBvcnQge2lzU3RlcEluZGV4LCBTdGVwSW5kZXh9IGZyb20gJy4uL3V0aWwvc3RlcC1pbmRleC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdHb1RvU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIHRvIGEgZ2l2ZW4gc3RlcC5cbiAqIFRoaXMgc3RlcCBjYW4gYmUgZGVmaW5lZCBpbiBvbmUgb2YgbXVsdGlwbGUgZm9ybWF0c1xuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBXaXRoIGFic29sdXRlIHN0ZXAgaW5kZXg6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ7IHN0ZXBJbmRleDogYWJzb2x1dGUgc3RlcCBpbmRleCB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogV2l0aCB1bmlxdWUgc3RlcCBpZDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cInsgc3RlcElkOiAnc3RlcCBpZCBvZiBkZXN0aW5hdGlvbiBzdGVwJyB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogV2l0aCBhIHdpemFyZCBzdGVwIG9iamVjdDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cIndpemFyZCBzdGVwIG9iamVjdFwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIFdpdGggYW4gb2Zmc2V0IHRvIHRoZSBkZWZpbmluZyBzdGVwOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwieyBzdGVwT2Zmc2V0OiBvZmZzZXQgfVwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdHb1RvU3RlcF0nXG59KVxuZXhwb3J0IGNsYXNzIEdvVG9TdGVwRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYmVmb3JlIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwcmVGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGFmdGVyIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwb3N0RmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBuYW1lIGZvciBgcHJlRmluYWxpemVgXG4gICAqXG4gICAqIEBwYXJhbSBlbWl0dGVyIFRoZSBbW0V2ZW50RW1pdHRlcl1dIHRvIGJlIHNldFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzZXQgZmluYWxpemUoZW1pdHRlcjogRXZlbnRFbWl0dGVyPHZvaWQ+KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB0aGlzLnByZUZpbmFsaXplID0gZW1pdHRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIGZpZWxkIGZvciBgcHJlRmluYWxpemVgXG4gICAqL1xuICBwdWJsaWMgZ2V0IGZpbmFsaXplKCk6IEV2ZW50RW1pdHRlcjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMucHJlRmluYWxpemU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlc3RpbmF0aW9uIHN0ZXAsIHRvIHdoaWNoIHRoZSB3aXphcmQgc2hvdWxkIG5hdmlnYXRlLCBhZnRlciB0aGUgY29tcG9uZW50LCBoYXZpbmcgdGhpcyBkaXJlY3RpdmUgaGFzIGJlZW4gYWN0aXZhdGVkLlxuICAgKiBUaGlzIGRlc3RpbmF0aW9uIHN0ZXAgY2FuIGJlIGdpdmVuIGVpdGhlciBhcyBhIFtbV2l6YXJkU3RlcF1dIGNvbnRhaW5pbmcgdGhlIHN0ZXAgZGlyZWN0bHksXG4gICAqIGEgW1tTdGVwT2Zmc2V0XV0gYmV0d2VlbiB0aGUgY3VycmVudCBzdGVwIGFuZCB0aGUgYHdpemFyZFN0ZXBgLCBpbiB3aGljaCB0aGlzIGRpcmVjdGl2ZSBoYXMgYmVlbiB1c2VkLFxuICAgKiBvciBhIHN0ZXAgaW5kZXggYXMgYSBudW1iZXIgb3Igc3RyaW5nXG4gICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdhd0dvVG9TdGVwJylcbiAgcHVibGljIHRhcmdldFN0ZXA6IFdpemFyZFN0ZXAgfCBTdGVwT2Zmc2V0IHwgU3RlcEluZGV4IHwgU3RlcElkO1xuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSB3aXphcmQgc3RhdGVcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwLCB3aGljaCBjb250YWlucyB0aGlzIFtbR29Ub1N0ZXBEaXJlY3RpdmVdXVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUsIEBPcHRpb25hbCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgb2YgdGhpcyBkaXJlY3RpdmUgYXMgYW4gYWJzb2x1dGUgc3RlcCBpbmRleCBpbnNpZGUgdGhlIHdpemFyZFxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogQHRocm93cyBJZiBgdGFyZ2V0U3RlcGAgaXMgb2YgYW4gdW5rbm93biB0eXBlIGFuIGBFcnJvcmAgaXMgdGhyb3duXG4gICAqL1xuICBnZXQgZGVzdGluYXRpb25TdGVwKCk6IG51bWJlciB7XG4gICAgbGV0IGRlc3RpbmF0aW9uU3RlcDogbnVtYmVyO1xuXG4gICAgaWYgKGlzU3RlcEluZGV4KHRoaXMudGFyZ2V0U3RlcCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uU3RlcCA9IHRoaXMudGFyZ2V0U3RlcC5zdGVwSW5kZXg7XG4gICAgfSBlbHNlIGlmIChpc1N0ZXBJZCh0aGlzLnRhcmdldFN0ZXApKSB7XG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwV2l0aElkKHRoaXMudGFyZ2V0U3RlcC5zdGVwSWQpO1xuICAgIH0gZWxzZSBpZiAoaXNTdGVwT2Zmc2V0KHRoaXMudGFyZ2V0U3RlcCkgJiYgdGhpcy53aXphcmRTdGVwICE9PSBudWxsKSB7XG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwKHRoaXMud2l6YXJkU3RlcCkgKyB0aGlzLnRhcmdldFN0ZXAuc3RlcE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0U3RlcCBpbnN0YW5jZW9mIFdpemFyZFN0ZXApIHtcbiAgICAgIGRlc3RpbmF0aW9uU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0SW5kZXhPZlN0ZXAodGhpcy50YXJnZXRTdGVwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnB1dCAndGFyZ2V0U3RlcCcgaXMgbmVpdGhlciBhIFdpemFyZFN0ZXAsIFN0ZXBPZmZzZXQsIFN0ZXBJbmRleCBvciBTdGVwSWRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdGluYXRpb25TdGVwO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyIG1ldGhvZCBmb3IgYGNsaWNrYCBldmVudHMgb24gdGhlIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKiBBZnRlciB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgdGhlIHdpemFyZCB3aWxsIHRyeSB0byB0cmFuc2l0aW9uIHRvIHRoZSBgZGVzdGluYXRpb25TdGVwYFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUuZ29Ub1N0ZXAodGhpcy5kZXN0aW5hdGlvblN0ZXAsIHRoaXMucHJlRmluYWxpemUsIHRoaXMucG9zdEZpbmFsaXplKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgYGF3TmV4dFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSB0byB0aGUgbmV4dCBzdGVwLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGF3TmV4dFN0ZXAgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd05leHRTdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgTmV4dFN0ZXBEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHByZUZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHBvc3RGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIG5hbWUgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICpcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIFtbRXZlbnRFbWl0dGVyXV0gdG8gYmUgc2V0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHNldCBmaW5hbGl6ZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRoaXMucHJlRmluYWxpemUgPSBlbWl0dGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICovXG4gIHB1YmxpYyBnZXQgZmluYWxpemUoKTogRXZlbnRFbWl0dGVyPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5wcmVGaW5hbGl6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBzdGF0ZSBvZiB0aGUgd2l6YXJkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkgeyB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyIG1ldGhvZCBmb3IgYGNsaWNrYCBldmVudHMgb24gdGhlIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKiBBZnRlciB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgdGhlIHdpemFyZCB3aWxsIHRyeSB0byB0cmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0ZXBcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlLmdvVG9OZXh0U3RlcCh0aGlzLnByZUZpbmFsaXplLCB0aGlzLnBvc3RGaW5hbGl6ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd09wdGlvbmFsU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhbiBvcHRpb25hbCBgd2l6YXJkLXN0ZXBgLlxuICogQW4gb3B0aW9uYWwgd2l6YXJkIHN0ZXAgaXMgYSBbW1dpemFyZFN0ZXBdXSB0aGF0IGRvZXNuJ3QgbmVlZCB0byBiZSBjb21wbGV0ZWQgdG8gdHJhbnNpdGlvbiB0byBsYXRlciB3aXphcmQgc3RlcHMuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtc3RlcCBhd09wdGlvbmFsU3RlcD5cbiAqICAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtc3RlcCBzdGVwVGl0bGU9XCJTZWNvbmQgc3RlcFwiIGF3T3B0aW9uYWxTdGVwPlxuICogICAgIC4uLlxuICogPC9hdy13aXphcmQtc3RlcD5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdPcHRpb25hbFN0ZXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBPcHRpb25hbFN0ZXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwLCB3aGljaCBjb250YWlucyB0aGlzIFtbT3B0aW9uYWxTdGVwRGlyZWN0aXZlXV1cbiAgICovXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSB3aXphcmRTdGVwOiBXaXphcmRTdGVwKSB7IH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy53aXphcmRTdGVwLm9wdGlvbmFsID0gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgYGF3UHJldmlvdXNTdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gbmF2aWdhdGUgdG8gdGhlIHByZXZpb3VzIHN0ZXAuXG4gKiBDb21wYXJlZCB0byB0aGUgW1tOZXh0U3RlcERpcmVjdGl2ZV1dIGl0J3MgaW1wb3J0YW50IHRvIG5vdGUsIHRoYXQgdGhpcyBkaXJlY3RpdmUgZG9lc24ndCBjb250YWluIGEgYGZpbmFsaXplYCBvdXRwdXQgbWV0aG9kLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGF3UHJldmlvdXNTdGVwPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd1ByZXZpb3VzU3RlcF0nXG59KVxuZXhwb3J0IGNsYXNzIFByZXZpb3VzU3RlcERpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGJlZm9yZSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcHJlRmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBhZnRlciB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcG9zdEZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICpcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIFtbRXZlbnRFbWl0dGVyXV0gdG8gYmUgc2V0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHNldCBmaW5hbGl6ZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRoaXMucHJlRmluYWxpemUgPSBlbWl0dGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICovXG4gIHB1YmxpYyBnZXQgZmluYWxpemUoKTogRXZlbnRFbWl0dGVyPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5wcmVGaW5hbGl6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBzdGF0ZSBvZiB0aGUgd2l6YXJkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkgeyB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyIG1ldGhvZCBmb3IgYGNsaWNrYCBldmVudHMgb24gdGhlIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKiBBZnRlciB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgdGhlIHdpemFyZCB3aWxsIHRyeSB0byB0cmFuc2l0aW9uIHRvIHRoZSBwcmV2aW91cyBzdGVwXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5nb1RvUHJldmlvdXNTdGVwKHRoaXMucHJlRmluYWxpemUsIHRoaXMucG9zdEZpbmFsaXplKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgYGF3UmVzZXRXaXphcmRgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byByZXNldCB0aGUgd2l6YXJkIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuICogVGhpcyBkaXJlY3RpdmUgYWNjZXB0cyBhbiBvdXRwdXQsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgc29tZSBjdXN0b20gY2xlYW51cCB3b3JrIGR1cmluZyB0aGUgcmVzZXQgcHJvY2Vzcy5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBhd1Jlc2V0V2l6YXJkIChmaW5hbGl6ZSk9XCJjdXN0b20gcmVzZXQgdGFza1wiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd1Jlc2V0V2l6YXJkXSdcbn0pXG5leHBvcnQgY2xhc3MgUmVzZXRXaXphcmREaXJlY3RpdmUge1xuICAvKipcbiAgICogQW4gW1tFdmVudEVtaXR0ZXJdXSBjb250YWluaW5nIHNvbWUgdGFza3MgdG8gYmUgZG9uZSwgZGlyZWN0bHkgYmVmb3JlIHRoZSB3aXphcmQgaXMgYmVpbmcgcmVzZXRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgbmF2aWdhdGlvbk1vZGUoKTogTmF2aWdhdGlvbk1vZGUge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLm5hdmlnYXRpb25Nb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgd2l6YXJkIHN0YXRlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkgeyB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgd2l6YXJkXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgLy8gZG8gc29tZSBvcHRpb25hbCBjbGVhbnVwIHdvcmtcbiAgICB0aGlzLmZpbmFsaXplLmVtaXQoKTtcbiAgICAvLyByZXNldCB0aGUgd2l6YXJkIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5yZXNldCgpO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdTZWxlY3RlZFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBvbiBhIFtbV2l6YXJkU3RlcF1dIHRvIHNldCBpdCBhcyBzZWxlY3RlZCBhZnRlciB0aGUgd2l6YXJkIGluaXRpYWxpc2F0aW9uIG9yIGEgcmVzZXQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtc3RlcCBzdGVwVGl0bGU9XCJTdGVwIHRpdGxlXCIgYXdTZWxlY3RlZFN0ZXA+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd1NlbGVjdGVkU3RlcF0nXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBzZWxlY3RlZCBieSBkZWZhdWx0XG4gICAqL1xuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMud2l6YXJkU3RlcC5kZWZhdWx0U2VsZWN0ZWQgPSB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdXaXphcmRDb21wbGV0aW9uU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIGNvbXBsZXRpb24vc3VjY2VzcyBzdGVwIGF0IHRoZSBlbmQgb2YgeW91ciB3aXphcmRcbiAqIEFmdGVyIGEgW1tXaXphcmRDb21wbGV0aW9uU3RlcF1dIGhhcyBiZWVuIGVudGVyZWQsIGl0IGhhcyB0aGUgY2hhcmFjdGVyaXN0aWMgdGhhdCB0aGUgdXNlciBpcyBibG9ja2VkIGZyb21cbiAqIGxlYXZpbmcgaXQgYWdhaW4gdG8gYSBwcmV2aW91cyBzdGVwLlxuICogSW4gYWRkaXRpb24gZW50ZXJpbmcgYSBbW1dpemFyZENvbXBsZXRpb25TdGVwXV0gYXV0b21hdGljYWxseSBzZXRzIHRoZSBgd2l6YXJkYCwgYW5kIGFsbCBzdGVwcyBpbnNpZGUgdGhlIGB3aXphcmRgLFxuICogYXMgY29tcGxldGVkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IGF3V2l6YXJkQ29tcGxldGlvblN0ZXAgW3N0ZXBUaXRsZV09XCJ0aXRsZSBvZiB0aGUgd2l6YXJkIHN0ZXBcIlxuICogICAgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICduYXZpZ2F0aW9uIHN5bWJvbCcsIGZvbnRGYW1pbHk6ICdmb250LWZhbWlseScgfVwiXG4gKiAgICAoc3RlcEVudGVyKT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGVudGVyZWRcIlxuICogICAgKHN0ZXBFeGl0KT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGV4aXRlZFwiPlxuICogICAgLi4uXG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZENvbXBsZXRpb25TdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnMScgfVwiPlxuICogICAgLi4uXG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIFdpdGggYSBuYXZpZ2F0aW9uIHN5bWJvbCBmcm9tIHRoZSBgZm9udC1hd2Vzb21lYCBmb250OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRDb21wbGV0aW9uU3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd1dpemFyZENvbXBsZXRpb25TdGVwXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogV2l6YXJkU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUpIH0sXG4gICAgeyBwcm92aWRlOiBXaXphcmRDb21wbGV0aW9uU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUpIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSBleHRlbmRzIFdpemFyZENvbXBsZXRpb25TdGVwIHtcbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdXaXphcmRTdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgbm9ybWFsIHN0ZXAgaW5zaWRlIGEgd2l6YXJkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRTdGVwIFtzdGVwVGl0bGVdPVwic3RlcCB0aXRsZVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnc3ltYm9sJywgZm9udEZhbWlseTogJ2ZvbnQtZmFtaWx5JyB9XCJcbiAqICAgIFtjYW5FeGl0XT1cImRlY2lkaW5nIGZ1bmN0aW9uXCIgKHN0ZXBFbnRlcik9XCJlbnRlciBmdW5jdGlvblwiIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogV2l0aCBgYXdXaXphcmRTdGVwVGl0bGVgIGFuZCBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmVzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRTdGVwIFtjYW5FeGl0XT1cImRlY2lkaW5nIGZ1bmN0aW9uXCIgKHN0ZXBFbnRlcik9XCJlbnRlciBmdW5jdGlvblwiIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwVGl0bGU+XG4gKiAgICAgICAgc3RlcCB0aXRsZVxuICogICAgPC9uZy10ZW1wbGF0ZT5cbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBTeW1ib2w+XG4gKiAgICAgICAgc3ltYm9sXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogICAgLi4uXG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogV2l0aCBgc3RlcFRpdGxlYCBhbmQgYG5hdmlnYXRpb25TeW1ib2xgIGlucHV0czpcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IGF3V2l6YXJkU3RlcCBzdGVwVGl0bGU9XCJBZGRyZXNzIGluZm9ybWF0aW9uXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcmI3hmMWJhOycsIGZvbnRGYW1pbHk6ICdGb250QXdlc29tZScgfVwiPlxuICogICAgLi4uXG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIFdpdGggYGF3V2l6YXJkU3RlcFRpdGxlYCBhbmQgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlczpcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IGF3V2l6YXJkU3RlcD5cbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cbiAqICAgICAgICBBZGRyZXNzIGluZm9ybWF0aW9uXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cbiAqICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRheGlcIj48L2k+XG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3V2l6YXJkU3RlcF0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFdpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZFN0ZXBEaXJlY3RpdmUpIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwRGlyZWN0aXZlIGV4dGVuZHMgV2l6YXJkU3RlcCB7XG59XG4iLCJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1dpemFyZENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQnO1xuaW1wb3J0IHtXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge1dpemFyZFN0ZXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQtc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50JztcblxuaW1wb3J0IHtOZXh0U3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL25leHQtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtQcmV2aW91c1N0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9wcmV2aW91cy1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge09wdGlvbmFsU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL29wdGlvbmFsLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7R29Ub1N0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9nby10by1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1dpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC1zeW1ib2wuZGlyZWN0aXZlJztcbmltcG9ydCB7V2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7RW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvZW5hYmxlLWJhY2stbGlua3MuZGlyZWN0aXZlJztcbmltcG9ydCB7V2l6YXJkU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTZWxlY3RlZFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWxlY3RlZC1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Jlc2V0V2l6YXJkRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVzZXQtd2l6YXJkLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogVGhlIG1vZHVsZSBkZWZpbmluZyBhbGwgdGhlIGNvbnRlbnQgaW5zaWRlIGBhbmd1bGFyLWFyY2h3aXphcmRgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFdpemFyZENvbXBvbmVudCxcbiAgICBXaXphcmRTdGVwQ29tcG9uZW50LFxuICAgIFdpemFyZE5hdmlnYXRpb25CYXJDb21wb25lbnQsXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQsXG4gICAgR29Ub1N0ZXBEaXJlY3RpdmUsXG4gICAgTmV4dFN0ZXBEaXJlY3RpdmUsXG4gICAgUHJldmlvdXNTdGVwRGlyZWN0aXZlLFxuICAgIE9wdGlvbmFsU3RlcERpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSxcbiAgICBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcERpcmVjdGl2ZSxcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSxcbiAgICBTZWxlY3RlZFN0ZXBEaXJlY3RpdmUsXG4gICAgUmVzZXRXaXphcmREaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgV2l6YXJkQ29tcG9uZW50LFxuICAgIFdpemFyZFN0ZXBDb21wb25lbnQsXG4gICAgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCxcbiAgICBHb1RvU3RlcERpcmVjdGl2ZSxcbiAgICBOZXh0U3RlcERpcmVjdGl2ZSxcbiAgICBQcmV2aW91c1N0ZXBEaXJlY3RpdmUsXG4gICAgT3B0aW9uYWxTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlLFxuICAgIEVuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlLFxuICAgIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSxcbiAgICBSZXNldFdpemFyZERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFyY2h3aXphcmRNb2R1bGUge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge25nTW9kdWxlOiBBcmNod2l6YXJkTW9kdWxlLCBwcm92aWRlcnM6IFtdfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIlRlbXBsYXRlUmVmIiwiRXZlbnRFbWl0dGVyIiwiaXNCb29sZWFuIiwiQ29udGVudENoaWxkIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0QmluZGluZyIsInRzbGliXzEuX19leHRlbmRzIiwiSW5qZWN0YWJsZSIsInRzbGliXzEuX192YWx1ZXMiLCJDb21wb25lbnQiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkNvbnRlbnRDaGlsZHJlbiIsImZvcndhcmRSZWYiLCJIb3N0IiwiT3B0aW9uYWwiLCJIb3N0TGlzdGVuZXIiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUVGLHVCQUEwQixDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFnQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FB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
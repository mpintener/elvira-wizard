/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ContentChildren, HostBinding, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardState } from '../navigation/wizard-state.model';
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
export class WizardComponent {
    /**
     * Constructor
     *
     * @param {?} model The model for this wizard component
     */
    constructor(model) {
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
    /**
     * Returns true if this wizard uses a horizontal orientation.
     * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
     *
     * @return {?} True if this wizard uses a horizontal orientation
     */
    get horizontalOrientation() {
        return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
    }
    /**
     * Returns true if this wizard uses a vertical orientation.
     * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
     *
     * @return {?} True if this wizard uses a vertical orientation
     */
    get verticalOrientation() {
        return this.navBarLocation === 'left' || this.navBarLocation === 'right';
    }
    /**
     * The navigation mode for this wizard
     * @return {?}
     */
    get navigation() {
        return this.model.navigationMode;
    }
    /**
     * Updates the model after certain input values have changed
     *
     * @param {?} changes The detected changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const propName of Object.keys(changes)) {
            /** @type {?} */
            let change = changes[propName];
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
    /**
     * Initialization work
     * @return {?}
     */
    ngAfterContentInit() {
        // add a subscriber to the wizard steps QueryList to listen to changes in the DOM
        this.wizardSteps.changes.subscribe(changedWizardSteps => {
            this.model.updateWizardSteps(changedWizardSteps.toArray());
        });
        // initialize the model
        this.model.disableNavigationBar = this.disableNavigationBar;
        this.model.defaultStepIndex = this.defaultStepIndex;
        this.model.updateWizardSteps(this.wizardSteps.toArray());
        this.model.updateNavigationMode(this.navigationMode);
        // finally reset the whole wizard state
        this.navigation.reset();
    }
}
WizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-wizard',
                template: "<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'left',\n    horizontal: navBarLocation == 'top',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n\n<div [ngClass]=\"{\n  'wizard-steps': true,\n  vertical: navBarLocation == 'left' || navBarLocation == 'right',\n  horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\n}\">\n  <ng-content></ng-content>\n</div>\n\n<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'right',\n    horizontal: navBarLocation == 'bottom',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [WizardState],
                styles: ["aw-wizard{display:flex;justify-content:flex-start}aw-wizard.vertical{flex-direction:row}aw-wizard.horizontal{flex-direction:column}aw-wizard .wizard-steps{top:0;display:flex}aw-wizard .wizard-steps.vertical{min-width:calc(100% - 280px);width:80%;height:100%;flex-direction:column}aw-wizard .wizard-steps.horizontal{width:100%;flex-direction:row}"]
            }] }
];
WizardComponent.ctorParameters = () => [
    { type: WizardState }
];
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
if (false) {
    /**
     * A QueryList containing all [[WizardStep]]s inside this wizard
     * @type {?}
     */
    WizardComponent.prototype.wizardSteps;
    /**
     * The location of the navigation bar inside the wizard.
     * This location can be either top, bottom, left or right
     * @type {?}
     */
    WizardComponent.prototype.navBarLocation;
    /**
     * The layout of the navigation bar inside the wizard.
     * The layout can be either small, large-filled, large-empty or large-symbols
     * @type {?}
     */
    WizardComponent.prototype.navBarLayout;
    /**
     * The direction in which the steps inside the navigation bar should be shown.
     * The direction can be either `left-to-right` or `right-to-left`
     * @type {?}
     */
    WizardComponent.prototype.navBarDirection;
    /**
     * The navigation mode used for transitioning between different steps.
     * The navigation mode can be either `strict`, `semi-strict` or `free`
     * @type {?}
     */
    WizardComponent.prototype.navigationMode;
    /**
     * The initially selected step, represented by its index
     * @type {?}
     */
    WizardComponent.prototype.defaultStepIndex;
    /**
     * True, if the navigation bar shouldn't be used for navigating
     * @type {?}
     */
    WizardComponent.prototype.disableNavigationBar;
    /** @type {?} */
    WizardComponent.prototype.model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFdBQVcsRUFDWCxLQUFLLEVBRUwsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QzdELE1BQU07Ozs7OztJQWlGSixZQUFtQixLQUFrQjtRQUFsQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBMUVyQzs7O1dBR0c7UUFFSSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUU5Qjs7O1dBR0c7UUFFSSxpQkFBWSxHQUFHLE9BQU8sQ0FBQztRQUU5Qjs7O1dBR0c7UUFFSSxvQkFBZSxHQUFHLGVBQWUsQ0FBQztRQUV6Qzs7O1dBR0c7UUFFSSxtQkFBYyxHQUFHLFFBQVEsQ0FBQztRQUVqQzs7V0FFRztRQUVJLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUU1Qjs7V0FFRztRQUVJLHlCQUFvQixHQUFHLEtBQUssQ0FBQztJQXFDcEMsQ0FBQzs7Ozs7OztJQTdCRCxJQUNXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssUUFBUSxDQUFDO0lBQzNFLENBQUM7Ozs7Ozs7SUFRRCxJQUNXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssT0FBTyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBS0QsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDbkMsQ0FBQzs7Ozs7OztJQWVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxLQUFLLE1BQU0sUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7O2dCQUN2QyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDdkIsUUFBUSxRQUFRLEVBQUU7b0JBQ2hCLEtBQUssa0JBQWtCO3dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUNoRSxNQUFNO29CQUNSLEtBQUssc0JBQXNCO3dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7d0JBQ3RELE1BQU07b0JBQ1IsS0FBSyxnQkFBZ0I7d0JBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUNyRCxNQUFNO29CQUNSLDBCQUEwQjtvQkFDMUIsUUFBUTtpQkFDVDthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUtELGtCQUFrQjtRQUNoQixpRkFBaUY7UUFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO1FBRUgsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJELHVDQUF1QztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQXZJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGl6Q0FBb0M7Z0JBRXBDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7O2FBQ3pCOzs7WUE1Q08sV0FBVzs7OzBCQWlEaEIsZUFBZSxTQUFDLFVBQVU7NkJBTzFCLEtBQUs7MkJBT0wsS0FBSzs4QkFPTCxLQUFLOzZCQU9MLEtBQUs7K0JBTUwsS0FBSzttQ0FNTCxLQUFLO29DQVNMLFdBQVcsU0FBQyxrQkFBa0I7a0NBVzlCLFdBQVcsU0FBQyxnQkFBZ0I7Ozs7Ozs7SUE1RDdCLHNDQUMwQzs7Ozs7O0lBTTFDLHlDQUM4Qjs7Ozs7O0lBTTlCLHVDQUM4Qjs7Ozs7O0lBTTlCLDBDQUN5Qzs7Ozs7O0lBTXpDLHlDQUNpQzs7Ozs7SUFLakMsMkNBQzRCOzs7OztJQUs1QiwrQ0FDb0M7O0lBb0N4QixnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhdy13aXphcmRgIGNvbXBvbmVudCBkZWZpbmVzIHRoZSByb290IGNvbXBvbmVudCBvZiBhIHdpemFyZC5cbiAqIFRocm91Z2ggdGhlIHNldHRpbmcgb2YgaW5wdXQgcGFyYW1ldGVycyBmb3IgdGhlIGBhdy13aXphcmRgIGNvbXBvbmVudCBpdCdzIHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgbG9jYXRpb24gYW5kIHNpemVcbiAqIG9mIGl0cyBuYXZpZ2F0aW9uIGJhci5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkIFtuYXZCYXJMb2NhdGlvbl09XCJsb2NhdGlvbiBvZiBuYXZpZ2F0aW9uIGJhclwiIFtuYXZCYXJMYXlvdXRdPVwibGF5b3V0IG9mIG5hdmlnYXRpb24gYmFyXCI+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZD5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogV2l0aG91dCBjb21wbGV0aW9uIHN0ZXA6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZCBuYXZCYXJMb2NhdGlvbj1cInRvcFwiIG5hdkJhckxheW91dD1cInNtYWxsXCI+XG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XG4gKiA8L2F3LXdpemFyZD5cbiAqIGBgYFxuICpcbiAqIFdpdGggY29tcGxldGlvbiBzdGVwOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQgbmF2QmFyTG9jYXRpb249XCJ0b3BcIiBuYXZCYXJMYXlvdXQ9XCJzbWFsbFwiPlxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxuICogICAgIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwPi4uLjwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIDwvYXctd2l6YXJkPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZCcsXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3dpemFyZC5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtXaXphcmRTdGF0ZV1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqXG4gICAqIEEgUXVlcnlMaXN0IGNvbnRhaW5pbmcgYWxsIFtbV2l6YXJkU3RlcF1dcyBpbnNpZGUgdGhpcyB3aXphcmRcbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oV2l6YXJkU3RlcClcbiAgcHVibGljIHdpemFyZFN0ZXBzOiBRdWVyeUxpc3Q8V2l6YXJkU3RlcD47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhdGlvbiBvZiB0aGUgbmF2aWdhdGlvbiBiYXIgaW5zaWRlIHRoZSB3aXphcmQuXG4gICAqIFRoaXMgbG9jYXRpb24gY2FuIGJlIGVpdGhlciB0b3AsIGJvdHRvbSwgbGVmdCBvciByaWdodFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckxvY2F0aW9uID0gJ3RvcCc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYXlvdXQgb2YgdGhlIG5hdmlnYXRpb24gYmFyIGluc2lkZSB0aGUgd2l6YXJkLlxuICAgKiBUaGUgbGF5b3V0IGNhbiBiZSBlaXRoZXIgc21hbGwsIGxhcmdlLWZpbGxlZCwgbGFyZ2UtZW1wdHkgb3IgbGFyZ2Utc3ltYm9sc1xuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckxheW91dCA9ICdzbWFsbCc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXBzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkIGJlIHNob3duLlxuICAgKiBUaGUgZGlyZWN0aW9uIGNhbiBiZSBlaXRoZXIgYGxlZnQtdG8tcmlnaHRgIG9yIGByaWdodC10by1sZWZ0YFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckRpcmVjdGlvbiA9ICdsZWZ0LXRvLXJpZ2h0JztcblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSB1c2VkIGZvciB0cmFuc2l0aW9uaW5nIGJldHdlZW4gZGlmZmVyZW50IHN0ZXBzLlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlIGNhbiBiZSBlaXRoZXIgYHN0cmljdGAsIGBzZW1pLXN0cmljdGAgb3IgYGZyZWVgXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmF2aWdhdGlvbk1vZGUgPSAnc3RyaWN0JztcblxuICAvKipcbiAgICogVGhlIGluaXRpYWxseSBzZWxlY3RlZCBzdGVwLCByZXByZXNlbnRlZCBieSBpdHMgaW5kZXhcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkZWZhdWx0U3RlcEluZGV4ID0gMDtcblxuICAvKipcbiAgICogVHJ1ZSwgaWYgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZG4ndCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzYWJsZU5hdmlnYXRpb25CYXIgPSBmYWxzZTtcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLlxuICAgKiBUaGUgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLCBpZmYgdGhlIG5hdmlnYXRpb24gYmFyIGlzIHNob3duIGF0IHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoaXMgd2l6YXJkXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIGhvcml6b250YWwgb3JpZW50YXRpb25cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaG9yaXpvbnRhbCcpXG4gIHB1YmxpYyBnZXQgaG9yaXpvbnRhbE9yaWVudGF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAndG9wJyB8fCB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAnYm90dG9tJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIHZlcnRpY2FsIG9yaWVudGF0aW9uLlxuICAgKiBUaGUgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvbiwgaWZmIHRoZSBuYXZpZ2F0aW9uIGJhciBpcyBzaG93biBhdCB0aGUgbGVmdCBvciByaWdodCBvZiB0aGlzIHdpemFyZFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvblxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy52ZXJ0aWNhbCcpXG4gIHB1YmxpYyBnZXQgdmVydGljYWxPcmllbnRhdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMubmF2QmFyTG9jYXRpb24gPT09ICdyaWdodCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSBmb3IgdGhpcyB3aXphcmRcbiAgICovXG4gIHB1YmxpYyBnZXQgbmF2aWdhdGlvbigpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsIFRoZSBtb2RlbCBmb3IgdGhpcyB3aXphcmQgY29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZWw6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbW9kZWwgYWZ0ZXIgY2VydGFpbiBpbnB1dCB2YWx1ZXMgaGF2ZSBjaGFuZ2VkXG4gICAqXG4gICAqIEBwYXJhbSBjaGFuZ2VzIFRoZSBkZXRlY3RlZCBjaGFuZ2VzXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjaGFuZ2VzKSkge1xuICAgICAgbGV0IGNoYW5nZSA9IGNoYW5nZXNbcHJvcE5hbWVdO1xuXG4gICAgICBpZiAoIWNoYW5nZS5maXJzdENoYW5nZSkge1xuICAgICAgICBzd2l0Y2ggKHByb3BOYW1lKSB7XG4gICAgICAgICAgY2FzZSAnZGVmYXVsdFN0ZXBJbmRleCc6XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRlZmF1bHRTdGVwSW5kZXggPSBwYXJzZUludChjaGFuZ2UuY3VycmVudFZhbHVlLCAxMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkaXNhYmxlTmF2aWdhdGlvbkJhcic6XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRpc2FibGVOYXZpZ2F0aW9uQmFyID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ25hdmlnYXRpb25Nb2RlJzpcbiAgICAgICAgICAgIHRoaXMubW9kZWwudXBkYXRlTmF2aWdhdGlvbk1vZGUoY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIC8vIGFkZCBhIHN1YnNjcmliZXIgdG8gdGhlIHdpemFyZCBzdGVwcyBRdWVyeUxpc3QgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIERPTVxuICAgIHRoaXMud2l6YXJkU3RlcHMuY2hhbmdlcy5zdWJzY3JpYmUoY2hhbmdlZFdpemFyZFN0ZXBzID0+IHtcbiAgICAgIHRoaXMubW9kZWwudXBkYXRlV2l6YXJkU3RlcHMoY2hhbmdlZFdpemFyZFN0ZXBzLnRvQXJyYXkoKSk7XG4gICAgfSk7XG5cbiAgICAvLyBpbml0aWFsaXplIHRoZSBtb2RlbFxuICAgIHRoaXMubW9kZWwuZGlzYWJsZU5hdmlnYXRpb25CYXIgPSB0aGlzLmRpc2FibGVOYXZpZ2F0aW9uQmFyO1xuICAgIHRoaXMubW9kZWwuZGVmYXVsdFN0ZXBJbmRleCA9IHRoaXMuZGVmYXVsdFN0ZXBJbmRleDtcbiAgICB0aGlzLm1vZGVsLnVwZGF0ZVdpemFyZFN0ZXBzKHRoaXMud2l6YXJkU3RlcHMudG9BcnJheSgpKTtcbiAgICB0aGlzLm1vZGVsLnVwZGF0ZU5hdmlnYXRpb25Nb2RlKHRoaXMubmF2aWdhdGlvbk1vZGUpO1xuXG4gICAgLy8gZmluYWxseSByZXNldCB0aGUgd2hvbGUgd2l6YXJkIHN0YXRlXG4gICAgdGhpcy5uYXZpZ2F0aW9uLnJlc2V0KCk7XG4gIH1cbn1cbiJdfQ==
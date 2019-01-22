/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardCompletionStep } from '../util/wizard-completion-step.interface';
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
    tslib_1.__extends(WizardCompletionStepDirective, _super);
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
        { type: Directive, args: [{
                    selector: '[awWizardCompletionStep]',
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardCompletionStepDirective; }) },
                        { provide: WizardCompletionStep, useExisting: forwardRef(function () { return WizardCompletionStepDirective; }) }
                    ]
                },] }
    ];
    return WizardCompletionStepDirective;
}(WizardCompletionStep));
export { WizardCompletionStepDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWNvbXBsZXRpb24tc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy93aXphcmQtY29tcGxldGlvbi1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDOUU7SUFPbUQseURBQW9CO0lBM0N2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQ0c7SUFDSDs7SUFRQSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBNkIsRUFBN0IsQ0FBNkIsQ0FBQyxFQUFFO3dCQUNyRixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBNkIsRUFBN0IsQ0FBNkIsQ0FBQyxFQUFFO3FCQUNoRztpQkFDRjs7SUFFRCxvQ0FBQztDQUFBLEFBUkQsQ0FPbUQsb0JBQW9CLEdBQ3RFO1NBRFksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgYGF3V2l6YXJkQ29tcGxldGlvblN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSBjb21wbGV0aW9uL3N1Y2Nlc3Mgc3RlcCBhdCB0aGUgZW5kIG9mIHlvdXIgd2l6YXJkXG4gKiBBZnRlciBhIFtbV2l6YXJkQ29tcGxldGlvblN0ZXBdXSBoYXMgYmVlbiBlbnRlcmVkLCBpdCBoYXMgdGhlIGNoYXJhY3RlcmlzdGljIHRoYXQgdGhlIHVzZXIgaXMgYmxvY2tlZCBmcm9tXG4gKiBsZWF2aW5nIGl0IGFnYWluIHRvIGEgcHJldmlvdXMgc3RlcC5cbiAqIEluIGFkZGl0aW9uIGVudGVyaW5nIGEgW1tXaXphcmRDb21wbGV0aW9uU3RlcF1dIGF1dG9tYXRpY2FsbHkgc2V0cyB0aGUgYHdpemFyZGAsIGFuZCBhbGwgc3RlcHMgaW5zaWRlIHRoZSBgd2l6YXJkYCxcbiAqIGFzIGNvbXBsZXRlZC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZENvbXBsZXRpb25TdGVwIFtzdGVwVGl0bGVdPVwidGl0bGUgb2YgdGhlIHdpemFyZCBzdGVwXCJcbiAqICAgIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnbmF2aWdhdGlvbiBzeW1ib2wnLCBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknIH1cIlxuICogICAgKHN0ZXBFbnRlcik9XCJldmVudCBlbWl0dGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB3aXphcmQgc3RlcCBpcyBlbnRlcmVkXCJcbiAqICAgIChzdGVwRXhpdCk9XCJldmVudCBlbWl0dGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB3aXphcmQgc3RlcCBpcyBleGl0ZWRcIj5cbiAqICAgIC4uLlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRDb21wbGV0aW9uU3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJzEnIH1cIj5cbiAqICAgIC4uLlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGEgbmF2aWdhdGlvbiBzeW1ib2wgZnJvbSB0aGUgYGZvbnQtYXdlc29tZWAgZm9udDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IGF3V2l6YXJkQ29tcGxldGlvblN0ZXAgc3RlcFRpdGxlPVwiU3RlcCAxXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcmI3hmMWJhOycsIGZvbnRGYW1pbHk6ICdGb250QXdlc29tZScgfVwiPlxuICogICAgLi4uXG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdXaXphcmRDb21wbGV0aW9uU3RlcF0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFdpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlKSB9LFxuICAgIHsgcHJvdmlkZTogV2l6YXJkQ29tcGxldGlvblN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlKSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUgZXh0ZW5kcyBXaXphcmRDb21wbGV0aW9uU3RlcCB7XG59XG4iXX0=
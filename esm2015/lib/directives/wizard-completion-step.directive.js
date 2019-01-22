/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class WizardCompletionStepDirective extends WizardCompletionStep {
}
WizardCompletionStepDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awWizardCompletionStep]',
                providers: [
                    { provide: WizardStep, useExisting: forwardRef(() => WizardCompletionStepDirective) },
                    { provide: WizardCompletionStep, useExisting: forwardRef(() => WizardCompletionStepDirective) }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWNvbXBsZXRpb24tc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy93aXphcmQtY29tcGxldGlvbi1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkM5RSxNQUFNLG9DQUFxQyxTQUFRLG9CQUFvQjs7O1lBUHRFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsNkJBQTZCLENBQUMsRUFBRTtvQkFDckYsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFO2lCQUNoRzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgYGF3V2l6YXJkQ29tcGxldGlvblN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSBjb21wbGV0aW9uL3N1Y2Nlc3Mgc3RlcCBhdCB0aGUgZW5kIG9mIHlvdXIgd2l6YXJkXG4gKiBBZnRlciBhIFtbV2l6YXJkQ29tcGxldGlvblN0ZXBdXSBoYXMgYmVlbiBlbnRlcmVkLCBpdCBoYXMgdGhlIGNoYXJhY3RlcmlzdGljIHRoYXQgdGhlIHVzZXIgaXMgYmxvY2tlZCBmcm9tXG4gKiBsZWF2aW5nIGl0IGFnYWluIHRvIGEgcHJldmlvdXMgc3RlcC5cbiAqIEluIGFkZGl0aW9uIGVudGVyaW5nIGEgW1tXaXphcmRDb21wbGV0aW9uU3RlcF1dIGF1dG9tYXRpY2FsbHkgc2V0cyB0aGUgYHdpemFyZGAsIGFuZCBhbGwgc3RlcHMgaW5zaWRlIHRoZSBgd2l6YXJkYCxcbiAqIGFzIGNvbXBsZXRlZC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZENvbXBsZXRpb25TdGVwIFtzdGVwVGl0bGVdPVwidGl0bGUgb2YgdGhlIHdpemFyZCBzdGVwXCJcbiAqICAgIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnbmF2aWdhdGlvbiBzeW1ib2wnLCBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknIH1cIlxuICogICAgKHN0ZXBFbnRlcik9XCJldmVudCBlbWl0dGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB3aXphcmQgc3RlcCBpcyBlbnRlcmVkXCJcbiAqICAgIChzdGVwRXhpdCk9XCJldmVudCBlbWl0dGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB3aXphcmQgc3RlcCBpcyBleGl0ZWRcIj5cbiAqICAgIC4uLlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRDb21wbGV0aW9uU3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJzEnIH1cIj5cbiAqICAgIC4uLlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGEgbmF2aWdhdGlvbiBzeW1ib2wgZnJvbSB0aGUgYGZvbnQtYXdlc29tZWAgZm9udDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IGF3V2l6YXJkQ29tcGxldGlvblN0ZXAgc3RlcFRpdGxlPVwiU3RlcCAxXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcmI3hmMWJhOycsIGZvbnRGYW1pbHk6ICdGb250QXdlc29tZScgfVwiPlxuICogICAgLi4uXG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdXaXphcmRDb21wbGV0aW9uU3RlcF0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFdpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlKSB9LFxuICAgIHsgcHJvdmlkZTogV2l6YXJkQ29tcGxldGlvblN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlKSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUgZXh0ZW5kcyBXaXphcmRDb21wbGV0aW9uU3RlcCB7XG59XG4iXX0=
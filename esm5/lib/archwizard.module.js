/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WizardComponent } from './components/wizard.component';
import { WizardNavigationBarComponent } from './components/wizard-navigation-bar.component';
import { WizardStepComponent } from './components/wizard-step.component';
import { WizardCompletionStepComponent } from './components/wizard-completion-step.component';
import { NextStepDirective } from './directives/next-step.directive';
import { PreviousStepDirective } from './directives/previous-step.directive';
import { OptionalStepDirective } from './directives/optional-step.directive';
import { GoToStepDirective } from './directives/go-to-step.directive';
import { WizardStepSymbolDirective } from './directives/wizard-step-symbol.directive';
import { WizardStepTitleDirective } from './directives/wizard-step-title.directive';
import { EnableBackLinksDirective } from './directives/enable-back-links.directive';
import { WizardStepDirective } from './directives/wizard-step.directive';
import { WizardCompletionStepDirective } from './directives/wizard-completion-step.directive';
import { SelectedStepDirective } from './directives/selected-step.directive';
import { ResetWizardDirective } from './directives/reset-wizard.directive';
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
        { type: NgModule, args: [{
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
                },] }
    ];
    return ArchwizardModule;
}());
export { ArchwizardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaHdpemFyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvYXJjaHdpemFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFNUYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7Ozs7OztBQU96RTtJQUxBOzs7O09BSUc7SUFDSDtJQTRDQSxDQUFDO0lBSkMsMEJBQTBCOzs7OztJQUNuQix3QkFBTzs7OztJQUFkO1FBQ0UsT0FBTyxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBM0NGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLDRCQUE0Qjt3QkFDNUIsNkJBQTZCO3dCQUM3QixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsNkJBQTZCO3dCQUM3QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQiw0QkFBNEI7d0JBQzVCLDZCQUE2Qjt3QkFDN0IsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQix5QkFBeUI7d0JBQ3pCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixtQkFBbUI7d0JBQ25CLDZCQUE2Qjt3QkFDN0IscUJBQXFCO3dCQUNyQixvQkFBb0I7cUJBQ3JCO2lCQUNGOztJQU1ELHVCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0FMWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1dpemFyZENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQnO1xuaW1wb3J0IHtXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge1dpemFyZFN0ZXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQtc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50JztcblxuaW1wb3J0IHtOZXh0U3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL25leHQtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtQcmV2aW91c1N0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9wcmV2aW91cy1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge09wdGlvbmFsU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL29wdGlvbmFsLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7R29Ub1N0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9nby10by1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1dpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC1zeW1ib2wuZGlyZWN0aXZlJztcbmltcG9ydCB7V2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7RW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvZW5hYmxlLWJhY2stbGlua3MuZGlyZWN0aXZlJztcbmltcG9ydCB7V2l6YXJkU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTZWxlY3RlZFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWxlY3RlZC1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Jlc2V0V2l6YXJkRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVzZXQtd2l6YXJkLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogVGhlIG1vZHVsZSBkZWZpbmluZyBhbGwgdGhlIGNvbnRlbnQgaW5zaWRlIGBhbmd1bGFyLWFyY2h3aXphcmRgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFdpemFyZENvbXBvbmVudCxcbiAgICBXaXphcmRTdGVwQ29tcG9uZW50LFxuICAgIFdpemFyZE5hdmlnYXRpb25CYXJDb21wb25lbnQsXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQsXG4gICAgR29Ub1N0ZXBEaXJlY3RpdmUsXG4gICAgTmV4dFN0ZXBEaXJlY3RpdmUsXG4gICAgUHJldmlvdXNTdGVwRGlyZWN0aXZlLFxuICAgIE9wdGlvbmFsU3RlcERpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSxcbiAgICBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcERpcmVjdGl2ZSxcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSxcbiAgICBTZWxlY3RlZFN0ZXBEaXJlY3RpdmUsXG4gICAgUmVzZXRXaXphcmREaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgV2l6YXJkQ29tcG9uZW50LFxuICAgIFdpemFyZFN0ZXBDb21wb25lbnQsXG4gICAgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCxcbiAgICBHb1RvU3RlcERpcmVjdGl2ZSxcbiAgICBOZXh0U3RlcERpcmVjdGl2ZSxcbiAgICBQcmV2aW91c1N0ZXBEaXJlY3RpdmUsXG4gICAgT3B0aW9uYWxTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlLFxuICAgIEVuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlLFxuICAgIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSxcbiAgICBSZXNldFdpemFyZERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFyY2h3aXphcmRNb2R1bGUge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge25nTW9kdWxlOiBBcmNod2l6YXJkTW9kdWxlLCBwcm92aWRlcnM6IFtdfTtcbiAgfVxufVxuIl19
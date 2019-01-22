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
export class ArchwizardModule {
    /* istanbul ignore next */
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ArchwizardModule, providers: [] };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaHdpemFyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvYXJjaHdpemFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFNUYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7Ozs7OztBQThDekUsTUFBTTs7Ozs7SUFFSixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQ3JELENBQUM7OztZQTNDRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQiw0QkFBNEI7b0JBQzVCLDZCQUE2QjtvQkFDN0IsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIscUJBQXFCO29CQUNyQix5QkFBeUI7b0JBQ3pCLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4QixtQkFBbUI7b0JBQ25CLDZCQUE2QjtvQkFDN0IscUJBQXFCO29CQUNyQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsNEJBQTRCO29CQUM1Qiw2QkFBNkI7b0JBQzdCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIseUJBQXlCO29CQUN6Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQiw2QkFBNkI7b0JBQzdCLHFCQUFxQjtvQkFDckIsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtXaXphcmRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQuY29tcG9uZW50JztcbmltcG9ydCB7V2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtXaXphcmRTdGVwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7TmV4dFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9uZXh0LXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7UHJldmlvdXNTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcHJldmlvdXMtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtPcHRpb25hbFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9vcHRpb25hbC1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0dvVG9TdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ28tdG8tc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1dpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXRpdGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0VuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2VuYWJsZS1iYWNrLWxpbmtzLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1dpemFyZFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7U2VsZWN0ZWRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0ZWQtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtSZXNldFdpemFyZERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIFRoZSBtb2R1bGUgZGVmaW5pbmcgYWxsIHRoZSBjb250ZW50IGluc2lkZSBgYW5ndWxhci1hcmNod2l6YXJkYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBXaXphcmRDb21wb25lbnQsXG4gICAgV2l6YXJkU3RlcENvbXBvbmVudCxcbiAgICBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50LFxuICAgIEdvVG9TdGVwRGlyZWN0aXZlLFxuICAgIE5leHRTdGVwRGlyZWN0aXZlLFxuICAgIFByZXZpb3VzU3RlcERpcmVjdGl2ZSxcbiAgICBPcHRpb25hbFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUsXG4gICAgRW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUsXG4gICAgU2VsZWN0ZWRTdGVwRGlyZWN0aXZlLFxuICAgIFJlc2V0V2l6YXJkRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFdpemFyZENvbXBvbmVudCxcbiAgICBXaXphcmRTdGVwQ29tcG9uZW50LFxuICAgIFdpemFyZE5hdmlnYXRpb25CYXJDb21wb25lbnQsXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQsXG4gICAgR29Ub1N0ZXBEaXJlY3RpdmUsXG4gICAgTmV4dFN0ZXBEaXJlY3RpdmUsXG4gICAgUHJldmlvdXNTdGVwRGlyZWN0aXZlLFxuICAgIE9wdGlvbmFsU3RlcERpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSxcbiAgICBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcERpcmVjdGl2ZSxcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSxcbiAgICBTZWxlY3RlZFN0ZXBEaXJlY3RpdmUsXG4gICAgUmVzZXRXaXphcmREaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcmNod2l6YXJkTW9kdWxlIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtuZ01vZHVsZTogQXJjaHdpemFyZE1vZHVsZSwgcHJvdmlkZXJzOiBbXX07XG4gIH1cbn1cbiJdfQ==
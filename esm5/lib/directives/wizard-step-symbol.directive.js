/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, TemplateRef } from '@angular/core';
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
        { type: Directive, args: [{
                    selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
                },] }
    ];
    WizardStepSymbolDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return WizardStepSymbolDirective;
}());
export { WizardStepSymbolDirective };
if (false) {
    /** @type {?} */
    WizardStepSymbolDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXN5bWJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBY3JEO0lBSUU7Ozs7T0FJRztJQUNILG1DQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFBSSxDQUFDOztnQkFUdEQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0REFBNEQ7aUJBQ3ZFOzs7Z0JBaEJrQixXQUFXOztJQXdCOUIsZ0NBQUM7Q0FBQSxBQVZELElBVUM7U0FQWSx5QkFBeUI7OztJQU14QixnREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgYXMgYW4gYWx0ZXJuYXRpdmUgdG8gdGhlIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dCBvZiBhIFtbV2l6YXJkU3RlcF1dXG4gKiB0byBkZWZpbmUgdGhlIHN0ZXAgc3ltYm9sIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIuICBUaGlzIHdheSBzdGVwIHN5bWJvbCBtYXkgY29udGFpbiBhcmJpdHJhcnkgY29udGVudC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cbiAqICAgICAuLi5cbiAqIDwvbmctdGVtcGxhdGU+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXdTdGVwU3ltYm9sXSwgbmctdGVtcGxhdGVbYXdXaXphcmRTdGVwU3ltYm9sXSdcbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVSZWYgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGBuZy10ZW1wbGF0ZWAgdGhhdCBjb250YWlucyB0aGlzIFtbV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZV1dXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuIl19
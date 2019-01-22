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
export class WizardStepSymbolDirective {
    /**
     * Constructor
     *
     * @param {?} templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
WizardStepSymbolDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
            },] }
];
WizardStepSymbolDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    WizardStepSymbolDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXN5bWJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBaUJyRCxNQUFNOzs7Ozs7SUFNSixZQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFBSSxDQUFDOzs7WUFUdEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0REFBNEQ7YUFDdkU7OztZQWhCa0IsV0FBVzs7OztJQXVCaEIsZ0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGUgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIGFzIGFuIGFsdGVybmF0aXZlIHRvIHRoZSBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXQgb2YgYSBbW1dpemFyZFN0ZXBdXVxuICogdG8gZGVmaW5lIHRoZSBzdGVwIHN5bWJvbCBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLiAgVGhpcyB3YXkgc3RlcCBzeW1ib2wgbWF5IGNvbnRhaW4gYXJiaXRyYXJ5IGNvbnRlbnQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBTeW1ib2w+XG4gKiAgICAgLi4uXG4gKiA8L25nLXRlbXBsYXRlPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F3U3RlcFN5bWJvbF0sIG5nLXRlbXBsYXRlW2F3V2l6YXJkU3RlcFN5bWJvbF0nXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlUmVmIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250ZW50IG9mIHRoZSBgbmctdGVtcGxhdGVgIHRoYXQgY29udGFpbnMgdGhpcyBbW1dpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmVdXVxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cbiJdfQ==
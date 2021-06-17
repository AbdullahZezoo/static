(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+PRQ":
/*!**************************************************************!*\
  !*** ./src/app/views/admin/show-data/show-data.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDataComponent", function() { return ShowDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ShowDataComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShowDataComponent.ɵfac = function ShowDataComponent_Factory(t) { return new (t || ShowDataComponent)(); };
ShowDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowDataComponent, selectors: [["app-show-data"]], decls: 2, vars: 0, template: function ShowDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "show-data works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LWRhdGEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "/kjZ":
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.nationalId");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.submissionId");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/auth/register"]; };
class LoginComponent {
    constructor(translateConfigService, http, router) {
        this.translateConfigService = translateConfigService;
        this.http = http;
        this.router = router;
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            nationalID: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            submissionID: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    ngOnInit() { }
    get nationalID() { return this.user.get('nationalID'); }
    ;
    get submissionID() { return this.user.get('submissionID'); }
    login() {
        if (this.user.valid) {
            const uploadData = {
                'nationalID': this.nationalID.value,
                'submissionID': this.submissionID.value
            };
            console.log(uploadData);
            this.http.post('http://45.56.117.204:8000/viewUser', uploadData, {
                headers: { 'Authorization': 'Token 870d88a50b2847f998bcfb40bc072ff0e0af0ddf' }
            }).subscribe((data) => {
                console.log(data);
                this.router.navigateByUrl('/auth/saved-data', { state: data });
            }, (err) => {
                if (err.status == 0) {
                    this.error = "Connection Error";
                }
                this.error = this.translateConfigService.error("login");
            });
        }
        else {
            this.error = this.translateConfigService.error("form");
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 37, vars: 12, consts: [[1, "container", "mx-auto", "px-4", "h-full"], [1, "flex", "content-center", "items-center", "justify-center", "h-full"], [1, "w-full", "lg:w-4/12", "px-4"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-blueGray-200", "border-0"], [1, "rounded-t", "mb-0", "px-6", "py-6"], [1, "text-center", "mb-3"], ["translate", "", 1, "text-blueGray-500", "text-sm", "font-bold"], [1, "mt-6", "border-b-1", "border-blueGray-300"], [1, "flex-auto", "px-4", "lg:px-10", "py-10", "pt-0"], [3, "formGroup"], [1, "relative", "w-full", "mb-3"], ["htmlFor", "grid-password", "translate", "", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], ["type", "text", "formControlName", "nationalID", "minlength", "14", "maxlength", "14", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], ["style", "color: red;", "translate", "", 4, "ngIf"], ["type", "password", "formControlName", "submissionID", "minlength", "11", "maxlength", "11", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], [1, "inline-flex", "items-center", "cursor-pointer"], ["id", "customCheckLogin", "type", "checkbox", 1, "form-checkbox", "border-0", "text-blueGray-700", "ml-1", "w-5", "h-5", "ease-linear", "transition-all", "duration-150", "rounded"], ["translate", "", 1, "ml-2", "text-sm", "font-semibold", "text-blueGray-600"], [1, "text-center", "mt-6"], ["type", "button", "translate", "", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"], [1, "flex", "flex-wrap", "mt-6", "relative"], [1, "w-1/2", "text-right"], [1, "text-blueGray-200", 3, "routerLink"], ["translate", ""], ["translate", "", 2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "HOME.view_form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Form.id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_span_16_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Form.submission_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LoginComponent_span_22_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Form.remember ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " HOME.view_form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "HOME.get_started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 7, "Form.id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nationalID.invalid && ctx.nationalID.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 9, "Form.submission_id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submissionID.invalid && ctx.submissionID.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], encapsulation: 2 });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular-Libya\libya\src\main.ts */"zUnb");


/***/ }),

/***/ "0slC":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dropdowns/user-dropdown/user-dropdown.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDropdownComponent", function() { return UserDropdownComponent; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "EjV/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




const _c0 = ["btnDropdownRef"];
const _c1 = ["popoverDropdownRef"];
class UserDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
}
UserDropdownComponent.ɵfac = function UserDropdownComponent_Factory(t) { return new (t || UserDropdownComponent)(); };
UserDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserDropdownComponent, selectors: [["app-user-dropdown"]], viewQuery: function UserDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.btnDropdownRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popoverDropdownRef = _t.first);
    } }, decls: 17, vars: 1, consts: [["href", "#pablo", 1, "text-blueGray-500", "block", 3, "click"], ["btnDropdownRef", ""], [1, "items-center", "flex"], [1, "w-12", "h-12", "text-sm", "text-white", "bg-blueGray-200", "inline-flex", "items-center", "justify-center", "rounded-full"], ["alt", "...", "src", "static/assets/img/team-1-800x800.jpg", 1, "w-full", "rounded-full", "align-middle", "border-none", "shadow-lg"], [1, "min-w-48", "z-50"], ["popoverDropdownRef", ""], [1, "bg-white", "text-base", "z-50", "float-left", "py-2", "list-none", "text-left", "rounded", "shadow-lg", "mt-1", "min-w-48", 3, "ngClass"], ["href", "#pablo", 1, "text-sm", "py-2", "px-4", "font-normal", "block", "w-full", "whitespace-nowrap", "bg-transparent", "text-blueGray-700"], [1, "h-0", "my-2", "border", "border-solid", "border-blueGray-100"]], template: function UserDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserDropdownComponent_Template_a_click_0_listener($event) { return ctx.toggleDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Another action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Something else here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Seprated link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.dropdownPopoverShow ? "block" : "hidden");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"]], encapsulation: 2 });


/***/ }),

/***/ "1DoU":
/*!***************************************************************!*\
  !*** ./src/app/components/footers/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class FooterComponent {
    constructor(translateConfigService) {
        this.translateConfigService = translateConfigService;
        this.date = new Date().getFullYear();
    }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 32, vars: 0, consts: [[1, "relative", "bg-blueGray-200", "pt-8", "pb-6"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-wrap", "justify-between"], [1, "w-full", "lg:w-6/12", "px-12"], ["translate", "", 1, "text-3xl", "font-semibold"], ["translate", "", 1, "text-lg", "mt-0", "mb-2", "text-blueGray-600"], [1, "mt-6", "lg:mb-0", "mb-6", "px-12"], ["type", "button", 1, "bg-white", "text-lightBlue-600", "shadow-lg", "font-normal", "h-10", "w-10", "items-center", "justify-center", "align-center", "rounded-full", "outline-none", "focus:outline-none", "mr-2"], [1, "fab", "fa-facebook-square"], ["type", "button", 1, "bg-white", "text-purple-400", "shadow-lg", "font-normal", "h-10", "w-10", "items-center", "justify-center", "align-center", "rounded-full", "outline-none", "focus:outline-none", "mr-2"], [1, "fab", "fa-instagram"], [1, "w-full", "lg:w-3/12", "px-12", "py-4"], ["translate", "", 1, "block", "uppercase", "text-blueGray-500", "text-sm", "font-semibold", "mb-2"], [1, "list-unstyled"], ["href", "", "translate", "", 1, "text-blueGray-600", "hover:text-blueGray-800", "font-semibold", "block", "pb-2", "text-sm"], [1, "flex", "flex-wrap", "items-center", "md:justify-between", "justify-center"], [1, "w-full", "md:w-4/12", "px-4", "mx-auto", "text-center"], [1, "text-sm", "text-blueGray-500", "font-semibold", "py-1"], ["href", "", "translate", "", 1, "text-blueGray-500", "hover:text-blueGray-800"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HOME.footer_title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " HOME.footer_sub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " HOME.links ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " HOME.about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " HOME.terms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " HOME.contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " HOME.copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"]], encapsulation: 2 });


/***/ }),

/***/ "1ovs":
/*!*************************************************************************!*\
  !*** ./src/app/components/navbars/form-navbar/form-navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: FormNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormNavbarComponent", function() { return FormNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");





const _c0 = function () { return ["/auth/login"]; };
const _c1 = function (a0, a1) { return { hidden: a0, "block rounded shadow-lg": a1 }; };
class FormNavbarComponent {
    constructor() {
        this.navbarOpen = false;
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
}
FormNavbarComponent.ɵfac = function FormNavbarComponent_Factory(t) { return new (t || FormNavbarComponent)(); };
FormNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormNavbarComponent, selectors: [["app-form-navbar"]], decls: 20, vars: 6, consts: [[1, "top-0", "absolute", "z-50", "w-full", "flex", "flex-wrap", "items-center", "justify-between", "px-2", "py-3", "navbar-expand-lg"], [1, "container", "px-4", "mx-auto", "flex", "flex-wrap", "items-center", "justify-between"], [1, "w-full", "relative", "flex", "justify-between", "lg:w-auto", "lg:static", "lg:block", "lg:justify-start"], ["translate", "", 1, "lg:text-white", "text-white", "text-lg", "leading-lg", "mr-2"], ["translate", "", 1, "text-xl", "font-semibold", "inline-block", "px-2", "uppercase", "rounded", "text-blueGray-600", "bg-blueGray-200", "uppercase", "last:mr-0", "mr-1"], ["type", "button", 1, "cursor-pointer", "text-xl", "leading-none", "px-3", "py-1", "border", "border-solid", "border-transparent", "rounded", "bg-transparent", "block", "lg:hidden", "outline-none", "focus:outline-none", 3, "routerLink"], [1, "text-white", "fas", "fa-bars"], [1, "text-white"], ["id", "example-navbar-warning", 1, "lg:flex", "flex-grow", "items-center", "bg-white", "lg:bg-opacity-0", "lg:shadow-none", 3, "ngClass"], [1, "flex", "flex-col", "lg:flex-row", "list-none"], [1, "flex", "items-center"], ["translate", "", 1, "lg:text-blueGray-200", "text-blueGray-200", "text-lg", "leading-lg", "mr-2"]], template: function FormNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Form.title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Form.summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Form.serial_number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, !ctx.navbarOpen, ctx.navbarOpen));
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLW5hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "3IhM":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cards/card-page-visits/card-page-visits.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CardPageVisitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageVisitsComponent", function() { return CardPageVisitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardPageVisitsComponent {
    constructor() { }
    ngOnInit() { }
}
CardPageVisitsComponent.ɵfac = function CardPageVisitsComponent_Factory(t) { return new (t || CardPageVisitsComponent)(); };
CardPageVisitsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardPageVisitsComponent, selectors: [["app-card-page-visits"]], decls: 72, vars: 0, consts: [[1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-6", "shadow-lg", "rounded"], [1, "rounded-t", "mb-0", "px-4", "py-3", "border-0"], [1, "flex", "flex-wrap", "items-center"], [1, "relative", "w-full", "px-4", "max-w-full", "flex-grow", "flex-1"], [1, "font-semibold", "text-base", "text-blueGray-700"], [1, "relative", "w-full", "px-4", "max-w-full", "flex-grow", "flex-1", "text-right"], ["type", "button", 1, "bg-indigo-500", "text-white", "active:bg-indigo-600", "text-xs", "font-bold", "uppercase", "px-3", "py-1", "rounded", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all", "duration-150"], [1, "block", "w-full", "overflow-x-auto"], [1, "items-center", "w-full", "bg-transparent", "border-collapse"], [1, "px-6", "bg-blueGray-50", "text-blueGray-500", "align-middle", "border", "border-solid", "border-blueGray-100", "py-3", "text-xs", "uppercase", "border-l-0", "border-r-0", "whitespace-nowrap", "font-semibold", "text-left"], [1, "border-t-0", "px-6", "align-middle", "border-l-0", "border-r-0", "text-xs", "whitespace-nowrap", "p-4", "text-left"], [1, "border-t-0", "px-6", "align-middle", "border-l-0", "border-r-0", "text-xs", "whitespace-nowrap", "p-4"], [1, "fas", "fa-arrow-up", "text-emerald-500", "mr-4"], [1, "fas", "fa-arrow-down", "text-orange-500", "mr-4"], [1, "fas", "fa-arrow-down", "text-red-500", "mr-4"]], template: function CardPageVisitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " See all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Page name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Visitors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Unique users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Bounce rate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " /argon/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 4,569 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 340 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 46,53% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " /argon/index.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 3,985 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 319 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 46,53% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " /argon/charts.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 3,513 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 294 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 36,49% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " /argon/tables.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " 2,050 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 147 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " 50,87% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " /argon/profile.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " 1,795 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " 190 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " 46,53% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "4b2p":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbars/index-navbar/index-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: IndexNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexNavbarComponent", function() { return IndexNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






const _c0 = function () { return ["/"]; };
const _c1 = function (a0, a1) { return { hidden: a0, block: a1 }; };
class IndexNavbarComponent {
    constructor(translateConfigService) {
        this.translateConfigService = translateConfigService;
        this.navbarOpen = false;
        this.language = 'English';
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
    changeLanguage() {
        if (this.language == 'العربية') {
            this.translateConfigService.changeLanguage('ar');
            this.language = 'English';
        }
        else {
            this.translateConfigService.changeLanguage('en');
            this.language = 'العربية';
        }
    }
}
IndexNavbarComponent.ɵfac = function IndexNavbarComponent_Factory(t) { return new (t || IndexNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"])); };
IndexNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexNavbarComponent, selectors: [["app-index-navbar"]], decls: 27, vars: 8, consts: [[1, "top-0", "fixed", "z-50", "w-full", "flex", "flex-wrap", "items-center", "justify-between", "navbar-expand-lg", "bg-white", "shadow"], [1, ""], [3, "routerLink"], ["src", "static/assets/img/tawasol small logo.png", "width", "140px", "height", "40px"], [1, "container", "mx-auto", "flex", "flex-wrap", "items-center", "justify-between"], ["id", "example-navbar-warning", 1, "lg:flex", "flex-grow", "items-center", 3, "ngClass"], [1, "flex", "flex-col", "lg:flex-row", "list-none", "mr-auto"], [1, "flex", "flex-col", "lg:flex-row", "list-none", "lg:ml-auto", 2, "margin-right", "auto"], [1, "flex", "items-center"], [3, "click"], ["href", "", "target", "_blank", 1, "hover:text-blueGray-500", "text-blueGray-700", "px-3", "py-2", "flex", "items-center", "text-xs", "uppercase", "font-bold"], [1, "text-blueGray-400", "fab", "fa-facebook", "text-lg", "leading-lg"], [1, "lg:hidden", "inline-block", "ml-2"], [1, "text-blueGray-400", "fab", "fa-instagram", "text-lg", "leading-lg"], ["type", "button", 1, "bg-emerald-500", "text-white", "active:bg-emerald-500", "text-xs", "font-bold", "uppercase", "px-4", "py-2", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "lg:mr-1", "lg:mb-0", "ml-3", "mb-3", "ease-linear", "transition-all", "duration-150", 3, "routerLink"], ["translate", "", 1, "fas", "fa-arrow-alt-download"]], template: function IndexNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexNavbarComponent_Template_button_click_11_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tweet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "HOME.view_form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, !ctx.navbarOpen, ctx.navbarOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.language, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/auth/login");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"]], encapsulation: 2 });


/***/ }),

/***/ "90Li":
/*!************************************************************!*\
  !*** ./src/app/views/admin/settings/settings.component.ts ***!
  \************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/cards/card-settings/card-settings.component */ "vwLF");
/* harmony import */ var _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/cards/card-profile/card-profile.component */ "diaN");



class SettingsComponent {
    constructor() { }
    ngOnInit() { }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 5, vars: 0, consts: [[1, "flex", "flex-wrap"], [1, "w-full", "lg:w-8/12", "px-4"], [1, "w-full", "lg:w-4/12", "px-4"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-card-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_1__["CardSettingsComponent"], _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_2__["CardProfileComponent"]], encapsulation: 2 });


/***/ }),

/***/ "AiJS":
/*!************************************************!*\
  !*** ./src/app/views/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbars/index-navbar/index-navbar.component */ "4b2p");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/footers/footer/footer.component */ "1DoU");






const _c0 = function () { return ["/auth/register"]; };
class IndexComponent {
    constructor(translateConfigService) {
        this.translateConfigService = translateConfigService;
    }
    ngOnInit() { }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 74, vars: 2, consts: [[1, "header", "relative", "pt-16", "items-center", "flex", "h-screen", "max-h-300-px"], [1, "container", "mx-auto", "items-center", "flex", "flex-wrap"], [1, "w-auto", "md:w-8/12", "lg:w-6/12", "xl:w-6/12", "px-4", "flex", "flex-wrap"], [1, "pt-12", "sm:pt-0"], ["translate", "", 1, "font-semibold", "text-4xl", "text-blueGray-600"], ["translate", "", 1, "mt-4", "text-lg", "leading-relaxed", "text-blueGray-500"], [1, "mt-12"], ["translate", "", 1, "get-started", "text-white", "font-bold", "px-6", "py-4", "rounded", "outline-none", "focus:outline-none", "mr-1", "mb-1", "bg-emerald-500", "active:bg-bg-emerald-500", "uppercase", "text-sm", "shadow", "hover:shadow-lg", "ease-linear", "transition-all", "duration-150", 3, "routerLink"], [1, "w-full", "md:w-6/12", "mr-auto", "px-4", "pt-24", "md:pt-0", "flex", "flex-wrap", "mt-24"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/QVwOjzGRoYw", "frameborder", "0", "allowfullscreen", "", 2, "box-shadow", "4px 4px 14px #000"], [1, "container", "mx-auto", "px-4", "pb-32", "pt-48"], [1, "items-center", "flex", "flex-wrap"], [1, "w-auto", "md:w-8/12", "lg:w-6/12", "xl:w-6/12", "px-4"], ["translate", "", 1, "text-3xl", "font-semibold"], [1, "list-none", "mt-6"], [1, "py-2"], [1, "flex", "items-center"], [1, "text-xs", "font-semibold", "inline-block", "py-1", "px-2", "uppercase", "rounded-full", "text-blueGray-500", "bg-blueGray-50", "mr-3"], [1, "fas", "fa-fill"], ["translate", "", 1, "text-blueGray-500"], [1, "fas", "fa-check"], [1, "fa", "fa-print"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/PJgxL_-MwYA", "frameborder", "0", "allowfullscreen", "", 2, "box-shadow", "4px 4px 14px #000"], [1, "justify-center", "text-center", "flex", "flex-wrap", "mt-24"], [1, "w-full", "md:w-6/12", "px-12", "md:px-4"], [1, "font-semibold", "text-4xl"], [1, "text-lg", "leading-relaxed", "mt-4", "mb-4", "text-blueGray-500"], [1, "pb-16", "bg-blueGray-200", "relative", "pt-32"], [1, "-mt-20", "top-0", "bottom-auto", "left-0", "right-0", "w-full", "absolute", "h-20", 2, "transform", "translateZ(0)"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none", "version", "1.1", "viewBox", "0 0 2560 100", "x", "0", "y", "0", 1, "absolute", "bottom-0", "overflow-hidden"], ["points", "2560 0 2560 100 0 100", 1, "text-blueGray-200", "fill-current"], [1, "container", "mx-auto"], [1, "flex", "flex-wrap", "justify-center", "bg-white", "shadow-xl", "rounded-lg", "-mt-64", "py-16", "px-12", "relative", "z-10"], [1, "w-full", "text-center", "lg:w-8/12"], [1, "text-4xl", "text-center"], ["role", "img", "aria-label", "love"], ["translate", "", 1, "font-semibold", "text-3xl"], ["translate", "", 1, "text-blueGray-500", "text-lg", "leading-relaxed", "mt-4", "mb-4"], [1, "sm:block", "flex", "flex-col", "mt-10"], ["href", "", "target", "_blank", 1, "github-star", "sm:ml-1", "text-white", "font-bold", "px-6", "py-4", "rounded", "outline-none", "focus:outline-none", "mr-1", "mb-1", "bg-emerald-500", "active:bg-emerald-500", "uppercase", "text-sm", "shadow", "hover:shadow-lg", "ease-linear", "transition-all", "duration-150"], [1, "text-lg", "mr-1"], ["translate", ""], [1, "text-center", "mt-16"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-index-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " HOME.TITLE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " HOME.SUB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " HOME.get_started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Video.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Video.content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Video.step1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Video.step2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Video.step3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "iframe", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "polygon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "HOME.problem_title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " HOME.problem_body ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "HOME.send_mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_2__["IndexNavbarComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BdIN":
/*!***************************************************************!*\
  !*** ./src/app/views/auth/saved-data/saved-data.component.ts ***!
  \***************************************************************/
/*! exports provided: SavedDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedDataComponent", function() { return SavedDataComponent; });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-to-image */ "cLAn");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








const _c0 = ["register"];
function SavedDataComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Modal.delete_title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SavedDataComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.toggleModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Modal.delete_msg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SavedDataComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.toggleModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Modal.close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SavedDataComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Form.cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/");
} }
function SavedDataComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 35);
} }
class SavedDataComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.showModal = false;
    }
    toggleModal() {
        this.showModal = !this.showModal;
    }
    printComponent(cmpName) {
        let printContents = document.getElementById(cmpName).innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    downloadAsPDF() {
        var node = document.getElementById('register');
        var img;
        var filename;
        var newImage;
        dom_to_image__WEBPACK_IMPORTED_MODULE_1___default.a.toPng(node, { bgcolor: '#fff' })
            .then(function (dataUrl) {
            img = new Image();
            img.src = dataUrl;
            newImage = img.src;
            img.onload = function () {
                var pdfWidth = img.width;
                var pdfHeight = img.height;
                // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image
                var doc;
                if (pdfWidth > pdfHeight) {
                    doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]('l', 'px', [pdfWidth, pdfHeight]);
                }
                else {
                    doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'px', [pdfWidth, pdfHeight]);
                }
                var width = doc.internal.pageSize.getWidth();
                var height = doc.internal.pageSize.getHeight();
                doc.addImage(newImage, 'PNG', 10, 10, width, height);
                filename = 'mypdf_' + '.pdf';
                doc.save(filename);
            };
        })
            .catch(function (error) {
            // Error Handling
        });
    }
    delete() {
        this.http.delete('http://45.56.117.204:8000/api/Applicants/' + this.applicant.id + "/", {
            headers: { 'Authorization': 'Token 870d88a50b2847f998bcfb40bc072ff0e0af0ddf' }
        }).subscribe((data) => {
            console.log(data);
            this.router.navigateByUrl('');
        });
    }
    ngOnInit() {
        let data = history.state;
        this.code = data.code;
        this.applicant = data.data;
        console.log(this.applicant.id);
        this.applicant.nationalImg = "http://45.56.117.204:8000" + this.applicant.nationalImg;
        this.applicant.passportImg = "http://45.56.117.204:8000" + this.applicant.passportImg;
    }
}
SavedDataComponent.ɵfac = function SavedDataComponent_Factory(t) { return new (t || SavedDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SavedDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SavedDataComponent, selectors: [["app-saved-data"]], viewQuery: function SavedDataComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.register = _t.first);
    } }, decls: 128, vars: 18, consts: [["class", "overflow-x-hidden fixed z-50 outline-none focus:outline-none justify-center flex", "style", "width:100%; margin:0 auto;", 4, "ngIf"], ["class", "opacity-25 fixed inset-0 z-40 bg-black", 4, "ngIf"], [1, "mx-auto", 2, "width", "800px"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-blueGray-200", "border-0"], [1, "flex-auto", "px-4", "lg:px-10", "py-10", "pt-0"], ["translate", "", 1, "text-blueGray-700", "text-xl", "font-bold", "text-center"], ["id", "register"], ["register", ""], [1, "flex", "flex-wrap", "text-center"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "relative", "w-full", "mb-3"], ["htmlFor", "grid-password", "translate", "", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], ["htmlFor", "grid-password", "translate", "", 1, "block", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], [1, "mt-6", "border-b-1", "border-blueGray-300"], ["translate", "", 1, "text-blueGray-400", "text-sm", "mt-3", "mb-6", "px-4", "font-bold", "uppercase"], [1, "flex", "flex-wrap"], [1, "w-full", "lg:w-3/12", "px-4"], ["height", "200", "width", "150", 3, "src"], [1, "w-full", "lg:w-12/12", "px-4"], [1, "text-center", "flex", "justify-between"], [1, "w-full", "lg:w-4/12", "px-4"], ["type", "button", "translate", "", 1, "bg-emerald-500", "text-white", "active:bg-red-700", "text-sm", "font-bold", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"], ["type", "button", "translate", "", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"], ["type", "button", "translate", "", 1, "bg-red-600", "text-white", "active:bg-red-700", "text-sm", "font-bold", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"], [1, "overflow-x-hidden", "fixed", "z-50", "outline-none", "focus:outline-none", "justify-center", "flex", 2, "width", "100%", "margin", "0 auto"], [1, "relative", "w-auto", "max-w-sm"], [1, "border-0", "rounded-lg", "shadow-lg", "relative", "flex", "flex-col", "w-full", "bg-white", "outline-none", "focus:outline-none"], [1, "flex", "items-start", "justify-between", "p-5", "border-b", "border-solid", "border-blueGray-200", "rounded-t"], ["translate", "", 1, "text-3xl", "font-semibold"], [1, "p-1", "ml-auto", "bg-transparent", "border-0", "text-black", "opacity-5", "flex-auto", "text-3xl", "leading-none", "font-semibold", "outline-none", "focus:outline-none", 3, "click"], [1, "bg-transparent", "text-black", "opacity-5", "h-6", "w-6", "text-2xl", "block", "outline-none", "focus:outline-none"], [1, "relative", "p-6", "px-4", "flex-auto"], ["translate", "", 1, "my-4", "text-blueGray-500", "text-lg", "leading-relaxed"], ["type", "button", "translate", "", 1, "text-black", "background-transparent", "font-bold", "uppercase", "px-6", "py-2", "text-sm", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all", "duration-150", 3, "click"], ["type", "button", "translate", "", 1, "bg-red-600", "text-white", "active:bg-emerald-600", "font-bold", "uppercase", "text-sm", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all", "duration-150", 3, "routerLink", "click"], [1, "opacity-25", "fixed", "inset-0", "z-40", "bg-black"]], template: function SavedDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SavedDataComponent_div_0_Template, 17, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SavedDataComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Form.register-data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Form.id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Form.submission_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "hr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Form.register-data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Form.name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Form.destination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Form.purpose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Form.id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " Form.passport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Form.attach_national_copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " Form.attach_passport_copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " Form.attach_photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Form.attach_criminal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, " Form.phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " Form.email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " Form.address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " Form.city ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " Form.country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SavedDataComponent_Template_button_click_120_listener() { return ctx.printComponent("register"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " Form.print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SavedDataComponent_Template_button_click_123_listener() { return ctx.downloadAsPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, " Form.download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SavedDataComponent_Template_button_click_126_listener() { return ctx.toggleModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, " Form.cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.applicant.nationalID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.code.submissionID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.applicant.fullName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.applicant.destination, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.applicant.destination, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.applicant.nationalID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.applicant.passportID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.applicant.nationalImg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.applicant.passportImg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.applicant.passportImg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.applicant.passportImg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.applicant.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.applicant.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.applicant.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.applicant.city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.applicant.country, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlZC1kYXRhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "EC8z":
/*!*******************************************************!*\
  !*** ./src/app/services/applicant-service.service.ts ***!
  \*******************************************************/
/*! exports provided: ApplicantServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantServiceService", function() { return ApplicantServiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ApplicantServiceService {
    constructor(_http) {
        this._http = _http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        this.myAppUrl = 'http://127.0.0.1:8000/';
        this.myApiUrl = 'api/Applicants/';
    }
    getApplicant() {
        return this._http.get(this.myAppUrl + this.myApiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1));
    }
    addApplicant(Applicant) {
        return this._http.post(this.myAppUrl + this.myApiUrl, JSON.stringify(Applicant), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1));
    }
    getApplicantId(ApplicantId) {
        return this._http.get(this.myAppUrl + this.myApiUrl + ApplicantId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1));
    }
    editApplicant(ApplicantId, Applicant) {
        return this._http.put(this.myAppUrl + this.myApiUrl + ApplicantId, JSON.stringify(Applicant), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1));
    }
    deleteApplicant(ApplicantId) {
        return this._http.delete(this.myAppUrl + this.myApiUrl + ApplicantId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1));
    }
}
ApplicantServiceService.ɵfac = function ApplicantServiceService_Factory(t) { return new (t || ApplicantServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ApplicantServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApplicantServiceService, factory: ApplicantServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Hp7s":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbars/login-navbar/login-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: LoginNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginNavbarComponent", function() { return LoginNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginNavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginNavbarComponent.ɵfac = function LoginNavbarComponent_Factory(t) { return new (t || LoginNavbarComponent)(); };
LoginNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginNavbarComponent, selectors: [["app-login-navbar"]], decls: 2, vars: 0, template: function LoginNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login-navbar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "J87Q":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/card-stats/card-stats.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStatsComponent", function() { return CardStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");



const _c0 = function (a0) { return [a0]; };
class CardStatsComponent {
    constructor() {
        this._statSubtitle = "Traffic";
        this._statTitle = "350,897";
        this._statArrow = "up";
        this._statPercent = "3.48";
        this._statPercentColor = "text-emerald-500";
        this._statDescripiron = "Since last month";
        this._statIconName = "far fa-chart-bar";
        this._statIconColor = "bg-red-500";
    }
    get statSubtitle() {
        return this._statSubtitle;
    }
    set statSubtitle(statSubtitle) {
        this._statSubtitle = statSubtitle === undefined ? "Traffic" : statSubtitle;
    }
    get statTitle() {
        return this._statTitle;
    }
    set statTitle(statTitle) {
        this._statTitle = statTitle === undefined ? "350,897" : statTitle;
    }
    // The value must match one of up or down
    get statArrow() {
        return this._statArrow;
    }
    set statArrow(statArrow) {
        this._statArrow =
            statArrow !== "down" && statArrow !== "up" ? "up" : statArrow;
    }
    get statPercent() {
        return this._statPercent;
    }
    set statPercent(statPercent) {
        this._statPercent = statPercent === undefined ? "3.48" : statPercent;
    }
    // can be any of the text color utilities
    // from tailwindcss
    get statPercentColor() {
        return this._statPercentColor;
    }
    set statPercentColor(statPercentColor) {
        this._statPercentColor =
            statPercentColor === undefined ? "text-emerald-500" : statPercentColor;
    }
    get statDescripiron() {
        return this._statDescripiron;
    }
    set statDescripiron(statDescripiron) {
        this._statDescripiron =
            statDescripiron === undefined ? "Since last month" : statDescripiron;
    }
    get statIconName() {
        return this._statIconName;
    }
    set statIconName(statIconName) {
        this._statIconName =
            statIconName === undefined ? "far fa-chart-bar" : statIconName;
    }
    // can be any of the background color utilities
    // from tailwindcss
    get statIconColor() {
        return this._statIconColor;
    }
    set statIconColor(statIconColor) {
        this._statIconColor =
            statIconColor === undefined ? "bg-red-500" : statIconColor;
    }
    ngOnInit() { }
}
CardStatsComponent.ɵfac = function CardStatsComponent_Factory(t) { return new (t || CardStatsComponent)(); };
CardStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardStatsComponent, selectors: [["app-card-stats"]], inputs: { statSubtitle: "statSubtitle", statTitle: "statTitle", statArrow: "statArrow", statPercent: "statPercent", statPercentColor: "statPercentColor", statDescripiron: "statDescripiron", statIconName: "statIconName", statIconColor: "statIconColor" }, decls: 17, vars: 10, consts: [[1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "rounded", "mb-6", "xl:mb-0", "shadow-lg"], [1, "flex-auto", "p-4"], [1, "flex", "flex-wrap"], [1, "relative", "w-full", "pr-4", "max-w-full", "flex-grow", "flex-1"], [1, "text-blueGray-400", "uppercase", "font-bold", "text-xs"], [1, "font-semibold", "text-xl", "text-blueGray-700"], [1, "relative", "w-auto", "pl-4", "flex-initial"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "shadow-lg", "rounded-full", 3, "ngClass"], [3, "ngClass"], [1, "text-sm", "text-blueGray-400", "mt-4"], [1, "mr-2", 3, "ngClass"], [1, "whitespace-nowrap"]], template: function CardStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.statSubtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.statTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.statIconColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.statIconName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.statPercentColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.statArrow === "up" ? "fas fa-arrow-up" : "fas fa-arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.statPercent, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statDescripiron);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"]], encapsulation: 2 });


/***/ }),

/***/ "J8Ne":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/index-dropdown/index-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IndexDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexDropdownComponent", function() { return IndexDropdownComponent; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "EjV/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["btnDropdownRef"];
const _c1 = ["popoverDropdownRef"];
const _c2 = function () { return ["/admin/dashboard"]; };
const _c3 = function () { return ["/admin/settings"]; };
const _c4 = function () { return ["/admin/tables"]; };
const _c5 = function () { return ["/admin/maps"]; };
const _c6 = function () { return ["/auth/login"]; };
const _c7 = function () { return ["/auth/register"]; };
const _c8 = function () { return ["/landing"]; };
const _c9 = function () { return ["/profile"]; };
class IndexDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngOnInit() { }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
            this.createPoppper();
        }
    }
    createPoppper() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
}
IndexDropdownComponent.ɵfac = function IndexDropdownComponent_Factory(t) { return new (t || IndexDropdownComponent)(); };
IndexDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexDropdownComponent, selectors: [["app-index-dropdown"]], viewQuery: function IndexDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.btnDropdownRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popoverDropdownRef = _t.first);
    } }, decls: 29, vars: 17, consts: [["href", "#pablo", 1, "hover:text-blueGray-500", "text-blueGray-700", "px-3", "py-2", "flex", "items-center", "text-xs", "uppercase", "font-bold", 3, "click"], ["btnDropdownRef", ""], [1, "bg-white", "text-base", "z-50", "float-left", "py-2", "list-none", "text-left", "rounded", "shadow-lg", "min-w-48", 3, "ngClass"], ["popoverDropdownRef", ""], [1, "text-sm", "pt-2", "pb-0", "px-4", "font-bold", "block", "w-full", "whitespace-nowrap", "bg-transparent", "text-blueGray-400"], [1, "text-sm", "py-2", "px-4", "font-normal", "block", "w-full", "whitespace-nowrap", "bg-transparent", "text-blueGray-700", 3, "routerLink"], [1, "h-0", "mx-4", "my-2", "border", "border-solid", "border-blueGray-100"]], template: function IndexDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexDropdownComponent_Template_a_click_0_listener($event) { return ctx.toggleDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Demo Pages\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Admin Layout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Tables ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Maps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Auth Layout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " No Layout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.dropdownPopoverShow ? "block" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c9));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "LN9C":
/*!***********************************************************!*\
  !*** ./src/app/views/auth/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core */ "EjV/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var src_app_services_applicant_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/applicant-service.service */ "EC8z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_navbars_form_navbar_form_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/navbars/form-navbar/form-navbar.component */ "1ovs");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











const _c0 = ["btnRef"];
function RegisterComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error.name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error.nationalId");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error.passportId");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error.nationalImg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Form.uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error.passportImg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Form.uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_img_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r8.nationalURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RegisterComponent_img_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r9.passportURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RegisterComponent_span_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error.photoImg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Form.uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error.criminalImg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Form.uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_img_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r14.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RegisterComponent_img_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r15.criminalURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RegisterComponent_span_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error.phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error.email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Error.address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(datepipe, translate, applicantService, avRoute, router, http) {
        this.datepipe = datepipe;
        this.translate = translate;
        this.applicantService = applicantService;
        this.avRoute = avRoute;
        this.router = router;
        this.http = http;
        this.register = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            nationalImg: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            passportImg: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            photoImg: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            criminalImg: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            nationalId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            passportId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]()
        });
        this.fileName = this.translate.translateWord();
        this.national = this.translate.translateWord();
        this.photoMsq = this.translate.translateWord();
        this.criminalMsq = this.translate.translateWord();
        this.error = '';
        this.popper = document.createElement("div");
        this.popper2 = document.createElement("div");
        this.popper3 = document.createElement("div");
        this.popoverShow = false;
        this.popoverShow1 = false;
        this.popoverShow2 = false;
        this.countries = [
            { "name": "Afghanistan", "code": "AF" },
            { "name": "land Islands", "code": "AX" },
            { "name": "Albania", "code": "AL" },
            { "name": "Algeria", "code": "DZ" },
            { "name": "American Samoa", "code": "AS" },
            { "name": "AndorrA", "code": "AD" },
            { "name": "Angola", "code": "AO" },
            { "name": "Anguilla", "code": "AI" },
            { "name": "Antarctica", "code": "AQ" },
            { "name": "Antigua and Barbuda", "code": "AG" },
            { "name": "Argentina", "code": "AR" },
            { "name": "Armenia", "code": "AM" },
            { "name": "Aruba", "code": "AW" },
            { "name": "Australia", "code": "AU" },
            { "name": "Austria", "code": "AT" },
            { "name": "Azerbaijan", "code": "AZ" },
            { "name": "Bahamas", "code": "BS" },
            { "name": "Bahrain", "code": "BH" },
            { "name": "Bangladesh", "code": "BD" },
            { "name": "Barbados", "code": "BB" },
            { "name": "Belarus", "code": "BY" },
            { "name": "Belgium", "code": "BE" },
            { "name": "Belize", "code": "BZ" },
            { "name": "Benin", "code": "BJ" },
            { "name": "Bermuda", "code": "BM" },
            { "name": "Bhutan", "code": "BT" },
            { "name": "Bolivia", "code": "BO" },
            { "name": "Bosnia and Herzegovina", "code": "BA" },
            { "name": "Botswana", "code": "BW" },
            { "name": "Bouvet Island", "code": "BV" },
            { "name": "Brazil", "code": "BR" },
            { "name": "British Indian Ocean Territory", "code": "IO" },
            { "name": "Brunei Darussalam", "code": "BN" },
            { "name": "Bulgaria", "code": "BG" },
            { "name": "Burkina Faso", "code": "BF" },
            { "name": "Burundi", "code": "BI" },
            { "name": "Cambodia", "code": "KH" },
            { "name": "Cameroon", "code": "CM" },
            { "name": "Canada", "code": "CA" },
            { "name": "Cape Verde", "code": "CV" },
            { "name": "Cayman Islands", "code": "KY" },
            { "name": "Central African Republic", "code": "CF" },
            { "name": "Chad", "code": "TD" },
            { "name": "Chile", "code": "CL" },
            { "name": "China", "code": "CN" },
            { "name": "Christmas Island", "code": "CX" },
            { "name": "Cocos (Keeling) Islands", "code": "CC" },
            { "name": "Colombia", "code": "CO" },
            { "name": "Comoros", "code": "KM" },
            { "name": "Congo", "code": "CG" },
            { "name": "Congo, The Democratic Republic of the", "code": "CD" },
            { "name": "Cook Islands", "code": "CK" },
            { "name": "Costa Rica", "code": "CR" },
            { "name": "Cote DIvoire", "code": "CI" },
            { "name": "Croatia", "code": "HR" },
            { "name": "Cuba", "code": "CU" },
            { "name": "Cyprus", "code": "CY" },
            { "name": "Czech Republic", "code": "CZ" },
            { "name": "Denmark", "code": "DK" },
            { "name": "Djibouti", "code": "DJ" },
            { "name": "Dominica", "code": "DM" },
            { "name": "Dominican Republic", "code": "DO" },
            { "name": "Ecuador", "code": "EC" },
            { "name": "Egypt", "code": "EG" },
            { "name": "El Salvador", "code": "SV" },
            { "name": "Equatorial Guinea", "code": "GQ" },
            { "name": "Eritrea", "code": "ER" },
            { "name": "Estonia", "code": "EE" },
            { "name": "Ethiopia", "code": "ET" },
            { "name": "Falkland Islands (Malvinas)", "code": "FK" },
            { "name": "Faroe Islands", "code": "FO" },
            { "name": "Fiji", "code": "FJ" },
            { "name": "Finland", "code": "FI" },
            { "name": "France", "code": "FR" },
            { "name": "French Guiana", "code": "GF" },
            { "name": "French Polynesia", "code": "PF" },
            { "name": "French Southern Territories", "code": "TF" },
            { "name": "Gabon", "code": "GA" },
            { "name": "Gambia", "code": "GM" },
            { "name": "Georgia", "code": "GE" },
            { "name": "Germany", "code": "DE" },
            { "name": "Ghana", "code": "GH" },
            { "name": "Gibraltar", "code": "GI" },
            { "name": "Greece", "code": "GR" },
            { "name": "Greenland", "code": "GL" },
            { "name": "Grenada", "code": "GD" },
            { "name": "Guadeloupe", "code": "GP" },
            { "name": "Guam", "code": "GU" },
            { "name": "Guatemala", "code": "GT" },
            { "name": "Guernsey", "code": "GG" },
            { "name": "Guinea", "code": "GN" },
            { "name": "Guinea-Bissau", "code": "GW" },
            { "name": "Guyana", "code": "GY" },
            { "name": "Haiti", "code": "HT" },
            { "name": "Heard Island and Mcdonald Islands", "code": "HM" },
            { "name": "Holy See (Vatican City State)", "code": "VA" },
            { "name": "Honduras", "code": "HN" },
            { "name": "Hong Kong", "code": "HK" },
            { "name": "Hungary", "code": "HU" },
            { "name": "Iceland", "code": "IS" },
            { "name": "India", "code": "IN" },
            { "name": "Indonesia", "code": "ID" },
            { "name": "Iran, Islamic Republic Of", "code": "IR" },
            { "name": "Iraq", "code": "IQ" },
            { "name": "Ireland", "code": "IE" },
            { "name": "Isle of Man", "code": "IM" },
            { "name": "Israel", "code": "IL" },
            { "name": "Italy", "code": "IT" },
            { "name": "Jamaica", "code": "JM" },
            { "name": "Japan", "code": "JP" },
            { "name": "Jersey", "code": "JE" },
            { "name": "Jordan", "code": "JO" },
            { "name": "Kazakhstan", "code": "KZ" },
            { "name": "Kenya", "code": "KE" },
            { "name": "Kiribati", "code": "KI" },
            { "name": "Korea, Democratic People'S Republic of", "code": "KP" },
            { "name": "Korea, Republic of", "code": "KR" },
            { "name": "Kuwait", "code": "KW" },
            { "name": "Kyrgyzstan", "code": "KG" },
            { "name": "Lao People'S Democratic Republic", "code": "LA" },
            { "name": "Latvia", "code": "LV" },
            { "name": "Lebanon", "code": "LB" },
            { "name": "Lesotho", "code": "LS" },
            { "name": "Liberia", "code": "LR" },
            { "name": "Libyan Arab Jamahiriya", "code": "LY" },
            { "name": "Liechtenstein", "code": "LI" },
            { "name": "Lithuania", "code": "LT" },
            { "name": "Luxembourg", "code": "LU" },
            { "name": "Macao", "code": "MO" },
            { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" },
            { "name": "Madagascar", "code": "MG" },
            { "name": "Malawi", "code": "MW" },
            { "name": "Malaysia", "code": "MY" },
            { "name": "Maldives", "code": "MV" },
            { "name": "Mali", "code": "ML" },
            { "name": "Malta", "code": "MT" },
            { "name": "Marshall Islands", "code": "MH" },
            { "name": "Martinique", "code": "MQ" },
            { "name": "Mauritania", "code": "MR" },
            { "name": "Mauritius", "code": "MU" },
            { "name": "Mayotte", "code": "YT" },
            { "name": "Mexico", "code": "MX" },
            { "name": "Micronesia, Federated States of", "code": "FM" },
            { "name": "Moldova, Republic of", "code": "MD" },
            { "name": "Monaco", "code": "MC" },
            { "name": "Mongolia", "code": "MN" },
            { "name": "Montenegro", "code": "ME" },
            { "name": "Montserrat", "code": "MS" },
            { "name": "Morocco", "code": "MA" },
            { "name": "Mozambique", "code": "MZ" },
            { "name": "Myanmar", "code": "MM" },
            { "name": "Namibia", "code": "NA" },
            { "name": "Nauru", "code": "NR" },
            { "name": "Nepal", "code": "NP" },
            { "name": "Netherlands", "code": "NL" },
            { "name": "Netherlands Antilles", "code": "AN" },
            { "name": "New Caledonia", "code": "NC" },
            { "name": "New Zealand", "code": "NZ" },
            { "name": "Nicaragua", "code": "NI" },
            { "name": "Niger", "code": "NE" },
            { "name": "Nigeria", "code": "NG" },
            { "name": "Niue", "code": "NU" },
            { "name": "Norfolk Island", "code": "NF" },
            { "name": "Northern Mariana Islands", "code": "MP" },
            { "name": "Norway", "code": "NO" },
            { "name": "Oman", "code": "OM" },
            { "name": "Pakistan", "code": "PK" },
            { "name": "Palau", "code": "PW" },
            { "name": "Palestinian Territory, Occupied", "code": "PS" },
            { "name": "Panama", "code": "PA" },
            { "name": "Papua New Guinea", "code": "PG" },
            { "name": "Paraguay", "code": "PY" },
            { "name": "Peru", "code": "PE" },
            { "name": "Philippines", "code": "PH" },
            { "name": "Pitcairn", "code": "PN" },
            { "name": "Poland", "code": "PL" },
            { "name": "Portugal", "code": "PT" },
            { "name": "Puerto Rico", "code": "PR" },
            { "name": "Qatar", "code": "QA" },
            { "name": "Reunion", "code": "RE" },
            { "name": "Romania", "code": "RO" },
            { "name": "Russian Federation", "code": "RU" },
            { "name": "RWANDA", "code": "RW" },
            { "name": "Saint Helena", "code": "SH" },
            { "name": "Saint Kitts and Nevis", "code": "KN" },
            { "name": "Saint Lucia", "code": "LC" },
            { "name": "Saint Pierre and Miquelon", "code": "PM" },
            { "name": "Saint Vincent and the Grenadines", "code": "VC" },
            { "name": "Samoa", "code": "WS" },
            { "name": "San Marino", "code": "SM" },
            { "name": "Sao Tome and Principe", "code": "ST" },
            { "name": "Saudi Arabia", "code": "SA" },
            { "name": "Senegal", "code": "SN" },
            { "name": "Serbia", "code": "RS" },
            { "name": "Seychelles", "code": "SC" },
            { "name": "Sierra Leone", "code": "SL" },
            { "name": "Singapore", "code": "SG" },
            { "name": "Slovakia", "code": "SK" },
            { "name": "Slovenia", "code": "SI" },
            { "name": "Solomon Islands", "code": "SB" },
            { "name": "Somalia", "code": "SO" },
            { "name": "South Africa", "code": "ZA" },
            { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
            { "name": "Spain", "code": "ES" },
            { "name": "Sri Lanka", "code": "LK" },
            { "name": "Sudan", "code": "SD" },
            { "name": "Suriname", "code": "SR" },
            { "name": "Svalbard and Jan Mayen", "code": "SJ" },
            { "name": "Swaziland", "code": "SZ" },
            { "name": "Sweden", "code": "SE" },
            { "name": "Switzerland", "code": "CH" },
            { "name": "Syrian Arab Republic", "code": "SY" },
            { "name": "Taiwan, Province of China", "code": "TW" },
            { "name": "Tajikistan", "code": "TJ" },
            { "name": "Tanzania, United Republic of", "code": "TZ" },
            { "name": "Thailand", "code": "TH" },
            { "name": "Timor-Leste", "code": "TL" },
            { "name": "Togo", "code": "TG" },
            { "name": "Tokelau", "code": "TK" },
            { "name": "Tonga", "code": "TO" },
            { "name": "Trinidad and Tobago", "code": "TT" },
            { "name": "Tunisia", "code": "TN" },
            { "name": "Turkey", "code": "TR" },
            { "name": "Turkmenistan", "code": "TM" },
            { "name": "Turks and Caicos Islands", "code": "TC" },
            { "name": "Tuvalu", "code": "TV" },
            { "name": "Uganda", "code": "UG" },
            { "name": "Ukraine", "code": "UA" },
            { "name": "United Arab Emirates", "code": "AE" },
            { "name": "United Kingdom", "code": "GB" },
            { "name": "United States", "code": "US" },
            { "name": "United States Minor Outlying Islands", "code": "UM" },
            { "name": "Uruguay", "code": "UY" },
            { "name": "Uzbekistan", "code": "UZ" },
            { "name": "Vanuatu", "code": "VU" },
            { "name": "Venezuela", "code": "VE" },
            { "name": "Viet Nam", "code": "VN" },
            { "name": "Virgin Islands, British", "code": "VG" },
            { "name": "Virgin Islands, U.S.", "code": "VI" },
            { "name": "Wallis and Futuna", "code": "WF" },
            { "name": "Western Sahara", "code": "EH" },
            { "name": "Yemen", "code": "YE" },
            { "name": "Zambia", "code": "ZM" },
            { "name": "Zimbabwe", "code": "ZW" }
        ];
    }
    get name() { return this.register.get('name'); }
    ;
    get destination() { return this.register.get('destination'); }
    get purpose() { return this.register.get('purpose'); }
    get nationalImg() { return this.register.get('nationalImg'); }
    ;
    get passportImg() { return this.register.get('passportImg'); }
    ;
    get photoImg() { return this.register.get('photoImg'); }
    ;
    get criminalImg() { return this.register.get('criminalImg'); }
    ;
    get nationalId() { return this.register.get('nationalId'); }
    get passportId() { return this.register.get('passportId'); }
    get address() { return this.register.get('address'); }
    get phone() { return this.register.get('phone'); }
    get email() { return this.register.get('email'); }
    get city() { return this.register.get('city'); }
    get country() { return this.register.get('country'); }
    postData() {
        console.log(this.datepipe.transform(Date(), 'YYYY-MM-dd HH:MM:SS'));
        if (this.register.valid) {
            let applicant = {
                fullName: this.register.get("name").value,
                purpose: this.register.get("purpose").value,
                destination: this.register.get("destination").value,
                nationalID: this.register.get("nationalId").value,
                passportID: this.register.get("passportId").value,
                nationalImg: this.nationalFile,
                passportImg: this.passportFile,
                photoImg: this.photoFile,
                criminalImg: this.criminalFile,
                phone: this.register.get("phone").value,
                email: this.register.get("email").value,
                address: this.register.get("address").value,
                city: this.register.get("city").value,
                country: this.register.get("country").value,
                status: false,
                date: this.datepipe.transform(Date(), 'YYYY-MM-dd HH:MM:SS'),
                submissionID: ''
            };
            this.router.navigateByUrl('/auth/view-data', { state: applicant });
        }
        else {
            this.error = this.translate.error("form");
        }
    }
    onFileSelected(event) {
        if (event.target.files.length > 0) {
            this.national = '';
            this.nationalBtn = event.target.files[0].name;
            this.nationalFile = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (_event) => {
                this.nationalURL = reader.result;
            };
        }
    }
    onPhotoChange(event) {
        if (event.target.files.length > 0) {
            this.photoFile = event.target.files[0];
            this.photoMsq = '';
            this.photoBtn = event.target.files[0].name;
            var reader = new FileReader();
            reader.readAsDataURL(this.photoFile);
            reader.onload = (_event) => {
                this.photoURL = reader.result;
                console.log("jjj");
                console.log(this.photoURL);
            };
        }
    }
    onCriminalChange(event) {
        if (event.target.files.length > 0) {
            this.criminalFile = event.target.files[0];
            this.criminalMsq = '';
            this.criminalBtn = event.target.files[0].name;
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (_event) => {
                this.criminalURL = reader.result;
            };
        }
    }
    onChange(event) {
        if (event.target.files.length > 0) {
            this.passportFile = event.target.files[0];
            this.fileName = '';
            this.passBtn = event.target.files[0].name;
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (_event) => {
                this.passportURL = reader.result;
            };
        }
    }
    toggleTooltip(type) {
        if (type == "name") {
            if (this.popoverShow) {
                this.popoverShow = false;
                this.destroyPopper(this.popper);
            }
            else {
                this.popoverShow = true;
                this.createPoppper(this.popper);
            }
        }
        else if (type == "national") {
            if (this.popoverShow1) {
                this.popoverShow1 = false;
                this.destroyPopper(this.popper2);
            }
            else {
                this.popoverShow1 = true;
                this.createPoppper(this.popper2);
            }
        }
        else {
            if (this.popoverShow2) {
                this.popoverShow2 = false;
                this.destroyPopper(this.popper3);
            }
            else {
                this.popoverShow2 = true;
                this.createPoppper(this.popper3);
            }
        }
    }
    destroyPopper(popper) {
        popper.parentNode.removeChild(popper);
    }
    createPoppper(popper) {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_1__["createPopper"])(this.btnRef.nativeElement, popper, {
            placement: "left"
        });
        this.btnRef.nativeElement.parentNode.insertBefore(popper, this.btnRef.nativeElement.nextSibling);
    }
    toggleTooltip1() {
        if (this.popoverShow1) {
            this.popoverShow1 = false;
            this.destroyPopper1();
        }
        else {
            this.popoverShow1 = true;
            this.createPoppper1();
        }
    }
    destroyPopper1() {
        this.popper2.parentNode.removeChild(this.popper2);
    }
    createPoppper1() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_1__["createPopper"])(this.btnRef.nativeElement, this.popper2, {
            placement: "left"
        });
        this.btnRef.nativeElement.parentNode.insertBefore(this.popper2, this.btnRef.nativeElement.nextSibling);
    }
    ngOnInit() {
        this.popper.innerHTML = `<div class="bg-blueGray-600 font-normal" style="
     width: 300%;">
  <div>
    <div class="text-white p-3">
      يجب ادخال الاسم بالكامل.
    </div>
  </div>
</div>`;
        this.popper2.innerHTML = `<div class="bg-blueGray-600 font-normal" style="
     width: 300%;">
  <div>
    <div class="text-white p-3">
    يجب ادخال الرقم القومى المكون من 14 رقم.
    </div>
  </div>
</div>`;
        this.popper3.innerHTML = `<div class="bg-blueGray-600 font-normal" style="
     width: 300%;">
  <div>
    <div class="text-white p-3">
    يجب ادخال رقم جواز السفر المكون من 9 ارقام.
    </div>
  </div>
</div>`;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_4__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_applicant_service_service__WEBPACK_IMPORTED_MODULE_5__["ApplicantServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], viewQuery: function RegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.btnRef = _t.first);
    } }, decls: 191, vars: 107, consts: [[1, "mx-auto", 2, "width", "800px"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-blueGray-100", "border-0"], [1, "rounded-t", "bg-blueGray-600", "mb-0", "px-6", "py-6"], [1, "text-center", "flex", "justify-between"], [1, "flex-auto", "px-4", "lg:px-10", "py-10", "pt-0"], ["translate", "", 1, "text-blueGray-700", "text-xl", "font-bold", "text-center"], [3, "formGroup"], ["translate", "", 1, "text-blueGray-400", "text-sm", "mt-3", "mb-6", "font-bold", "uppercase"], [1, "flex", "flex-wrap"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "relative", "w-full", "mb-3"], ["htmlFor", "grid-password", "translate", "", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], [1, "z-10", "h-full", "leading-snug", "font-normal", "absolute", "text-center", "text-blueGray-300", "absolute", "bg-transparent", "rounded", "text-base", "items-center", "justify-center", "w-8", "py-3", 2, "margin-right", "90%"], ["type", "text", "formControlName", "name", "required", "", "maxlength", "100", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], [1, "fas", "fa-info-circle", 3, "mouseenter", "mouseleave"], ["style", "color: red;", "translate", "", 4, "ngIf"], [1, "w-full", "lg:w-3/12", "px-4"], ["formControlName", "destination", 1, "border-0", "px-5", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], [3, "label"], [3, "value"], ["formControlName", "purpose", 1, "border-0", "px-5", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], ["type", "text", "formControlName", "nationalId", "required", "", "minlength", "14", "maxlength", "14", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], ["btnRef", ""], ["type", "text", "formControlName", "passportId", "required", "", "minlength", "9", "maxlength", "9", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], [1, "mt-6", "border-b-1", "border-blueGray-300"], [1, "w-full", "lg:w-6/12", "px-1"], ["type", "button", "id", "loadFileXml", "onclick", "document.getElementById('file').click();", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "file", "id", "file", "name", "file", "formControlName", "nationalImg", 2, "display", "none", 3, "change"], ["class", "block uppercase text-blueGray-600 text-xs py-3 font-bold mb-2", "translate", "", 4, "ngIf"], ["type", "button", "id", "loadFileXml", "onclick", "document.getElementById('file1').click();", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "file", "id", "file1", "name", "file1", "formControlName", "passportImg", 2, "display", "none", 3, "change"], [2, "width", "52%", "height", "50%"], ["style", "display: block;\n              margin-left: auto;\n              margin-right: auto;", 3, "src", 4, "ngIf"], ["style", "display: block;\n                  margin-left: auto;\n                  margin-right: auto;", 3, "src", 4, "ngIf"], ["type", "button", "id", "loadFileXml", "onclick", "document.getElementById('file3').click();", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "file", "id", "file3", "name", "file3", "formControlName", "photoImg", 2, "display", "none", 3, "change"], ["type", "button", "id", "loadFileXml", "onclick", "document.getElementById('file4').click();", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "file", "id", "file4", "name", "file4", "formControlName", "criminalImg", 2, "display", "none", 3, "change"], ["type", "text", "formControlName", "phone", "required", "", "minlength", "12", "maxlength", "12", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "email", "formControlName", "email", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], [1, "w-full", "lg:w-12/12", "px-4"], ["type", "text", "formControlName", "address", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], ["formControlName", "city", 1, "border-0", "px-5", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], ["formControlName", "country", 1, "border-0", "px-5", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], [1, "w-full", "lg:w-4/12", "px-4"], ["type", "button", "translate", "", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"], [2, "color", "red"], ["translate", "", 2, "color", "red"], ["translate", "", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "py-3", "font-bold", "mb-2"], [2, "display", "block", "margin-left", "auto", "margin-right", "auto", 3, "src"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-form-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Form.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Form.personal_info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Form.name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function RegisterComponent_Template_i_mouseenter_24_listener() { return ctx.toggleTooltip("name"); })("mouseleave", function RegisterComponent_Template_i_mouseleave_24_listener() { return ctx.toggleTooltip("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, RegisterComponent_span_25_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Form.destination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "optgroup", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Form.purpose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "optgroup", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " Form.id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "i", 14, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function RegisterComponent_Template_i_mouseenter_60_listener() { return ctx.toggleTooltip("national"); })("mouseleave", function RegisterComponent_Template_i_mouseleave_60_listener() { return ctx.toggleTooltip("national"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, RegisterComponent_span_62_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " Form.passport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function RegisterComponent_Template_i_mouseenter_71_listener() { return ctx.toggleTooltip("passport"); })("mouseleave", function RegisterComponent_Template_i_mouseleave_71_listener() { return ctx.toggleTooltip("passport"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, RegisterComponent_span_72_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "hr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " Form.attachment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Form.attach_national ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_85_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, RegisterComponent_span_86_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](88, RegisterComponent_label_88_Template, 2, 0, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " Form.attach_passport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_97_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](98, RegisterComponent_span_98_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](100, RegisterComponent_label_100_Template, 2, 0, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](103, RegisterComponent_img_103_Template, 1, 1, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, RegisterComponent_img_106_Template, 1, 1, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " Form.photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_115_listener($event) { return ctx.onPhotoChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, RegisterComponent_span_116_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](118, RegisterComponent_label_118_Template, 2, 0, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, " Form.criminal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](126, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_127_listener($event) { return ctx.onCriminalChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](128, RegisterComponent_span_128_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](130, RegisterComponent_label_130_Template, 2, 0, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](133, RegisterComponent_img_133_Template, 1, 1, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](136, RegisterComponent_img_136_Template, 1, 1, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "hr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, " Form.contact_info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, " Form.phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](146, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](147, RegisterComponent_span_147_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, " Form.email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](153, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](154, RegisterComponent_span_154_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, " Form.address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](161, RegisterComponent_span_161_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, " Form.city ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "optgroup", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](168, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](172, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, " Form.country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "select", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "optgroup", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](179, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](181, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](183, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_187_listener() { return ctx.postData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, " Form.save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 53, "Form.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 55, "Form.icon"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.name.invalid && ctx.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 57, "Select.destination"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 59, "Select.libya"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 61, "Select.libya"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 63, "Select.travel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 65, "Select.away"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 67, "Select.away"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 69, "Select.home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 71, "Select.home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 73, "Form.id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](59, 75, "Form.icon"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nationalId.invalid && ctx.nationalId.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](68, 77, "Form.passport"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 79, "Form.icon"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passportId.invalid && ctx.passportId.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](84, 81, "Form.file"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nationalImg.invalid && ctx.nationalImg.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.national != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](96, 83, "Form.file"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passportImg.invalid && ctx.passportImg.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fileName != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nationalURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passportURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](114, 85, "Form.file"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.photoImg.invalid && ctx.photoImg.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.photoMsq != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](126, 87, "Form.file"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.criminalImg.invalid && ctx.criminalImg.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.criminalMsq != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.photoURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.criminalURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](146, 89, "Form.code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.phone.invalid && ctx.phone.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](153, 91, "Form.Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](160, 93, "Form.address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.address.invalid && ctx.address.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](168, 95, "Select.city"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](170, 97, "Select.cairo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](172, 99, "Select.cairo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](179, 101, "Select.country"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](181, 103, "Select.egypt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](183, 105, "Select.egypt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
    } }, directives: [_components_navbars_form_navbar_form_navbar_component__WEBPACK_IMPORTED_MODULE_8__["FormNavbarComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "R+tk":
/*!**************************************************!*\
  !*** ./src/app/layouts/admin/admin.component.ts ***!
  \**************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbars/admin-navbar/admin-navbar.component */ "Xodl");
/* harmony import */ var _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/headers/header-stats/header-stats.component */ "RLAj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/footers/footer-admin/footer-admin.component */ "UIMn");






class AdminComponent {
    constructor() { }
    ngOnInit() { }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 8, vars: 0, consts: [[1, "relative", "md:ml-64", "bg-blueGray-100"], [1, "px-4", "md:px-10", "mx-auto", "w-full", "-m-24"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-admin-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header-stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_2__["AdminNavbarComponent"], _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_3__["HeaderStatsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_5__["FooterAdminComponent"]], encapsulation: 2 });


/***/ }),

/***/ "RLAj":
/*!***************************************************************************!*\
  !*** ./src/app/components/headers/header-stats/header-stats.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStatsComponent", function() { return HeaderStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderStatsComponent {
    constructor() { }
    ngOnInit() { }
}
HeaderStatsComponent.ɵfac = function HeaderStatsComponent_Factory(t) { return new (t || HeaderStatsComponent)(); };
HeaderStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderStatsComponent, selectors: [["app-header-stats"]], decls: 3, vars: 0, consts: [[1, "relative", "bg-blueGray-100", "md:pt-32", "pb-32", "pt-12"], [1, "px-4", "md:px-10", "mx-auto", "w-full"]], template: function HeaderStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "RMzx":
/*!****************************************************!*\
  !*** ./src/app/views/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navbars/auth-navbar/auth-navbar.component */ "zslb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footers/footer/footer.component */ "1DoU");




const _c0 = function () { return ["/"]; };
class LandingComponent {
    constructor() { }
    ngOnInit() { }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 237, vars: 2, consts: [[1, "relative", "pt-16", "pb-32", "flex", "content-center", "items-center", "justify-center", "min-h-screen-75"], [1, "absolute", "top-0", "w-full", "h-full", "bg-center", "bg-cover", 2, "background-image", "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"], ["id", "blackOverlay", 1, "w-full", "h-full", "absolute", "opacity-75", "bg-black"], [1, "container", "relative", "mx-auto"], [1, "items-center", "flex", "flex-wrap"], [1, "w-full", "lg:w-6/12", "px-4", "ml-auto", "mr-auto", "text-center"], [1, "pr-12"], [1, "text-white", "font-semibold", "text-5xl"], [1, "mt-4", "text-lg", "text-blueGray-200"], [1, "top-auto", "bottom-0", "left-0", "right-0", "w-full", "absolute", "pointer-events-none", "overflow-hidden", "h-70-px", 2, "transform", "translateZ(0)"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none", "version", "1.1", "viewBox", "0 0 2560 100", "x", "0", "y", "0", 1, "absolute", "bottom-0", "overflow-hidden"], ["points", "2560 0 2560 100 0 100", 1, "text-blueGray-200", "fill-current"], [1, "pb-20", "bg-blueGray-200", "-mt-24"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-wrap"], [1, "lg:pt-12", "pt-6", "w-full", "md:w-4/12", "px-4", "text-center"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-8", "shadow-lg", "rounded-lg"], [1, "px-4", "py-5", "flex-auto"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-red-400"], [1, "fas", "fa-award"], [1, "text-xl", "font-semibold"], [1, "mt-2", "mb-4", "text-blueGray-500"], [1, "w-full", "md:w-4/12", "px-4", "text-center"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-lightBlue-400"], [1, "fas", "fa-retweet"], [1, "pt-6", "w-full", "md:w-4/12", "px-4", "text-center"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-emerald-400"], [1, "fas", "fa-fingerprint"], [1, "flex", "flex-wrap", "items-center", "mt-32"], [1, "w-full", "md:w-5/12", "px-4", "mr-auto", "ml-auto"], [1, "text-blueGray-500", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-16", "h-16", "mb-6", "shadow-lg", "rounded-full", "bg-white"], [1, "fas", "fa-user-friends", "text-xl"], [1, "text-3xl", "mb-2", "font-semibold", "leading-normal"], [1, "text-lg", "font-light", "leading-relaxed", "mt-4", "mb-4", "text-blueGray-600"], [1, "text-lg", "font-light", "leading-relaxed", "mt-0", "mb-4", "text-blueGray-600"], [1, "font-bold", "text-blueGray-700", "mt-8", 3, "routerLink"], [1, "w-full", "md:w-4/12", "px-4", "mr-auto", "ml-auto"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-red-600"], ["alt", "...", "src", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80", 1, "w-full", "align-middle", "rounded-t-lg"], [1, "relative", "p-8", "mb-4"], ["preserveAspectRatio", "none", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 583 95", 1, "absolute", "left-0", "w-full", "block", "h-95-px", "-top-94-px"], ["points", "-30,95 583,95 583,65", 1, "text-red-600", "fill-current"], [1, "text-xl", "font-bold", "text-white"], [1, "text-md", "font-light", "mt-2", "text-white"], [1, "relative", "py-20"], [1, "bottom-auto", "top-0", "left-0", "right-0", "w-full", "absolute", "pointer-events-none", "overflow-hidden", "-mt-20", "h-20", 2, "transform", "translateZ(0)"], ["points", "2560 0 2560 100 0 100", 1, "text-white", "fill-current"], [1, "w-full", "md:w-4/12", "ml-auto", "mr-auto", "px-4"], ["alt", "...", "src", "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", 1, "max-w-full", "rounded-lg", "shadow-lg"], [1, "w-full", "md:w-5/12", "ml-auto", "mr-auto", "px-4"], [1, "md:pr-12"], [1, "text-red-600", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-16", "h-16", "mb-6", "shadow-lg", "rounded-full", "bg-red-300"], [1, "fas", "fa-rocket", "text-xl"], [1, "text-3xl", "font-semibold"], [1, "mt-4", "text-lg", "leading-relaxed", "text-blueGray-500"], [1, "list-none", "mt-6"], [1, "py-2"], [1, "flex", "items-center"], [1, "text-xs", "font-semibold", "inline-block", "py-1", "px-2", "uppercase", "rounded-full", "text-red-600", "bg-red-200", "mr-3"], [1, "text-blueGray-500"], [1, "fab", "fa-html5"], [1, "far", "fa-paper-plane"], [1, "pt-20", "pb-48"], [1, "flex", "flex-wrap", "justify-center", "text-center", "mb-24"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "text-4xl", "font-semibold"], [1, "text-lg", "leading-relaxed", "m-4", "text-blueGray-500"], [1, "w-full", "md:w-6/12", "lg:w-3/12", "lg:mb-0", "mb-12", "px-4"], [1, "px-6"], ["alt", "...", "src", "assets/img/team-1-800x800.jpg", 1, "shadow-lg", "rounded-full", "mx-auto", "max-w-120-px"], [1, "pt-6", "text-center"], [1, "text-xl", "font-bold"], [1, "mt-1", "text-sm", "text-blueGray-400", "uppercase", "font-semibold"], [1, "mt-6"], ["type", "button", 1, "bg-lightBlue-400", "text-white", "w-8", "h-8", "rounded-full", "outline-none", "focus:outline-none", "mr-1", "mb-1"], [1, "fab", "fa-twitter"], ["type", "button", 1, "bg-lightBlue-600", "text-white", "w-8", "h-8", "rounded-full", "outline-none", "focus:outline-none", "mr-1", "mb-1"], [1, "fab", "fa-facebook-f"], ["type", "button", 1, "bg-pink-500", "text-white", "w-8", "h-8", "rounded-full", "outline-none", "focus:outline-none", "mr-1", "mb-1"], [1, "fab", "fa-dribbble"], ["alt", "...", "src", "assets/img/team-2-800x800.jpg", 1, "shadow-lg", "rounded-full", "mx-auto", "max-w-120-px"], ["type", "button", 1, "bg-red-600", "text-white", "w-8", "h-8", "rounded-full", "outline-none", "focus:outline-none", "mr-1", "mb-1"], [1, "fab", "fa-google"], ["alt", "...", "src", "assets/img/team-3-800x800.jpg", 1, "shadow-lg", "rounded-full", "mx-auto", "max-w-120-px"], ["type", "button", 1, "bg-blueGray-700", "text-white", "w-8", "h-8", "rounded-full", "outline-none", "focus:outline-none", "mr-1", "mb-1"], [1, "fab", "fa-instagram"], ["alt", "...", "src", "assets/img/team-4-470x470.png", 1, "shadow-lg", "rounded-full", "mx-auto", "max-w-120-px"], [1, "pb-20", "relative", "block", "bg-blueGray-800"], ["points", "2560 0 2560 100 0 100", 1, "text-blueGray-800", "fill-current"], [1, "container", "mx-auto", "px-4", "lg:pt-24", "lg:pb-64"], [1, "flex", "flex-wrap", "text-center", "justify-center"], [1, "text-4xl", "font-semibold", "text-white"], [1, "text-lg", "leading-relaxed", "mt-4", "mb-4", "text-blueGray-400"], [1, "flex", "flex-wrap", "mt-12", "justify-center"], [1, "w-full", "lg:w-3/12", "px-4", "text-center"], [1, "text-blueGray-800", "p-3", "w-12", "h-12", "shadow-lg", "rounded-full", "bg-white", "inline-flex", "items-center", "justify-center"], [1, "fas", "fa-medal", "text-xl"], [1, "text-xl", "mt-5", "font-semibold", "text-white"], [1, "mt-2", "mb-4", "text-blueGray-400"], [1, "fas", "fa-poll", "text-xl"], [1, "fas", "fa-lightbulb", "text-xl"], [1, "relative", "block", "py-24", "lg:pt-0", "bg-blueGray-800"], [1, "flex", "flex-wrap", "justify-center", "lg:-mt-64", "-mt-48"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-blueGray-200"], [1, "flex-auto", "p-5", "lg:p-10"], [1, "text-2xl", "font-semibold"], [1, "leading-relaxed", "mt-1", "mb-4", "text-blueGray-500"], [1, "relative", "w-full", "mb-3", "mt-8"], ["htmlFor", "full-name", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], ["type", "text", "placeholder", "Full Name", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], [1, "relative", "w-full", "mb-3"], ["htmlFor", "email", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], ["type", "email", "placeholder", "Email", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], ["htmlFor", "message", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], ["rows", "4", "cols", "80", "placeholder", "Type a message...", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full"], [1, "text-center", "mt-6"], ["type", "button", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all", "duration-150"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-auth-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Your story starts with us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This is a simple example of a Landing Page you can build using Notus Angular. It features multiple CSS components based on the Tailwind CSS design system. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "polygon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Awarded Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Divide details about your product or agency work into parts. A paragraph describing a feature will be enough. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Free Revisions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Verified Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Working with us is a pleasure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Check Notus Angular! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "blockquote", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "polygon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Top Notch Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "polygon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "A growing company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Carefully crafted components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h4", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Amazing page examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Dynamic components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "section", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Here are our heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Ryan Tompson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Web Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h5", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Romina Hadid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Marketing Specialist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h5", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Alexa Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " UI/UX Designer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h5", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Jenna Kardi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Founder and CEO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "section", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "polygon", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Build something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National Oceanic and Atmospheric Administration, Ted, Scambos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h6", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Excelent Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h5", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Grow your market ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h5", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Launch time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "section", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h4", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Want to work with us?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Complete this form and we will get back to you in 24 hours. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "label", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " Full Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "input", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "label", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "label", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "textarea", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "button", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " Send Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_1__["AuthNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "S64H":
/*!******************************************************!*\
  !*** ./src/app/services/translate-config.service.ts ***!
  \******************************************************/
/*! exports provided: TranslateConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function() { return TranslateConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


class TranslateConfigService {
    constructor(translateService) {
        this.translateService = translateService;
        this.translateService.use('ar');
        this.translateWord();
    }
    translateWord() {
        if (this.translateService.currentLang == 'ar') {
            return "لم يتم رفع الملف بعد.";
        }
        else {
            return "File Not Uploaded yet.";
        }
    }
    error(id) {
        if (this.translateService.currentLang == 'ar') {
            if (id == "form") {
                return "يجب عليك إدخال جميع البيانات المطلوبة";
            }
            else if (id == "national") {
                return "معلومات مقدم الطلب مع هذا الرقم القومي موجودة بالفعل";
            }
            else if (id == "login") {
                return "الرقم القومي او رقم التسجيل غير صحيح ، يرجى المحاولة مرة اخرى";
            }
        }
        else {
            if (id == "form") {
                return "You must enter all required fields";
            }
            else if (id == "national") {
                return "NationalID or SubmissionID is not correct, please try again";
            }
        }
    }
    changeLanguage(type) {
        this.translateService.use(type);
    }
}
TranslateConfigService.ɵfac = function TranslateConfigService_Factory(t) { return new (t || TranslateConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslateConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateConfigService, factory: TranslateConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Skd6":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NotificationDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDropdownComponent", function() { return NotificationDropdownComponent; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "EjV/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




const _c0 = ["btnDropdownRef"];
const _c1 = ["popoverDropdownRef"];
class NotificationDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
}
NotificationDropdownComponent.ɵfac = function NotificationDropdownComponent_Factory(t) { return new (t || NotificationDropdownComponent)(); };
NotificationDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotificationDropdownComponent, selectors: [["app-notification-dropdown"]], viewQuery: function NotificationDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.btnDropdownRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popoverDropdownRef = _t.first);
    } }, decls: 15, vars: 1, consts: [["href", "#pablo", 1, "text-blueGray-500", "block", "py-1", "px-3", 3, "click"], ["btnDropdownRef", ""], [1, "fas", "fa-bell"], [1, "min-w-48", "z-50"], ["popoverDropdownRef", ""], [1, "bg-white", "text-base", "z-50", "float-left", "py-2", "list-none", "text-left", "rounded", "shadow-lg", "mt-1", "min-w-48", 3, "ngClass"], ["href", "#pablo", 1, "text-sm", "py-2", "px-4", "font-normal", "block", "w-full", "whitespace-nowrap", "bg-transparent", "text-blueGray-700"], [1, "h-0", "my-2", "border", "border-solid", "border-blueGray-100"]], template: function NotificationDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDropdownComponent_Template_a_click_0_listener($event) { return ctx.toggleDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Another action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Something else here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Seprated link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.dropdownPopoverShow ? "block" : "hidden");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"]], encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/translate-config.service */ "S64H");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






class AppComponent {
    constructor(translateConfigService, mediaObserver) {
        this.translateConfigService = translateConfigService;
        this.mediaObserver = mediaObserver;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((res) => {
            console.log(res.mqAlias);
            this.deviceXs = res.mqAlias === "xs" ? true : false;
        });
    }
    ngOnDestroy() {
        this.mediaSub.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 3, consts: [["fxLayout", "row column", 2, "display", "flex", 3, "dir"], ["fxFlex", "100%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "HOME.dir"));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "UIMn":
/*!***************************************************************************!*\
  !*** ./src/app/components/footers/footer-admin/footer-admin.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterAdminComponent", function() { return FooterAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class FooterAdminComponent {
    constructor() {
        this.date = new Date().getFullYear();
        this._absolute = false;
    }
    get absolute() {
        return this._absolute;
    }
    set absolute(absolute) {
        this._absolute = absolute === undefined ? false : absolute;
    }
    ngOnInit() { }
}
FooterAdminComponent.ɵfac = function FooterAdminComponent_Factory(t) { return new (t || FooterAdminComponent)(); };
FooterAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterAdminComponent, selectors: [["app-footer-admin"]], inputs: { absolute: "absolute" }, decls: 19, vars: 1, consts: [[1, "pb-6", 3, "ngClass"], [1, "container", "mx-auto", "px-4"], [1, "mb-4", "border-b-1", "border-blueGray-200"], [1, "flex", "flex-wrap", "items-center", "md:justify-between", "justify-center"], [1, "w-full", "md:w-4/12", "px-4"], ["translate", "", 1, "text-sm", "text-blueGray-500", "font-semibold", "py-1", "text-center", "md:text-left"], ["href", "", 1, "text-blueGray-500", "hover:text-blueGray-700", "text-sm", "font-semibold", "py-1"], [1, "w-full", "md:w-8/12", "px-4"], [1, "flex", "flex-wrap", "list-none", "md:justify-end", "justify-center"], ["href", "", "translate", "", 1, "text-blueGray-500", "hover:text-blueGray-300", "text-sm", "font-semibold", "block", "py-1", "px-3"]], template: function FooterAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " HOME.copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " HOME.about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " HOME.terms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " HOME.contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.absolute ? "absolute w-full bottom-0 bg-blueGray-800" : "relative");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"]], encapsulation: 2 });


/***/ }),

/***/ "UY35":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/table-dropdown/table-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TableDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDropdownComponent", function() { return TableDropdownComponent; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "EjV/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




const _c0 = ["btnDropdownRef"];
const _c1 = ["popoverDropdownRef"];
class TableDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
}
TableDropdownComponent.ɵfac = function TableDropdownComponent_Factory(t) { return new (t || TableDropdownComponent)(); };
TableDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableDropdownComponent, selectors: [["app-table-dropdown"]], viewQuery: function TableDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.btnDropdownRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popoverDropdownRef = _t.first);
    } }, decls: 15, vars: 1, consts: [["href", "#pablo", 1, "text-blueGray-500", "block", "py-1", "px-3", 3, "click"], ["btnDropdownRef", ""], [1, "fas", "fa-ellipsis-v"], [1, "min-w-48", "z-50"], ["popoverDropdownRef", ""], [1, "bg-white", "text-base", "float-left", "py-2", "list-none", "text-left", "rounded", "shadow-lg", "mt-1", "min-w-48", 3, "ngClass"], ["href", "#pablo", 1, "text-sm", "py-2", "px-4", "font-normal", "block", "w-full", "whitespace-nowrap", "bg-transparent", "text-blueGray-700"], [1, "h-0", "my-2", "border", "border-solid", "border-blueGray-100"]], template: function TableDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableDropdownComponent_Template_a_click_0_listener($event) { return ctx.toggleDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Another action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Something else here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Seprated link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.dropdownPopoverShow ? "block" : "hidden");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"]], encapsulation: 2 });


/***/ }),

/***/ "VTaN":
/*!********************************************************!*\
  !*** ./src/app/views/admin/tables/tables.component.ts ***!
  \********************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/cards/card-table/card-table.component */ "uhhN");


class TablesComponent {
    constructor() { }
    ngOnInit() {
        console.log("sssssss");
        console.log(history.state);
    }
}
TablesComponent.ɵfac = function TablesComponent_Factory(t) { return new (t || TablesComponent)(); };
TablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablesComponent, selectors: [["app-tables"]], decls: 3, vars: 0, consts: [[1, "flex", "flex-wrap", "mt-4"], [1, "w-full", "mb-12", "px-4"]], template: function TablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_1__["CardTableComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Vbwu":
/*!************************************************!*\
  !*** ./src/app/layouts/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navbars/auth-navbar/auth-navbar.component */ "zslb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footers/footer-small/footer-small.component */ "xlab");




class AuthComponent {
    constructor() { }
    ngOnInit() { }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 6, vars: 1, consts: [[1, "relative", "w-full", "h-full", "py-40", "min-h-screen"], [3, "absolute"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-auth-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer-small", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("absolute", true);
    } }, directives: [_components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_1__["AuthNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_3__["FooterSmallComponent"]], encapsulation: 2 });


/***/ }),

/***/ "VriY":
/*!*************************************************************!*\
  !*** ./src/app/views/auth/user-code/user-code.component.ts ***!
  \*************************************************************/
/*! exports provided: UserCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCodeComponent", function() { return UserCodeComponent; });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbars_code_navbar_code_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/navbars/code-navbar/code-navbar.component */ "kkKM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






const _c0 = ["register"];
class UserCodeComponent {
    constructor() { }
    printComponent(cmpName) {
        let printContents = document.getElementById(cmpName).innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    downloadAsPDF() {
        let DATA = document.getElementById('code');
        html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(DATA).then(canvas => {
            let fileWidth = 208;
            let fileHeight = canvas.height * fileWidth / canvas.width;
            const FILEURI = canvas.toDataURL('image/png');
            let PDF = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'mm', 'a4');
            let position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
            PDF.save('angular-demo.pdf');
        });
    }
    copy() {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.auth.submissionID;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    ngOnInit() {
        this.auth = history.state;
    }
}
UserCodeComponent.ɵfac = function UserCodeComponent_Factory(t) { return new (t || UserCodeComponent)(); };
UserCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserCodeComponent, selectors: [["app-user-code"]], viewQuery: function UserCodeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.register = _t.first);
    } }, decls: 33, vars: 4, consts: [["id", "register", 1, "mx-auto", 2, "width", "800px"], ["register", ""], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-blueGray-100", "border-0"], [1, "rounded-t", "bg-blueGray-600", "mb-0", "px-6", "py-6"], [1, "text-center", "flex", "justify-between"], [1, "flex-auto", "px-4", "lg:px-10", "py-10", "pt-0"], ["translate", "", 1, "text-black", "text-xl", "font-bold", "text-center"], [1, "text-center"], ["translate", "", 1, "block", "uppercase", "text-blueGray-600", "text-xl", "font-bold", "mb-2"], [1, "text-blueGray-600", 2, "font-size", "22px"], ["id", "code", 2, "font-size", "25px"], ["type", "button", "translate", "", 1, "bg-black", "text-white", "active:bg-black-100", "font-bold", "uppercase", "text-xs", "px-3", "py-3", "rounded", "shadow", "hover:shadow-md", "outline-none", "focus:outline-none", "mr-1", "ease-linear", "transition-all", "duration-150", 3, "click"], [2, "margin-left", "472px"], [1, "w-full", "lg:w-4/12", "px-4"], ["type", "button", "translate", "", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"], ["type", "button", "translate", "", 1, "bg-blueGray-800", "text-white", "active:bg-red-700", "text-sm", "font-bold", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"], [1, "flex", "flex-wrap"]], template: function UserCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-code-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Form.serial_number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Form.msg_done ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserCodeComponent_Template_button_click_21_listener() { return ctx.copy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Form.copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserCodeComponent_Template_button_click_27_listener() { return ctx.printComponent("register"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Form.print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserCodeComponent_Template_button_click_30_listener() { return ctx.downloadAsPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Form.download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 2, "Form.submission_id"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.auth.submissionID, "");
    } }, directives: [_components_navbars_code_navbar_code_navbar_component__WEBPACK_IMPORTED_MODULE_3__["CodeNavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWNvZGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W8iF":
/*!*************************************************************!*\
  !*** ./src/app/views/auth/view-data/view-data.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDataComponent", function() { return ViewDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_navbars_view_navbar_view_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/navbars/view-navbar/view-navbar.component */ "hS4r");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class ViewDataComponent {
    constructor(datepipe, translate, router, http) {
        this.datepipe = datepipe;
        this.translate = translate;
        this.router = router;
        this.http = http;
    }
    toggleSelection(event) {
        this.checked = event.target.checked;
    }
    ngOnInit() {
        this.applicant = history.state;
        var reader1 = new FileReader();
        reader1.readAsDataURL(this.applicant.nationalImg);
        reader1.onload = (_event) => {
            this.nationalURL = reader1.result;
        };
        var reader2 = new FileReader();
        reader2.readAsDataURL(this.applicant.criminalImg);
        reader2.onload = (_event) => {
            this.criminalURL = reader2.result;
        };
        var reader3 = new FileReader();
        reader3.readAsDataURL(this.applicant.passportImg);
        reader3.onload = (_event) => {
            this.passportURL = reader3.result;
        };
        var reader4 = new FileReader();
        reader4.readAsDataURL(this.applicant.photoImg);
        reader4.onload = (_event) => {
            this.photoURL = reader4.result;
        };
    }
    editNavigate() {
        this.router.navigateByUrl('/auth/edit-form', { state: this.applicant });
    }
    confirm() {
        if (this.checked) {
            let code = Math.floor(Math.random() * 100000000000);
            console.log(code);
            this.applicant.submissionID = code.toString();
            const uploadData = new FormData();
            uploadData.append('fullName', this.applicant.fullName);
            uploadData.append('destination', this.applicant.destination);
            uploadData.append('purpose', this.applicant.purpose);
            uploadData.append('nationalID', this.applicant.nationalID);
            uploadData.append('passportID', this.applicant.passportID);
            uploadData.append('nationalImg', this.applicant.nationalImg, this.applicant.nationalImg.name);
            uploadData.append('passportImg', this.applicant.passportImg, this.applicant.passportImg.name);
            uploadData.append('photoImg', this.applicant.photoImg, this.applicant.photoImg.name);
            uploadData.append('criminalImg', this.applicant.criminalImg, this.applicant.criminalImg.name);
            uploadData.append('phone', this.applicant.phone);
            uploadData.append('email', this.applicant.email);
            uploadData.append('address', this.applicant.address);
            uploadData.append('city', this.applicant.city);
            uploadData.append('country', this.applicant.country);
            uploadData.append('date', this.datepipe.transform(Date(), 'YYYY-MM-dd HH:MM:SS'));
            uploadData.append('submissionID', this.applicant.submissionID);
            this.http.post('http://45.56.117.204:8000/api/Applicants/', uploadData, {
                headers: { 'Authorization': 'Token 870d88a50b2847f998bcfb40bc072ff0e0af0ddf' }
            }).subscribe((data) => {
                let auth = {
                    nationalID: data['id'],
                    submissionID: data['submissionID']
                };
                this.http.post('http://45.56.117.204:8000/api/auth/', auth, {
                    headers: { 'Authorization': 'Token 870d88a50b2847f998bcfb40bc072ff0e0af0ddf' }
                }).subscribe((data) => {
                    this.router.navigateByUrl('/auth/user-code', { state: auth });
                });
            }, (err) => {
                console.log(err);
                if (err.status == 0) {
                    this.error = "Connection Error";
                }
                this.error = this.translate.error("national");
            });
        }
        else {
            this.error = "";
        }
    }
}
ViewDataComponent.ɵfac = function ViewDataComponent_Factory(t) { return new (t || ViewDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ViewDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewDataComponent, selectors: [["app-view-data"]], decls: 130, vars: 18, consts: [[1, "mx-auto", 2, "width", "800px"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-blueGray-200", "border-0"], [1, "rounded-t", "bg-blueGray-600", "mb-0", "px-6", "py-6"], [1, "text-center", "flex", "justify-between"], [1, "flex-auto", "px-4", "lg:px-10", "py-10", "pt-0"], ["translate", "", 1, "text-blueGray-700", "text-xl", "font-bold", "text-center"], ["translate", "", 1, "text-blueGray-400", "text-sm", "mt-3", "mb-6", "font-bold", "uppercase"], [1, "flex", "flex-wrap"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "relative", "w-full", "mb-3"], ["htmlFor", "grid-password", "translate", "", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], ["htmlFor", "grid-password", 1, "block", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], [1, "w-full", "lg:w-3/12", "px-4"], ["htmlFor", "grid-password", "translate", "", 1, "block", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], [1, "mt-6", "border-b-1", "border-blueGray-300"], ["height", "200", "width", "150", 3, "src"], [1, "w-full", "lg:w-12/12", "px-4"], [1, "inline-flex", "items-center", "cursor-pointer"], ["id", "customCheckLogin", "type", "checkbox", 1, "form-checkbox", "border-0", "text-blueGray-700", "ml-1", "w-5", "h-5", "ease-linear", "transition-all", "duration-150", "rounded", 3, "click"], ["translate", "", 1, "ml-2", "text-sm", "font-semibold", "text-blueGray-600"], [1, "w-full", "lg:w-4/12", "px-4"], ["type", "button", "translate", "", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"], ["type", "button", "translate", "", 1, "bg-red-600", "text-white", "active:bg-red-700", "text-sm", "font-bold", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"]], template: function ViewDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-view-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Form.summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Form.personal_info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Form.name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Form.destination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Form.purpose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0630\u0647\u0627\u0628 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Form.id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Form.passport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Form.view_attachments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Form.attach_national_copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Form.attach_passport_copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Form.attach_criminal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Form.attach_photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Form.contact_info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Form.phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Form.Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Form.address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Form.city ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Form.country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDataComponent_Template_input_click_117_listener($event) { return ctx.toggleSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Form.confirm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDataComponent_Template_button_click_124_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Form.submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDataComponent_Template_button_click_127_listener() { return ctx.editNavigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Form.edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.fullName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.destination, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.nationalID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.passportID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.nationalImg.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.nationalURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.passportImg.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.passportURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.criminalImg.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.criminalURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.photoImg.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.applicant.country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
    } }, directives: [_components_navbars_view_navbar_view_navbar_component__WEBPACK_IMPORTED_MODULE_5__["ViewNavbarComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRhdGEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Xodl":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbars/admin-navbar/admin-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function() { return AdminNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dropdowns/notification-dropdown/notification-dropdown.component */ "Skd6");
/* harmony import */ var _dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dropdowns/user-dropdown/user-dropdown.component */ "0slC");




class AdminNavbarComponent {
    constructor() { }
    ngOnInit() { }
}
AdminNavbarComponent.ɵfac = function AdminNavbarComponent_Factory(t) { return new (t || AdminNavbarComponent)(); };
AdminNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminNavbarComponent, selectors: [["app-admin-navbar"]], decls: 7, vars: 0, consts: [[1, "absolute", "top-0", "left-0", "w-full", "z-10", "bg-transparent", "md:flex-row", "md:flex-nowrap", "md:justify-start", "flex", "items-center", "p-4"], [1, "w-full", "mx-autp", "items-center", "flex", "justify-between", "md:flex-nowrap", "flex-wrap", "md:px-10", "px-4"], ["href", "#pablo", "translate", "", 1, "text-black", "text-sm", "uppercase", "hidden", "lg:inline-block", "font-semibold"], [1, "flex-col", "md:flex-row", "list-none", "items-center", "hidden", "md:flex"], [1, "block"]], template: function AdminNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SideBar.main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-notification-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-user-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"], _dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_2__["NotificationDropdownComponent"], _dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["UserDropdownComponent"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/admin/admin.component */ "R+tk");
/* harmony import */ var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/auth/auth.component */ "Vbwu");
/* harmony import */ var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/admin/dashboard/dashboard.component */ "zmeh");
/* harmony import */ var _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/admin/maps/maps.component */ "rKqC");
/* harmony import */ var _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/admin/settings/settings.component */ "90Li");
/* harmony import */ var _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/admin/tables/tables.component */ "VTaN");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/auth/login/login.component */ "/kjZ");
/* harmony import */ var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/auth/register/register.component */ "LN9C");
/* harmony import */ var _views_index_index_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/index/index.component */ "AiJS");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/landing/landing.component */ "RMzx");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");
/* harmony import */ var _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navbars/admin-navbar/admin-navbar.component */ "Xodl");
/* harmony import */ var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/navbars/auth-navbar/auth-navbar.component */ "zslb");
/* harmony import */ var _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cards/card-page-visits/card-page-visits.component */ "3IhM");
/* harmony import */ var _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/cards/card-profile/card-profile.component */ "diaN");
/* harmony import */ var _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cards/card-settings/card-settings.component */ "vwLF");
/* harmony import */ var _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cards/card-social-traffic/card-social-traffic.component */ "xud4");
/* harmony import */ var _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/cards/card-stats/card-stats.component */ "J87Q");
/* harmony import */ var _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/cards/card-table/card-table.component */ "uhhN");
/* harmony import */ var _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/footers/footer-admin/footer-admin.component */ "UIMn");
/* harmony import */ var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/footers/footer/footer.component */ "1DoU");
/* harmony import */ var _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/footers/footer-small/footer-small.component */ "xlab");
/* harmony import */ var _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/headers/header-stats/header-stats.component */ "RLAj");
/* harmony import */ var _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/navbars/index-navbar/index-navbar.component */ "4b2p");
/* harmony import */ var _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/maps/map-example/map-example.component */ "u/sr");
/* harmony import */ var _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/dropdowns/index-dropdown/index-dropdown.component */ "J8Ne");
/* harmony import */ var _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/dropdowns/table-dropdown/table-dropdown.component */ "UY35");
/* harmony import */ var _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/dropdowns/pages-dropdown/pages-dropdown.component */ "wcq5");
/* harmony import */ var _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/dropdowns/notification-dropdown/notification-dropdown.component */ "Skd6");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/dropdowns/user-dropdown/user-dropdown.component */ "0slC");
/* harmony import */ var _views_auth_view_data_view_data_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./views/auth/view-data/view-data.component */ "W8iF");
/* harmony import */ var _components_navbars_form_navbar_form_navbar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/navbars/form-navbar/form-navbar.component */ "1ovs");
/* harmony import */ var _views_auth_user_code_user_code_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./views/auth/user-code/user-code.component */ "VriY");
/* harmony import */ var _views_auth_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./views/auth/edit-form/edit-form.component */ "oT9s");
/* harmony import */ var _views_auth_saved_data_saved_data_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./views/auth/saved-data/saved-data.component */ "BdIN");
/* harmony import */ var _components_navbars_login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/navbars/login-navbar/login-navbar.component */ "Hp7s");
/* harmony import */ var _layouts_data_data_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./layouts/data/data.component */ "dEUA");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _views_auth_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./views/auth/admin-login/admin-login.component */ "gPp3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _views_admin_show_data_show_data_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./views/admin/show-data/show-data.component */ "+PRQ");
/* harmony import */ var _views_admin_view_applicant_view_applicant_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./views/admin/view-applicant/view-applicant.component */ "cRi9");
/* harmony import */ var _views_admin_edit_applicant_edit_applicant_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./views/admin/edit-applicant/edit-applicant.component */ "qHFm");
/* harmony import */ var _components_navbars_view_navbar_view_navbar_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/navbars/view-navbar/view-navbar.component */ "hS4r");
/* harmony import */ var _components_navbars_code_navbar_code_navbar_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/navbars/code-navbar/code-navbar.component */ "kkKM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/core */ "fXoL");






// layouts


// admin views




// auth views


// no layouts views



// components for views and layouts








































// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_55__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_55__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_53__["DatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_46__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_46__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_47__["Ng2SearchPipeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_54__["FlexLayoutModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_55__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_31__["IndexDropdownComponent"],
        _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_33__["PagesDropdownComponent"],
        _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_32__["TableDropdownComponent"],
        _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_34__["NotificationDropdownComponent"],
        _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_36__["UserDropdownComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_35__["SidebarComponent"],
        _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
        _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_27__["FooterSmallComponent"],
        _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_25__["FooterAdminComponent"],
        _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_19__["CardPageVisitsComponent"],
        _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_20__["CardProfileComponent"],
        _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_21__["CardSettingsComponent"],
        _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_22__["CardSocialTrafficComponent"],
        _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_23__["CardStatsComponent"],
        _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_24__["CardTableComponent"],
        _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_28__["HeaderStatsComponent"],
        _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_30__["MapExampleComponent"],
        _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_18__["AuthNavbarComponent"],
        _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_17__["AdminNavbarComponent"],
        _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_29__["IndexNavbarComponent"],
        _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
        _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
        _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_9__["MapsComponent"],
        _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
        _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__["TablesComponent"],
        _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
        _views_index_index_component__WEBPACK_IMPORTED_MODULE_14__["IndexComponent"],
        _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_15__["LandingComponent"],
        _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
        _views_auth_view_data_view_data_component__WEBPACK_IMPORTED_MODULE_37__["ViewDataComponent"],
        _components_navbars_form_navbar_form_navbar_component__WEBPACK_IMPORTED_MODULE_38__["FormNavbarComponent"],
        _views_auth_user_code_user_code_component__WEBPACK_IMPORTED_MODULE_39__["UserCodeComponent"],
        _views_auth_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_40__["EditFormComponent"],
        _views_auth_saved_data_saved_data_component__WEBPACK_IMPORTED_MODULE_41__["SavedDataComponent"],
        _components_navbars_login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_42__["LoginNavbarComponent"],
        _layouts_data_data_component__WEBPACK_IMPORTED_MODULE_43__["DataComponent"],
        _views_auth_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_45__["AdminLoginComponent"],
        _views_admin_show_data_show_data_component__WEBPACK_IMPORTED_MODULE_48__["ShowDataComponent"],
        _views_admin_view_applicant_view_applicant_component__WEBPACK_IMPORTED_MODULE_49__["ViewApplicantComponent"],
        _views_admin_edit_applicant_edit_applicant_component__WEBPACK_IMPORTED_MODULE_50__["EditApplicantComponent"],
        _components_navbars_view_navbar_view_navbar_component__WEBPACK_IMPORTED_MODULE_51__["ViewNavbarComponent"],
        _components_navbars_code_navbar_code_navbar_component__WEBPACK_IMPORTED_MODULE_52__["CodeNavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_46__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_46__["ReactiveFormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_47__["Ng2SearchPipeModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_54__["FlexLayoutModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]] }); })();


/***/ }),

/***/ "ZsR3":
/*!*************************************!*\
  !*** ./src/app/models/applicant.ts ***!
  \*************************************/
/*! exports provided: Applicant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Applicant", function() { return Applicant; });
class Applicant {
}


/***/ }),

/***/ "cRi9":
/*!************************************************************************!*\
  !*** ./src/app/views/admin/view-applicant/view-applicant.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewApplicantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewApplicantComponent", function() { return ViewApplicantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-to-image */ "cLAn");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









const _c0 = ["register"];
function ViewApplicantComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \u062A\u0645\u062A \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0637\u0644\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewApplicantComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.toggleModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " .\u062A\u0645\u062A \u0645\u0631\u0627\u062C\u0639\u0629 \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628 \u0648\u062A\u0646\u0632\u064A\u0644\u0647 \u0628\u0646\u062C\u0627\u062D. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewApplicantComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.toggleModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Modal.close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ViewApplicantComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 35);
} }
function ViewApplicantComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Form.id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Form.submission_id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "hr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Form.register-data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Form.name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Form.destination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Form.purpose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Form.id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Form.passport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Form.attach_national_copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " Form.attach_passport_copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Form.attach_photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " Form.attach_criminal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " Form.phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " Form.email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " Form.address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, " Form.city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, " Form.country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.nationalID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.submissionID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.destination, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.destination, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.nationalID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.passportID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.applicant.photoImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.applicant.photoImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.applicant.photoImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.applicant.photoImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.applicant.country, " ");
} }
class ViewApplicantComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.showModal = false;
    }
    toggleModal() {
        this.showModal = !this.showModal;
    }
    printComponent(cmpName) {
        let printContents = document.getElementById(cmpName).innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    downloadAsPDF() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var node = document.getElementById('register');
            var img;
            var filename;
            var newImage;
            dom_to_image__WEBPACK_IMPORTED_MODULE_2___default.a.toPng(node, { bgcolor: '#fff' })
                .then(function (dataUrl) {
                img = new Image();
                img.src = dataUrl;
                newImage = img.src;
                img.onload = function () {
                    var pdfWidth = img.width;
                    var pdfHeight = img.height;
                    // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image
                    var doc;
                    if (pdfWidth > pdfHeight) {
                        doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]('l', 'px', [pdfWidth, pdfHeight]);
                    }
                    else {
                        doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]('p', 'px', [pdfWidth, pdfHeight]);
                    }
                    var width = doc.internal.pageSize.getWidth();
                    var height = doc.internal.pageSize.getHeight();
                    doc.addImage(newImage, 'PNG', 10, 10, width, height);
                    filename = 'mypdf_' + '.pdf';
                    doc.save(filename);
                };
            })
                .catch(function (error) {
                // Error Handling
            });
            this.toggleModal();
            this.applicant.status = true;
            var res = yield fetch(this.applicant.natonalURL);
            var blob = yield res.blob();
            const reader = new FileReader();
            reader.readAsDataURL(blob); //FileStream response from .NET core backend
            reader.onload = _event => {
                this.applicant.nationalImg = reader.result;
            };
            const uploadData = new FormData();
            uploadData.append('fullName', this.applicant.fullName);
            uploadData.append('destination', this.applicant.destination);
            uploadData.append('purpose', this.applicant.purpose);
            uploadData.append('nationalID', this.applicant.nationalID);
            uploadData.append('passportID', this.applicant.passportID);
            uploadData.append('nationalImg', this.applicant.nationalImg);
            uploadData.append('passportImg', this.applicant.nationalImg);
            uploadData.append('photoImg', this.applicant.nationalImg);
            uploadData.append('criminalImg', this.applicant.nationalImg);
            uploadData.append('phone', this.applicant.phone);
            uploadData.append('email', this.applicant.email);
            uploadData.append('address', this.applicant.address);
            uploadData.append('city', this.applicant.city);
            uploadData.append('country', this.applicant.country);
            uploadData.append('date', this.applicant.date);
            uploadData.append('submissionID', this.applicant.submissionID);
            uploadData.append('status', this.applicant.status);
            this.http.put('http://127.0.0.1:8000/api/Applicants/' + this.applicant.id + "/", uploadData, {
                headers: { 'Authorization': 'Token 870d88a50b2847f998bcfb40bc072ff0e0af0ddf' }
            }).subscribe((data) => {
                console.log(data);
                this.router.navigateByUrl('/admin/main');
            });
        });
    }
    ngOnInit() {
        let data = history.state;
        this.applicant = data;
    }
}
ViewApplicantComponent.ɵfac = function ViewApplicantComponent_Factory(t) { return new (t || ViewApplicantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ViewApplicantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ViewApplicantComponent, selectors: [["app-view-applicant"]], viewQuery: function ViewApplicantComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.register = _t.first);
    } }, decls: 126, vars: 19, consts: [["class", "overflow-x-hidden fixed z-50 outline-none focus:outline-none justify-center flex", "style", "width:100%; margin:0 auto;", 4, "ngIf"], ["class", "opacity-25 fixed inset-0 z-40 bg-black", 4, "ngIf"], [4, "ngIf"], [1, "mx-auto", 2, "width", "800px"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-blueGray-200", "border-0"], [1, "flex-auto", "px-4", "lg:px-10", "py-10", "pt-0"], ["translate", "", 1, "text-blueGray-700", "text-xl", "font-bold", "text-center"], ["id", "register"], ["register", ""], [1, "flex", "flex-wrap", "text-center"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "relative", "w-full", "mb-3"], ["htmlFor", "grid-password", "translate", "", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], ["htmlFor", "grid-password", "translate", "", 1, "block", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], [1, "mt-6", "border-b-1", "border-blueGray-300"], ["translate", "", 1, "text-blueGray-400", "text-sm", "mt-3", "mb-6", "px-4", "font-bold", "uppercase"], [1, "flex", "flex-wrap"], [1, "w-full", "lg:w-3/12", "px-4"], ["height", "200", "width", "150", 3, "src"], [1, "w-full", "lg:w-12/12", "px-4"], [1, "text-center", "flex", "justify-between"], [1, "w-full", "lg:w-4/12", "px-4"], ["type", "button", "translate", "", 1, "bg-emerald-500", "text-white", "active:bg-red-700", "text-sm", "font-bold", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"], ["type", "button", "translate", "", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"], [1, "overflow-x-hidden", "fixed", "z-50", "outline-none", "focus:outline-none", "justify-center", "flex", 2, "width", "100%", "margin", "0 auto"], [1, "relative", "w-auto", "max-w-sm"], [1, "border-0", "rounded-lg", "shadow-lg", "relative", "flex", "flex-col", "w-full", "bg-white", "outline-none", "focus:outline-none"], [1, "flex", "items-start", "justify-between", "p-5", "border-b", "border-solid", "border-blueGray-200", "rounded-t"], ["translate", "", 1, "text-3xl", "font-semibold"], [1, "p-1", "ml-auto", "bg-transparent", "border-0", "text-black", "opacity-5", "flex-auto", "text-3xl", "leading-none", "font-semibold", "outline-none", "focus:outline-none", 3, "click"], [1, "bg-transparent", "text-black", "opacity-5", "h-6", "w-6", "text-2xl", "block", "outline-none", "focus:outline-none"], [1, "relative", "p-6", "px-4", "flex-auto"], ["translate", "", 1, "my-4", "text-blueGray-500", "text-lg", "leading-relaxed"], [1, "text-center"], ["type", "button", "translate", "", 1, "bg-red-600", "text-white", "active:bg-emerald-600", "font-bold", "uppercase", "text-sm", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all", "duration-150", 3, "click"], [1, "opacity-25", "fixed", "inset-0", "z-40", "bg-black"]], template: function ViewApplicantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ViewApplicantComponent_div_0_Template, 15, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ViewApplicantComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ViewApplicantComponent_div_2_Template, 110, 16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Form.register-data");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Form.id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Form.submission_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Form.register-data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Form.name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Form.destination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Form.purpose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Form.id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Form.passport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Form.attach_national_copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " Form.attach_passport_copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, " Form.attach_photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " Form.attach_criminal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " Form.phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, " Form.email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " Form.address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, " Form.city ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, " Form.country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewApplicantComponent_Template_button_click_121_listener() { return ctx.printComponent("register"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, " Form.print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewApplicantComponent_Template_button_click_124_listener() { return ctx.downloadAsPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, " Form.download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.nationalID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.submissionID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.fullName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.destination, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.destination, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.nationalID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.passportID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.applicant.photoImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.applicant.photoImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.applicant.photoImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.applicant.photoImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.applicant.country, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWFwcGxpY2FudC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "dEUA":
/*!************************************************!*\
  !*** ./src/app/layouts/data/data.component.ts ***!
  \************************************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DataComponent {
    constructor() { }
    ngOnInit() {
    }
}
DataComponent.ɵfac = function DataComponent_Factory(t) { return new (t || DataComponent)(); };
DataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataComponent, selectors: [["app-data"]], decls: 2, vars: 0, template: function DataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "data works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "diaN":
/*!*************************************************************************!*\
  !*** ./src/app/components/cards/card-profile/card-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProfileComponent", function() { return CardProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardProfileComponent {
    constructor() { }
    ngOnInit() { }
}
CardProfileComponent.ɵfac = function CardProfileComponent_Factory(t) { return new (t || CardProfileComponent)(); };
CardProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardProfileComponent, selectors: [["app-card-profile"]], decls: 42, vars: 0, consts: [[1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-6", "shadow-xl", "rounded-lg", "mt-16"], [1, "px-6"], [1, "flex", "flex-wrap", "justify-center"], [1, "w-full", "px-4", "flex", "justify-center"], [1, "relative"], ["alt", "...", "src", "assets/img/team-2-800x800.jpg", 1, "shadow-xl", "rounded-full", "h-auto", "align-middle", "border-none", "absolute", "-m-16", "-ml-20", "lg:-ml-16", "max-w-150-px"], [1, "w-full", "px-4", "text-center", "mt-20"], [1, "flex", "justify-center", "py-4", "lg:pt-4", "pt-8"], [1, "mr-4", "p-3", "text-center"], [1, "text-xl", "font-bold", "block", "uppercase", "tracking-wide", "text-blueGray-600"], [1, "text-sm", "text-blueGray-400"], [1, "lg:mr-4", "p-3", "text-center"], [1, "text-center", "mt-12"], [1, "text-xl", "font-semibold", "leading-normal", "mb-2", "text-blueGray-700", "mb-2"], [1, "text-sm", "leading-normal", "mt-0", "mb-2", "text-blueGray-400", "font-bold", "uppercase"], [1, "fas", "fa-map-marker-alt", "mr-2", "text-lg", "text-blueGray-400"], [1, "mb-2", "text-blueGray-600", "mt-10"], [1, "fas", "fa-briefcase", "mr-2", "text-lg", "text-blueGray-400"], [1, "mb-2", "text-blueGray-600"], [1, "fas", "fa-university", "mr-2", "text-lg", "text-blueGray-400"], [1, "mt-10", "py-10", "border-t", "border-blueGray-200", "text-center"], [1, "w-full", "lg:w-9/12", "px-4"], [1, "mb-4", "text-lg", "leading-relaxed", "text-blueGray-700"], ["href", "javascript:void(0);", 1, "font-normal", "text-red-600"]], template: function CardProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 89 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Jenna Stones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Los Angeles, California ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Solution Manager - Creative Tim Officer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " University of Computer Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Show more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "gPp3":
/*!*****************************************************************!*\
  !*** ./src/app/views/auth/admin-login/admin-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







class AdminLoginComponent {
    constructor(translateConfigService, http, router) {
        this.translateConfigService = translateConfigService;
        this.http = http;
        this.router = router;
        this.admin = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    get email() { return this.admin.get('email'); }
    ;
    get password() { return this.admin.get('password'); }
    login() {
        if (this.admin.valid) {
            const uploadData = {
                'email': this.email.value,
                'password': this.password.value
            };
            this.http.get('http://45.56.117.204:8000/api/admin/', {
                headers: { 'Authorization': 'Token 870d88a50b2847f998bcfb40bc072ff0e0af0ddf' }
            }).subscribe((data) => {
                console.log(data);
                console.log(this.checkLogin(data));
            }, (err) => {
                if (err.status == 0) {
                    this.error = "Connection Error";
                }
                this.error = this.translateConfigService.error("login");
            });
        }
    }
    checkLogin(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(this.email.value);
            console.log(data[i]['password']);
            if (this.email.value == data[i]['email'] && this.password.value == data[i]['password']) {
                this.router.navigateByUrl('/admin/main', { state: data[i] });
            }
        }
        this.error = 'برجاء المحاولة مرة اخرى.';
        return false;
    }
}
AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) { return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminLoginComponent, selectors: [["app-admin-login"]], decls: 30, vars: 8, consts: [[1, "container", "mx-auto", "px-4", "h-full"], [1, "flex", "content-center", "items-center", "justify-center", "h-full"], [1, "w-full", "lg:w-4/12", "px-4"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-blueGray-200", "border-0"], [1, "rounded-t", "mb-0", "px-6", "py-6"], [1, "text-center", "mb-3"], ["translate", "", 1, "text-blueGray-500", "text-sm", "font-bold"], [1, "mt-6", "border-b-1", "border-blueGray-300"], [1, "flex-auto", "px-4", "lg:px-10", "py-10", "pt-0"], [3, "formGroup"], [1, "relative", "w-full", "mb-3"], ["htmlFor", "grid-password", "translate", "", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], ["type", "text", "formControlName", "email", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], ["type", "password", "formControlName", "password", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], [1, "inline-flex", "items-center", "cursor-pointer"], ["id", "customCheckLogin", "type", "checkbox", 1, "form-checkbox", "border-0", "text-blueGray-700", "ml-1", "w-5", "h-5", "ease-linear", "transition-all", "duration-150", "rounded"], ["translate", "", 1, "ml-2", "text-sm", "font-semibold", "text-blueGray-600"], [1, "text-center", "mt-6"], ["type", "button", "translate", "", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Form.sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Form.Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Form.password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Form.remember ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminLoginComponent_Template_button_click_27_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Form.sign ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 4, "Form.Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 6, "Form.password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "hS4r":
/*!*************************************************************************!*\
  !*** ./src/app/components/navbars/view-navbar/view-navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNavbarComponent", function() { return ViewNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/auth/login"]; };
class ViewNavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ViewNavbarComponent.ɵfac = function ViewNavbarComponent_Factory(t) { return new (t || ViewNavbarComponent)(); };
ViewNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewNavbarComponent, selectors: [["app-view-navbar"]], decls: 20, vars: 2, consts: [[1, "top-0", "absolute", "z-50", "w-full", "flex", "flex-wrap", "items-center", "justify-between", "px-2", "py-3", "navbar-expand-lg"], [1, "container", "px-4", "mx-auto", "flex", "flex-wrap", "items-center", "justify-between"], [1, "w-full", "relative", "flex", "justify-between", "lg:w-auto", "lg:static", "lg:block", "lg:justify-start"], ["translate", "", 1, "lg:text-blueGray-200", "text-blueGray-200", "text-lg", "leading-lg", "mr-2"], ["type", "button", 1, "cursor-pointer", "text-xl", "leading-none", "px-3", "py-1", "border", "border-solid", "border-transparent", "rounded", "bg-transparent", "block", "lg:hidden", "outline-none", "focus:outline-none", 3, "routerLink"], [1, "text-white", "fas", "fa-bars"], [1, "text-white"], ["id", "example-navbar-warning", 1, "lg:flex", "flex-grow", "items-center", "bg-white", "lg:bg-opacity-0", "lg:shadow-none"], [1, "flex", "flex-col", "lg:flex-row", "list-none"], [1, "flex", "items-center"], [1, "lg:text-blueGray-200", "text-blueGray-200", "text-lg", "leading-lg", "mr-2"], ["translate", "", 1, "text-xl", "font-semibold", "inline-block", "px-2", "uppercase", "rounded", "text-blueGray-600", "bg-blueGray-200", "uppercase", "last:mr-0", "mr-1"]], template: function ViewNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Form.title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Form.summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Form.serial_number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LW5hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "kkKM":
/*!*************************************************************************!*\
  !*** ./src/app/components/navbars/code-navbar/code-navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: CodeNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeNavbarComponent", function() { return CodeNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/auth/login"]; };
class CodeNavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
CodeNavbarComponent.ɵfac = function CodeNavbarComponent_Factory(t) { return new (t || CodeNavbarComponent)(); };
CodeNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeNavbarComponent, selectors: [["app-code-navbar"]], decls: 20, vars: 2, consts: [[1, "top-0", "absolute", "z-50", "w-full", "flex", "flex-wrap", "items-center", "justify-between", "px-2", "py-3", "navbar-expand-lg"], [1, "container", "px-4", "mx-auto", "flex", "flex-wrap", "items-center", "justify-between"], [1, "w-full", "relative", "flex", "justify-between", "lg:w-auto", "lg:static", "lg:block", "lg:justify-start"], ["translate", "", 1, "lg:text-blueGray-200", "text-blueGray-200", "text-lg", "leading-lg", "mr-2"], ["type", "button", 1, "cursor-pointer", "text-xl", "leading-none", "px-3", "py-1", "border", "border-solid", "border-transparent", "rounded", "bg-transparent", "block", "lg:hidden", "outline-none", "focus:outline-none", 3, "routerLink"], [1, "text-white", "fas", "fa-bars"], [1, "text-white"], ["id", "example-navbar-warning", 1, "lg:flex", "flex-grow", "items-center", "bg-white", "lg:bg-opacity-0", "lg:shadow-none"], [1, "flex", "flex-col", "lg:flex-row", "list-none"], [1, "flex", "items-center"], [1, "lg:text-blueGray-200", "text-blueGray-200", "text-lg", "leading-lg", "mr-2"], ["translate", "", 1, "text-xl", "font-semibold", "inline-block", "px-2", "uppercase", "rounded", "text-blueGray-600", "bg-blueGray-200", "uppercase", "last:mr-0", "mr-1"]], template: function CodeNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Form.title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Form.summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Form.serial_number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2RlLW5hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "oT9s":
/*!*************************************************************!*\
  !*** ./src/app/views/auth/edit-form/edit-form.component.ts ***!
  \*************************************************************/
/*! exports provided: EditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function() { return EditFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_navbars_form_navbar_form_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/navbars/form-navbar/form-navbar.component */ "1ovs");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function EditFormComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditFormComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.nationalId");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditFormComponent_span_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.passportId");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditFormComponent_span_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.nationalImg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditFormComponent_span_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.passportImg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditFormComponent_img_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 46);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.nationalURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function EditFormComponent_img_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 46);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.passportURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function EditFormComponent_span_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditFormComponent_span_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.criminal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditFormComponent_img_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 46);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r9.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function EditFormComponent_img_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 46);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r10.criminalURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function EditFormComponent_span_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditFormComponent_span_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditFormComponent_span_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error.address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EditFormComponent {
    constructor(datepipe, translate, http, router) {
        this.datepipe = datepipe;
        this.translate = translate;
        this.http = http;
        this.router = router;
        this.fileName = this.translate.translateWord();
        this.national = this.translate.translateWord();
        this.photoMsq = this.translate.translateWord();
        this.criminalMsq = this.translate.translateWord();
        this.error = '';
    }
    ngOnInit() {
        this.applicant = history.state;
        this.register = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.applicant.fullName, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.applicant.destination),
            purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            nationalId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.applicant.nationalID, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            passportId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.applicant.passportID, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            nationalImg: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            passportImg: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            criminal: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.applicant.address, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.applicant.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.applicant.email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.applicant.city),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.applicant.country)
        });
        this.passBtn = this.applicant.nationalImg.name;
        this.nationalBtn = this.applicant.passportImg.name;
        this.photoBtn = this.applicant.photoImg.name;
        this.criminalBtn = this.applicant.criminalImg.name;
        var reader1 = new FileReader();
        reader1.readAsDataURL(this.applicant.nationalImg);
        reader1.onload = (_event) => {
            this.nationalURL = reader1.result;
        };
        var reader2 = new FileReader();
        reader2.readAsDataURL(this.applicant.criminalImg);
        reader2.onload = (_event) => {
            this.criminalURL = reader2.result;
        };
        var reader3 = new FileReader();
        reader3.readAsDataURL(this.applicant.passportImg);
        reader3.onload = (_event) => {
            this.passportURL = reader3.result;
        };
        var reader4 = new FileReader();
        reader4.readAsDataURL(this.applicant.photoImg);
        reader4.onload = (_event) => {
            this.photoURL = reader4.result;
        };
        this.nationalFile = this.applicant.nationalImg;
        this.passportFile = this.applicant.passportImg;
        this.photoFile = this.applicant.photoImg;
        this.criminalFile = this.applicant.criminalImg;
        this.fileName = '';
        this.national = '';
        this.photoMsq = '';
        this.criminalMsq = '';
        console.log(this.applicant.nationalImg.name);
    }
    get name() { return this.register.get('name'); }
    ;
    get destination() { return this.register.get('destination'); }
    get purpose() { return this.register.get('purpose'); }
    get nationalImg() { return this.register.get('nationalImg'); }
    ;
    get passportImg() { return this.register.get('passportImg'); }
    ;
    get photo() { return this.register.get('photo'); }
    ;
    get criminal() { return this.register.get('criminal'); }
    ;
    get nationalId() { return this.register.get('nationalId'); }
    get passportId() { return this.register.get('passportId'); }
    get address() { return this.register.get('address'); }
    get phone() { return this.register.get('phone'); }
    get email() { return this.register.get('email'); }
    get city() { return this.register.get('city'); }
    get country() { return this.register.get('country'); }
    postData() {
        if (this.register.valid) {
            let applicant = {
                fullName: this.register.get("name").value,
                purpose: this.register.get("purpose").value,
                destination: this.register.get("destination").value,
                nationalID: this.register.get("nationalId").value,
                passportID: this.register.get("passportId").value,
                nationalImg: this.nationalFile,
                passportImg: this.passportFile,
                photoImg: this.photoFile,
                criminalImg: this.criminalFile,
                phone: this.register.get("phone").value,
                email: this.register.get("email").value,
                address: this.register.get("address").value,
                city: this.register.get("city").value,
                country: this.register.get("country").value,
                status: false,
                date: this.datepipe.transform(Date(), 'YYYY-MM-dd HH:MM:SS'),
                submissionID: ''
            };
            console.log(applicant);
            this.router.navigateByUrl('/auth/view-data', { state: applicant });
        }
        else {
            this.error = 'You need to anter all the fields';
        }
    }
    onFileSelected(event) {
        if (event.target.files.length > 0) {
            this.national = '';
            this.nationalBtn = event.target.files[0].name;
            this.nationalFile = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (_event) => {
                this.nationalURL = reader.result;
            };
        }
    }
    readImage(file, target) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
            target = reader.result;
        };
    }
    onPhotoChange(event) {
        if (event.target.files.length > 0) {
            this.photoFile = event.target.files[0];
            this.photoMsq = '';
            this.photoBtn = event.target.files[0].name;
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (_event) => {
                this.photoURL = reader.result;
            };
        }
    }
    onCriminalChange(event) {
        if (event.target.files.length > 0) {
            this.criminalFile = event.target.files[0];
            this.criminalMsq = '';
            this.criminalBtn = event.target.files[0].name;
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (_event) => {
                this.criminalURL = reader.result;
            };
        }
    }
    onChange(event) {
        if (event.target.files.length > 0) {
            this.passportFile = event.target.files[0];
            this.fileName = '';
            this.passBtn = event.target.files[0].name;
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (_event) => {
                this.passportURL = reader.result;
            };
        }
    }
}
EditFormComponent.ɵfac = function EditFormComponent_Factory(t) { return new (t || EditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
EditFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditFormComponent, selectors: [["app-edit-form"]], decls: 184, vars: 85, consts: [[1, "mx-auto", 2, "width", "800px"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-blueGray-100", "border-0"], [1, "rounded-t", "bg-blueGray-600", "mb-0", "px-6", "py-6"], [1, "text-center", "flex", "justify-between"], [1, "flex-auto", "px-4", "lg:px-10", "py-10", "pt-0"], ["translate", "", 1, "text-blueGray-700", "text-xl", "font-bold", "text-center"], [3, "formGroup"], ["translate", "", 1, "text-blueGray-400", "text-sm", "mt-3", "mb-6", "font-bold", "uppercase"], [1, "flex", "flex-wrap"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "relative", "w-full", "mb-3"], ["htmlFor", "grid-password", "translate", "", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], [1, "z-10", "h-full", "leading-snug", "font-normal", "absolute", "text-center", "text-blueGray-300", "absolute", "bg-transparent", "rounded", "text-base", "items-center", "justify-center", "w-8", "py-3", 2, "margin-right", "90%"], [1, "fas", "fa-info-circle"], ["type", "text", "formControlName", "name", "required", "", "maxlength", "20", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder", "value"], ["style", "color: red;", "translate", "", 4, "ngIf"], [1, "w-full", "lg:w-3/12", "px-4"], ["formControlName", "destination", 1, "border-0", "px-5", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], [3, "label"], [3, "value"], ["formControlName", "purpose", 1, "border-0", "px-5", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], ["type", "text", "formControlName", "nationalId", "required", "", "minlength", "14", "maxlength", "14", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], ["type", "text", "formControlName", "passportId", "required", "", "minlength", "9", "maxlength", "9", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], [1, "mt-6", "border-b-1", "border-blueGray-300"], [1, "w-full", "lg:w-6/12", "px-1"], ["type", "button", "id", "loadFileXml", "onclick", "document.getElementById('file').click();", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "file", "id", "file", "name", "file", "formControlName", "nationalImg", 2, "display", "none", 3, "change"], [1, "block", "uppercase", "text-blueGray-600", "text-xs", "py-3", "font-bold", "mb-2"], ["type", "button", "id", "loadFileXml", "onclick", "document.getElementById('file1').click();", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "file", "id", "file1", "name", "file1", "formControlName", "passportImg", 2, "display", "none", 3, "change"], [2, "width", "52%", "height", "50%"], ["style", "display: block;\n              margin-left: auto;\n              margin-right: auto;", 3, "src", 4, "ngIf"], ["style", "display: block;\n                  margin-left: auto;\n                  margin-right: auto;", 3, "src", 4, "ngIf"], ["type", "button", "id", "loadFileXml", "onclick", "document.getElementById('file3').click();", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "file", "id", "file3", "name", "file3", "formControlName", "photo", 2, "display", "none", 3, "change"], ["type", "button", "id", "loadFileXml", "onclick", "document.getElementById('file4').click();", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "file", "id", "file4", "name", "file4", "formControlName", "criminal", 2, "display", "none", 3, "change"], ["type", "text", "formControlName", "phone", "required", "", "minlength", "11", "maxlength", "11", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "email", "formControlName", "email", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], [1, "w-full", "lg:w-12/12", "px-4"], ["type", "text", "formControlName", "address", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], ["formControlName", "city", 1, "border-0", "px-5", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], ["formControlName", "country", 1, "border-0", "px-5", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], [1, "w-full", "lg:w-4/12", "px-4"], ["type", "button", "translate", "", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "click"], ["translate", "", 2, "color", "red"], [2, "display", "block", "margin-left", "auto", "margin-right", "auto", 3, "src"]], template: function EditFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-form-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Form.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Form.personal_info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Form.name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, EditFormComponent_span_22_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Form.destination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "optgroup", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Form.purpose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "optgroup", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Form.id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, EditFormComponent_span_57_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Form.passport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, EditFormComponent_span_66_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Form.attachment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Form.attach_national ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditFormComponent_Template_input_change_78_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, EditFormComponent_span_79_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " Form.attach_passport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditFormComponent_Template_input_change_90_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, EditFormComponent_span_91_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, EditFormComponent_img_97_Template, 1, 1, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, EditFormComponent_img_100_Template, 1, 1, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " Form.photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditFormComponent_Template_input_change_108_listener($event) { return ctx.onPhotoChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, EditFormComponent_span_109_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Form.criminal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditFormComponent_Template_input_change_120_listener($event) { return ctx.onCriminalChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, EditFormComponent_span_121_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](127, EditFormComponent_img_127_Template, 1, 1, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](130, EditFormComponent_img_130_Template, 1, 1, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, " Form.contact_info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " Form.phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, EditFormComponent_span_141_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, " Form.email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, EditFormComponent_span_148_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " Form.address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](155, EditFormComponent_span_155_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, " Form.city ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "optgroup", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](162, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](164, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](166, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, " Form.country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "optgroup", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](173, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](175, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditFormComponent_Template_button_click_181_listener() { return ctx.postData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, " Form.save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 45, "Form.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.applicant.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name.invalid && ctx.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 47, "Select.destination"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 49, "Select.libya"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 51, "Select.libya"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 53, "Select.travel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 55, "Select.away"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 57, "Select.away"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 59, "Select.home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 61, "Select.home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 63, "Form.id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nationalId.invalid && ctx.nationalId.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 65, "Form.passport"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passportId.invalid && ctx.passportId.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.nationalBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nationalImg.invalid && ctx.nationalImg.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.national);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.passBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passportImg.invalid && ctx.passportImg.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nationalURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passportURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.photoBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.photo.invalid && ctx.photo.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.photoMsq, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.criminalBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.criminal.invalid && ctx.criminal.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.criminalMsq, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.photoURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.criminalURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](140, 67, "Form.code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phone.invalid && ctx.phone.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](147, 69, "Form.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](154, 71, "Form.address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.address.invalid && ctx.address.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](162, 73, "Select.city"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](164, 75, "Select.cairo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](166, 77, "Select.cairo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](173, 79, "Select.country"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](175, 81, "Select.egypt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](177, 83, "Select.egypt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
    } }, directives: [_components_navbars_form_navbar_form_navbar_component__WEBPACK_IMPORTED_MODULE_6__["FormNavbarComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "qHFm":
/*!************************************************************************!*\
  !*** ./src/app/views/admin/edit-applicant/edit-applicant.component.ts ***!
  \************************************************************************/
/*! exports provided: EditApplicantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApplicantComponent", function() { return EditApplicantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class EditApplicantComponent {
    constructor(translate) {
        this.translate = translate;
        this.fileName = this.translate.translateWord();
    }
    onFileSelected(event) {
        if (event.target.files.length > 0) {
            this.fileName = event.target.files[0].name;
        }
    }
    ngOnInit() {
    }
}
EditApplicantComponent.ɵfac = function EditApplicantComponent_Factory(t) { return new (t || EditApplicantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"])); };
EditApplicantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditApplicantComponent, selectors: [["app-edit-applicant"]], decls: 118, vars: 55, consts: [[1, "mx-auto", 2, "width", "800px"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-blueGray-200", "border-0"], [1, "flex-auto", "px-4", "lg:px-10", "py-10", "pt-0"], ["translate", "", 1, "text-blueGray-700", "text-xl", "font-bold", "text-center"], ["translate", "", 1, "text-blueGray-400", "text-sm", "mt-3", "mb-6", "font-bold", "uppercase"], [1, "flex", "flex-wrap"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "relative", "w-full", "mb-3"], ["htmlFor", "grid-password", "translate", "", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], [1, "z-10", "h-full", "leading-snug", "font-normal", "absolute", "text-center", "text-blueGray-300", "absolute", "bg-transparent", "rounded", "text-base", "items-center", "justify-center", "w-8", "py-3", 2, "margin-right", "90%"], [1, "fas", "fa-info-circle"], ["type", "text", "required", "", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], [1, "border-0", "px-5", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], [3, "label"], [3, "value"], ["type", "text", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], [1, "text-center", "flex", "justify-between"], [1, "w-full", "lg:w-6/12", "px-1"], ["type", "button", "id", "loadFileXml", "onclick", "document.getElementById('file').click();", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "file", "id", "file", "name", "file", 2, "display", "none", 3, "change"], ["type", "text", "placeholder", "yu32338ha", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], [1, "mt-6", "border-b-1", "border-blueGray-300"], ["type", "text", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "value"], ["type", "email", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150", 3, "placeholder"], [1, "w-full", "lg:w-12/12", "px-4"], [1, "w-full", "lg:w-4/12", "px-4"], ["type", "submit", "translate", "", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-600", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1", "w-full", "ease-linear", "transition-all", "duration-150", 3, "routerLink"]], template: function EditApplicantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Form.edit_info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Form.personal_info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Form.name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Form.destination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "optgroup", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Form.id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Form.attach_national ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditApplicantComponent_Template_input_change_46_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Form.passport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Form.attach_passport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditApplicantComponent_Template_input_change_65_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Form.contact_info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Form.phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Form.email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Form.address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Form.city ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "optgroup", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Form.country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "optgroup", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Form.edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 19, "Data.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 21, "Data.destination"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 23, "Data.destination"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 25, "Data.destination"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 27, "Data.national"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 29, "Form.file"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 31, "Data.national_copy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 33, "Form.file"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 35, "Data.passport_copy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](78, 37, "Data.phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 39, "Data.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 41, "Data.address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](97, 43, "Select.city"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 45, "Data.city"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 47, "Data.city"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](108, 49, "Select.country"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 51, "Data.country"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](112, 53, "Data.country"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/auth/view-data");
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWFwcGxpY2FudC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "rKqC":
/*!****************************************************!*\
  !*** ./src/app/views/admin/maps/maps.component.ts ***!
  \****************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/maps/map-example/map-example.component */ "u/sr");


class MapsComponent {
    constructor() { }
    ngOnInit() { }
}
MapsComponent.ɵfac = function MapsComponent_Factory(t) { return new (t || MapsComponent)(); };
MapsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapsComponent, selectors: [["app-maps"]], decls: 4, vars: 0, consts: [[1, "flex", "flex-wrap"], [1, "w-full", "px-4"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-6", "shadow-lg", "rounded"]], template: function MapsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-map-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_1__["MapExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "u/sr":
/*!**********************************************************************!*\
  !*** ./src/app/components/maps/map-example/map-example.component.ts ***!
  \**********************************************************************/
/*! exports provided: MapExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapExampleComponent", function() { return MapExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MapExampleComponent {
    constructor() { }
    ngOnInit() {
        let map = document.getElementById("map-canvas");
        let lat = map.getAttribute("data-lat");
        let lng = map.getAttribute("data-lng");
        const myLatlng = new google.maps.LatLng(lat, lng);
        const mapOptions = {
            zoom: 12,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#444444" }],
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{ color: "#f2f2f2" }],
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{ saturation: -100 }, { lightness: 45 }],
                },
                {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{ visibility: "simplified" }],
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{ color: "#feb2b2" }, { visibility: "on" }],
                },
            ],
        };
        map = new google.maps.Map(map, mapOptions);
        const marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hello World!",
        });
        const contentString = '<div class="info-window-content"><h2>Notus Angular</h2>' +
            "<p>A beautiful UI Kit and Admin for Tailwind CSS. It is Free and Open Source.</p></div>";
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
    }
}
MapExampleComponent.ɵfac = function MapExampleComponent_Factory(t) { return new (t || MapExampleComponent)(); };
MapExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapExampleComponent, selectors: [["app-map-example"]], decls: 1, vars: 0, consts: [["id", "map-canvas", "data-lat", "40.748817", "data-lng", "-73.985428", 1, "relative", "w-full", "rounded", "h-600-px"]], template: function MapExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ "uhhN":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/card-table/card-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTableComponent", function() { return CardTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");









function CardTableComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u274C \u0644\u0645 \u064A\u062A\u0645 \u0645\u0631\u0627\u062C\u0639\u062A\u0647 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardTableComponent_tr_26_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const applicant_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navigateApplicant(applicant_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicant_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", applicant_r1.submissionID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", applicant_r1.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, applicant_r1.date, "short"), " ");
} }
class CardTableComponent {
    constructor(translateConfigService, http, router) {
        this.translateConfigService = translateConfigService;
        this.http = http;
        this.router = router;
        this._color = "light";
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    navigateApplicant(applicant) {
        this.router.navigateByUrl('/admin/view-applicant', { state: applicant });
    }
    ngOnInit() {
        this.http.get('http://45.56.117.204:8000/api/Applicants/', {
            headers: { 'Authorization': 'Token 870d88a50b2847f998bcfb40bc072ff0e0af0ddf' }
        }).subscribe((data) => {
            this.applicants = data;
        }, (err) => {
            if (err.status == 0) {
                this.error = "Connection Error";
            }
            this.error = this.translateConfigService.error("login");
        });
        this.http.get('http://45.56.117.204:8000/api/auth/', {
            headers: { 'Authorization': 'Token 870d88a50b2847f998bcfb40bc072ff0e0af0ddf' }
        }).subscribe((data) => {
            this.auth = data;
        }, (err) => {
            if (err.status == 0) {
                this.error = "Connection Error";
            }
            this.error = this.translateConfigService.error("login");
        });
    }
}
CardTableComponent.ɵfac = function CardTableComponent_Factory(t) { return new (t || CardTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CardTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardTableComponent, selectors: [["app-card-table"]], inputs: { color: "color" }, decls: 28, vars: 15, consts: [[1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded", 3, "ngClass"], [1, "rounded-t", "bg-blueGray-600", "mb-0", "px-6", "py-6"], [1, "text-center", "flex", "justify-between"], ["translate", "", 1, "font-semibold", "text-lg", 3, "ngClass"], [1, "w-full", "lg:w-4/12", "px-1"], [1, "relative", "flex", "w-full", "flex-wrap", "items-stretch"], ["type", "text", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-800", "text-blueGray-600", "relative", "bg-white", "bg-white", "rounded", "text-sm", "shadow", "outline-none", "focus:outline-none", "focus:ring", "w-full", "pl-10", 3, "placeholder", "ngModel", "ngModelChange"], [1, "rounded-t", "mb-0", "px-4", "py-3", "border-0"], [1, "flex", "flex-wrap", "items-center"], [1, "relative", "w-full", "px-4", "max-w-full", "flex-grow", "flex-1"], [1, "block", "w-full", "overflow-x-auto"], [1, "items-center", "w-full", "bg-transparent", "border-collapse"], ["translate", "", 1, "px-6", "border", "border-solid", "py-3", "text-xs", "uppercase", "border-l-0", "border-r-0", "whitespace-nowrap", "p-4", "font-semibold", "text-right", 3, "ngClass"], [1, "px-6", "border", "border-solid", "py-3", "text-xs", "uppercase", "border-l-0", "border-r-0", "whitespace-nowrap", "p-4", "font-semibold", "text-right", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "px-6", "border-t-0", "align-middle", "border-l-0", "border-r-0", "text-xs", "whitespace-nowrap", "p-4"], [1, "border-t-0", "px-6", "align-middle", "border-l-0", "border-r-0", "text-xs", "whitespace-nowrap", "p-4"], [1, "border-t-0", "px-6", "align-middle", "border-l-0", "border-r-0", "text-xs", "whitespace-nowrap", "p-4", "text-right"], ["type", "button", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-50", "text-xs", "font-bold", "px-4", "py-2", "rounded", "shadow", "hover:shadow-md", "outline-none", "focus:outline-none", "lg:mr-1", "lg:mb-0", "ml-3", "mb-3", "ease-linear", "transition-all", "duration-150", 3, "click"]], template: function CardTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Table.title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardTableComponent_Template_input_ngModelChange_7_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Table.id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Table.name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Table.date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Table.review ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CardTableComponent_tr_26_Template, 14, 6, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.color === "light" ? "bg-white" : "bg-red-900 text-white");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.color === "light" ? "text-white" : "text-white");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, "Table.search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.color === "light" ? "bg-blueGray-50 text-black border-blueGray-100" : "bg-red-800 text-red-300 border-red-700");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.color === "light" ? "bg-blueGray-50 text-black border-blueGray-100" : "bg-red-800 text-red-300 border-red-700");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.color === "light" ? "bg-blueGray-50 text-black border-blueGray-100" : "bg-red-800 text-red-300 border-red-700");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.color === "light" ? "bg-blueGray-50 text-black border-blueGray-100" : "bg-red-800 text-red-300 border-red-700");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.color === "light" ? "bg-blueGray-50 text-black border-blueGray-100" : "bg-red-800 text-red-300 border-red-700");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 12, ctx.applicants, ctx.searchText));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/admin/admin.component */ "R+tk");
/* harmony import */ var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/auth/auth.component */ "Vbwu");
/* harmony import */ var _views_auth_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/auth/admin-login/admin-login.component */ "gPp3");
/* harmony import */ var _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/admin/settings/settings.component */ "90Li");
/* harmony import */ var _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/admin/tables/tables.component */ "VTaN");
/* harmony import */ var _views_auth_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/auth/edit-form/edit-form.component */ "oT9s");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/auth/login/login.component */ "/kjZ");
/* harmony import */ var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/auth/register/register.component */ "LN9C");
/* harmony import */ var _views_auth_saved_data_saved_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/auth/saved-data/saved-data.component */ "BdIN");
/* harmony import */ var _views_auth_user_code_user_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/auth/user-code/user-code.component */ "VriY");
/* harmony import */ var _views_auth_view_data_view_data_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/auth/view-data/view-data.component */ "W8iF");
/* harmony import */ var _views_index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/index/index.component */ "AiJS");
/* harmony import */ var _views_admin_view_applicant_view_applicant_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/admin/view-applicant/view-applicant.component */ "cRi9");
/* harmony import */ var _views_admin_edit_applicant_edit_applicant_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/admin/edit-applicant/edit-applicant.component */ "qHFm");
/* harmony import */ var _models_applicant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./models/applicant */ "ZsR3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


// layouts






// auth views





// no layouts views






const routes = [
    // admin views
    {
        path: "admin",
        component: _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        children: [
            { path: "settings", component: _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"] },
            { path: "main", component: _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"] },
            { path: "view-applicant", component: _views_admin_view_applicant_view_applicant_component__WEBPACK_IMPORTED_MODULE_14__["ViewApplicantComponent"] },
            { path: "edit-applicant", component: _views_admin_edit_applicant_edit_applicant_component__WEBPACK_IMPORTED_MODULE_15__["EditApplicantComponent"] },
            { path: "", redirectTo: "main", pathMatch: "full" },
        ],
    },
    // auth views
    {
        path: "auth",
        component: _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [
            { path: "login", component: _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            { path: "register", component: _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
            { path: "view-data", component: _views_auth_view_data_view_data_component__WEBPACK_IMPORTED_MODULE_12__["ViewDataComponent"], data: _models_applicant__WEBPACK_IMPORTED_MODULE_16__["Applicant"] },
            { path: "user-code", component: _views_auth_user_code_user_code_component__WEBPACK_IMPORTED_MODULE_11__["UserCodeComponent"] },
            { path: "edit-form", component: _views_auth_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_7__["EditFormComponent"] },
            { path: "saved-data", component: _views_auth_saved_data_saved_data_component__WEBPACK_IMPORTED_MODULE_10__["SavedDataComponent"] },
            { path: "admin-login", component: _views_auth_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__["AdminLoginComponent"] },
            { path: "", redirectTo: "register", pathMatch: "full" },
        ],
    },
    { path: "admin", component: _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"] },
    // no layout views
    { path: "saved-data", component: _views_auth_saved_data_saved_data_component__WEBPACK_IMPORTED_MODULE_10__["SavedDataComponent"] },
    { path: "admin-login", component: _views_auth_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__["AdminLoginComponent"] },
    { path: "", component: _views_index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"] },
    { path: "**", redirectTo: "", pathMatch: "full" },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vwLF":
/*!***************************************************************************!*\
  !*** ./src/app/components/cards/card-settings/card-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: CardSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSettingsComponent", function() { return CardSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class CardSettingsComponent {
    constructor() { }
    ngOnInit() { }
}
CardSettingsComponent.ɵfac = function CardSettingsComponent_Factory(t) { return new (t || CardSettingsComponent)(); };
CardSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardSettingsComponent, selectors: [["app-card-settings"]], decls: 66, vars: 0, consts: [[1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-blueGray-100", "border-0"], [1, "rounded-t", "bg-white", "mb-0", "px-6", "py-6"], [1, "text-center", "flex", "justify-between"], [1, "text-blueGray-700", "text-xl", "font-bold"], ["type", "button", 1, "bg-red-600", "text-white", "active:bg-red-700", "font-bold", "uppercase", "text-xs", "px-4", "py-2", "rounded", "shadow", "hover:shadow-md", "outline-none", "focus:outline-none", "mr-1", "ease-linear", "transition-all", "duration-150"], [1, "flex-auto", "px-4", "lg:px-10", "py-10", "pt-0"], [1, "text-blueGray-400", "text-sm", "mt-3", "mb-6", "font-bold", "uppercase"], [1, "flex", "flex-wrap"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "relative", "w-full", "mb-3"], ["htmlFor", "grid-password", 1, "block", "uppercase", "text-blueGray-600", "text-xs", "font-bold", "mb-2"], ["type", "text", "value", "lucky.jesse", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], ["type", "email", "value", "jesse@example.com", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], ["type", "text", "value", "Lucky", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], ["type", "text", "value", "Jesse", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], [1, "mt-6", "border-b-1", "border-blueGray-300"], [1, "w-full", "lg:w-12/12", "px-4"], ["type", "text", "value", "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], [1, "w-full", "lg:w-4/12", "px-4"], ["type", "email", "value", "New York", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], ["type", "text", "value", "United States", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], ["type", "text", "value", "Postal Code", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"], ["type", "text", "rows", "4", 1, "border-0", "px-3", "py-3", "placeholder-blueGray-300", "text-blueGray-600", "bg-white", "rounded", "text-sm", "shadow", "focus:outline-none", "focus:ring", "w-full", "ease-linear", "transition-all", "duration-150"]], template: function CardSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " User Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " First Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Contact Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Postal Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " About Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " About me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "                  A beautiful UI Kit and Admin for Angular & Tailwind CSS. It is Free\n                  and Open Source.\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], encapsulation: 2 });


/***/ }),

/***/ "wF9P":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navbars/auth-navbar/auth-navbar.component */ "zslb");
/* harmony import */ var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footers/footer/footer.component */ "1DoU");



class ProfileComponent {
    constructor() { }
    ngOnInit() { }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 57, vars: 0, consts: [[1, "profile-page"], [1, "relative", "block", "h-500-px"], [1, "absolute", "top-0", "w-full", "h-full", "bg-center", "bg-cover", 2, "background-image", "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"], ["id", "blackOverlay", 1, "w-full", "h-full", "absolute", "opacity-50", "bg-black"], [1, "top-auto", "bottom-0", "left-0", "right-0", "w-full", "absolute", "pointer-events-none", "overflow-hidden", "h-70-px", 2, "transform", "translateZ(0)"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none", "version", "1.1", "viewBox", "0 0 2560 100", "x", "0", "y", "0", 1, "absolute", "bottom-0", "overflow-hidden"], ["points", "2560 0 2560 100 0 100", 1, "text-blueGray-200", "fill-current"], [1, "relative", "py-16", "bg-blueGray-200"], [1, "container", "mx-auto", "px-4"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-6", "shadow-xl", "rounded-lg", "-mt-64"], [1, "px-6"], [1, "flex", "flex-wrap", "justify-center"], [1, "w-full", "lg:w-3/12", "px-4", "lg:order-2", "flex", "justify-center"], [1, "relative"], ["alt", "...", "src", "assets/img/team-2-800x800.jpg", 1, "shadow-xl", "rounded-full", "h-auto", "align-middle", "border-none", "absolute", "-m-16", "-ml-20", "lg:-ml-16", "max-w-150-px"], [1, "w-full", "lg:w-4/12", "px-4", "lg:order-3", "lg:text-right", "lg:self-center"], [1, "py-6", "px-3", "mt-32", "sm:mt-0"], ["type", "button", 1, "bg-red-600", "active:bg-red-700", "uppercase", "text-white", "font-bold", "hover:shadow-md", "shadow", "text-xs", "px-4", "py-2", "rounded", "outline-none", "focus:outline-none", "sm:mr-2", "mb-1", "ease-linear", "transition-all", "duration-150"], [1, "w-full", "lg:w-4/12", "px-4", "lg:order-1"], [1, "flex", "justify-center", "py-4", "lg:pt-4", "pt-8"], [1, "mr-4", "p-3", "text-center"], [1, "text-xl", "font-bold", "block", "uppercase", "tracking-wide", "text-blueGray-600"], [1, "text-sm", "text-blueGray-400"], [1, "lg:mr-4", "p-3", "text-center"], [1, "text-center", "mt-12"], [1, "text-4xl", "font-semibold", "leading-normal", "mb-2", "text-blueGray-700", "mb-2"], [1, "text-sm", "leading-normal", "mt-0", "mb-2", "text-blueGray-400", "font-bold", "uppercase"], [1, "fas", "fa-map-marker-alt", "mr-2", "text-lg", "text-blueGray-400"], [1, "mb-2", "text-blueGray-600", "mt-10"], [1, "fas", "fa-briefcase", "mr-2", "text-lg", "text-blueGray-400"], [1, "mb-2", "text-blueGray-600"], [1, "fas", "fa-university", "mr-2", "text-lg", "text-blueGray-400"], [1, "mt-10", "py-10", "border-t", "border-blueGray-200", "text-center"], [1, "w-full", "lg:w-9/12", "px-4"], [1, "mb-4", "text-lg", "leading-relaxed", "text-blueGray-700"], ["href", "javascript:void(0)", 1, "font-normal", "text-red-600"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-auth-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "polygon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Connect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 89 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Jenna Stones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Los Angeles, California ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Solution Manager - Creative Tim Officer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " University of Computer Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Show more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-footer");
    } }, directives: [_components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_1__["AuthNavbarComponent"], _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "wcq5":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PagesDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesDropdownComponent", function() { return PagesDropdownComponent; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "EjV/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["btnDropdownRef"];
const _c1 = ["popoverDropdownRef"];
const _c2 = function () { return ["/admin/dashboard"]; };
const _c3 = function () { return ["/admin/settings"]; };
const _c4 = function () { return ["/admin/tables"]; };
const _c5 = function () { return ["/admin/maps"]; };
const _c6 = function () { return ["/auth/login"]; };
const _c7 = function () { return ["/auth/register"]; };
const _c8 = function () { return ["/landing"]; };
const _c9 = function () { return ["/profile"]; };
class PagesDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngOnInit() { }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
            this.createPoppper();
        }
    }
    createPoppper() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
}
PagesDropdownComponent.ɵfac = function PagesDropdownComponent_Factory(t) { return new (t || PagesDropdownComponent)(); };
PagesDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PagesDropdownComponent, selectors: [["app-pages-dropdown"]], viewQuery: function PagesDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.btnDropdownRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popoverDropdownRef = _t.first);
    } }, decls: 29, vars: 17, consts: [["href", "#pablo", 1, "lg:text-white", "lg:hover:text-blueGray-200", "text-blueGray-700", "px-3", "py-4", "lg:py-2", "flex", "items-center", "text-xs", "uppercase", "font-bold", 3, "click"], ["btnDropdownRef", ""], [1, "bg-white", "text-base", "z-50", "float-left", "py-2", "list-none", "text-left", "rounded", "shadow-lg", "min-w-48", 3, "ngClass"], ["popoverDropdownRef", ""], [1, "text-sm", "pt-2", "pb-0", "px-4", "font-bold", "block", "w-full", "whitespace-nowrap", "bg-transparent", "text-blueGray-400"], [1, "text-sm", "py-2", "px-4", "font-normal", "block", "w-full", "whitespace-nowrap", "bg-transparent", "text-blueGray-700", 3, "routerLink"], [1, "h-0", "mx-4", "my-2", "border", "border-solid", "border-blueGray-100"]], template: function PagesDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagesDropdownComponent_Template_a_click_0_listener($event) { return ctx.toggleDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Demo Pages\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Admin Layout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Tables ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Maps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Auth Layout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " No Layout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.dropdownPopoverShow ? "block" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c9));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "xlab":
/*!***************************************************************************!*\
  !*** ./src/app/components/footers/footer-small/footer-small.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterSmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSmallComponent", function() { return FooterSmallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class FooterSmallComponent {
    constructor(translateConfigService) {
        this.translateConfigService = translateConfigService;
        this.date = new Date().getFullYear();
        this._absolute = false;
    }
    get absolute() {
        return this._absolute;
    }
    set absolute(absolute) {
        this._absolute = absolute === undefined ? false : absolute;
    }
    ngOnInit() { }
}
FooterSmallComponent.ɵfac = function FooterSmallComponent_Factory(t) { return new (t || FooterSmallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"])); };
FooterSmallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterSmallComponent, selectors: [["app-footer-small"]], inputs: { absolute: "absolute" }, decls: 19, vars: 0, consts: [[1, "pb-6", "relative"], [1, "container", "mx-auto", "px-4"], [1, "mb-6", "border-b-1", "border-blueGray-200"], [1, "flex", "flex-wrap", "items-center", "md:justify-between", "justify-center"], [1, "w-full", "md:w-4/12", "px-4"], [1, "text-sm", "text-blueGray-500", "font-semibold", "py-1", "text-center", "md:text-left"], ["href", "", "translate", "", 1, "text-blueGray-500", "hover:text-blueGray-300", "text-sm", "font-semibold", "py-1"], [1, "w-full", "md:w-8/12", "px-4"], [1, "flex", "flex-wrap", "list-none", "md:justify-end", "justify-center"], ["href", "", "translate", "", 1, "text-blueGray-500", "hover:text-blueGray-300", "text-sm", "font-semibold", "block", "py-1", "px-3"]], template: function FooterSmallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " HOME.copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " HOME.about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " HOME.terms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " HOME.contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"]], encapsulation: 2 });


/***/ }),

/***/ "xud4":
/*!***************************************************************************************!*\
  !*** ./src/app/components/cards/card-social-traffic/card-social-traffic.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CardSocialTrafficComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSocialTrafficComponent", function() { return CardSocialTrafficComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardSocialTrafficComponent {
    constructor() { }
    ngOnInit() { }
}
CardSocialTrafficComponent.ɵfac = function CardSocialTrafficComponent_Factory(t) { return new (t || CardSocialTrafficComponent)(); };
CardSocialTrafficComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardSocialTrafficComponent, selectors: [["app-card-social-traffic"]], decls: 79, vars: 0, consts: [[1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-6", "shadow-lg", "rounded"], [1, "rounded-t", "mb-0", "px-4", "py-3", "border-0"], [1, "flex", "flex-wrap", "items-center"], [1, "relative", "w-full", "px-4", "max-w-full", "flex-grow", "flex-1"], [1, "font-semibold", "text-base", "text-blueGray-700"], [1, "relative", "w-full", "px-4", "max-w-full", "flex-grow", "flex-1", "text-right"], ["type", "button", 1, "bg-indigo-500", "text-white", "active:bg-indigo-600", "text-xs", "font-bold", "uppercase", "px-3", "py-1", "rounded", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all", "duration-150"], [1, "block", "w-full", "overflow-x-auto"], [1, "items-center", "w-full", "bg-transparent", "border-collapse"], [1, "thead-light"], [1, "px-6", "bg-blueGray-50", "text-blueGray-500", "align-middle", "border", "border-solid", "border-blueGray-100", "py-3", "text-xs", "uppercase", "border-l-0", "border-r-0", "whitespace-nowrap", "font-semibold", "text-left"], [1, "px-6", "bg-blueGray-50", "text-blueGray-500", "align-middle", "border", "border-solid", "border-blueGray-100", "py-3", "text-xs", "uppercase", "border-l-0", "border-r-0", "whitespace-nowrap", "font-semibold", "text-left", "min-w-140-px"], [1, "border-t-0", "px-6", "align-middle", "border-l-0", "border-r-0", "text-xs", "whitespace-nowrap", "p-4", "text-left"], [1, "border-t-0", "px-6", "align-middle", "border-l-0", "border-r-0", "text-xs", "whitespace-nowrap", "p-4"], [1, "flex", "items-center"], [1, "mr-2"], [1, "relative", "w-full"], [1, "overflow-hidden", "h-2", "text-xs", "flex", "rounded", "bg-red-200"], [1, "shadow-none", "flex", "flex-col", "text-center", "whitespace-nowrap", "text-white", "justify-center", "bg-red-500", 2, "width", "60%"], [1, "overflow-hidden", "h-2", "text-xs", "flex", "rounded", "bg-emerald-200"], [1, "shadow-none", "flex", "flex-col", "text-center", "whitespace-nowrap", "text-white", "justify-center", "bg-emerald-500", 2, "width", "70%"], [1, "overflow-hidden", "h-2", "text-xs", "flex", "rounded", "bg-purple-200"], [1, "shadow-none", "flex", "flex-col", "text-center", "whitespace-nowrap", "text-white", "justify-center", "bg-purple-500", 2, "width", "80%"], [1, "overflow-hidden", "h-2", "text-xs", "flex", "rounded", "bg-lightBlue-200"], [1, "shadow-none", "flex", "flex-col", "text-center", "whitespace-nowrap", "text-white", "justify-center", "bg-lightBlue-500", 2, "width", "75%"], [1, "overflow-hidden", "h-2", "text-xs", "flex", "rounded", "bg-orange-200"], [1, "shadow-none", "flex", "flex-col", "text-center", "whitespace-nowrap", "text-white", "justify-center", "bg-orange-500", 2, "width", "30%"]], template: function CardSocialTrafficComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Social traffic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " See all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Referral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Visitors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 1,480 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 5,480 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 4,807 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Instagram ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 3,678 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " 2,645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/admin/main"]; };
class SidebarComponent {
    constructor(translateConfigService) {
        this.translateConfigService = translateConfigService;
        this.collapseShow = "hidden";
        this.language = "English";
    }
    changeLanguage() {
        if (this.language == 'العربية') {
            this.translateConfigService.changeLanguage('ar');
            this.language = 'English';
        }
        else {
            this.translateConfigService.changeLanguage('en');
            this.language = 'العربية';
        }
    }
    ngOnInit() { }
    toggleCollapseShow(classes) {
        this.collapseShow = classes;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 23, vars: 15, consts: [[1, "md:left-0", "md:block", "md:fixed", "md:top-0", "md:bottom-0", "md:overflow-y-auto", "md:flex-row", "md:flex-nowrap", "md:overflow-hidden", "shadow-xl", "bg-white", "flex", "flex-wrap", "items-center", "justify-between", "relative", "md:w-64", "z-10", "py-4", "px-6"], [1, "md:flex-col", "md:items-stretch", "md:min-h-full", "md:flex-nowrap", "px-0", "flex", "flex-wrap", "items-center", "justify-between", "w-full", "mx-auto"], [3, "routerLink"], ["src", "static/assets/img/tawasol small logo.png", "width", "140px", "height", "40px"], [1, "md:flex", "md:flex-col", "md:items-stretch", "md:opacity-100", "md:relative", "md:mt-4", "md:shadow-none", "shadow", "absolute", "top-0", "left-0", "right-0", "z-40", "overflow-y-auto", "overflow-x-hidden", "h-auto", "items-center", "flex-1", "rounded", 3, "ngClass"], [1, "my-4", "md:min-w-full"], [1, "md:flex-col", "md:min-w-full", "flex", "flex-col", "list-none"], [1, "items-center"], ["routerLinkActive", "", 1, "text-sm", "uppercase", "py-3", "font-bold", "block", 3, "routerLink", "ngClass"], ["adminDashboard", "routerLinkActive"], [1, "fas", "fa-tv", "mr-2", "text-sm", 3, "ngClass"], ["routerLinkActive", "", "translate", "", 1, "text-sm", "uppercase", "py-3", "font-bold", "block", 3, "ngClass"], ["adminSettings", "routerLinkActive"], [1, "fas", "fa-tools", "mr-2", "text-sm", 3, "ngClass"], ["routerLinkActive", "", 1, "text-sm", "uppercase", "py-3", "font-bold", "block", 3, "ngClass", "click"], ["adminMaps", "routerLinkActive"], [1, "fas", "fa-language", "mr-2", "text-sm", 3, "ngClass"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " SideBar.settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_19_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.collapseShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1))("ngClass", _r0.isActive ? "text-red-600 hover:text-red-700" : "text-blueGray-700 hover:text-blueGray-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _r0.isActive ? "opacity-75" : "text-blueGray-300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "SideBar.main"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _r1.isActive ? "text-red-600 hover:text-red-700" : "text-blueGray-700 hover:text-blueGray-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _r1.isActive ? "opacity-75" : "text-blueGray-300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _r2.isActive ? "text-red-600 hover:text-red-700" : "text-blueGray-700 hover:text-blueGray-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _r2.isActive ? "opacity-75" : "text-blueGray-300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.language, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zmeh":
/*!**************************************************************!*\
  !*** ./src/app/views/admin/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/cards/card-page-visits/card-page-visits.component */ "3IhM");
/* harmony import */ var _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/cards/card-social-traffic/card-social-traffic.component */ "xud4");



class DashboardComponent {
    constructor() { }
    ngOnInit() { }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 8, vars: 0, consts: [[1, "flex", "flex-wrap"], [1, "w-full", "xl:w-8/12", "mb-12", "xl:mb-0", "px-4"], [1, "w-full", "xl:w-4/12", "px-4"], [1, "flex", "flex-wrap", "mt-4"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-card-page-visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-card-social-traffic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_1__["CardPageVisitsComponent"], _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_2__["CardSocialTrafficComponent"]], encapsulation: 2 });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zslb":
/*!*************************************************************************!*\
  !*** ./src/app/components/navbars/auth-navbar/auth-navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNavbarComponent", function() { return AuthNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate-config.service */ "S64H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






const _c0 = function () { return ["/"]; };
const _c1 = function (a0, a1) { return { hidden: a0, "block rounded shadow-lg": a1 }; };
const _c2 = function () { return ["/auth/login"]; };
class AuthNavbarComponent {
    constructor(translateConfigService) {
        this.translateConfigService = translateConfigService;
        this.navbarOpen = false;
        this.language = 'English';
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
    changeLanguage() {
        if (this.language == 'العربية') {
            this.translateConfigService.changeLanguage('ar');
            this.language = 'English';
        }
        else {
            this.translateConfigService.changeLanguage('en');
            this.language = 'العربية';
        }
    }
}
AuthNavbarComponent.ɵfac = function AuthNavbarComponent_Factory(t) { return new (t || AuthNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"])); };
AuthNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthNavbarComponent, selectors: [["app-auth-navbar"]], decls: 29, vars: 11, consts: [[1, "top-0", "absolute", "z-50", "w-full", "flex", "flex-wrap", "items-center", "justify-between", "px-2", "navbar-expand-lg"], [3, "routerLink"], ["src", "static/assets/img/tawasol small logo.png", "width", "140px", "height", "40px"], [1, "container", "px-4", "mx-auto", "flex", "flex-wrap", "items-center", "justify-between"], [1, "w-full", "relative", "flex", "justify-between", "lg:w-auto", "lg:static", "lg:block", "lg:justify-start"], ["type", "button", 1, "cursor-pointer", "text-xl", "leading-none", "px-3", "py-1", "border", "border-solid", "border-transparent", "rounded", "bg-transparent", "block", "lg:hidden", "outline-none", "focus:outline-none", 3, "routerLink"], [1, "text-black", "fas", "fa-bars"], ["id", "example-navbar-warning", 1, "lg:flex", "flex-grow", "items-center", "bg-white", "lg:bg-opacity-0", "lg:shadow-none", 3, "ngClass"], [1, "flex", "flex-col", "lg:flex-row", "list-none", "lg:ml-auto"], [1, "flex", "items-center"], [1, "text-black"], [3, "click"], ["href", "", "target", "_blank", 1, "lg:text-black", "lg:hover:text-blueGray-200", "text-blueGray-700", "px-3", "py-4", "lg:py-2", "flex", "items-center", "text-xs", "uppercase", "font-bold"], [1, "lg:text-blueGray-800", "text-blueGray-400", "fab", "fa-facebook", "text-lg", "leading-lg"], [1, "lg:hidden", "inline-block", "ml-2"], [1, "lg:text-blueGray-800", "text-blueGray-400", "fab", "fa-instagram", "text-lg", "leading-lg"], ["type", "button", "translate", "", 1, "bg-blueGray-800", "text-white", "active:bg-blueGray-50", "text-xs", "font-bold", "uppercase", "px-4", "py-2", "rounded", "shadow", "hover:shadow-md", "outline-none", "focus:outline-none", "lg:mr-1", "lg:mb-0", "ml-3", "mb-3", "ease-linear", "transition-all", "duration-150", 3, "routerLink"]], template: function AuthNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthNavbarComponent_Template_button_click_14_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tweet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " HOME.view_form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, !ctx.navbarOpen, ctx.navbarOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.language, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"]], encapsulation: 2 });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
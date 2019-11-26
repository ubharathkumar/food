(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.userService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                console.log(currentUser.role + "fail in " + route.data.roles);
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }
        console.log("Need log in");
        // not logged in so redirect to login page with the return url{queryParams: {returnUrl: state.url}}
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_interceptors/error-interceptor.service.ts":
/*!************************************************************!*\
  !*** ./src/app/_interceptors/error-interceptor.service.ts ***!
  \************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.userService.logout();
                _this.router.navigate(['/login']);
            }
            var error = err.error || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_interceptors/jwt-interceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/_interceptors/jwt-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(userService) {
        this.userService = userService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.userService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: currentUser.type + " " + currentUser.token,
                    'Content-Type': 'application/json'
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/card/card.component */ "./src/app/pages/card/card.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/product-detail/detail.component */ "./src/app/pages/product-detail/detail.component.ts");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _pages_order_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/order/order.component */ "./src/app/pages/order/order.component.ts");
/* harmony import */ var _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/order-detail/order-detail.component */ "./src/app/pages/order-detail/order-detail.component.ts");
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/product-list/product.list.component */ "./src/app/pages/product-list/product.list.component.ts");
/* harmony import */ var _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/user-edit/user-detail.component */ "./src/app/pages/user-edit/user-detail.component.ts");
/* harmony import */ var _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/product-edit/product-edit.component */ "./src/app/pages/product-edit/product-edit.component.ts");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./enum/Role */ "./src/app/enum/Role.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _pages_checkout1_checkout1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/checkout1/checkout1.component */ "./src/app/pages/checkout1/checkout1.component.ts");
/* harmony import */ var _pages_checkout2_checkout2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/checkout2/checkout2.component */ "./src/app/pages/checkout2/checkout2.component.ts");
/* harmony import */ var _pages_checkout3_checkout3_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/checkout3/checkout3.component */ "./src/app/pages/checkout3/checkout3.component.ts");
/* harmony import */ var _pages_checkout4_checkout4_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/checkout4/checkout4.component */ "./src/app/pages/checkout4/checkout4.component.ts");
/* harmony import */ var _pages_custmeraccout_custmeraccout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/custmeraccout/custmeraccout.component */ "./src/app/pages/custmeraccout/custmeraccout.component.ts");





















var routes = [
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //{path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'productdetail', component: _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"] },
    { path: 'category/:id', component: _pages_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"] },
    { path: 'product', component: _pages_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"] },
    { path: 'category', component: _pages_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'logout', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'cart', component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] },
    { path: 'success', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'wishlist', component: _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_10__["OrderDetailComponent"],
    },
    { path: 'custaccout', component: _pages_custmeraccout_custmeraccout_component__WEBPACK_IMPORTED_MODULE_20__["CustmeraccoutComponent"] },
    { path: 'customerdashboard', component: _pages_order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"] },
    { path: 'seller', redirectTo: 'seller/product', pathMatch: 'full' },
    {
        path: 'seller/product',
        component: _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"],
        //canActivate: [AuthGuard],
        data: { roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Manager, _enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Employee] }
    },
    {
        path: 'profile',
        component: _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"],
    },
    {
        path: 'seller/product/edit',
        component: _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_13__["ProductEditComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Manager, _enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Employee] }
    },
    {
        path: 'seller/product/new',
        component: _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_13__["ProductEditComponent"],
        //canActivate: [AuthGuard],
        data: { roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_14__["Role"].Employee] }
    },
    {
        path: 'checkout1', component: _pages_checkout1_checkout1_component__WEBPACK_IMPORTED_MODULE_16__["Checkout1Component"]
    },
    {
        path: 'checkout2', component: _pages_checkout2_checkout2_component__WEBPACK_IMPORTED_MODULE_17__["Checkout2Component"]
    },
    {
        path: 'checkout3', component: _pages_checkout3_checkout3_component__WEBPACK_IMPORTED_MODULE_18__["Checkout3Component"]
    },
    {
        path: 'checkout4', component: _pages_checkout4_checkout4_component__WEBPACK_IMPORTED_MODULE_19__["Checkout4Component"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes) //{onSameUrlNavigation: 'reload'}
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n========================================= \r\n========================================= \r\n\r\n   Bootstrapious Boilerplate Template\r\n\r\n========================================= \r\n========================================= */\r\n/*\r\n*\r\n* ======================================================================\r\n* GENERAL\r\n* ======================================================================\r\n*\r\n*/\r\nbody {\r\n  overflow-x: hidden;\r\n  background-color: #f0f0f0;\r\n}\r\na, button {\r\n  transition: all 0.3s;\r\n  outline: none;\r\n}\r\na i.fa, button i.fa {\r\n  margin: 0 5px;\r\n}\r\nh1 {\r\n  font-weight: 700;\r\n}\r\n.btn-primary {\r\n  color: #fff !important;\r\n}\r\n.btn + .btn {\r\n  margin-left: 5px;\r\n}\r\n.disabled {\r\n  cursor: not-allowed;\r\n}\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n.menu-large {\r\n  position: static !important;\r\n}\r\n.menu-large .megamenu {\r\n  padding: 20px;\r\n  width: 100%;\r\n  max-width: 1140px;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n  margin-top: -1px;\r\n}\r\n.menu-large a.nav-link {\r\n  padding: 7px !important;\r\n  padding-left: 0 !important;\r\n}\r\n/*\r\n*\r\n* ======================================================================\r\n* TOP BAR\r\n* ======================================================================\r\n*\r\n*/\r\n#top {\r\n  background: #555;\r\n  padding: 10px 0;\r\n}\r\n#top .offer {\r\n  color: #fff;\r\n}\r\n#top .offer .btn {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n}\r\n@media (max-width: 991.98px) {\r\n  #top {\r\n    font-size: 0.738rem;\r\n    text-align: center;\r\n  }\r\n}\r\n#top a {\r\n  color: #fff;\r\n}\r\n#top ul.menu {\r\n  padding-top: 5px;\r\n  margin: 0;\r\n  font-size: 0.738rem;\r\n}\r\n#top ul.menu > li {\r\n  margin-right: 0;\r\n}\r\n#top ul.menu > li a {\r\n  color: #eee;\r\n}\r\n#top ul.menu > li + li:before {\r\n  content: \"|\\00a0\";\r\n  padding: 0 5px;\r\n  color: #f8f9fa;\r\n}\r\n#top ul.menu > .active {\r\n  color: #999;\r\n}\r\n#top #login-modal .modal-header {\r\n  background: #4fbfa8;\r\n}\r\n#top #login-modal .modal-header h5 {\r\n  color: #fff;\r\n}\r\n#top #login-modal a {\r\n  color: #4fbfa8;\r\n}\r\n#top #login-modal p {\r\n  font-weight: 300;\r\n  margin-bottom: 20px;\r\n}\r\n/*\r\n*\r\n* ======================================================================\r\n* NAVBAR\r\n* ======================================================================\r\n*\r\n*/\r\n.navbar {\r\n  border-bottom: 1px solid #e6e6e6;\r\n  background-color: #fff;\r\n}\r\n.navbar .navbar-nav > .nav-item > .nav-link {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  font-weight: 700;\r\n  padding: 30px 15px !important;\r\n  color: #555;\r\n}\r\n@media (max-width: 991.98px) {\r\n  .navbar .navbar-nav > .nav-item > .nav-link {\r\n    padding: 10px 15px !important;\r\n  }\r\n}\r\n.navbar .navbar-nav > .nav-item > .nav-link.active, .navbar .navbar-nav > .nav-item > .nav-link:hover, .navbar .navbar-nav > .nav-item > .nav-link:focus {\r\n  background: #4fbfa8;\r\n}\r\n@media (max-width: 991.98px) {\r\n  .navbar .dropdown-menu {\r\n    position: relative !important;\r\n    border: none;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .navbar .dropdown:hover .dropdown-menu {\r\n    display: block;\r\n  }\r\n}\r\n.navbar .megamenu {\r\n  padding: 30px !important;\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\r\n}\r\n@media (max-width: 991.98px) {\r\n  .navbar .megamenu {\r\n    padding: 15px !important;\r\n    box-shadow: none;\r\n  }\r\n}\r\n.navbar .menu-large h5 {\r\n  font-size: 1.125rem;\r\n  font-weight: 400;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  padding-bottom: 10px;\r\n  border-bottom: dotted 1px #555;\r\n}\r\n@media (max-width: 767.98px) {\r\n  .navbar .menu-large h5 {\r\n    font-size: 0.9rem;\r\n  }\r\n}\r\n.navbar .menu-large ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.navbar .menu-large ul .nav-item {\r\n  list-style-type: none;\r\n  border-bottom: solid 1px #eee;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  padding: 4px 0;\r\n}\r\n.navbar .menu-large ul .nav-item a {\r\n  color: #999;\r\n  font-size: 0.738rem;\r\n  display: block;\r\n  padding: 0 !important;\r\n}\r\n.navbar .menu-large ul .nav-item a:hover {\r\n  color: #4fbfa8 !important;\r\n  text-decoration: none;\r\n}\r\n.navbar .menu-large .banner {\r\n  margin-bottom: 10px;\r\n}\r\n.navbar #basket-overview {\r\n  padding: 0;\r\n}\r\n.navbar .navbar-btn {\r\n  color: #fff;\r\n  margin-right: 10px;\r\n}\r\n#search {\r\n  background: #fff;\r\n}\r\n#search .container {\r\n  text-align: right;\r\n}\r\n#search form {\r\n  max-width: 500px;\r\n  padding: 20px 0;\r\n}\r\n#search .navbar-form {\r\n  float: right;\r\n  width: 500px;\r\n}\r\n.breadcrumb {\r\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\r\n  background: #fff;\r\n  border-radius: 0;\r\n  padding: 0.5rem 1rem;\r\n}\r\n/*\r\n*\r\n* ======================================================================\r\n* HOT\r\n* ======================================================================\r\n*\r\n*/\r\n#hot h2 {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  font-size: 2.25rem;\r\n  color: #4fbfa8;\r\n  font-weight: 100;\r\n  text-align: center;\r\n}\r\n#hot .product-slider {\r\n  clear: both;\r\n  margin-bottom: 20px;\r\n}\r\n#hot .product-slider .item {\r\n  margin: 0 25px;\r\n}\r\n#hot .product-slider .product {\r\n  margin-bottom: 0;\r\n}\r\n#hot .product-slider .owl-dots {\r\n  position: relative;\r\n  margin-bottom: 30px;\r\n}\r\n/*\r\n*\r\n* ======================================================================\r\n* ADVANTAGES\r\n* ======================================================================\r\n*\r\n*/\r\n#advantages {\r\n  text-align: center;\r\n}\r\n#advantages .box .icon {\r\n  position: absolute;\r\n  font-size: 120px;\r\n  width: 100%;\r\n  text-align: center;\r\n  top: -20px;\r\n  left: 0;\r\n  height: 100%;\r\n  float: left;\r\n  color: #eee;\r\n  transition: all 0.3s;\r\n  z-index: 1;\r\n}\r\n#advantages .box h3 {\r\n  position: relative;\r\n  margin: 0 0 10px;\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  z-index: 2;\r\n}\r\n#advantages .box h3 a:hover {\r\n  text-decoration: none;\r\n}\r\n#advantages .box p {\r\n  position: relative;\r\n  color: #555;\r\n  z-index: 2;\r\n}\r\n/*\r\n*\r\n* ======================================================================\r\n* SLIDERS\r\n* ======================================================================\r\n*\r\n*/\r\n#main-slider {\r\n  margin-bottom: 30px;\r\n  border: solid 1px #fff;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n.box.slideshow ul li div, #main-slider ul li div {\r\n  width: 100%;\r\n}\r\n.box.slideshow .owl-dots, #main-slider .owl-dots {\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 10px;\r\n}\r\n/*\r\n*\r\n* ======================================================================\r\n* FOOTER\r\n* ======================================================================\r\n*\r\n*/\r\n#footer {\r\n  background: #e0e0e0;\r\n  padding: 100px 0;\r\n}\r\n#footer ul {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n#footer ul a {\r\n  color: #999;\r\n}\r\n#footer .social {\r\n  text-align: left;\r\n}\r\n#footer .social a {\r\n  margin: 0 10px 0 0;\r\n  color: #fff;\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 15px;\r\n  line-height: 26px;\r\n  font-size: 15px;\r\n  text-align: center;\r\n  transition: all 0.3s;\r\n  vertical-align: bottom;\r\n  background-color: #555;\r\n}\r\n#footer .social a i {\r\n  vertical-align: bottom;\r\n  line-height: 30px;\r\n}\r\n#footer .social a.facebook:hover {\r\n  background-color: #4460ae;\r\n}\r\n#footer .social a.gplus:hover {\r\n  background-color: #c21f25;\r\n}\r\n#footer .social a.twitter:hover {\r\n  background-color: #3cf;\r\n}\r\n#footer .social a.instagram:hover {\r\n  background-color: #cd4378;\r\n}\r\n#footer .social a.email:hover {\r\n  background-color: #4a7f45;\r\n}\r\n/*\r\n*\r\n* ======================================================================\r\n* COPYRIGHTS\r\n* ======================================================================\r\n*\r\n*/\r\n#copyright {\r\n  background: #333;\r\n  color: #ccc;\r\n  padding: 20px 0;\r\n  font-size: 0.738rem;\r\n}\r\n#copyright p {\r\n  margin: 0;\r\n}\r\n/*\r\n*\r\n* ======================================================================\r\n* BOXES\r\n* ======================================================================\r\n*\r\n*/\r\n.box {\r\n  background: #fff;\r\n  margin: 0 0 30px;\r\n  border: solid 1px #e6e6e6;\r\n  padding: 20px;\r\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n.box .box-header {\r\n  clear: both;\r\n  background: #f7f7f7;\r\n  margin: -20px -20px 20px;\r\n  padding: 20px;\r\n  border-bottom: solid 1px #eee;\r\n}\r\n.box .box-footer {\r\n  clear: both;\r\n  background: #f7f7f7;\r\n  margin: 30px -20px -20px;\r\n  padding: 20px;\r\n  border-top: solid 1px #eee;\r\n}\r\n@media (max-width: 767.98px) {\r\n  .box .box-footer .btn {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n.box.slideshow {\r\n  padding: 20px 0 0 0;\r\n  text-align: center;\r\n}\r\n.box.slideshow h3 {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  font-weight: 700;\r\n}\r\n/*\r\n*\r\n* ======================================================================\r\n* RIBBONS\r\n* ======================================================================\r\n*\r\n*/\r\n.ribbon {\r\n  position: absolute;\r\n  top: 50px;\r\n  padding-left: 51px;\r\n  z-index: 20;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.2em;\r\n}\r\n.ribbon .ribbon-background {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n.ribbon .theribbon {\r\n  position: relative;\r\n  width: 80px;\r\n  padding: 6px 20px 6px 20px;\r\n  margin: 30px 10px 10px -71px;\r\n  color: #fff;\r\n  background-color: #4fbfa8;\r\n  text-shadow: 0px 1px 2px #bbb;\r\n}\r\n.ribbon .theribbon:before, .ribbon .theribbon:after {\r\n  content: ' ';\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n.ribbon .theribbon:after {\r\n  left: 0px;\r\n  top: 100%;\r\n  border-width: 5px 10px;\r\n  border-style: solid;\r\n  border-color: #2d7b6b #2d7b6b transparent transparent;\r\n}\r\n.ribbon.sale {\r\n  top: 0;\r\n}\r\n.ribbon.new {\r\n  top: 50px;\r\n}\r\n.ribbon.new .theribbon {\r\n  background-color: #17a2b8;\r\n  text-shadow: 0px 1px 2px #bbb;\r\n}\r\n.ribbon.new .theribbon:after {\r\n  border-color: #0c525d #0c525d transparent transparent;\r\n}\r\n.ribbon.gift {\r\n  top: 100px;\r\n}\r\n.ribbon.gift .theribbon {\r\n  background-color: #28a745;\r\n  text-shadow: 0px 1px 2px #bbb;\r\n}\r\n.ribbon.gift .theribbon:after {\r\n  border-color: #145523 #145523 transparent transparent;\r\n}\r\n/*\r\n*\r\n* ======================================================================\r\n* CONTENT\r\n* ======================================================================\r\n*\r\n*/\r\n#content .card.sidebar-menu {\r\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n#content .card.sidebar-menu .card-header .btn.btn-danger {\r\n  color: #fff;\r\n}\r\n#content .card.sidebar-menu .badge-light {\r\n  color: #4fbfa8;\r\n}\r\n#content .card.sidebar-menu .card {\r\n  padding: 15px;\r\n  background: #fff;\r\n}\r\n#content .card.sidebar-menu .card span.colour {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  border: solid 1px #555;\r\n  vertical-align: top;\r\n  margin-top: 2px;\r\n  margin-left: 5px;\r\n}\r\n#content .card.sidebar-menu .card span.colour.white {\r\n  background: #fff;\r\n}\r\n#content .card.sidebar-menu .card span.colour.red {\r\n  background: red;\r\n}\r\n#content .card.sidebar-menu .card span.colour.green {\r\n  background: green;\r\n}\r\n#content .card.sidebar-menu .card span.colour.blue {\r\n  background: blue;\r\n}\r\n#content .card.sidebar-menu .card span.colour.yellow {\r\n  background: yellow;\r\n}\r\n#content .card.sidebar-menu .card label {\r\n  color: #555;\r\n  font-size: 0.738rem;\r\n}\r\n#content .card.sidebar-menu .card label::hover {\r\n  color: #555;\r\n}\r\n#content .card.sidebar-menu h3 {\r\n  padding: 5px 0;\r\n  margin: 0;\r\n}\r\n#content .card.sidebar-menu ul.nav.category-menu {\r\n  margin-bottom: 20px;\r\n}\r\n#content .card.sidebar-menu ul.nav.category-menu li a {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  font-weight: bold;\r\n  border-radius: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n#content .card.sidebar-menu ul.nav.category-menu li a:not(.active):hover {\r\n  background: #eeeeee;\r\n}\r\n#content .card.sidebar-menu ul.nav ul {\r\n  list-style: none;\r\n  padding-left: 0;\r\n}\r\n#content .card.sidebar-menu ul.nav ul li {\r\n  display: block;\r\n}\r\n#content .card.sidebar-menu ul.nav ul li a {\r\n  position: relative;\r\n  font-weight: normal;\r\n  text-transform: none !important;\r\n  display: block;\r\n  padding: 10px 15px;\r\n  padding-left: 30px;\r\n  font-size: 0.738rem;\r\n  color: #555;\r\n}\r\n#content .card.sidebar-menu ul.nav ul li a:hover, #content .card.sidebar-menu ul.nav ul li a:focus {\r\n  text-decoration: none;\r\n  background-color: #eeeeee;\r\n}\r\n#content .info-bar {\r\n  line-height: 32px;\r\n  vertical-align: middle;\r\n}\r\n#content .info-bar .products-number strong {\r\n  margin-right: 10px;\r\n}\r\n#content .info-bar .products-number span {\r\n  margin-left: 10px;\r\n}\r\n#content .info-bar .products-sort-by select {\r\n  margin-left: 10px;\r\n}\r\n#content .product {\r\n  background: #fff;\r\n  border: solid 1px #e6e6e6;\r\n  margin-bottom: 30px;\r\n  /* entire container, keeps perspective */\r\n  /* flip speed goes here */\r\n  /* hide back of pane during swap */\r\n  /*  UPDATED! front pane, placed above back */\r\n  /* back, initially hidden pane */\r\n}\r\n#content .product .flip-container {\r\n  cursor: pointer;\r\n  -webkit-perspective: 1000;\r\n  perspective: 1000;\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d;\r\n}\r\n#content .product .flip-container, #content .product .front, #content .product .back {\r\n  width: 100%;\r\n}\r\n#content .product .flipper {\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  transition: 0.6s;\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d;\r\n  position: relative;\r\n}\r\n#content .product .front, #content .product .back {\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d;\r\n  transition: 0.6s;\r\n  transform-style: preserve-3d;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n#content .product .front {\r\n  z-index: 2;\r\n  -webkit-transform: rotateY(0deg);\r\n  transform: rotateY(0deg);\r\n}\r\n#content .product .back {\r\n  -webkit-transform: rotateY(-180deg);\r\n  transform: rotateY(-180deg);\r\n}\r\n#content .product:hover .back {\r\n  -webkit-transform: rotateY(0deg);\r\n  transform: rotateY(0deg);\r\n  z-index: 2;\r\n}\r\n#content .product:hover .front {\r\n  -webkit-transform: rotateY(180deg);\r\n  transform: rotateY(180deg);\r\n  z-index: 1;\r\n}\r\n#content .product .invisible {\r\n  visibility: hidden;\r\n}\r\n#content .product .text {\r\n  padding: 10px 10px 0;\r\n}\r\n#content .product .text h3 {\r\n  font-size: 1.125rem;\r\n  font-weight: 700;\r\n  height: 42px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n}\r\n#content .product .text h3 a {\r\n  color: #555;\r\n}\r\n#content .product .text p.price {\r\n  font-size: 1.125rem;\r\n  text-align: center;\r\n  font-weight: 300;\r\n}\r\n#content .product .text p.price del {\r\n  color: #999;\r\n}\r\n#content .product .text .buttons {\r\n  clear: both;\r\n  text-align: center;\r\n}\r\n#content .product .text .buttons .btn {\r\n  margin-bottom: 10px;\r\n}\r\n#content .banner {\r\n  margin-bottom: 30px;\r\n}\r\n#content .pages {\r\n  text-align: center;\r\n}\r\n#content .pages .loadMore {\r\n  text-align: center;\r\n}\r\n#content .pages .pagination {\r\n  text-align: center;\r\n}\r\n#content #mainImage {\r\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n#content #productMain {\r\n  margin-bottom: 30px;\r\n}\r\n#content #productMain .goToDescription {\r\n  margin-top: 20px;\r\n  font-size: 0.738rem;\r\n  text-align: center;\r\n}\r\n#content #productMain .goToDescription a {\r\n  color: #999;\r\n  text-decoration: underline;\r\n}\r\n#content #productMain .price {\r\n  font-size: 1.8rem;\r\n  font-weight: 300;\r\n  text-align: center;\r\n  margin-top: 40px;\r\n}\r\n#content #productMain .buttons {\r\n  margin-bottom: 0;\r\n  text-align: center;\r\n}\r\n#content #productMain .buttons .btn {\r\n  margin-bottom: 10px;\r\n}\r\n#content #details .social {\r\n  text-align: left;\r\n}\r\n#content #details .social h4 {\r\n  font-weight: 300;\r\n  margin-bottom: 10px;\r\n}\r\n#content #details .social p {\r\n  line-height: 26px;\r\n}\r\n#content #details .social p a {\r\n  margin: 0 10px 0 0;\r\n  color: #fff;\r\n  display: inline-block;\r\n  width: 26px;\r\n  height: 26px;\r\n  border-radius: 13px;\r\n  line-height: 26px;\r\n  font-size: 15px;\r\n  text-align: center;\r\n  transition: all 0.3s;\r\n  vertical-align: bottom;\r\n}\r\n#content #details .social p a i {\r\n  vertical-align: bottom;\r\n  line-height: 26px;\r\n}\r\n#content #details .social p a.facebook {\r\n  background-color: #4460ae;\r\n}\r\n#content #details .social p a.gplus {\r\n  background-color: #c21f25;\r\n}\r\n#content #details .social p a.twitter {\r\n  background-color: #3cf;\r\n}\r\n#content #details .social p a.instagram {\r\n  background-color: #cd4378;\r\n}\r\n#content #details .social p a.email {\r\n  background-color: #4a7f45;\r\n}\r\n#content #thumbs a {\r\n  display: block;\r\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);\r\n  border: solid 2px transparent;\r\n}\r\n#content #thumbs a.active {\r\n  border-color: #4fbfa8;\r\n}\r\n#content #checkout .nav {\r\n  margin-bottom: 20px;\r\n  border-bottom: solid 1px #4fbfa8;\r\n}\r\n#content #checkout .nav a {\r\n  display: block;\r\n  height: 100%;\r\n}\r\n#content #checkout .nav a i {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n}\r\n#content #order-summary table {\r\n  margin-top: 20px;\r\n}\r\n#content #order-summary table td {\r\n  color: #999;\r\n}\r\n#content #order-summary table tr.total td, #content #order-summary table tr.total th {\r\n  font-size: 1.125rem;\r\n  color: #555;\r\n  font-weight: 700;\r\n}\r\n#content #checkout .table tbody tr td, #content #basket .table tbody tr td, #content #customer-order .table tbody tr td {\r\n  vertical-align: middle;\r\n}\r\n#content #checkout .table tbody tr td input, #content #basket .table tbody tr td input, #content #customer-order .table tbody tr td input {\r\n  width: 50px;\r\n  text-align: right;\r\n}\r\n#content #checkout .table tbody tr td img, #content #basket .table tbody tr td img, #content #customer-order .table tbody tr td img {\r\n  width: 50px;\r\n}\r\n#content #checkout .table tfoot, #content #basket .table tfoot, #content #customer-order .table tfoot {\r\n  font-size: 1.125rem;\r\n}\r\n#content #text-page h1, #content #text-page h2, #content #text-page h3 {\r\n  font-weight: 700;\r\n}\r\n#content #error-page {\r\n  text-align: center;\r\n}\r\n#content #error-page h4 {\r\n  margin-bottom: 40px;\r\n}\r\n#content #error-page p.buttons {\r\n  margin-top: 40px;\r\n}\r\n#content #map {\r\n  height: 400px;\r\n}\r\n#content #blog-listing .post, #content #blog-homepage .post {\r\n  margin-bottom: 15px;\r\n  background: #fff;\r\n  margin: 0 0 30px;\r\n  border: solid 1px #e6e6e6;\r\n  padding: 20px;\r\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n#content #blog-listing .post h2 a, #content #blog-listing .post h4 a, #content #blog-homepage .post h2 a, #content #blog-homepage .post h4 a {\r\n  color: #555;\r\n}\r\n#content #blog-listing .post h2 a:hover, #content #blog-listing .post h4 a:hover, #content #blog-homepage .post h2 a:hover, #content #blog-homepage .post h4 a:hover {\r\n  color: #4fbfa8;\r\n}\r\n#content #blog-listing .post .author-category, #content #blog-homepage .post .author-category {\r\n  color: #999;\r\n  font-weight: 300;\r\n}\r\n#content #blog-listing .post .date-comments a, #content #blog-homepage .post .date-comments a {\r\n  color: #999;\r\n  margin-right: 20px;\r\n}\r\n#content #blog-listing .post .date-comments a:hover, #content #blog-homepage .post .date-comments a:hover {\r\n  color: #4fbfa8;\r\n}\r\n#content #blog-listing .post .intro, #content #blog-homepage .post .intro {\r\n  text-align: left;\r\n}\r\n#content #blog-listing .post .image, #content #blog-homepage .post .image {\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n}\r\n#content #blog-listing .post .image img, #content #blog-homepage .post .image img {\r\n  transition: all 0.3s;\r\n}\r\n#content #blog-listing .post .read-more, #content #blog-homepage .post .read-more {\r\n  text-align: right;\r\n}\r\n#content #blog-listing .post:hover .image img, #content #blog-homepage .post:hover .image img {\r\n  -webkit-transform: scale(1.1, 1.1);\r\n  transform: scale(1.1, 1.1);\r\n}\r\n#content #blog-listing .pager, #content #blog-homepage .pager {\r\n  margin: 20px 0;\r\n}\r\n#content #blog-listing .pager a, #content #blog-homepage .pager a {\r\n  border-radius: 30px !important;\r\n  background: #fff;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n}\r\n#content #blog-listing .pager a:not(.disabled):hover, #content #blog-homepage .pager a:not(.disabled):hover {\r\n  background: #4fbfa8;\r\n}\r\n#content #blog-homepage .post {\r\n  margin-bottom: 30px;\r\n}\r\n#content #blog-homepage .post h2, #content #blog-homepage .post h4, #content #blog-homepage .post .author-category, #content #blog-homepage .post .read-more {\r\n  text-align: center;\r\n}\r\n#content #blog-homepage .post .intro {\r\n  font-weight: 300;\r\n}\r\n#content #blog-homepage .post .read-more {\r\n  margin-top: 20px;\r\n}\r\n#content #blog-post .author-date {\r\n  color: #999;\r\n  font-weight: 300;\r\n}\r\n#content #blog-post #post-content {\r\n  margin-bottom: 20px;\r\n}\r\n#content #blog-post .comment {\r\n  clear: both;\r\n  margin-bottom: 25px;\r\n}\r\n#content #blog-post .comment .posted {\r\n  color: #999;\r\n  font-size: 0.738rem;\r\n}\r\n#content #blog-post .comment .reply {\r\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\r\n}\r\n#content #blog-post .comment.last {\r\n  margin-bottom: 0;\r\n}\r\n#content #blog-post #comments, #content #blog-post #comment-form {\r\n  clear: both;\r\n}\r\n#content #blog-post #comments h4, #content #blog-post #comment-form h4 {\r\n  margin-bottom: 20px;\r\n}\r\n#content #blog-post #comment-form {\r\n  margin-bottom: 20px;\r\n}\r\n#content #customer-orders table tr th, #content #customer-orders table tr td {\r\n  vertical-align: baseline;\r\n}\r\n#content #customer-order .table tfoot th {\r\n  font-size: 1.125rem;\r\n  font-weight: 300;\r\n}\r\n#content #customer-order .addresses {\r\n  text-align: right;\r\n}\r\n#content #customer-order .addresses p {\r\n  font-size: 1.125rem;\r\n  font-weight: 300;\r\n}\r\n.owl-carousel .owl-dots .owl-dot {\r\n  outline: none;\r\n}\r\n.owl-carousel .owl-dots .owl-dot span {\r\n  width: 12px;\r\n  height: 12px;\r\n}\r\n.owl-carousel .owl-dots .owl-dot.active span {\r\n  background: #4fbfa8;\r\n}\r\n.owl-thumbs button {\r\n  display: inline-block;\r\n  background: none;\r\n  border: none;\r\n  margin-right: 8px;\r\n  margin-bottom: 10px;\r\n  padding: 0;\r\n  outline: none;\r\n  cursor: pointer;\r\n  opacity: .6;\r\n}\r\n.owl-thumbs button.active {\r\n  opacity: 1;\r\n}\r\n.owl-thumbs button img {\r\n  max-width: 88px;\r\n}\r\n/*\r\n\r\n=====================\r\nSTYLE SWITCHER FOR DEMO\r\n=====================\r\n\r\n*/\r\n#style-switch-button {\r\n  position: fixed;\r\n  top: 120px;\r\n  left: 0px;\r\n  border-radius: 0;\r\n  z-index: 2;\r\n}\r\n#style-switch {\r\n  width: 300px;\r\n  padding: 20px;\r\n  position: fixed;\r\n  top: 160px;\r\n  left: 0;\r\n  background: #fff;\r\n  border: solid 1px #ced4da;\r\n  z-index: 2000;\r\n}\r\n#style-switch h4 {\r\n  color: #495057;\r\n}\r\n/* =========================================\r\n\r\n      THEMING OF THE BOOTSTRAP COMPONENTS\r\n\r\n   =========================================\r\n\r\n    1 - NAVBAR\r\n    2 - BUTTONS\r\n    3 - TYPE\r\n    4 - PAGINATION\r\n    5 - UTILITIES\r\n    6 - FORMS\r\n    7 - CODE\r\n    8 - NAV\r\n    9 - CARD\r\n    10 - DROPDOWNS\r\n\r\n*/\r\n/*\r\n * 1. NAVBAR\r\n */\r\n.navbar {\r\n  padding: 0 1rem;\r\n}\r\n.navbar-brand {\r\n  display: inline-block;\r\n  padding-top: 0.33125rem;\r\n  padding-bottom: 0.33125rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.125rem;\r\n}\r\n.navbar-toggler {\r\n  padding: 0.25rem 0.75rem;\r\n  font-size: 1.125rem;\r\n  line-height: 1;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n}\r\n.navbar-light .navbar-brand {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n.navbar-light .navbar-nav .nav-link {\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\r\n  color: rgba(0, 0, 0, 0.7);\r\n}\r\n.navbar-light .navbar-nav .nav-link.disabled {\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n.navbar-light .navbar-nav .show > .nav-link,\r\n.navbar-light .navbar-nav .active > .nav-link,\r\n.navbar-light .navbar-nav .nav-link.show,\r\n.navbar-light .navbar-nav .nav-link.active {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n.navbar-light .navbar-toggler {\r\n  color: rgba(0, 0, 0, 0.5);\r\n  border-color: rgba(0, 0, 0, 0.1);\r\n}\r\n.navbar-light .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\r\n}\r\n.navbar-light .navbar-text {\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n.navbar-dark .navbar-brand {\r\n  color: #fff;\r\n}\r\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\r\n  color: #fff;\r\n}\r\n.navbar-dark .navbar-nav .nav-link {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\r\n  color: rgba(255, 255, 255, 0.75);\r\n}\r\n.navbar-dark .navbar-nav .nav-link.disabled {\r\n  color: rgba(255, 255, 255, 0.25);\r\n}\r\n.navbar-dark .navbar-nav .show > .nav-link,\r\n.navbar-dark .navbar-nav .active > .nav-link,\r\n.navbar-dark .navbar-nav .nav-link.show,\r\n.navbar-dark .navbar-nav .nav-link.active {\r\n  color: #fff;\r\n}\r\n.navbar-dark .navbar-toggler {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  border-color: rgba(255, 255, 255, 0.1);\r\n}\r\n.navbar-dark .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\r\n}\r\n.navbar-dark .navbar-text {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n/*\r\n * 2. BUTTONS\r\n */\r\n.btn {\r\n  font-weight: 400;\r\n  border: 1px solid transparent;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 0.9rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.25rem;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n@media screen and (prefers-reduced-motion: reduce) {\r\n  .btn {\r\n    transition: none;\r\n  }\r\n}\r\n.btn:focus, .btn.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(79, 191, 168, 0.25);\r\n}\r\n.btn.disabled, .btn:disabled {\r\n  opacity: 0.65;\r\n}\r\n.btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {\r\n  background-image: none;\r\n}\r\n.btn-link {\r\n  font-weight: 400;\r\n  color: #4fbfa8;\r\n}\r\n.btn-link:hover {\r\n  color: #348e7b;\r\n  text-decoration: underline;\r\n}\r\n.btn-link:focus, .btn-link.focus {\r\n  text-decoration: underline;\r\n}\r\n.btn-link:disabled, .btn-link.disabled {\r\n  color: #6c757d;\r\n}\r\n.btn-primary {\r\n  color: #212529;\r\n  background-color: #4fbfa8;\r\n  border-color: #4fbfa8;\r\n}\r\n.btn-primary:hover {\r\n  color: #fff;\r\n  background-color: #3eaa94;\r\n  border-color: #3aa18c;\r\n}\r\n.btn-primary:focus, .btn-primary.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(79, 191, 168, 0.5);\r\n}\r\n.btn-primary.disabled, .btn-primary:disabled {\r\n  color: #212529;\r\n  background-color: #4fbfa8;\r\n  border-color: #4fbfa8;\r\n}\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #3aa18c;\r\n  border-color: #379783;\r\n}\r\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-primary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(79, 191, 168, 0.5);\r\n}\r\n.btn-secondary {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\r\n}\r\n.btn-secondary:hover {\r\n  color: #fff;\r\n  background-color: #5a6268;\r\n  border-color: #545b62;\r\n}\r\n.btn-secondary:focus, .btn-secondary.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n}\r\n.btn-secondary.disabled, .btn-secondary:disabled {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\r\n}\r\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\r\n.show > .btn-secondary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #545b62;\r\n  border-color: #4e555b;\r\n}\r\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-secondary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n}\r\n.btn-success {\r\n  color: #fff;\r\n  background-color: #28a745;\r\n  border-color: #28a745;\r\n}\r\n.btn-success:hover {\r\n  color: #fff;\r\n  background-color: #218838;\r\n  border-color: #1e7e34;\r\n}\r\n.btn-success:focus, .btn-success.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n}\r\n.btn-success.disabled, .btn-success:disabled {\r\n  color: #fff;\r\n  background-color: #28a745;\r\n  border-color: #28a745;\r\n}\r\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-success.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #1e7e34;\r\n  border-color: #1c7430;\r\n}\r\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n}\r\n.btn-info {\r\n  color: #fff;\r\n  background-color: #17a2b8;\r\n  border-color: #17a2b8;\r\n}\r\n.btn-info:hover {\r\n  color: #fff;\r\n  background-color: #138496;\r\n  border-color: #117a8b;\r\n}\r\n.btn-info:focus, .btn-info.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n}\r\n.btn-info.disabled, .btn-info:disabled {\r\n  color: #fff;\r\n  background-color: #17a2b8;\r\n  border-color: #17a2b8;\r\n}\r\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\r\n.show > .btn-info.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #117a8b;\r\n  border-color: #10707f;\r\n}\r\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-info.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n}\r\n.btn-warning {\r\n  color: #212529;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\r\n}\r\n.btn-warning:hover {\r\n  color: #212529;\r\n  background-color: #e0a800;\r\n  border-color: #d39e00;\r\n}\r\n.btn-warning:focus, .btn-warning.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n}\r\n.btn-warning.disabled, .btn-warning:disabled {\r\n  color: #212529;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\r\n}\r\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\r\n.show > .btn-warning.dropdown-toggle {\r\n  color: #212529;\r\n  background-color: #d39e00;\r\n  border-color: #c69500;\r\n}\r\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-warning.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n}\r\n.btn-danger {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\r\n}\r\n.btn-danger:hover {\r\n  color: #fff;\r\n  background-color: #c82333;\r\n  border-color: #bd2130;\r\n}\r\n.btn-danger:focus, .btn-danger.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n}\r\n.btn-danger.disabled, .btn-danger:disabled {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\r\n}\r\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\r\n.show > .btn-danger.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #bd2130;\r\n  border-color: #b21f2d;\r\n}\r\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-danger.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n}\r\n.btn-light {\r\n  color: #212529;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\r\n}\r\n.btn-light:hover {\r\n  color: #212529;\r\n  background-color: #e2e6ea;\r\n  border-color: #dae0e5;\r\n}\r\n.btn-light:focus, .btn-light.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n}\r\n.btn-light.disabled, .btn-light:disabled {\r\n  color: #212529;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\r\n}\r\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\r\n.show > .btn-light.dropdown-toggle {\r\n  color: #212529;\r\n  background-color: #dae0e5;\r\n  border-color: #d3d9df;\r\n}\r\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-light.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n}\r\n.btn-dark {\r\n  color: #fff;\r\n  background-color: #343a40;\r\n  border-color: #343a40;\r\n}\r\n.btn-dark:hover {\r\n  color: #fff;\r\n  background-color: #23272b;\r\n  border-color: #1d2124;\r\n}\r\n.btn-dark:focus, .btn-dark.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n}\r\n.btn-dark.disabled, .btn-dark:disabled {\r\n  color: #fff;\r\n  background-color: #343a40;\r\n  border-color: #343a40;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\r\n.show > .btn-dark.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #1d2124;\r\n  border-color: #171a1d;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-dark.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n}\r\n.btn-outline-primary {\r\n  color: #4fbfa8;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #4fbfa8;\r\n}\r\n.btn-outline-primary:hover {\r\n  color: #fff;\r\n  background-color: #4fbfa8;\r\n  border-color: #4fbfa8;\r\n}\r\n.btn-outline-primary:focus, .btn-outline-primary.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(79, 191, 168, 0.5);\r\n}\r\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\r\n  color: #4fbfa8;\r\n  background-color: transparent;\r\n}\r\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-primary.dropdown-toggle {\r\n  color: #212529;\r\n  background-color: #4fbfa8;\r\n  border-color: #4fbfa8;\r\n}\r\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-primary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(79, 191, 168, 0.5);\r\n}\r\n.btn-outline-secondary {\r\n  color: #6c757d;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #6c757d;\r\n}\r\n.btn-outline-secondary:hover {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\r\n}\r\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n}\r\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\r\n  color: #6c757d;\r\n  background-color: transparent;\r\n}\r\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-secondary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\r\n}\r\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-secondary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n}\r\n.btn-outline-success {\r\n  color: #28a745;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #28a745;\r\n}\r\n.btn-outline-success:hover {\r\n  color: #fff;\r\n  background-color: #28a745;\r\n  border-color: #28a745;\r\n}\r\n.btn-outline-success:focus, .btn-outline-success.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n}\r\n.btn-outline-success.disabled, .btn-outline-success:disabled {\r\n  color: #28a745;\r\n  background-color: transparent;\r\n}\r\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #28a745;\r\n  border-color: #28a745;\r\n}\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n}\r\n.btn-outline-info {\r\n  color: #17a2b8;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #17a2b8;\r\n}\r\n.btn-outline-info:hover {\r\n  color: #fff;\r\n  background-color: #17a2b8;\r\n  border-color: #17a2b8;\r\n}\r\n.btn-outline-info:focus, .btn-outline-info.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n}\r\n.btn-outline-info.disabled, .btn-outline-info:disabled {\r\n  color: #17a2b8;\r\n  background-color: transparent;\r\n}\r\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-info.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #17a2b8;\r\n  border-color: #17a2b8;\r\n}\r\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-info.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n}\r\n.btn-outline-warning {\r\n  color: #ffc107;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #ffc107;\r\n}\r\n.btn-outline-warning:hover {\r\n  color: #fff;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\r\n}\r\n.btn-outline-warning:focus, .btn-outline-warning.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n}\r\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\r\n  color: #ffc107;\r\n  background-color: transparent;\r\n}\r\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-warning.dropdown-toggle {\r\n  color: #212529;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\r\n}\r\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-warning.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n}\r\n.btn-outline-danger {\r\n  color: #dc3545;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #dc3545;\r\n}\r\n.btn-outline-danger:hover {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\r\n}\r\n.btn-outline-danger:focus, .btn-outline-danger.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n}\r\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\r\n  color: #dc3545;\r\n  background-color: transparent;\r\n}\r\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-danger.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\r\n}\r\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-danger.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n}\r\n.btn-outline-light {\r\n  color: #f8f9fa;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #f8f9fa;\r\n}\r\n.btn-outline-light:hover {\r\n  color: #fff;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\r\n}\r\n.btn-outline-light:focus, .btn-outline-light.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n}\r\n.btn-outline-light.disabled, .btn-outline-light:disabled {\r\n  color: #f8f9fa;\r\n  background-color: transparent;\r\n}\r\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-light.dropdown-toggle {\r\n  color: #212529;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\r\n}\r\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-light.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n}\r\n.btn-outline-dark {\r\n  color: #343a40;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #343a40;\r\n}\r\n.btn-outline-dark:hover {\r\n  color: #fff;\r\n  background-color: #343a40;\r\n  border-color: #343a40;\r\n}\r\n.btn-outline-dark:focus, .btn-outline-dark.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n}\r\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\r\n  color: #343a40;\r\n  background-color: transparent;\r\n}\r\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-dark.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #343a40;\r\n  border-color: #343a40;\r\n}\r\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-dark.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n}\r\n.btn-lg {\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1.125rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.3rem;\r\n}\r\n.btn-sm {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.738rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.2rem;\r\n}\r\n/*\r\n * 3. TYPE\r\n */\r\nbody {\r\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\r\n  font-size: 0.9rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  background-color: #f0f0f0;\r\n}\r\na {\r\n  color: #4fbfa8;\r\n  text-decoration: none;\r\n}\r\na:hover, a:focus {\r\n  color: #348e7b;\r\n  text-decoration: underline;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\n.h1,\r\n.h2,\r\n.h3,\r\n.h4,\r\n.h5,\r\n.h6 {\r\n  margin-bottom: 0.5rem;\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n  color: inherit;\r\n}\r\nh1,\r\n.h1 {\r\n  font-size: 2.25rem;\r\n}\r\nh2,\r\n.h2 {\r\n  font-size: 1.8rem;\r\n}\r\nh3,\r\n.h3 {\r\n  font-size: 1.53rem;\r\n}\r\nh4,\r\n.h4 {\r\n  font-size: 1.125rem;\r\n}\r\nh5,\r\n.h5 {\r\n  font-size: 0.9rem;\r\n}\r\nh6,\r\n.h6 {\r\n  font-size: 0.765rem;\r\n}\r\n.lead {\r\n  font-size: 1.125rem;\r\n  font-weight: 300;\r\n}\r\n.display-1 {\r\n  font-size: 6rem;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n}\r\n.display-2 {\r\n  font-size: 5.5rem;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n}\r\n.display-3 {\r\n  font-size: 4.5rem;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n}\r\n.display-4 {\r\n  font-size: 3.5rem;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n}\r\nhr {\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\nsmall,\r\n.small {\r\n  font-size: 80%;\r\n  font-weight: 400;\r\n}\r\nmark,\r\n.mark {\r\n  padding: 0.2em;\r\n  background-color: #fcf8e3;\r\n}\r\n.blockquote {\r\n  padding: 0.5rem 1rem;\r\n  margin-bottom: 2rem;\r\n  font-size: 0.9rem;\r\n  border-left: 5px solid #4fbfa8;\r\n}\r\n.blockquote-footer {\r\n  color: #6c757d;\r\n}\r\n.blockquote-footer::before {\r\n  content: \"\\2014 \\00A0\";\r\n}\r\n.text-primary {\r\n  color: #4fbfa8 !important;\r\n}\r\na.text-primary:hover, a.text-primary:focus {\r\n  color: #3aa18c !important;\r\n}\r\n.text-uppercase {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n}\r\n/*\r\n * 4. PAGINATION\r\n */\r\n.page-item:first-child .page-link {\r\n  border-top-left-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\r\n}\r\n.page-item:last-child .page-link {\r\n  border-top-right-radius: 0.25rem;\r\n  border-bottom-right-radius: 0.25rem;\r\n}\r\n.page-item.active .page-link {\r\n  color: #fff;\r\n  background-color: #4fbfa8;\r\n  border-color: #4fbfa8;\r\n}\r\n.page-item.disabled .page-link {\r\n  color: #6c757d;\r\n  background-color: #fff;\r\n  border-color: #dee2e6;\r\n}\r\n.page-link {\r\n  padding: 0.5rem 0.75rem;\r\n  line-height: 1.25;\r\n  color: #4fbfa8;\r\n  background-color: #fff;\r\n  border: 1px solid #dee2e6;\r\n}\r\n.page-link:hover, .page-link:focus {\r\n  color: #348e7b;\r\n  text-decoration: none;\r\n  background-color: #e9ecef;\r\n  border-color: #dee2e6;\r\n}\r\n.pagination-lg .page-link {\r\n  padding: 0.75rem 1.5rem;\r\n  font-size: 1.125rem;\r\n  line-height: 1.5;\r\n}\r\n.pagination-lg .page-item:first-child .page-link {\r\n  border-top-left-radius: 0.3rem;\r\n  border-bottom-left-radius: 0.3rem;\r\n}\r\n.pagination-lg .page-item:last-child .page-link {\r\n  border-top-right-radius: 0.3rem;\r\n  border-bottom-right-radius: 0.3rem;\r\n}\r\n.pagination-sm .page-link {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.738rem;\r\n  line-height: 1.5;\r\n}\r\n.pagination-sm .page-item:first-child .page-link {\r\n  border-top-left-radius: 0.2rem;\r\n  border-bottom-left-radius: 0.2rem;\r\n}\r\n.pagination-sm .page-item:last-child .page-link {\r\n  border-top-right-radius: 0.2rem;\r\n  border-bottom-right-radius: 0.2rem;\r\n}\r\n/*\r\n* 5. UTILITIES\r\n*/\r\n.bg-primary {\r\n  background-color: #4fbfa8 !important;\r\n}\r\na.bg-primary:hover, a.bg-primary:focus,\r\nbutton.bg-primary:hover,\r\nbutton.bg-primary:focus {\r\n  background-color: #3aa18c !important;\r\n}\r\n.bg-secondary {\r\n  background-color: #6c757d !important;\r\n}\r\na.bg-secondary:hover, a.bg-secondary:focus,\r\nbutton.bg-secondary:hover,\r\nbutton.bg-secondary:focus {\r\n  background-color: #545b62 !important;\r\n}\r\n.bg-success {\r\n  background-color: #28a745 !important;\r\n}\r\na.bg-success:hover, a.bg-success:focus,\r\nbutton.bg-success:hover,\r\nbutton.bg-success:focus {\r\n  background-color: #1e7e34 !important;\r\n}\r\n.bg-info {\r\n  background-color: #17a2b8 !important;\r\n}\r\na.bg-info:hover, a.bg-info:focus,\r\nbutton.bg-info:hover,\r\nbutton.bg-info:focus {\r\n  background-color: #117a8b !important;\r\n}\r\n.bg-warning {\r\n  background-color: #ffc107 !important;\r\n}\r\na.bg-warning:hover, a.bg-warning:focus,\r\nbutton.bg-warning:hover,\r\nbutton.bg-warning:focus {\r\n  background-color: #d39e00 !important;\r\n}\r\n.bg-danger {\r\n  background-color: #dc3545 !important;\r\n}\r\na.bg-danger:hover, a.bg-danger:focus,\r\nbutton.bg-danger:hover,\r\nbutton.bg-danger:focus {\r\n  background-color: #bd2130 !important;\r\n}\r\n.bg-light {\r\n  background-color: #f8f9fa !important;\r\n}\r\na.bg-light:hover, a.bg-light:focus,\r\nbutton.bg-light:hover,\r\nbutton.bg-light:focus {\r\n  background-color: #dae0e5 !important;\r\n}\r\n.bg-dark {\r\n  background-color: #343a40 !important;\r\n}\r\na.bg-dark:hover, a.bg-dark:focus,\r\nbutton.bg-dark:hover,\r\nbutton.bg-dark:focus {\r\n  background-color: #1d2124 !important;\r\n}\r\n.border-primary {\r\n  border-color: #4fbfa8 !important;\r\n}\r\n.border-secondary {\r\n  border-color: #6c757d !important;\r\n}\r\n.border-success {\r\n  border-color: #28a745 !important;\r\n}\r\n.border-info {\r\n  border-color: #17a2b8 !important;\r\n}\r\n.border-warning {\r\n  border-color: #ffc107 !important;\r\n}\r\n.border-danger {\r\n  border-color: #dc3545 !important;\r\n}\r\n.border-light {\r\n  border-color: #f8f9fa !important;\r\n}\r\n.border-dark {\r\n  border-color: #343a40 !important;\r\n}\r\n.text-primary {\r\n  color: #4fbfa8 !important;\r\n}\r\na.text-primary:hover, a.text-primary:focus {\r\n  color: #3aa18c !important;\r\n}\r\n.text-secondary {\r\n  color: #6c757d !important;\r\n}\r\na.text-secondary:hover, a.text-secondary:focus {\r\n  color: #545b62 !important;\r\n}\r\n.text-success {\r\n  color: #28a745 !important;\r\n}\r\na.text-success:hover, a.text-success:focus {\r\n  color: #1e7e34 !important;\r\n}\r\n.text-info {\r\n  color: #17a2b8 !important;\r\n}\r\na.text-info:hover, a.text-info:focus {\r\n  color: #117a8b !important;\r\n}\r\n.text-warning {\r\n  color: #ffc107 !important;\r\n}\r\na.text-warning:hover, a.text-warning:focus {\r\n  color: #d39e00 !important;\r\n}\r\n.text-danger {\r\n  color: #dc3545 !important;\r\n}\r\na.text-danger:hover, a.text-danger:focus {\r\n  color: #bd2130 !important;\r\n}\r\n.text-light {\r\n  color: #f8f9fa !important;\r\n}\r\na.text-light:hover, a.text-light:focus {\r\n  color: #dae0e5 !important;\r\n}\r\n.text-dark {\r\n  color: #343a40 !important;\r\n}\r\na.text-dark:hover, a.text-dark:focus {\r\n  color: #1d2124 !important;\r\n}\r\n.badge-primary {\r\n  color: #212529;\r\n  background-color: #4fbfa8;\r\n}\r\n.badge-primary[href]:hover, .badge-primary[href]:focus {\r\n  color: #212529;\r\n  text-decoration: none;\r\n  background-color: #3aa18c;\r\n}\r\n.badge-secondary {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n}\r\n.badge-secondary[href]:hover, .badge-secondary[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #545b62;\r\n}\r\n.badge-success {\r\n  color: #fff;\r\n  background-color: #28a745;\r\n}\r\n.badge-success[href]:hover, .badge-success[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #1e7e34;\r\n}\r\n.badge-info {\r\n  color: #fff;\r\n  background-color: #17a2b8;\r\n}\r\n.badge-info[href]:hover, .badge-info[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #117a8b;\r\n}\r\n.badge-warning {\r\n  color: #212529;\r\n  background-color: #ffc107;\r\n}\r\n.badge-warning[href]:hover, .badge-warning[href]:focus {\r\n  color: #212529;\r\n  text-decoration: none;\r\n  background-color: #d39e00;\r\n}\r\n.badge-danger {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n}\r\n.badge-danger[href]:hover, .badge-danger[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #bd2130;\r\n}\r\n.badge-light {\r\n  color: #212529;\r\n  background-color: #f8f9fa;\r\n}\r\n.badge-light[href]:hover, .badge-light[href]:focus {\r\n  color: #212529;\r\n  text-decoration: none;\r\n  background-color: #dae0e5;\r\n}\r\n.badge-dark {\r\n  color: #fff;\r\n  background-color: #343a40;\r\n}\r\n.badge-dark[href]:hover, .badge-dark[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #1d2124;\r\n}\r\n/*\r\n  * 6. FORMS\r\n  */\r\n.form-control {\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 0.9rem;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.25rem;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n@media screen and (prefers-reduced-motion: reduce) {\r\n  .form-control {\r\n    transition: none;\r\n  }\r\n}\r\n.form-control::-ms-expand {\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.form-control:focus {\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border-color: #ade1d6;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgba(79, 191, 168, 0.25);\r\n}\r\n.form-control::-webkit-input-placeholder {\r\n  color: #6c757d;\r\n}\r\n.form-control::-ms-input-placeholder {\r\n  color: #6c757d;\r\n}\r\n.form-control::placeholder {\r\n  color: #6c757d;\r\n}\r\n.form-control:disabled, .form-control[readonly] {\r\n  background-color: #e9ecef;\r\n}\r\nselect.form-control:not([size]):not([multiple]) {\r\n  height: calc(2.1rem + 2px);\r\n}\r\nselect.form-control:focus::-ms-value {\r\n  color: #495057;\r\n  background-color: #fff;\r\n}\r\n.form-control-sm {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.738rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.2rem;\r\n}\r\nselect.form-control-sm:not([size]):not([multiple]) {\r\n  height: calc(1.607rem + 2px);\r\n}\r\n.form-control-lg {\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1.125rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.3rem;\r\n}\r\nselect.form-control-lg:not([size]):not([multiple]) {\r\n  height: calc(2.6875rem + 2px);\r\n}\r\n.valid-feedback {\r\n  display: none;\r\n  width: 100%;\r\n  margin-top: 0.25rem;\r\n  font-size: 80%;\r\n  color: #28a745;\r\n}\r\n.valid-tooltip {\r\n  position: absolute;\r\n  top: 100%;\r\n  z-index: 5;\r\n  display: none;\r\n  max-width: 100%;\r\n  padding: .5rem;\r\n  margin-top: .1rem;\r\n  font-size: .875rem;\r\n  line-height: 1;\r\n  color: #fff;\r\n  background-color: rgba(40, 167, 69, 0.8);\r\n  border-radius: .2rem;\r\n}\r\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\r\n.custom-select:valid,\r\n.custom-select.is-valid {\r\n  border-color: #28a745;\r\n}\r\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\r\n.custom-select:valid:focus,\r\n.custom-select.is-valid:focus {\r\n  border-color: #28a745;\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\r\n.was-validated .form-control:valid ~ .valid-feedback,\r\n.was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\r\n.form-control.is-valid ~ .valid-tooltip, .was-validated\r\n.custom-select:valid ~ .valid-feedback,\r\n.was-validated\r\n.custom-select:valid ~ .valid-tooltip,\r\n.custom-select.is-valid ~ .valid-feedback,\r\n.custom-select.is-valid ~ .valid-tooltip {\r\n  display: block;\r\n}\r\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\r\n  color: #28a745;\r\n}\r\n.was-validated .form-check-input:valid ~ .valid-feedback,\r\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\r\n.form-check-input.is-valid ~ .valid-tooltip {\r\n  display: block;\r\n}\r\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\r\n  color: #28a745;\r\n}\r\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\r\n  background-color: #71dd8a;\r\n}\r\n.was-validated .custom-control-input:valid ~ .valid-feedback,\r\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\r\n.custom-control-input.is-valid ~ .valid-tooltip {\r\n  display: block;\r\n}\r\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\r\n  background-color: #34ce57;\r\n}\r\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\r\n  box-shadow: 0 0 0 1px #f0f0f0, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\r\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\r\n  border-color: #28a745;\r\n}\r\n.was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {\r\n  border-color: inherit;\r\n}\r\n.was-validated .custom-file-input:valid ~ .valid-feedback,\r\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\r\n.custom-file-input.is-valid ~ .valid-tooltip {\r\n  display: block;\r\n}\r\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\r\n.invalid-feedback {\r\n  display: none;\r\n  width: 100%;\r\n  margin-top: 0.25rem;\r\n  font-size: 80%;\r\n  color: #dc3545;\r\n}\r\n.invalid-tooltip {\r\n  position: absolute;\r\n  top: 100%;\r\n  z-index: 5;\r\n  display: none;\r\n  max-width: 100%;\r\n  padding: .5rem;\r\n  margin-top: .1rem;\r\n  font-size: .875rem;\r\n  line-height: 1;\r\n  color: #fff;\r\n  background-color: rgba(220, 53, 69, 0.8);\r\n  border-radius: .2rem;\r\n}\r\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\r\n.custom-select:invalid,\r\n.custom-select.is-invalid {\r\n  border-color: #dc3545;\r\n}\r\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\r\n.custom-select:invalid:focus,\r\n.custom-select.is-invalid:focus {\r\n  border-color: #dc3545;\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\r\n.was-validated .form-control:invalid ~ .invalid-feedback,\r\n.was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\r\n.form-control.is-invalid ~ .invalid-tooltip, .was-validated\r\n.custom-select:invalid ~ .invalid-feedback,\r\n.was-validated\r\n.custom-select:invalid ~ .invalid-tooltip,\r\n.custom-select.is-invalid ~ .invalid-feedback,\r\n.custom-select.is-invalid ~ .invalid-tooltip {\r\n  display: block;\r\n}\r\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\r\n  color: #dc3545;\r\n}\r\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\r\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\r\n.form-check-input.is-invalid ~ .invalid-tooltip {\r\n  display: block;\r\n}\r\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\r\n  color: #dc3545;\r\n}\r\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\r\n  background-color: #efa2a9;\r\n}\r\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\r\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\r\n.custom-control-input.is-invalid ~ .invalid-tooltip {\r\n  display: block;\r\n}\r\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\r\n  background-color: #e4606d;\r\n}\r\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\r\n  box-shadow: 0 0 0 1px #f0f0f0, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\r\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\r\n  border-color: #dc3545;\r\n}\r\n.was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {\r\n  border-color: inherit;\r\n}\r\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\r\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\r\n.custom-file-input.is-invalid ~ .invalid-tooltip {\r\n  display: block;\r\n}\r\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\r\n.custom-control-input:checked ~ .custom-control-label::before {\r\n  color: #fff;\r\n  background-color: #4fbfa8;\r\n}\r\n.custom-control-input:focus ~ .custom-control-label::before {\r\n  box-shadow: 0 0 0 1px #f0f0f0, 0 0 0 0.2rem rgba(79, 191, 168, 0.25);\r\n}\r\n.custom-control-input:active ~ .custom-control-label::before {\r\n  color: #fff;\r\n  background-color: #d2efe9;\r\n}\r\n.custom-control-input:disabled ~ .custom-control-label {\r\n  color: #6c757d;\r\n}\r\n.custom-control-input:disabled ~ .custom-control-label::before {\r\n  background-color: #e9ecef;\r\n}\r\n.custom-checkbox .custom-control-label::before {\r\n  border-radius: 0.25rem;\r\n}\r\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\r\n  background-color: #4fbfa8;\r\n}\r\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\r\n}\r\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\r\n  background-color: #4fbfa8;\r\n}\r\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\r\n}\r\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\r\n  background-color: rgba(79, 191, 168, 0.5);\r\n}\r\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\r\n  background-color: rgba(79, 191, 168, 0.5);\r\n}\r\n.custom-radio .custom-control-label::before {\r\n  border-radius: 50%;\r\n}\r\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\r\n  background-color: #4fbfa8;\r\n}\r\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\r\n}\r\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\r\n  background-color: rgba(79, 191, 168, 0.5);\r\n}\r\n/*\r\n* 7.CODE\r\n*/\r\ncode {\r\n  font-size: 87.5%;\r\n  color: #e83e8c;\r\n}\r\n/*\r\n* 8. NAV\r\n*/\r\n.nav-link {\r\n  padding: 0.5rem 1rem;\r\n}\r\n.nav-link.disabled {\r\n  color: #6c757d;\r\n}\r\n.nav-tabs .nav-item {\r\n  margin-bottom: -1px;\r\n}\r\n.nav-tabs .nav-link {\r\n  border: 1px solid transparent;\r\n  border-top-left-radius: 0.25rem;\r\n  border-top-right-radius: 0.25rem;\r\n}\r\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\r\n  border-color: #e9ecef #e9ecef #dee2e6;\r\n}\r\n.nav-tabs .nav-link.disabled {\r\n  color: #6c757d;\r\n}\r\n.nav-tabs .nav-link.active,\r\n.nav-tabs .nav-item.show .nav-link {\r\n  color: #495057;\r\n  background-color: #f0f0f0;\r\n}\r\n.nav-tabs .dropdown-menu {\r\n  margin-top: -1px;\r\n}\r\n.nav-pills .nav-link {\r\n  border-radius: 0;\r\n}\r\n.nav-pills .nav-link.active,\r\n.nav-pills .show > .nav-link {\r\n  color: #fff;\r\n  background-color: #4fbfa8;\r\n}\r\n/*\r\n* 9. CARD\r\n*/\r\n.card {\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.07);\r\n  border-radius: 0.25rem;\r\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n.card > .list-group:first-child .list-group-item:first-child {\r\n  border-top-left-radius: 0.25rem;\r\n  border-top-right-radius: 0.25rem;\r\n}\r\n.card > .list-group:last-child .list-group-item:last-child {\r\n  border-bottom-right-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\r\n}\r\n.card-body {\r\n  padding: 1.25rem;\r\n}\r\n.card-title {\r\n  margin-bottom: 0.75rem;\r\n}\r\n.card-subtitle {\r\n  margin-top: -0.375rem;\r\n}\r\n.card-link + .card-link {\r\n  margin-left: 1.25rem;\r\n}\r\n.card-header {\r\n  padding: 0.75rem 1.25rem;\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.07);\r\n}\r\n.card-header:first-child {\r\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\r\n}\r\n.card-header-transparent {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  border-bottom: none;\r\n}\r\n.card-footer {\r\n  padding: 0.75rem 1.25rem;\r\n  background-color: #f8f9fa;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.07);\r\n}\r\n.card-footer:last-child {\r\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\r\n}\r\n.card-header-tabs {\r\n  margin-right: -0.625rem;\r\n  margin-bottom: -0.75rem;\r\n  margin-left: -0.625rem;\r\n  border-bottom: 0;\r\n}\r\n.card-header-pills {\r\n  margin-right: -0.625rem;\r\n  margin-left: -0.625rem;\r\n}\r\n.card-img-overlay {\r\n  padding: 1.25rem;\r\n}\r\n.card-img-overlay-opacity {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n.card-img {\r\n  border-radius: calc(0.25rem - 1px);\r\n}\r\n.card-img-top {\r\n  border-top-left-radius: calc(0.25rem - 1px);\r\n  border-top-right-radius: calc(0.25rem - 1px);\r\n}\r\n.card-img-bottom {\r\n  border-bottom-right-radius: calc(0.25rem - 1px);\r\n  border-bottom-left-radius: calc(0.25rem - 1px);\r\n}\r\n.card-deck .card {\r\n  margin-bottom: 15px;\r\n}\r\n@media (min-width: 576px) {\r\n  .card-deck {\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n  }\r\n  .card-deck .card {\r\n    margin-right: 15px;\r\n    margin-left: 15px;\r\n  }\r\n}\r\n/*\r\n* 10. DROPDOWNS\r\n*/\r\n.dropdown-menu {\r\n  min-width: 10rem;\r\n  padding: 0.5rem 0;\r\n  margin: 0.125rem 0 0;\r\n  font-size: 0.9rem;\r\n  color: #212529;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\r\n}\r\n.dropdown-item {\r\n  padding: 0.25rem 1.5rem;\r\n  font-weight: 400;\r\n  color: #212529;\r\n}\r\n.dropdown-item:hover, .dropdown-item:focus {\r\n  color: #16181b;\r\n  background-color: #f8f9fa;\r\n}\r\n.dropdown-item.active, .dropdown-item:active {\r\n  color: #fff;\r\n  background-color: #4fbfa8;\r\n}\r\n.dropdown-item.disabled, .dropdown-item:disabled {\r\n  color: #6c757d;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7NENBTzRDO0FBQzVDOzs7Ozs7RUFNRTtBQUNGO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtDQUMzQjtBQUVEO0VBRUUscUJBQXFCO0VBQ3JCLGNBQWM7Q0FDZjtBQUVEO0VBQ0UsY0FBYztDQUNmO0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLHVCQUF1QjtDQUN4QjtBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QiwyQkFBMkI7Q0FDNUI7QUFFRDs7Ozs7O0VBTUU7QUFDRjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQjtDQUN2QjtBQUVEO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsbUJBQW1CO0dBQ3BCO0NBQ0Y7QUFFRDtFQUNFLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsWUFBWTtDQUNiO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLFlBQVk7Q0FDYjtBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxZQUFZO0NBQ2I7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7QUFFRDs7Ozs7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dEM7QUFFRDs7O0VBR0UscUNBQXFDO0NBQ3RDO0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFFRDs7O0VBR0UscUNBQXFDO0NBQ3RDO0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFFRDs7O0VBR0UscUNBQXFDO0NBQ3RDO0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFFRDs7O0VBR0UscUNBQXFDO0NBQ3RDO0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFFRDs7O0VBR0UscUNBQXFDO0NBQ3RDO0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFFRDs7O0VBR0UscUNBQXFDO0NBQ3RDO0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFFRDs7O0VBR0UscUNBQXFDO0NBQ3RDO0FBRUQ7RUFDRSxpQ0FBaUM7Q0FDbEM7QUFFRDtFQUNFLGlDQUFpQztDQUNsQztBQUVEO0VBQ0UsaUNBQWlDO0NBQ2xDO0FBRUQ7RUFDRSxpQ0FBaUM7Q0FDbEM7QUFFRDtFQUNFLGlDQUFpQztDQUNsQztBQUVEO0VBQ0UsaUNBQWlDO0NBQ2xDO0FBRUQ7RUFDRSxpQ0FBaUM7Q0FDbEM7QUFFRDtFQUNFLGlDQUFpQztDQUNsQztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0NBQzNC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NkM7Q0FDOUM7QUFFRDtFQUNFLGdEQUFnRDtFQUNoRCwrQ0FBK0M7Q0FDaEQ7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUVEO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsbUJBQW1CO0dBQ3BCO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0dBQ25CO0NBQ0Y7QUFFRDs7RUFFRTtBQUNGO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsc0NBQXNDO0VBQ3RDLHVCQUF1QjtDQUN4QjtBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxyXG5cclxuICAgQm9vdHN0cmFwaW91cyBCb2lsZXJwbGF0ZSBUZW1wbGF0ZVxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qXHJcbipcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogR0VORVJBTFxyXG4qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKlxyXG4qL1xyXG5ib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxufVxyXG5cclxuYSwgYnV0dG9uIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmEgaS5mYSwgYnV0dG9uIGkuZmEge1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4gKyAuYnRuIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5jbGlja2FibGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lbnUtbGFyZ2Uge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lbnUtbGFyZ2UgLm1lZ2FtZW51IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTE0MHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxufVxyXG5cclxuLm1lbnUtbGFyZ2UgYS5uYXYtbGluayB7XHJcbiAgcGFkZGluZzogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qXHJcbipcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogVE9QIEJBUlxyXG4qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKlxyXG4qL1xyXG4jdG9wIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuI3RvcCAub2ZmZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jdG9wIC5vZmZlciAuYnRuIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgI3RvcCB7XHJcbiAgICBmb250LXNpemU6IDAuNzM4cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuI3RvcCBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI3RvcCB1bC5tZW51IHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDAuNzM4cmVtO1xyXG59XHJcblxyXG4jdG9wIHVsLm1lbnUgPiBsaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4jdG9wIHVsLm1lbnUgPiBsaSBhIHtcclxuICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuI3RvcCB1bC5tZW51ID4gbGkgKyBsaTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwifFxcMDBhMFwiO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4jdG9wIHVsLm1lbnUgPiAuYWN0aXZlIHtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuI3RvcCAjbG9naW4tbW9kYWwgLm1vZGFsLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogIzRmYmZhODtcclxufVxyXG5cclxuI3RvcCAjbG9naW4tbW9kYWwgLm1vZGFsLWhlYWRlciBoNSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiN0b3AgI2xvZ2luLW1vZGFsIGEge1xyXG4gIGNvbG9yOiAjNGZiZmE4O1xyXG59XHJcblxyXG4jdG9wICNsb2dpbi1tb2RhbCBwIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qXHJcbipcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogTkFWQkFSXHJcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qXHJcbiovXHJcbi5uYXZiYXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0gPiAubmF2LWxpbmsge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMzBweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gIC5uYXZiYXIgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0gPiAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtID4gLm5hdi1saW5rLmFjdGl2ZSwgLm5hdmJhciAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluazpob3ZlciwgLm5hdmJhciAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluazpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogIzRmYmZhODtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5uYXZiYXIgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhciAubWVnYW1lbnUge1xyXG4gIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLm5hdmJhciAubWVnYW1lbnUge1xyXG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXIgLm1lbnUtbGFyZ2UgaDUge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMXB4ICM1NTU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gIC5uYXZiYXIgLm1lbnUtbGFyZ2UgaDUge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyIC5tZW51LWxhcmdlIHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm5hdmJhciAubWVudS1sYXJnZSB1bCAubmF2LWl0ZW0ge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VlZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBwYWRkaW5nOiA0cHggMDtcclxufVxyXG5cclxuLm5hdmJhciAubWVudS1sYXJnZSB1bCAubmF2LWl0ZW0gYSB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgZm9udC1zaXplOiAwLjczOHJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm1lbnUtbGFyZ2UgdWwgLm5hdi1pdGVtIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjNGZiZmE4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubmF2YmFyIC5tZW51LWxhcmdlIC5iYW5uZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIgI2Jhc2tldC1vdmVydmlldyB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLWJ0biB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jc2VhcmNoIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4jc2VhcmNoIC5jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4jc2VhcmNoIGZvcm0ge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG4jc2VhcmNoIC5uYXZiYXItZm9ybSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmJyZWFkY3J1bWIge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuLypcclxuKlxyXG4qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBIT1RcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbipcclxuKi9cclxuI2hvdCBoMiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gIGNvbG9yOiAjNGZiZmE4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jaG90IC5wcm9kdWN0LXNsaWRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI2hvdCAucHJvZHVjdC1zbGlkZXIgLml0ZW0ge1xyXG4gIG1hcmdpbjogMCAyNXB4O1xyXG59XHJcblxyXG4jaG90IC5wcm9kdWN0LXNsaWRlciAucHJvZHVjdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuI2hvdCAucHJvZHVjdC1zbGlkZXIgLm93bC1kb3RzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLypcclxuKlxyXG4qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBBRFZBTlRBR0VTXHJcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qXHJcbiovXHJcbiNhZHZhbnRhZ2VzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhZHZhbnRhZ2VzIC5ib3ggLmljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDEyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IC0yMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuI2FkdmFudGFnZXMgLmJveCBoMyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4jYWR2YW50YWdlcyAuYm94IGgzIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2FkdmFudGFnZXMgLmJveCBwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLypcclxuKlxyXG4qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiBTTElERVJTXHJcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qXHJcbiovXHJcbiNtYWluLXNsaWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uYm94LnNsaWRlc2hvdyB1bCBsaSBkaXYsICNtYWluLXNsaWRlciB1bCBsaSBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm94LnNsaWRlc2hvdyAub3dsLWRvdHMsICNtYWluLXNsaWRlciAub3dsLWRvdHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjBweDtcclxuICBib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8qXHJcbipcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogRk9PVEVSXHJcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qXHJcbiovXHJcbiNmb290ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgcGFkZGluZzogMTAwcHggMDtcclxufVxyXG5cclxuI2Zvb3RlciB1bCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbiNmb290ZXIgdWwgYSB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbiNmb290ZXIgLnNvY2lhbCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuI2Zvb3RlciAuc29jaWFsIGEge1xyXG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxufVxyXG5cclxuI2Zvb3RlciAuc29jaWFsIGEgaSB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuI2Zvb3RlciAuc29jaWFsIGEuZmFjZWJvb2s6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDYwYWU7XHJcbn1cclxuXHJcbiNmb290ZXIgLnNvY2lhbCBhLmdwbHVzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzIxZjI1O1xyXG59XHJcblxyXG4jZm9vdGVyIC5zb2NpYWwgYS50d2l0dGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2NmO1xyXG59XHJcblxyXG4jZm9vdGVyIC5zb2NpYWwgYS5pbnN0YWdyYW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZDQzNzg7XHJcbn1cclxuXHJcbiNmb290ZXIgLnNvY2lhbCBhLmVtYWlsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE3ZjQ1O1xyXG59XHJcblxyXG4vKlxyXG4qXHJcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIENPUFlSSUdIVFNcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbipcclxuKi9cclxuI2NvcHlyaWdodCB7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBjb2xvcjogI2NjYztcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgZm9udC1zaXplOiAwLjczOHJlbTtcclxufVxyXG5cclxuI2NvcHlyaWdodCBwIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qXHJcbipcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogQk9YRVNcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbipcclxuKi9cclxuLmJveCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNlNmU2ZTY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmJveCAuYm94LWhlYWRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBtYXJnaW46IC0yMHB4IC0yMHB4IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VlZTtcclxufVxyXG5cclxuLmJveCAuYm94LWZvb3RlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBtYXJnaW46IDMwcHggLTIwcHggLTIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2VlZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgLmJveCAuYm94LWZvb3RlciAuYnRuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYm94LnNsaWRlc2hvdyB7XHJcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3guc2xpZGVzaG93IGgzIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4vKlxyXG4qXHJcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIFJJQkJPTlNcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbipcclxuKi9cclxuLnJpYmJvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUxcHg7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbn1cclxuXHJcbi5yaWJib24gLnJpYmJvbi1iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucmliYm9uIC50aGVyaWJib24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODBweDtcclxuICBwYWRkaW5nOiA2cHggMjBweCA2cHggMjBweDtcclxuICBtYXJnaW46IDMwcHggMTBweCAxMHB4IC03MXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZmJmYTg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMnB4ICNiYmI7XHJcbn1cclxuXHJcbi5yaWJib24gLnRoZXJpYmJvbjpiZWZvcmUsIC5yaWJib24gLnRoZXJpYmJvbjphZnRlciB7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5yaWJib24gLnRoZXJpYmJvbjphZnRlciB7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMTAwJTtcclxuICBib3JkZXItd2lkdGg6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmQ3YjZiICMyZDdiNmIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5yaWJib24uc2FsZSB7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4ucmliYm9uLm5ldyB7XHJcbiAgdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ucmliYm9uLm5ldyAudGhlcmliYm9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCAjYmJiO1xyXG59XHJcblxyXG4ucmliYm9uLm5ldyAudGhlcmliYm9uOmFmdGVyIHtcclxuICBib3JkZXItY29sb3I6ICMwYzUyNWQgIzBjNTI1ZCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnJpYmJvbi5naWZ0IHtcclxuICB0b3A6IDEwMHB4O1xyXG59XHJcblxyXG4ucmliYm9uLmdpZnQgLnRoZXJpYmJvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAycHggI2JiYjtcclxufVxyXG5cclxuLnJpYmJvbi5naWZ0IC50aGVyaWJib246YWZ0ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzE0NTUyMyAjMTQ1NTIzIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKlxyXG4qXHJcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIENPTlRFTlRcclxuKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbipcclxuKi9cclxuI2NvbnRlbnQgLmNhcmQuc2lkZWJhci1tZW51IHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuI2NvbnRlbnQgLmNhcmQuc2lkZWJhci1tZW51IC5jYXJkLWhlYWRlciAuYnRuLmJ0bi1kYW5nZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jY29udGVudCAuY2FyZC5zaWRlYmFyLW1lbnUgLmJhZGdlLWxpZ2h0IHtcclxuICBjb2xvcjogIzRmYmZhODtcclxufVxyXG5cclxuI2NvbnRlbnQgLmNhcmQuc2lkZWJhci1tZW51IC5jYXJkIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNjb250ZW50IC5jYXJkLnNpZGViYXItbWVudSAuY2FyZCBzcGFuLmNvbG91ciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjNTU1O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbiNjb250ZW50IC5jYXJkLnNpZGViYXItbWVudSAuY2FyZCBzcGFuLmNvbG91ci53aGl0ZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuI2NvbnRlbnQgLmNhcmQuc2lkZWJhci1tZW51IC5jYXJkIHNwYW4uY29sb3VyLnJlZCB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG4jY29udGVudCAuY2FyZC5zaWRlYmFyLW1lbnUgLmNhcmQgc3Bhbi5jb2xvdXIuZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcblxyXG4jY29udGVudCAuY2FyZC5zaWRlYmFyLW1lbnUgLmNhcmQgc3Bhbi5jb2xvdXIuYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogYmx1ZTtcclxufVxyXG5cclxuI2NvbnRlbnQgLmNhcmQuc2lkZWJhci1tZW51IC5jYXJkIHNwYW4uY29sb3VyLnllbGxvdyB7XHJcbiAgYmFja2dyb3VuZDogeWVsbG93O1xyXG59XHJcblxyXG4jY29udGVudCAuY2FyZC5zaWRlYmFyLW1lbnUgLmNhcmQgbGFiZWwge1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGZvbnQtc2l6ZTogMC43MzhyZW07XHJcbn1cclxuXHJcbiNjb250ZW50IC5jYXJkLnNpZGViYXItbWVudSAuY2FyZCBsYWJlbDo6aG92ZXIge1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4jY29udGVudCAuY2FyZC5zaWRlYmFyLW1lbnUgaDMge1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRlbnQgLmNhcmQuc2lkZWJhci1tZW51IHVsLm5hdi5jYXRlZ29yeS1tZW51IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4jY29udGVudCAuY2FyZC5zaWRlYmFyLW1lbnUgdWwubmF2LmNhdGVnb3J5LW1lbnUgbGkgYSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250ZW50IC5jYXJkLnNpZGViYXItbWVudSB1bC5uYXYuY2F0ZWdvcnktbWVudSBsaSBhOm5vdCguYWN0aXZlKTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxufVxyXG5cclxuI2NvbnRlbnQgLmNhcmQuc2lkZWJhci1tZW51IHVsLm5hdiB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbiNjb250ZW50IC5jYXJkLnNpZGViYXItbWVudSB1bC5uYXYgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jY29udGVudCAuY2FyZC5zaWRlYmFyLW1lbnUgdWwubmF2IHVsIGxpIGEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBmb250LXNpemU6IDAuNzM4cmVtO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4jY29udGVudCAuY2FyZC5zaWRlYmFyLW1lbnUgdWwubmF2IHVsIGxpIGE6aG92ZXIsICNjb250ZW50IC5jYXJkLnNpZGViYXItbWVudSB1bC5uYXYgdWwgbGkgYTpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbiNjb250ZW50IC5pbmZvLWJhciB7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuI2NvbnRlbnQgLmluZm8tYmFyIC5wcm9kdWN0cy1udW1iZXIgc3Ryb25nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50IC5pbmZvLWJhciAucHJvZHVjdHMtbnVtYmVyIHNwYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4jY29udGVudCAuaW5mby1iYXIgLnByb2R1Y3RzLXNvcnQtYnkgc2VsZWN0IHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuI2NvbnRlbnQgLnByb2R1Y3Qge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2U2ZTZlNjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIC8qIGVudGlyZSBjb250YWluZXIsIGtlZXBzIHBlcnNwZWN0aXZlICovXHJcbiAgLyogZmxpcCBzcGVlZCBnb2VzIGhlcmUgKi9cclxuICAvKiBoaWRlIGJhY2sgb2YgcGFuZSBkdXJpbmcgc3dhcCAqL1xyXG4gIC8qICBVUERBVEVEISBmcm9udCBwYW5lLCBwbGFjZWQgYWJvdmUgYmFjayAqL1xyXG4gIC8qIGJhY2ssIGluaXRpYWxseSBoaWRkZW4gcGFuZSAqL1xyXG59XHJcblxyXG4jY29udGVudCAucHJvZHVjdCAuZmxpcC1jb250YWluZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwO1xyXG4gIHBlcnNwZWN0aXZlOiAxMDAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4jY29udGVudCAucHJvZHVjdCAuZmxpcC1jb250YWluZXIsICNjb250ZW50IC5wcm9kdWN0IC5mcm9udCwgI2NvbnRlbnQgLnByb2R1Y3QgLmJhY2sge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jY29udGVudCAucHJvZHVjdCAuZmxpcHBlciB7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC42cztcclxuICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2NvbnRlbnQgLnByb2R1Y3QgLmZyb250LCAjY29udGVudCAucHJvZHVjdCAuYmFjayB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjZzO1xyXG4gIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNjb250ZW50IC5wcm9kdWN0IC5mcm9udCB7XHJcbiAgei1pbmRleDogMjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbn1cclxuXHJcbiNjb250ZW50IC5wcm9kdWN0IC5iYWNrIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbn1cclxuXHJcbiNjb250ZW50IC5wcm9kdWN0OmhvdmVyIC5iYWNrIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuI2NvbnRlbnQgLnByb2R1Y3Q6aG92ZXIgLmZyb250IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbiNjb250ZW50IC5wcm9kdWN0IC5pbnZpc2libGUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuI2NvbnRlbnQgLnByb2R1Y3QgLnRleHQge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAwO1xyXG59XHJcblxyXG4jY29udGVudCAucHJvZHVjdCAudGV4dCBoMyB7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGhlaWdodDogNDJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2NvbnRlbnQgLnByb2R1Y3QgLnRleHQgaDMgYSB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbiNjb250ZW50IC5wcm9kdWN0IC50ZXh0IHAucHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbiNjb250ZW50IC5wcm9kdWN0IC50ZXh0IHAucHJpY2UgZGVsIHtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuI2NvbnRlbnQgLnByb2R1Y3QgLnRleHQgLmJ1dHRvbnMge1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRlbnQgLnByb2R1Y3QgLnRleHQgLmJ1dHRvbnMgLmJ0biB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI2NvbnRlbnQgLmJhbm5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI2NvbnRlbnQgLnBhZ2VzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250ZW50IC5wYWdlcyAubG9hZE1vcmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRlbnQgLnBhZ2VzIC5wYWdpbmF0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250ZW50ICNtYWluSW1hZ2Uge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4jY29udGVudCAjcHJvZHVjdE1haW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50ICNwcm9kdWN0TWFpbiAuZ29Ub0Rlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC43MzhyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGVudCAjcHJvZHVjdE1haW4gLmdvVG9EZXNjcmlwdGlvbiBhIHtcclxuICBjb2xvcjogIzk5OTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuI2NvbnRlbnQgI3Byb2R1Y3RNYWluIC5wcmljZSB7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuI2NvbnRlbnQgI3Byb2R1Y3RNYWluIC5idXR0b25zIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRlbnQgI3Byb2R1Y3RNYWluIC5idXR0b25zIC5idG4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50ICNkZXRhaWxzIC5zb2NpYWwge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNjb250ZW50ICNkZXRhaWxzIC5zb2NpYWwgaDQge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI2NvbnRlbnQgI2RldGFpbHMgLnNvY2lhbCBwIHtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRlbnQgI2RldGFpbHMgLnNvY2lhbCBwIGEge1xyXG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbiNjb250ZW50ICNkZXRhaWxzIC5zb2NpYWwgcCBhIGkge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250ZW50ICNkZXRhaWxzIC5zb2NpYWwgcCBhLmZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ2MGFlO1xyXG59XHJcblxyXG4jY29udGVudCAjZGV0YWlscyAuc29jaWFsIHAgYS5ncGx1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMWYyNTtcclxufVxyXG5cclxuI2NvbnRlbnQgI2RldGFpbHMgLnNvY2lhbCBwIGEudHdpdHRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjZjtcclxufVxyXG5cclxuI2NvbnRlbnQgI2RldGFpbHMgLnNvY2lhbCBwIGEuaW5zdGFncmFtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Q0Mzc4O1xyXG59XHJcblxyXG4jY29udGVudCAjZGV0YWlscyAuc29jaWFsIHAgYS5lbWFpbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhN2Y0NTtcclxufVxyXG5cclxuI2NvbnRlbnQgI3RodW1icyBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI2NvbnRlbnQgI3RodW1icyBhLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGZiZmE4O1xyXG59XHJcblxyXG4jY29udGVudCAjY2hlY2tvdXQgLm5hdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzRmYmZhODtcclxufVxyXG5cclxuI2NvbnRlbnQgI2NoZWNrb3V0IC5uYXYgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jY29udGVudCAjY2hlY2tvdXQgLm5hdiBhIGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuI2NvbnRlbnQgI29yZGVyLXN1bW1hcnkgdGFibGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50ICNvcmRlci1zdW1tYXJ5IHRhYmxlIHRkIHtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuI2NvbnRlbnQgI29yZGVyLXN1bW1hcnkgdGFibGUgdHIudG90YWwgdGQsICNjb250ZW50ICNvcmRlci1zdW1tYXJ5IHRhYmxlIHRyLnRvdGFsIHRoIHtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiNjb250ZW50ICNjaGVja291dCAudGFibGUgdGJvZHkgdHIgdGQsICNjb250ZW50ICNiYXNrZXQgLnRhYmxlIHRib2R5IHRyIHRkLCAjY29udGVudCAjY3VzdG9tZXItb3JkZXIgLnRhYmxlIHRib2R5IHRyIHRkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4jY29udGVudCAjY2hlY2tvdXQgLnRhYmxlIHRib2R5IHRyIHRkIGlucHV0LCAjY29udGVudCAjYmFza2V0IC50YWJsZSB0Ym9keSB0ciB0ZCBpbnB1dCwgI2NvbnRlbnQgI2N1c3RvbWVyLW9yZGVyIC50YWJsZSB0Ym9keSB0ciB0ZCBpbnB1dCB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiNjb250ZW50ICNjaGVja291dCAudGFibGUgdGJvZHkgdHIgdGQgaW1nLCAjY29udGVudCAjYmFza2V0IC50YWJsZSB0Ym9keSB0ciB0ZCBpbWcsICNjb250ZW50ICNjdXN0b21lci1vcmRlciAudGFibGUgdGJvZHkgdHIgdGQgaW1nIHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuI2NvbnRlbnQgI2NoZWNrb3V0IC50YWJsZSB0Zm9vdCwgI2NvbnRlbnQgI2Jhc2tldCAudGFibGUgdGZvb3QsICNjb250ZW50ICNjdXN0b21lci1vcmRlciAudGFibGUgdGZvb3Qge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbn1cclxuXHJcbiNjb250ZW50ICN0ZXh0LXBhZ2UgaDEsICNjb250ZW50ICN0ZXh0LXBhZ2UgaDIsICNjb250ZW50ICN0ZXh0LXBhZ2UgaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiNjb250ZW50ICNlcnJvci1wYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250ZW50ICNlcnJvci1wYWdlIGg0IHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4jY29udGVudCAjZXJyb3ItcGFnZSBwLmJ1dHRvbnMge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50ICNtYXAge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50ICNibG9nLWxpc3RpbmcgLnBvc3QsICNjb250ZW50ICNibG9nLWhvbWVwYWdlIC5wb3N0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbWFyZ2luOiAwIDAgMzBweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZTZlNmU2O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbiNjb250ZW50ICNibG9nLWxpc3RpbmcgLnBvc3QgaDIgYSwgI2NvbnRlbnQgI2Jsb2ctbGlzdGluZyAucG9zdCBoNCBhLCAjY29udGVudCAjYmxvZy1ob21lcGFnZSAucG9zdCBoMiBhLCAjY29udGVudCAjYmxvZy1ob21lcGFnZSAucG9zdCBoNCBhIHtcclxuICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuI2NvbnRlbnQgI2Jsb2ctbGlzdGluZyAucG9zdCBoMiBhOmhvdmVyLCAjY29udGVudCAjYmxvZy1saXN0aW5nIC5wb3N0IGg0IGE6aG92ZXIsICNjb250ZW50ICNibG9nLWhvbWVwYWdlIC5wb3N0IGgyIGE6aG92ZXIsICNjb250ZW50ICNibG9nLWhvbWVwYWdlIC5wb3N0IGg0IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjNGZiZmE4O1xyXG59XHJcblxyXG4jY29udGVudCAjYmxvZy1saXN0aW5nIC5wb3N0IC5hdXRob3ItY2F0ZWdvcnksICNjb250ZW50ICNibG9nLWhvbWVwYWdlIC5wb3N0IC5hdXRob3ItY2F0ZWdvcnkge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbiNjb250ZW50ICNibG9nLWxpc3RpbmcgLnBvc3QgLmRhdGUtY29tbWVudHMgYSwgI2NvbnRlbnQgI2Jsb2ctaG9tZXBhZ2UgLnBvc3QgLmRhdGUtY29tbWVudHMgYSB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4jY29udGVudCAjYmxvZy1saXN0aW5nIC5wb3N0IC5kYXRlLWNvbW1lbnRzIGE6aG92ZXIsICNjb250ZW50ICNibG9nLWhvbWVwYWdlIC5wb3N0IC5kYXRlLWNvbW1lbnRzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjNGZiZmE4O1xyXG59XHJcblxyXG4jY29udGVudCAjYmxvZy1saXN0aW5nIC5wb3N0IC5pbnRybywgI2NvbnRlbnQgI2Jsb2ctaG9tZXBhZ2UgLnBvc3QgLmludHJvIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4jY29udGVudCAjYmxvZy1saXN0aW5nIC5wb3N0IC5pbWFnZSwgI2NvbnRlbnQgI2Jsb2ctaG9tZXBhZ2UgLnBvc3QgLmltYWdlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNjb250ZW50ICNibG9nLWxpc3RpbmcgLnBvc3QgLmltYWdlIGltZywgI2NvbnRlbnQgI2Jsb2ctaG9tZXBhZ2UgLnBvc3QgLmltYWdlIGltZyB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuI2NvbnRlbnQgI2Jsb2ctbGlzdGluZyAucG9zdCAucmVhZC1tb3JlLCAjY29udGVudCAjYmxvZy1ob21lcGFnZSAucG9zdCAucmVhZC1tb3JlIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuI2NvbnRlbnQgI2Jsb2ctbGlzdGluZyAucG9zdDpob3ZlciAuaW1hZ2UgaW1nLCAjY29udGVudCAjYmxvZy1ob21lcGFnZSAucG9zdDpob3ZlciAuaW1hZ2UgaW1nIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xyXG59XHJcblxyXG4jY29udGVudCAjYmxvZy1saXN0aW5nIC5wYWdlciwgI2NvbnRlbnQgI2Jsb2ctaG9tZXBhZ2UgLnBhZ2VyIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuI2NvbnRlbnQgI2Jsb2ctbGlzdGluZyAucGFnZXIgYSwgI2NvbnRlbnQgI2Jsb2ctaG9tZXBhZ2UgLnBhZ2VyIGEge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcblxyXG4jY29udGVudCAjYmxvZy1saXN0aW5nIC5wYWdlciBhOm5vdCguZGlzYWJsZWQpOmhvdmVyLCAjY29udGVudCAjYmxvZy1ob21lcGFnZSAucGFnZXIgYTpub3QoLmRpc2FibGVkKTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzRmYmZhODtcclxufVxyXG5cclxuI2NvbnRlbnQgI2Jsb2ctaG9tZXBhZ2UgLnBvc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50ICNibG9nLWhvbWVwYWdlIC5wb3N0IGgyLCAjY29udGVudCAjYmxvZy1ob21lcGFnZSAucG9zdCBoNCwgI2NvbnRlbnQgI2Jsb2ctaG9tZXBhZ2UgLnBvc3QgLmF1dGhvci1jYXRlZ29yeSwgI2NvbnRlbnQgI2Jsb2ctaG9tZXBhZ2UgLnBvc3QgLnJlYWQtbW9yZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGVudCAjYmxvZy1ob21lcGFnZSAucG9zdCAuaW50cm8ge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbiNjb250ZW50ICNibG9nLWhvbWVwYWdlIC5wb3N0IC5yZWFkLW1vcmUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50ICNibG9nLXBvc3QgLmF1dGhvci1kYXRlIHtcclxuICBjb2xvcjogIzk5OTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4jY29udGVudCAjYmxvZy1wb3N0ICNwb3N0LWNvbnRlbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50ICNibG9nLXBvc3QgLmNvbW1lbnQge1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbiNjb250ZW50ICNibG9nLXBvc3QgLmNvbW1lbnQgLnBvc3RlZCB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgZm9udC1zaXplOiAwLjczOHJlbTtcclxufVxyXG5cclxuI2NvbnRlbnQgI2Jsb2ctcG9zdCAuY29tbWVudCAucmVwbHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jY29udGVudCAjYmxvZy1wb3N0IC5jb21tZW50Lmxhc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbiNjb250ZW50ICNibG9nLXBvc3QgI2NvbW1lbnRzLCAjY29udGVudCAjYmxvZy1wb3N0ICNjb21tZW50LWZvcm0ge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4jY29udGVudCAjYmxvZy1wb3N0ICNjb21tZW50cyBoNCwgI2NvbnRlbnQgI2Jsb2ctcG9zdCAjY29tbWVudC1mb3JtIGg0IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4jY29udGVudCAjYmxvZy1wb3N0ICNjb21tZW50LWZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50ICNjdXN0b21lci1vcmRlcnMgdGFibGUgdHIgdGgsICNjb250ZW50ICNjdXN0b21lci1vcmRlcnMgdGFibGUgdHIgdGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuI2NvbnRlbnQgI2N1c3RvbWVyLW9yZGVyIC50YWJsZSB0Zm9vdCB0aCB7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4jY29udGVudCAjY3VzdG9tZXItb3JkZXIgLmFkZHJlc3NlcyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiNjb250ZW50ICNjdXN0b21lci1vcmRlciAuYWRkcmVzc2VzIHAge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLm93bC1jYXJvdXNlbCAub3dsLWRvdHMgLm93bC1kb3Qge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5vd2wtY2Fyb3VzZWwgLm93bC1kb3RzIC5vd2wtZG90IHNwYW4ge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuLm93bC1jYXJvdXNlbCAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4ge1xyXG4gIGJhY2tncm91bmQ6ICM0ZmJmYTg7XHJcbn1cclxuXHJcbi5vd2wtdGh1bWJzIGJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAuNjtcclxufVxyXG5cclxuLm93bC10aHVtYnMgYnV0dG9uLmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm93bC10aHVtYnMgYnV0dG9uIGltZyB7XHJcbiAgbWF4LXdpZHRoOiA4OHB4O1xyXG59XHJcblxyXG4vKlxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09XHJcblNUWUxFIFNXSVRDSEVSIEZPUiBERU1PXHJcbj09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKi9cclxuI3N0eWxlLXN3aXRjaC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEyMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbiNzdHlsZS1zd2l0Y2gge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDE2MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2VkNGRhO1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbn1cclxuXHJcbiNzdHlsZS1zd2l0Y2ggaDQge1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgVEhFTUlORyBPRiBUSEUgQk9PVFNUUkFQIENPTVBPTkVOVFNcclxuXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgMSAtIE5BVkJBUlxyXG4gICAgMiAtIEJVVFRPTlNcclxuICAgIDMgLSBUWVBFXHJcbiAgICA0IC0gUEFHSU5BVElPTlxyXG4gICAgNSAtIFVUSUxJVElFU1xyXG4gICAgNiAtIEZPUk1TXHJcbiAgICA3IC0gQ09ERVxyXG4gICAgOCAtIE5BVlxyXG4gICAgOSAtIENBUkRcclxuICAgIDEwIC0gRFJPUERPV05TXHJcblxyXG4qL1xyXG4vKlxyXG4gKiAxLiBOQVZCQVJcclxuICovXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiAwLjMzMTI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjMzMTI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIge1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kOmhvdmVyLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciwgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmRpc2FibGVkIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5zaG93ID4gLm5hdi1saW5rLFxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5hY3RpdmUgPiAubmF2LWxpbmssXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLnNob3csXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDAsIDAsIDAsIDAuNSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdGV4dCB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1icmFuZDpob3ZlciwgLm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyLCAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluay5kaXNhYmxlZCB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAuc2hvdyA+IC5uYXYtbGluayxcclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5hY3RpdmUgPiAubmF2LWxpbmssXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsuc2hvdyxcclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci10b2dnbGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci10ZXh0IHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59XHJcblxyXG4vKlxyXG4gKiAyLiBCVVRUT05TXHJcbiAqL1xyXG4uYnRuIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gIC5idG4ge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5idG46Zm9jdXMsIC5idG4uZm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNzksIDE5MSwgMTY4LCAwLjI1KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg3OSwgMTkxLCAxNjgsIDAuMjUpO1xyXG59XHJcblxyXG4uYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjY1O1xyXG59XHJcblxyXG4uYnRuOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tbGluayB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzRmYmZhODtcclxufVxyXG5cclxuLmJ0bi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogIzM0OGU3YjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmJ0bi1saW5rOmZvY3VzLCAuYnRuLWxpbmsuZm9jdXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnRuLWxpbms6ZGlzYWJsZWQsIC5idG4tbGluay5kaXNhYmxlZCB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmYmZhODtcclxuICBib3JkZXItY29sb3I6ICM0ZmJmYTg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlYWE5NDtcclxuICBib3JkZXItY29sb3I6ICMzYWExOGM7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5LmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDc5LCAxOTEsIDE2OCwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg3OSwgMTkxLCAxNjgsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeS5kaXNhYmxlZCwgLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZiZmE4O1xyXG4gIGJvcmRlci1jb2xvcjogIzRmYmZhODtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FhMThjO1xyXG4gIGJvcmRlci1jb2xvcjogIzM3OTc4MztcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcclxuLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDc5LCAxOTEsIDE2OCwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg3OSwgMTkxLCAxNjgsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTYyNjg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTQ1YjYyO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpmb2N1cywgLmJ0bi1zZWNvbmRhcnkuZm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTA4LCAxMTcsIDEyNSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDgsIDExNywgMTI1LCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeS5kaXNhYmxlZCwgLmJ0bi1zZWNvbmRhcnk6ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuLnNob3cgPiAuYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDViNjI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGU1NTViO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcclxuLnNob3cgPiAuYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTA4LCAxMTcsIDEyNSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDgsIDExNywgMTI1LCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTg4Mzg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWU3ZTM0O1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3M6Zm9jdXMsIC5idG4tc3VjY2Vzcy5mb2N1cyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC41KTtcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzLmRpc2FibGVkLCAuYnRuLXN1Y2Nlc3M6ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4uc2hvdyA+IC5idG4tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWM3NDMwO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxyXG4uc2hvdyA+IC5idG4tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuNSk7XHJcbn1cclxuXHJcbi5idG4taW5mbyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuICBib3JkZXItY29sb3I6ICMxN2EyYjg7XHJcbn1cclxuXHJcbi5idG4taW5mbzpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzODQ5NjtcclxuICBib3JkZXItY29sb3I6ICMxMTdhOGI7XHJcbn1cclxuXHJcbi5idG4taW5mbzpmb2N1cywgLmJ0bi1pbmZvLmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIzLCAxNjIsIDE4NCwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMywgMTYyLCAxODQsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4taW5mby5kaXNhYmxlZCwgLmJ0bi1pbmZvOmRpc2FibGVkIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gIGJvcmRlci1jb2xvcjogIzE3YTJiODtcclxufVxyXG5cclxuLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuLnNob3cgPiAuYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE3YThiO1xyXG4gIGJvcmRlci1jb2xvcjogIzEwNzA3ZjtcclxufVxyXG5cclxuLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcclxuLnNob3cgPiAuYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIzLCAxNjIsIDE4NCwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMywgMTYyLCAxODQsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4td2FybmluZyB7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XHJcbn1cclxuXHJcbi5idG4td2FybmluZzpob3ZlciB7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwYTgwMDtcclxuICBib3JkZXItY29sb3I6ICNkMzllMDA7XHJcbn1cclxuXHJcbi5idG4td2FybmluZzpmb2N1cywgLmJ0bi13YXJuaW5nLmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI1NSwgMTkzLCA3LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI1NSwgMTkzLCA3LCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmcuZGlzYWJsZWQsIC5idG4td2FybmluZzpkaXNhYmxlZCB7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XHJcbn1cclxuXHJcbi5idG4td2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4td2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUwMDtcclxuICBib3JkZXItY29sb3I6ICNjNjk1MDA7XHJcbn1cclxuXHJcbi5idG4td2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4td2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDE5MywgNywgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDE5MywgNywgMC41KTtcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcblxyXG4uYnRuLWRhbmdlcjpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4MjMzMztcclxuICBib3JkZXItY29sb3I6ICNiZDIxMzA7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyOmZvY3VzLCAuYnRuLWRhbmdlci5mb2N1cyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC41KTtcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIuZGlzYWJsZWQsIC5idG4tZGFuZ2VyOmRpc2FibGVkIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmJ0bi1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQyMTMwO1xyXG4gIGJvcmRlci1jb2xvcjogI2IyMWYyZDtcclxufVxyXG5cclxuLmJ0bi1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLWxpZ2h0IHtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmJ0bi1saWdodDpob3ZlciB7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYTtcclxuICBib3JkZXItY29sb3I6ICNkYWUwZTU7XHJcbn1cclxuXHJcbi5idG4tbGlnaHQ6Zm9jdXMsIC5idG4tbGlnaHQuZm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQ4LCAyNDksIDI1MCwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNDgsIDI0OSwgMjUwLCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLWxpZ2h0LmRpc2FibGVkLCAuYnRuLWxpZ2h0OmRpc2FibGVkIHtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4uc2hvdyA+IC5idG4tbGlnaHQuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU1O1xyXG4gIGJvcmRlci1jb2xvcjogI2QzZDlkZjtcclxufVxyXG5cclxuLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxyXG4uc2hvdyA+IC5idG4tbGlnaHQuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI0OCwgMjQ5LCAyNTAsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQ4LCAyNDksIDI1MCwgMC41KTtcclxufVxyXG5cclxuLmJ0bi1kYXJrIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gIGJvcmRlci1jb2xvcjogIzM0M2E0MDtcclxufVxyXG5cclxuLmJ0bi1kYXJrOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNzJiO1xyXG4gIGJvcmRlci1jb2xvcjogIzFkMjEyNDtcclxufVxyXG5cclxuLmJ0bi1kYXJrOmZvY3VzLCAuYnRuLWRhcmsuZm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTIsIDU4LCA2NCwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg1MiwgNTgsIDY0LCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLWRhcmsuZGlzYWJsZWQsIC5idG4tZGFyazpkaXNhYmxlZCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuICBib3JkZXItY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbi5idG4tZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1kYXJrLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEyNDtcclxuICBib3JkZXItY29sb3I6ICMxNzFhMWQ7XHJcbn1cclxuXHJcbi5idG4tZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1kYXJrLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg1MiwgNTgsIDY0LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDUyLCA1OCwgNjQsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICBjb2xvcjogIzRmYmZhODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogIzRmYmZhODtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZmJmYTg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGZiZmE4O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpmb2N1cywgLmJ0bi1vdXRsaW5lLXByaW1hcnkuZm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNzksIDE5MSwgMTY4LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDc5LCAxOTEsIDE2OCwgMC41KTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuZGlzYWJsZWQsIC5idG4tb3V0bGluZS1wcmltYXJ5OmRpc2FibGVkIHtcclxuICBjb2xvcjogIzRmYmZhODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZiZmE4O1xyXG4gIGJvcmRlci1jb2xvcjogIzRmYmZhODtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDc5LCAxOTEsIDE2OCwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg3OSwgMTkxLCAxNjgsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpmb2N1cywgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5mb2N1cyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDgsIDExNywgMTI1LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEwOCwgMTE3LCAxMjUsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnkuZGlzYWJsZWQsIC5idG4tb3V0bGluZS1zZWNvbmRhcnk6ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTA4LCAxMTcsIDEyNSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDgsIDExNywgMTI1LCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgY29sb3I6ICMyOGE3NDU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6Zm9jdXMsIC5idG4tb3V0bGluZS1zdWNjZXNzLmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuLnNob3cgPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcclxuLnNob3cgPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1pbmZvIHtcclxuICBjb2xvcjogIzE3YTJiODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogIzE3YTJiODtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWluZm86aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtaW5mbzpmb2N1cywgLmJ0bi1vdXRsaW5lLWluZm8uZm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjMsIDE2MiwgMTg0LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIzLCAxNjIsIDE4NCwgMC41KTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWluZm8uZGlzYWJsZWQsIC5idG4tb3V0bGluZS1pbmZvOmRpc2FibGVkIHtcclxuICBjb2xvcjogIzE3YTJiODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtaW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWluZm8uZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gIGJvcmRlci1jb2xvcjogIzE3YTJiODtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLW91dGxpbmUtaW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWluZm8uZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIzLCAxNjIsIDE4NCwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMywgMTYyLCAxODQsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS13YXJuaW5nIHtcclxuICBjb2xvcjogI2ZmYzEwNztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXdhcm5pbmc6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtd2FybmluZzpmb2N1cywgLmJ0bi1vdXRsaW5lLXdhcm5pbmcuZm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAxOTMsIDcsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAxOTMsIDcsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS13YXJuaW5nLmRpc2FibGVkLCAuYnRuLW91dGxpbmUtd2FybmluZzpkaXNhYmxlZCB7XHJcbiAgY29sb3I6ICNmZmMxMDc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1vdXRsaW5lLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDE5MywgNywgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDE5MywgNywgMC41KTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRhbmdlciB7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYW5nZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZGFuZ2VyOmZvY3VzLCAuYnRuLW91dGxpbmUtZGFuZ2VyLmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZGFuZ2VyLmRpc2FibGVkLCAuYnRuLW91dGxpbmUtZGFuZ2VyOmRpc2FibGVkIHtcclxuICBjb2xvcjogI2RjMzU0NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gIGNvbG9yOiAjZjhmOWZhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbGlnaHQ6Zm9jdXMsIC5idG4tb3V0bGluZS1saWdodC5mb2N1cyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNDgsIDI0OSwgMjUwLCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI0OCwgMjQ5LCAyNTAsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodC5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLWxpZ2h0OmRpc2FibGVkIHtcclxuICBjb2xvcjogI2Y4ZjlmYTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuLnNob3cgPiAuYnRuLW91dGxpbmUtbGlnaHQuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1vdXRsaW5lLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcclxuLnNob3cgPiAuYnRuLW91dGxpbmUtbGlnaHQuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI0OCwgMjQ5LCAyNTAsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQ4LCAyNDksIDI1MCwgMC41KTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzQzYTQwO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZGFyazpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuICBib3JkZXItY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYXJrOmZvY3VzLCAuYnRuLW91dGxpbmUtZGFyay5mb2N1cyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg1MiwgNTgsIDY0LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDUyLCA1OCwgNjQsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYXJrLmRpc2FibGVkLCAuYnRuLW91dGxpbmUtZGFyazpkaXNhYmxlZCB7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1kYXJrLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuICBib3JkZXItY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1vdXRsaW5lLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1kYXJrLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg1MiwgNTgsIDY0LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDUyLCA1OCwgNjQsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tbGcge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbn1cclxuXHJcbi5idG4tc20ge1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43MzhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbn1cclxuXHJcbi8qXHJcbiAqIDMuIFRZUEVcclxuICovXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzRmYmZhODtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIsIGE6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMzQ4ZTdiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG4uaDEsXHJcbi5oMixcclxuLmgzLFxyXG4uaDQsXHJcbi5oNSxcclxuLmg2IHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5oMSxcclxuLmgxIHtcclxuICBmb250LXNpemU6IDIuMjVyZW07XHJcbn1cclxuXHJcbmgyLFxyXG4uaDIge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcblxyXG5oMyxcclxuLmgzIHtcclxuICBmb250LXNpemU6IDEuNTNyZW07XHJcbn1cclxuXHJcbmg0LFxyXG4uaDQge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbn1cclxuXHJcbmg1LFxyXG4uaDUge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG5oNixcclxuLmg2IHtcclxuICBmb250LXNpemU6IDAuNzY1cmVtO1xyXG59XHJcblxyXG4ubGVhZCB7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uZGlzcGxheS0xIHtcclxuICBmb250LXNpemU6IDZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4uZGlzcGxheS0yIHtcclxuICBmb250LXNpemU6IDUuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi5kaXNwbGF5LTMge1xyXG4gIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmRpc3BsYXktNCB7XHJcbiAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuc21hbGwsXHJcbi5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxubWFyayxcclxuLm1hcmsge1xyXG4gIHBhZGRpbmc6IDAuMmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XHJcbn1cclxuXHJcbi5ibG9ja3F1b3RlIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzRmYmZhODtcclxufVxyXG5cclxuLmJsb2NrcXVvdGUtZm9vdGVyIHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmJsb2NrcXVvdGUtZm9vdGVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDE0IFxcMDBBMFwiO1xyXG59XHJcblxyXG4udGV4dC1wcmltYXJ5IHtcclxuICBjb2xvcjogIzRmYmZhOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLnRleHQtcHJpbWFyeTpob3ZlciwgYS50ZXh0LXByaW1hcnk6Zm9jdXMge1xyXG4gIGNvbG9yOiAjM2FhMThjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXVwcGVyY2FzZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbi8qXHJcbiAqIDQuIFBBR0lOQVRJT05cclxuICovXHJcbi5wYWdlLWl0ZW06Zmlyc3QtY2hpbGQgLnBhZ2UtbGluayB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ucGFnZS1pdGVtOmxhc3QtY2hpbGQgLnBhZ2UtbGluayB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZmJmYTg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGZiZmE4O1xyXG59XHJcblxyXG4ucGFnZS1pdGVtLmRpc2FibGVkIC5wYWdlLWxpbmsge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xyXG59XHJcblxyXG4ucGFnZS1saW5rIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yNTtcclxuICBjb2xvcjogIzRmYmZhODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi5wYWdlLWxpbms6aG92ZXIsIC5wYWdlLWxpbms6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMzQ4ZTdiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24tbGcgLnBhZ2UtbGluayB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1sZyAucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmsge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjNyZW07XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLWxnIC5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNyZW07XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXNtIC5wYWdlLWxpbmsge1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43MzhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24tc20gLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjJyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4ycmVtO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1zbSAucGFnZS1pdGVtOmxhc3QtY2hpbGQgLnBhZ2UtbGluayB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMnJlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xyXG59XHJcblxyXG4vKlxyXG4qIDUuIFVUSUxJVElFU1xyXG4qL1xyXG4uYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmYmZhOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLmJnLXByaW1hcnk6aG92ZXIsIGEuYmctcHJpbWFyeTpmb2N1cyxcclxuYnV0dG9uLmJnLXByaW1hcnk6aG92ZXIsXHJcbmJ1dHRvbi5iZy1wcmltYXJ5OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FhMThjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5iZy1zZWNvbmRhcnk6aG92ZXIsIGEuYmctc2Vjb25kYXJ5OmZvY3VzLFxyXG5idXR0b24uYmctc2Vjb25kYXJ5OmhvdmVyLFxyXG5idXR0b24uYmctc2Vjb25kYXJ5OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1YjYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEuYmctc3VjY2Vzczpob3ZlciwgYS5iZy1zdWNjZXNzOmZvY3VzLFxyXG5idXR0b24uYmctc3VjY2Vzczpob3ZlcixcclxuYnV0dG9uLmJnLXN1Y2Nlc3M6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5iZy1pbmZvOmhvdmVyLCBhLmJnLWluZm86Zm9jdXMsXHJcbmJ1dHRvbi5iZy1pbmZvOmhvdmVyLFxyXG5idXR0b24uYmctaW5mbzpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExN2E4YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLmJnLXdhcm5pbmc6aG92ZXIsIGEuYmctd2FybmluZzpmb2N1cyxcclxuYnV0dG9uLmJnLXdhcm5pbmc6aG92ZXIsXHJcbmJ1dHRvbi5iZy13YXJuaW5nOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM5ZTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5iZy1kYW5nZXI6aG92ZXIsIGEuYmctZGFuZ2VyOmZvY3VzLFxyXG5idXR0b24uYmctZGFuZ2VyOmhvdmVyLFxyXG5idXR0b24uYmctZGFuZ2VyOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQyMTMwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLmJnLWxpZ2h0OmhvdmVyLCBhLmJnLWxpZ2h0OmZvY3VzLFxyXG5idXR0b24uYmctbGlnaHQ6aG92ZXIsXHJcbmJ1dHRvbi5iZy1saWdodDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLmJnLWRhcms6aG92ZXIsIGEuYmctZGFyazpmb2N1cyxcclxuYnV0dG9uLmJnLWRhcms6aG92ZXIsXHJcbmJ1dHRvbi5iZy1kYXJrOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTI0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItcHJpbWFyeSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGZiZmE4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItc2Vjb25kYXJ5IHtcclxuICBib3JkZXItY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1zdWNjZXNzIHtcclxuICBib3JkZXItY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1pbmZvIHtcclxuICBib3JkZXItY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci13YXJuaW5nIHtcclxuICBib3JkZXItY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1kYW5nZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWxpZ2h0IHtcclxuICBib3JkZXItY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1kYXJrIHtcclxuICBib3JkZXItY29sb3I6ICMzNDNhNDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICM0ZmJmYTggIWltcG9ydGFudDtcclxufVxyXG5cclxuYS50ZXh0LXByaW1hcnk6aG92ZXIsIGEudGV4dC1wcmltYXJ5OmZvY3VzIHtcclxuICBjb2xvcjogIzNhYTE4YyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1zZWNvbmRhcnkge1xyXG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEudGV4dC1zZWNvbmRhcnk6aG92ZXIsIGEudGV4dC1zZWNvbmRhcnk6Zm9jdXMge1xyXG4gIGNvbG9yOiAjNTQ1YjYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEudGV4dC1zdWNjZXNzOmhvdmVyLCBhLnRleHQtc3VjY2Vzczpmb2N1cyB7XHJcbiAgY29sb3I6ICMxZTdlMzQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtaW5mbyB7XHJcbiAgY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcclxufVxyXG5cclxuYS50ZXh0LWluZm86aG92ZXIsIGEudGV4dC1pbmZvOmZvY3VzIHtcclxuICBjb2xvcjogIzExN2E4YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC13YXJuaW5nIHtcclxuICBjb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLnRleHQtd2FybmluZzpob3ZlciwgYS50ZXh0LXdhcm5pbmc6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZDM5ZTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuYS50ZXh0LWRhbmdlcjpob3ZlciwgYS50ZXh0LWRhbmdlcjpmb2N1cyB7XHJcbiAgY29sb3I6ICNiZDIxMzAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtbGlnaHQge1xyXG4gIGNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEudGV4dC1saWdodDpob3ZlciwgYS50ZXh0LWxpZ2h0OmZvY3VzIHtcclxuICBjb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1kYXJrIHtcclxuICBjb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLnRleHQtZGFyazpob3ZlciwgYS50ZXh0LWRhcms6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMWQyMTI0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYWRnZS1wcmltYXJ5IHtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZiZmE4O1xyXG59XHJcblxyXG4uYmFkZ2UtcHJpbWFyeVtocmVmXTpob3ZlciwgLmJhZGdlLXByaW1hcnlbaHJlZl06Zm9jdXMge1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FhMThjO1xyXG59XHJcblxyXG4uYmFkZ2Utc2Vjb25kYXJ5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4uYmFkZ2Utc2Vjb25kYXJ5W2hyZWZdOmhvdmVyLCAuYmFkZ2Utc2Vjb25kYXJ5W2hyZWZdOmZvY3VzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWI2MjtcclxufVxyXG5cclxuLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbn1cclxuXHJcbi5iYWRnZS1zdWNjZXNzW2hyZWZdOmhvdmVyLCAuYmFkZ2Utc3VjY2Vzc1tocmVmXTpmb2N1cyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7XHJcbn1cclxuXHJcbi5iYWRnZS1pbmZvIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG59XHJcblxyXG4uYmFkZ2UtaW5mb1tocmVmXTpob3ZlciwgLmJhZGdlLWluZm9baHJlZl06Zm9jdXMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE3YThiO1xyXG59XHJcblxyXG4uYmFkZ2Utd2FybmluZyB7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxufVxyXG5cclxuLmJhZGdlLXdhcm5pbmdbaHJlZl06aG92ZXIsIC5iYWRnZS13YXJuaW5nW2hyZWZdOmZvY3VzIHtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUwMDtcclxufVxyXG5cclxuLmJhZGdlLWRhbmdlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmJhZGdlLWRhbmdlcltocmVmXTpob3ZlciwgLmJhZGdlLWRhbmdlcltocmVmXTpmb2N1cyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XHJcbn1cclxuXHJcbi5iYWRnZS1saWdodCB7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmJhZGdlLWxpZ2h0W2hyZWZdOmhvdmVyLCAuYmFkZ2UtbGlnaHRbaHJlZl06Zm9jdXMge1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU1O1xyXG59XHJcblxyXG4uYmFkZ2UtZGFyayB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxufVxyXG5cclxuLmJhZGdlLWRhcmtbaHJlZl06aG92ZXIsIC5iYWRnZS1kYXJrW2hyZWZdOmZvY3VzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEyNDtcclxufVxyXG5cclxuLypcclxuICAqIDYuIEZPUk1TXHJcbiAgKi9cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6LW1zLWV4cGFuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2FkZTFkNjtcclxuICBvdXRsaW5lOiAwO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNzksIDE5MSwgMTY4LCAwLjI1KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg3OSwgMTkxLCAxNjgsIDAuMjUpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQsIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG59XHJcblxyXG5zZWxlY3QuZm9ybS1jb250cm9sOm5vdChbc2l6ZV0pOm5vdChbbXVsdGlwbGVdKSB7XHJcbiAgaGVpZ2h0OiBjYWxjKDIuMXJlbSArIDJweCk7XHJcbn1cclxuXHJcbnNlbGVjdC5mb3JtLWNvbnRyb2w6Zm9jdXM6Oi1tcy12YWx1ZSB7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1zbSB7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjczOHJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxufVxyXG5cclxuc2VsZWN0LmZvcm0tY29udHJvbC1zbTpub3QoW3NpemVdKTpub3QoW211bHRpcGxlXSkge1xyXG4gIGhlaWdodDogY2FsYygxLjYwN3JlbSArIDJweCk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtbGcge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbn1cclxuXHJcbnNlbGVjdC5mb3JtLWNvbnRyb2wtbGc6bm90KFtzaXplXSk6bm90KFttdWx0aXBsZV0pIHtcclxuICBoZWlnaHQ6IGNhbGMoMi42ODc1cmVtICsgMnB4KTtcclxufVxyXG5cclxuLnZhbGlkLWZlZWRiYWNrIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgY29sb3I6ICMyOGE3NDU7XHJcbn1cclxuXHJcbi52YWxpZC10b29sdGlwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogLjFyZW07XHJcbiAgZm9udC1zaXplOiAuODc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDE2NywgNjksIDAuOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XHJcbn1cclxuXHJcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6dmFsaWQsIC5mb3JtLWNvbnRyb2wuaXMtdmFsaWQsIC53YXMtdmFsaWRhdGVkXHJcbi5jdXN0b20tc2VsZWN0OnZhbGlkLFxyXG4uY3VzdG9tLXNlbGVjdC5pcy12YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOnZhbGlkOmZvY3VzLCAuZm9ybS1jb250cm9sLmlzLXZhbGlkOmZvY3VzLCAud2FzLXZhbGlkYXRlZFxyXG4uY3VzdG9tLXNlbGVjdDp2YWxpZDpmb2N1cyxcclxuLmN1c3RvbS1zZWxlY3QuaXMtdmFsaWQ6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjI1KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC4yNSk7XHJcbn1cclxuXHJcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6dmFsaWQgfiAudmFsaWQtZmVlZGJhY2ssXHJcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6dmFsaWQgfiAudmFsaWQtdG9vbHRpcCwgLmZvcm0tY29udHJvbC5pcy12YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcclxuLmZvcm0tY29udHJvbC5pcy12YWxpZCB+IC52YWxpZC10b29sdGlwLCAud2FzLXZhbGlkYXRlZFxyXG4uY3VzdG9tLXNlbGVjdDp2YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcclxuLndhcy12YWxpZGF0ZWRcclxuLmN1c3RvbS1zZWxlY3Q6dmFsaWQgfiAudmFsaWQtdG9vbHRpcCxcclxuLmN1c3RvbS1zZWxlY3QuaXMtdmFsaWQgfiAudmFsaWQtZmVlZGJhY2ssXHJcbi5jdXN0b20tc2VsZWN0LmlzLXZhbGlkIH4gLnZhbGlkLXRvb2x0aXAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jaGVjay1pbnB1dDp2YWxpZCB+IC5mb3JtLWNoZWNrLWxhYmVsLCAuZm9ybS1jaGVjay1pbnB1dC5pcy12YWxpZCB+IC5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICBjb2xvcjogIzI4YTc0NTtcclxufVxyXG5cclxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY2hlY2staW5wdXQ6dmFsaWQgfiAudmFsaWQtZmVlZGJhY2ssXHJcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNoZWNrLWlucHV0OnZhbGlkIH4gLnZhbGlkLXRvb2x0aXAsIC5mb3JtLWNoZWNrLWlucHV0LmlzLXZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxyXG4uZm9ybS1jaGVjay1pbnB1dC5pcy12YWxpZCB+IC52YWxpZC10b29sdGlwIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OnZhbGlkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsLCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQuaXMtdmFsaWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6dmFsaWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLXZhbGlkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MWRkOGE7XHJcbn1cclxuXHJcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDp2YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcclxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OnZhbGlkIH4gLnZhbGlkLXRvb2x0aXAsIC5jdXN0b20tY29udHJvbC1pbnB1dC5pcy12YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcclxuLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLXZhbGlkIH4gLnZhbGlkLXRvb2x0aXAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6dmFsaWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQuaXMtdmFsaWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRjZTU3O1xyXG59XHJcblxyXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6dmFsaWQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLXZhbGlkOmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmMGYwZjAsIDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjI1KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2YwZjBmMCwgMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuMjUpO1xyXG59XHJcblxyXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWZpbGUtaW5wdXQ6dmFsaWQgfiAuY3VzdG9tLWZpbGUtbGFiZWwsIC5jdXN0b20tZmlsZS1pbnB1dC5pcy12YWxpZCB+IC5jdXN0b20tZmlsZS1sYWJlbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWZpbGUtaW5wdXQ6dmFsaWQgfiAuY3VzdG9tLWZpbGUtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1maWxlLWlucHV0LmlzLXZhbGlkIH4gLmN1c3RvbS1maWxlLWxhYmVsOjpiZWZvcmUge1xyXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1maWxlLWlucHV0OnZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxyXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWZpbGUtaW5wdXQ6dmFsaWQgfiAudmFsaWQtdG9vbHRpcCwgLmN1c3RvbS1maWxlLWlucHV0LmlzLXZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxyXG4uY3VzdG9tLWZpbGUtaW5wdXQuaXMtdmFsaWQgfiAudmFsaWQtdG9vbHRpcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tZmlsZS1pbnB1dDp2YWxpZDpmb2N1cyB+IC5jdXN0b20tZmlsZS1sYWJlbCwgLmN1c3RvbS1maWxlLWlucHV0LmlzLXZhbGlkOmZvY3VzIH4gLmN1c3RvbS1maWxlLWxhYmVsIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjI1KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC4yNSk7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5pbnZhbGlkLXRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgei1pbmRleDogNTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAuMXJlbTtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDUzLCA2OSwgMC44KTtcclxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcclxufVxyXG5cclxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQsIC53YXMtdmFsaWRhdGVkXHJcbi5jdXN0b20tc2VsZWN0OmludmFsaWQsXHJcbi5jdXN0b20tc2VsZWN0LmlzLWludmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkOmZvY3VzLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQ6Zm9jdXMsIC53YXMtdmFsaWRhdGVkXHJcbi5jdXN0b20tc2VsZWN0OmludmFsaWQ6Zm9jdXMsXHJcbi5jdXN0b20tc2VsZWN0LmlzLWludmFsaWQ6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjI1KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC4yNSk7XHJcbn1cclxuXHJcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxyXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQgfiAuaW52YWxpZC10b29sdGlwLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcclxuLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCwgLndhcy12YWxpZGF0ZWRcclxuLmN1c3RvbS1zZWxlY3Q6aW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxyXG4ud2FzLXZhbGlkYXRlZFxyXG4uY3VzdG9tLXNlbGVjdDppbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCxcclxuLmN1c3RvbS1zZWxlY3QuaXMtaW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxyXG4uY3VzdG9tLXNlbGVjdC5pcy1pbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNoZWNrLWlucHV0OmludmFsaWQgfiAuZm9ybS1jaGVjay1sYWJlbCwgLmZvcm0tY2hlY2staW5wdXQuaXMtaW52YWxpZCB+IC5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICBjb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY2hlY2staW5wdXQ6aW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxyXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jaGVjay1pbnB1dDppbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCwgLmZvcm0tY2hlY2staW5wdXQuaXMtaW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxyXG4uZm9ybS1jaGVjay1pbnB1dC5pcy1pbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDppbnZhbGlkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsLCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQuaXMtaW52YWxpZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbCB7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDppbnZhbGlkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1pbnB1dC5pcy1pbnZhbGlkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmEyYTk7XHJcbn1cclxuXHJcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDppbnZhbGlkIH4gLmludmFsaWQtZmVlZGJhY2ssXHJcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDppbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLWludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcclxuLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLWludmFsaWQgfiAuaW52YWxpZC10b29sdGlwIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OmludmFsaWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQuaXMtaW52YWxpZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDYwNmQ7XHJcbn1cclxuXHJcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDppbnZhbGlkOmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1pbnB1dC5pcy1pbnZhbGlkOmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmMGYwZjAsIDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjI1KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2YwZjBmMCwgMCAwIDAgMC4ycmVtIHJnYmEoMjIwLCA1MywgNjksIDAuMjUpO1xyXG59XHJcblxyXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWZpbGUtaW5wdXQ6aW52YWxpZCB+IC5jdXN0b20tZmlsZS1sYWJlbCwgLmN1c3RvbS1maWxlLWlucHV0LmlzLWludmFsaWQgfiAuY3VzdG9tLWZpbGUtbGFiZWwge1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1maWxlLWlucHV0OmludmFsaWQgfiAuY3VzdG9tLWZpbGUtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1maWxlLWlucHV0LmlzLWludmFsaWQgfiAuY3VzdG9tLWZpbGUtbGFiZWw6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWZpbGUtaW5wdXQ6aW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxyXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWZpbGUtaW5wdXQ6aW52YWxpZCB+IC5pbnZhbGlkLXRvb2x0aXAsIC5jdXN0b20tZmlsZS1pbnB1dC5pcy1pbnZhbGlkIH4gLmludmFsaWQtZmVlZGJhY2ssXHJcbi5jdXN0b20tZmlsZS1pbnB1dC5pcy1pbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tZmlsZS1pbnB1dDppbnZhbGlkOmZvY3VzIH4gLmN1c3RvbS1maWxlLWxhYmVsLCAuY3VzdG9tLWZpbGUtaW5wdXQuaXMtaW52YWxpZDpmb2N1cyB+IC5jdXN0b20tZmlsZS1sYWJlbCB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC4yNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjIwLCA1MywgNjksIDAuMjUpO1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZiZmE4O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxcHggI2YwZjBmMCwgMCAwIDAgMC4ycmVtIHJnYmEoNzksIDE5MSwgMTY4LCAwLjI1KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2YwZjBmMCwgMCAwIDAgMC4ycmVtIHJnYmEoNzksIDE5MSwgMTY4LCAwLjI1KTtcclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJlZmU5O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZiZmE4O1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzRSUzQ3BhdGggZmlsbD0nJTIzZmZmJyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjYgMi45NzQgNy4yNSA4IDIuMTkzeicvJTNFJTNDL3N2ZyUzRVwiKTtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6aW5kZXRlcm1pbmF0ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZiZmE4O1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDppbmRldGVybWluYXRlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA0JyUzRSUzQ3BhdGggc3Ryb2tlPSclMjNmZmYnIGQ9J00wIDJoNCcvJTNFJTNDL3N2ZyUzRVwiKTtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LCAxOTEsIDE2OCwgMC41KTtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQ6aW5kZXRlcm1pbmF0ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LCAxOTEsIDE2OCwgMC41KTtcclxufVxyXG5cclxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZmJmYTg7XHJcbn1cclxuXHJcbi5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMycgZmlsbD0nJTIzZmZmJy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG4uY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzksIDE5MSwgMTY4LCAwLjUpO1xyXG59XHJcblxyXG4vKlxyXG4qIDcuQ09ERVxyXG4qL1xyXG5jb2RlIHtcclxuICBmb250LXNpemU6IDg3LjUlO1xyXG4gIGNvbG9yOiAjZTgzZThjO1xyXG59XHJcblxyXG4vKlxyXG4qIDguIE5BVlxyXG4qL1xyXG4ubmF2LWxpbmsge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG59XHJcblxyXG4ubmF2LWxpbmsuZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1saW5rOmhvdmVyLCAubmF2LXRhYnMgLm5hdi1saW5rOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNlOWVjZWYgI2U5ZWNlZiAjZGVlMmU2O1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1saW5rLmRpc2FibGVkIHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUsXHJcbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAuZHJvcGRvd24tbWVudSB7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxufVxyXG5cclxuLm5hdi1waWxscyAubmF2LWxpbmsge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSxcclxuLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmYmZhODtcclxufVxyXG5cclxuLypcclxuKiA5LiBDQVJEXHJcbiovXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQgPiAubGlzdC1ncm91cDpmaXJzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uY2FyZCA+IC5saXN0LWdyb3VwOmxhc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxufVxyXG5cclxuLmNhcmQtc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IC0wLjM3NXJlbTtcclxufVxyXG5cclxuLmNhcmQtbGluayArIC5jYXJkLWxpbmsge1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4yNXJlbSAtIDFweCkgY2FsYygwLjI1cmVtIC0gMXB4KSAwIDA7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci10cmFuc3BhcmVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlcjpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgY2FsYygwLjI1cmVtIC0gMXB4KSBjYWxjKDAuMjVyZW0gLSAxcHgpO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItdGFicyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMC42MjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLTAuNzVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC0wLjYyNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItcGlsbHMge1xyXG4gIG1hcmdpbi1yaWdodDogLTAuNjI1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMC42MjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLWltZy1vdmVybGF5IHtcclxuICBwYWRkaW5nOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uY2FyZC1pbWctb3ZlcmxheS1vcGFjaXR5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjI1cmVtIC0gMXB4KTtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYygwLjI1cmVtIC0gMXB4KTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsYygwLjI1cmVtIC0gMXB4KTtcclxufVxyXG5cclxuLmNhcmQtaW1nLWJvdHRvbSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGNhbGMoMC4yNXJlbSAtIDFweCk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogY2FsYygwLjI1cmVtIC0gMXB4KTtcclxufVxyXG5cclxuLmNhcmQtZGVjayAuY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNhcmQtZGVjayB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIH1cclxuICAuY2FyZC1kZWNrIC5jYXJkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuKiAxMC4gRFJPUERPV05TXHJcbiovXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gIG1hcmdpbjogMC4xMjVyZW0gMCAwO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIsIC5kcm9wZG93bi1pdGVtOmZvY3VzIHtcclxuICBjb2xvcjogIzE2MTgxYjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbS5hY3RpdmUsIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmYmZhODtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0uZGlzYWJsZWQsIC5kcm9wZG93bi1pdGVtOmRpc2FibGVkIHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <app-header></app-header>    \n     <!-- <app-homepage></app-homepage> -->\n     <router-outlet></router-outlet>\n    <app-footer></app-footer>\n\n\n<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n<app-navigation></app-navigation>\n\n    <div class=\"container\">\n        <br>\n        <br>\n        <hr>\n        <div class=\"text-center\">\n            <a style=\"color: inherit\" href=\"https://github.com/zhulinn\"><i class=\"fab fa-github fa-3x\"></i></a>\n        </div>\n\n\n        <!--Copyright-->\n        <div class=\"footer-copyright py-3 text-center\">\n            © 2019 Copyright:\n            <a href=\"https://zlin.me\"> zlin.me </a>\n        </div>\n        <!--/.Copyright-->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ECommerce';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _parts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/navigation/navigation.component */ "./src/app/parts/navigation/navigation.component.ts");
/* harmony import */ var _pages_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/card/card.component */ "./src/app/pages/card/card.component.ts");
/* harmony import */ var _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/pagination/pagination.component */ "./src/app/parts/pagination/pagination.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/product-detail/detail.component */ "./src/app/pages/product-detail/detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _interceptors_error_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_interceptors/error-interceptor.service */ "./src/app/_interceptors/error-interceptor.service.ts");
/* harmony import */ var _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_interceptors/jwt-interceptor.service */ "./src/app/_interceptors/jwt-interceptor.service.ts");
/* harmony import */ var _pages_order_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/order/order.component */ "./src/app/pages/order/order.component.ts");
/* harmony import */ var _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/order-detail/order-detail.component */ "./src/app/pages/order-detail/order-detail.component.ts");
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/product-list/product.list.component */ "./src/app/pages/product-list/product.list.component.ts");
/* harmony import */ var _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/user-edit/user-detail.component */ "./src/app/pages/user-edit/user-detail.component.ts");
/* harmony import */ var _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/product-edit/product-edit.component */ "./src/app/pages/product-edit/product-edit.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _pages_checkout1_checkout1_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/checkout1/checkout1.component */ "./src/app/pages/checkout1/checkout1.component.ts");
/* harmony import */ var _pages_checkout2_checkout2_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/checkout2/checkout2.component */ "./src/app/pages/checkout2/checkout2.component.ts");
/* harmony import */ var _pages_checkout3_checkout3_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/checkout3/checkout3.component */ "./src/app/pages/checkout3/checkout3.component.ts");
/* harmony import */ var _pages_checkout4_checkout4_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/checkout4/checkout4.component */ "./src/app/pages/checkout4/checkout4.component.ts");
/* harmony import */ var _pages_custmeraccout_custmeraccout_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/custmeraccout/custmeraccout.component */ "./src/app/pages/custmeraccout/custmeraccout.component.ts");
/* harmony import */ var _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/aboutus/aboutus.component */ "./src/app/pages/aboutus/aboutus.component.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _parts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
                _pages_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_10__["DetailComponent"],
                _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_13__["CartComponent"],
                _pages_order_order_component__WEBPACK_IMPORTED_MODULE_17__["OrderComponent"],
                _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_18__["OrderDetailComponent"],
                _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_19__["ProductListComponent"],
                _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_20__["UserDetailComponent"],
                _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_21__["ProductEditComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_24__["HomepageComponent"],
                _pages_checkout1_checkout1_component__WEBPACK_IMPORTED_MODULE_25__["Checkout1Component"],
                _pages_checkout2_checkout2_component__WEBPACK_IMPORTED_MODULE_26__["Checkout2Component"],
                _pages_checkout3_checkout3_component__WEBPACK_IMPORTED_MODULE_27__["Checkout3Component"],
                _pages_checkout4_checkout4_component__WEBPACK_IMPORTED_MODULE_28__["Checkout4Component"],
                _pages_custmeraccout_custmeraccout_component__WEBPACK_IMPORTED_MODULE_29__["CustmeraccoutComponent"],
                _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_30__["AboutusComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enum/CategoryType.ts":
/*!**************************************!*\
  !*** ./src/app/enum/CategoryType.ts ***!
  \**************************************/
/*! exports provided: CategoryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryType", function() { return CategoryType; });
var CategoryType;
(function (CategoryType) {
    CategoryType[CategoryType["Books"] = 0] = "Books";
    CategoryType[CategoryType["Food"] = 1] = "Food";
    CategoryType[CategoryType["Clothes"] = 2] = "Clothes";
    CategoryType[CategoryType["Drink"] = 3] = "Drink";
})(CategoryType || (CategoryType = {}));


/***/ }),

/***/ "./src/app/enum/OrderStatus.ts":
/*!*************************************!*\
  !*** ./src/app/enum/OrderStatus.ts ***!
  \*************************************/
/*! exports provided: OrderStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatus", function() { return OrderStatus; });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["New"] = 0] = "New";
    OrderStatus[OrderStatus["Finished"] = 1] = "Finished";
    OrderStatus[OrderStatus["Cenceled"] = 2] = "Cenceled";
})(OrderStatus || (OrderStatus = {}));


/***/ }),

/***/ "./src/app/enum/ProductStatus.ts":
/*!***************************************!*\
  !*** ./src/app/enum/ProductStatus.ts ***!
  \***************************************/
/*! exports provided: ProductStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStatus", function() { return ProductStatus; });
var ProductStatus;
(function (ProductStatus) {
    ProductStatus[ProductStatus["Available"] = 0] = "Available";
    ProductStatus[ProductStatus["Unavailable"] = 1] = "Unavailable";
})(ProductStatus || (ProductStatus = {}));


/***/ }),

/***/ "./src/app/enum/Role.ts":
/*!******************************!*\
  !*** ./src/app/enum/Role.ts ***!
  \******************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["Customer"] = "ROLE_CUSTOMER";
    Role["Employee"] = "ROLE_EMPLOYEE";
    Role["Manager"] = "ROLE_MANAGER";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"margin-bottom: 50px;\">\n<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ul class=\"carousel-indicators\">\n    <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n  </ul>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"./assets/images/main-slider1.jpg\" alt=\"Los Angeles\" width=\"1100\" height=\"500\">\n      <div style=\"position:absolute;top:20%;width:60%;color:#fff;background-color:lightblue;padding:60px 60px;left: 0; \n      right: 0;margin-left: auto;margin-right: auto;opacity:0.9;z-index:1000\">\n          <h1>Premium Cashews to Savour</h1>\n          <p>All-time favourites refined to perfection.</p>\n          <a href=\"\" routerLink=\"/product\" class=\"btn btn-lg btn-success\">SHOP NOW</a>\n          \n          </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"./assets/images/main-slider2.jpg\" alt=\"Chicago\" width=\"1100\" height=\"500\">\n      <div style=\"position:absolute;top:20%;width:60%;color:#fff;background-color:lightpink;padding:60px 60px;left: 0; \nright: 0;margin-left: auto;margin-right: auto;opacity:0.9;z-index: 1000;\">\n    <h1>Exclusive Signature Flavours</h1>\n    <p>Specially crafted for the adventurous taste buds.</p>\n    <a href=\"\" routerLink=\"/product\" class=\"btn btn-lg btn-success\">SHOP NOW</a>\n    \n    </div>\n\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"./assets/images/main-slider3.jpg\" alt=\"New York\" width=\"1100\" height=\"500\">\n      <div style=\"position:absolute;top:20%;width:60%;color:#fff;background-color:lightskyblue;padding:60px 60px;left: 0; \nright: 0;margin-left: auto;margin-right: auto;opacity:0.9;\">\n    <h1>Browse Products,  Add to Cart, Payment Revise</h1>\n    <p>All-time favourites refined to perfection.</p>\n    <a href=\"\" routerLink=\"/product\" class=\"btn btn-lg btn-success\">SHOP NOW</a>\n    \n    </div>\n\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n</div>\n</div>\n<div id=\"all\">\n  <div id=\"content\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div id=\"main-slider\" class=\"owl-carousel owl-theme\">\n            <div class=\"item\"><img src=\"./assets/images/main-slider1.jpg\" alt=\"\" class=\"img-fluid\">\n            <div style=\"position:absolute;top:20%;width:60%;color:#fff;background-color:lightblue;padding:60px 60px;left: 0; \nright: 0;margin-left: auto;margin-right: auto;opacity:0.9\">\n    <h1>Premium Cashews to Savour</h1>\n    <p>All-time favourites refined to perfection.</p>\n    <a href=\"\" routerLink=\"/product\" class=\"btn btn-lg btn-success\">SHOP NOW</a>\n    \n    </div>\n    </div>\n            <div class=\"item\"><img src=\"./assets/images/main-slider2.jpg\" alt=\"\" class=\"img-fluid\">\n    <div style=\"position:absolute;top:20%;width:60%;color:#fff;background-color:lightpink;padding:60px 60px;left: 0; \nright: 0;margin-left: auto;margin-right: auto;opacity:0.9;\">\n    <h1>Exclusive Signature Flavours</h1>\n    <p>Specially crafted for the adventurous taste buds.</p>\n    <a href=\"\" routerLink=\"/product\" class=\"btn btn-lg btn-success\">SHOP NOW</a>\n    \n    </div>\n    </div>\n            <div class=\"item\"><img src=\"./assets/images/main-slider3.jpg\" alt=\"\" class=\"img-fluid\">\n    <div style=\"position:absolute;top:20%;width:60%;color:#fff;background-color:lightskyblue;padding:60px 60px;left: 0; \nright: 0;margin-left: auto;margin-right: auto;opacity:0.9;\">\n    <h1>Browse Products,  Add to Cart, Payment Revise</h1>\n    <p>All-time favourites refined to perfection.</p>\n    <a href=\"\" routerLink=\"/product\" class=\"btn btn-lg btn-success\">SHOP NOW</a>\n    \n    </div>\n    </div>\n            <div class=\"item\"><img src=\"./assets/images/main-slider4.jpg\" alt=\"\" class=\"img-fluid\">\n        <div style=\"position:absolute;top:20%;width:60%;color:#fff;background-color:#5d4598;padding:60px 60px;left: 0; \nright: 0;margin-left: auto;margin-right: auto;opacity:0.9\">\n    <h1>Timeless Classics</h1>\n    <p>All-time favourites refined to perfection.</p>\n    <a href=\"\" routerLink=\"/product\" class=\"btn btn-lg btn-success\">SHOP NOW</a>\n    \n    </div>\n    </div>\n          </div>\n          <!-- /#main-slider-->\n        </div>\n      </div>\n    </div>\n    \n\n<div id=\"advantages\">\n      <div class=\"container\">\n  <div class=\"row mb-4\">\n      <div class=\"col-md-6\">\n        <a _ngcontent-ejp-c15=\"\" href=\"/multikart/home/left-sidebar/collection/marijuana\">\n        <div _ngcontent-ejp-c15=\"\" class=\"collection-banner p-left text-center\">\n        <img _ngcontent-ejp-c15=\"\" alt=\"\" class=\"img-fluid\" src=\"./assets/images/4.jpg\">\n        <div _ngcontent-ejp-c15=\"\" class=\"contain-banner\">\n        <div _ngcontent-ejp-c15=\"\"><h4 _ngcontent-ejp-c15=\"\">50% off</h4>\n        <h2 _ngcontent-ejp-c15=\"\">oils</h2></div></div></div></a>\n      </div>\n      <div class=\"col-md-6\">\n        <a _ngcontent-ejp-c15=\"\" href=\"/multikart/home/left-sidebar/collection/marijuana\">\n        <div _ngcontent-ejp-c15=\"\" class=\"collection-banner p-right text-center\">\n        <img _ngcontent-ejp-c15=\"\" alt=\"\" class=\"img-fluid\" src=\"./assets/images/2.jpg\">\n        <div _ngcontent-ejp-c15=\"\" class=\"contain-banner\">\n        <div _ngcontent-ejp-c15=\"\"><h4 _ngcontent-ejp-c15=\"\">20% save</h4><h2 _ngcontent-ejp-c15=\"\">liquid</h2>\n        </div>\n        </div>\n        </div>\n      </a>\n      </div>\n  </div>\n  <div class=\"row mb-5\">\n      <div class=\"col-md-6\">\n        <a _ngcontent-ejp-c15=\"\" href=\"/multikart/home/left-sidebar/collection/marijuana\">\n        <div _ngcontent-ejp-c15=\"\" class=\"collection-banner p-left text-center\">\n        <img _ngcontent-ejp-c15=\"\" alt=\"\" class=\"img-fluid\" src=\"./assets/images/4.jpg\">\n        <div _ngcontent-ejp-c15=\"\" class=\"contain-banner\">\n        <div _ngcontent-ejp-c15=\"\"><h4 _ngcontent-ejp-c15=\"\">50% off</h4>\n        <h2 _ngcontent-ejp-c15=\"\">oils</h2></div></div></div></a>\n      </div>\n      <div class=\"col-md-6\">\n        <a _ngcontent-ejp-c15=\"\" href=\"/multikart/home/left-sidebar/collection/marijuana\">\n        <div _ngcontent-ejp-c15=\"\" class=\"collection-banner p-right text-center\">\n        <img _ngcontent-ejp-c15=\"\" alt=\"\" class=\"img-fluid\" src=\"./assets/images/2.jpg\">\n        <div _ngcontent-ejp-c15=\"\" class=\"contain-banner\">\n        <div _ngcontent-ejp-c15=\"\"><h4 _ngcontent-ejp-c15=\"\">20% save</h4><h2 _ngcontent-ejp-c15=\"\">liquid</h2>\n        </div>\n        </div>\n        </div>\n      </a>\n      </div>\n  </div>\n  \n        <!-- /.row-->\n      </div>\n      <!-- /.container-->\n    </div>\n    <!--\n    *** ADVANTAGES HOMEPAGE ***\n    _________________________________________________________\n    -->\n<div class=\"container\">\n  <div class=\"row mb-5\">\n    <div class=\"col-md-6\">\n      <div class=\"content \">\n        <h1 class=\"animation-element slide-left in-view\">The Nut Makers</h1>\n                    <div style=\"color:#959595 !important\">\n        <p class=\"animation-element tinymce slide-right in-view\"> </p><p><span style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; color: inherit;\"><span style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; color: inherit;\">The Nut Makers</span> is a premium quality brand of nuts from Vijayalaxmi Cashew Company (VLC). Established in 1957 by Mr K. Ravindranathan Nair, VLC is the world’s leading manufacturer and exporter of cashews. Renowned for their consistent standards of unsurpassed quality, VLC is creating a consumer-centric brand with <span style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; color: inherit;\">The Nut Makers</span>, using only high-quality ingredients to create delectable flavours.&nbsp;</span></p>\n<p><span style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; color: inherit;\">&nbsp;</span></p>\n<p><span style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; color: inherit;\">At&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; color: inherit;\">The Nut Makers</span>, each stage of the process is monitored to ensure only the best arrives on the shelves. From sourcing of the nuts from farms in India and Africa to the processing and packaging at the in-house factory, quality monitoring has been established and is constantly monitored throughout.&nbsp;</span></p>\n<p><span style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; color: inherit;\">&nbsp;</span></p>\n<p><span style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; color: inherit;\">Try our exclusive range of flavours, good for gifting and even better for eating!</span></p><p></p>\n        </div>\n        <a href=\"\" routerLink=\"/product\" class=\"btn btn-success btn-lg\">Browse Products</a>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <img src=\"./assets/images/raw-cashew-nuts.jpg\" class=\"mx-auto d-block img-thumbnail\" />\n    </div>\t\t\t\t\n  </div>\n</div>\n     <div id=\"hot\">\n      <div class=\"box py-4\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h2 class=\"mb-0\"><b>Try our all-new flavours</b></h2>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"product-slider owl-carousel owl-theme\">\n          <div class=\"item\">\n            <div class=\"product\">\n              <div class=\"flip-container\">\n                <div class=\"flipper\">\n                  <div class=\"front\"><a href=\"detail.html\"><img src=\"./assets/images/product1.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  <div class=\"back\"><a href=\"detail.html\"><img src=\"./assets/images/product1_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                </div>\n              </div><a href=\"detail.html\" class=\"invisible\"><img src=\"./assets/images/product1.jpg\" alt=\"\" class=\"img-fluid\"></a>\n              <div class=\"text\">\n                <h3><a href=\"detail.html\">Fur coat with very but very very long name</a></h3>\n                <p class=\"price\"> \n                  <del></del>$143.00\n                </p>\n              </div>\n              <!-- /.text-->\n              <div class=\"ribbon sale\">\n                <div class=\"theribbon\">SALE</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon-->\n              <div class=\"ribbon new\">\n                <div class=\"theribbon\">NEW</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon-->\n              <div class=\"ribbon gift\">\n                <div class=\"theribbon\">GIFT</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon-->\n            </div>\n            <!-- /.product-->\n          </div>\n          <div class=\"item\">\n            <div class=\"product\">\n              <div class=\"flip-container\">\n                <div class=\"flipper\">\n                  <div class=\"front\"><a href=\"detail.html\"><img src=\"./assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  <div class=\"back\"><a href=\"detail.html\"><img src=\"./assets/images/product2_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                </div>\n              </div><a href=\"detail.html\" class=\"invisible\"><img src=\"./assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a>\n              <div class=\"text\">\n                <h3><a href=\"detail.html\">White Blouse Armani</a></h3>\n                <p class=\"price\"> \n                  <del>$280</del>$143.00\n                </p>\n              </div>\n              <!-- /.text-->\n              <div class=\"ribbon sale\">\n                <div class=\"theribbon\">SALE</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon-->\n              <div class=\"ribbon new\">\n                <div class=\"theribbon\">NEW</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon-->\n              <div class=\"ribbon gift\">\n                <div class=\"theribbon\">GIFT</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon-->\n            </div>\n            <!-- /.product-->\n          </div>\n          <div class=\"item\">\n            <div class=\"product\">\n              <div class=\"flip-container\">\n                <div class=\"flipper\">\n                  <div class=\"front\"><a href=\"detail.html\"><img src=\"./assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  <div class=\"back\"><a href=\"detail.html\"><img src=\"./assets/images/product3_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                </div>\n              </div><a href=\"detail.html\" class=\"invisible\"><img src=\"./assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a>\n              <div class=\"text\">\n                <h3><a href=\"detail.html\">Black Blouse Versace</a></h3>\n                <p class=\"price\"> \n                  <del></del>$143.00\n                </p>\n              </div>\n              <!-- /.text-->\n            </div>\n            <!-- /.product-->\n          </div>\n          <div class=\"item\">\n            <div class=\"product\">\n              <div class=\"flip-container\">\n                <div class=\"flipper\">\n                  <div class=\"front\"><a href=\"detail.html\"><img src=\"./assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  <div class=\"back\"><a href=\"detail.html\"><img src=\"./assets/images/product3_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                </div>\n              </div><a href=\"detail.html\" class=\"invisible\"><img src=\"./assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a>\n              <div class=\"text\">\n                <h3><a href=\"detail.html\">Black Blouse Versace</a></h3>\n                <p class=\"price\"> \n                  <del></del>$143.00\n                </p>\n              </div>\n              <!-- /.text-->\n            </div>\n            <!-- /.product-->\n          </div>\n          <div class=\"item\">\n            <div class=\"product\">\n              <div class=\"flip-container\">\n                <div class=\"flipper\">\n                  <div class=\"front\"><a href=\"detail.html\"><img src=\"./assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  <div class=\"back\"><a href=\"detail.html\"><img src=\"./assets/images/product2_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                </div>\n              </div><a href=\"detail.html\" class=\"invisible\"><img src=\"./assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a>\n              <div class=\"text\">\n                <h3><a href=\"detail.html\">White Blouse Versace</a></h3>\n                <p class=\"price\"> \n                  <del></del>$143.00\n                </p>\n              </div>\n              <!-- /.text-->\n              <div class=\"ribbon new\">\n                <div class=\"theribbon\">NEW</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon-->\n            </div>\n            <!-- /.product-->\n          </div>\n          <div class=\"item\">\n            <div class=\"product\">\n              <div class=\"flip-container\">\n                <div class=\"flipper\">\n                  <div class=\"front\"><a href=\"detail.html\"><img src=\"./assets/images/product1.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  <div class=\"back\"><a href=\"detail.html\"><img src=\"./assets/images/product1_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                </div>\n              </div><a href=\"detail.html\" class=\"invisible\"><img src=\"./assets/images/product1.jpg\" alt=\"\" class=\"img-fluid\"></a>\n              <div class=\"text\">\n                <h3><a href=\"detail.html\">Fur coat</a></h3>\n                <p class=\"price\"> \n                  <del></del>$143.00\n                </p>\n              </div>\n              <!-- /.text-->\n              <div class=\"ribbon gift\">\n                <div class=\"theribbon\">GIFT</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon-->\n            </div>\n            <!-- /.product-->\n          </div>\n          <div class=\"item\">\n            <div class=\"product\">\n              <div class=\"flip-container\">\n                <div class=\"flipper\">\n                  <div class=\"front\"><a href=\"detail.html\"><img src=\"./assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  <div class=\"back\"><a href=\"detail.html\"><img src=\"./assets/images/product2_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                </div>\n              </div><a href=\"detail.html\" class=\"invisible\"><img src=\"./assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a>\n              <div class=\"text\">\n                <h3><a href=\"detail.html\">White Blouse Armani</a></h3>\n                <p class=\"price\"> \n                  <del>$280</del>$143.00\n                </p>\n              </div>\n              <!-- /.text-->\n              <div class=\"ribbon sale\">\n                <div class=\"theribbon\">SALE</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon-->\n              <div class=\"ribbon new\">\n                <div class=\"theribbon\">NEW</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon-->\n              <div class=\"ribbon gift\">\n                <div class=\"theribbon\">GIFT</div>\n                <div class=\"ribbon-background\"></div>\n              </div>\n              <!-- /.ribbon-->\n            </div>\n            <!-- /.product-->\n          </div>\n          <div class=\"item\">\n            <div class=\"product\">\n              <div class=\"flip-container\">\n                <div class=\"flipper\">\n                  <div class=\"front\"><a href=\"detail.html\"><img src=\"./assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  <div class=\"back\"><a href=\"detail.html\"><img src=\"./assets/images/product3_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                </div>\n              </div><a href=\"detail.html\" class=\"invisible\"><img src=\"./assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a>\n              <div class=\"text\">\n                <h3><a href=\"detail.html\">Black Blouse Versace</a></h3>\n                <p class=\"price\"> \n                  <del></del>$143.00\n                </p>\n              </div>\n              <!-- /.text-->\n            </div>\n            <!-- /.product-->\n          </div>\n          <!-- /.product-slider-->\n        </div>\n        <!-- /.container-->\n      </div>\n      <!-- /#hot-->\n      <!-- *** HOT END ***-->\n    </div>\n  \n<div class=\"box text-center\">\n      <div class=\"container\">\n        <div class=\"col-md-12\">\n          <h3 class=\"text-uppercase\">From our blog</h3>\n          <p class=\"lead mb-0\">What's new in the world of fashion? <a href=\"blog.html\">Check our blog!</a></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"col-md-12\">\n        <div id=\"blog-homepage\" class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"post\">\n              <h4><a href=\"post.html\">Fashion now</a></h4>\n              <p class=\"author-category\">By <a href=\"#\">John Slim</a> in <a href=\"\">Fashion and style</a></p>\n              <hr>\n              <p class=\"intro\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n              <p class=\"read-more\"><a href=\"post.html\" class=\"btn btn-primary\">Continue reading</a></p>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"post\">\n              <h4><a href=\"post.html\">Who is who - example blog post</a></h4>\n              <p class=\"author-category\">By <a href=\"#\">John Slim</a> in <a href=\"\">About Minimal</a></p>\n              <hr>\n              <p class=\"intro\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n              <p class=\"read-more\"><a href=\"post.html\" class=\"btn btn-primary\">Continue reading</a></p>\n            </div>\n          </div>\n        </div>\n        <!-- /#blog-homepage-->\n      </div>\n    </div>\n    <!-- /.container-->\n    <!-- *** BLOG HOMEPAGE END ***-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/models/ProductInOrder.ts":
/*!******************************************!*\
  !*** ./src/app/models/ProductInOrder.ts ***!
  \******************************************/
/*! exports provided: ProductInOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInOrder", function() { return ProductInOrder; });
var ProductInOrder = /** @class */ (function () {
    function ProductInOrder(productInfo, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.productId = productInfo.productId;
        this.productName = productInfo.productName;
        this.productPrice = productInfo.productPrice;
        this.productStock = productInfo.productStock;
        this.productDescription = productInfo.productDescription;
        ;
        this.productIcon = productInfo.productIcon;
        this.categoryType = productInfo.categoryType;
        this.count = quantity;
    }
    return ProductInOrder;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/Role */ "./src/app/enum/Role.ts");

var User = /** @class */ (function () {
    function User() {
        this.active = true;
        this.role = _enum_Role__WEBPACK_IMPORTED_MODULE_0__["Role"].Customer;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/productInfo.ts":
/*!***************************************!*\
  !*** ./src/app/models/productInfo.ts ***!
  \***************************************/
/*! exports provided: ProductInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfo", function() { return ProductInfo; });
var ProductInfo = /** @class */ (function () {
    function ProductInfo(productInOrder) {
        if (productInOrder) {
            this.productId = productInOrder.productId;
            this.productName = productInOrder.productName;
            this.productPrice = productInOrder.productPrice;
            this.productStock = productInOrder.productStock;
            this.productDescription = productInOrder.productDescription;
            this.productIcon = productInOrder.productIcon;
            this.categoryType = productInOrder.categoryType;
            this.productStatus = 0;
        }
        else {
            this.productId = '';
            this.productName = '';
            this.productPrice = 20;
            this.productStock = 100;
            this.productDescription = '';
            this.productIcon = '';
            this.categoryType = 0;
            this.productStatus = 0;
        }
    }
    return ProductInfo;
}());



/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n    <div id=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <!-- breadcrumb-->\n            <nav aria-label=\"breadcrumb\">\n              <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                <li aria-current=\"page\" class=\"breadcrumb-item active\">Text page</li>\n              </ol>\n            </nav>\n          </div>\n          <div class=\"col-lg-3\">\n            <!--\n            *** PAGES MENU ***\n            _________________________________________________________\n            -->\n            <div class=\"card sidebar-menu mb-4\">\n              <div class=\"card-header\">\n                <h3 class=\"h4 card-title\">Pages</h3>\n              </div>\n              <div class=\"card-body\">\n                <ul class=\"nav nav-pills flex-column\">\n                  <li><a href=\"text.html\" class=\"nav-link\">Text page</a></li>\n                  <li><a href=\"contact.html\" class=\"nav-link\">Contact page</a></li>\n                  <li><a href=\"faq.html\" class=\"nav-link\">FAQ</a></li>\n                </ul>\n              </div>\n            </div>\n            <!-- *** PAGES MENU END ***-->\n            <div class=\"banner\"><a href=\"#\"><img src=\"./assets/img/banner.jpg\" alt=\"sales 2014\" class=\"img-fluid\"></a></div>\n          </div>\n          <div class=\"col-lg-9\">\n            <div id=\"text-page\" class=\"box\">\n              <h1>Text formatting - Header level 1</h1>\n              <p class=\"lead\">This page aim is to show you the most common HTML elements appearance on the website. For further reference please visit official <a href=\"http://getbootstrap.com/css/\" class=\"external\">Bootstrap website</a>.</p>\n              <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href=\"#\">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>\n              <h2>Header Level 2</h2>\n              <ol>\n                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n                <li>Aliquam tincidunt mauris eu risus.</li>\n              </ol>\n              <blockquote class=\"blockquote\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n              </blockquote>\n              <h3>Header Level 3</h3>\n              <ul>\n                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n                <li>Aliquam tincidunt mauris eu risus.</li>\n              </ul>\n              <hr>\n              <h2>Images</h2>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <p class=\"text-center\"><img src=\"./assets/img/detailsquare.jpg\" alt=\"\" class=\"img-circle img-fluid\"></p>\n                  <p class=\"text-center\">circle</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p class=\"text-center\"><img src=\"./assets/img/detailsquare.jpg\" alt=\"\" class=\"img-thumbnail img-fluid\"></p>\n                  <p class=\"text-center\">thumbnail</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p class=\"text-center\"><img src=\"./assets/img/detailsquare.jpg\" alt=\"\" class=\"rounded-circle img-fluid\"></p>\n                  <p class=\"text-center\">rounded</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /.col-lg-9-->\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.ts ***!
  \****************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/pages/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/pages/aboutus/aboutus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/pages/card/card.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/card/card.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/card/card.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/card/card.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n  <div id=\"content\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <!-- breadcrumb-->\n          <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n              <li aria-current=\"page\" class=\"breadcrumb-item active\">Ladies</li>\n            </ol>\n          </nav>\n        </div>\n        <div class=\"col-lg-3\">\n          <!--\n          *** MENUS AND FILTERS ***\n          _________________________________________________________\n          -->\n          <div class=\"card sidebar-menu mb-4\">\n            <div class=\"card-header\">\n              <h3 class=\"h4 card-title\">Categories</h3>\n            </div>\n            <div class=\"card-body\">\n              <ul class=\"nav nav-pills flex-column category-menu\">\n                <li><a href=\"category.html\" class=\"nav-link\">Men <span class=\"badge badge-secondary\">42</span></a>\n                  <ul class=\"list-unstyled\">\n                    <li><a href=\"category.html\" class=\"nav-link\">T-shirts</a></li>\n                    <li><a href=\"category.html\" class=\"nav-link\">Shirts</a></li>\n                    <li><a href=\"category.html\" class=\"nav-link\">Pants</a></li>\n                    <li><a href=\"category.html\" class=\"nav-link\">Accessories</a></li>\n                  </ul>\n                </li>\n                <li><a href=\"category.html\" class=\"nav-link active\">Ladies  <span class=\"badge badge-light\">123</span></a>\n                  <ul class=\"list-unstyled\">\n                    <li><a href=\"category.html\" class=\"nav-link\">T-shirts</a></li>\n                    <li><a href=\"category.html\" class=\"nav-link\">Skirts</a></li>\n                    <li><a href=\"category.html\" class=\"nav-link\">Pants</a></li>\n                    <li><a href=\"category.html\" class=\"nav-link\">Accessories</a></li>\n                  </ul>\n                </li>\n                <li><a href=\"category.html\" class=\"nav-link\">Kids  <span class=\"badge badge-secondary\">11</span></a>\n                  <ul class=\"list-unstyled\">\n                    <li><a href=\"category.html\" class=\"nav-link\">T-shirts</a></li>\n                    <li><a href=\"category.html\" class=\"nav-link\">Skirts</a></li>\n                    <li><a href=\"category.html\" class=\"nav-link\">Pants</a></li>\n                    <li><a href=\"category.html\" class=\"nav-link\">Accessories</a></li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"card sidebar-menu mb-4\">\n            <div class=\"card-header\">\n              <h3 class=\"h4 card-title\">Brands <a href=\"#\" class=\"btn btn-sm btn-danger pull-right\"><i class=\"fa fa-times-circle\"></i> Clear</a></h3>\n            </div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"form-group\">\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\"> Armani  (10)\n                    </label>\n                  </div>\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\"> Versace  (12)\n                    </label>\n                  </div>\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\"> Carlo Bruni  (15)\n                    </label>\n                  </div>\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\"> Jack Honey  (14)\n                    </label>\n                  </div>\n                </div>\n                <button class=\"btn btn-default btn-sm btn-primary\"><i class=\"fa fa-pencil\"></i> Apply</button>\n              </form>\n            </div>\n          </div>\n          <div class=\"card sidebar-menu mb-4\">\n            <div class=\"card-header\">\n              <h3 class=\"h4 card-title\">Colours <a href=\"#\" class=\"btn btn-sm btn-danger pull-right\"><i class=\"fa fa-times-circle\"></i> Clear</a></h3>\n            </div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"form-group\">\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\"><span class=\"colour white\"></span> White (14)\n                    </label>\n                  </div>\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\"><span class=\"colour blue\"></span> Blue (10)\n                    </label>\n                  </div>\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\"><span class=\"colour green\"></span>  Green (20)\n                    </label>\n                  </div>\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\"><span class=\"colour yellow\"></span>  Yellow (13)\n                    </label>\n                  </div>\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\"><span class=\"colour red\"></span>  Red (10)\n                    </label>\n                  </div>\n                </div>\n                <button class=\"btn btn-default btn-sm btn-primary\"><i class=\"fa fa-pencil\"></i> Apply</button>\n              </form>\n            </div>\n          </div>\n          <!-- *** MENUS AND FILTERS END ***-->\n          <div class=\"banner\"><a href=\"#\"><img src=\"./assets/images/banner.jpg\" alt=\"sales 2014\" class=\"img-fluid\"></a></div>\n        </div>\n        <div class=\"col-lg-9\">\n          <div class=\"box\">\n            <h1>Ladies</h1>\n            <p>In our Ladies department we offer wide selection of the best products we have found and carefully selected worldwide.</p>\n          </div>\n          <div class=\"box info-bar\">\n            <div class=\"row\">\n              <div class=\"col-md-12 col-lg-4 products-showing\">Showing <strong>12</strong> of <strong>25</strong> products</div>\n              <div class=\"col-md-12 col-lg-7 products-number-sort\">\n                <form class=\"form-inline d-block d-lg-flex justify-content-between flex-column flex-md-row\">\n                  <div class=\"products-number\"><strong>Show</strong><a href=\"#\" class=\"btn btn-sm btn-primary\">12</a><a href=\"#\" class=\"btn btn-outline-secondary btn-sm\">24</a><a href=\"#\" class=\"btn btn-outline-secondary btn-sm\">All</a><span>products</span></div>\n                  <div class=\"products-sort-by mt-2 mt-lg-0\"><strong>Sort by</strong>\n                    <select name=\"sort-by\" class=\"form-control\">\n                      <option>Price</option>\n                      <option>Name</option>\n                      <option>Sales first</option>\n                    </select>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n          <div class=\"row products\">\n            <div class=\"col-lg-4 col-md-6\">\n              <div class=\"product\">\n                <div class=\"flip-container\">\n                  <div class=\"flipper\">\n                    <div class=\"front\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product1.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                    <div class=\"back\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product1_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  </div>\n                </div><a href=\"\" routerLink=\"/productdetail\" class=\"invisible\"><img src=\"./assets/images/product1.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                <div class=\"text\">\n                  <h3><a href=\"\" routerLink=\"/productdetail\">Fur coat with very but very very long name</a></h3>\n                  <p class=\"price\"> \n                    <del></del>$143.00\n                  </p>\n                  <p class=\"buttons\"><a href=\"\" routerLink=\"/productdetail\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                </div>\n                <!-- /.text-->\n              </div>\n              <!-- /.product            -->\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n              <div class=\"product\">\n                <div class=\"flip-container\">\n                  <div class=\"flipper\">\n                    <div class=\"front\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                    <div class=\"back\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product2_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  </div>\n                </div><a href=\"\" routerLink=\"/productdetail\" class=\"invisible\"><img src=\"./assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                <div class=\"text\">\n                  <h3><a href=\"\" routerLink=\"/productdetail\">White Blouse Armani</a></h3>\n                  <p class=\"price\"> \n                    <del>$280</del>$143.00\n                  </p>\n                  <p class=\"buttons\"><a href=\"\" routerLink=\"/productdetail\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                </div>\n                <!-- /.text-->\n                <div class=\"ribbon sale\">\n                  <div class=\"theribbon\">SALE</div>\n                  <div class=\"ribbon-background\"></div>\n                </div>\n                <!-- /.ribbon-->\n                <div class=\"ribbon new\">\n                  <div class=\"theribbon\">NEW</div>\n                  <div class=\"ribbon-background\"></div>\n                </div>\n                <!-- /.ribbon-->\n                <div class=\"ribbon gift\">\n                  <div class=\"theribbon\">GIFT</div>\n                  <div class=\"ribbon-background\"></div>\n                </div>\n                <!-- /.ribbon-->\n              </div>\n              <!-- /.product            -->\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n              <div class=\"product\">\n                <div class=\"flip-container\">\n                  <div class=\"flipper\">\n                    <div class=\"front\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                    <div class=\"back\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product3_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  </div>\n                </div><a href=\"\" routerLink=\"/productdetail\" class=\"invisible\"><img src=\"./assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                <div class=\"text\">\n                  <h3><a href=\"\" routerLink=\"/productdetail\">Black Blouse Versace</a></h3>\n                  <p class=\"price\"> \n                    <del></del>$143.00\n                  </p>\n                  <p class=\"buttons\"><a href=\"\" routerLink=\"/productdetail\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                </div>\n                <!-- /.text-->\n              </div>\n              <!-- /.product            -->\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n              <div class=\"product\">\n                <div class=\"flip-container\">\n                  <div class=\"flipper\">\n                    <div class=\"front\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                    <div class=\"back\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product3_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  </div>\n                </div><a href=\"\" routerLink=\"/productdetail\" class=\"invisible\"><img src=\"./assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                <div class=\"text\">\n                  <h3><a href=\"\" routerLink=\"/productdetail\">Black Blouse Versace</a></h3>\n                  <p class=\"price\"> \n                    <del></del>$143.00\n                  </p>\n                  <p class=\"buttons\"><a href=\"\" routerLink=\"/productdetail\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                </div>\n                <!-- /.text-->\n              </div>\n              <!-- /.product            -->\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n              <div class=\"product\">\n                <div class=\"flip-container\">\n                  <div class=\"flipper\">\n                    <div class=\"front\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                    <div class=\"back\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product2_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  </div>\n                </div><a href=\"\" routerLink=\"/productdetail\" class=\"invisible\"><img src=\"./assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                <div class=\"text\">\n                  <h3><a href=\"\" routerLink=\"/productdetail\">White Blouse Versace</a></h3>\n                  <p class=\"price\"> \n                    <del></del>$143.00\n                  </p>\n                  <p class=\"buttons\"><a href=\"\" routerLink=\"/productdetail\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                </div>\n                <!-- /.text-->\n                <div class=\"ribbon new\">\n                  <div class=\"theribbon\">NEW</div>\n                  <div class=\"ribbon-background\"></div>\n                </div>\n                <!-- /.ribbon-->\n              </div>\n              <!-- /.product            -->\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n              <div class=\"product\">\n                <div class=\"flip-container\">\n                  <div class=\"flipper\">\n                    <div class=\"front\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product1.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                    <div class=\"back\"><a href=\"\" routerLink=\"/productdetail\"><img src=\"./assets/images/product1_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                  </div>\n                </div><a href=\"\" routerLink=\"/productdetail\" class=\"invisible\"><img src=\"./assets/images/product1.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                <div class=\"text\">\n                  <h3><a href=\"\" routerLink=\"/productdetail\">Fur coat</a></h3>\n                  <p class=\"price\"> \n                    <del></del>$143.00\n                  </p>\n                  <p class=\"buttons\"><a href=\"\" routerLink=\"/productdetail\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                </div>\n                <!-- /.text-->\n                <div class=\"ribbon gift\">\n                  <div class=\"theribbon\">GIFT</div>\n                  <div class=\"ribbon-background\"></div>\n                </div>\n                <!-- /.ribbon-->\n              </div>\n              <!-- /.product            -->\n            </div>\n            <!-- /.products-->\n          </div>\n          <div class=\"pages\">\n            <p class=\"loadMore\"><a href=\"#\" class=\"btn btn-primary btn-lg\"><i class=\"fa fa-chevron-down\"></i> Load more</a></p>\n            <nav aria-label=\"Page navigation example\" class=\"d-flex justify-content-center\">\n              <ul class=\"pagination\">\n                <li class=\"page-item\"><a href=\"#\" aria-label=\"Previous\" class=\"page-link\"><span aria-hidden=\"true\">«</span><span class=\"sr-only\">Previous</span></a></li>\n                <li class=\"page-item active\"><a href=\"#\" class=\"page-link\">1</a></li>\n                <li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li>\n                <li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li>\n                <li class=\"page-item\"><a href=\"#\" class=\"page-link\">4</a></li>\n                <li class=\"page-item\"><a href=\"#\" class=\"page-link\">5</a></li>\n                <li class=\"page-item\"><a href=\"#\" aria-label=\"Next\" class=\"page-link\"><span aria-hidden=\"true\">»</span><span class=\"sr-only\">Next</span></a></li>\n              </ul>\n            </nav>\n          </div>\n        </div>\n        <!-- /.col-lg-9-->\n      </div>\n    </div>\n  </div>\n</div>\n\n<h1 align=\"center\" class=\"display-4 mb-5\">{{title}}</h1>\n\n<div class=\"row card-deck text-center\">\n  <div *ngFor=\"let productInfo of page?.content\" class=\"col-lg-4 \">\n    <div class=\"card mb-4\"  >\n      <img height=\"50%\" class=\"card-img-top\" src=\"assets/images/Chilli_Cheese_Front.png\" alt=\"{{productInfo.productName}}\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title \">productInfo productName</h4>\n        <div class=\"text-left\">\n          <p class=\"card-test\"><strong>Description: </strong>productInfo productDescription</p>\n          <p class=\"card-text\"><strong>Price: </strong>productInfo productPrice /p>\n          <p class=\"card-text\"><strong>Stock: </strong>productInfo productStock</p>\n        </div>\n        <br>\n        <a routerLink=\"/product/{{productInfo.productId}}\" *ngIf=\"productInfo.productStatus == 0; else offBlock\"\n           class=\"btn btn-primary btn-lg\"\n        >Get It!</a>\n        <ng-template #offBlock><a class=\"btn btn-secondary btn-lg disabled\">Unavailable</a></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n<app-pagination  [currentPage]=\"page\" ></app-pagination>\n"

/***/ }),

/***/ "./src/app/pages/card/card.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/card/card.component.ts ***!
  \**********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// import {prod, products} from '../shared/mockData';


var CardComponent = /** @class */ (function () {
    function CardComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.querySub = this.route.queryParams.subscribe(function () {
            _this.update();
        });
        this.paramSub = this.route.params.subscribe(function () {
            _this.update();
        });
    };
    CardComponent.prototype.ngOnDestroy = function () {
        this.querySub.unsubscribe();
        this.paramSub.unsubscribe();
    };
    CardComponent.prototype.update = function () {
        if (this.route.snapshot.queryParamMap.get('page')) {
            var currentPage = +this.route.snapshot.queryParamMap.get('page');
            var size = +this.route.snapshot.queryParamMap.get('size');
            this.getProds(currentPage, size);
        }
        else {
            this.getProds();
        }
    };
    CardComponent.prototype.getProds = function (page, size) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 3; }
        if (this.route.snapshot.url.length == 1) {
            this.productService.getAllInPage(+page, +size)
                .subscribe(function (page) {
                _this.page = page;
                _this.title = 'Get Whatever You Want!';
            });
        }
        else { //  /category/:id
            var type = this.route.snapshot.url[1].path;
            this.productService.getCategoryInPage(+type, page, size)
                .subscribe(function (categoryPage) {
                _this.title = categoryPage.category;
                _this.page = categoryPage.page;
            });
        }
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/pages/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/pages/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/cart/cart.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/cart/cart.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n        <div id=\"content\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <!-- breadcrumb-->\n                <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                    <li aria-current=\"page\" class=\"breadcrumb-item active\">Shopping cart</li>\n                  </ol>\n                </nav>\n              </div>\n              <div id=\"basket\" class=\"col-lg-9\">\n                <div class=\"box\">\n                  <form action=\"checkout1.html\">\n                    <h1>Shopping cart</h1>\n                    <p class=\"text-muted\">You currently have 3 item(s) in your cart.</p>\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th colspan=\"2\">Product</th>\n                            <th>Quantity</th>\n                            <th>Unit price</th>\n                            <th>Discount</th>\n                            <th colspan=\"2\">Total</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td><a href=\"#\"><img src=\"/assets/images/detailsquare.jpg\" alt=\"White Blouse Armani\"></a></td>\n                            <td><a href=\"#\">White Blouse Armani</a></td>\n                            <td>\n                              <input type=\"number\" value=\"2\" class=\"form-control\">\n                            </td>\n                            <td>$123.00</td>\n                            <td>$0.00</td>\n                            <td>$246.00</td>\n                            <td><a href=\"#\"><i class=\"fa fa-trash-o\"></i></a></td>\n                          </tr>\n                          <tr>\n                            <td><a href=\"#\"><img src=\"/assets/images/basketsquare.jpg\" alt=\"Black Blouse Armani\"></a></td>\n                            <td><a href=\"#\">Black Blouse Armani</a></td>\n                            <td>\n                              <input type=\"number\" value=\"1\" class=\"form-control\">\n                            </td>\n                            <td>$200.00</td>\n                            <td>$0.00</td>\n                            <td>$200.00</td>\n                            <td><a href=\"#\"><i class=\"fa fa-trash-o\"></i></a></td>\n                          </tr>\n                        </tbody>\n                        <tfoot>\n                          <tr>\n                            <th colspan=\"5\">Total</th>\n                            <th colspan=\"2\">$446.00</th>\n                          </tr>\n                        </tfoot>\n                      </table>\n                    </div>\n                    <!-- /.table-responsive-->\n                    <div class=\"box-footer d-flex justify-content-between flex-column flex-lg-row\">\n                      <div class=\"left\"><a href=\"category.html\" class=\"btn btn-outline-secondary\"><i class=\"fa fa-chevron-left\"></i> Continue shopping</a></div>\n                      <div class=\"right\">\n                        <button class=\"btn btn-outline-secondary\"><i class=\"fa fa-refresh\"></i> Update cart</button>\n                        <a href=\"#\" routerLink=\"/checkout1\" class=\"btn btn-primary\">Proceed to checkout <i class=\"fa fa-chevron-right\"></i></a>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n                <!-- /.box-->\n                <div class=\"row same-height-row\">\n                  <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"box same-height\" style=\"height: 347.328px;\">\n                      <h3>You may also like these products</h3>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"product same-height\" style=\"height: 347.328px;\">\n                      <div class=\"flip-container\">\n                        <div class=\"flipper\">\n                          <div class=\"front\"><a href=\"detail.html\"><img src=\"/assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                          <div class=\"back\"><a href=\"detail.html\"><img src=\"/assets/images/product2_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                        </div>\n                      </div><a href=\"detail.html\" class=\"invisible\"><img src=\"/assets/images/product2.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                      <div class=\"text\">\n                        <h3>Fur coat</h3>\n                        <p class=\"price\">$143</p>\n                      </div>\n                    </div>\n                    <!-- /.product-->\n                  </div>\n                  <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"product same-height\" style=\"height: 347.328px;\">\n                      <div class=\"flip-container\">\n                        <div class=\"flipper\">\n                          <div class=\"front\"><a href=\"detail.html\"><img src=\"/assets/images/product1.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                          <div class=\"back\"><a href=\"detail.html\"><img src=\"/assets/images/product1_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                        </div>\n                      </div><a href=\"detail.html\" class=\"invisible\"><img src=\"/assets/images/product1.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                      <div class=\"text\">\n                        <h3>Fur coat</h3>\n                        <p class=\"price\">$143</p>\n                      </div>\n                    </div>\n                    <!-- /.product-->\n                  </div>\n                  <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"product same-height\" style=\"height: 347.328px;\">\n                      <div class=\"flip-container\">\n                        <div class=\"flipper\">\n                          <div class=\"front\"><a href=\"detail.html\"><img src=\"/assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                          <div class=\"back\"><a href=\"detail.html\"><img src=\"/assets/images/product3_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                        </div>\n                      </div><a href=\"detail.html\" class=\"invisible\"><img src=\"/assets/images/product3.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                      <div class=\"text\">\n                        <h3>Fur coat</h3>\n                        <p class=\"price\">$143</p>\n                      </div>\n                    </div>\n                    <!-- /.product-->\n                  </div>\n                </div>\n              </div>\n              <!-- /.col-lg-9-->\n              <div class=\"col-lg-3\">\n                <div id=\"order-summary\" class=\"box\">\n                  <div class=\"box-header\">\n                    <h3 class=\"mb-0\">Order summary</h3>\n                  </div>\n                  <p class=\"text-muted\">Shipping and additional costs are calculated based on the values you have entered.</p>\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <tbody>\n                        <tr>\n                          <td>Order subtotal</td>\n                          <th>$446.00</th>\n                        </tr>\n                        <tr>\n                          <td>Shipping and handling</td>\n                          <th>$10.00</th>\n                        </tr>\n                        <tr>\n                          <td>Tax</td>\n                          <th>$0.00</th>\n                        </tr>\n                        <tr class=\"total\">\n                          <td>Total</td>\n                          <th>$456.00</th>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n                <div class=\"box\">\n                  <div class=\"box-header\">\n                    <h4 class=\"mb-0\">Coupon code</h4>\n                  </div>\n                  <p class=\"text-muted\">If you have a coupon code, please enter it in the box below.</p>\n                  <form>\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\"><span class=\"input-group-append\">\n                        <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-gift\"></i></button></span>\n                    </div>\n                    <!-- /input-group-->\n                  </form>\n                </div>\n              </div>\n              <!-- /.col-md-3-->\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/pages/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");








var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, userService, router) {
        var _this = this;
        this.cartService = cartService;
        this.userService = userService;
        this.router = router;
        this.productInOrders = [];
        this.total = 0;
        this.updateTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.userSubscription = this.userService.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    CartComponent_1 = CartComponent;
    CartComponent.validateCount = function (productInOrder) {
        var max = productInOrder.productStock;
        if (productInOrder.count > max) {
            productInOrder.count = max;
        }
        else if (productInOrder.count < 1) {
            productInOrder.count = 1;
        }
        console.log(productInOrder.count);
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getCart().subscribe(function (prods) {
            _this.productInOrders = prods;
        });
        this.sub = this.updateTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), 
        //
        // ignore new term if same as previous term
        // Same Object Reference, not working here
        //  distinctUntilChanged((p: ProductInOrder, q: ProductInOrder) => p.count === q.count),
        //
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (productInOrder) { return _this.cartService.update(productInOrder); })).subscribe(function (prod) {
            if (prod) {
                throw new Error();
            }
        }, function (_) { return console.log('Update Item Failed'); });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        if (!this.currentUser) {
            this.cartService.storeLocalCart();
        }
        this.userSubscription.unsubscribe();
    };
    CartComponent.prototype.ngAfterContentChecked = function () {
        this.total = this.productInOrders.reduce(function (prev, cur) { return prev + cur.count * cur.productPrice; }, 0);
    };
    CartComponent.prototype.addOne = function (productInOrder) {
        productInOrder.count++;
        CartComponent_1.validateCount(productInOrder);
        if (this.currentUser) {
            this.updateTerms.next(productInOrder);
        }
    };
    CartComponent.prototype.minusOne = function (productInOrder) {
        productInOrder.count--;
        CartComponent_1.validateCount(productInOrder);
        if (this.currentUser) {
            this.updateTerms.next(productInOrder);
        }
    };
    CartComponent.prototype.onChange = function (productInOrder) {
        CartComponent_1.validateCount(productInOrder);
        if (this.currentUser) {
            this.updateTerms.next(productInOrder);
        }
    };
    CartComponent.prototype.remove = function (productInOrder) {
        var _this = this;
        this.cartService.remove(productInOrder).subscribe(function (success) {
            _this.productInOrders = _this.productInOrders.filter(function (e) { return e.productId !== productInOrder.productId; });
            console.log('Cart: ' + _this.productInOrders);
        }, function (_) { return console.log('Remove Cart Failed'); });
    };
    CartComponent.prototype.checkout = function () {
        var _this = this;
        if (!this.currentUser) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
        }
        else if (this.currentUser.role !== _enum_Role__WEBPACK_IMPORTED_MODULE_7__["Role"].Customer) {
            this.router.navigate(['/seller']);
        }
        else {
            this.cartService.checkout().subscribe(function (_) {
                _this.productInOrders = [];
            }, function (error1) {
                console.log('Checkout Cart Failed');
            });
            this.router.navigate(['/']);
        }
    };
    var CartComponent_1;
    CartComponent = CartComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/pages/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/pages/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/pages/checkout1/checkout1.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/checkout1/checkout1.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0MS9jaGVja291dDEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/checkout1/checkout1.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/checkout1/checkout1.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n    <div id=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <!-- breadcrumb-->\n            <nav aria-label=\"breadcrumb\">\n              <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                <li aria-current=\"page\" class=\"breadcrumb-item active\">Checkout - Address</li>\n              </ol>\n            </nav>\n          </div>\n          <div id=\"checkout\" class=\"col-lg-9\">\n            <div class=\"box\">\n              <form method=\"get\" action=\"checkout2.html\">\n                <h1>Checkout - Address</h1>\n                <div class=\"nav flex-column flex-md-row nav-pills text-center\"><a href=\"checkout1.html\" class=\"nav-link flex-sm-fill text-sm-center active\"> <i class=\"fa fa-map-marker\">                  </i>Address</a><a href=\"#\" class=\"nav-link flex-sm-fill text-sm-center disabled\"> <i class=\"fa fa-truck\">                       </i>Delivery Method</a><a href=\"#\" class=\"nav-link flex-sm-fill text-sm-center disabled\"> <i class=\"fa fa-money\">                      </i>Payment Method</a><a href=\"#\" class=\"nav-link flex-sm-fill text-sm-center disabled\"> <i class=\"fa fa-eye\">                     </i>Order Review</a></div>\n                <div class=\"content py-3\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"firstname\">Firstname</label>\n                        <input id=\"firstname\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"lastname\">Lastname</label>\n                        <input id=\"lastname\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                  </div>\n                  <!-- /.row-->\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"company\">Company</label>\n                        <input id=\"company\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"street\">Street</label>\n                        <input id=\"street\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                  </div>\n                  <!-- /.row-->\n                  <div class=\"row\">\n                    <div class=\"col-md-6 col-lg-3\">\n                      <div class=\"form-group\">\n                        <label for=\"city\">Company</label>\n                        <input id=\"city\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6 col-lg-3\">\n                      <div class=\"form-group\">\n                        <label for=\"zip\">ZIP</label>\n                        <input id=\"zip\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6 col-lg-3\">\n                      <div class=\"form-group\">\n                        <label for=\"state\">State</label>\n                        <select id=\"state\" class=\"form-control\"></select>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6 col-lg-3\">\n                      <div class=\"form-group\">\n                        <label for=\"country\">Country</label>\n                        <select id=\"country\" class=\"form-control\"></select>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"phone\">Telephone</label>\n                        <input id=\"phone\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input id=\"email\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                  </div>\n                  <!-- /.row-->\n                </div>\n                <div class=\"box-footer d-flex justify-content-between\"><a href=\"basket.html\" class=\"btn btn-outline-secondary\"><i class=\"fa fa-chevron-left\"></i>Back to Basket</a>\n                  <a href=\"#\" routerLink=\"/checkout2\" class=\"btn btn-primary\">Continue to Delivery Method<i class=\"fa fa-chevron-right\"></i></a>\n                </div>\n              </form>\n            </div>\n            <!-- /.box-->\n          </div>\n          <!-- /.col-lg-9-->\n          <div class=\"col-lg-3\">\n            <div id=\"order-summary\" class=\"card\">\n              <div class=\"card-header\">\n                <h3 class=\"mt-4 mb-4\">Order summary</h3>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"text-muted\">Shipping and additional costs are calculated based on the values you have entered.</p>\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <tbody>\n                      <tr>\n                        <td>Order subtotal</td>\n                        <th>$446.00</th>\n                      </tr>\n                      <tr>\n                        <td>Shipping and handling</td>\n                        <th>$10.00</th>\n                      </tr>\n                      <tr>\n                        <td>Tax</td>\n                        <th>$0.00</th>\n                      </tr>\n                      <tr class=\"total\">\n                        <td>Total</td>\n                        <th>$456.00</th>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /.col-lg-3-->\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/checkout1/checkout1.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/checkout1/checkout1.component.ts ***!
  \********************************************************/
/*! exports provided: Checkout1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout1Component", function() { return Checkout1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Checkout1Component = /** @class */ (function () {
    function Checkout1Component() {
    }
    Checkout1Component.prototype.ngOnInit = function () {
    };
    Checkout1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout1',
            template: __webpack_require__(/*! ./checkout1.component.html */ "./src/app/pages/checkout1/checkout1.component.html"),
            styles: [__webpack_require__(/*! ./checkout1.component.css */ "./src/app/pages/checkout1/checkout1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Checkout1Component);
    return Checkout1Component;
}());



/***/ }),

/***/ "./src/app/pages/checkout2/checkout2.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/checkout2/checkout2.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0Mi9jaGVja291dDIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/checkout2/checkout2.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/checkout2/checkout2.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n    <div id=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <!-- breadcrumb-->\n            <nav aria-label=\"breadcrumb\">\n              <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                <li aria-current=\"page\" class=\"breadcrumb-item active\">Checkout - Delivery method</li>\n              </ol>\n            </nav>\n          </div>\n          <div id=\"checkout\" class=\"col-lg-9\">\n            <div class=\"box\">\n              <form method=\"get\" action=\"checkout3.html\">\n                <h1>Checkout - Delivery method</h1>\n                <div class=\"nav flex-column flex-sm-row nav-pills\"><a href=\"checkout1.html\" class=\"nav-link flex-sm-fill text-sm-center\"> <i class=\"fa fa-map-marker\">                  </i>Address</a><a href=\"checkout2.html\" class=\"nav-link flex-sm-fill text-sm-center active\"> <i class=\"fa fa-truck\">                       </i>Delivery Method</a><a href=\"#\" class=\"nav-link flex-sm-fill text-sm-center disabled\"> <i class=\"fa fa-money\">                      </i>Payment Method</a><a href=\"#\" class=\"nav-link flex-sm-fill text-sm-center disabled\"> <i class=\"fa fa-eye\">                     </i>Order Review</a></div>\n                <div class=\"content py-3\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"box shipping-method\">\n                        <h4>USPS Next Day</h4>\n                        <p>Get it right on next day - fastest option possible.</p>\n                        <div class=\"box-footer text-center\">\n                          <input type=\"radio\" name=\"delivery\" value=\"delivery1\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"box shipping-method\">\n                        <h4>USPS Next Day</h4>\n                        <p>Get it right on next day - fastest option possible.</p>\n                        <div class=\"box-footer text-center\">\n                          <input type=\"radio\" name=\"delivery\" value=\"delivery2\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"box shipping-method\">\n                        <h4>USPS Next Day</h4>\n                        <p>Get it right on next day - fastest option possible.</p>\n                        <div class=\"box-footer text-center\">\n                          <input type=\"radio\" name=\"delivery\" value=\"delivery3\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"box-footer d-flex justify-content-between\"><a href=\"checkout1.html\" class=\"btn btn-outline-secondary\"><i class=\"fa fa-chevron-left\"></i>Back to address</a>\n                  <a type=\"submit\" routerLink=\"/checkout3\" class=\"btn btn-primary\">Continue to Payment Method<i class=\"fa fa-chevron-right\"></i></a>\n                </div>\n              </form>\n            </div>\n            <!-- /.box-->\n          </div>\n          <!-- /.col-md-9-->\n          <div class=\"col-md-3\">\n            <div id=\"order-summary\" class=\"card\">\n              <div class=\"card-header\">\n                <h3 class=\"mt-4 mb-4\">Order summary</h3>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"text-muted\">Shipping and additional costs are calculated based on the values you have entered.</p>\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <tbody>\n                      <tr>\n                        <td>Order subtotal</td>\n                        <th>$446.00</th>\n                      </tr>\n                      <tr>\n                        <td>Shipping and handling</td>\n                        <th>$10.00</th>\n                      </tr>\n                      <tr>\n                        <td>Tax</td>\n                        <th>$0.00</th>\n                      </tr>\n                      <tr class=\"total\">\n                        <td>Total</td>\n                        <th>$456.00</th>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /.col-md-3-->\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/checkout2/checkout2.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/checkout2/checkout2.component.ts ***!
  \********************************************************/
/*! exports provided: Checkout2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout2Component", function() { return Checkout2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Checkout2Component = /** @class */ (function () {
    function Checkout2Component() {
    }
    Checkout2Component.prototype.ngOnInit = function () {
    };
    Checkout2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout2',
            template: __webpack_require__(/*! ./checkout2.component.html */ "./src/app/pages/checkout2/checkout2.component.html"),
            styles: [__webpack_require__(/*! ./checkout2.component.css */ "./src/app/pages/checkout2/checkout2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Checkout2Component);
    return Checkout2Component;
}());



/***/ }),

/***/ "./src/app/pages/checkout3/checkout3.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/checkout3/checkout3.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0My9jaGVja291dDMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/checkout3/checkout3.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/checkout3/checkout3.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n    <div id=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <!-- breadcrumb-->\n            <nav aria-label=\"breadcrumb\">\n              <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                <li aria-current=\"page\" class=\"breadcrumb-item active\">Checkout - Payment method</li>\n              </ol>\n            </nav>\n          </div>\n          <div id=\"checkout\" class=\"col-lg-9\">\n            <div class=\"box\">\n              <form method=\"get\" action=\"checkout4.html\">\n                <h1>Checkout - Payment method</h1>\n                <div class=\"nav flex-column flex-sm-row nav-pills\"><a href=\"checkout1.html\" class=\"nav-link flex-sm-fill text-sm-center\"> <i class=\"fa fa-map-marker\">                  </i>Address</a><a href=\"checkout2.html\" class=\"nav-link flex-sm-fill text-sm-center\"> <i class=\"fa fa-truck\">                       </i>Delivery Method</a><a href=\"checkout3.html\" class=\"nav-link flex-sm-fill text-sm-center active\"> <i class=\"fa fa-money\">                      </i>Payment Method</a><a href=\"#\" class=\"nav-link flex-sm-fill text-sm-center disabled\"> <i class=\"fa fa-eye\">                     </i>Order Review</a></div>\n                <div class=\"content py-3\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"box payment-method\">\n                        <h4>Paypal</h4>\n                        <p>We like it all.</p>\n                        <div class=\"box-footer text-center\">\n                          <input type=\"radio\" name=\"payment\" value=\"payment1\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"box payment-method\">\n                        <h4>Payment gateway</h4>\n                        <p>VISA and Mastercard only.</p>\n                        <div class=\"box-footer text-center\">\n                          <input type=\"radio\" name=\"payment\" value=\"payment2\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"box payment-method\">\n                        <h4>Cash on delivery</h4>\n                        <p>You pay when you get it.</p>\n                        <div class=\"box-footer text-center\">\n                          <input type=\"radio\" name=\"payment\" value=\"payment3\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- /.row-->\n                </div>\n                <!-- /.content-->\n                <div class=\"box-footer d-flex justify-content-between\"><a href=\"checkout2.html\" class=\"btn btn-outline-secondary\"><i class=\"fa fa-chevron-left\"></i>Back to Shipping Method</a>\n                  <a type=\"submit\" routerLink=\"/checkout4\" class=\"btn btn-primary\">Continue to Order Review<i class=\"fa fa-chevron-right\"></i></a>\n                </div>\n              </form>\n              <!-- /.box-->\n            </div>\n          </div>\n          <!-- /.col-lg-9-->\n          <div class=\"col-lg-3\">\n            <div id=\"order-summary\" class=\"card\">\n              <div class=\"card-header\">\n                <h3 class=\"mt-4 mb-4\">Order summary</h3>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"text-muted\">Shipping and additional costs are calculated based on the values you have entered.</p>\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <tbody>\n                      <tr>\n                        <td>Order subtotal</td>\n                        <th>$446.00</th>\n                      </tr>\n                      <tr>\n                        <td>Shipping and handling</td>\n                        <th>$10.00</th>\n                      </tr>\n                      <tr>\n                        <td>Tax</td>\n                        <th>$0.00</th>\n                      </tr>\n                      <tr class=\"total\">\n                        <td>Total</td>\n                        <th>$456.00</th>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /.col-lg-3-->\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/checkout3/checkout3.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/checkout3/checkout3.component.ts ***!
  \********************************************************/
/*! exports provided: Checkout3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout3Component", function() { return Checkout3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Checkout3Component = /** @class */ (function () {
    function Checkout3Component() {
    }
    Checkout3Component.prototype.ngOnInit = function () {
    };
    Checkout3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout3',
            template: __webpack_require__(/*! ./checkout3.component.html */ "./src/app/pages/checkout3/checkout3.component.html"),
            styles: [__webpack_require__(/*! ./checkout3.component.css */ "./src/app/pages/checkout3/checkout3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Checkout3Component);
    return Checkout3Component;
}());



/***/ }),

/***/ "./src/app/pages/checkout4/checkout4.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/checkout4/checkout4.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0NC9jaGVja291dDQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/checkout4/checkout4.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/checkout4/checkout4.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n    <div id=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <!-- breadcrumb-->\n            <nav aria-label=\"breadcrumb\">\n              <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                <li aria-current=\"page\" class=\"breadcrumb-item active\">Checkout - Order review</li>\n              </ol>\n            </nav>\n          </div>\n          <div id=\"checkout\" class=\"col-lg-9\">\n            <div class=\"box\">\n              <form method=\"get\" action=\"checkout4.html\">\n                <h1>Checkout - Order review</h1>\n                <div class=\"nav flex-column flex-sm-row nav-pills\"><a href=\"checkout1.html\" class=\"nav-link flex-sm-fill text-sm-center\"> <i class=\"fa fa-map-marker\">                  </i>Address</a><a href=\"checkout2.html\" class=\"nav-link flex-sm-fill text-sm-center\"> <i class=\"fa fa-truck\">                       </i>Delivery Method</a><a href=\"checkout3.html\" class=\"nav-link flex-sm-fill text-sm-center\"> <i class=\"fa fa-money\">                      </i>Payment Method</a><a href=\"#\" class=\"nav-link flex-sm-fill text-sm-center active\"> <i class=\"fa fa-eye\">                     </i>Order Review</a></div>\n                <div class=\"content\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th colspan=\"2\">Product</th>\n                          <th>Quantity</th>\n                          <th>Unit price</th>\n                          <th>Discount</th>\n                          <th>Total</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td><a href=\"#\"><img src=\"img/detailsquare.jpg\" alt=\"White Blouse Armani\"></a></td>\n                          <td><a href=\"#\">White Blouse Armani</a></td>\n                          <td>2</td>\n                          <td>$123.00</td>\n                          <td>$0.00</td>\n                          <td>$246.00</td>\n                        </tr>\n                        <tr>\n                          <td><a href=\"#\"><img src=\"img/basketsquare.jpg\" alt=\"Black Blouse Armani\"></a></td>\n                          <td><a href=\"#\">Black Blouse Armani</a></td>\n                          <td>1</td>\n                          <td>$200.00</td>\n                          <td>$0.00</td>\n                          <td>$200.00</td>\n                        </tr>\n                      </tbody>\n                      <tfoot>\n                        <tr>\n                          <th colspan=\"5\">Total</th>\n                          <th>$446.00</th>\n                        </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                  <!-- /.table-responsive-->\n                </div>\n                <!-- /.content-->\n                <div class=\"box-footer d-flex justify-content-between\"><a href=\"checkout3.html\" class=\"btn btn-outline-secondary\"><i class=\"fa fa-chevron-left\"></i>Back to payment method</a>\n                  <button type=\"submit\" class=\"btn btn-primary\">Place an order<i class=\"fa fa-chevron-right\"></i></button>\n                </div>\n              </form>\n            </div>\n            <!-- /.box-->\n          </div>\n          <!-- /.col-lg-9-->\n          <div class=\"col-lg-3\">\n            <div id=\"order-summary\" class=\"card\">\n              <div class=\"card-header\">\n                <h3 class=\"mt-4 mb-4\">Order summary</h3>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"text-muted\">Shipping and additional costs are calculated based on the values you have entered.</p>\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <tbody>\n                      <tr>\n                        <td>Order subtotal</td>\n                        <th>$446.00</th>\n                      </tr>\n                      <tr>\n                        <td>Shipping and handling</td>\n                        <th>$10.00</th>\n                      </tr>\n                      <tr>\n                        <td>Tax</td>\n                        <th>$0.00</th>\n                      </tr>\n                      <tr class=\"total\">\n                        <td>Total</td>\n                        <th>$456.00</th>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /.col-lg-3-->\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/checkout4/checkout4.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/checkout4/checkout4.component.ts ***!
  \********************************************************/
/*! exports provided: Checkout4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout4Component", function() { return Checkout4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Checkout4Component = /** @class */ (function () {
    function Checkout4Component() {
    }
    Checkout4Component.prototype.ngOnInit = function () {
    };
    Checkout4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout4',
            template: __webpack_require__(/*! ./checkout4.component.html */ "./src/app/pages/checkout4/checkout4.component.html"),
            styles: [__webpack_require__(/*! ./checkout4.component.css */ "./src/app/pages/checkout4/checkout4.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Checkout4Component);
    return Checkout4Component;
}());



/***/ }),

/***/ "./src/app/pages/custmeraccout/custmeraccout.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/custmeraccout/custmeraccout.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RtZXJhY2NvdXQvY3VzdG1lcmFjY291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/custmeraccout/custmeraccout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/custmeraccout/custmeraccout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n    <div id=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <!-- breadcrumb-->\n            <nav aria-label=\"breadcrumb\">\n              <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                <li aria-current=\"page\" class=\"breadcrumb-item active\">My account</li>\n              </ol>\n            </nav>\n          </div>\n          <div class=\"col-lg-3\">\n            <!--\n            *** CUSTOMER MENU ***\n            _________________________________________________________\n            -->\n            <div class=\"card sidebar-menu\">\n              <div class=\"card-header\">\n                <h3 class=\"h4 card-title\">Customer section</h3>\n              </div>\n              <div class=\"card-body\">\n                <ul class=\"nav nav-pills flex-column\">\n                  <a href=\"\" routerLink=\"/customerdashboard\" class=\"nav-link\"><i class=\"fa fa-list\"></i> My orders</a>\n                  <a href=\"\" routerLink=\"/wishlist\" class=\"nav-link\"><i class=\"fa fa-heart\"></i> My wishlist</a>\n                  <a href=\"\" routerLink=\"/custaccout\" class=\"nav-link active\"><i class=\"fa fa-user\"></i> My account</a>\n                  <a href=\"\" routerLink=\"home\" class=\"nav-link\"><i class=\"fa fa-sign-out\"></i> Logout</a></ul>\n              </div>\n            </div>\n            <!-- /.col-lg-3-->\n            <!-- *** CUSTOMER MENU END ***-->\n          </div>\n          <div class=\"col-lg-9\">\n            <div class=\"box\">\n              <h1>My account</h1>\n              <p class=\"lead\">Change your personal details or your password here.</p>\n              <p class=\"text-muted\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n              <h3>Change password</h3>\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"password_old\">Old password</label>\n                      <input id=\"password_old\" type=\"password\" class=\"form-control\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"password_1\">New password</label>\n                      <input id=\"password_1\" type=\"password\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"password_2\">Retype new password</label>\n                      <input id=\"password_2\" type=\"password\" class=\"form-control\">\n                    </div>\n                  </div>\n                </div>\n                <!-- /.row-->\n                <div class=\"col-md-12 text-center\">\n                  <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-save\"></i> Save new password</button>\n                </div>\n              </form>\n              <h3 class=\"mt-5\">Personal details</h3>\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"firstname\">Firstname</label>\n                      <input id=\"firstname\" type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"lastname\">Lastname</label>\n                      <input id=\"lastname\" type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                </div>\n                <!-- /.row-->\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"company\">Company</label>\n                      <input id=\"company\" type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"street\">Street</label>\n                      <input id=\"street\" type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                </div>\n                <!-- /.row-->\n                <div class=\"row\">\n                  <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"city\">Company</label>\n                      <input id=\"city\" type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"zip\">ZIP</label>\n                      <input id=\"zip\" type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"state\">State</label>\n                      <select id=\"state\" class=\"form-control\"></select>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"form-group\">\n                      <label for=\"country\">Country</label>\n                      <select id=\"country\" class=\"form-control\"></select>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"phone\">Telephone</label>\n                      <input id=\"phone\" type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"email\">Email</label>\n                      <input id=\"email\" type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-12 text-center\">\n                    <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-save\"></i> Save changes</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/custmeraccout/custmeraccout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/custmeraccout/custmeraccout.component.ts ***!
  \****************************************************************/
/*! exports provided: CustmeraccoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustmeraccoutComponent", function() { return CustmeraccoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustmeraccoutComponent = /** @class */ (function () {
    function CustmeraccoutComponent() {
    }
    CustmeraccoutComponent.prototype.ngOnInit = function () {
    };
    CustmeraccoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custmeraccout',
            template: __webpack_require__(/*! ./custmeraccout.component.html */ "./src/app/pages/custmeraccout/custmeraccout.component.html"),
            styles: [__webpack_require__(/*! ./custmeraccout.component.css */ "./src/app/pages/custmeraccout/custmeraccout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustmeraccoutComponent);
    return CustmeraccoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Sign In</h1>\n<div style=\"width:40%; margin: 25px auto\">\n\n    <div class=\"alert alert-danger\" *ngIf=\"isInvalid\">\n        Invalid username and password.\n    </div>\n    <div class=\"alert alert-info\" *ngIf=\"isLogout\">\n        You have been logged out.\n    </div>\n\n\n    <form #form='ngForm' (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label>Email address</label>\n            <input type=\"text\" class=\"form-control form-control-lg\" id=\"email\" name=\"email\" placeholder=\"Enter email\"\n                   required autofocus [(ngModel)]=\"model.username\" #email=\"ngModel\" autocomplete=\"email\" >\n            <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\n                Email is required\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control form-control-lg\" id=\"password\" name=\"password\"  autocomplete=\"password\"\n                   placeholder=\"Password\" required [(ngModel)]=\"model.password\" #password='ngModel'>\n            <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n                Email is required\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <div>\n                <input type=\"checkbox\" id=\"remember_me\" name=\"remember-me\" [(ngModel)]=\"model.remembered\">\n                <label for=\"remember_me\" class=\"inline\">Remember me</label>\n                <a class=\"float-right\" routerLink=\"/register\">Sign Up</a>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n        <!--    <button [disabled]=\"!form.form.valid\" type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Sign In</button>\n       -->\n    <a href=\"#\" routerLink=\"/customerdashboard\" class=\"btn btn-lg btn-primary btn-block\">Sign In</a>\n    </div>\n    </form>\n\n\n    <strong>Sample Users</strong>\n    <table style=\"width: 100%;\" id=\"sampleLoginTable\">\n        <tr>\n            <td><a\n                    (click)=\"fillLoginFields('customer1@email.com','123')\"\n                    href=\"javascript:void(0)\">customer1</a></td>\n            <td><a\n                    (click)=\"fillLoginFields('employee1@email.com','123')\"\n                    href=\"javascript:void(0)\">employee1</a></td>\n            <td><a\n                    (click)=\"fillLoginFields('manager1@email.com','123')\"\n                    href=\"javascript:void(0)\">manager1</a></td>\n        </tr>\n    </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.model = {
            username: '',
            password: '',
            remembered: false
        };
        this.returnUrl = '/';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var params = this.route.snapshot.queryParamMap;
        this.isLogout = params.has('logout');
        this.returnUrl = params.get('returnUrl');
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.userService.login(this.model).subscribe(function (user) {
            if (user) {
                if (user.role != _enum_Role__WEBPACK_IMPORTED_MODULE_4__["Role"].Customer) {
                    _this.returnUrl = '/seller';
                }
                _this.router.navigateByUrl(_this.returnUrl);
            }
            else {
                _this.isLogout = false;
                _this.isInvalid = true;
            }
        });
    };
    LoginComponent.prototype.fillLoginFields = function (u, p) {
        this.model.username = u;
        this.model.password = p;
        this.onSubmit();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n        <div id=\"content\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <!-- breadcrumb-->\n                <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                    <li aria-current=\"page\" class=\"breadcrumb-item active\">My wishlist</li>\n                  </ol>\n                </nav>\n              </div>\n              <div class=\"col-lg-3\">\n                <!--\n                *** CUSTOMER MENU ***\n                _________________________________________________________\n                -->\n                <div class=\"card sidebar-menu\">\n                  <div class=\"card-header\">\n                    <h3 class=\"h4 card-title\">Customer section</h3>\n                  </div>\n                  <div class=\"card-body\">\n                    <ul class=\"nav nav-pills flex-column\"><a href=\"\" routerLink=\"/customerdashboard\" class=\"nav-link\"><i class=\"fa fa-list\"></i> My orders</a>\n                      <a href=\"\" routerLink=\"/wishlist\" class=\"nav-link active\"><i class=\"fa fa-heart\"></i> My wishlist</a>\n                      <a href=\"\" routerLink=\"/custaccout\" class=\"nav-link\"><i class=\"fa fa-user\"></i> My account</a>\n                      <a href=\"\" routerLink=\"home\" class=\"nav-link\"><i class=\"fa fa-sign-out\"></i> Logout</a></ul>\n                  </div>\n                </div>\n                <!-- /.col-lg-3-->\n                <!-- *** CUSTOMER MENU END ***-->\n              </div>\n              <div id=\"wishlist\" class=\"col-lg-9\">\n                <ul class=\"breadcrumb\">\n                  <li><a href=\"#\">Home</a></li>\n                  <li>Ladies</li>\n                </ul>\n                <div class=\"box\">\n                  <h1>My wishlist</h1>\n                  <p class=\"lead\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n                </div>\n                <div class=\"row products\">\n                  <div class=\"col-lg-3 col-md-4\">\n                    <div class=\"product\">\n                      <div class=\"flip-container\">\n                        <div class=\"flipper\">\n                          <div class=\"front\"><a href=\"detail.html\"><img src=\"img/product1.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                          <div class=\"back\"><a href=\"detail.html\"><img src=\"img/product1_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                        </div>\n                      </div><a href=\"detail.html\" class=\"invisible\"><img src=\"img/product1.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"detail.html\">Fur coat with very but very very long name</a></h3>\n                        <p class=\"price\"> \n                          <del></del>$143.00\n                        </p>\n                        <p class=\"buttons\"><a href=\"detail.html\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                      </div>\n                      <!-- /.text-->\n                    </div>\n                    <!-- /.product            -->\n                  </div>\n                  <div class=\"col-lg-3 col-md-4\">\n                    <div class=\"product\">\n                      <div class=\"flip-container\">\n                        <div class=\"flipper\">\n                          <div class=\"front\"><a href=\"detail.html\"><img src=\"img/product2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                          <div class=\"back\"><a href=\"detail.html\"><img src=\"img/product2_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                        </div>\n                      </div><a href=\"detail.html\" class=\"invisible\"><img src=\"img/product2.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"detail.html\">White Blouse Armani</a></h3>\n                        <p class=\"price\"> \n                          <del>$280</del>$143.00\n                        </p>\n                        <p class=\"buttons\"><a href=\"detail.html\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                      </div>\n                      <!-- /.text-->\n                      <div class=\"ribbon sale\">\n                        <div class=\"theribbon\">SALE</div>\n                        <div class=\"ribbon-background\"></div>\n                      </div>\n                      <!-- /.ribbon-->\n                      <div class=\"ribbon new\">\n                        <div class=\"theribbon\">NEW</div>\n                        <div class=\"ribbon-background\"></div>\n                      </div>\n                      <!-- /.ribbon-->\n                      <div class=\"ribbon gift\">\n                        <div class=\"theribbon\">GIFT</div>\n                        <div class=\"ribbon-background\"></div>\n                      </div>\n                      <!-- /.ribbon-->\n                    </div>\n                    <!-- /.product            -->\n                  </div>\n                  <div class=\"col-lg-3 col-md-4\">\n                    <div class=\"product\">\n                      <div class=\"flip-container\">\n                        <div class=\"flipper\">\n                          <div class=\"front\"><a href=\"detail.html\"><img src=\"img/product3.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                          <div class=\"back\"><a href=\"detail.html\"><img src=\"img/product3_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                        </div>\n                      </div><a href=\"detail.html\" class=\"invisible\"><img src=\"img/product3.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"detail.html\">Black Blouse Versace</a></h3>\n                        <p class=\"price\"> \n                          <del></del>$143.00\n                        </p>\n                        <p class=\"buttons\"><a href=\"detail.html\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                      </div>\n                      <!-- /.text-->\n                    </div>\n                    <!-- /.product            -->\n                  </div>\n                  <div class=\"col-lg-3 col-md-4\">\n                    <div class=\"product\">\n                      <div class=\"flip-container\">\n                        <div class=\"flipper\">\n                          <div class=\"front\"><a href=\"detail.html\"><img src=\"img/product3.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                          <div class=\"back\"><a href=\"detail.html\"><img src=\"img/product3_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                        </div>\n                      </div><a href=\"detail.html\" class=\"invisible\"><img src=\"img/product3.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"detail.html\">Black Blouse Versace</a></h3>\n                        <p class=\"price\"> \n                          <del></del>$143.00\n                        </p>\n                        <p class=\"buttons\"><a href=\"detail.html\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                      </div>\n                      <!-- /.text-->\n                    </div>\n                    <!-- /.product            -->\n                  </div>\n                  <div class=\"col-lg-3 col-md-4\">\n                    <div class=\"product\">\n                      <div class=\"flip-container\">\n                        <div class=\"flipper\">\n                          <div class=\"front\"><a href=\"detail.html\"><img src=\"img/product2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                          <div class=\"back\"><a href=\"detail.html\"><img src=\"img/product2_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                        </div>\n                      </div><a href=\"detail.html\" class=\"invisible\"><img src=\"img/product2.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"detail.html\">White Blouse Versace</a></h3>\n                        <p class=\"price\"> \n                          <del></del>$143.00\n                        </p>\n                        <p class=\"buttons\"><a href=\"detail.html\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                      </div>\n                      <!-- /.text-->\n                      <div class=\"ribbon new\">\n                        <div class=\"theribbon\">NEW</div>\n                        <div class=\"ribbon-background\"></div>\n                      </div>\n                      <!-- /.ribbon-->\n                    </div>\n                    <!-- /.product            -->\n                  </div>\n                  <div class=\"col-lg-3 col-md-4\">\n                    <div class=\"product\">\n                      <div class=\"flip-container\">\n                        <div class=\"flipper\">\n                          <div class=\"front\"><a href=\"detail.html\"><img src=\"img/product1.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                          <div class=\"back\"><a href=\"detail.html\"><img src=\"img/product1_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                        </div>\n                      </div><a href=\"detail.html\" class=\"invisible\"><img src=\"img/product1.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"detail.html\">Fur coat</a></h3>\n                        <p class=\"price\"> \n                          <del></del>$143.00\n                        </p>\n                        <p class=\"buttons\"><a href=\"detail.html\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                      </div>\n                      <!-- /.text-->\n                      <div class=\"ribbon gift\">\n                        <div class=\"theribbon\">GIFT</div>\n                        <div class=\"ribbon-background\"></div>\n                      </div>\n                      <!-- /.ribbon-->\n                    </div>\n                    <!-- /.product            -->\n                  </div>\n                  <div class=\"col-lg-3 col-md-4\">\n                    <div class=\"product\">\n                      <div class=\"flip-container\">\n                        <div class=\"flipper\">\n                          <div class=\"front\"><a href=\"detail.html\"><img src=\"img/product2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                          <div class=\"back\"><a href=\"detail.html\"><img src=\"img/product2_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                        </div>\n                      </div><a href=\"detail.html\" class=\"invisible\"><img src=\"img/product2.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"detail.html\">White Blouse Armani</a></h3>\n                        <p class=\"price\"> \n                          <del>$280</del>$143.00\n                        </p>\n                        <p class=\"buttons\"><a href=\"detail.html\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                      </div>\n                      <!-- /.text-->\n                      <div class=\"ribbon sale\">\n                        <div class=\"theribbon\">SALE</div>\n                        <div class=\"ribbon-background\"></div>\n                      </div>\n                      <!-- /.ribbon-->\n                      <div class=\"ribbon new\">\n                        <div class=\"theribbon\">NEW</div>\n                        <div class=\"ribbon-background\"></div>\n                      </div>\n                      <!-- /.ribbon-->\n                      <div class=\"ribbon gift\">\n                        <div class=\"theribbon\">GIFT</div>\n                        <div class=\"ribbon-background\"></div>\n                      </div>\n                      <!-- /.ribbon-->\n                    </div>\n                    <!-- /.product            -->\n                  </div>\n                  <div class=\"col-lg-3 col-md-4\">\n                    <div class=\"product\">\n                      <div class=\"flip-container\">\n                        <div class=\"flipper\">\n                          <div class=\"front\"><a href=\"detail.html\"><img src=\"img/product3.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                          <div class=\"back\"><a href=\"detail.html\"><img src=\"img/product3_2.jpg\" alt=\"\" class=\"img-fluid\"></a></div>\n                        </div>\n                      </div><a href=\"detail.html\" class=\"invisible\"><img src=\"img/product3.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                      <div class=\"text\">\n                        <h3><a href=\"detail.html\">Black Blouse Versace</a></h3>\n                        <p class=\"price\"> \n                          <del></del>$143.00\n                        </p>\n                        <p class=\"buttons\"><a href=\"detail.html\" class=\"btn btn-outline-secondary\">View detail</a><a href=\"basket.html\" class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a></p>\n                      </div>\n                      <!-- /.text-->\n                    </div>\n                    <!-- /.product            -->\n                  </div>\n                  <!-- /.products-->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(orderService, route) {
        this.orderService = orderService;
        this.route = route;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        // this.items$ = this.route.paramMap.pipe(
        //     map(paramMap =>paramMap.get('id')),
        //     switchMap((id:string) => this.orderService.show(id))
        // )
        this.order$ = this.orderService.show(this.route.snapshot.paramMap.get('id'));
    };
    OrderDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.component.html */ "./src/app/pages/order-detail/order-detail.component.html"),
            styles: [__webpack_require__(/*! ./order-detail.component.css */ "./src/app/pages/order-detail/order-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/order/order.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/order/order.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/order/order.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/order/order.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n        <div id=\"content\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <!-- breadcrumb-->\n                <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                    <li aria-current=\"page\" class=\"breadcrumb-item active\">My orders</li>\n                  </ol>\n                </nav>\n              </div>\n              <div class=\"col-lg-3\">\n                <!--\n                *** CUSTOMER MENU ***\n                _________________________________________________________\n                -->\n                <div class=\"card sidebar-menu\">\n                  <div class=\"card-header\">\n                    <h3 class=\"h4 card-title\">Customer section</h3>\n                  </div>\n                  <div class=\"card-body\">\n                    <ul class=\"nav nav-pills flex-column\">\n                      <a href=\"#\" class=\"nav-link active\"><i class=\"fa fa-list\"></i> My orders</a>\n                      <a href=\"\" routerLink=\"/wishlist\" class=\"nav-link\"><i class=\"fa fa-heart\"></i> My wishlist</a>\n                      <a href=\"\" routerLink=\"/custaccout\" class=\"nav-link\"><i class=\"fa fa-user\"></i> My account</a>\n                      <a href=\"index.html\" class=\"nav-link\"><i class=\"fa fa-sign-out\"></i> Logout</a></ul>\n                  </div>\n                </div>\n                <!-- /.col-lg-3-->\n                <!-- *** CUSTOMER MENU END ***-->\n              </div>\n              <div id=\"customer-orders\" class=\"col-lg-9\">\n                <div class=\"box\">\n                  <h1>My orders</h1>\n                  <p class=\"lead\">Your orders on one place.</p>\n                  <p class=\"text-muted\">If you have any questions, please feel free to <a href=\"contact.html\">contact us</a>, our customer service center is working for you 24/7.</p>\n                  <hr>\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <th>Order</th>\n                          <th>Date</th>\n                          <th>Total</th>\n                          <th>Status</th>\n                          <th>Action</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <th># 1735</th>\n                          <td>22/06/2013</td>\n                          <td>$ 150.00</td>\n                          <td><span class=\"badge badge-info\">Being prepared</span></td>\n                          <td><a href=\"customer-order.html\" class=\"btn btn-primary btn-sm\">View</a></td>\n                        </tr>\n                        <tr>\n                          <th># 1735</th>\n                          <td>22/06/2013</td>\n                          <td>$ 150.00</td>\n                          <td><span class=\"badge badge-info\">Being prepared</span></td>\n                          <td><a href=\"customer-order.html\" class=\"btn btn-primary btn-sm\">View</a></td>\n                        </tr>\n                        <tr>\n                          <th># 1735</th>\n                          <td>22/06/2013</td>\n                          <td>$ 150.00</td>\n                          <td><span class=\"badge badge-success\">Received</span></td>\n                          <td><a href=\"customer-order.html\" class=\"btn btn-primary btn-sm\">View</a></td>\n                        </tr>\n                        <tr>\n                          <th># 1735</th>\n                          <td>22/06/2013</td>\n                          <td>$ 150.00</td>\n                          <td><span class=\"badge badge-danger\">Cancelled</span></td>\n                          <td><a href=\"customer-order.html\" class=\"btn btn-primary btn-sm\">View</a></td>\n                        </tr>\n                        <tr>\n                          <th># 1735</th>\n                          <td>22/06/2013</td>\n                          <td>$ 150.00</td>\n                          <td><span class=\"badge badge-warning\">On hold</span></td>\n                          <td><a href=\"customer-order.html\" class=\"btn btn-primary btn-sm\">View</a></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/pages/order/order.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/order/order.component.ts ***!
  \************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _enum_OrderStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enum/OrderStatus */ "./src/app/enum/OrderStatus.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");








var OrderComponent = /** @class */ (function () {
    function OrderComponent(httpClient, orderService, userService, route) {
        this.httpClient = httpClient;
        this.orderService = orderService;
        this.userService = userService;
        this.route = route;
        this.OrderStatus = _enum_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"];
        this.Role = _enum_Role__WEBPACK_IMPORTED_MODULE_7__["Role"];
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.userService.currentUserValue;
        this.querySub = this.route.queryParams.subscribe(function () {
            _this.update();
        });
    };
    OrderComponent.prototype.update = function () {
        var _this = this;
        var nextPage = 1;
        var size = 10;
        if (this.route.snapshot.queryParamMap.get('page')) {
            nextPage = +this.route.snapshot.queryParamMap.get('page');
            size = +this.route.snapshot.queryParamMap.get('size');
        }
        this.orderService.getPage(nextPage, size).subscribe(function (page) { return _this.page = page; }, function (_) {
            console.log("Get Orde Failed");
        });
    };
    OrderComponent.prototype.cancel = function (order) {
        this.orderService.cancel(order.orderId).subscribe(function (res) {
            if (res) {
                order.orderStatus = res.orderStatus;
            }
        });
    };
    OrderComponent.prototype.finish = function (order) {
        this.orderService.finish(order.orderId).subscribe(function (res) {
            if (res) {
                order.orderStatus = res.orderStatus;
            }
        });
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        this.querySub.unsubscribe();
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/pages/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/pages/order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-detail/detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-detail/detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/product-detail/detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/product-detail/detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">{{title}}</h1>\n<div class=\"row text-center justify-content-center\">\n  <div class=\"col-lg-4 \">\n    <div class=\"card mb-4 \">\n      <img height=\"60%\" class=\"card-img-top img-fluid\" width=\"100px\" src=\"/assets/images/dry-fruit.jpg\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title \">Nuts</h4>\n        <form name=\"form\" #form='ngForm' (ngSubmit)=\"productInfo?.productStatus == 0 && addToCart()\">\n          <div class=\"text-left\">\n            <input hidden name=\"productId\" [value]=productInfo?.productId>\n            <p class=\"card-test\"><strong>Description: </strong>fjsfvdfwef, wrdrw eefj jvdjw  </p>\n            <p class=\"card-text\">\n              <strong>Price: </strong>\n              <label id=\"price\">500</label>\n            </p>\n            <p class=\"card-text\"><strong>Stock: </strong>120</p>\n\n            <label class=\"card-text\">\n              <strong>Quantity: </strong>\n              <input [(ngModel)]=count\n                     (change)=\"validateCount()\"\n                     type=\"number\"\n                     name=\"count\"\n                     required\n                     min=\"1\"\n                     [max]=productInfo?.productStock\n              >\n            </label>\n\n\n            <p class=\"card-text\"><strong>Subtotal: </strong>\n              <label id=\"subtotal\">{{count * productInfo?.productPrice | currency}}</label>\n            </p>\n          </div>\n          <button type=\"submit\" [disabled]=\"!form.form.valid\" *ngIf=\"productInfo?.productStatus == 0; else offBlock\"\n                  class=\"btn btn-primary btn-lg\"\n          >Add to Cart\n          </button>\n          <ng-template #offBlock><a class=\"btn btn-secondary btn-lg disabled\">Unavailable</a></ng-template>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/product-detail/detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/product-detail/detail.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _models_ProductInOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/ProductInOrder */ "./src/app/models/ProductInOrder.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(productService, cartService, cookieService, route, router) {
        this.productService = productService;
        this.cartService = cartService;
        this.cookieService = cookieService;
        this.route = route;
        this.router = router;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.getProduct();
        this.title = 'Product Detail';
        this.count = 1;
    };
    // ngOnChanges(changes: SimpleChanges): void {
    //   // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //   // Add '${implements OnChanges}' to the class.
    //   console.log(changes);
    //   if (this.item.quantity in changes) {
    //   }
    // }
    DetailComponent.prototype.getProduct = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.productService.getDetail(id).subscribe(function (prod) {
            _this.productInfo = prod;
        }, function (_) { return console.log('Get Cart Failed'); });
    };
    DetailComponent.prototype.addToCart = function () {
        var _this = this;
        this.cartService
            .addItem(new _models_ProductInOrder__WEBPACK_IMPORTED_MODULE_6__["ProductInOrder"](this.productInfo, this.count))
            .subscribe(function (res) {
            if (!res) {
                console.log('Add Cart failed' + res);
                throw new Error();
            }
            _this.router.navigateByUrl('/cart');
        }, function (_) { return console.log('Add Cart Failed'); });
    };
    DetailComponent.prototype.validateCount = function () {
        console.log('Validate');
        var max = this.productInfo.productStock;
        if (this.count > max) {
            this.count = max;
        }
        else if (this.count < 1) {
            this.count = 1;
        }
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/pages/product-detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/pages/product-detail/detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-edit/product-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-edit/product-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/product-edit/product-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-edit/product-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Edit Product</h1>\n<div style=\"width:40%; margin: 25px auto\">\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <!--Id-->\n        <div class=\"form-group\">\n            <label for=\"productId\">Code</label>\n            <input [readOnly]=\"isEdit\" [disabled]=\"isEdit\" [(ngModel)]=\"product.productId\" type=\"text\"\n                   class=\"form-control form-control-lg\" #productIdInput\n                   id=\"productId\" name=\"productId\" required #productId=\"ngModel\">\n            <div *ngIf=\"productIdInput.invalid && (productIdInput.dirty ||productIdInput.touched)\">\n                <div *ngIf=\"productIdInput.errors.required\">\n                    Name is required.\n                </div>\n            </div>\n        </div>\n        <!--Photo-->\n        <div class=\"form-group\">\n            <label>Photo Link</label>\n            <input [(ngModel)]=\"product.productIcon\" type=\"text\" class=\"form-control form-control-lg\" id=\"productIcon\"\n                   name=\"productIcon\" placeholder=\"Photo\">\n        </div>\n\n        <!--Name-->\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input [(ngModel)]=\"product.productName\" type=\"text\" class=\"form-control form-control-lg\" id=\"productName\"\n                   #productName=\"ngModel\"\n                   name=\"productName\" placeholder=\"Name\" required>\n        </div>\n        <div *ngIf=\"productName.invalid && (productName.dirty ||productName.touched)\">\n            <div *ngIf=\"productName.errors.required\">\n                Name is required.\n            </div>\n        </div>\n\n        <!--Category-->\n        <div class=\"form-group\">\n            <label for=\"categoryType\">Category</label>\n            <select class=\"custom-select custom-select-lg \" id=\"categoryType\" name=\"categoryType\"\n                    [(ngModel)]=\"product.categoryType\"\n                    required>\n                <option [ngValue]=0>Books</option>\n                <option [ngValue]=1>Food</option>\n                <option [ngValue]=2>Clothes</option>\n                <option [ngValue]=3>Drink</option>\n            </select>\n        </div>\n\n        <!--Description-->\n        <div class=\"form-group\">\n            <label>Description</label>\n            <textarea class=\"form-control form-control-lg text-left\"\n                      id=\"productDescription\" name=\"productDescription\"\n                      placeholder=\"Description\" [(ngModel)]=\"product.productDescription\"></textarea>\n        </div>\n        <!--Price-->\n        <div class=\"form-group\">\n            <label for=\"productPrice\">Price</label>\n            <input class=\"form-control form-control-lg\"\n                   type=\"number\"\n                   id=\"productPrice\"\n                   name=\"productPrice\"\n                   #productPrice=\"ngModel\"\n                   [ngModel]=\"product.productPrice\" (ngModelChange)=\"product.productPrice=$event\"\n                   required>\n            <div *ngIf=\"productPrice.invalid && (productPrice.dirty ||productPrice.touched)\">\n                <div *ngIf=\"productPrice.errors.required\">\n                    Price is required.\n                </div>\n            </div>\n        </div>\n        <!--Stock-->\n        <div class=\"form-group\">\n            <label for=\"productStock\">Stock</label>\n            <input class=\"form-control form-control-lg\"\n                   type=\"number\"\n                   id=\"productStock\"\n                   name=\"productStock\"\n                   min=\"0\" #productStock=\"ngModel\"\n                   [(ngModel)]=\"product.productStock\"\n                   required>\n            <div *ngIf=\"productStock.invalid && (productStock.dirty ||productStock.touched)\">\n                <div *ngIf=\"productStock.errors.required\">\n                    Stock is required.\n                </div>\n            </div>\n        </div>\n        <!--Status-->\n        <div class=\"form-group\">\n            <label for=\"productStatus\">Status</label>\n            <select class=\"custom-select custom-select-lg \" id=\"productStatus\" name=\"productStatus\" required\n                    [(ngModel)]=\"product.productStatus\">\n                <option [ngValue]=0>Available</option>\n                <option [ngValue]=1>Unavailable</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!form.form.valid\" class=\"btn btn-lg btn-primary btn-block\">Submit</button>\n        </div>\n    </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/product-edit/product-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/product-edit/product-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_productInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/productInfo */ "./src/app/models/productInfo.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.product = new _models_productInfo__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"]();
        this.isEdit = false;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productId = this.route.snapshot.paramMap.get('id');
        if (this.productId) {
            this.isEdit = true;
            this.productService.getDetail(this.productId).subscribe(function (prod) { return _this.product = prod; });
        }
    };
    ProductEditComponent.prototype.update = function () {
        var _this = this;
        this.productService.update(this.product).subscribe(function (prod) {
            if (!prod)
                throw new Error();
            _this.router.navigate(['/seller']);
        }, function (err) {
        });
    };
    ProductEditComponent.prototype.onSubmit = function () {
        if (this.productId) {
            this.update();
        }
        else {
            this.add();
        }
    };
    ProductEditComponent.prototype.add = function () {
        var _this = this;
        this.productService.create(this.product).subscribe(function (prod) {
            if (!prod)
                throw new Error;
            _this.router.navigate(['/']);
        }, function (e) {
        });
    };
    ProductEditComponent.prototype.ngAfterContentChecked = function () {
        console.log(this.product);
    };
    ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/pages/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/pages/product-edit/product-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-list/product.list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-list/product.list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0Lmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/product-list/product.list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-list/product.list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 \">Products</h1>\n<a *ngIf=\"currentUser?.role == Role.Customer\" style=\"color: inherit\"\n   routerLink=\"/seller/product/new\" class=\"float-right mb-3\"><i class=\"fas fa-plus fa-2x\">Add</i>\n</a>\n<table id=\"table\" class=\"table table-striped text-center\" style=\"width:100%;\">\n    <thead>\n    <tr>\n        <th scope=\"col\">Photo</th>\n        <th scope=\"col\">Code</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Type</th>\n        <th scope=\"col\">Description</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\">Stock</th>\n        <th scope=\"col\">Status</th>\n        <th scope=\"col\">Action</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let productInfo of page?.content\">\n        <th class=\"align-middle\" scope=\"row\">\n            <img height=\"100px\" src=\"{{productInfo.productIcon}}\" alt=\"{{productInfo.productName}}\">\n        </th>\n        <td class=\"align-middle\">{{productInfo.productId}}</td>\n        <td class=\"align-middle\">{{productInfo.productName}}</td>\n        <td class=\"align-middle\">{{CategoryType[productInfo.categoryType]}}</td>\n        <td class=\"align-middle\">{{productInfo.productDescription}}</td>\n        <td class=\"align-middle\">{{productInfo.productPrice | currency}}</td>\n        <td class=\"align-middle\">{{productInfo.productStock}}</td>\n        <td class=\"align-middle\">{{ProductStatus[productInfo.productStatus]}}</td>\n        <td class=\"align-middle\">\n            <a style=\"display: block\" routerLink=\"/seller/product/{{productInfo.productId}}/edit\">\n                Edit</a>\n\n            <a *ngIf=\"currentUser?.role == Role.Customer\" style=\"display: block\"\n               (click)=\"remove(page.content, productInfo.productId)\" routerLink=\"./\">\n                Remove</a>\n        </td>\n\n    </tbody>\n</table>\n<app-pagination [currentPage]=\"page\"></app-pagination>\n"

/***/ }),

/***/ "./src/app/pages/product-list/product.list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/product-list/product.list.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_CategoryType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enum/CategoryType */ "./src/app/enum/CategoryType.ts");
/* harmony import */ var _enum_ProductStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../enum/ProductStatus */ "./src/app/enum/ProductStatus.ts");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");








var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(userService, productService, route) {
        this.userService = userService;
        this.productService = productService;
        this.route = route;
        this.Role = _enum_Role__WEBPACK_IMPORTED_MODULE_7__["Role"];
        this.CategoryType = _enum_CategoryType__WEBPACK_IMPORTED_MODULE_5__["CategoryType"];
        this.ProductStatus = _enum_ProductStatus__WEBPACK_IMPORTED_MODULE_6__["ProductStatus"];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.querySub = this.route.queryParams.subscribe(function () {
            _this.update();
        });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.querySub.unsubscribe();
    };
    ProductListComponent.prototype.update = function () {
        if (this.route.snapshot.queryParamMap.get('page')) {
            var currentPage = +this.route.snapshot.queryParamMap.get('page');
            var size = +this.route.snapshot.queryParamMap.get('size');
            this.getProds(currentPage, size);
        }
        else {
            this.getProds();
        }
    };
    ProductListComponent.prototype.getProds = function (page, size) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 5; }
        this.productService.getAllInPage(+page, +size)
            .subscribe(function (page) {
            _this.page = page;
        });
    };
    ProductListComponent.prototype.remove = function (productInfos, productInfo) {
        this.productService.delelte(productInfo).subscribe(function (_) {
            productInfos = productInfos.filter(function (e) { return e.productId != productInfo; });
        }, function (err) {
        });
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product.list',
            template: __webpack_require__(/*! ./product.list.component.html */ "./src/app/pages/product-list/product.list.component.html"),
            styles: [__webpack_require__(/*! ./product.list.component.css */ "./src/app/pages/product-list/product.list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Sign Up</h1>\n<div style=\"width:40%; margin: 25px auto\" >\n  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form.value)\">\n    <div class=\"form-group\">\n      <label><b>Email address</b></label>\n      <input [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control form-control-lg\" id=\"email\" name=\"email\" placeholder=\"Enter email\" email required autofocus  #email=\"ngModel\">\n      <div  *ngIf=\"email.invalid && (email.dirty ||email.touched)\" >\n          <div *ngIf=\"email.errors.required\" >\n              Email is required.\n          </div>\n          <div *ngIf=\"email.errors.email\">\n              Invalid Email.\n          </div>\n      </div>\n    </div>\n\n    \n    <div class=\"form-group\">\n      <label><b>FirstName</b></label>\n      <input [(ngModel)]=\"user.firstname\" type=\"text\" class=\"form-control form-control-lg\" id=\"firstname\" name=\"firstname\" placeholder=\"Your firstnamename\" required #name=\"ngModel\">\n        <div  *ngIf=\"firstname.invalid && (firstname.dirty ||firstname.touched)\">\n            <div *ngIf=\"firstname.errors.required\">\n               First Name is required.\n            </div>\n            <div *ngIf=\"firstname.errors.minlength\">\n                FirstName must be at least 3 characters long.\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label><b>LastName</b></label>\n      <input [(ngModel)]=\"user.lastname\" type=\"text\" class=\"form-control form-control-lg\" id=\"lastname\" name=\"lastname\" placeholder=\"Your Lastname\" required #name=\"ngModel\">\n        <div  *ngIf=\"lastname.invalid && (lastname.dirty ||lastname.touched)\">\n            <div *ngIf=\"lastname.errors.required\">\n              Last Name is required.\n            </div>\n            <div *ngIf=\"lastname.errors.minlength\">\n                LastName must be at least 3 characters long.\n            </div>\n        </div>\n    </div>\n\n    <!-- <div class=\"form-group\">\n      <label><b>Name</b></label>\n      <input [(ngModel)]=\"user.name\" type=\"text\" class=\"form-control form-control-lg\" id=\"name\" name=\"name\" placeholder=\"Your name\" required #name=\"ngModel\">\n        <div  *ngIf=\"name.invalid && (name.dirty ||name.touched)\">\n            <div *ngIf=\"name.errors.required\">\n                Name is required.\n            </div>\n            <div *ngIf=\"name.errors.minlength\">\n                Name must be at least 3 characters long.\n            </div>\n        </div>\n    </div> -->\n    <div class=\"form-group\">\n      <label><b>Password</b></label>\n      <input  [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control form-control-lg\" id=\"password\" name=\"password\" placeholder=\"Password\" minlength=\"3\" required #password=\"ngModel\">\n        <div  *ngIf=\"password.invalid && (password.dirty ||password.touched)\">\n            <div *ngIf=\"password.errors.required\">\n                Password is required.\n            </div>\n            <div *ngIf=\"password.errors.minlength\">\n                Password must be at least 3 characters long.\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label><b>Phone</b></label>\n      <input [(ngModel)]=\"user.phone\" type=\"text\" class=\"form-control form-control-lg\" id=\"phone\" name=\"phone\" placeholder=\"Phone\" required #phone=\"ngModel\" >\n        <div  *ngIf=\"phone.invalid && (phone.dirty ||phone.touched)\">\n            <div *ngIf=\"phone.errors.required\">\n                Phone is required.\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"a\">Role</label>\n      <select class=\"form-control\" id=\"a\" name=\"role\" [(ngModel)]=role>\n        <option v alue=\" \">Select Role</option>\n        <option>admin</option>\n        <option>user</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label><b>Address</b></label>\n      <input [(ngModel)]=\"user.address\" type=\"text\" class=\"form-control form-control-lg\" id=\"address\" name=\"address\" placeholder=\"Address\" required #address=\"ngModel\">\n        <div  *ngIf=\"address.invalid && (address.dirty ||address.touched)\">\n            <div *ngIf=\"address.errors.required\">\n                Address is required.\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!form.form.valid\" >Sign Up</button>\n    </div>\n  </form>\n  <a  routerLink=\"login\" class=\"text-center\">I already have a an account</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(location, userService, router) {
        this.location = location;
        this.userService = userService;
        this.router = router;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function (v) {
        var _this = this;
        console.log(v);
        this.userService.signUp(this.user).subscribe(function (u) {
            _this.router.navigate(['/login']);
        }, function (e) { });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-edit/user-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-edit/user-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItZWRpdC91c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/user-edit/user-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/user-edit/user-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\" class=\"display-4 mb-5\">Edit Profiles</h1>\n<div style=\"width:40%; margin: 25px auto\" >\n  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label><b>Email address</b></label>\n        <input readonly [value]=user?.email type=\"email\" class=\"form-control form-control-lg \" disabled id=\"email\"\n               name=\"email\" placeholder=\"Enter email\">\n    </div>\n    <div class=\"form-group\">\n      <label><b>Name</b></label>\n      <input [(ngModel)]=\"user.name\" type=\"text\" class=\"form-control form-control-lg\" id=\"name\" name=\"name\" placeholder=\"Your name\" required #name=\"ngModel\" autofocus>\n      <div  *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n        <div *ngIf=\"name.errors.required\">\n          Name is required.\n        </div>\n        <div *ngIf=\"name.errors.minlength\">\n          Name must be at least 3 characters long.\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label><b>Password</b></label>\n      <input  [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control form-control-lg\" id=\"password\" name=\"password\" placeholder=\"Password\" minlength=\"3\" required #password=\"ngModel\">\n      <div  *ngIf=\"password.invalid && (password.dirty ||password.touched)\">\n        <div *ngIf=\"password.errors.required\">\n          Password is required.\n        </div>\n        <div *ngIf=\"password.errors.minlength\">\n          Password must be at least 3 characters long.\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label><b>Phone</b></label>\n      <input [(ngModel)]=\"user.phone\" type=\"text\" class=\"form-control form-control-lg\" id=\"phone\" name=\"phone\" placeholder=\"Phone\" required #phone=\"ngModel\" >\n      <div  *ngIf=\"phone.invalid && (phone.dirty ||phone.touched)\">\n        <div *ngIf=\"phone.errors.required\">\n          Phone is required.\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label><b>Address</b></label>\n      <input [(ngModel)]=\"user.address\" type=\"text\" class=\"form-control form-control-lg\" id=\"address\" name=\"address\" placeholder=\"Address\" required #address=\"ngModel\">\n      <div  *ngIf=\"address.invalid && (address.dirty ||address.touched)\">\n        <div *ngIf=\"address.errors.required\">\n          Address is required.\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!form.form.valid\" >Update</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/user-edit/user-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/user-edit/user-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");






var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var account = this.userService.currentUserValue.account;
        this.userService.get(account).subscribe(function (u) {
            _this.user = u;
            _this.user.password = '';
        }, function (e) {
        });
    };
    UserDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.update(this.user).subscribe(function (u) {
            _this.userService.nameTerms.next(u.name);
            var url = '/';
            if (_this.user.role != _enum_Role__WEBPACK_IMPORTED_MODULE_5__["Role"].Customer) {
                url = '/seller';
            }
            _this.router.navigateByUrl(url);
        }, function (_) { });
    };
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/pages/user-edit/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/pages/user-edit/user-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/parts/navigation/navigation.component.css":
/*!***********************************************************!*\
  !*** ./src/app/parts/navigation/navigation.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/parts/navigation/navigation.component.html":
/*!************************************************************!*\
  !*** ./src/app/parts/navigation/navigation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" [routerLink]=\"root\">\n        <img src=\"/assets/brand.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n        E-Shop\n    </a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n\n        <div class=\"navbar-nav\" *ngIf=\"!currentUser || currentUser.role == Role.Customer\">\n\n            <a class=\"nav-item nav-link \"\n               routerLink=\"/category/0\">\n                Books\n            </a>\n            <a class=\"nav-item nav-link\"\n               routerLink=\"/category/1\">\n                Food\n            </a>\n            <a class=\"nav-item nav-link \"\n               routerLink=\"/category/2\">\n                Clothes\n            </a>\n            <a class=\"nav-item nav-link\"\n               routerLink=\"/category/3\">\n                Drink\n            </a>\n\n        </div>\n\n        <div class=\"navbar-nav ml-auto\">\n            <a *ngIf=\"!currentUser || currentUser.role == Role.Customer\"\n                    class=\"nav-item nav-link \" routerLink=\"/cart\">\n                <i class=\"fas fa-shopping-cart\"></i>\n                Cart\n            </a>\n\n            <ng-container *ngIf=\"currentUser; else noUser\">\n                <a class=\"nav-item nav-link \" routerLink=\"/order\">\n                    <i class=\"fas fa-list-ul\"></i>\n                    Orders\n                </a>\n                <a class=\"nav-item nav-link \" routerLink=\"/profile\">\n                    {{name}}\n                </a>\n                <a class=\"nav-item nav-link \" (click)=\"logout()\" routerLink=\"/login\" [queryParams]=\"{logout: true}\">\n                    Sign Out\n                </a>\n            </ng-container>\n            <ng-template #noUser>\n                <a class=\"nav-item nav-link \" routerLink=\"/login\">\n                    Sign In\n                </a>\n                <a class=\"nav-item nav-link \" routerLink=\"/register\">\n                    Sign Up\n                </a>\n            </ng-template>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/parts/navigation/navigation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/parts/navigation/navigation.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum_Role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enum/Role */ "./src/app/enum/Role.ts");





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.root = '/';
        this.Role = _enum_Role__WEBPACK_IMPORTED_MODULE_4__["Role"];
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name$ = this.userService.name$.subscribe(function (aName) { return _this.name = aName; });
        this.currentUserSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            if (!user || user.role == _enum_Role__WEBPACK_IMPORTED_MODULE_4__["Role"].Customer) {
                _this.root = '/';
            }
            else {
                _this.root = '/seller';
            }
        });
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
        this.currentUserSubscription.unsubscribe();
        // this.name$.unsubscribe();
    };
    NavigationComponent.prototype.logout = function () {
        this.userService.logout();
        // this.router.navigate(['/login'], {queryParams: {logout: 'true'}} );
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/parts/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/parts/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/parts/pagination/pagination.component.css":
/*!***********************************************************!*\
  !*** ./src/app/parts/pagination/pagination.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/parts/pagination/pagination.component.html":
/*!************************************************************!*\
  !*** ./src/app/parts/pagination/pagination.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 column\">\n  <ul class=\"pagination justify-content-end\">\n      <li class=\"page-item\" *ngIf=\"currentPage?.number > 0; else prev\">\n          <a\n                  class=\"page-link\"\n                  [routerLink]=\"['./']\"\n                  [queryParams]=\"{ page: currentPage?.number, size: currentPage?.size }\"\n          >Previous</a\n          >\n    </li>\n      <ng-template #prev>\n          <li class=\"page-item  disabled\"><a class=\"page-link\">Previous</a></li>\n      </ng-template>\n\n      <ng-container *ngFor=\"let item of counter(currentPage?.totalPages); let i = index\">\n          <li class=\"page-item\" *ngIf=\"currentPage && currentPage.number != i; else active\">\n            <a class=\"page-link \"\n                    routerLink=\"./\"\n                    [queryParams]=\"{ page: i + 1, size: currentPage?.size }\"\n            >{{ i + 1 }}</a\n            >\n        </li>\n          <ng-template #active>\n              <li\n                      class=\"page-item active \"\n\n              >\n                  <button class=\"page-link \" disabled>{{ i + 1 }}</button>\n              </li>\n          </ng-template>\n      </ng-container>\n\n      <li\n              class=\"page-item\"\n              *ngIf=\"currentPage?.number + 1 < currentPage?.totalPages; else next\"\n      >\n          <a\n                  class=\"page-link\"\n                  [routerLink]=\"['./']\"\n                  [queryParams]=\"{\n          page: currentPage?.number + 2,\n          size: currentPage?.size\n        }\"\n          >Next</a\n          >\n    </li>\n    <ng-template #next>\n        <li class=\"page-item disabled \"><a class=\"page-link\">Next</a></li>\n    </ng-template>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/parts/pagination/pagination.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/parts/pagination/pagination.component.ts ***!
  \**********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.counter = function (i) {
        if (i === void 0) { i = 1; }
        return new Array(i);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "currentPage", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/parts/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/parts/pagination/pagination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");








var CartService = /** @class */ (function () {
    function CartService(http, cookieService, userService) {
        var _this = this;
        this.http = http;
        this.cookieService = cookieService;
        this.userService = userService;
        this.cartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/cart";
        this.localMap = {};
        this.itemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.items = this.itemsSubject.asObservable();
        this.totalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.total = this.totalSubject.asObservable();
        this.userService.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    CartService.prototype.getLocalCart = function () {
        if (this.cookieService.check('cart')) {
            this.localMap = JSON.parse(this.cookieService.get('cart'));
            return Object.values(this.localMap);
        }
        else {
            this.localMap = {};
            return [];
        }
    };
    CartService.prototype.getCart = function () {
        var _this = this;
        var localCart = this.getLocalCart();
        if (this.currentUser) {
            if (localCart.length > 0) {
                return this.http.post(this.cartUrl, localCart).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_) {
                    _this.clearLocalCart();
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (cart) { return cart.products; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]); }));
            }
            else {
                return this.http.get(this.cartUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (cart) { return cart.products; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]); }));
            }
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(localCart);
        }
    };
    CartService.prototype.addItem = function (productInOrder) {
        if (!this.currentUser) {
            if (this.cookieService.check('cart')) {
                this.localMap = JSON.parse(this.cookieService.get('cart'));
            }
            if (!this.localMap[productInOrder.productId]) {
                this.localMap[productInOrder.productId] = productInOrder;
            }
            else {
                this.localMap[productInOrder.productId].count += productInOrder.count;
            }
            this.cookieService.set('cart', JSON.stringify(this.localMap));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(true);
        }
        else {
            var url = this.cartUrl + "/add";
            return this.http.post(url, {
                'quantity': productInOrder.count,
                'productId': productInOrder.productId
            });
        }
    };
    CartService.prototype.update = function (productInOrder) {
        if (this.currentUser) {
            var url = this.cartUrl + "/" + productInOrder.productId;
            return this.http.put(url, productInOrder.count);
        }
    };
    CartService.prototype.remove = function (productInOrder) {
        if (!this.currentUser) {
            delete this.localMap[productInOrder.productId];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }
        else {
            var url = this.cartUrl + "/" + productInOrder.productId;
            return this.http.delete(url).pipe();
        }
    };
    CartService.prototype.checkout = function () {
        var url = this.cartUrl + "/checkout";
        return this.http.post(url, null).pipe();
    };
    CartService.prototype.storeLocalCart = function () {
        this.cookieService.set('cart', JSON.stringify(this.localMap));
    };
    CartService.prototype.clearLocalCart = function () {
        console.log('clear local cart');
        this.cookieService.delete('cart');
        this.localMap = {};
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.orderUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["apiUrl"] + "/order";
    }
    OrderService.prototype.getPage = function (page, size) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 10; }
        return this.http.get(this.orderUrl + "?page=" + page + "&size=" + size).pipe();
    };
    OrderService.prototype.show = function (id) {
        return this.http.get(this.orderUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null); }));
    };
    OrderService.prototype.cancel = function (id) {
        return this.http.patch(this.orderUrl + "/cancel/" + id, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null); }));
    };
    OrderService.prototype.finish = function (id) {
        return this.http.patch(this.orderUrl + "/finish/" + id, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null); }));
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_productInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/productInfo */ "./src/app/models/productInfo.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/product";
        this.categoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/category";
    }
    ProductService.prototype.getAllInPage = function (page, size) {
        var url = this.productUrl + "?page=" + page + "&size=" + size;
        return this.http.get(url)
            .pipe(
        // tap(_ => console.log(_)),
        );
    };
    ProductService.prototype.getCategoryInPage = function (categoryType, page, size) {
        var url = this.categoryUrl + "/" + categoryType + "?page=" + page + "&size=" + size;
        return this.http.get(url).pipe(
        // tap(data => console.log(data))
        );
    };
    ProductService.prototype.getDetail = function (id) {
        var url = this.productUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (_) {
            console.log("Get Detail Failed");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _models_productInfo__WEBPACK_IMPORTED_MODULE_5__["ProductInfo"]());
        }));
    };
    ProductService.prototype.update = function (productInfo) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/seller/product/" + productInfo.productId + "/edit";
        return this.http.put(url, productInfo);
    };
    ProductService.prototype.create = function (productInfo) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/seller/product/new";
        return this.http.post(url, productInfo);
    };
    ProductService.prototype.delelte = function (productInfo) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["apiUrl"] + "/seller/product/" + productInfo.productId + "/delete";
        return this.http.delete(url);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ProductService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");







var UserService = /** @class */ (function () {
    function UserService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.nameTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.name$ = this.nameTerms.asObservable();
        var memo = localStorage.getItem('currentUser');
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(memo));
        this.currentUser = this.currentUserSubject.asObservable();
        cookieService.set('currentUser', memo);
    }
    Object.defineProperty(UserService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.login = function (loginForm) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/login";
        return this.http.post(url, loginForm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (user) {
            if (user && user.token) {
                _this.cookieService.set('currentUser', JSON.stringify(user));
                if (loginForm.remembered) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                console.log((user.name));
                _this.nameTerms.next(user.name);
                _this.currentUserSubject.next(user);
                return user;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Login Failed', null)));
    };
    UserService.prototype.logout = function () {
        this.currentUserSubject.next(null);
        localStorage.removeItem('currentUser');
        this.cookieService.delete('currentUser');
    };
    UserService.prototype.signUp = function (user) {
        console.log(user, 'I am before service');
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/register";
        return this.http.post(url, user);
    };
    UserService.prototype.update = function (user) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/profile";
        return this.http.put(url, user);
    };
    UserService.prototype.get = function (email) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/profile/" + email;
        return this.http.get(url);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6\">\n        <h4 class=\"mb-3\">Pages</h4>\n        <ul class=\"list-unstyled\">\n          <li><a href=\"\">About us</a></li>\n          <li><a href=\"\">Terms and conditions</a></li>\n          <li><a href=\"\">FAQ</a></li>\n          <li><a href=\"\">Contact us</a></li>\n        </ul>\n        <hr>\n        <h4 class=\"mb-3\">User section</h4>\n        <ul class=\"list-unstyled\">\n          <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#login-modal\">Login</a></li>\n          <li><a routerLink=\"register\">Regiter</a></li>\n        </ul>\n      </div>\n      <!-- /.col-lg-3-->\n      <div class=\"col-lg-3 col-md-6\">\n        <h4 class=\"mb-3\">Top categories</h4>\n        <h5>Men</h5>\n        <ul class=\"list-unstyled\">\n          <li><a href=\"\">T-shirts</a></li>\n          <li><a href=\"\">Shirts</a></li>\n          <li><a href=\"\">Accessories</a></li>\n        </ul>\n        <h5>Ladies</h5>\n        <ul class=\"list-unstyled\">\n          <li><a href=\"\">T-shirts</a></li>\n          <li><a href=\"\">Skirts</a></li>\n          <li><a href=\"\">Pants</a></li>\n          <li><a href=\"\">Accessories</a></li>\n        </ul>\n      </div>\n      <!-- /.col-lg-3-->\n      <div class=\"col-lg-3 col-md-6\">\n        <h4 class=\"mb-3\">Where to find us</h4>\n        <p><strong>Obaju Ltd.</strong><br>13/25 New Avenue<br>New Heaven<br>45Y 73J<br>England<br><strong>Great Britain</strong></p><a href=\"contact.html\">Go to contact page</a>\n        <hr class=\"d-block d-md-none\">\n      </div>\n      <!-- /.col-lg-3-->\n      <div class=\"col-lg-3 col-md-6\">\n        <h4 class=\"mb-3\">Get the news</h4>\n        <p class=\"text-muted\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n        <form>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\"><span class=\"input-group-append\">\n              <button type=\"button\" class=\"btn btn-outline-secondary\">Subscribe!</button></span>\n          </div>\n          <!-- /input-group-->\n        </form>\n        <hr>\n        <h4 class=\"mb-3\">Stay in touch</h4>\n        <p class=\"social\"><a href=\"#\" class=\"facebook external\"><i class=\"fa fa-facebook\"></i></a><a href=\"#\" class=\"twitter external\"><i class=\"fa fa-twitter\"></i></a><a href=\"#\" class=\"instagram external\"><i class=\"fa fa-instagram\"></i></a><a href=\"#\" class=\"gplus external\"><i class=\"fa fa-google-plus\"></i></a><a href=\"#\" class=\"email external\"><i class=\"fa fa-envelope\"></i></a></p>\n      </div>\n      <!-- /.col-lg-3-->\n    </div>\n    <!-- /.row-->\n  </div>\n  <!-- /.container-->\n</div>\n<!-- /#footer-->\n<!-- *** FOOTER END ***-->\n\n\n<!--\n*** COPYRIGHT ***\n_________________________________________________________\n-->\n<div id=\"copyright\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 mb-2 mb-lg-0\">\n        <p class=\"text-center text-lg-left\">©2019 Your name goes here.</p>\n      </div>\n      <div class=\"col-lg-6\">\n        <p class=\"text-center text-lg-right\"> Developed by <a href=\"http://www.scienstechnologies.com/\">Sciens Technologies</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header mb-2\">\n \n  <div id=\"top\">\n<div class=\"container\">\n <div class=\"row\">\n   <div class=\"col-lg-6 offer mb-3 mb-lg-0\"><a href=\"#\" routerLink=\"category\" class=\"btn btn-success btn-sm\">Offer of the day</a><a href=\"#\" class=\"ml-1\">Get flat 35% off on orders over $50!</a></div>\n   <div class=\"col-lg-6 text-center text-lg-right\">\n     <ul class=\"menu list-inline mb-0\">\n       <li class=\"list-inline-item\"><a href=\"#\" routerLink=\"login\" >Login</a></li>\n       <li class=\"list-inline-item\"><a routerLink=\"register\" href=\"\">Register</a></li>\n       <li class=\"list-inline-item\"><a href=\"contact.html\">Contact</a></li>\n       <li class=\"list-inline-item\"><a href=\"#\" routerLink=\"cart\">Recently viewed</a></li>\n     </ul>\n   </div>\n </div>\n</div>\n<div id=\"login-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Login\" aria-hidden=\"true\" class=\"modal fade\">\n <div class=\"modal-dialog modal-sm\">\n   <div class=\"modal-content\">\n     <div class=\"modal-header\">\n       <h5 class=\"modal-title\">Customer login</h5>\n       <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\"><span aria-hidden=\"true\">×</span></button>\n     </div>\n     <div class=\"modal-body\">\n       <form action=\"customer-orders.html\" method=\"post\">\n         <div class=\"form-group\">\n           <input id=\"email-modal\" type=\"text\" placeholder=\"email\" class=\"form-control\">\n         </div>\n         <div class=\"form-group\">\n           <input id=\"password-modal\" type=\"password\" placeholder=\"password\" class=\"form-control\">\n         </div>\n         <p class=\"text-center\">\n           <button class=\"btn btn-primary\"><i class=\"fa fa-sign-in\"></i> Log in</button>\n         </p>\n       </form>\n       <p class=\"text-center text-muted\">Not registered yet?</p>\n       <p class=\"text-center text-muted\"><a href=\"register.html\"><strong>Register now</strong></a>! It is easy and done in 1 minute and gives you access to special discounts and much more!</p>\n     </div>\n   </div>\n </div>\n</div>\n<!-- *** TOP BAR END ***-->\n\n\n</div>\n<nav class=\"navbar navbar-expand-lg\">\n<div class=\"container\"><a href=\"\" routerLink=\"home\" class=\"navbar-brand home\"><img src=\"./assets/images/logo.png\" alt=\"Obaju logo\" class=\"d-none d-md-inline-block img-fluid\" width=\"100px\"><img src=\"./assets/images/logo-small.png\" alt=\"Obaju logo\" class=\"d-inline-block d-md-none\"><span class=\"sr-only\">Obaju - go to homepage</span></a>\n <div class=\"navbar-buttons\">\n   <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" class=\"btn btn-outline-secondary navbar-toggler\"><span class=\"sr-only\">Toggle navigation</span><i class=\"fa fa-align-justify\"></i></button>\n   <button type=\"button\" data-toggle=\"collapse\" data-target=\"#search\" class=\"btn btn-outline-secondary navbar-toggler\"><span class=\"sr-only\">Toggle search</span><i class=\"fa fa-search\"></i></button><a href=\"basket.html\" class=\"btn btn-outline-secondary navbar-toggler\"><i class=\"fa fa-shopping-cart\"></i></a>\n </div>\n <div id=\"navigation\" class=\"collapse navbar-collapse\">\n   <ul class=\"navbar-nav mr-auto\">\n     <li class=\"nav-item\"><a href=\"#\" routerLink=\"home\" class=\"nav-link active\">HOME</a></li>\n     <li class=\"nav-item dropdown menu-large\"><a href=\"#\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-delay=\"200\" class=\"dropdown-toggle nav-link\">SHOP<b class=\"caret\"></b></a>\n       <ul class=\"dropdown-menu megamenu\">\n         <li>\n           <div class=\"row\">\n             <div class=\"col-md-6 col-lg-3\">\n               <a href=\"\" routerLink=\"/category/2\"><h5>SHOP</h5></a>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">T-shirts</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Shirts</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Pants</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Accessories</a></li>\n               </ul>\n             </div>\n             <div class=\"col-md-6 col-lg-3\">\n               <h5>CONTACT US</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Trainers</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Sandals</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Hiking shoes</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Casual</a></li>\n               </ul>\n             </div>\n             <div class=\"col-md-6 col-lg-3\">\n               <h5>Accessories</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Trainers</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Sandals</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Hiking shoes</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Casual</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Hiking shoes</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Casual</a></li>\n               </ul>\n             </div>\n             <div class=\"col-md-6 col-lg-3\">\n               <h5>Featured</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Trainers</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Sandals</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Hiking shoes</a></li>\n               </ul>\n               <h5>Looks and trends</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Trainers</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Sandals</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Hiking shoes</a></li>\n               </ul>\n             </div>\n           </div>\n         </li>\n       </ul>\n     </li>\n   <!--   <li class=\"nav-item dropdown menu-large\"><a href=\"#\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-delay=\"200\" class=\"dropdown-toggle nav-link\">Ladies<b class=\"caret\"></b></a>\n       <ul class=\"dropdown-menu megamenu\">\n         <li>\n           <div class=\"row\">\n             <div class=\"col-md-6 col-lg-3\">\n               <h5>Clothing</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">T-shirts</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Shirts</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Pants</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Accessories</a></li>\n               </ul>\n             </div>\n             <div class=\"col-md-6 col-lg-3\">\n               <h5>Shoes</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Trainers</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Sandals</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Hiking shoes</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Casual</a></li>\n               </ul>\n             </div>\n             <div class=\"col-md-6 col-lg-3\">\n               <h5>Accessories</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Trainers</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Sandals</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Hiking shoes</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Casual</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Hiking shoes</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Casual</a></li>\n               </ul>\n               <h5>Looks and trends</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Trainers</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Sandals</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Hiking shoes</a></li>\n               </ul>\n             </div>\n             <div class=\"col-md-6 col-lg-3\">\n               <div class=\"banner\"><a href=\"#\"><img src=\"./assets/images/banner.jpg\" alt=\"\" class=\"img img-fluid\"></a></div>\n               <div class=\"banner\"><a href=\"#\"><img src=\"./assets/images/banner2.jpg\" alt=\"\" class=\"img img-fluid\"></a></div>\n             </div>\n           </div>\n         </li>\n       </ul>\n     </li>\n     <li class=\"nav-item dropdown menu-large\"><a href=\"#\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-delay=\"200\" class=\"dropdown-toggle nav-link\">Template<b class=\"caret\"></b></a>\n       <ul class=\"dropdown-menu megamenu\">\n         <li>\n           <div class=\"row\">\n             <div class=\"col-md-6 col-lg-3\">\n               <h5>Shop</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"index.html\" class=\"nav-link\">Homepage</a></li>\n                 <li class=\"nav-item\"><a href=\"category.html\" class=\"nav-link\">Category - sidebar left</a></li>\n                 <li class=\"nav-item\"><a href=\"category-right.html\" class=\"nav-link\">Category - sidebar right</a></li>\n                 <li class=\"nav-item\"><a href=\"category-full.html\" class=\"nav-link\">Category - full width</a></li>\n                 <li class=\"nav-item\"><a href=\"detail.html\" class=\"nav-link\">Product detail</a></li>\n               </ul>\n             </div>\n             <div class=\"col-md-6 col-lg-3\">\n               <h5>User</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"register.html\" class=\"nav-link\">Register / login</a></li>\n                 <li class=\"nav-item\"><a href=\"customer-orders.html\" class=\"nav-link\">Orders history</a></li>\n                 <li class=\"nav-item\"><a href=\"customer-order.html\" class=\"nav-link\">Order history detail</a></li>\n                 <li class=\"nav-item\"><a href=\"customer-wishlist.html\" class=\"nav-link\">Wishlist</a></li>\n                 <li class=\"nav-item\"><a href=\"customer-account.html\" class=\"nav-link\">Customer account / change password</a></li>\n               </ul>\n             </div>\n             <div class=\"col-md-6 col-lg-3\">\n               <h5>Order process</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"basket.html\" class=\"nav-link\">Shopping cart</a></li>\n                 <li class=\"nav-item\"><a href=\"checkout1.html\" class=\"nav-link\">Checkout - step 1</a></li>\n                 <li class=\"nav-item\"><a href=\"checkout2.html\" class=\"nav-link\">Checkout - step 2</a></li>\n                 <li class=\"nav-item\"><a href=\"checkout3.html\" class=\"nav-link\">Checkout - step 3</a></li>\n                 <li class=\"nav-item\"><a href=\"checkout4.html\" class=\"nav-link\">Checkout - step 4</a></li>\n               </ul>\n             </div>\n             <div class=\"col-md-6 col-lg-3\">\n               <h5>Pages and blog</h5>\n               <ul class=\"list-unstyled mb-3\">\n                 <li class=\"nav-item\"><a href=\"blog.html\" class=\"nav-link\">Blog listing</a></li>\n                 <li class=\"nav-item\"><a href=\"post.html\" class=\"nav-link\">Blog Post</a></li>\n                 <li class=\"nav-item\"><a href=\"faq.html\" class=\"nav-link\">FAQ</a></li>\n                 <li class=\"nav-item\"><a href=\"text.html\" class=\"nav-link\">Text page</a></li>\n                 <li class=\"nav-item\"><a href=\"text-right.html\" class=\"nav-link\">Text page - right sidebar</a></li>\n                 <li class=\"nav-item\"><a href=\"404.html\" class=\"nav-link\">404 page</a></li>\n                 <li class=\"nav-item\"><a href=\"contact.html\" class=\"nav-link\">Contact</a></li>\n               </ul>\n             </div>\n           </div>\n         </li>\n       </ul>\n     </li>\n    -->\n</ul>\n   <div class=\"navbar-buttons d-flex justify-content-end\">\n     <!-- /.nav-collapse-->\n     <div id=\"search-not-mobile\" class=\"navbar-collapse collapse\"></div><a data-toggle=\"collapse\" href=\"#search\" class=\"btn navbar-btn btn-primary d-none d-lg-inline-block\"><span class=\"sr-only\">Toggle search</span><i class=\"fa fa-search\"></i></a>\n     <div id=\"basket-overview\" class=\"navbar-collapse collapse d-none d-lg-block\"><a href=\"\" routerLink=\"cart\" class=\"btn btn-primary navbar-btn\"><i class=\"fa fa-shopping-cart\"></i><span>3 items in cart</span></a></div>\n   </div>\n </div>\n</div>\n</nav>\n<div id=\"search\" class=\"collapse\">\n<div class=\"container\">\n <form role=\"search\" class=\"ml-auto\">\n   <div class=\"input-group\">\n     <input type=\"text\" placeholder=\"Search\" class=\"form-control\">\n     <div class=\"input-group-append\">\n       <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\n     </div>\n   </div>\n </form>\n</div>\n</div>\n</header>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, apiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
var apiUrl = '//localhost:8080/api';
//export const apiUrl = '//192.168.1.24:3000/api';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sciens/Desktop/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
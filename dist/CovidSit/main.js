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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <app-header></app-header>\r\n    <app-menu></app-menu>\r\n</body>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #ffe4c1; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CovidSit';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_countup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-countup */ "./node_modules/ngx-countup/fesm5/ngx-countup.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_countup__WEBPACK_IMPORTED_MODULE_4__["CountUpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [
                _services_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"],
                { provide: 'baseURL', useValue: _shared_baseurl__WEBPACK_IMPORTED_MODULE_10__["baseurl"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  \n  <h1 style=\"text-align: center;\">C<img src=\"../../assets/images/cor.png\" alt=\"O\" style=\"width: 2rem; height: 2rem;\">vid-19 Update</h1>\n  <div class=\"circle bg-warning\">    \n    <p class=\"pt-4\">Total Cases</p>\n    <hr>\n    <p style=\"font-size: xx-large;\" [countUp]=\"gconfirm\">0</p>\n  </div>  \n  <br>\n  <div class=\"d-flex justify-content-around\">\n    <div class=\"card\" style=\"background-color: hsl(202, 58%, 44%);\">\n      <span class=\"pt-3\">Active</span>\n      <span class=\"pt-2 aa\" [countUp]=\"gconfirm-grecover-gdeath\">0</span>\n    </div>\n    <div class=\"card\" style=\"background-color: hsl(145, 83%, 40%);\">\n      <span class=\"pt-3\">Recovered</span>\n      <span class=\"pt-2 aa\" [countUp]=\"grecover\">0</span>\n    </div>\n    <div class=\"card\" style=\"background-color: #ff0000a1;\">\n      <span class=\"pt-3\">Deaths</span>\n      <span class=\"pt-2 aa\" [countUp]=\"gdeath\">0</span>\n    </div>        \n  </div>   \n  <!--<p class=\"pt-2\" style=\"text-align: right;\">Last Updated: {{globe.lastUpdate}}</p>-->\n  <br>\n  <div class=\"d-flex justify-content-around flex-wrap\">\n    <div class=\"d-flex\">\n      <div class='box bg-warning'></div>\n      <span class=\"def\"> Confirmed</span>\n    </div>\n    \n    <div class=\"d-flex\">\n      <div class='box' style=\"background-color: hsl(202, 58%, 44%);\"></div>\n      <span class=\"def\"> Active</span>\n    </div>\n    \n    <div class=\"d-flex\">\n      <div class='box' style=\"background-color: hsl(145, 83%, 40%);\"></div>\n      <span class=\"def\"> Recovered</span>\n    </div>\n    <div class=\"d-flex\">\n      <div class='box' style=\"background-color: #ff0000a1;\"></div>\n      <span class=\"def\"> Deaths</span>\n    </div>\n\n  </div>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle {\n  margin: auto;\n  text-align: center;\n  background-color: green;\n  width: 200px;\n  border-radius: 50%;\n  height: 170px;\n  font-size: x-large;\n  font-weight: bold; }\n\n.card {\n  width: 200px;\n  height: 100px;\n  border-radius: 10px; }\n\n.card span {\n  text-align: center;\n  font-size: large;\n  color: white; }\n\n.card .aa {\n  font-size: x-large; }\n\n.box {\n  height: 12px;\n  width: 12px;\n  margin-top: 7px; }\n\n.def {\n  font-family: \"Comic Sans MS\", cursive, sans-serif; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(global) {
        this.global = global;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.global.getglobal()
            .subscribe(function (data) {
            _this.globe = data;
            _this.gconfirm = data.confirmed.value;
            _this.grecover = data.recovered.value;
            _this.gdeath = data.deaths.value;
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n\n  <form [formGroup]=\"form\">\n    \n    <div *ngIf=\"countries\">\n      <label>Select Country: </label>\n      <select class=\"custom-select\" formControlName=\"selectedcountry\">           \n        <option *ngFor=\"let country of countries\" [(ngValue)]=\"country.name\">\n          {{ country.name }}\n        </option>\n      </select>\n    </div>\n\n    <div *ngIf=\"selcountry\">\n      <br>\n      <div class=\"confirm progress-bar bg-warning\" [countUp]=\"selcountry.confirmed.value\">0</div>\n      <br>\n      <div class=\"d-flex\">\n        <span class=\"active progress-bar progress-bar-striped progress-bar-animated\" [style.width.%]=\"100*(selcountry.confirmed.value - selcountry.recovered.value - selcountry.deaths.value)/selcountry.confirmed.value\"></span>\n        <span class=\"num\" [countUp]=\"selcountry.confirmed.value - selcountry.recovered.value - selcountry.deaths.value\">0</span>\n      </div>\n      <div class=\"d-flex\">\n        <span class=\"recover progress-bar progress-bar-striped progress-bar-animated\" [style.width.%]=\"(100*selcountry.recovered.value)/selcountry.confirmed.value\"></span>\n        <span class=\"num\" [countUp]=\"selcountry.recovered.value\">0</span>\n      </div>\n      <div class=\"d-flex\">\n        <span class=\"death progress-bar progress-bar-striped progress-bar-animated\" [style.width.%]=\"(100*selcountry.deaths.value)/selcountry.confirmed.value\"></span>\n        <span class=\"num\" [countUp]=\"selcountry.deaths.value\">0</span>\n      </div>\n    </div>\n\n    <div [hidden]=\"countries\">\n      <div class=\"spinner-border text-info\"></div>\n    </div>\n    \n\n    <br><br>\n    <div *ngIf=\"states && states.length>1\">\n      <label>Select Province: </label>\n      <select class=\"custom-select\" formControlName=\"selectedprovince\">           \n        <option *ngFor=\"let state of states\" [(ngValue)]=\"state.uid\">\n          {{ state.provinceState }}\n        </option>\n      </select>\n    </div>\n\n    <div *ngIf=\"stat\">\n      <br>\n      <div class=\"confirm progress-bar bg-warning\" [countUp]=\"stat.confirmed\">0</div>\n      <br>\n      <div class=\"d-flex\">\n        <span class=\"active progress-bar progress-bar-striped progress-bar-animated\" [style.width.%]=\"(100*stat.active)/stat.confirmed\"></span>\n        <span class=\"num\" [countUp]=\"stat.active\">0</span>\n      </div>\n      <div class=\"d-flex\">\n        <span class=\"recover progress-bar progress-bar-striped progress-bar-animated\" [style.width.%]=\"(100*stat.recovered)/stat.confirmed\"></span>\n        <span class=\"num\" [countUp]=\"stat.recovered\">0</span>\n      </div>\n      <div class=\"d-flex\">\n        <span class=\"death progress-bar progress-bar-striped progress-bar-animated\" [style.width.%]=\"(100*stat.deaths)/stat.confirmed\"></span>\n        <span class=\"num\" [countUp]=\"stat.deaths\">0</span>\n      </div>      \n      <br><p>Incident Rate: <b>{{stat.incidentRate}}</b> <img src=\"../../assets/images/rate.jpg\" width=\"20\" height=\"20\"></p>\n      <hr>\n      <p style=\"text-align: right;\">Last Updated: {{stat.lastUpdate | date:'medium'}}</p>\n    </div>\n\n    <div *ngIf=\"!states && selcountry\">\n      <div class=\"spinner-border text-info\"></div>\n    </div>    \n  </form>    \n  <br><br><br>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  height: 650px; }\n\n.confirm {\n  width: 100%;\n  height: 45px;\n  color: black;\n  font-size: x-large;\n  font-weight: bold; }\n\n.active {\n  background-color: #2f82b1;\n  height: 30px; }\n\n.recover {\n  background-color: #11bb58;\n  height: 30px; }\n\n.death {\n  background-color: #ff0000a1;\n  height: 30px; }\n\n.num {\n  font-weight: bold;\n  font-size: large; }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_countrylist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/countrylist.service */ "./src/app/services/countrylist.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_statelist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/statelist.service */ "./src/app/services/statelist.service.ts");
/* harmony import */ var _services_countrywise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/countrywise.service */ "./src/app/services/countrywise.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = /** @class */ (function () {
    function MenuComponent(countrylist, statelist, countrywise) {
        this.countrylist = countrylist;
        this.statelist = statelist;
        this.countrywise = countrywise;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            selectedcountry: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedprovince: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countrylist.getcountrylist()
            .subscribe(function (data) {
            _this.countryarr = data;
            _this.countries = _this.countryarr.countries;
        });
        this.form.get("selectedcountry").valueChanges
            .subscribe(function (val) {
            _this.countrywise.getCountryDetails(val)
                .subscribe(function (data) { return _this.selcountry = data; });
            _this.stat = null;
            _this.states = null;
            _this.statelist.getstatelist(val)
                .subscribe(function (data) {
                _this.states = data;
            });
        });
        this.form.get("selectedprovince").valueChanges
            .subscribe(function (val) {
            _this.stat = _this.states.filter(function (item) {
                return item.uid == val;
            })[0];
        });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_countrylist_service__WEBPACK_IMPORTED_MODULE_1__["CountrylistService"], _services_statelist_service__WEBPACK_IMPORTED_MODULE_3__["StatelistService"], _services_countrywise_service__WEBPACK_IMPORTED_MODULE_4__["CountrywiseService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/countrylist.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/countrylist.service.ts ***!
  \*************************************************/
/*! exports provided: CountrylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrylistService", function() { return CountrylistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountrylistService = /** @class */ (function () {
    function CountrylistService(http) {
        this.http = http;
    }
    CountrylistService.prototype.getcountrylist = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseurl"] + '/countries')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (countries) { return countries; }));
    };
    CountrylistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountrylistService);
    return CountrylistService;
}());



/***/ }),

/***/ "./src/app/services/countrywise.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/countrywise.service.ts ***!
  \*************************************************/
/*! exports provided: CountrywiseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrywiseService", function() { return CountrywiseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountrywiseService = /** @class */ (function () {
    function CountrywiseService(http) {
        this.http = http;
    }
    CountrywiseService.prototype.getCountryDetails = function (abcd) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseurl"] + '/countries/' + abcd);
    };
    CountrywiseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountrywiseService);
    return CountrywiseService;
}());



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalService = /** @class */ (function () {
    function GlobalService(http) {
        this.http = http;
    }
    GlobalService.prototype.getglobal = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_1__["baseurl"]);
    };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/services/statelist.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/statelist.service.ts ***!
  \***********************************************/
/*! exports provided: StatelistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatelistService", function() { return StatelistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatelistService = /** @class */ (function () {
    function StatelistService(http) {
        this.http = http;
    }
    StatelistService.prototype.getstatelist = function (abcd) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseurl"] + '/countries/' + abcd + '/confirmed');
    };
    StatelistService.prototype.getstate = function (abcd, uid) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseurl"] + '/countries/' + abcd + '/confirmed/?uid=' + uid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data[0]; }));
    };
    StatelistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StatelistService);
    return StatelistService;
}());



/***/ }),

/***/ "./src/app/shared/baseurl.ts":
/*!***********************************!*\
  !*** ./src/app/shared/baseurl.ts ***!
  \***********************************/
/*! exports provided: baseurl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseurl", function() { return baseurl; });
var baseurl = "https://covid19.mathdro.id/api";


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\FSE\Angular\CovidSit\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
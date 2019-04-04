(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/components/popover/popover.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/popover/popover.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <ion-item>\n      <a routerLink=\"/about\" routerLinkActive=\"active\" (click)=\"close()\"> A propos de l'application</a>\n  </ion-item>\n  <ion-item>\n   <a href='https://www.bm-lyon.fr' (click)=\"close()\" >Visiter le site de la BML</a>\n  </ion-item>\n  <ion-item>\n    <a [routerLink]=\"['/contact']\" routerLinkActive=\"active\" (click)=\"close()\" >Contacter la BML</a>\n  </ion-item>\n\n"

/***/ }),

/***/ "./src/app/components/popover/popover.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popover/popover.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhYmllbi9jb21wYWdub25ibWwvc3JjL2FwcC9jb21wb25lbnRzL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/popover/popover.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popover/popover.component.ts ***!
  \*********************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(pop) {
        this.pop = pop;
    }
    PopoverComponent.prototype.ngOnInit = function () {
    };
    PopoverComponent.prototype.close = function () {
        this.pop.dismiss();
    };
    PopoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__(/*! ./popover.component.html */ "./src/app/components/popover/popover.component.html"),
            styles: [__webpack_require__(/*! ./popover.component.scss */ "./src/app/components/popover/popover.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]])
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/popover/popover.component */ "./src/app/components/popover/popover.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"]],
            entryComponents: [_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"secondary\">   \n      <ion-button icon-only (click)=\"presentPopover($event)\">\n        <ion-icon name=\"more\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title >\n      <img class='logo 'src=\"assets/imgs/logo.png\" > Visites des expos de la BML\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"bckPageLight\">\n  <p class='title-principal big-text '>En ce moment à la BML</p>\n  <ion-row >\n    <ion-col *ngFor=\"let expo of exposNow\">\n      <ion-item  href='/expo/{{expo.slug}}' color=\"none\" lines=\"none\">\n        <ion-card color=\"light\" >\n            <ion-card-content>\n              <img src=\"{{ expo.imageUrl }}\">\n              <ion-card-title class='home-title'>\n                <span class='title-second'>{{ expo.title1 }}</span>\n              </ion-card-title>\n              <p>\n                <span class='title-third' *ngIf=\"expo.title2\">{{ expo.title2 }}</span><br />\n                <span class='home-date'>du {{expo.start | date: \"dd/MM/yyyy\" }} au {{expo.end | date: \"dd/MM/yyyy\" }}<br>{{expo.place}}</span>\n              </p>\n            </ion-card-content>\n        </ion-card>\n      </ion-item>\n      \n    </ion-col>\n  </ion-row>\n\n\n\n  <p *ngIf=\"exposOld.length>0\" class='title-principal big-text'>Expositions passées </p>\n\n  <ion-list *ngIf=\"exposOld.length>0\">\n      <ion-item *ngFor=\"let expo of exposOld\" href='/expo/{{expo.slug}}' color=\"bckPageDark\" >\n        <ion-thumbnail item-start >\n          <img class='fit-thumbnail 'src=\"{{ expo.imageUrl }}\">\n        </ion-thumbnail>\n        <ion-label>\n          <h2 class='title-list'>{{ expo.title1 }}</h2>\n          <p><span class='title-third'>{{ expo.title2 }}</span><br>\n          <span class='home-date'>du {{expo.start | date: \"dd/MM/yyyy\" }} au {{expo.end | date: \"dd/MM/yyyy\" }}</span></p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list ion-label {\n  margin-left: 10px; }\n\nion-item {\n  --inner-padding-end:none;\n  --inner-padding-start:none;\n  --padding-start:none;\n  --padding-end:none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhYmllbi9jb21wYWdub25ibWwvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksd0JBQW9CO0VBQ3BCLDBCQUFzQjtFQUN0QixvQkFBZ0I7RUFDaEIsa0JBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdHtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgfVxufVxuIFxuaW9uLWl0ZW17XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDpub25lO1xuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDpub25lO1xuICAgIC0tcGFkZGluZy1zdGFydDpub25lO1xuICAgIC0tcGFkZGluZy1lbmQ6bm9uZTtcbiAgICBcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_expos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/expos.service */ "./src/app/providers/expos.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/popover/popover.component */ "./src/app/components/popover/popover.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var HomePage = /** @class */ (function () {
    function HomePage(popoverController, expoProvider, router, loadingController) {
        this.popoverController = popoverController;
        this.expoProvider = expoProvider;
        this.router = router;
        this.loadingController = loadingController;
        this.expos = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]();
        this.exposNow = new Array();
        this.exposOld = new Array();
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.goToExpo = function (expo) {
        this.router.navigateByUrl("/expo/" + expo.slug);
    };
    HomePage.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.getExposList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, currentDate, storage;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Chargement des expositions',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        currentDate = new Date();
                        storage = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]();
                        this.expoProvider.getExpos("expos").then(function (data) {
                            var _loop_1 = function (expo) {
                                if (expo.image != "") {
                                    storage.ref().child(expo.image).getDownloadURL().then(function (url) {
                                        expo.imageUrl = url;
                                    });
                                    if (new Date(expo.end) < currentDate) {
                                        _this.exposOld.push(expo);
                                    }
                                    else {
                                        _this.exposNow.push(expo);
                                    }
                                }
                            };
                            //this.expos = data.reverse();
                            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                                var expo = data_1[_i];
                                _loop_1(expo);
                            }
                            _this.exposOld.reverse();
                            _this.exposNow.reverse();
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ngOnInit = function () {
        this.getExposList();
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _providers_expos_service__WEBPACK_IMPORTED_MODULE_2__["ExposService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map
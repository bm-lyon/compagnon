(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-infos-expo-infos-expo-module"],{

/***/ "./src/app/pages/infos-expo/infos-expo.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/infos-expo/infos-expo.module.ts ***!
  \*******************************************************/
/*! exports provided: InfosExpoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosExpoPageModule", function() { return InfosExpoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _infos_expo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infos-expo.page */ "./src/app/pages/infos-expo/infos-expo.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _infos_expo_page__WEBPACK_IMPORTED_MODULE_5__["InfosExpoPage"]
    }
];
var InfosExpoPageModule = /** @class */ (function () {
    function InfosExpoPageModule() {
    }
    InfosExpoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_infos_expo_page__WEBPACK_IMPORTED_MODULE_5__["InfosExpoPage"]]
        })
    ], InfosExpoPageModule);
    return InfosExpoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/infos-expo/infos-expo.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/infos-expo/infos-expo.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n     </ion-buttons>\n    <ion-title >\n      A propos de l'exposition\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class='fond-page' >\n\n  <div class=\"padding\">\n\n    <ion-card *ngIf=\"expo.urlweb\">\n      <ion-item>\n          <ion-icon name=\"eye\" slot=\"start\"></ion-icon>\n          <ion-label>En savoir plus</ion-label>\n      </ion-item>\n\n      <ion-card-content>\n        <div class='site-info'>\n            <p>La Bibliothèque municipale de Lyon propose un site internet dédié à l'exposition {{expo.title1}} </p>\n            <a target=\"blank\" href='{{expo.urlweb}}'><ion-button>Voir le site d'exposition</ion-button></a>\n          </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-item>\n          <ion-icon name=\"information-circle\" slot=\"start\"></ion-icon>\n          <ion-label>Informations pratiques</ion-label>\n        </ion-item>\n      \n        <ion-card-content>\n            <div class='titres-info'>\n              <span class='title-second' *ngIf=\"expo.title1\">{{ expo.title1 }}</span><br />\n              <span class='title-third' *ngIf=\"expo.title2\">{{ expo.title2 }}</span><br />\n            </div>\n\n            <div class='dates-info'>\n              <span *ngIf=\"expo.start\">\n              <strong>du {{expo.start | date: \"dd/MM/yyyy\" }} au {{expo.end | date: \"dd/MM/yyyy\" }}</strong><br>\n              </span>\n              <span *ngIf=\"expo.place\">\n              <strong>{{ expo.place }}</strong>\n              </span>\n            </div>\n            \n            <div class='description-infos'>\n              {{expo.description}}\n            </div>\n\n            <div class='image-infos'>\n                <img src=\"{{ expo.imageUrl }}\" alt=\"Affiche de l'exposition\">\n            </div>\n\n            \n        </ion-card-content>\n      </ion-card>\n\n\n    \n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/infos-expo/infos-expo.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/infos-expo/infos-expo.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description-infos {\n  white-space: pre-line;\n  margin-top: 1.5em;\n  margin-bottom: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhYmllbi9jb21wYWdub25ibWwvc3JjL2FwcC9wYWdlcy9pbmZvcy1leHBvL2luZm9zLWV4cG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCO0VBQ3JCLGtCQUFnQjtFQUNoQixtQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmZvcy1leHBvL2luZm9zLWV4cG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uLWluZm9zIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgbWFyZ2luLXRvcDoxLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOjFlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/infos-expo/infos-expo.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/infos-expo/infos-expo.page.ts ***!
  \*****************************************************/
/*! exports provided: InfosExpoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosExpoPage", function() { return InfosExpoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_expos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/expos.service */ "./src/app/providers/expos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfosExpoPage = /** @class */ (function () {
    function InfosExpoPage(expoProvider) {
        this.expoProvider = expoProvider;
    }
    InfosExpoPage.prototype.ngOnInit = function () {
        this.expo = this.expoProvider.getCurrentExpo();
        //console.log(this.expo);
    };
    InfosExpoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infos-expo',
            template: __webpack_require__(/*! ./infos-expo.page.html */ "./src/app/pages/infos-expo/infos-expo.page.html"),
            styles: [__webpack_require__(/*! ./infos-expo.page.scss */ "./src/app/pages/infos-expo/infos-expo.page.scss")]
        }),
        __metadata("design:paramtypes", [_providers_expos_service__WEBPACK_IMPORTED_MODULE_1__["ExposService"]])
    ], InfosExpoPage);
    return InfosExpoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-infos-expo-infos-expo-module.js.map
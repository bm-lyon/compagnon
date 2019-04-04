(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-expo-view-expo-module"],{

/***/ "./src/app/pages/view-expo/view-expo.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/view-expo/view-expo.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewExpoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewExpoPageModule", function() { return ViewExpoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_expo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-expo */ "./src/app/pages/view-expo/view-expo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _view_expo__WEBPACK_IMPORTED_MODULE_5__["ViewExpoPage"]
    }
];
var ViewExpoPageModule = /** @class */ (function () {
    function ViewExpoPageModule() {
    }
    ViewExpoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_expo__WEBPACK_IMPORTED_MODULE_5__["ViewExpoPage"]]
        })
    ], ViewExpoPageModule);
    return ViewExpoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/view-expo/view-expo.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/view-expo/view-expo.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n\n\n      <ion-title *ngIf=\"expo\">\n          {{ expo.title1 }}\n      </ion-title>\n  \n      <ion-buttons slot=\"primary\" *ngIf=\"expo\">\n        <ion-button icon-only (click)='getInfosExpo(expo)'>\n            <ion-icon name=\"information-circle\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content #pageTop class='fond-page' >\n\n    <ion-slides #slider (ionSlideDidChange)=\"slideChanged()\" class='pageTop'>\n      <ion-slide *ngFor=\"let page of pages\" >\n          \n        <div class='full-width'>\n            <p class='title-principal big-text full-width'>\n\n              \n             {{page.title}}</p> \n              \n          <ion-card class='player-exposition'>\n            <ion-card-content>\n\n              <div class='repereExpo' *ngIf=\"page.road\">\n                  <svg\n                      xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n                      xmlns:cc=\"http://creativecommons.org/ns#\"\n                      xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n                      xmlns:svg=\"http://www.w3.org/2000/svg\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n                      xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n                      height=\"70\"\n                      version=\"1.1\"\n                      viewBox=\"0 0 70 70\"\n                      width=\"70\"\n                      id=\"svg3797\"\n                      sodipodi:docname=\"casque.svg\"\n                      inkscape:version=\"0.92.2 2405546, 2018-03-11\">\n                      <metadata\n                        id=\"metadata3801\">\n  \n                      </metadata>\n                      \n                      <desc\n                        id=\"desc3789\" />\n                      <defs\n                        id=\"defs3791\" />\n                      <g\n                        id=\"miu\"\n                        style=\"fill:none;fill-rule:evenodd;stroke:none;stroke-width:1\"\n                        transform=\"matrix(3.1171032,0,0,3.1595214,-2.4221881,-3.3938184)\">\n                        <g\n                          id=\"Artboard-1\"\n                          transform=\"translate(-395,-587)\">\n                          <g\n                            id=\"slice\"\n                            transform=\"translate(215,119)\" />\n                          <path\n                            d=\"m 400.00366,597.30303 c 0,0 -0.33699,-6.18283 6.99634,-6.18283 7.33333,0 7.01636,6.18283 7.01636,6.18283 v 8.48485 c 0,0 0.15823,1.21212 1.99156,1.21212 1.83333,0 1.99208,-1.21212 1.99208,-1.21212 v -3.76873 c 0,0 0,-1.08666 -1.99208,-1.08666 -0.55833,0 -1.00792,0.17322 -1.00792,0.17322 v -3.80105 c 0,0 0.0293,-7.30466 -8,-7.30466 -8.0293,0 -8,7.30466 -8,7.30466 v 3.83316 c 0,0 -0.49567,-0.17322 -0.97443,-0.17322 C 396,600.9646 396,602.01915 396,602.01915 v 3.76873 c 0,0 0.27669,1.21212 2.02557,1.21212 1.74889,0 1.97809,-1.21212 1.97809,-1.21212 z M 401.5,601 c -0.5,0 -0.5,0.54545 -0.5,0.54545 v 4.9091 c 0,0 0,0.54545 0.5,0.54545 0.5,0 0.5,-0.54545 0.5,-0.54545 v -4.9091 c 0,0 0,-0.54545 -0.5,-0.54545 z m 11,0 c -0.5,0 -0.5,0.54545 -0.5,0.54545 v 4.9091 c 0,0 0,0.54545 0.5,0.54545 0.5,0 0.5,-0.54545 0.5,-0.54545 v -4.9091 c 0,0 0,-0.54545 -0.5,-0.54545 z\"\n                            id=\"device-headphone-music-mp3-glyph\"\n                            inkscape:connector-curvature=\"0\"\n                            style=\"fill:#000000\" />\n                        </g>\n                      </g>\n                      <text\n                        xml:space=\"preserve\"\n                        style=\"font-style:normal;font-weight:normal;font-size:86.23456573px;line-height:1.25;font-family:sans-serif;text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2.15586329\"\n                        x=\"36.327782\"\n                        y=\"38.30389\"\n                        id=\"text3805\"\n                        transform=\"scale(0.96499789,1.0362717)\"><tspan\n                          sodipodi:role=\"line\"\n                          id=\"tspan3803\"\n                          x=\"36.327782\"\n                          y=\"38.30389\"\n                          style=\"font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:28.7448597px;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;stroke-width:2.15586329\">{{ page.road }}</tspan></text>\n                    </svg>\n                    <p class='texteRepere'>Aller au repère {{ page.road }}</p>\n            </div>\n\n            <p class='ecouterPresentation' *ngIf=\"page.mp3\">Écouter la présentation <span *ngIf=\"duration\"> ({{ duration }})</span></p>\n              <div class=\"player-speech player-expo\" *ngIf=\"page.mp3\">\n                <ion-button (click)=\"play()\" *ngIf=\"sound == 'play'\"><ion-icon name='play-circle'></ion-icon> lecture</ion-button>\n                <ion-button (click)=\"stop()\" *ngIf=\"sound == 'stop'\"><ion-icon name='pause'></ion-icon> pause</ion-button>\n                <span *ngIf=\"loaderSound\"><ion-spinner name=\"lines-small\"></ion-spinner> chargement ...</span>\n              </div>\n              <div class=\"player-speech navigation-expo\">\n                <ion-button (click)=\"prevRoom()\" fill=\"outline\" *ngIf=\"prevStep == true\"><ion-icon name='arrow-round-back'></ion-icon>  Précédent</ion-button>\n                <ion-button (click)=\"nextRoom()\" fill=\"outline\" *ngIf=\"nextStep == true\"> Suivant <ion-icon name='arrow-round-forward'></ion-icon></ion-button>\n              </div>\n            </ion-card-content>\n          </ion-card>\n  \n  \n          <div class=\"image-presentation\" *ngIf=\"page.image\">\n              <img  class='content-image' src='{{page.image}}' class='center' />\n          </div>\n  \n          <ion-grid>\n            <ion-row align-items-center>\n              <ion-col   size-md='10' offset-md='1' >\n                <div class='content-text padding' [innerHTML]='page.description'></div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          \n\n        </div>\n  \n      </ion-slide>\n    </ion-slides>\n  \n  </ion-content>\n  \n  <ion-footer *ngIf=\"currentIndex\">\n    <ion-toolbar color=\"bckdTitlePrinc\">\n      <ion-title  class='center'>{{currentIndex}}/{{ totalPages }}</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/view-expo/view-expo.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/view-expo/view-expo.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-text {\n  text-align: left;\n  padding: 1em;\n  white-space: pre-line; }\n\nimg.content-image {\n  width: 100%;\n  height: auto; }\n\n.numeroPtRepere {\n  font-size: 0.8em;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  padding-top: 4px;\n  border: 2px solid white;\n  color: white;\n  display: inline-block; }\n\n.ecouterPresentation {\n  font-size: 1.3em; }\n\n.texteRepere {\n  font-size: 1.1em; }\n\n.repereExpo {\n  margin-bottom: 2em; }\n\n.player-expo {\n  font-size: 1.3em;\n  margin-bottom: 1.7em; }\n"

/***/ }),

/***/ "./src/app/pages/view-expo/view-expo.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/view-expo/view-expo.ts ***!
  \**********************************************/
/*! exports provided: ViewExpoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewExpoPage", function() { return ViewExpoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_expos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/expos.service */ "./src/app/providers/expos.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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




//import {Slides} from "@ionic/angular";

//import { LoadingController,Content } from '@ionic/angular';


var ViewExpoPage = /** @class */ (function () {
    /*
    @ViewChild(Slides)slides:Slides;
    @ViewChild('pageTop') pageTop: Content;
    */
    function ViewExpoPage(activatedRoute, expoProvider, media, loadingController, router) {
        this.activatedRoute = activatedRoute;
        this.expoProvider = expoProvider;
        this.media = media;
        this.loadingController = loadingController;
        this.router = router;
        this.slug = '';
        this.totalPages = 0;
        this.currentIndex = 1;
        this.pages = new Array();
        this.urlMp3 = "";
        this.isPlaying = false;
        this.sound = 'play';
        this.nextStep = true;
        this.prevStep = false;
        this.duration = "";
        this.loaderSound = false;
    }
    ViewExpoPage.prototype.ngOnInit = function () {
        this.slug = this.activatedRoute.snapshot.params['slug'];
        this.getExpo();
        this.nextStep = true;
    };
    ViewExpoPage.prototype.ngOnDestroy = function () {
        this.unload();
    };
    ViewExpoPage.prototype.getExpo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, storage;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Chargement en cours ...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        storage = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]();
                        this.expoProvider.getOneExpo(this.slug).then(function (data) {
                            _this.expo = data;
                        })
                            .then(function () {
                            storage.ref().child(_this.expo.image).getDownloadURL().then(function (url) {
                                _this.expo.imageUrl = url;
                            });
                        })
                            .then(function () {
                            _this.expoProvider.getPages(_this.expo).then(function (data) {
                                _this.totalPages = data.length;
                                _this.pages = data;
                                //pour chaque page on genere l'url de l'image et du mp3
                                _this.pages.forEach(function (page) {
                                    if (page.image) {
                                        storage.ref().child(page.image).getDownloadURL().then(function (url) {
                                            page.image = url;
                                        });
                                    }
                                    var selfthis = _this;
                                    if (page.mp3) {
                                        storage.ref().child(page.mp3).getDownloadURL().then(function (url) {
                                            page.mp3 = url;
                                            selfthis.loadFirstSlide();
                                        });
                                    }
                                });
                            }).then(function () {
                                //Enleve le loading
                                _this.expoProvider.setCurrentExpo(_this.expo);
                                loading.dismiss();
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewExpoPage.prototype.loadFirstSlide = function () {
        //Load les infos de la premiere page
        this.currentIndex = 1;
        this.loadMp3();
    };
    ViewExpoPage.prototype.slideChanged = function () {
        var _this = this;
        this.unload();
        this.pageTop.scrollToTop();
        this.slider.getActiveIndex().then(function (res) {
            _this.currentIndex = res + 1;
            if (_this.currentIndex > _this.totalPages) {
                _this.currentIndex = _this.totalPages;
            }
            if (_this.currentIndex >= _this.totalPages) {
                _this.nextStep = false;
            }
            else {
                _this.nextStep = true;
            }
            if (_this.currentIndex <= 1) {
                _this.prevStep = false;
            }
            else {
                _this.prevStep = true;
            }
            _this.loadMp3();
        });
    };
    ViewExpoPage.prototype.loadMp3 = function () {
        this.unload();
        if (typeof this.pages[this.currentIndex - 1].mp3 !== "undefined") {
            this.urlMp3 = this.pages[this.currentIndex - 1].mp3;
            var fichier = this.media.create(this.urlMp3);
            this.file = fichier;
            var counter = 0;
            var self = this;
            var timerDur = setInterval(function () {
                counter = counter + 100;
                if (counter > 3000) {
                    clearInterval(timerDur);
                }
                var dur = self.file.getDuration();
                if (dur > 0) {
                    clearInterval(timerDur);
                    self.duration = self.secondsToHms(dur);
                }
            }, 100);
        }
    };
    ViewExpoPage.prototype.secondsToHms = function (d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        var mDisplay = m > 0 ? m + (m == 1 ? " min" : " mins") : "";
        if (m > 0) {
            var sDisplay = s > 0 ? " " + s.toString() : "";
        }
        else {
            var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " secs") : "";
        }
        return mDisplay + sDisplay;
    };
    ViewExpoPage.prototype.nextRoom = function () {
        var _this = this;
        this.slider.getActiveIndex().then(function (res) {
            _this.slider.slideTo(res + 1, 300);
        });
    };
    ViewExpoPage.prototype.prevRoom = function () {
        var _this = this;
        this.slider.getActiveIndex().then(function (res) {
            _this.slider.slideTo(res - 1, 300);
        });
    };
    ViewExpoPage.prototype.play = function () {
        if (this.isPlaying == false) {
            this.loaderSound = true;
            this.file.play();
            console.log(this.file);
            this.isPlaying = true;
            this.sound = 'stop';
            var self = this;
            setInterval(function () {
                self.file.getCurrentPosition().then(function (position) {
                    if (position > 1) {
                        //console.log((position) + " sec");
                        self.loaderSound = false;
                    }
                }, 
                // error callback
                function (e) {
                    //console.log("Error getting pos=" + e);
                });
            }, 100);
        }
    };
    ViewExpoPage.prototype.stop = function () {
        if (this.file) {
            this.file.pause();
            this.isPlaying = false;
            this.sound = 'play';
            this.urlMp3 = "";
            this.loaderSound = false;
            //delete this.file;
        }
    };
    ViewExpoPage.prototype.unload = function () {
        if (this.file) {
            this.file.stop();
            this.file.release();
            this.isPlaying = false;
            this.sound = 'play';
            this.urlMp3 = "";
            this.loaderSound = false;
            console.log("Destruction du fichier");
        }
    };
    ViewExpoPage.prototype.getInfosExpo = function (expo) {
        this.unload();
        this.router.navigateByUrl("/expo/" + expo.slug + "/about");
    };
    ViewExpoPage.prototype.ionViewCanLeave = function () {
        this.unload();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("slider"),
        __metadata("design:type", Object)
    ], ViewExpoPage.prototype, "slider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pageTop'),
        __metadata("design:type", Object)
    ], ViewExpoPage.prototype, "pageTop", void 0);
    ViewExpoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-expo',
            template: __webpack_require__(/*! ./view-expo.page.html */ "./src/app/pages/view-expo/view-expo.page.html"),
            styles: [__webpack_require__(/*! ./view-expo.page.scss */ "./src/app/pages/view-expo/view-expo.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _providers_expos_service__WEBPACK_IMPORTED_MODULE_2__["ExposService"],
            _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__["Media"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewExpoPage);
    return ViewExpoPage;
}());



/***/ })

}]);
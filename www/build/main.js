webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Trang chủ\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="wrapper">\n\n        <page-header></page-header>\n\n        \n\n        <div>\n\n          <img src="/assets/images/banner.jpg" alt="" />\n\n        </div>\n\n\n\n        <page-footer></page-footer>\n\n    </div>\n\n</ion-content>\n\n<ion-footer padding>\n\n  <p>This is footer</p>\n\n</ion-footer>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__muahoasession_muahoasession__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_post_user_post_user__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, postUser, toastCtrl, alertCtrl, navCtrl, navParams, loadingCtrl) {
        this.formBuilder = formBuilder;
        this.postUser = postUser;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.isShowInfo = false;
        this.serverTokenUserInfo = [
            { image: "https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg", name: "Nguyen Van Dinh" }
        ];
        this.myFromGroup = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
        });
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.callRegister = function () {
        //console.log("goi dang ky")
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        //console.log("goi dang nhap");
        //gui lenh login 
        var loading = this.loadingCtrl.create({
            content: 'Saving user info...'
        });
        loading.present();
        this.postUser.login(this.myFromGroup.value)
            .then(function (data) {
            loading.dismiss();
            _this.alertCtrl.create({
                title: 'Login status',
                subTitle: data.message,
                buttons: ['OK']
            }).present();
            if (data.status == "ok") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__muahoasession_muahoasession__["a" /* MuahoasessionPage */]);
            }
            else {
                _this.navCtrl.setRoot(LoginPage_1);
            }
        })
            .catch(function (err) {
            loading.dismiss();
            _this.toastCtrl.create({
                message: "result: " + JSON.stringify(err),
                duration: 5000,
                position: 'bottom'
            }).present();
        });
    };
    LoginPage.prototype.callLogout = function () {
        var _this = this;
        //console.log("goi dang xuat");
        var loading = this.loadingCtrl.create({
            content: 'Saving user info...'
        });
        loading.present();
        this.postUser.logout(this.myFromGroup.value)
            .then(function (data) {
            loading.dismiss();
            _this.alertCtrl.create({
                title: 'Logout status',
                subTitle: data.message,
                buttons: ['OK']
            }).present();
            if (data.status == "ok") {
                _this.isShowInfo = false;
            }
            else {
                alert("Logout khong thanh cong!");
            }
        })
            .catch(function (err) {
            loading.dismiss();
            _this.toastCtrl.create({
                message: "result: " + JSON.stringify(err),
                duration: 5000,
                position: 'bottom'
            }).present();
        });
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-header></page-header>\n\n  <form (ngSubmit)="onSubmit()" [formGroup]="myFromGroup" *ngIf="!(isShowInfo)">\n\n    <ion-card col-12 col-xl-4 col-lg-6 col-sm-12>\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input type="text" formControlName="username"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="myFromGroup.controls.username.invalid && myFromGroup.controls.username.touched">\n\n        <span class="error">This form is invalid</span>\n\n      </p>\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="myFromGroup.controls.password.invalid && myFromGroup.controls.password.touched">\n\n        <span class="error">This form is invalid</span>\n\n      </p>\n\n      <ion-row no-padding>\n\n\n\n        <ion-col>\n\n          <ion-buttons start>\n\n            <button ion-button type="button" icon-end round (click)="callRegister()">\n\n              Đăng ký\n\n              <ion-icon name="contact" ios="ios-contact" md="md-contact"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n        <ion-col text-right>\n\n          <ion-buttons start>\n\n            <button ion-button type="submit" icon-end round [disabled]="myFromGroup.invalid">\n\n              Đăng nhập\n\n              <ion-icon name="share-alt"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n  </form>\n\n  <page-footer></page-footer>\n\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_post_user_post_user__["a" /* PostUserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostUserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostUserProvider = /** @class */ (function () {
    function PostUserProvider(http) {
        this.http = http;
    }
    PostUserProvider.prototype.register = function (value) {
        var url = 'https://dinh-server.herokuapp.com/signup';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    PostUserProvider.prototype.login = function (value) {
        var url = 'https://dinh-server.herokuapp.com/login';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    PostUserProvider.prototype.logout = function (value) {
        var url = 'https://dinh-server.herokuapp.com/logout';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    PostUserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PostUserProvider);
    return PostUserProvider;
}());

//# sourceMappingURL=post-user.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubePage = /** @class */ (function () {
    function YoutubePage(sanitizer, navCtrl, navParams) {
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.url = "https://www.youtube.com/embed/nKWwIuwdBGg";
        this.list = [1, 2, 3, 4, 5];
    }
    YoutubePage.prototype.onClick = function () {
        alert("click me!");
    };
    YoutubePage.prototype.getPhim = function (i) {
        switch (i) {
            case 1:
                this.url = "https://www.youtube.com/embed/BSrWy-8-XBw";
                break;
            case 2:
                this.url = "https://www.youtube.com/embed/BSrWy-8-XBw";
                break;
            case 3:
                this.url = "https://www.youtube.com/embed/BSrWy-8-XBw";
                break;
            case 4:
                this.url = "https://www.youtube.com/embed/BSrWy-8-XBw";
                break;
            case 5:
                this.url = "https://www.youtube.com/embed/BSrWy-8-XBw";
                break;
            default:
        }
    };
    YoutubePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-youtube',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\youtube\youtube.html"*/'<!DOCTYPE html>\n\n<html>\n\n\n\n<body>\n\n    <div class="wrapper">\n\n        <page-header></page-header>\n\n\n\n        <!-- begin content -->\n\n        <div id="content">\n\n            <div class="content-left fl">\n\n                <h3>Học tiếng Anh qua phim</h3>\n\n                <ul>\n\n                    <li *ngFor="let i of list">\n\n                        <a ion-button (click)="getPhim(i)">Học tiếng Anh (Tap {{ i }})</a>\n\n                    </li>\n\n                </ul>\n\n            </div>\n\n            <div class="content-right fr">\n\n                <h3>Học tiếng Anh qua phim Extra</h3>\n\n                <div class="main-content">\n\n                    <div id="video-youtube">\n\n                        <iframe width="670" height="377" [src]="sanitizer.bypassSecurityTrustResourceUrl(url)"\n\n                            frameborder="0" allowfullscreen></iframe>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="clr"></div>\n\n        </div>\n\n        <!-- end content -->\n\n\n\n        <page-footer></page-footer>\n\n    </div>\n\n</body>\n\n</html>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\youtube\youtube.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], YoutubePage);
    return YoutubePage;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyout_buyout__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopPage = /** @class */ (function () {
    function ShopPage(navCtrl, httpClient, navParams) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.navParams = navParams;
    }
    ShopPage.prototype.ionViewDidLoad = function () {
        this.listHoa = this.httpClient.get('https://dinh-server.herokuapp.com/hoa')
            .map(function (res) { return res['results']; });
    };
    ShopPage.prototype.Buy = function (hoa) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__buyout_buyout__["a" /* BuyoutPage */], hoa);
    };
    ShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shop',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\shop\shop.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>shop</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-header></page-header>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col *ngFor="let objHoa of listHoa | async">\n\n        <ion-card>\n\n          <h4>Ten hoa: {{ objHoa.ten }}</h4>\n\n          <img [src]="objHoa.anh" />\n\n          <p>Gia ban: {{ objHoa.gia }}</p>\n\n          <button ion-button color="secondary" (click)="Buy(objHoa)">Chọn hoa này</button>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n  <page-footer></page-footer>\n\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\shop\shop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ShopPage);
    return ShopPage;
}());

//# sourceMappingURL=shop.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuyoutPage = /** @class */ (function () {
    function BuyoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuyoutPage.prototype.ngOnInit = function () {
        this.hoa = this.navParams.data;
    };
    BuyoutPage.prototype.muaHoa = function (hoa) {
        alert("Chuc mung ban da mua thanh cong " + hoa.ten);
        this.navCtrl.pop();
    };
    BuyoutPage.prototype.goHome = function () {
        this.navCtrl.popToRoot();
    };
    BuyoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buyout',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\buyout\buyout.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>buyout</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <img [src]="hoa.anh" [alt]="hoa.anh" id="hoa-detail">\n\n    <h2>Ten hoa: {{ hoa.ten }}</h2>\n\n    <p>Gia ban: {{ hoa.gia }}</p>\n\n    <button ion-button color="secondary" (click)="muaHoa(hoa)">Mua</button>\n\n    <button ion-button color="danger" (click)="goHome()">Tro ve trang chu</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\buyout\buyout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BuyoutPage);
    return BuyoutPage;
}());

//# sourceMappingURL=buyout.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HocvienPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_get_hoc_vien_get_hoc_vien__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_hv_detail_hv__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HocvienPage = /** @class */ (function () {
    function HocvienPage(navCtrl, navParams, hocVienService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hocVienService = hocVienService;
        this.alertCtrl = alertCtrl;
        this.arHocVien = [];
        this.arHocVien1 = [];
        this.isShow = true;
        this.isShowDel = false;
        this.isShowEdit = false;
        this.i = 3;
    }
    HocvienPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.hocVienService.getHocVien()
            .then(function (hocvien) {
            _this.arHocVien = hocvien;
            for (var i = 0; i < 3; i++) {
                _this.arHocVien1.push(_this.arHocVien[i]);
            }
            _this.isLoading = false;
        })
            .catch(function (err) { return console.log(err); });
    };
    HocvienPage.prototype.addHocVien = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Them hoc vien',
            inputs: [
                {
                    name: 'ten',
                    placeholder: 'Ten hoc vien'
                },
                {
                    name: 'gioiTinh',
                    placeholder: 'Giới tính'
                },
                {
                    name: 'toan',
                    placeholder: 'Điểm Toán'
                },
                {
                    name: 'ly',
                    placeholder: 'Điểm Lý'
                },
                {
                    name: 'hoa',
                    placeholder: 'Điểm Hóa'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Khong them nua ak?');
                    }
                },
                {
                    text: 'Them',
                    handler: function (data) {
                        var id = _this.arHocVien1.length + 1;
                        var ten = data.ten;
                        var gioiTinh = (data.gioiTinh.toUpperCase() == "nam".toUpperCase());
                        var toan = data.toan;
                        var ly = data.ly;
                        var hoa = data.hoa;
                        var hocvien = { id: id, ten: ten, gioiTinh: gioiTinh, toan: toan, ly: ly, hoa: hoa };
                        _this.arHocVien1.unshift(hocvien);
                        console.log("Da them thanh cong!");
                    }
                }
            ]
        });
        alert.present();
    };
    HocvienPage.prototype.deleteHV = function (id) {
        var index = this.arHocVien1.findIndex(function (e) { return e.id == id; });
        this.arHocVien1.splice(index, 1);
        alert("Da xoa thanh cong!");
    };
    HocvienPage.prototype.editHV = function (id) {
        var _this = this;
        var index = this.arHocVien1.findIndex(function (e) { return e.id == id; });
        var hocvienEdit = this.arHocVien1[index];
        var alert = this.alertCtrl.create({
            title: 'Sua hoc vien',
            inputs: [
                {
                    name: 'ten',
                    value: hocvienEdit.ten,
                },
                {
                    name: 'gioiTinh',
                    value: hocvienEdit.gioiTinh ? "Nam" : "Nu",
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Khong sua nua ak?');
                    }
                },
                {
                    text: 'Sua',
                    handler: function (data) {
                        var ten = data.ten;
                        var gioiTinh = (data.gioiTinh.toUpperCase() == "nam".toUpperCase());
                        _this.arHocVien1[index].ten = ten;
                        _this.arHocVien1[index].gioiTinh = gioiTinh;
                        console.log("Da sua thanh cong!");
                    }
                }
            ]
        });
        alert.present();
    };
    HocvienPage.prototype.reorderItems = function (indexes) {
        var element = this.arHocVien1[indexes.from];
        this.arHocVien1.splice(indexes.from, 1);
        this.arHocVien1.splice(indexes.to, 0, element);
    };
    HocvienPage.prototype.doRefresh = function (refresher) {
        this.arHocVien1.sort(function (a, b) {
            return b.id - a.id;
        });
        setTimeout(function () {
            refresher.complete();
        }, 500);
    };
    HocvienPage.prototype.doInfinite = function (event) {
        var _this = this;
        if (this.i > this.arHocVien.length - 1) {
            alert("Het du lieu de tai!");
        }
        else {
            setTimeout(function () {
                _this.arHocVien1.push(_this.arHocVien[_this.i++]);
                event.complete();
            }, 500);
        }
    };
    HocvienPage.prototype.detailHV = function (hocvien) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_hv_detail_hv__["a" /* DetailHvPage */], hocvien);
    };
    HocvienPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hocvien',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\hocvien\hocvien.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>hocvien</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <page-header></page-header>\n\n  <ng-container>\n\n    <h3>{{ isLoading?"Đang tải dữ liệu...":""}}</h3>\n\n    <ion-list>\n\n      <div *ngIf="!isLoading">\n\n        <div *ngIf="isShow">\n\n          <button ion-button color="secondary" (click)="addHocVien()">Thêm</button>\n\n          <button ion-button (click)="isShowEdit=!isShowEdit; isShow=!isShow">Sửa</button>\n\n          <button ion-button color="dark" (click)="isShowDel=!isShowDel; isShow=!isShow">Xóa</button>\n\n        </div>\n\n        <button ion-button color="danger" (click)="isShowDel=!isShowDel; isShow = !isShow" *ngIf="isShowDel">Xoa xong</button>\n\n        <button ion-button color="danger" (click)="isShowEdit=!isShowEdit; isShow = !isShow" *ngIf="isShowEdit">Sua xong</button>\n\n        <ion-list-header>{{ !isLoading?"THÔNG TIN HỌC VIÊN":""}}</ion-list-header>\n\n        <ion-item-group reorder="true" (ionItemReorder)="reorderItems($event)">\n\n          <ion-item *ngFor="let hocvien of arHocVien1">\n\n            <ion-card>\n\n              <ion-card-header>\n\n                Thông tin của học viên thứ {{ hocvien.id }}\n\n              </ion-card-header>\n\n              <ion-card-content>\n\n                <p>Ma hoc vien: {{ hocvien.id }}</p>\n\n                <h1>Ten hoc vien: {{ hocvien.ten }}</h1>\n\n                <h3>Gioi tinh: {{ hocvien.gioiTinh?"Nam": "Nu" }}</h3>\n\n                <button ion-button (click)="detailHV(hocvien)">Chi tiết</button>\n\n              </ion-card-content>\n\n            </ion-card>\n\n            <button ion-button (click)="editHV(hocvien.id)" *ngIf="isShowEdit">Sua</button>\n\n            <button ion-button color="danger" (click)="deleteHV(hocvien.id)" *ngIf="isShowDel">Xoa</button>\n\n          </ion-item>\n\n        </ion-item-group>\n\n      </div>\n\n    </ion-list>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n\n        refreshingText="Refreshing...">\n\n      </ion-refresher-content>\n\n    </ion-refresher>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n  </ng-container>\n\n  <page-footer></page-footer>\n\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\hocvien\hocvien.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_get_hoc_vien_get_hoc_vien__["a" /* GetHocVienProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HocvienPage);
    return HocvienPage;
}());

//# sourceMappingURL=hocvien.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetHocVienProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetHocVienProvider = /** @class */ (function () {
    function GetHocVienProvider(http) {
        this.http = http;
    }
    GetHocVienProvider.prototype.getHocVien = function () {
        var url = 'https://dinh-server.herokuapp.com/hocvien-ionic';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res; });
    };
    GetHocVienProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GetHocVienProvider);
    return GetHocVienProvider;
}());

//# sourceMappingURL=get-hoc-vien.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailHvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailHvPage = /** @class */ (function () {
    function DetailHvPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hocvien = {};
    }
    DetailHvPage.prototype.ionViewDidLoad = function () {
        this.hocvien = this.navParams.data;
    };
    DetailHvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-hv',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\detail-hv\detail-hv.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>detailHV</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Thông tin của học viên {{ hocvien.ten }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>Ma hoc vien: {{ hocvien.id }}</p>\n\n      <p>Toán: {{ hocvien.toan }}</p>\n\n      <p>Lý: {{ hocvien.ly }}</p>\n\n      <p>Hóa: {{ hocvien.hoa }}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\detail-hv\detail-hv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailHvPage);
    return DetailHvPage;
}());

//# sourceMappingURL=detail-hv.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_post_user_post_user__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, loadingCtrl, alertCtrl, toastCtrl, formBuilder, postUser) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.postUser = postUser;
        this.isImageViewer = false;
        this.resourceImages = [];
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.myFromGroup = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, (__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3))]]
        });
    };
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        //gui lenh login 
        var loading = this.loadingCtrl.create({
            content: 'Saving user info...'
        });
        loading.present();
        this.postUser.register(this.myFromGroup.value)
            .then(function (data) {
            loading.dismiss();
            _this.alertCtrl.create({
                title: 'Register status',
                subTitle: data.message,
                buttons: ['OK']
            }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        })
            .catch(function (err) {
            loading.dismiss();
            _this.toastCtrl.create({
                message: "result: " + JSON.stringify(err),
                duration: 5000,
                position: 'bottom'
            }).present();
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Register form\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form (ngSubmit)="onSubmit()" [formGroup]="myFromGroup">\n\n    <ion-card col-12 col-xl-4 col-lg-6 col-sm-12>\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input type="text" formControlName="username"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="myFromGroup.controls.username.invalid && myFromGroup.controls.username.touched">\n\n          <span class="error">This form is invalid</span>\n\n        </p>\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="myFromGroup.controls.password.invalid && myFromGroup.controls.password.touched">\n\n        <span class="error">This form is invalid</span>\n\n      </p>\n\n      <ion-row no-padding>\n\n\n\n        <ion-col text-right>\n\n          <ion-buttons start>\n\n            <button [disabled]="myFromGroup.invalid" ion-button type="submit" icon-end round>\n\n              Đăng ký\n\n              <ion-icon name="share-alt"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_post_user_post_user__["a" /* PostUserProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuahoasessionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xemhoasession_xemhoasession__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MuahoasessionPage = /** @class */ (function () {
    function MuahoasessionPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.listHoa = [];
    }
    MuahoasessionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MuahoasessionPage');
    };
    MuahoasessionPage.prototype.onSubmit = function (muaHoaForm) {
        var hoa = { id: muaHoaForm.value.id, ten: muaHoaForm.value.ten, soluong: muaHoaForm.value.soluong, gia: muaHoaForm.value.gia };
        this.listHoa.push(hoa);
        var value = JSON.stringify(this.listHoa);
        sessionStorage.setItem("listHoa", value);
        var alert = this.alertCtrl.create({
            title: 'Trạng thái mua',
            subTitle: 'Mua thành công!',
            buttons: ['OK']
        });
        alert.present();
    };
    MuahoasessionPage.prototype.xemDanhSach = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__xemhoasession_xemhoasession__["a" /* XemhoasessionPage */]);
    };
    MuahoasessionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-muahoasession',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\muahoasession\muahoasession.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>muahoasession</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form (submit)="onSubmit(muaHoaForm)" #muaHoaForm="ngForm">\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>ID</ion-label>\n\n      <ion-input placeholder="ID" name="id" #txtId="ngModel" ngModel required></ion-input>\n\n    </ion-item>\n\n    <span class="error" *ngIf="txtId.touched && txtId?.errors?.required">Yeu cau nhap!</span>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Ten</ion-label>\n\n      <ion-input placeholder="Ten" name="ten" #txtTen="ngModel" ngModel required></ion-input>\n\n    </ion-item>\n\n    <span class="error" *ngIf="txtTen.touched && txtTen?.errors?.required">Yeu cau nhap!</span>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>So Luong</ion-label>\n\n      <ion-input placeholder="So Luong" name="soluong" #txtSoLuong="ngModel" ngModel required></ion-input>\n\n    </ion-item>\n\n    <span class="error" *ngIf="txtSoLuong.touched && txtSoLuong?.errors?.required">Yeu cau nhap!</span>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Gia</ion-label>\n\n      <ion-input placeholder="Gia" name="gia" #txtGia="ngModel" ngModel required></ion-input>\n\n    </ion-item>\n\n    <span class="error" *ngIf="txtGia.touched && txtGia?.errors?.required">Yeu cau nhap!</span>\n\n    <ion-item>\n\n      <ion-input [disabled]="muaHoaForm.invalid" type="submit" value="Mua hoa"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button ion-button (click)="xemDanhSach()">Xem danh sach hoa</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\muahoasession\muahoasession.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MuahoasessionPage);
    return MuahoasessionPage;
}());

//# sourceMappingURL=muahoasession.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XemhoasessionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var XemhoasessionPage = /** @class */ (function () {
    function XemhoasessionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listHoa = [];
    }
    XemhoasessionPage.prototype.ionViewDidLoad = function () {
        var value = sessionStorage.getItem('listHoa');
        this.listHoa = JSON.parse(value);
        sessionStorage.clear();
    };
    XemhoasessionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-xemhoasession',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\xemhoasession\xemhoasession.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>xemhoasession</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let hoa of listHoa">\n\n    <ion-card-header>\n\n      Ten: {{hoa.ten}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-item>\n\n        So luong: {{ hoa.soluong }}\n\n      </ion-item>\n\n      <ion-item>\n\n        Gia ban: {{ hoa.gia }}\n\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\xemhoasession\xemhoasession.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], XemhoasessionPage);
    return XemhoasessionPage;
}());

//# sourceMappingURL=xemhoasession.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_youtube_youtube__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shop_shop__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_buyout_buyout__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_header_header__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_footer_footer__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_hocvien_hocvien__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detail_hv_detail_hv__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_muahoasession_muahoasession__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_xemhoasession_xemhoasession__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_get_hoc_vien_get_hoc_vien__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_post_user_post_user__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_youtube_youtube__["a" /* YoutubePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shop_shop__["a" /* ShopPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_buyout_buyout__["a" /* BuyoutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_footer_footer__["a" /* FooterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hocvien_hocvien__["a" /* HocvienPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detail_hv_detail_hv__["a" /* DetailHvPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_muahoasession_muahoasession__["a" /* MuahoasessionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_xemhoasession_xemhoasession__["a" /* XemhoasessionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_youtube_youtube__["a" /* YoutubePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shop_shop__["a" /* ShopPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_buyout_buyout__["a" /* BuyoutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_footer_footer__["a" /* FooterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hocvien_hocvien__["a" /* HocvienPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detail_hv_detail_hv__["a" /* DetailHvPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_muahoasession_muahoasession__["a" /* MuahoasessionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_xemhoasession_xemhoasession__["a" /* XemhoasessionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_get_hoc_vien_get_hoc_vien__["a" /* GetHocVienProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_post_user_post_user__["a" /* PostUserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MyApp = /** @class */ (function () {
    function MyApp() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\app\app.html"*/
        })
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__youtube_youtube__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shop_shop__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hocvien_hocvien__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderPage = /** @class */ (function () {
    function HeaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeaderPage');
    };
    HeaderPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HeaderPage.prototype.xemPhim = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__youtube_youtube__["a" /* YoutubePage */]);
    };
    HeaderPage.prototype.shop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__shop_shop__["a" /* ShopPage */]);
    };
    HeaderPage.prototype.hocVien = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__hocvien_hocvien__["a" /* HocvienPage */]);
    };
    HeaderPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-header',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\header\header.html"*/'<div id="header">\n\n    <div class="header-left fl">\n\n        <a href="index.html" title=""><img src="/assets/images/logo_edu.png" alt="" /></a>\n\n    </div>\n\n    <div class="header-right fr">\n\n        <a href="index.html" title=""><img src="/assets/images/banner.jpg" alt="" /></a>\n\n    </div>\n\n    <div class="clr"></div>\n\n</div>\n\n<div id="menu">\n\n    <ul>\n\n        <li class="active"><a href="javascript: void(0)" title="" (click)="home()">Trang chủ</a></li>\n\n        <li><a href="javascript: void(0)" title="" (click)="shop()">SHOP</a></li>\n\n        <li><a href="javascript: void(0)" title="" (click)="xemPhim()">Phim</a></li>\n\n        <li><a href="javascript: void(0)" title="" (click)="hocVien()">Hoc vien</a></li>\n\n        <li><a href="javascript: void(0)" title="" (click)="login()">Login</a></li>\n\n    </ul>\n\n    <div class="clr"></div>\n\n</div>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\header\header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterPage = /** @class */ (function () {
    function FooterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FooterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-footer',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\footer\footer.html"*/'<div id="footer">\n\n    <p>Trung tâm đào tạo Lập trình VinaEnter EDU</p>\n\n    <p>Copyright &copy 2016 - Designed by <a href="" title="">VinaEnter</a></p>\n\n</div>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-app\src\pages\footer\footer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FooterPage);
    return FooterPage;
}());

//# sourceMappingURL=footer.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map
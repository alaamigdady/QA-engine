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

/***/ "./src/app/admin.component.html":
/*!**************************************!*\
  !*** ./src/app/admin.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"app\">\n    <header class=\"app-header\">\n        \n        \n        <div *ngFor=\"let question of questions ;let index = index\">\n        \t<p>{{question.name}} : {{question.question}}</p>\n            <input [(ngModel)] =\"question.answer\" /> \n            <button (click)= \"answerQ(question.qid,question.answer)\"> ANSWER </button> \n        </div>\n\n        <a [routerLink] = \"['/']\"><button>log out</button></a>\n\n  \n\n    </header>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin.component.ts":
/*!************************************!*\
  !*** ./src/app/admin.component.ts ***!
  \************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(app, router) {
        this.app = app;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.getAllQuestions().subscribe(function (data) { _this.questions = data; }, function (err) { console.log('error'); });
    };
    AdminComponent.prototype.answerQ = function (id, ans) {
        var _this = this;
        this.app.answer({ "answer": ans, "id": id }).subscribe(function (data) {
            if (data) {
                console.log('done');
                _this.app.getAllQuestions().subscribe(function (data) { _this.questions = data; }, function (err) { console.log('error'); });
                // this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
                // this.router.navigate(["/admin"])); 
            }
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["appService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n text-align: center;\n}\n\n.app-header {\n background-color: #0A6610;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\ncolor: white;\n}\n\n.button{\n    margin: 30px;\n}\n\n.input{\n margin: 200px;\n font-size : 20px;}\n\n.inputp{\n margin:200px;\nfont-size : 20px;}\n\n.b{\n      margin: 200px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQywwQkFBMEI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qiw4QkFBOEI7QUFDaEMsYUFBYTtDQUNaOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFDRDtDQUNDLGNBQWM7Q0FDZCxpQkFBaUIsQ0FBQzs7QUFDbkI7Q0FDQyxhQUFhO0FBQ2QsaUJBQWlCLENBQUM7O0FBQ2xCO01BQ00sY0FBYztHQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gYmFja2dyb3VuZC1jb2xvcjogIzBBNjYxMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IGNhbGMoMTBweCArIDJ2bWluKTtcbmNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbntcbiAgICBtYXJnaW46IDMwcHg7XG59XG4uaW5wdXR7XG4gbWFyZ2luOiAyMDBweDtcbiBmb250LXNpemUgOiAyMHB4O31cbi5pbnB1dHB7XG4gbWFyZ2luOjIwMHB4O1xuZm9udC1zaXplIDogMjBweDt9XG4uYntcbiAgICAgIG1hcmdpbjogMjAwcHg7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n\n  <router-outlet></router-outlet>\n</div>\n"

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


Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main.component */ "./src/app/main.component.ts");
/* harmony import */ var _sign_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign.component */ "./src/app/sign.component.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', component: _main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"] },
    { path: 'signUp', component: _sign_component__WEBPACK_IMPORTED_MODULE_8__["SignComponent"] },
    { path: 'profile', component: _profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: 'admin', component: _admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _sign_component__WEBPACK_IMPORTED_MODULE_8__["SignComponent"], _profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], _admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_5__["appService"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: appService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appService", function() { return appService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var appService = /** @class */ (function () {
    function appService(http) {
        this.http = http;
        this.userSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('default');
        this.currentUser = this.userSource.asObservable();
    }
    appService.prototype.logIn = function (user, password) {
        return this.http.get('/users/' + user + '/' + password, { responseType: 'text' });
    };
    appService.prototype.signUp = function (params) {
        return this.http.post('/users', params, { responseType: 'text' });
    };
    appService.prototype.getAllAnswers = function () {
        return this.http.get('/questions/true');
    };
    appService.prototype.getAllQuestions = function () {
        return this.http.get('/questions/false');
    };
    appService.prototype.answer = function (params) {
        return this.http.post('/questions/answer', params, { responseType: 'text' });
    };
    appService.prototype.ask = function (params) {
        return this.http.post('/questions/ask', params, { responseType: 'text' });
    };
    appService.prototype.changeUser = function (user) {
        this.userSource.next(user);
    };
    appService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], appService);
    return appService;
}());



/***/ }),

/***/ "./src/app/main.component.html":
/*!*************************************!*\
  !*** ./src/app/main.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"app\">\n    <header class=\"app-header\">\n        <h2> WELCOME</h2>\n        <br>\n        <br>\n        <br>\n        <div>\n        <input [(ngModel)] =\"userName\" placeholder=\"user name\" />  \n        <input [(ngModel)] =\"passWord\"  placeholder=\"pass word\" type=\"password\" />    \n        \t<br>\n        \t<br>\n        \t<br>\n        <button (click) = \"logIn()\" class=\"button\">log in</button>\n        </div>\n\n        <a [routerLink] = \"['/signUp']\"><button class=\"button\">sign Up</button></a>\n\n\n  \n\n    </header>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main.component.ts":
/*!***********************************!*\
  !*** ./src/app/main.component.ts ***!
  \***********************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(app, router) {
        this.app = app;
        this.router = router;
    }
    MainComponent.prototype.logIn = function () {
        var _this = this;
        this.app.changeUser(this.userName);
        this.app.logIn(this.userName, this.passWord).subscribe(function (data) {
            if (data === 'ok') {
                _this.router.navigate(['/profile']);
            }
            else if (data === 'admin') {
                _this.router.navigate(['/admin']);
            }
            else {
                alert(data);
            }
        });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["appService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/profile.component.html":
/*!****************************************!*\
  !*** ./src/app/profile.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"app\">\n    <header class=\"app-header\">\n        <h2> WELCOME {{userName}}</h2>\n        <div>\n        <p>Ask a question</p>\n        <input [(ngModel)] =\"question\" /> \n        <button (click)= \"ask()\"> ASK </button> \n    \t</div>\n        \n        <div *ngFor=\"let answer of answers\">\n            <p>{{answer.name}} : {{answer.question}}</p>\n            <p>admin :  {{answer.answer}}</p>\n        </div>\n\n\n        <a [routerLink] = \"['/']\"><button>log out</button></a>\n\n  \n\n    </header>\n</div>\n\n"

/***/ }),

/***/ "./src/app/profile.component.ts":
/*!**************************************!*\
  !*** ./src/app/profile.component.ts ***!
  \**************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(app, router) {
        this.app = app;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.currentUser.subscribe(function (userName) { return _this.userName = userName; });
        this.app.getAllAnswers().subscribe(function (data) { _this.answers = data; }, function (err) { console.log('error'); });
    };
    ProfileComponent.prototype.ask = function () {
        var _this = this;
        this.app.ask({ "question": this.question, "user": this.userName }).subscribe(function (data) {
            if (data) {
                console.log('done');
                _this.question = '';
                //  		this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
                // this.router.navigate(["/profile"])); 
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["appService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/sign.component.html":
/*!*************************************!*\
  !*** ./src/app/sign.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"app\">\n    <header class=\"app-header\">\n\n    \t<div>\n        <input [(ngModel)] =\"userName\" placeholder=\"user name\" />  \n        <input [(ngModel)] =\"password\"  placeholder=\"pass word\" type=\"password\" />    \n<br>\n<br>\n<br>\n\n        <button (click) = \"signUp()\" class=\"button\">sign Up</button>\n</div>\n\n\n    </header>\n</div>\n\n"

/***/ }),

/***/ "./src/app/sign.component.ts":
/*!***********************************!*\
  !*** ./src/app/sign.component.ts ***!
  \***********************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignComponent = /** @class */ (function () {
    function SignComponent(app, router) {
        this.app = app;
        this.router = router;
    }
    SignComponent.prototype.signUp = function () {
        var _this = this;
        this.app.changeUser(this.userName);
        this.app.signUp({ "userName": this.userName, "password": this.password }).subscribe(function (data) {
            if (data === 'ok') {
                _this.router.navigate(['/profile']);
            }
            else {
                alert(data);
            }
        });
    };
    SignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'signUp',
            template: __webpack_require__(/*! ./sign.component.html */ "./src/app/sign.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["appService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignComponent);
    return SignComponent;
}());



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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hamzah/Desktop/QA-engine/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
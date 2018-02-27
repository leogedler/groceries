"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_service_1 = require("./../../shared/shared.service");
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var page_1 = require("ui/page");
var WebviewComponent = /** @class */ (function () {
    function WebviewComponent(sharedService, page) {
        this.sharedService = sharedService;
        this.page = page;
        this.url = '';
    }
    WebviewComponent.prototype.ngOnInit = function () {
        this.url = this.sharedService.pageUrl;
        console.log('URL', this.url);
        this.page.backgroundImage = "res://bg_login";
    };
    WebviewComponent.prototype.webViewLoaded = function (args) {
        var webview = this.pageWebView.nativeElement;
        if (platform_1.isAndroid) {
            webview.android.getSettings().setDisplayZoomControls(false);
        }
    };
    __decorate([
        core_1.ViewChild('pageWebView'),
        __metadata("design:type", core_1.ElementRef)
    ], WebviewComponent.prototype, "pageWebView", void 0);
    WebviewComponent = __decorate([
        core_1.Component({
            selector: 'webviewComponet',
            templateUrl: 'pages/webview/webview.html'
        }),
        __metadata("design:paramtypes", [shared_service_1.SharedService, page_1.Page])
    ], WebviewComponent);
    return WebviewComponent;
}());
exports.WebviewComponent = WebviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdFQUE4RDtBQUM5RCxzQ0FBeUU7QUFDekUsc0RBQXFEO0FBRXJELGdDQUErQjtBQU0vQjtJQUlJLDBCQUFvQixhQUE0QixFQUFhLElBQVU7UUFBbkQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBYSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSHZFLFFBQUcsR0FBVSxFQUFFLENBQUM7SUFHeUQsQ0FBQztJQUUxRSxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDakQsQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDdEQsRUFBRSxDQUFBLENBQUMsb0JBQVMsQ0FBQyxDQUFBLENBQUM7WUFDVixPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLENBQUM7SUFDTCxDQUFDO0lBZnlCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFjLGlCQUFVO3lEQUFDO0lBRnpDLGdCQUFnQjtRQUo1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNEJBQTRCO1NBQzVDLENBQUM7eUNBS3FDLDhCQUFhLEVBQW1CLFdBQUk7T0FKOUQsZ0JBQWdCLENBa0I1QjtJQUFELHVCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3NoYXJlZC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIlxuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd3ZWJ2aWV3Q29tcG9uZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvd2Vidmlldy93ZWJ2aWV3Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFdlYnZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVybDpzdHJpbmcgPSAnJztcbiAgICBAVmlld0NoaWxkKCdwYWdlV2ViVmlldycpIHBhZ2VXZWJWaWV3OiBFbGVtZW50UmVmO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZSwgICAgcHJpdmF0ZSBwYWdlOiBQYWdlKXt9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnVybCA9IHRoaXMuc2hhcmVkU2VydmljZS5wYWdlVXJsO1xuICAgICAgICBjb25zb2xlLmxvZygnVVJMJywgdGhpcy51cmwpO1xuICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19sb2dpblwiO1xuICAgIH1cblxuICAgIHdlYlZpZXdMb2FkZWQoYXJncyl7XG4gICAgICAgIGxldCB3ZWJ2aWV3ID0gPFdlYlZpZXc+dGhpcy5wYWdlV2ViVmlldy5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpZihpc0FuZHJvaWQpe1xuICAgICAgICAgICAgd2Vidmlldy5hbmRyb2lkLmdldFNldHRpbmdzKCkuc2V0RGlzcGxheVpvb21Db250cm9scyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19
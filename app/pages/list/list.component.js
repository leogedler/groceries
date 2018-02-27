"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var SocialShare = require("nativescript-social-share");
var shared_service_1 = require("../../shared/shared.service");
var router_1 = require("@angular/router");
var ListComponent = /** @class */ (function () {
    function ListComponent(groceryListService, zone, sharedService, router) {
        this.groceryListService = groceryListService;
        this.zone = zone;
        this.sharedService = sharedService;
        this.router = router;
        this.groceryList = [];
        this.grocery = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load().subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    ListComponent.prototype.clickOnItem = function (grocery) {
        console.log('Click on: ', grocery.name);
        this.sharedService.pageUrl = "https://www.google.com/search?q=" + grocery.name;
        this.router.navigate(["/webview"]);
    };
    ListComponent.prototype.delete = function (grocery) {
        var _this = this;
        this.groceryListService.delete(grocery.id)
            .subscribe(function () {
            // Running the array splice in a zone ensures that change detection gets triggered.
            _this.zone.run(function () {
                var index = _this.groceryList.indexOf(grocery);
                _this.groceryList.splice(index, 1);
            });
        });
    };
    ListComponent.prototype.share = function () {
        var listString = this.groceryList
            .map(function (grocery) { return grocery.name; })
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    };
    __decorate([
        core_1.ViewChild('groceryTextField'),
        __metadata("design:type", core_1.ElementRef)
    ], ListComponent.prototype, "groceryTextField", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: 'pages/list/list.html',
            styleUrls: ['pages/list/list-common.css', 'pages/list/list.css'],
            providers: [grocery_list_service_1.GroceryListService]
        }),
        __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService,
            core_1.NgZone,
            shared_service_1.SharedService,
            router_1.Router])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxrRkFBK0U7QUFHL0UsdURBQXdEO0FBQ3hELDhEQUE0RDtBQUM1RCwwQ0FBeUM7QUFTekM7SUFPRSx1QkFDVSxrQkFBc0MsRUFDdEMsSUFBWSxFQUNaLGFBQTRCLEVBQzVCLE1BQWM7UUFIZCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVnhCLGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUNqQyxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBU2EsQ0FBQztJQUUzQixnQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsZUFBMEI7WUFDaEUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLGFBQWE7Z0JBQ2xDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsMkJBQUcsR0FBSDtRQUFBLGlCQXdCQztRQXZCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELHVCQUF1QjtRQUN2QixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN0QyxTQUFTLENBQ1IsVUFBQSxhQUFhO1lBQ1gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUNEO1lBQ0UsS0FBSyxDQUFDO2dCQUNKLE9BQU8sRUFBRSxzREFBc0Q7Z0JBQy9ELFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FDRixDQUFBO0lBQ0wsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxPQUFnQjtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcscUNBQW1DLE9BQU8sQ0FBQyxJQUFNLENBQUM7UUFDL0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBRXBDLENBQUM7SUFHRCw4QkFBTSxHQUFOLFVBQU8sT0FBZ0I7UUFBdkIsaUJBU0M7UUFSQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDdkMsU0FBUyxDQUFDO1lBQ1QsbUZBQW1GO1lBQ25GLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNaLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDOUIsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksRUFBWixDQUFZLENBQUM7YUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLElBQUksRUFBRSxDQUFDO1FBQ1YsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBdkU4QjtRQUE5QixnQkFBUyxDQUFDLGtCQUFrQixDQUFDO2tDQUFtQixpQkFBVTsyREFBQztJQUxqRCxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1lBQ2hFLFNBQVMsRUFBRSxDQUFDLHlDQUFrQixDQUFDO1NBRWxDLENBQUM7eUNBUzhCLHlDQUFrQjtZQUNoQyxhQUFNO1lBQ0csOEJBQWE7WUFDcEIsZUFBTTtPQVhiLGFBQWEsQ0E2RXpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdFRCxJQTZFQztBQTdFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHcm9jZXJ5TGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS1saXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7IFxuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSAnbmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZSdcbmltcG9ydCB7IFNoYXJlZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NoYXJlZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9saXN0L2xpc3QuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3BhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzJywgJ3BhZ2VzL2xpc3QvbGlzdC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5TGlzdFNlcnZpY2VdXG5cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XG4gIGdyb2NlcnlMaXN0OiBBcnJheTxHcm9jZXJ5PiA9IFtdO1xuICBncm9jZXJ5ID0gJyc7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgbGlzdExvYWRlZDogYm9vbGVhbjtcbiAgQFZpZXdDaGlsZCgnZ3JvY2VyeVRleHRGaWVsZCcpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZSxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpLnN1YnNjcmliZSgobG9hZGVkR3JvY2VyaWVzOiBHcm9jZXJ5W10pPT57XG4gICAgICAgICAgbG9hZGVkR3JvY2VyaWVzLmZvckVhY2goKGdyb2NlcnlPYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgIH0pXG4gIH1cblxuICBhZGQoKSB7XG4gICAgaWYgKHRoaXMuZ3JvY2VyeS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xuICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG4gIFxuICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmFkZCh0aGlzLmdyb2NlcnkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBncm9jZXJ5T2JqZWN0ID0+IHtcbiAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICApXG4gIH1cblxuICBjbGlja09uSXRlbShncm9jZXJ5OiBHcm9jZXJ5KXtcbiAgICBjb25zb2xlLmxvZygnQ2xpY2sgb246ICcsIGdyb2NlcnkubmFtZSk7XG4gICAgdGhpcy5zaGFyZWRTZXJ2aWNlLnBhZ2VVcmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT0ke2dyb2NlcnkubmFtZX1gO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWJ2aWV3XCJdKVxuXG4gIH1cblxuXG4gIGRlbGV0ZShncm9jZXJ5OiBHcm9jZXJ5KSB7XG4gICAgdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UuZGVsZXRlKGdyb2NlcnkuaWQpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gUnVubmluZyB0aGUgYXJyYXkgc3BsaWNlIGluIGEgem9uZSBlbnN1cmVzIHRoYXQgY2hhbmdlIGRldGVjdGlvbiBnZXRzIHRyaWdnZXJlZC5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ncm9jZXJ5TGlzdC5pbmRleE9mKGdyb2NlcnkpO1xuICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuICBcblxuICBzaGFyZSgpIHtcbiAgICBsZXQgbGlzdFN0cmluZyA9IHRoaXMuZ3JvY2VyeUxpc3RcbiAgICAgIC5tYXAoZ3JvY2VyeSA9PiBncm9jZXJ5Lm5hbWUpXG4gICAgICAuam9pbihcIiwgXCIpXG4gICAgICAudHJpbSgpO1xuICAgIFNvY2lhbFNoYXJlLnNoYXJlVGV4dChsaXN0U3RyaW5nKTtcbiAgfVxufSJdfQ==
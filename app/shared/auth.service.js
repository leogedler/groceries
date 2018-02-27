"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var application_settings_1 = require("application-settings");
var config_1 = require("./config");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", config_1.Config.authHeader);
        return headers;
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(config_1.Config.apiUrl + "user/" + config_1.Config.appKey, JSON.stringify({
            username: user.email,
            email: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() })
            .catch(this.handleErrors);
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(config_1.Config.apiUrl + "user/" + config_1.Config.appKey + "/login", JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            _this.token = data._kmd.authtoken;
        })
            .catch(this.handleErrors);
    };
    AuthService.prototype.isLoggedIn = function () {
        return !!application_settings_1.getString("token");
    };
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (theToken) {
            application_settings_1.setString("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.logoff = function () {
        this.token = '';
    };
    AuthService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4Q0FBNkM7QUFDN0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsNkRBQTREO0FBRzVELG1DQUFrQztBQUdsQztJQUNFLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFHbEMsc0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDckM7YUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUFoQixpQkFjQztRQWJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsZUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQ2xELElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUNyQzthQUNBLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDbEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0JBQUksOEJBQUs7YUFBVDtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFVLFFBQWdCO1lBQ3hCLGdDQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQUpBO0lBTUQsNEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQTNEVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBRWUsV0FBSTtPQURuQixXQUFXLENBNER2QjtJQUFELGtCQUFDO0NBQUEsQUE1REQsSUE0REM7QUE1RFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuXG4gIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgQ29uZmlnLmF1dGhIZWFkZXIpO1xuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcInVzZXIvXCIgKyBDb25maWcuYXBwS2V5LFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICB9KSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgIClcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgbG9naW4odXNlcjogVXNlcikge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcInVzZXIvXCIgKyBDb25maWcuYXBwS2V5ICsgXCIvbG9naW5cIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICB9KSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgIClcbiAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuZG8oZGF0YSA9PiB7XG4gICAgICB0aGlzLnRva2VuID0gZGF0YS5fa21kLmF1dGh0b2tlblxuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhZ2V0U3RyaW5nKFwidG9rZW5cIik7XG4gIH1cblxuICBnZXQgdG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XG4gIH1cblxuICBzZXQgdG9rZW4odGhlVG9rZW46IHN0cmluZykge1xuICAgIHNldFN0cmluZyhcInRva2VuXCIsIHRoZVRva2VuKTtcbiAgfVxuXG4gIGxvZ29mZigpIHtcbiAgICB0aGlzLnRva2VuID0gJyc7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG59Il19
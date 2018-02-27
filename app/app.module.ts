import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { SharedService } from "./shared/shared.service";
import { AuthService } from "./shared/auth.service";
import { AuthGuard } from "./shared/auth.guard";

@NgModule({
  imports: [
    NativeScriptModule, 
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    SharedService,
    AuthGuard
  ]
})
export class AppModule {}

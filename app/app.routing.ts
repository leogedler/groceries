import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component"
import { WebviewComponent } from "./pages/webview/webview.component";
import { AuthGuard } from "./shared/auth.guard";

export const routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "list", component: ListComponent, canActivate: [AuthGuard] },
  { path: "webview", component: WebviewComponent, canActivate: [AuthGuard] }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  WebviewComponent
];
import { SharedService } from './../../shared/shared.service';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform"
import { WebView } from "tns-core-modules/ui/web-view";
import { Page } from "ui/page";

@Component({
    selector: 'webviewComponet',
    templateUrl: 'pages/webview/webview.html'
})
export class WebviewComponent implements OnInit {
    url:string = '';
    @ViewChild('pageWebView') pageWebView: ElementRef;
    
    constructor(private sharedService: SharedService,    private page: Page){}

    ngOnInit(){
        this.url = this.sharedService.pageUrl;
        console.log('URL', this.url);
        this.page.backgroundImage = "res://bg_login";
    }

    webViewLoaded(args){
        let webview = <WebView>this.pageWebView.nativeElement;
        if(isAndroid){
            webview.android.getSettings().setDisplayZoomControls(false);
        }
    }
}
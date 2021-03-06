import { Component, ViewChild, ElementRef, NgZone} from "@angular/core";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";
import { Grocery } from "../../shared/grocery/grocery";
import { TextField } from 'ui/text-field'; 
import * as SocialShare from 'nativescript-social-share'
import { SharedService } from "../../shared/shared.service";
import { Router } from "@angular/router";

@Component({
    selector: 'list',
    templateUrl: 'pages/list/list.html',
    styleUrls: ['pages/list/list-common.css', 'pages/list/list.css'],
    providers: [GroceryListService]

})
export class ListComponent {
  groceryList: Array<Grocery> = [];
  grocery = '';
  isLoading: boolean;
  listLoaded: boolean;
  @ViewChild('groceryTextField') groceryTextField: ElementRef;

  constructor(
    private groceryListService: GroceryListService,
    private zone: NgZone,
    private sharedService: SharedService,
    private router: Router){}

  ngOnInit() {
      this.isLoading = true;
      this.groceryListService.load().subscribe((loadedGroceries: Grocery[])=>{
          loadedGroceries.forEach((groceryObject) => {
              this.groceryList.unshift(groceryObject);
          });
          this.isLoading = false;
          this.listLoaded = true;
      })
  }

  add() {
    if (this.grocery.trim() === "") {
      alert("Enter a grocery item");
      return;
    }
  
    // Dismiss the keyboard
    let textField = <TextField>this.groceryTextField.nativeElement;
    textField.dismissSoftInput();
  
    this.groceryListService.add(this.grocery)
      .subscribe(
        groceryObject => {
          this.groceryList.unshift(groceryObject);
          this.grocery = "";
        },
        () => {
          alert({
            message: "An error occurred while adding an item to your list.",
            okButtonText: "OK"
          });
          this.grocery = "";
        }
      )
  }

  clickOnItem(grocery: Grocery){
    console.log('Click on: ', grocery.name);
    this.sharedService.pageUrl = `https://www.google.com/search?q=${grocery.name}`;
    this.router.navigate(["/webview"])

  }


  delete(grocery: Grocery) {
    this.groceryListService.delete(grocery.id)
      .subscribe(() => {
        // Running the array splice in a zone ensures that change detection gets triggered.
        this.zone.run(() => {
          let index = this.groceryList.indexOf(grocery);
          this.groceryList.splice(index, 1);
        });
      });
  }
  

  share() {
    let listString = this.groceryList
      .map(grocery => grocery.name)
      .join(", ")
      .trim();
    SocialShare.shareText(listString);
  }
}
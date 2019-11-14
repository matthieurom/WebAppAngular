import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  onHomePage: boolean = true;

  constructor(private router: Router) {
    //
  }

  ngDoCheck() {
    if (this.router.url === "/") {
      this.onHomePage = true;
    }
    if (this.router.url === "/settings") {
      this.onHomePage = false;
    }
  }

  ngOnInit() {}
}

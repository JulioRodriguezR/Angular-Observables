import { Component, OnInit, OnDestroy } from "@angular/core";

import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  secondsCounter = interval(1000);

  private firtsObsSubs: Subscription;

  constructor() {}

  ngOnInit() {
    this.firtsObsSubs = this.secondsCounter.subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    this.firtsObsSubs.unsubscribe();
  }
}

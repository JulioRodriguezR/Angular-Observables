import { Component, OnInit, OnDestroy } from "@angular/core";

import { interval, Subscription, Observable } from "rxjs";

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
    // this.firtsObsSubs = this.secondsCounter.subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObs = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) observer.complete();
        if (count > 3) observer.error(new Error("Error"));
        count++;
      }, 1000);
    });

    this.firtsObsSubs = customIntervalObs.subscribe(
      data => {
        console.log(data);
      },
      err => {
        alert(err.message);
        console.log(err);
      }, () => {
        console.log("Completed");
      }
    );
  }

  ngOnDestroy(): void {
    this.firtsObsSubs.unsubscribe();
  }
}

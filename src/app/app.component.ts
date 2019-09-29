import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  userActivate = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    /* 
      + Configurar oyente
        
        Poder subcribirnos con el servicio del usuario, 
        el activatedEmitter y subscribirnos. Obteniendo nuestra activación.
    */
    this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivate = didActivate;
    });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}

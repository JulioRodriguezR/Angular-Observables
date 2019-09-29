import { Component, OnInit } from "@angular/core";

import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  userActivate = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    /* 
      + Configurar oyente
        
        Poder subcribirnos con el servicio del usuario, 
        el emisor activado y subscribirnos. Obteniendo nuestra activación.
    */
    this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivate = didActivate;
    });
  }
}

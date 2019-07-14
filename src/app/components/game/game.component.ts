import { Component, OnInit } from "@angular/core";
import { SquareComponent } from "../square/square.component";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  squares: SquareComponent[];
  currentTurn: String;
  state: number;

  constructor() {}

  ngOnInit() {
    this.state = 1;
    this.squares = [];
    let w = [2, 7, 6, 9, 5, 1, 4, 3, 8];
    for (let i = 0; i < 9; i++) {
      let s: SquareComponent = new SquareComponent();
      s.mWeight = w[i];
      this.squares.push(s);
    }
  }
}

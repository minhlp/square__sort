import { Component, OnInit } from "@angular/core";
import { SquareService } from "../core/services/square.service";
import { Square } from "../core/models/squared.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-square",
  templateUrl: "./square.component.html",
  styleUrls: ["./square.component.scss"]
})
export class SquareComponent implements OnInit {
  squares: Square[];
  squareFilters: Square[] = [];
  pageIndex = 0;
  pageSize = 10;

  squareSelected: { item: Square; preIndex: number; index: number };
  constructor(private _squareService: SquareService) {}

  ngOnInit() {
    this._squareService
      .getSquares()
      .pipe(map(squares => squares.sort((a, b) => a.clickedNum - b.clickedNum)))
      .subscribe(res => {
        this.squares = res;
        this.squareFilters = this.fetchPage();
      });
  }
  fetchPage() {
    return this.squares.slice(
      this.pageIndex * this.pageSize,
      (this.pageIndex + 1) * this.pageSize
    );
  }
  loadMore(): void {
    this.pageIndex += 1;
    const list = this.fetchPage();
    this.squareFilters.push(...list);
  }
  showMore(index: number): void {
    this.squareFilters[index].clicked();
    const square: Square = this.squareFilters[index];
    this.squareFilters.sort((a, b) =>
      this.sortSquare(a.clickedNum, b.clickedNum)
    );
    const curIndex = this.squareFilters.findIndex(item => item === square);

    this.squareSelected = {
      item: square,
      preIndex: index,
      index: curIndex
    };
  }
  sortSquare(a: number, b: number): number {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  }
}

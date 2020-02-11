export interface ISquare {
  id?: string;
  userId?: string;
  title?: string;
  body?: string;
}
export class Square {
  id: string;
  userId: string;
  title: string;
  body: string;
  clickedNum: number;
  tag: string;
  constructor(data?: ISquare) {
    this.id = data && data.id ? data.id : "";
    this.userId = data && data.userId ? data.userId : "";
    this.title = data && data.title ? data.title : "";
    this.body = data && data.body ? data.body : "";
    this.clickedNum = 0;
    this.tag = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  clicked(): void {
    this.clickedNum += 1;
  }
}

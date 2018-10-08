export class Course {
  name: string;
  department: string;
  number: string;
  display: string;

  constructor(public n: string, public d: string, public num: string) {
    this.name = n;
    this.department = d;
    this.number = num;
    this.display = this.department + this.number + ' (' + this.name + ')';
  }
}
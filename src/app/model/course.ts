export class Course {
  name: string;
  department: string;
  number: string;
  coursename: string;

  constructor(n: string, d: string, num: string, c: string) {
    this.name = n;
    this.department = d;
    this.number = num;
    this.coursename = c;
  }
}

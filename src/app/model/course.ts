export class Course {
  department: string;
  number: string;
  name: string;
  queryString: string;

  constructor(n: string, d: string, num: string, q: string) {
    this.name = n;
    this.department = d;
    this.number = num;
    this.queryString = q;
  }

  getCourseID() {
    return this.department + this.number;
  }

  updateDetails() {
    if (this.queryString !== '') {
      this.name = this.queryString.substr(this.queryString.indexOf(' ') + 1);
      const courseID = this.queryString.substr(0, this.queryString.indexOf(' '));
      const firstDigit = courseID.indexOf(courseID.match(/\d/).toString());
      this.department = courseID.substr(0, firstDigit);
      this.number = courseID.substr(firstDigit);
    }
  }

}

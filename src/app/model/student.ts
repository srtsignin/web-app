import { Course } from './course';

export class Student {
  checkInTime: string;
  courses: Course[];
  name: string;
  problemDescription: string;
  username: string;

  constructor(time: string, c: Course[], n: string, pd: string, u: string) {
    this.checkInTime = new Date(time).toLocaleTimeString();
    this.courses = c;
    this.name = n;
    this.problemDescription = pd;
    this.username = u;
  }

  getCourseIDs() {
    let courses = '';
    for (let i = 0; i < this.courses.length; i++) {
      courses = courses.concat(this.courses[i].getCourseID() + ', ');
    }
    return courses.substring(0, courses.length - 2);
  }
}


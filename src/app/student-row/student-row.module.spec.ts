import { StudentRowModule } from './student-row.module';

describe('StudentRowModule', () => {
  let studentRowModule: StudentRowModule;

  beforeEach(() => {
    studentRowModule = new StudentRowModule();
  });

  it('should create an instance', () => {
    expect(studentRowModule).toBeTruthy();
  });
});

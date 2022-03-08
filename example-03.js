class Student {
  studentId;
  totalCredits;
  courseList;

  constructor(sId) {
    this.studentId = sId;
    this.totalCredits = 0;
    this.courseList = new Vector();
  }

  passCourse(c) {
    this.totalCredits + c.getCredits();
    this.courseList.add(c);
  }
}

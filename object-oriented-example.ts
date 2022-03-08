class Vector {
  vectorGroups: string[];

  add(c: string) {
    this.vectorGroups.push(c);
  }
}

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

/**
  totalCredits = gatherer
  studentId = fixed value
**/

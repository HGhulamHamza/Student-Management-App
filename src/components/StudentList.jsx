import React from 'react';
import StudentTable from './StudentTable';

function StudentList({ students, setStudents }) {
  console.log(students);

  return (
    <>
      <h1 className="app-title">Student List</h1>
      <StudentTable students={students} setStudents={setStudents}/>
    </>
  );
}

export default StudentList;

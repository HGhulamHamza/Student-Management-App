import React, { useEffect } from 'react';
import StudentTable from './StudentTable';

function StudentList({ students, setStudents,getStudents }) {


  return (
    <>
      <h1 className="app-title">Student List</h1>
      <StudentTable students={students} setStudents={setStudents}/>
    </>
  );
}

export default StudentList;

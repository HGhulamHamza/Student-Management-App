import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../FirebaseConfig';

function CreateStudent({ getStudents }) {
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isCreatingStudent, setIsCreatingStudent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsCreatingStudent(true);
      await addDoc(collection(db, 'students'), {
        name: name,
        age: Number(age),
        rollNo: rollNo,
      });
      setName('');
      setAge('');
      setRollNo('');
      setIsCreatingStudent(false);

      await getStudents();
    } catch (error) {
      console.log('Error Creating User: ', error);
      setIsCreatingStudent(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Student Name"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter Student Age"
      />
      <input
        type="number"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        placeholder="Enter Roll Number"
      />
      <button type="submit">
        {isCreatingStudent ? 'Creating ... ' : 'Create Student'}
      </button>
    </form>
  );
}

export default CreateStudent;

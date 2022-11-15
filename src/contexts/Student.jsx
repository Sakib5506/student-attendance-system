import {createContext, useState} from 'react'

export const StudentContext = createContext();


function StudentProvider({children}) {
    const [studentName, setStudentName] = useState('');
    const [allStudentList, setAllStudentList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editable, setEditable] = useState(null);

  return (
    <StudentContext.Provider value = {{studentName, setStudentName, allStudentList, setAllStudentList, editMode, setEditMode, editable, setEditable}}>
        {children}
    </StudentContext.Provider>
  )
}

export default StudentProvider
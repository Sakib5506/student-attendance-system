import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import StudentSection from './components/StudentSection';

function App() {
    const [studentName, setStudentName] = useState('');
    const [allStudentList, setAllStudentList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editable, setEditable] = useState(null);

    return (
        <div className='App'>
            <Form
                editMode={editMode}
                studentName={studentName}
                setAllStudentList={setAllStudentList}
                setStudentName={setStudentName}
                editable={editable}
                setEditMode={setEditMode}
                setEditable={setEditable}
                allStudentList={allStudentList}
            />

            <StudentSection
                editMode={editMode}
                studentName={studentName}
                setAllStudentList={setAllStudentList}
                setStudentName={setStudentName}
                editable={editable}
                setEditMode={setEditMode}
                setEditable={setEditable}
                allStudentList={allStudentList}
            />


        </div>
    )
}

export default App;

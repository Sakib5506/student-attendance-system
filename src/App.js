import './App.css';
import {useState} from 'react';

function App() {
    const [studentName, setStudentName] = useState('');
    const [allStudentList, setAllStudentList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editable, setEditable] = useState(null);

    const studentCreateHandler = (event) =>{
        event.preventDefault();
        if(studentName){
            const newStudent = {
                id: Date.now(),
                name: studentName,
                isPresent: undefined
            }
            setAllStudentList([newStudent, ...allStudentList]);
            setStudentName('');
        }else{
            alert('Please fill the input field');
        }
    }

    const deleteHandler = (studentId) =>{
        setAllStudentList(allStudentList.filter((student) => student.id !== studentId))
    }

    const editHandler = (studentId) =>{
        const tobeEdited = allStudentList.find((student) => student.id === studentId);
        setEditMode(true);
        setEditable(tobeEdited);
        setStudentName(tobeEdited.name);
    }

    const updateHandler = (event) => {
        event.preventDefault();
        if(studentName){
            setAllStudentList(allStudentList.map((student) =>{
                if(student.id === editable.id){
                    student.name = studentName;
                }
                return student;
            }))
            setEditMode(false);
            setEditable(null);
            setStudentName('');
        }else{
            alert('Please fill the input field');
        }
    }

    const presentHandler = (studentId) =>{
        const item = allStudentList.find((student) => student.id === studentId);
        if(item.isPresent === true){
            alert('This student already in the present list');
        }else if(item.isPresent === false){
            alert('This student already in the absent list');
        }else if(item.isPresent === undefined){
            setAllStudentList(allStudentList.map((person) =>{
                if(person.id === studentId){
                    person.isPresent = true;
                }
                return person;
            }))
        }
    }

    const absentHandler = (studentId) =>{
        const item = allStudentList.find((student) => student.id === studentId);
        if(item.isPresent === true){
            alert('This student already in the present list');
        }else if(item.isPresent === false){
            alert('This student already in the absent list');
        }else if(item.isPresent === undefined){
            setAllStudentList(allStudentList.map((person) =>{
                if(person.id === studentId){
                    person.isPresent = false;
                }
                return person;
            }))
        }
    }

    const togglePresent = (studentId) => {
        setAllStudentList(allStudentList.map((student) =>{
            if(student.id === studentId){
                student.isPresent = !student.isPresent;
            }
            return student;
        }))
    }

 return(
    <div className='App'>
        <form action="" onSubmit = {(event) => editMode ? updateHandler(event) : studentCreateHandler(event)} style={{textAlign: 'center', margin: '20px'}}>
            <input type="text" name="" id="" placeholder='Student name' value={studentName} onChange={(event) => setStudentName(event.target.value)} />
            <button type='submit'>{editMode ? 'Update' : 'Add'}</button>
        </form>
        <div className="student-display-list" style={{display: 'flex', justifyContent: 'space-around', border: '1px solid black'}}>
            <div className="all-student" style={{border: '1px solid black', margin: '20px' ,padding: '10px'}}>
                <h2>All Student list</h2>
                {allStudentList.map((student) => (
                        <li>
                            <span>{student.name}</span>
                            <button onClick={() => editHandler(student.id)}>Edit</button>
                            <button onClick={() => deleteHandler(student.id)}>Delete</button>
                            <button onClick={() => presentHandler(student.id)}>Present</button>
                            <button onClick={() => absentHandler(student.id)}>Absent</button>
                        </li>
                    ))
                }
            </div>
            <div className="present-student" style={{border: '1px solid black', margin: '20px' ,padding: '10px'}}>
                <h2>Present Student </h2>
                <ul>
                    {allStudentList.filter(item => item.isPresent === true).map(student=>(
                        <li>
                            <span>{student.name}</span>
                            <button onClick={() => togglePresent(student.id)}>Accidentally Added</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="absent-student" style={{border: '1px solid black' , margin: '20px' ,padding: '10px'}}>
                <h2>Absent Student </h2>
                <ul>
                    {allStudentList.filter(item => item.isPresent === false).map(student => (
                        <li>
                            <span>{student.name}</span>
                            <button onClick={() => togglePresent(student.id)}>Accidentally Added</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
 )
}

export default App;

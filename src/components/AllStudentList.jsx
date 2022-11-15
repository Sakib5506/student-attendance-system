import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'

function AllStudentList() {
    const studentCtx = useContext(StudentContext);
    const deleteHandler = (studentId) =>{
        studentCtx.setAllStudentList(studentCtx.allStudentList.filter((student) => student.id !== studentId))
    }

    const editHandler = (studentId) =>{
        const tobeEdited = studentCtx.allStudentList.find((student) => student.id === studentId);
        studentCtx.setEditMode(true);
        studentCtx.setEditable(tobeEdited);
        studentCtx.setStudentName(tobeEdited.name);
    }

    const presentHandler = (studentId) =>{
        const item = studentCtx.allStudentList.find((student) => student.id === studentId);
        if(item.isPresent === true){
            alert('This student already in the present list');
        }else if(item.isPresent === false){
            alert('This student already in the absent list');
        }else if(item.isPresent === undefined){
            studentCtx.setAllStudentList(studentCtx.allStudentList.map((person) =>{
                if(person.id === studentId){
                    person.isPresent = true;
                }
                return person;
            }))
        }
    }

    const absentHandler = (studentId) =>{
        const item = studentCtx.allStudentList.find((student) => student.id === studentId);
        if(item.isPresent === true){
            alert('This student already in the present list');
        }else if(item.isPresent === false){
            alert('This student already in the absent list');
        }else if(item.isPresent === undefined){
            studentCtx.setAllStudentList(studentCtx.allStudentList.map((person) =>{
                if(person.id === studentId){
                    person.isPresent = false;
                }
                return person;
            }))
        }
    }

    return (
        <div
            className="all-student"
            style={{ border: "1px solid black", margin: "20px", padding: "10px" }}
        >
            <h2>All Student list</h2>
            {studentCtx.allStudentList.map((student) => (
                <li>
                    <span>{student.name}</span>
                    <button onClick={() => editHandler(student.id)}>Edit</button>
                    <button onClick={() => deleteHandler(student.id)}>Delete</button>
                    <button onClick={() => presentHandler(student.id)}>Present</button>
                    <button onClick={() => absentHandler(student.id)}>Absent</button>
                </li>
            ))}
        </div>
    );
}

export default AllStudentList;

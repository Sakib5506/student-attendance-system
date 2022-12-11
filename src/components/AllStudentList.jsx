import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'

function AllStudentList() {
    const {studentStates, dispatch} = useContext(StudentContext);

    return (
        <div
            className="all-student"
            style={{ border: "1px solid black", margin: "20px", padding: "10px" }}
        >
            <h2>All Student list</h2>
            {studentStates.allStudentList.map((student) => (
                <li>
                    <span>{student.name}</span>
                    <button onClick={() => dispatch({type: 'EDIT_STUDENT', payload: student.id})}>Edit</button>
                    <button onClick={() => dispatch({type: 'DELETE_STUDENT', payload: student.id})}>Delete</button>
                    <button onClick={() => dispatch({type: 'SEND_TO_PRESENT_LIST', payload: student.id})}>Present</button>
                    <button onClick={() => dispatch({type: 'SEND_TO_ABSENT_LIST', payload: student.id})}>Absent</button>
                </li>
            ))}
        </div>
    );
}

export default AllStudentList;

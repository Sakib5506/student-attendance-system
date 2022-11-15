import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'

function AbsentStudent(props) {
    const {allStudentList} = useContext(StudentContext);
    return (
        <div className="absent-student" style={{ border: '1px solid black', margin: '20px', padding: '10px' }}>
            <h2>Absent Student </h2>
            <ul>
                {allStudentList.filter(item => item.isPresent === false).map(student => (
                    <li>
                        <span>{student.name}</span>
                        <button onClick={() => props.togglePresent(student.id)}>Accidentally Added</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AbsentStudent
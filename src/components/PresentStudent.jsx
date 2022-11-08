import React from 'react'

function PresentStudent(props) {

    return (
        <div className="present-student" style={{ border: '1px solid black', margin: '20px', padding: '10px' }}>
            <h2>Present Student </h2>
            <ul>
                {props.allStudentList.filter(item => item.isPresent === true).map(student => (
                    <li>
                        <span>{student.name}</span>
                        <button onClick={() => props.togglePresent(student.id)}>Accidentally Added</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PresentStudent
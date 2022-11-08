import React from "react";

function AllStudentList(props) {

    const deleteHandler = (studentId) =>{
        props.setAllStudentList(props.allStudentList.filter((student) => student.id !== studentId))
    }

    const editHandler = (studentId) =>{
        const tobeEdited = props.allStudentList.find((student) => student.id === studentId);
        props.setEditMode(true);
        props.setEditable(tobeEdited);
        props.setStudentName(tobeEdited.name);
    }

    const presentHandler = (studentId) =>{
        const item = props.allStudentList.find((student) => student.id === studentId);
        if(item.isPresent === true){
            alert('This student already in the present list');
        }else if(item.isPresent === false){
            alert('This student already in the absent list');
        }else if(item.isPresent === undefined){
            props.setAllStudentList(props.allStudentList.map((person) =>{
                if(person.id === studentId){
                    person.isPresent = true;
                }
                return person;
            }))
        }
    }

    const absentHandler = (studentId) =>{
        const item = props.allStudentList.find((student) => student.id === studentId);
        if(item.isPresent === true){
            alert('This student already in the present list');
        }else if(item.isPresent === false){
            alert('This student already in the absent list');
        }else if(item.isPresent === undefined){
            props.setAllStudentList(props.allStudentList.map((person) =>{
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
            {props.allStudentList.map((student) => (
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

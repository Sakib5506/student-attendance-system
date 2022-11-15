import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'

import React from 'react'
import AbsentStudent from './AbsentStudent';
import AllStudentList from './AllStudentList';
import PresentStudent from './PresentStudent';
import { createContext } from 'react';

function StudentSection() {

    const studentCtx = useContext(StudentContext);

    const togglePresent = (studentId) => {
        studentCtx.setAllStudentList(studentCtx.allStudentList.map((student) => {
            if (student.id === studentId) {
                student.isPresent = !student.isPresent;
            }
            return student;
        }))
    }

    return (

        <div className="student-display-list" style={{ display: 'flex', justifyContent: 'space-around', border: '1px solid black' }}>
            <AllStudentList
                // editMode={props.editMode}
                // studentName={props.studentName}
                // setAllStudentList={props.setAllStudentList}
                // setStudentName={props.setStudentName}
                // editable={props.editable}
                // setEditMode={props.setEditMode}
                // setEditable={props.setEditable}
                // allStudentList={props.allStudentList}
            />
            <PresentStudent 
                // // allStudentList = {props.allStudentList}
                togglePresent = {togglePresent}
            />
            <AbsentStudent 
                // allStudentList = {props.allStudentList}
                togglePresent = {togglePresent}
            />
        </div>

    )
}

export default StudentSection
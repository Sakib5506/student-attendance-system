import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'

import React from 'react'
import AbsentStudent from './AbsentStudent';
import AllStudentList from './AllStudentList';
import PresentStudent from './PresentStudent';
import { createContext } from 'react';

function StudentSection() {

    return (

        <div className="student-display-list" style={{ display: 'flex', justifyContent: 'space-around', border: '1px solid black' }}>
            <AllStudentList />
            <PresentStudent  />
            <AbsentStudent  />
        </div>

    )
}

export default StudentSection
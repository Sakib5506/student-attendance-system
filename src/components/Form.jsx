import React from 'react'
import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'

function Form() {
    const {studentStates, dispatch} = useContext(StudentContext)
    

  return (
    <form action="" onSubmit = {(event) => {
        event.preventDefault();
        studentStates.editMode ? dispatch({type: 'UPDATE_STUDENT', payload: studentStates.studentName}) : dispatch({type: 'CREATE_STUDENT', payload: studentStates.studentName})
    }} style={{textAlign: 'center', margin: '20px'}}>
            <input type="text" name="" id="" placeholder='Student name' value={studentStates.studentName} 
            onChange={(event) => dispatch({type: 'CHANGE_STUDENT_NAME', payload: event.target.value})} />
            <button type='submit'>{studentStates.editMode ? 'Update' : 'Add'}</button>
        </form>
  )
}

export default Form
import React from 'react'
import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'

function Form() {
    const studentCtx = useContext(StudentContext)
    const studentCreateHandler = (event) =>{
        event.preventDefault();
        if(studentCtx.studentName){
            const newStudent = {
                id: Date.now(),
                name: studentCtx.studentName,
                isPresent: undefined
            }
            studentCtx.setAllStudentList([newStudent, ...studentCtx.allStudentList]);
            studentCtx.setStudentName('');
        }else{
            alert('Please fill the input field');
        }
    }

    const updateHandler = (event) => {
        event.preventDefault();
        if(studentCtx.studentName){
            studentCtx.setAllStudentList(studentCtx.allStudentList.map((student) =>{
                if(student.id === studentCtx.editable.id){
                    student.name = studentCtx.studentName;
                }
                return student;
            }))
            studentCtx.setEditMode(false);
            studentCtx.setEditable(null);
            studentCtx.setStudentName('');
        }else{
            alert('Please fill the input field');
        }
    }

  return (
    <form action="" onSubmit = {(event) => studentCtx.editMode ? updateHandler(event) : studentCreateHandler(event)} style={{textAlign: 'center', margin: '20px'}}>
            <input type="text" name="" id="" placeholder='Student name' value={studentCtx.studentName} onChange={(event) => studentCtx.setStudentName(event.target.value)} />
            <button type='submit'>{studentCtx.editMode ? 'Update' : 'Add'}</button>
        </form>
  )
}

export default Form
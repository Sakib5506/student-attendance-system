import React from 'react'

function Form(props) {
    const studentCreateHandler = (event) =>{
        event.preventDefault();
        if(props.studentName){
            const newStudent = {
                id: Date.now(),
                name: props.studentName,
                isPresent: undefined
            }
            props.setAllStudentList([newStudent, ...props.allStudentList]);
            props.setStudentName('');
        }else{
            alert('Please fill the input field');
        }
    }

    const updateHandler = (event) => {
        event.preventDefault();
        if(props.studentName){
            props.setAllStudentList(props.allStudentList.map((student) =>{
                if(student.id === props.editable.id){
                    student.name = props.studentName;
                }
                return student;
            }))
            props.setEditMode(false);
            props.setEditable(null);
            props.setStudentName('');
        }else{
            alert('Please fill the input field');
        }
    }

  return (
    <form action="" onSubmit = {(event) => props.editMode ? updateHandler(event) : studentCreateHandler(event)} style={{textAlign: 'center', margin: '20px'}}>
            <input type="text" name="" id="" placeholder='Student name' value={props.studentName} onChange={(event) => props.setStudentName(event.target.value)} />
            <button type='submit'>{props.editMode ? 'Update' : 'Add'}</button>
        </form>
  )
}

export default Form
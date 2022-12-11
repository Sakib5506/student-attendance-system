import {createContext, useReducer} from 'react'
import {studentReducer} from '../reducers/studentReducer'

export const StudentContext = createContext();

const initState = {
  studentName: '',
  allStudentList: [],
  editMode: false,
  editable: null
}

function StudentProvider({children}) {
    const [studentStates, dispatch] = useReducer(studentReducer, initState);

  return (
    <StudentContext.Provider value = {{studentStates, dispatch}}>
        {children}
    </StudentContext.Provider>
  )
}

export default StudentProvider
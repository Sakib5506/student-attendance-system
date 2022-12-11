export const studentReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STUDENT_NAME": {
      return {
        ...state,
        studentName: action.payload,
      };
    }

    case "CREATE_STUDENT": {
      const newStudent = {
        id: Date.now(),
        name: action.payload,
        isPresent: undefined,
      };
      return {
        ...state,
        allStudentList: [newStudent, ...state.allStudentList],
        studentName: "",
      };
    }

    case "EDIT_STUDENT": {
      const toBeEdited = state.allStudentList.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        editMode: true,
        editable: toBeEdited,
        studentName: toBeEdited.name,
      };
    }

    case "UPDATE_STUDENT": {
      return {
        ...state,
        allStudentList: state.allStudentList.map((item) => {
          if (item.id === state.editable.id) {
            item.name = action.payload;
          }
          return item;
        }),
        editMode: false,
        editable: null,
        studentName: "",
      };
    }

    case "DELETE_STUDENT": {
      return {
        ...state,
        allStudentList: state.allStudentList.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    case "SEND_TO_PRESENT_LIST": {
      return {
        ...state,
        allStudentList: state.allStudentList.map((item) => {
          if (item.id === action.payload) {
            if (item.isPresent === undefined) {
              item.isPresent = true;
            } else if (item.isPresent === false) {
              alert("This student already in the absent list");
            } else if (item.isPresent === true) {
              alert("This student already in the present list");
            }
          }
          return item;
        }),
      };
    }

    case "SEND_TO_ABSENT_LIST": {
        return {
            ...state,
            allStudentList: state.allStudentList.map((item) => {
              if (item.id === action.payload) {
                if (item.isPresent === undefined) {
                  item.isPresent = false;
                } else if (item.isPresent === false) {
                  alert("This student already in the absent list");
                } else if (item.isPresent === true) {
                  alert("This student already in the present list");
                }
              }
              return item;
            }),
          };
    }

    case "TOGGLE_PRESENT_STATE": {
      return {
        ... state,
        allStudentList: state.allStudentList.map(item => {
            if(item.id === action.payload){
                item.isPresent = !item.isPresent;
            }
            return item;
        })
      };
    }

    default: {
      return state;
    }
  }
};

//User reducer sẽ lưu trữ state của current user

import { UserActionTypes} from './user.types'

const INITIAL_STATE = { //tương tự như this.state
    currentUser: null
}

const userReducer = ( state = INITIAL_STATE, action ) => { //UserReducer là một function chỉ nhận 2 giá trị state và action, state là state trước khi được update
switch (action.type){
    case UserActionTypes.SET_CURRENT_USER: //Kiểm tra nếu action type khớp thì trả về một object mới
        return {
            ...state,
            currentUser: action.payload
        }
    default:
        return state; //Nếu không khớp thì trả về state ban đầu
}
}

export default userReducer
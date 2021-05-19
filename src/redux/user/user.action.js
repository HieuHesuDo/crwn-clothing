//Action creator sẽ trả về một object với type và payload. Type là một trong số những constant ActionTypes mà chúng ta đã tạo ở trên. Payload có thể là bất cứ thứ gì, nó sẽ được sử dụng để thay đổi global state của application.

import { UserActionTypes} from './user.types'

export const setCurrentUser = user => ({ //Nhận vào input là user và trả về một object chứa action type và payload là user đã truyền vào
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})
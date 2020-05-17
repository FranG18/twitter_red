import { SETUSER } from '../actions/userActions'

const initialState = {
    data: false,
    name: '',
    userName: ''
}

function user(state = initialState, action) {
    switch (action.type) {
        case SETUSER:
            return {
                data: true,
                name: action.payload.name,
                userName: action.payload.userName
            }
        default:
            return state
    }
}

export default user
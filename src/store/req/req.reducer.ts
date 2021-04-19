import React from 'react'



interface PostsResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface Action {
    type: string,
    payload?: PostsResponse
}

export  interface State{
    loading?:boolean,
    data: PostsResponse[]
}

const initialState:State = {
    
    data: []
}

export default function (state:State = initialState, action: Action) {
    switch (action.type) {
        case 'DATA_FAIL':
          
            return {loading:false}

        case 'DATA_LOADING':
            return {loading:true}

            case 'DATA_SUCCESS':
                return{loading:false,data:[action.payload]}
        default:
            return state

    }

}


import axios from 'axios'
import { type } from 'node:os'
import { Dispatch } from 'redux'


interface PostsResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}
interface DataLoading {
    type: String
}
interface DataFail {
    type: String

}
interface DataSuccess {
    type: String,
    payload: PostsResponse
}

type DataDispatchTypes = DataLoading | DataFail | DataSuccess

export const GetData = (id: Number) => async (dispatch: Dispatch<DataDispatchTypes>) => {
    try {
        dispatch({
            type: "LOADING_DATA"
        })


        if (id == 0) {

            const res = await axios.get<PostsResponse[]>('https://jsonplaceholder.typicode.com/posts')
            dispatch({
                type: "DATA_SUCCESS",
                payload: res.data
            })
        } else {
            const res = await axios.get<PostsResponse[]>(`https://jsonplaceholder.typicode.com/posts/${id}`)
            dispatch({
                type: "DATA_SUCCESS",
                payload: res.data
            })
        }


    } catch (error) {
        dispatch({
            type: "DATA_FAIL"
        })
    }

}

export const GetDatabyID = (id: Number) => async (dispatch: Dispatch<DataDispatchTypes>) => {
    try {
        dispatch({
            type: "LOADING_DATA"
        })

        const res = await axios.get<PostsResponse[]>(`https://jsonplaceholder.typicode.com/posts/${id}`)

        dispatch({
            type: "DATA_SUCCESS",
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: "DATA_FAIL"
        })
    }

}

export function IdSearch(data: string) {
    return {
        type: 'ID_SEARCH',
        payload: {
            nome: 'LINDO',
            roupa: 'cara'
        }
    }

}


export function AllSearch(data: PostsResponse[]) {
    return {
        type: 'SEARCH_ALL',
        payload: { tudo: data }
    }

}

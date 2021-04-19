import React, { useEffect, useState } from 'react'
import './container.css'
import {AllSearch,IdSearch,GetData} from '../../store/req/req.action'

import {useSelector,useDispatch} from 'react-redux'

import {rootStore} from '../../store/store'

const Container = () => {

const estadoAtual = useSelector((state:rootStore) => state.requisicao)
const dispatch = useDispatch()

useEffect(()=>{console.log(estadoAtual)},[estadoAtual])

const [ID,setID] = useState<Number>(0)

const handleChange = (event:React.ChangeEvent<HTMLInputElement> ) =>{
    setID(Number(event.target.value))
    
}
const handleSubmitAll = () =>{
    dispatch(GetData(0))
}
const handleSubimitId = () =>{
    dispatch(GetData(ID))
}

    return (
        <div className="body">
            <div id="block">
                <button onClick={handleSubmitAll}>Buscar todos</button>
                <button onClick={handleSubimitId}>Buscar id</button>
                <input onChange={handleChange}></input>
            </div>
        </div>
    )
}

export default Container


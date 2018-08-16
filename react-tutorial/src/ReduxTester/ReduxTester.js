import React from 'react';
import { connect } from "react-redux";
import {greeting1,greeting2,greeting3,textChange} from '../actions/testAction'
const mapStateToProps = state =>{
    console.log(state)
    return {
        data :{
             greeting:state.test.greeting
            ,text : state.test.text
        }

    }
}

const mapDispatchToProps = (dispatch) => {
    // return {
    //     destroyTodo: () =>
    //         dispatch(greeting1)
    // }

    return {
        destroyTodo:
            {
                g1:  () => dispatch(greeting1())
                ,g2: () => dispatch(greeting2())
                ,g3: (text) => dispatch(greeting3(text))
                ,text: (event) => dispatch(textChange(event.target.value))
            }

    }
}


const ConnectedReduxTester = ({data,destroyTodo}) => {
    return (
        <div>
            <h1>ReduxTester: {data.greeting}</h1>
            <h1>Text from input: {data.text}</h1>
            <button onClick={destroyTodo.g1}>Change Greeting1</button>
            <button onClick={destroyTodo.g2}>Change Greeting2</button>
            {/*Gibt eine anonyme Funtkion zurück die bei einem Klick die zurückgegebne Funktion ausführt
                - gibt die Funktion der variable destroyTodo.g3 zurück und führt diese mit dem Parameter "Arrow Function Greeting" aus
                - aus Performancegründen sollte man die bind-Variante nehmen.
            */}
            <button onClick={()=>destroyTodo.g3("Arrow Function Greeting")}>Change Greeting3</button>
            <button onClick={destroyTodo.g3.bind(this,"Bind Funtion greeting")}>Change Greeting3</button>
            <br/>
            <input onChange={destroyTodo.text} type="text"/>
        </div>

    )
}

const ReduxTester = connect(mapStateToProps,mapDispatchToProps)(ConnectedReduxTester)

export default ReduxTester;
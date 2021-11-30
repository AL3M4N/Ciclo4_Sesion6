import React, { Fragment, useState, useRef}from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

export function App() {
    //Listas: Estado
    //setListas: Modificador del estado
    const [listas, setListas] = useState([
        { id:1, task:"Tarea 1",completed: false }
    ]);
    //Referencia para obtener a la data ingresada y usarla en el handle
    const taskRef = useRef();

    //Metodo para añadir tareas
    const handleTaskAdd = () => {
        //Funcion flecha
        const task = taskRef.current.value;
        //En caso de que la data sea vacia no realizamos nada
        if (task ==="") return;

        //En caso de recibir informacion, creamos un nuevo elemento y hacemos cambios sobre el estado
        setListas((prevTasks) => {
            return [...prevTasks, {id: uuidv4(), task, completed: false}];
        });
        taskRef.current.value = null;//Limpia el input cuando se añade
    }
    return(
        //Fragment se utiliza como padre para englobar varios elementos
        <Fragment>
            <TodoList listas={listas}/>
            <input ref={taskRef} type="text" placeholder="Tarea Nueva"/>
            <button onClick={handleTaskAdd}>+</button>
            <button>-</button>
        </Fragment>
        );
}


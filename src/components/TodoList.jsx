import React from "react";

export function TodoList({listas}) {
    return (
        <ul>
            {listas.map((lista) => (<li>Tarea</li>))}
        </ul>
    );
}
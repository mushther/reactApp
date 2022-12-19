import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import UpdateTodo from './UpdateTodo'

const AllRouters = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AddTodo />} />
                <Route path="/todolist" element={<TodoList />} />
                <Route path="/updateTodo" element={<UpdateTodo />} />
            </Routes>
        </>
    )
}

export default AllRouters
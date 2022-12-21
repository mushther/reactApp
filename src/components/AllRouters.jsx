import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Accept from './Accept'
import AddTodo from './AddTodo'
import Rejecte from './Rejecte'
import TodoList from './TodoList'
import UpdateTodo from './UpdateTodo'

const AllRouters = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/todoadd" element={<AddTodo />} />
                <Route path="/updateTodo" element={<UpdateTodo />} />
                <Route path="/reject" element={<Rejecte />} />
                <Route path="/accept" element={<Accept />} />
            </Routes>
        </>
    )
}

export default AllRouters
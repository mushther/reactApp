import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import DoctorList from './DoctorList'
import Home from './Home'
import Login from './Login'
import Userlist from './Userlist'

const AllRouting = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/doctorlist' element={<DoctorList />} />
                <Route path='/userlist' element={<Userlist />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default AllRouting
import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcRedo, FcHome } from "react-icons/fc";

const UpdateTodo = () => {
    const [id] = useState(localStorage.getItem("id"))
    const [name, setName] = useState(localStorage.getItem("name"))
    const [email, setEmail] = useState(localStorage.getItem("email"))
    const direct = useNavigate();

    const handleSubmit = (id) => {

        axios.put(`https://employee-database-omega.vercel.app/todos/${id}`, { name: name, email: email })
        direct("/")
    }
    return (
        <>
            <Box w={"80%"} m={"auto"} style={{ border: "1px solid black", padding: "20px", borderRadius: "15px", marginTop: "10px" }}>

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderRadius={20} w={"92%"} bg={"light"}>
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Link to="/">
                            <Button colorScheme='teal'><FcHome size={40} /></Button>
                        </Link>
                        <Heading m={5} size={"md"} style={{ border: "3px solid blue", borderRadius: "10px", padding: "5px" }}>Update Empolyee Details</Heading>
                    </Box>
                    <Link to="/">
                        <Button colorScheme='red'><FcRedo size={40} /></Button>
                    </Link>
                </Box>

                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' placeholder='Email id'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <FormHelperText></FormHelperText>
                    <br />
                    <Button colorScheme='blue' onClick={() => { handleSubmit(id) }}>Update</Button>
                </FormControl>
            </Box>
        </>
    )
}

export default UpdateTodo
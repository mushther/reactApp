import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react';
import { FcHome, FcRedo } from "react-icons/fc"

const AddTodo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const direct = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("chek");
        axios.post("https://employee-database-omega.vercel.app/todos", { name: name, email: email })
        direct("/")
    }
    //console.log(name, email);
    return (
        <>
            <Box w={"80%"} m={"auto"} style={{ border: "1px solid black", padding: "20px", borderRadius: "15px", marginTop: "10px" }}>

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderRadius={20} w={"92%"} bg={"light"}>
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                        <Link to="/">
                            <Button colorScheme='teal'><FcHome size={40} /></Button>
                        </Link>
                        <Heading size={"md"} m={5} style={{ border: "3px solid blue", borderRadius: "10px", padding: "5px" }}>Add Employee Details</Heading>
                    </Box>

                    <Link to="/">
                        <Button colorScheme='red'><FcRedo size={40} /></Button>
                    </Link>
                </Box>

                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' placeholder='Email id' onChange={(e) => setEmail(e.target.value)} />
                    <FormHelperText></FormHelperText>
                    <br />
                    <Button colorScheme='blue' onClick={handleSubmit}>Add</Button>
                </FormControl>
            </Box>
        </>
    )
}

export default AddTodo
import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react';

const AddTodo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const direct = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("chek");
        axios.post("http://localhost:8080/todos", { name: name, email: email })
        direct("/todolist")
    }
    //console.log(name, email);
    return (
        <>
            <Box w={"80%"} m={"auto"} style={{ border: "1px solid black", padding: "20px", borderRadius: "15px", marginTop: "10px" }}>

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderRadius={20} w={"92%"} bg={"light"}>
                    <Heading size={"md"} m={5} style={{ border: "3px solid blue", borderRadius: "10px", padding: "5px" }}>Add Employee Details</Heading>
                    <Link to="/todolist">
                        <Button colorScheme='blue'>Empolyee List</Button>
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
import { Button, Box, Heading, Table, Thead, Tr, Th, Tbody, Td, TableContainer } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserTimes, FaUserCheck, FaUserPlus, FaUserEdit } from "react-icons/fa"
import { FcRedo, FcOk, FcDeleteDatabase } from "react-icons/fc";

const TodoList = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        axios.get("http://localhost:8080/todos")
            .then((res) => {
                // console.log(res.data);
                setData(res.data)
            })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/todos/${id}`).then(() => {
            getData();
        });
    }
    const handleReject = (id, name, email) => {
        axios.post(`http://localhost:8080/reject`, { "name": name, "email": email }).then(() => {
            getData();
        });
        handleDelete(id);
    }
    const handleAccept = (id, name, email) => {
        axios.post(`http://localhost:8080/accept`, { "name": name, "email": email }).then(() => {
            getData();
        });
        handleDelete(id);
    }
    const handleEidit = (el) => {
        localStorage.setItem("id", el.id)
        localStorage.setItem("name", el.name)
        localStorage.setItem("email", el.email)
    }

    useEffect(() => {
        getData()
    }, [])
    //console.log(data);
    return (
        < >
            <Box w={"80%"} h={"auto"} m={"auto"} style={{ border: "1px solid black", borderRadius: "15px", marginTop: "10px" }}>

                <Box style={{ border: "0px solid black", padding: "15px", borderRadius: "14px" }} m={"auto"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"100%"} bg={"skyblue"}>
                    <Box>
                        <Heading size={"md"} style={{ border: "0px solid blue", borderRadius: "10px", padding: "0px" }}>Empolyees List</Heading>
                    </Box>

                    <Box w={"50%"} display={"flex"} justifyContent={"space-around"} >
                        <Link to="/todoadd">
                            <Button colorScheme='teal'>Add Empolyee Details <FaUserPlus /></Button>
                        </Link>
                        <Link to="/reject">
                            <Button colorScheme='teal'>Rejected List <FcDeleteDatabase /></Button>
                        </Link>
                        <Link to="/accept">
                            <Button colorScheme='teal'>Accept List<FcOk /></Button>
                        </Link>
                    </Box>
                </Box>


                <TableContainer>
                    <Table size='sm'>
                        <Thead>
                            <Tr>
                                <Th>S.No</Th>
                                <Th>Name</Th>
                                <Th >Email</Th>
                                <Th >Edit</Th>
                                <Th >Accept</Th>
                                <Th >Reject</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((el) => (
                                <>
                                    <Tr>
                                        <Td>{el.id}</Td>
                                        <Td style={{ textAlign: "start" }}>{el.name}</Td>
                                        <Td style={{ textAlign: "start" }}>{el.email}</Td>
                                        <Td>
                                            <Link to="/updateTodo">
                                                <Button m={5} onClick={() => handleEidit(el)}><FaUserEdit size={40} color='blue' /></Button>
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Button onClick={() => handleAccept(el.id, el.name, el.email)}><FaUserCheck size={40} color='green' /></Button>
                                        </Td>
                                        <Td>
                                            <Button onClick={() => handleReject(el.id, el.name, el.email)}><FaUserTimes size={40} color='red' /></Button>
                                        </Td>
                                    </Tr>
                                </>
                            ))}
                        </Tbody>

                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default TodoList
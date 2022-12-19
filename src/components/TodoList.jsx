import { Button, Box, Heading, Table, Thead, Tr, Th, Tbody, Td, TableContainer } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const TodoList = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        axios.get("http://localhost:8080/todos")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/todos/${id}`).then(() => {
            getData();
        })
    }

    const handleEidit = (el) => {
        localStorage.setItem("id", el.id)
        localStorage.setItem("name", el.name)
        localStorage.setItem("email", el.email)
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(data);
    return (
        < >
            <Box w={"80%"} h={"auto"} m={"auto"} style={{ border: "1px solid black", padding: "20px", borderRadius: "15px", marginTop: "10px" }}>

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderRadius={20} w={"92%"} bg={"light"}>
                    <Heading m={5} size={"md"} style={{ border: "3px solid blue", borderRadius: "10px", padding: "5px" }}>Empolyees List</Heading>
                    <Link to="/">
                        <Button colorScheme='blue'>Add Empolyee Details</Button>
                    </Link>
                </Box>


                <TableContainer>
                    <Table size='sm'>
                        <Thead>
                            <Tr>
                                <Th>S.No</Th>
                                <Th>Name</Th>
                                <Th >Email</Th>
                                <Th >Edit</Th>
                                <Th >Delete</Th>
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
                                                <Button m={5} colorScheme='green' onClick={() => handleEidit(el)}>Edit</Button>
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Button colorScheme='red' onClick={() => handleDelete(el.id)}>Delete</Button>
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
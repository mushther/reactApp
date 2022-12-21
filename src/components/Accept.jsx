import { Box, Button, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcRedo } from "react-icons/fc";

const Accept = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        axios.get("http://localhost:8080/accept")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
    }
    useEffect(() => {
        getData();
    }, []);

    console.log(data);

    return (
        <Box w={"80%"} m={"auto"} style={{ border: "1px solid black", padding: "5px" }}>
            <Box padding={"15px"} m={"auto"} mb={5} display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderRadius={"15px"} w={"100%"} bg={"skyblue"}>
                <Box>
                    <Heading size={"md"} style={{ border: "0px solid blue", borderRadius: "10px", padding: "0px" }}>Empolyees Acceptd List</Heading>
                </Box>
                <Link to="/">
                    <Button colorScheme='red'><FcRedo size={40} /></Button>
                </Link>
            </Box>
            <TableContainer >
                <Table size='sm'>
                    <Thead bg={"orange.300"} >
                        <Tr color={"white"}>
                            <Th>S.No</Th>
                            <Th>Name</Th>
                            <Th >Email</Th>
                        </Tr>
                    </Thead>
                    <Tbody bg={"green.300"}>
                        {data.map((el) => (
                            <>
                                <Tr>
                                    <Td>{el.id}</Td>
                                    <Td style={{ textAlign: "start" }}>{el.name}</Td>
                                    <Td style={{ textAlign: "start" }}>{el.email}</Td>
                                </Tr>
                            </>
                        ))}
                    </Tbody>

                </Table>
            </TableContainer>
        </Box>
    )
}

export default Accept
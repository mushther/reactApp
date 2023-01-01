import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const DoctorList = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get(`https://doctor-appointment-seven.vercel.app/doctor`).then((res) => {
            setData(res.data)
        })
    }
    useEffect(() => {
        getData()

    }, [])
    //console.log(data);
    const handleApntNumber = (appointment) => {
        localStorage.setItem("appointment", appointment)
    }

    return (
        <Box mt={"80px"}>
            {data.map((el) => (
                <Box key={el.id}>
                    <Card
                        padding={5}
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '80%', sm: '200px' }}
                            borderRadius={10}
                            src='https://i.pinimg.com/originals/56/d1/c0/56d1c032884032f4216b9bc790c00a1e.jpg'
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>
                                <Heading textAlign={"start"} size='md'>{el.doctorname}</Heading>
                                <Box display={"flex"} gap={24}>
                                    <Text py='2'>
                                        {el.eduction}
                                    </Text>
                                    <Text py='2'>
                                        Address: {el.address}
                                    </Text>
                                    <Text py='2'>
                                        Fee: ₹ {el.doctorfee}/-
                                    </Text>
                                    <Text py='2'>
                                        Total Book Appointment:  {el.appointment}
                                    </Text>
                                </Box>
                            </CardBody>

                            <CardFooter>
                                <Link to='/bookappointment'>
                                    <Button variant='solid' onClick={() => { handleApntNumber(el.appointment) }} colorScheme='blue'>
                                        Book Appointment
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Box>
            ))}
        </Box>
    )
}
/*
address: "Colony No.4 New Patna"
appointment: 0
doctorfee: "400"
doctorname: "Dr Lalu Baba"
eduction: "MBBS BHMD SDDL from Ukrain"
id:1
**/

export default DoctorList
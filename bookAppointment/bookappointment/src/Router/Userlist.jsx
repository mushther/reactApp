import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'

const Userlist = () => {
    const [data, setData] = useState([])

    const getData = () => {
        axios.get(`https://doctor-appointment-seven.vercel.app/user`).then((res) => {
            setData(res.data);
        })
    }
    useEffect(() => {
        getData();
    }, [])
    // console.log(data);
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
                            src='https://i.pinimg.com/originals/bd/cc/2b/bdcc2b00e20a929d3fab83c87fda9a90.jpg'
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>
                                <Heading textAlign={"start"} size='md'>{el.username}</Heading>
                                <Box display={"flex"} gap={24}>
                                    <Text py='2'>
                                        Age: {el.age}
                                    </Text>
                                    <Text py='2'>
                                        Contact Number: {el.mobile}
                                    </Text>

                                    <Text py='2'>
                                        Description:  {el.description}
                                    </Text>
                                </Box>
                            </CardBody>

                            <CardFooter>
                                {el.status ? <Button variant='solid' colorScheme='green'>Appointment Booked</Button> : <Button variant='solid' colorScheme='red'>Appointment Not Book</Button>}
                            </CardFooter>
                        </Stack>
                    </Card>
                </Box>
            ))}
        </Box>
    )
}

export default Userlist
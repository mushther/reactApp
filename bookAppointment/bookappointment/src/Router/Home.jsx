import { Box, Heading, Image, Button, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const Home = () => {
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
    return (
        <Box mt={"80px"}>
            <Box bg={"blue.100"} height={"auto"} display={"flex"} justifyContent={"space-between"} padding={"4rem"} >
                <Box textAlign={"start"} color={"blue"} >
                    <Heading fontFamily={"serif"} fontSize={"60px"} mt={10} w={"100%"} >Best doctors</Heading>
                    <Heading fontFamily={"serif"} fontSize={"60px"} w={"100%"}>at the best hospitals</Heading>
                    <Heading fontFamily={"serif"} fontSize={"60px"} w={"100%"}>Search and Book now.</Heading>
                    <Link to="/doctorlist">
                        <Button position={"none"} colorScheme='blue' mt={5}>Book Doctor's Appointment</Button>
                    </Link>
                </Box>
                <Box >
                    <Image src='https://www.credihealth.com/assets/book-appointment/Book-Lab-Tests-da61c68b766479529b8b6c2fc35b3db00a0eace26b1869e727820a34c1a95119.png' />
                </Box>
            </Box>
            <Heading mt={5} ml={"80px"} textAlign={"start"}>Top Doctor's of City</Heading>
            <Box style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "10px",
                padding: "20px 80px 80px 80px"
            }}>
                {data.map((el) => (
                    <Box padding={2}>
                        <Image
                            borderRadius={"20px 20px 0px 0px"}
                            src='https://i.pinimg.com/originals/56/d1/c0/56d1c032884032f4216b9bc790c00a1e.jpg'
                            alt='Caffe Latte'
                        />
                        <Box border={"1px solid black"} borderRadius={"0px 0px 20px 20px"} padding={2}>
                            <Heading>{el.doctorname}</Heading>
                            <Text borderRadius={"5px"} w={"auto"}>{el.eduction}</Text>
                            <Text>Address: {el.address}</Text>
                            <Text display={"flex"} justifyContent={"center"}>
                                <Text>Appointment:</Text>
                                {el.appointment > 10 ? <Text color={"red"}>"Not Available"</Text> : <Text color={"green"}>"Available"</Text>}
                            </Text>
                            <Text fontSize={"xl"} color={"white"} bg={"red.400"} w={"40%"} m={"auto"} borderRadius={"5px"}>Fee: ₹{el.doctorfee}/-</Text>
                            <Link to="/bookappointment">
                                <Button position={"none"} colorScheme='blue' mt={5}>Book Appointment</Button>
                            </Link>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Home
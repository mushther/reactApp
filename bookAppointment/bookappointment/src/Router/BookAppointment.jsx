import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from "axios";

const initialData = {
    username: "",
    age: "",
    email: "",
    mobile: "",
    status: false,
    token: "",
    description: ""
}
const BookAppointment = () => {
    const [appointment] = useState(localStorage.getItem("appointment"))
    const [formState, setFormState] = useState(initialData)

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === "number" ? Number(value) : value;
        setFormState({ ...formState, [name]: val })
    }

    const postData = () => {
        axios.post(`https://doctor-appointment-seven.vercel.app/user`, formState)
        console.log(formState);
        alert(`Hello ${formState.username} Your Appointment Booked. Your Token No. ${+(appointment) + 1}`)
    }

    return (
        <Box w={"80%"} m={"auto"} mt={"95px"}>
            <FormControl>
                <Heading>Book Doctor's Appointment</Heading>
                <FormLabel>Patient Name</FormLabel>
                <Input
                    placeholder='Enter Your Name'
                    type='text'
                    name='username'
                    onChange={handleChange}
                    value={formState.username}
                />
                <FormLabel>Patient Age</FormLabel>
                <Input
                    placeholder='Enter Your Age'
                    type='number'
                    name='age'
                    onChange={handleChange}
                    value={formState.age}
                />
                <FormLabel>Email Address</FormLabel>
                <Input
                    type='email'
                    placeholder='Enter Your Email'
                    name='email'
                    onChange={handleChange}
                    value={formState.email}
                />
                <FormLabel>Mobile Number</FormLabel>
                <Input
                    type='number'
                    placeholder='Enter Your Moblie No.'
                    name='mobile'
                    onChange={handleChange}
                    value={formState.mobile}
                />
                <FormLabel>Discribe Your Problem</FormLabel>
                <Input
                    type='text'
                    placeholder='Enter Your Problem'
                    name='description'
                    onChange={handleChange}
                    value={formState.description}
                />
                {
                    appointment <= 10 ? <Text
                        textAlign={"start"}
                        fontSize={"20px"}
                        fontWeight={"bold"}
                        p={3}
                        borderRadius={30}
                        mt={3} w={"23%"}
                        color={"white"}
                        bg={"green"}
                    >Available Appointment : {-(appointment) + 10}</Text>
                        : <Text textAlign={"start"} fontSize={"20px"} fontWeight={"bold"} p={3} borderRadius={30} mt={3} w={"23%"} color={"white"} bg={"red"}>Available Appointment : {-(appointment) + 10}</Text>
                }
                {
                    appointment > 10 ?
                        <Button onClick={() => { postData() }} disabled={true} display={"block"} margin={"none"} marginTop={"15px"} colorScheme={"blue"}>Book Appointment</Button>
                        : <Button onClick={() => { postData() }} display={"block"} margin={"none"} marginTop={"15px"} colorScheme={"blue"}>Book Appointment</Button>
                }
            </FormControl>
        </Box>
    )
}

export default BookAppointment
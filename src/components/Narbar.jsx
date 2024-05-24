import React from 'react'
import { Link } from "react-router-dom"
import { Box, Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react'

export const Narbar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center" bg="gray.200">
      <Heading as="h3">Demo</Heading>

      <Flex gap="20px" ml="30px">
        <Link to="/" end>Dashboard</Link>
        <Link to="/create">Create</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/document">Document</Link>
      </Flex>

      <Spacer />

      <HStack spacing="15px">
        <Box bg="blue.200" p="10px">S</Box>
        <Text>steven.hoang.goldenowl@gmail.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  )
}

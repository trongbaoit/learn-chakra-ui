import { Container, Box, Heading, Text, Stack, VStack, HStack, Flex } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

import React from 'react'

export default function Document() {

  function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

  return (
    <Container>
      {/* Stack */}
      <Heading as="h5">Stack</Heading>
      <Stack direction={['column', 'row']} spacing='24px'  mb="20px">
        <Box w='40px' h='40px' bg='yellow.200'>
          1
        </Box>
        <Box w='40px' h='40px' bg='tomato'>
          2
        </Box>
        <Box w='40px' h='40px' bg='pink.100'>
          3
        </Box>
      </Stack>

      <Stack spacing={8} direction='row'  mb="20px">
        <Feature
          title='Plan Money'
          desc='The future can be even brighter but a goal without a plan is just a wish'
        />
        <Feature
          title='Save Money'
          desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
        />
      </Stack>

      {/* HStack */}
      <Heading as="h5">HStack</Heading>
      <HStack spacing={8}  mb="20px">
        <Feature
          title='Plan Money'
          desc='The future can be even brighter but a goal without a plan is just a wish'
        />
        <Feature
          title='Save Money'
          desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
        />
      </HStack>

      {/* Flex */}
      <Heading as="h5">Flex</Heading>
      <Flex bg="gray.200" justifyContent="space-around" wrap="wrap" gap="2" mb="20px">
        <Box w="150px" h="50px" bg="red"></Box>
        <Box w="150px" h="50px" bg="blue"></Box>
        <Box w="150px" h="50px" bg="green" flexGrow="2"></Box>
        <Box w="150px" h="50px" bg="yellow" flexGrow="3"></Box>
      </Flex>

      {/* Alert */}
      <Heading as="h5">Alert</Heading>
      <Stack spacing="3" mb="10px">
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
        <Alert status='success'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='warning'>
          <AlertIcon />
          Seems your account is about expire, upgrade now
        </Alert>

        <Alert status='info'>
          <AlertIcon />
          Chakra is going live on August 30th. Get ready!
        </Alert>
      </Stack>

      <Stack spacing={3}>
        <Alert status='success' variant='subtle'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='success' variant='solid'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='success' variant='left-accent'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='success' variant='top-accent'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      </Stack>
    </Container>
  )
}

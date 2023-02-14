import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  FormControl,
  FormLabel,
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Grid,
  theme,
  Input,
  Button,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

function App() {
  const todos = [
    {
      id: 1,
      body: 'Get bread',
    },
    {
      id: 2,
      body: 'Get butter',
    },
  ];
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Box as="header">
              <Heading>
                To-Do List
              </Heading>
            </Box>
            <Box as="main" textAlign="left">
              <FormControl>
                <FormLabel>Add a new item</FormLabel>
                <Input />
              </FormControl>
              <Button>
                Submit
              </Button>
              <VStack alignItems="left" divider={<StackDivider />} borderColor='gray.100'>
              {todos.map((todo) => (
                <HStack key={todo.id}>
                  <Text>{todo.body}</Text>
                  <IconButton
                    icon={<DeleteIcon />}
                  />
                </HStack>
              ))}
              </VStack>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

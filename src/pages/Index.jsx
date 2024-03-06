import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Stack, Text, Textarea, useColorModeValue } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title && content) {
      setNotes([...notes, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Note Taking App
      </Heading>
      <Flex mb={4}>
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} mr={2} />
        <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} mr={2} />
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={addNote}>
          Add Note
        </Button>
      </Flex>
      <Stack spacing={4}>
        {notes.map((note, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" backgroundColor={useColorModeValue("white", "gray.700")}>
            <Flex justify="space-between" align="center">
              <Heading as="h2" size="md">
                {note.title}
              </Heading>
              <Button leftIcon={<FaTrash />} colorScheme="red" size="sm" onClick={() => deleteNote(index)}>
                Delete
              </Button>
            </Flex>
            <Text mt={2}>{note.content}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Index;

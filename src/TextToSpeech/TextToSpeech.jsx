import React, { useState } from "react";
import SpeechSynthesis from "./SpeechSynthesis";
import {
  Center,
  FormControl,
  Button,
  ButtonGroup,
  Input,
  Stack,
  Select,
} from "@chakra-ui/react";

const TextToSpeech = () => {
  const [input, setInput] = useState("testing audio");
  const [text, setText] = useState("testing audio");
  const [language, setLanguage] = useState("English");

  const properties = {
    text: text,
    language: language,
  };

  const buttonClickHandlerLanguage = (e) => setLanguage(e.target.value);
  const inputHandler = (e) => setInput(e.target.value);
  const buttonClickHandlerText = (e) => {
    e.preventDefault();
    setText(input);
  };

  return (
    <>
      <Center h="100vh" w="100vw">
        <FormControl w="max">
          <Stack
            flexDir="column"
            w={{ base: "75vw", md: "75vw", lg: "50vw" }}
            spacing={4}
          >
            <Input
              htmlSize={4}
              variant="flushed"
              width="100%"
              type="text"
              id="input"
              placeholder="type something"
              onChange={inputHandler}
            ></Input>
            <ButtonGroup variant="outline" spacing="6" w="100vh">
              <Button colorScheme="black" onClick={buttonClickHandlerText}>
                Play Audio
              </Button>
              <Select
                id="language-chooser"
                w="20vh"
                onChange={buttonClickHandlerLanguage}
              >
                <option>English</option>
                <option>Czech</option>
              </Select>
            </ButtonGroup>
          </Stack>
        </FormControl>
      </Center>
      <SpeechSynthesis
        text={properties.text}
        language={properties.language}
      ></SpeechSynthesis>
    </>
  );
};
export default TextToSpeech;
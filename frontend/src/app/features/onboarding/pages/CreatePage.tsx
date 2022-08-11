import { Page, Button } from "@components";
import { useSocket } from "src/sockets";
import { useStore } from "src/store";
import { useNavigate } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { NavBar } from "../components";

const CreatePage = () => {
  const state = useStore();
  const { socket } = useSocket();
  const navigate = useNavigate();

  const handleClick = () => {
    socket.create();
    navigate("/join/details");
  };

  return (
    <Page>
      <NavBar />
      <Heading>Create Group</Heading>
      <Button onClick={handleClick}>Create</Button>
    </Page>
  );
};

export default CreatePage;

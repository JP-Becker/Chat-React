import { Container } from "./appStyled";
import Header from "./components/header/Header";
import { Chat } from "./components/chat/chat";
import { Footer } from "./components/footer/footer";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState('Eu')
  console.log(messages)
  return (
    <Container>
      <Header
        setUser={setUser}
      />
      <Chat
        user={user}
        messages={messages}
        setMessages={setMessages}
      />
      <Footer
        user={user}
        messages={messages}
        setMessages={setMessages}
      />
    </Container>
  );
}

export default App;

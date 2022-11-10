import { ContainerChat, Message } from "./chatStyled"
import tickAzul from "../../assets/tick-green-double.svg"
import tickBranco from "../../assets/tick-white-double.svg"

export const Chat = (props) => {

    const deletaMensagem = (idMensagem) => {
    const confirm = window.confirm('Desejar deletar a mensagem?')
        if(confirm) {
            const apagarMensagem = props.messages.filter((msg) => {
                if (msg.idDoAutor !== idMensagem) {
                    return msg
                }
            })
            props.setMessages(apagarMensagem)
        }
        

    }

    const showMessage = props.messages.map((msg, index) => {
            return (
                <Message 
                    key={index}
                    user={msg.nomeDoAutor}
                    onClick={() => deletaMensagem(msg.idDoAutor)}
                >
                    <h1>{msg.nomeDoAutor}</h1>
                        <div>
                            <p>{msg.mensagemDoAutor}</p>
                        <div>
                            <img src={tickAzul} alt="ticket"/>
                            <p>{msg.time}</p>
                        </div>
                    </div>
                </Message>
            )
        })
    return (
        <ContainerChat>
            {showMessage}
        </ContainerChat>
    )
}
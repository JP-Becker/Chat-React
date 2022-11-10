import { FooterContainer } from "./footerStyled"
import { useState } from "react"
import mic from "../../assets/microphone.svg"
import smile from "../../assets/smiley.svg"
import paperclip from "../../assets/paperclip.svg"

export const Footer = (props) => {
    const [message,setMessage] = useState("")

    function onChangeInput(e){
        setMessage(e.target.value)
    }

    function sendEnter(e){
        if(e.key === "Enter"){
            const newMessage = [...props.messages]

            const objetoMensagem = {
                nomeDoAutor: props.user,
                mensagemDoAutor: message,
                idDoAutor: Date.now(),
                time: new Date().toLocaleString("pt-BR", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                })
            }

            newMessage.push(objetoMensagem)

            props.setMessages(newMessage)

            setMessage("")
        }
    }

    return (
        <FooterContainer>
            <div>
                <a href="#">
                    <img src={smile} alt="smile icon" />
                </a>

                <input
                    type={"text"}
                    value={message}
                    onChange={onChangeInput}
                    onKeyDown={sendEnter}
                />

                <a href="#">
                    <img src={paperclip} alt="paperclip icon" />
                </a>
            </div>
            <div>
                <a href="#">
                    <img src={mic} alt="microfone" />
                </a>
            </div>
        </FooterContainer>
    )
}
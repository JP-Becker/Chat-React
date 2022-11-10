import styled from "styled-components"

export const ContainerChat = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 3%;
`

export const RecebidaDiv = styled.div`
    width: 100%;

`

export const MensagemRecebida = styled.div`
    background-color: #E1E1E1;
    height: fit-content;
    max-width: 55%;
    padding: 14px 14px 0 14px;
    border-radius: 16px;
`

export const EnviadaDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`


export const MensagemEnviada = styled.div`
    background-color: lightgreen;
    height: fit-content;
    max-width: 55%;
    padding: 14px 14px 0 14px;
    border-radius: 16px;
`

export const HorarioDiv = styled.div`
    display: flex;
`

export const HorarioP = styled.p`
    font-size: 10px;
`


export const Message = styled.div`
    background-color: ${props => props.user === "Eu" ? "#61C554" : "lightgray"};
    color: ${props => props.user === "Eu" ? "black" : "white"};
    margin-left: ${props => props.user === "Eu" ? "auto" : 0};
    min-width: 80px;
    max-width: 300px;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px;
        h1 {
            font-weight: 500;
            font-size: 16px;
            padding-bottom: 4px;
        }
        
        div {
    display: flex;
    flex-direction: column;

    p {
        font-weight: 400;
        font-size: 16px;
        word-wrap: break-word;
    }

    div {
        font-weight: 500px;
        font-size: 11px;
        color: #727272;
        margin-left: auto;

        img {
            width: 16px;
            margin-left: 4px;
        }
    }
}
`

import phone from "../../assets/phone.svg"
import camera from "../../assets/video-cam.svg"
import hamburguer from "../../assets/hamburger.svg"
import { MainHeader, MainPerson , Icons} from "./headerStyled"

function Header(props) {
  const handleUser = (e) => {
    props.setUser(e.target.value)
  }

  return (
    <MainHeader>

      <MainPerson>
        <img src="https://picsum.photos/200/300" alt="imagem perfil" />
        <div>
          <select value={props.user} onChange={handleUser}>
            <option value={"Eu"}>Eu</option>
            <option value={"Fulano"}>Fulano</option>
            <option value={"Ciclano"}>Ciclano</option>
            <option value={"Beltrano"}>Beltrano</option>
          </select>
          <p>Online</p>
        </div>
      </MainPerson>

      <Icons>
        <a><img src={phone} alt="phone" /></a>
        <a><img src={camera} alt="camera" /></a>
        <a><img src={hamburguer} alt="hamburguer" /></a>
      </Icons>

    </MainHeader>
  )
}

export default Header
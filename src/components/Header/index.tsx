import { Dispatch, useState } from "react";
import Icon from "../../icons";
import { StyledHeader } from "./style";

type HeaderProps = {
    theme: boolean
    setTheme: Dispatch<boolean>
}

export default function Header({theme, setTheme}:HeaderProps) {

    const [setting, setSetting] = useState<boolean>(false)

    function alterTheme(): void {
        setTheme(!theme)
        localStorage.setItem("Dark", JSON.stringify(!theme))
    }

    return (
        <StyledHeader dark={theme}>
            <h1>Álbum do conhecimento</h1>
            <Icon.Setting onClick={() => setSetting(!setting)} />
            {setting && 
                <div className="theme">
                    <p>Modo Dark</p>
                    <button onClick={() => alterTheme()}>
                        <div className="ball"></div>
                    </button>
                    <p className="mode">{theme ? "Ativado" : "Desativado"}</p>
                </div>
            }

        </StyledHeader>
    )
}
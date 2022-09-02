import Image from "next/image";
import { useEffect, useState } from "react";
import { StyledLoading } from "./style";


export default function Loading() {

    const [dark, setDark] = useState<string>("light")

    useEffect(() => {
        setDark(JSON.parse(localStorage.getItem("Dark") || "false") ? "dark" : "light")
    }, [setDark])

    return (
        <StyledLoading>
          <div className="loading">
              <Image src={`/gif/${dark}.gif`}  width={150} height={150} alt="loading..." />
          </div>
        </StyledLoading>
      )
}
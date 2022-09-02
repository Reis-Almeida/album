import { useRouter } from "next/router";
import { useState } from "react";
import Icon from "../../icons";
import { StyledSearch } from "./style";

export default function Search() {

    const router = useRouter()
    const value = router.query.search as string
    const [search, setSearch] = useState<string>(value == undefined ? "" : value)

    const action = () => {
        router.push('/?search=' + search)
    }

    return (
        <StyledSearch>
            <input type="text" placeholder="Pesquise aqui" 
                value={search} onChange={(env) => setSearch(env.target.value)} />
            <Icon.Search onClick={() => action()} />
        </StyledSearch>
    )
}
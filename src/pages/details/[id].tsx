import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Loading from "../../components/loading"
import Search from "../../components/Search"
import Database from "../../database"
import Icon from "../../icons"
import { StyledDetails } from "../../styles/details"
import { DatabaseProps } from "../../types"


const Details: NextPage = () => {

    const [data, setData] = useState<DatabaseProps | null>(null)
    const query:number = parseInt(useRouter().query.id as string, 10)
    const last:number = Database.length

    useEffect(() => {
        if(query != undefined) {
            setTimeout(() => {
                setData(Database[query - 1])
            }, 2000)
        }
    })


    if(!data) {
        return (
          <StyledDetails>
            <Loading />
          </StyledDetails>
        )
    }


    return (
      <StyledDetails>
         <Head>
            <title>{data.title} - Album do Conhecimento</title>
        </Head>
        <div className="search">
            <Link href="/">
                <a><Icon.ArrowLeft /> Voltar</a>
            </Link>
            <Search />
        </div>
        <div className="container">
            <div className="image">
                <Image src={data.image} objectFit="contain" layout="fill" priority alt="imagem do assunto" />
            </div>
            <article>
                <h1>{data.title}</h1>
                <p>{data.text}</p>
            </article>
        </div>
        <div className="navigation">
            <Link href={`/details/${query == 1 ? 1 : query - 1}`}>
                <a><Icon.ArrowLeft /> Anterior</a>
            </Link>
            <Link href={`/details/${query == last ? last : query + 1}`}>
                <a>Proximo <Icon.ArrowRight /></a>
            </Link>
        </div>
      </StyledDetails>
    )
  }
  
  export default Details
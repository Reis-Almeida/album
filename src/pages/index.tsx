import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Search from '../components/Search'
import Database from '../database'
import { StyledHome } from '../styles/home'
import { DatabaseProps } from '../types'


const Home: NextPage = () => {

  let images:DatabaseProps[] = Database
  const query:string = useRouter().query?.search as string

  const search = (data:string, query:string) => {
    if(data.toLowerCase().search(query) !== -1) {
        return true
      }
      return false
    }

    if(query != undefined) {
        images = Database.filter((data:DatabaseProps) => {

        if(search(data.title, query) || search(data.text, query)) {
            return data
        }
      })
    }

  return (
    <StyledHome>
      <Head>
          <title>Home - Album do Conhecimento</title>
      </Head>
      <Search />
      <div className="album">
        {images.map((data:DatabaseProps) => (
          <Link href={`/details/${data.id}`} key={`image${data.id}`}>
            <a>
              <Image src={data.image} objectFit="cover" layout="fill" alt="imagem do assunto" />
            </a>
          </Link>
        ))}
      </div>
    </StyledHome>
  )
}

export default Home

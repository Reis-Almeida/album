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

  return (
    <StyledHome>
      hellow
    </StyledHome>
  )
}

export default Home

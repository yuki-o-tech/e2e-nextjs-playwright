'use client'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import styled from 'styled-components'
import Spinner from './Spinner'

const NavBarCompoenent = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #2d3748; /* bg-gray-800 */
  padding: 3px;
  font-weight: bold;
  height: 80px;
`

const LinkBox = styled(Link)`
  text-decoration-line: none;
  font-family: Inter;
  margin-right: 16px;
  display: inline-flex;
  align-items: center;
  padding: 8px;
  color: white;
`

const Text = styled.div`
  font-family: Inter;
  font-size: 18px;
  color: white;
  padding: 5px;
`

const Button = styled.div`
  font-family: Inter;
  cursor: pointer;
  font-size: 18px;
  color: lightPink;
  border-radius: 6px;
  background: white;
  padding: 5px;
`

const NavBar = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  return (
    <NavBarCompoenent>
      <LinkBox href="/">Home</LinkBox>
      <LinkBox href="/fetch-cc">CC_Fetch</LinkBox>
      <LinkBox href="/fetch-sc">SC_Fetch</LinkBox>
      <LinkBox href="/task-crud">CRUD</LinkBox>
      {loading && <Spinner width="w-6" height="h-6" />}
      {session?.user ? (
        <>
          {session.user.image && (
            <span className="inline-block text-white">
              <Image
                className="mx-2 rounded-full"
                alt="avatar"
                src={session.user.image}
                width={25}
                height={25}
              />
            </span>
          )}
          <Text>{session.user.name}</Text>
          <Button
            onClick={() => {
              signOut()
            }}
          >
            SignOut
          </Button>
        </>
      ) : (
        <Button onClick={() => signIn('github')}>SignIn GitHub</Button>
      )}
    </NavBarCompoenent>
  )
}
export default NavBar

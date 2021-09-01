/* eslint-disable @next/next/link-passhref */
import { Flex, Spacer, InputGroup, InputLeftElement, Input, SearchIcon, PhoneIcon, Heading } from "@chakra-ui/react";
import Link from 'next/link'
import style from '../../styles/Nav.module.css'
const Nav = () => {
  return (
    <div className={`${style.container}`}>
      <i className={`fa fa-home ${style.icon}`} />
      <Link href='/search'>
        <i className={`fa fa-search ${style.icon}`} />
      </Link>
      <Link href='/new-post'>
      <i className={`fa fa-plus ${style.icon}`} />
      </Link>
      <Link href='/profile'>
        <i className={`fa fa-user ${style.icon}`} />
      </Link>

    </div>
  )
}
export default Nav
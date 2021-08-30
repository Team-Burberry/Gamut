/* eslint-disable @next/next/link-passhref */
import { Flex, Spacer, InputGroup, InputLeftElement, Input,SearchIcon , PhoneIcon, Heading} from "@chakra-ui/react";
import Link from 'next/link'
import style from '../../styles/Nav.module.css'
const Nav = () => {
  return (
    <div className={`${style.container}`}>
      <i className={`fa fa-home ${style.icon}`}></i>
      <Link href='/search'>
      <i className={`fa fa-search ${style.icon}`}></i>
      </Link>
      <i className={`fa fa-plus ${style.icon}`}></i>
      <i className={`fa fa-user ${style.icon}`}></i>

    </div>
  )
}
export default Nav
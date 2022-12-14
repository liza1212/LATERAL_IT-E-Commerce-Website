import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
const Container = styled.div`
    height: 70px;
    align-items: center;
    color:#15273c;
    ${mobile({height: "50px"})}
`

const Wrapper= styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`
const Left=styled.div`
    flex:1;
    align-items: center;
    justify-content: center;
`

const Middle=styled.div`
    flex:1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`

const Right=styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex: "2"})}
`
const MenuItem = styled.div`
    font-size: 12px;
    cursor: pointer;
    margin-left: 25px;
    padding: 5px;
    ${mobile({fontSize: "9px", marginLeft: "10px"})}
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`

const SearchContainer=styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input=styled.input`
    border: none;
    /* margin: 10px; */
    padding: 1px;
    display: flex;
    flex-wrap: wrap;
    ${mobile({width: "50px"})}
`

const Logo=styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "20px"})}
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>AURORA</Logo>
            </Left>
            <Middle>
                <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color: "gray", fontSize: 20}}/> 
                    </SearchContainer>
            </Middle>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
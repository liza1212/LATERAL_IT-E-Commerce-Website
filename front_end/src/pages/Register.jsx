import styled from "styled-components"
import { mobile } from "../responsive"
const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255,255,355,0.5), 
            rgba(255,255,355,0.5)) ,
            url("https://static.vecteezy.com/system/resources/previews/008/879/479/non_2x/3d-hand-holding-credit-card-isolated-on-background-business-hand-using-hold-invoice-bill-expenses-under-creative-solution-concept-in-3d-paper-receipt-for-shopping-in-store-free-png.png") 
            center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper=styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({width: "75%"})}
`

const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form=styled.div`
    display: flex;
    flex-wrap: wrap;
`


const Input=styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement=styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #04063c;
    color: white;
    cursor: pointer;
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in 
                    accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
// import { hover } from '@testing-library/user-event/dist/hover'
import styled from 'styled-components' 

export const LoginFormContainer = styled.div`
    height :100vh;
    display :flex;
    justify-content :center;
    align-items :center;
`
export const UserNameContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items :flex-start;
`
export const PasswordContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items :flex-start;
`
export const Label = styled.label`
    color:#7f8c8d ;
    font-size:13px;
    font-weight:500;
`
export const InputElement = styled.input`
    padding :15px;
    width :250px;
    border-style :solid;
    border-radius :5px;
    outline :none;
    border-width :0.1em;
    border-color :#d5d8dc;
    margin-bottom:10px;
`
export const Span = styled.span`

`
export const LoginButton = styled.button`
    width : 273px ;
    padding :15px;
    border-width :0;
    border-style :normal;
    border-radius :5px;
    color :#fff;
    background-color :royalblue;
    margin-top:20px;
`
export const LoginFormLogo = styled.h2`
    color: royalblue;
    box-shadow: #ddd 2px 2px 2px 2px;
    padding: 10px;
    border-radius: 5px;
    width:150px;
`
export const FormContainer = styled.form`
    border-style:solid;
    border-width:0.1em;
    border-color :#d5d8dc;
    padding :50px;
    border-radius :10px;
    box-shadow:#ddd 3px 3px;
`
export const ErrorMsg = styled.p`
    color :red;
    font-weight :500;
`
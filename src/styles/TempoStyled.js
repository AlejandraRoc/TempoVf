import styled from 'styled-components';

export const BodyTemporizador = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #301B47;
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;

  .title{
    margin-top: 0;
    align-items: flex-start;
    justify-content: space-between;
  }

  .card {
    display: inline-block;
    margin: 10px;
    min-width: 100px;
    padding: 20px 0;
    background-color: #221C28;

    .unit{
      text-transform: capitalize;
    }
  }
  .card-value{
      color: #E930B0;
      font-size: 2rem;
      margin-bottom: 10px;

    }
`

export const Footer = styled.footer`
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0px;
`
export const SpanStyled = styled.span`
  border-color: white;
  border: 60px;
`

export const bgdiv = styled.div`
  


`
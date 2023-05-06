import React from 'react'
import styled from "styled-components"

function AddComment() {
  return (
    <Background>
        <Layout></Layout>
    </Background>
  )
}

export default AddComment

const Background = styled.div`
    background-color: gray;
    width: 100%;
    height: 100vh;
`

const Layout = styled.div`
    width: 200px;
    height: 400px;
    background: white;
`
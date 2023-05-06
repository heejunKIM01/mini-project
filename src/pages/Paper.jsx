import React, { useState } from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'


function Paper() {
  const paperMemo = ['안녕!', '안녕 반가워~~!', '우리 조 화이팅!', '우리 조 화이팅!', '우리 조 화이팅!', '우리 조 화이팅!', '우리 조 화이팅!', '우리 조 화이팅!', '우리 조 화이팅!', '우리 조 화이팅!'
    , '우리 조 화이팅!', '우리 조 화이팅!', '우리 조 화이팅!', '우리 조 화이팅!']

  const navigate = useNavigate()

  return (
    <>
      <StContainer>
        <StHeader>
          <StHomeIcon onClick={() => { navigate('/') }}>
            <FontAwesomeIcon icon={faHouse} size='xl' />
          </StHomeIcon>
          <StTitle>
            To. 안녕~!
          </StTitle>
        </StHeader>
        <StPaperBoxContainer>
          {
            paperMemo.map((item) => {
              return (
                <StPaperBox>
                  {item}
                </StPaperBox>
              )
            })
          }
        </StPaperBoxContainer>
        <StWriteButton><FontAwesomeIcon icon={faPen} size='xl' beat style={{ color: "#ffffff" }} onClick={() => {navigate('/addcomment')}} /></StWriteButton>
      </StContainer>
    </>
  )
}

export default Paper

const StContainer = styled.div`
  width: 500px;
  margin: auto;
  background-color: #eee;
  border-radius: 20px;
`

const StHeader = styled.div`
  height: 70px;
  /* border-bottom: 1px solid #a0a0a0; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
`

const StHomeIcon = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  position: relative;
  left: 12px;
  border : none;
  background-color: #d3d3d3;
`

const StTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
`

const StPaperBoxContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  min-height: 100%;
`

const StPaperBox = styled.div`
  width: 130px;
  height: 130px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
`

const StWriteButton = styled.button`
  width: 50px;
  height: 50px;
  position: relative;
  left: 430px;
  bottom: 20px;
  cursor: pointer;
  margin-top: 25px;
  background-color: black;
  border: none;
  border-radius: 12px;
`


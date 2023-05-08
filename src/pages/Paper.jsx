import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { motion } from "framer-motion";


function Paper() {
  const paperMemo = ['안녕!', '안녕 반가워~~!', '우리 조 화이팅!']

  const [paper, setPaper] = useState()

  const fetchPapers = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/paper`)
    setPaper(data)
  }

  const onDeleteButtonClickHandler = async (id) => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/paper/${id}`)
    setPaper(
      paper.filter((item) => {
        return item.id !== id
      })
    )
  }

  useEffect(() => {
    // db로부터 데이터 가져오는 부분 
    fetchPapers()
  }, [])

  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      exit={{ opacity: 0, transition: { duration: 1.2 } }}
    >
      <StContainer>
        <StHeader>
          <StHomeIcon onClick={() => { navigate('/') }}>
            <FontAwesomeIcon icon={faHouse} size='xl' />
          </StHomeIcon>
          <StTitle>
            To. 안녕~!
          </StTitle>
          <ContentHeader>한줄 소개</ContentHeader>
        </StHeader>
        <StPaperBoxContainer>
          {
            paper?.map((item) => {
              return (
                <StPaperBox key={item.id}>
                  {item.comment}
                  <DeleteButton onClick={() => { onDeleteButtonClickHandler(item.id) }}><FontAwesomeIcon icon={faTrash} /></DeleteButton>
                </StPaperBox>
              )
            })
          }
        </StPaperBoxContainer>
        <StWriteButton><FontAwesomeIcon icon={faPen} size='xl' beat style={{ color: "#ffffff" }} onClick={() => { navigate('/addcomment') }} /></StWriteButton>
      </StContainer>
    </motion.div>
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
  height: 120px;
  /* border-bottom: 1px solid #a0a0a0; */
  display: flex;
  flex-direction: column;
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
  left: -220px;
  top: 10px;
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
  position: relative;
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


const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute; 
  bottom: 10px; 
  right: 5px; 
`

const ContentHeader = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`


import React, { useState } from 'react'
import DailyUpdatedNews from '../TopNews/DailyUpdatedNews'
import { Form, Button, Row, Col, ModalHeader } from "react-bootstrap";
import "../Articles/Articles.css"
import "../Profile/ProfileByAuthorName.css"

function ProfileByAuthorName() {
    const emailid = localStorage.getItem("profile-emailid")
    //console.log(emailid)
    const [userData, setUserData] = useState('')
    const [name1, setName] = useState()
    const [mobile, setMobile] = useState('')

    const result = fetch('/getUserData', {
        method : "GET",
        headers : {
          "Content-Type" : "application/json"
        }
      }).then(response => response.json()).then(data => {
        for(let [key, value] of Object.entries(data)) {
          if(emailid === value.emailid) {
            setName(value.name)
            setMobile(value.mobile)
          }
        }
      })

      const result1 = fetch('/getArticleDetails', {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    }).then(response => response.json()).then(data => setUserData(data))

  return (
    <div className='backgroundImageDisplay'>
        <h2 className='article__heading' style={{"textAlign" : "center", margin : "20px"}}>Profile of {name1}</h2>
        <Row className="profileRow">
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name1}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={emailid}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="mobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="number"
              value={mobile}
            ></Form.Control>
          </Form.Group>
        </Form>
    </Row>
    <div>
        <h3 className='article__heading' style={{"textAlign" : "center", margin : "20px"}}>Articles written by {name1}</h3>
        <div className='wrapper'>
        {userData ? userData.filter((news) => 
          news.emailid === emailid).map((news) => ( 
          <DailyUpdatedNews userData = {news} key = {news._id} />
        )) : <p> No Articles yet</p>}
    </div>
    </div> 
    </div>
  )
}

export default ProfileByAuthorName
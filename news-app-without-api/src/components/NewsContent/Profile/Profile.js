import React, { useState } from 'react'
import { Form, Button, Row, Col, ModalHeader } from "react-bootstrap";
import Articles from '../Articles/Articles';
import "./Profile.css"
import Modal from 'react-modal'
import "../Articles/Articles.css"
import "../TopNews/TopNews.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Profile(props) {
    const [name1, setName] = useState('')
    const [emailid, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const [open, setOpen] = useState(false)

    //article data
    const [sourceName, setSourceName] = useState('')
    const [id, setId] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [urlToImage, setUrlToImage] = useState('')
    const [publishedAt, setPublish] = useState('')
    const [content, setContent] = useState('')

    const result = fetch('/getUserData', {
        method : "GET",
        headers : {
          "Content-Type" : "application/json"
        }
      }).then(response => response.json()).then(data => {
        for(let [key, value] of Object.entries(data)) {
          if(props.loggedData === value._id) {
            setName(value.name)
            setEmail(value.emailid)
            setMobile(value.mobile)
          }
        }
      })

      const submitHandler = (e) => {
        e.preventDefault()
        const _id = emailid
        if(confirmPassword == password) {
        const result = fetch(`/updateProfile/${_id}`, {
            method : "PUT",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify ({
              _id, name1, emailid, mobile, password
            })
          })
        }
        alert("profile updated")
        setConfirmPassword('')
        setPassword('')
      }
    const handleOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    const handleTitle = (e) => {
      setTitle(e.target.value)
    }
    const handleDesc = (e) => {
      setDescription(e.target.value)
    }
    const handleContent = (e) => {
      setContent(e.target.value)
    }
    const handleUrl = (e) => {
      setUrl(e.target.value)
    }
    const handleUrlToImage = (e) => {
      setUrlToImage(e.target.value)
    }
    const handlePublish = (e) => {
      setPublish(e.target.value)
    }
    const handleSourceName = (e) => {
      setSourceName(e.target.value)
    }

    const publishArticle = (e) => {
      e.preventDefault()
      const _id = name1 + Math.random()
      const author = name1
      //const name = sourceName
      const source = {
        id : id,
        name : sourceName
      }
      const result = fetch(`/articlesData`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          _id, source, emailid, author, title, description, url, urlToImage, publishedAt, content
        })
      })
      alert("Article Published")
      setTitle("")
      setDescription("")
      setUrl("")
      setUrlToImage("")
      setPublish("")
      setContent("")
      setSourceName("")
    }

  return (
      <div>
        <h2 className='article__heading' style={{"textAlign" : "left", "margin" : "30px 30px 30px 60px"}}>Profile Details</h2>
        <button className='btn btn-outline-primary add__articles' onClick={handleOpen}>Add Articles</button>
        <Modal isOpen = {open} >
          <h2 className='article__heading'>Add the Article</h2>
          <button className='btn btn-danger close__button' onClick = {handleClose} >Close</button>
          <form className='modal__form' onSubmit={publishArticle}>
            <label>Author</label><input type="text" value={name1} /><br />
            <label>Title</label><input type="text" value={title} onChange = {handleTitle} /><br />
            <label>Description</label><textarea value={description} minLength="50px" maxLength="200px" onChange={handleDesc} /><br/>
            <label>Content</label><textarea value={content} minLength="50px" maxLength="200px" onChange={handleContent} /><br />
            <label>Source Url</label><input type="text" value={url} onChange = {handleUrl} /><br />
            <label>Image Url</label><input type="text" value={urlToImage} onChange = {handleUrlToImage} /><br />
            <label className='date__control'>Published At</label><input type="date" value={publishedAt} onChange = {handlePublish} /><br />
            <label>Source Name</label><input type="text" value={sourceName} onChange = {handleSourceName} /><br />
            <button className='publish__button' type='submit' >Publish Article</button>
          </form>
        </Modal>
        
        <Row className="profileContainer">
        
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name1}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={emailid}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="mobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Name"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
        </Row>
        <div>
          <h2 className='article__heading'>Articles</h2>
          <Articles emailid = {emailid} />
        </div>
      </div>
  )
}

export default Profile
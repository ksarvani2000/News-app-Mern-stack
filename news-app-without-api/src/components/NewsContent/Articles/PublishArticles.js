import React, { useState } from 'react'
import "../Articles/Articles.css"
import "../TopNews/TopNews.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal'

function PublishArticles({userData}) {
    const [open, setOpen] = useState(false)

    //article data
    const [sourceName, setSourceName] = useState(userData.source.name)
    const [id, setId] = useState(null)
    const [title, setTitle] = useState(userData.title)
    const [description, setDescription] = useState(userData.description)
    const [url, setUrl] = useState(userData.url)
    const [urlToImage, setUrlToImage] = useState(userData.urlToImage)
    const [publishedAt, setPublish] = useState(userData.publishedAt)
    const [content, setContent] = useState(userData.content)
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

    const deleteArticle = async (_id, e) => {
      e.preventDefault()
      const result = fetch(`/deleteArticles/${_id}`, {
        method : "DELETE",
        headers : {
          "Content-Type" : "application/json"
      }
      })
      //console.log(result)
      alert("Article Deleted Successfully")
    }

    const updateArticle = async (_id, e) => {
      const emailid = sessionStorage.getItem("login-data")
      const author = userData.author
      const source = {
        id : id,
        name : sourceName
      }
      const result = fetch(`/updateArticles/${_id}`, {
        method : "PUT",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          _id, source, emailid, author, title, description, url, urlToImage, publishedAt, content
        })
      })
      alert("Article Updated")
      setTitle("")
      setDescription("")
      setUrl("")
      setUrlToImage("")
      setPublish("")
      setContent("")
      setSourceName("")
    }
    //console.log(userData)
  return ( 
    <div className="card">
      <div className="card__body">
      <img className="card__image" src={`${userData.urlToImage}`} ></img>
      <h2 className="card__title">{userData.title}</h2>
      <p className="card__desc">{userData.description}</p>
      <span className="card__url"><span><b>Info : </b></span><a href = {userData.url} target= "_blank">Click Here</a></span> <br />
      <span className="news__author">Author : {userData.author}</span> <br />
      <span className="news__published">Published At : {userData.publishedAt}</span>
      <span className="news__source">Source : {userData.source.name}</span>
      <button className='update__article'  onClick = {handleOpen} >Update</button>
      <Modal isOpen = {open} >
          <h2 className='article__heading'>Update Article</h2>
          <button className='btn btn-danger close__button' onClick = {handleClose} >Close</button>
          <form className='modal__form' id={userData._id} onSubmit={(e) => updateArticle(userData._id, e)}>
            <label>Author</label><input type="text" value={userData.author} /><br />
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
      <button className='delete__article' id={userData._id} onClick={(e) => deleteArticle(userData._id,e)}>Delete</button>
    </div>
    </div>
  )
}

export default PublishArticles
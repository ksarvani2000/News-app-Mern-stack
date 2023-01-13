import React, { useState } from 'react'
import PublishArticles from './PublishArticles'



function Articles(props) {

  const [userData, setUserData] = useState('')
    // const [sourceName, setSourceName] = useState('')
    // const [id, setId] = useState(null)
    // const [author, setAuthor] = useState('')
    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [url, setUrl] = useState('')
    // const [urlToImage, setUrlToImage] = useState('')
    // const [publishedAt, setPublish] = useState('')
    // const [content, setContent] = useState('')

    const result = fetch('/getArticleDetails', {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    }).then(response => response.json()).then(data => setUserData(data)

      // {
      //   for(let [key, value] of Object.entries(data)) {
      //     if(props.emailid === value.emailid) {
      //       setAuthor(value.author)
      //       setTitle(value.title)
      //       setDescription(value.description)
      //       setUrl(value.url)
      //       setUrlToImage(value.urlToImage)
      //       setPublish(value.publishedAt)
      //       setContent(value.content)
      //     }
      //   }
      // }
    )
  return (
    <div>
        {/* {author.length === 0 ? (<p style={{"textAlign" : "center"}}>No Articles yet</p>) : */}
       <div className='wrapper'>
        {userData ? userData.filter((news) => 
          news.emailid === props.emailid).map((news) => ( 
          <PublishArticles userData = {news} key = {news._id} />
        )) : <p> No Articles yet</p>}
    </div> 
    </div>
  )
}

export default Articles
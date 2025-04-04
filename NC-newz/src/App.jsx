import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import { Header } from './components/Header'
import { UserProvider } from '../Contexts/User'
import { HomePosts } from './components/HomePosts'
import { SingleArticle } from './components/SingleArticle';
import { CommentCard } from './components/CommentCard';
import { AllCommentsCard } from './components/AllCommentsCard';

function App() {
  const [searchTerm, setSearchTerm] = useState([])
  const [article, setArticle] = useState([])
  const [userImage, setUserImage] = useState([])
  const [addedComment, setAddedComment] = useState([])


  return <>
    <UserProvider> <Header setSearchTerm={setSearchTerm} />
    <Routes> <Route path="/" element={<HomePosts />}></Route>
      <Route path='/articles/:article_id' element={<SingleArticle article={article} setArticle={setArticle} userImage={userImage} setUserImage={setUserImage} />}></Route>
      <Route path='/articles/:article_id/comments' element={<CommentCard  addedComment={addedComment} setAddedComment={setAddedComment} />}></Route>
      <Route path='/articles/:article_id/comments/all-comments' element={<AllCommentsCard addedComment={addedComment} />}></Route>
    </Routes>
    </UserProvider>

  </>
}

export default App

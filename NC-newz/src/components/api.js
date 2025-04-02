import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://nc-newz-u95l.onrender.com/api'
})

export const getArticles = () => {
    return newsApi.get('/articles')
        .then(({ data }) => {
            return data
        })
}

export const getArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then(({data:{article}})=>{
        return article
        })
}

export const getUser= () =>{
    return newsApi.get('/users')
    .then(({data:{users}})=>{
       return users
    })
}
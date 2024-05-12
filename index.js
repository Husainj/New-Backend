require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT

const githubData =  {
    "login": "Husainj",
    "id": 143475815,
    "node_id": "U_kgDOCI1EZw",
    "avatar_url": "https://avatars.githubusercontent.com/u/143475815?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Husainj",
    "html_url": "https://github.com/Husainj",
    "followers_url": "https://api.github.com/users/Husainj/followers",
    "following_url": "https://api.github.com/users/Husainj/following{/other_user}",
    "gists_url": "https://api.github.com/users/Husainj/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Husainj/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Husainj/subscriptions",
    "organizations_url": "https://api.github.com/users/Husainj/orgs",
    "repos_url": "https://api.github.com/users/Husainj/repos",
    "events_url": "https://api.github.com/users/Husainj/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Husainj/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Husain Jhalodwala",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Problem Solver || WebDev + ReactJs || AI learner",
    "twitter_username": null,
    "public_repos": 13,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-08-29T04:11:55Z",
    "updated_at": "2024-05-12T12:00:10Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/husain' , (req ,res) =>{
    res.send('my name is husain')
})

app.get('/login' , (req , res)=>{
    res.send('<h1> Please login first !! </h1>')
})

app.get('/github' , (req , res)=>{
    res.json(githubData)
})

app.listen(port , () => {
  console.log(`Example app listening on port ${port}`)
})
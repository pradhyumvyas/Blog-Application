# Introduction
- Objective of this task is to create a simple REST API based social network in Django
where Users can sign up and create text posts, as well as view, like, and unlike other
Users’ posts.

## The following are the API endpoints:
- user signup
- user login
- get user data
- post creation
- post like
- post unlike
- get post data
## Technology I Used
### Backend
- Django
- Django Rest Framework

#### The Following are the URL for REST API's
```bash
Signup :        http://127.0.0.1:8000/api/user/

Login:          http://127.0.0.1:8000/api/user/login/

logout:         http://127.0.0.1:8000/api/user/logout/${userID}/

Create Post :   http://127.0.0.1:8000/api/postData/postCreate/${username}/

Show Post :     http://127.0.0.1:8000/api/postData/postShow/

Like post :     http://127.0.0.1:8000/api/postData/postLike/${postID}/

Dislike Post:   http://127.0.0.1:8000/api/postData/postDislike/${postID}/

```
### For database I used Sqlite3 DB

### Frontend
- React JS

## How to run 
- First you need to start a backend server (Django Server)
    - To start backend server the steps are

    - First clone the repo
        ```bash
        git clone https://github.com/pradhyumvyas/Sparrow-Tech-Task.git
        ```
    - Goto backend and write
        ```bash
        pipenv shell
        ```
    - Then in socialnetwork folder
        ```python
        python3 manage.py runserver
        ```
- Then start ReactJS server for frontend
    - Goto frontend directory and socialnetwork directory as well
        ```bash
        npm install
        npm start
        ```

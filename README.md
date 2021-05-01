# Assessment Task 


## Introduction
- Objective of this task is to create a simple REST API based social network in Django
where Users can sign up and create text posts, as well as view, like, and unlike other
Users’ posts.
## Technology I Used
### Backend
- Django
- Django Rest Framework

#### The Following are the URL for REST API's
```
Signup :        http://127.0.0.1:8000/api/user/

Login:          http://127.0.0.1:8000/api/user/login/

logout:         http://127.0.0.1:8000/api/user/logout/${userID}/

Create Post :   http://127.0.0.1:8000/api/postData/postCreate/${username}/

Show Post :     http://127.0.0.1:8000/api/postData/postShow/

Like post :     http://127.0.0.1:8000/api/postData/postLike/${postID}/

Dislike Post:   http://127.0.0.1:8000/api/postData/postDislike/${postID}/

```
#### For database I used Sqlite3 DB

### Frontend
- React JS
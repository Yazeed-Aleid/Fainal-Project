# Personal-Assistant	



## User Stories

- **Signup:** As a user I can sign up in the platform so that I can start creat new card that incloud bigGoal 
- **Login:** As a user I can login to the platform so that I can creat-view-edit and delete Card of goal
- **Add Goal:**as a user I can add card of Goal
**view goal :** as a user I can view my Tasks on my goal
**Delete goal:** as a user I can Delete a goal
**edit:**as i user I can edit my goal
## User Stories
**view:**as a admin I can view all users
**Delete:**as a admin I can Delete Users
**Edit :** as a admin i can edit users information 





# Client / Frontend

## React Router Routes (React App)

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | HomePage           | public `<Route>`           | Home page                                                    |
| `/Registration`        | SignupPage           | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`         | LoginPage            | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login |
| `/Admin`     | Admin Page   | Admin only `<PrivateRoute>` | Shows all Users info
| `/` | TournamentListPage   | user only `<PrivateRoute>` | Edits a exit points                                          |
|  | TournamentDetailPage | user only `<PrivateRoute>` | Details of a exit points to edit                             |
|  | n/a                  | user only `<PrivateRoute>` | Delete exit points                                           |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |

## Components

- Cards
- Form
- Navbar
- Sidebar

## Pages
- Admin
- Home
- login
- register




# Server / Backend

## Models

User model

```
  username: {
    type: String,
    required: [true, "You have to Enter username"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "enter Your email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Enter Your password"]
  },
  phoneNumber: {
    type: String,
   required:true,
    unique: true
  },
  userType: {
    type: String,
    default: "normal"
  },
  BigGoals: [BigGoal]

},{timestamps:true});

```

BigGoal model

name: {
    type: String,
    required: [true, "You Have to add Name of yore goal"]
  },
  type: {
    type: String,
    required: [true, "You Have to add type of yore goal"]
  },
  status: {
    type: String,
    required: [true, "You Have to add status of yore goal"]
  },
  startDate: {
    type: Date,
    required: [false, "You Have to add statr Date of yore goal"]
  },
  endDate: {
    type: Date,
    required: [false, "You Have to add end Date of yore goal"]
  },
  comment: {
    type: String,
    required: [false, "You Have to add comment of yore goal"]
  },
  tasks: [TasksSchema]
});

```
Task model
 {
 name: {
    type: String,
    required: [true, "You have To add Name of Task"]
  },
  status: {
    type: String,
    required: [true, "You have To add task of Task"]
  }
});
```



## Backend routes

| HTTP Method | URL            | Request Body                                                 | Success status | Error Status | Description                                                  |
| ----------- | -------------- | ------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/me`     |                                                              | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup` | {name, email, password}                                      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`  | {username, password}                                         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout` | (empty)                                                      | 204            | 400          | Logs out the user                                            |
| POST        | /api/exit      | {name, img, aproachLat, aproachLong, aproachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude} |                |              | Used to create one exit point document, using current logged in user id as a creator. |
| PUT         | /api/exit/:id  | {name, img, aproachLat, aproachLong, aproachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude} |                |              | Used to update one exit point document by id                 |
| GET         | /api/exit/:id  |                                                              |                |              | Used to get one exit point document by id                    |
| DELETE      | /api/exit/:id  |                                                              |                |              | Used to delete one exit point document by id                 |
| GET         | /api/user      |                                                              |                |              | Used to get current user's profile. Id of the user is coming form the req.session.currentUser |
| PUT         | /api/user      | {username, email, password}                                  |                |              | Used to update current user's profile. Id of the user is coming form the req.session.currentUser |

## Links

[X-MIND]
- https://www.xmind.net/m/PUjURA


 [GitHub](https://github.com/Yazeed-Aleid/Fainal-Project)

 [Figma](https://www.figma.com/file/xjK3hQT4qCnCp7S0pVPNrL/Untitled)

[Deployed App Link](http://heroku.com/)



### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com/)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com/)

Wireframe

The url to your presentation slides

[Figma Link](http://www.figma.com/file/GNvDVBD1NPTydU2PJy4DDM/dataBASE?node-id=0%3A88)

https://www.figma.com/file/GNvDVBD1NPTydU2PJy4DDM/dataBASE?node-id=0%3A88
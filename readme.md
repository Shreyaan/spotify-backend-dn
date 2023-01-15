
# **Music App**

This is a music app that allows users to search for songs, view song's details and create playlists. Users can search and retrieve songs from external API such as Spotify or LastFM. Users can also view the song's details like artist name, album, duration, etc. The song's data is stored in a MongoDB database and can be returned based on the search query.

The application also provides authentication and authorization features using Firebase Authentication and JSON Web Tokens.

## **Features**

- Search and retrieve songs from the lastfm API
- View song details like artist name, album, duration, etc.
- Create and manage playlists
- Add songs to playlists
- Authentication and Authorization

## **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

- NodeJS
- MongoDB
- LastFM API key

### **Installing**

- Clone the repository

```bash
Copy code
git clone https://github.com/username/project-name.git
```

- Install the dependencies

```bash
Copy code
npm install
```

- Create a .env file in the root directory of the project and add the following environment variables:

```
Copy code
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
FIREBASE_MEASUREMENT_ID=
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
LASTFM_API_KEY=
JWT_SECRET=
```

- Start the development server

```
Copy code
npm run dev
```

## **API Routes**

## **Authentication Routes**

- **`POST /api/auth/register`**: Creates a new user with the information provided in the request body. Example: **`POST http://localhost:3000/api/auth/register`**

- **`POST /api/auth/login`**: Authenticates an existing user with the email and password provided in the request body. Returns a JSON web token for the user. Example: **`POST http://localhost:3000/api/auth/login`**

- **`POST /api/auth/forgot`**: Sends a password reset link to the email provided in the request body. Example: **`POST http://localhost:3000/api/auth/forgot`**

- **`GET /api/auth/profile`**: Retrieves the profile of the currently logged in user. Example: **`GET http://localhost:3000/api/auth/profile`**


### **Songs**

- **`GET /api/songs`**: Retrieves all the songs from the external API and stores them in the database then returns all the songs from database. Example: **`GET http://localhost:3000/api/songs`**

- **`GET /api/songs/:id`**: Returns the song with the specified ID. Example: **`GET http://localhost:3000/api/songs/5f9d0b9c1e0e9f1b8c8f1f2f`**

- **`GET /api/songs/search`**: Accepts a query parameter for the search term and returns a list of songs that match the search term. Example: **`GET http://localhost:3000/api/songs/search?q=songname`**


### **Playlists**

- **`POST /api/playlists`**: Creates a new playlist with the information provided in the request body. Example: **`POST http://localhost:3000/api/playlists`**

- **`GET /api/playlists`**: Retrieves a list of all playlists in the system. Example: **`GET http://localhost:3000/api/playlists`**

- **`GET /api/playlists/:id`**: Retrieves the playlist with the specified ID. Example: **`GET http://localhost:3000/api/playlists/5f9d0b9c1e0e9f1b8c8f1f2f`**

- **`PUT /api/playlists/:id`**: Updates the playlist with the specified ID using the information provided in the request body. Example: **`PUT http://localhost:3000/api/playlists/5f9d0b9c1e0e9f1b8c8f1f2f`**

- **`DELETE /api/playlists/:id`**: Deletes the playlist with the specified ID. Example: **`DELETE http://localhost:3000/api/playlists/5f6d8aa7c1331b5d5f5c5f5f`**

- **`POST /api/playlists/:id/songs`**: Adds a song to the playlist with the specified ID. The song information should be provided in the request body. Example: **`POST http://localhost:3000/api/playlists/5f6d8aa7c1331b5d5f5c5f5f/songs`** with a body of **`{ "songId": "5f6d8aa7c1331b5d5f5c5f5f" }`**

- **`DELETE /api/playlists/:id/songs`**: Removes a song from the playlist with the specified ID. The song information should be provided in the request body. Example: **`DELETE http://localhost:3000/api/playlists/5f6d8aa7c1331b5d5f5c5f5f/songs`** with a body of **`{ "songId": "5f6d8aa7c1331b5d5f5c5f5f" }`**

## **Built With**

- **[NodeJS](https://nodejs.org/)**
- **[ExpressJS](https://expressjs.com/)**
- **[MongoDB](https://www.mongodb.com/)**
- **[Spotify API](https://developer.spotify.com/)**
- **[LastFM API](https://www.last.fm/api)**


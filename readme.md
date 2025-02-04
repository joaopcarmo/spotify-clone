# 🎵 Spotify Clone React

A Spotify interface clone built with React, featuring a search functionality that allows users to find artists through a local API.


![image](https://github.com/user-attachments/assets/12d99bc5-78de-4211-beb0-e043007f473d)







![image](https://github.com/user-attachments/assets/1e895814-c54a-430a-9c5e-930d42d954cd)


## 🚀 Features

- Responsive Spotify-like interface
- Artist search functionality
- Dynamic content loading
- Sidebar navigation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/spotify-clone-react.git
```

2. Navigate to the project directory:

```bash
cd spotify-clone-react
```

3. Install the dependencies:

```bash
npm install
```

## 💻 Running the Application

You'll need to run two commands in separate terminal windows:

### Terminal 1 - JSON Server (API)

```bash
json-server api-artists/artists.json --port 3000
```

This will start the local API server at `http://localhost:3000`

### Terminal 2 - React Application

```bash
npm start
```

This will start the React application at `http://localhost:3001`

⚠️ **Important**: Both servers (JSON Server and React) need to be running simultaneously for the application to work properly.

## 🔍 API Information

The search functionality uses a local JSON server that provides artist data. The API endpoints are:

- GET `/artists` - Returns all artists
- GET `/artists?name_like={search}` - Returns artists matching the search term

## 🛠️ Built With

- React
- JSON Server
- CSS
- JavaScript

## 📝 Project Structure

```
spotify-clone-react/
├── api-artists/
│   └── artists.json
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── main/
│   │   ├── sidebar/
│   │   └── searchbar/
│   ├── App.js
│   └── index.js
└── package.json
```

## 👥 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is for educational purposes only. Spotify brand and assets are property of Spotify AB.

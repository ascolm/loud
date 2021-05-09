# Loud Player

You can see a live version of this project here: https://ascolm.github.io/loud/.

![LoudPlayer](https://user-images.githubusercontent.com/65975591/117575123-20daa280-b0e9-11eb-9ede-e27d2f156b46.png)

Setup instructions:

1. Clone the repo
```
git clone https://github.com/ascolm/loud.git
cd loud
```

2. Install dependencies (top level & client)
```
npm install
cd client
npm install
```

3. Create a .env file directly under the client folder as below:
```
REACT_APP_API_KEY= // apikey (just the value)
REACT_APP_API_BASE_URL= // base URL for api calls, up to and including the top-level domain
REACT_APP_API_SONG_URL= // subdirectory for the song fetch endpoint, starting with /
REACT_APP_API_LIKE_URL= // subdirectory for song like endpoint, starting with /
```

4. Launch the app with live server:
```
npm start
```

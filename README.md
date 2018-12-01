## Example how to use API of youtube from Google Developers

### UI used 
[Semantic UI React](https://react.semantic-ui.com/)

### Dependecies used
[Youtube Search](https://developers.google.com/youtube/v3/docs/search/list?hl=pt-br)

[React redux](https://github.com/reduxjs/redux)

[Redux thunk](https://github.com/reduxjs/redux-thunk)

[Redux logger](https://github.com/LogRocket/redux-logger)

### Examples of code

* Search a video from api 
```
import youtubeSearch from 'youtube-api-v3-search'

youtubeSearch(API_KEY,{q:'item to search'})
.then(data => {
  'your answer, do whatever you want'
})
.catch((err) => {
  'err'
})
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


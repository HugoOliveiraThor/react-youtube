## Example how to use API of youtube from Google Developers

### Framework used
[React](https://github.com/facebook/react) 

### UI used 
[Semantic UI React](https://react.semantic-ui.com/)


### Dependencies used
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

### Images of the projects

* Main Screen
![First Screen](https://github.com/HugoOliveiraThor/react-youtube/blob/master/public/assets/github_images/primary.png)
 
* Redux Logger 
![Redux Logger](https://github.com/HugoOliveiraThor/react-youtube/blob/master/public/assets/github_images/redux_logger.png)

* How data comes from API Youtube
![Data from Youtube](https://github.com/HugoOliveiraThor/react-youtube/blob/master/public/assets/github_images/how_data_comes_api.png)



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


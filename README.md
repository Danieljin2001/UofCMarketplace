# UofCMarketplace

Our team proposed to create a full stack website where University of Calgary students post products they want to sell such as textbooks or clothing. Usually, students have to go through a hassle to meet random people across the city when they are trying to sell their textbooks. The objective for our project is to create a platform for UCalgary students so that they can easily and safely buy/sell items online. Our application provides a safe experience for UCalgary students to connect and exchange goods through creating posts on the application. Posts can only be created by UCalgary students after signing up for an account and every post consists of a description of a product or a description of what the student needs. These posts are all collectively posted on the main page where everyone can see the posts and the email of the creator so that they can get in contact with them if they are interested.

# Deployment Instructions

Since our database is hosted in the cloud, it may be difficult to access our mongodb cluster since mongodb only allows access to specific ip addresses for security reasons. Either contact a group member for your ip address to be added or create your own free cluster on mongodb atlas. If going with the second option, the .env file should be updated with your mongodb cluster link.

Github link: https://github.com/Danieljin2001/UofCMarketplace

1. Download and unzip the package from the above URL or use git clone.
   1. Make sure npm is first installed to install required packages.
2. CD into /frontend/my-app from CMD
3. npm i (installs required packages)
4. npm start
   1. the frontend should be running on
5. CD into /backend from CMD
6. npm i (installs required packages)
7. npm run dev
   1. the backend server should be running on http://localhost:3001/
8. go on a browser of your choice and go to http://localhost:3000/

# Backend

The backend is created using express.js to create a node.js server, nodemon for continuous development, jsonwebtokens for authentication, socket.io for realtime chat, and mongoose for interacting with our MongoDB Atlas Cluster.

# Frontend

The frontend is created using create-react-app, react-router, axios for handling api calls, and bootstrap for styling.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# UofCMarketplace

This is a project for SENG513. The application we have created: U of C Marketplace is an app designed for students to buy items they need or sell items that they no longer need (such as textbooks and clothing). This application is designed specifically for students to sell or purchase items easily and securely at the university. As such, only students with a verified University of Calgary email are able to create posts to buy or sell items. When a student creates a post, it will include information about the item they wish to sell or buy, their contact information (email) and an option to send a message. Once the post is created, anyone can view these posts and contact the seller/buyer (through email or realtime chat) to arrange a time to meet.

# Deployment Instructions

Since our database is hosted in the cloud, it may be difficult to access our mongodb cluster since mongodb only allows access to specific ip addresses for security reasons. Either contact a group member for your ip address to be added or create your own free cluster on mongodb atlas. If going with the second option, the .env file should be updated with your mongodb cluster link.

Github link: https://github.com/Danieljin2001/UofCMarketplace

1. Download and unzip the package from the above URL or use git clone.
   1. Make sure npm is first installed to install required packages.
2. CD into /frontend/my-app from CMD
3. npm i (installs required packages)
4. npm start
   1. the frontend should be running on http://localhost:3000/
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

# Github Rating App with React Native

This application has been built during the full stack open MOOC's part 10 about React Native (worth 2 ETCS). https://fullstackopen.com/en/part10

The app is connected to a Node.JS backend application, which was <strong>not built by me</strong>, so this repo only has the "frontend" aka mobile app code. Backend can be cloned from: https://github.com/fullstack-hy2020/rate-repository-api. There one can also view the instructions on running it locally.

One can check the available scripts from package.json, but for running the mobile app with expo, it goes basically with `npm install`& `npm start`. Also I installed expo globally on my machine before that.

<i>Since the application's topic wasn't that interesting, I didn't want to pay for App store / Play store fee to put it live there. Instead, please view the below demo & screenshots.</i>

## Key Feature Listing

- Sign in / up / out
- Viewing a list of reviewed github repositories. (This also has cursor-based infinity scrolling enabled.)
- Reviewing github repositories
- Viewing my reviews
- Opening any repository in GitHub
- Removing any of your past reviews

## Key Libraries Used

- React Native & Expo
- GraphQL & Apollo
- Async Storage
- Formik & yup
- Jest-Native & React Native Testing Library

## Demo Video & Images of the App

<p float="left">
  <img src="/demos/github-rating-app.gif" width="300" />
  <img src="/demos/Repositories list.jpeg" width="300" />
  <img src="/demos/My reviews list.jpeg" width="300" /> 
  <img src="/demos/Repository details view.jpeg" width="300" />
</p>

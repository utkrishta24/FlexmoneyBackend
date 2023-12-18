# MERN Form for Yoga Class by FlexMoney
## Important Note
- For the sake of hosting it on render.com, both frontend & backend part of the code are in separate repository and the can be accessed through here:<br>
1- Frontend Repo: [Click here](https://github.com/utkrishta24/FlexmoneyFrontend.git)<br>
2- Backend  Repo: [Click here](https://github.com/utkrishta24/FlexmoneyBackend.git) 

## Project Deployed Links
Frontend: [Click here](https://flexmoneybackend.onrender.com/)<br>
Backend: [Click here](https://flexmoneyfrontend-ydz5.onrender.com/) 

## Problem Statement
- Assume that you are the CTO of an outsourcing firm which has been chosen to build an
admission form for the Yoga Classes which happen every month.
Requirements for the admission form are:<br>
- Only people within the age limit of 18-65 can enroll for the monthly classes and they will
be paying the fees on a month on month basis. I.e. an individual will have to pay the fees
every month and he can pay it any time of the month.<br>
- They can enroll any day but they will have to pay for the entire month. The monthly fee is
500/- Rs INR.<br>
- There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The
participants can choose any batch in a month and can move to any other batch next
month. I.e. participants can shift from one batch to another in different months but in the
same month they need to be in the same batch.

## ER Diagram
<p align="center">
  <img src="https://github.com/utkrishta24/FlexmoneyBackend/blob/main/screenshots/erdiag.png" height="350px" width="700px"/>
</p>
<p>Following is the ER Diagram of the database. A json file named test.admissions.json is also included in this repository for your reference. Here it is assumed that Complete Payment is also fully working module but in implementation, the function is mocked. Also the MongoDB cloud cluster is setup so every entry made is being added to the cluster on my mongodb database, screenshots of which are included below for your reference.</p>

## Screenshots of deployed frontend & backend
<p align="center">
  <img src="https://github.com/utkrishta24/FlexmoneyBackend/blob/main/screenshots/Filled1.png" height="150px" width="300px"/>
  <img src="https://github.com/utkrishta24/FlexmoneyBackend/blob/main/screenshots/Payment.png" height="150px" width="300px"/>
  <img src="https://github.com/utkrishta24/FlexmoneyBackend/blob/main/screenshots/error.png" height="150px" width="300px"/>
  <img src="https://github.com/utkrishta24/FlexmoneyBackend/blob/main/screenshots/Server.png" height="150px" width="300px"/>
  <img src="https://github.com/utkrishta24/FlexmoneyBackend/blob/main/screenshots/db1.png" height="150px" width="300px"/>
  <img src="https://github.com/utkrishta24/FlexmoneyBackend/blob/main/screenshots/db2.png" height="150px" width="300px"/>
</p>

## Installation
<ul>
  <li>Clone frontend repo using <code>git clone https://github.com/utkrishta24/FlexmoneyFrontend.git</code></li>
  <li>Open frontend folder in terminal.</li>
  <li>Run <code>npm i</code> to install frontend dependencies as mentioned in package.json</li>
  <li>Run <code>npm start</code> to start React app in localhost.
  <li>Clone backend repo using <code>git clone https://github.com/utkrishta24/FlexmoneyBackend.git</code></li>
  <li>Open backend folder in separate terminal.
  <li>Have your mongodb connection established before running server.js.
  <li>Run <code>npm i</code> to install backend dependencies as mentioned in package.json</li>
  <li>Run <code>node server.js</code> to start the server.
 </ul>

## Technologies Used
1) React 
2) Node
3) Express
4) MongoDB
5) Github (Version Control)
6) Render.com (for Deployment & Hosting)

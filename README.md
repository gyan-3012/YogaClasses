# Yoga Classes

A yoga classes admission application where a user Sign Up and Login to fill out the admission form by selecting a batch and paying admission fees. The Admin can see all the registered users for the current month with their payment status.
## Features
This application uses the full Login and Sign Up function. A user has to register himself first to use the functionality.

### An admin can
- Login
- Change Profile Details (like name, email, and password)
- Check Admission Details (How many users have registered this month and they have paid or not): Only Admin can do this
- And can use all other functions as well
### A user can
- Sign Up and Login
- Change Profile Details (like name, email, and password)
- Fill out the form for Yoga Classes and Select a Batch (only once a month)
- Make the payment (only once a month)


## E-R Diagram For YogaClasses

![E-R Diagram](https://gyan-3012.github.io/Attachments/YogaClasses/ER_yoga_classes.png)


## Live Application

https://yogaclasses-ufu8.onrender.com/

## Dummy Account
Some dummy accounts to check the functionality of live Application.

### Admins

- email: admin@example.com, password: admin_30

### Users

- email: gyan@example.com, password: gyan_30
- email: shiv@example.com, password: shiv_30
- email: vishal@example.com, password: vishal_30
- email: deepak@example.com, password: deepak_30
- email: shobhit@example.com, password: shobhit_30
## Run Locally

Clone the project

```bash
  git clone https://github.com/gyan-3012/YogaClasses.git
```

Go to the project directory

```bash
  cd YogaClasses
```

Install dependencies

```bash
  npm install && npm install --prefix frontend
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in root directory

`NODE_ENV = development`

`PORT = 5000`

`MONGO_URI`

`JWT_SECRET`

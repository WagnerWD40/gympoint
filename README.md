# Gympoint

A gym management software for the Rocket Seat's GoStack Bootcamp.

# The Backend

### How to run

```
cd backend
npm install
npm run dev
```

* It will run in your port 3333.

### Seeding the database

```
npx sequelize-cli db:seed:all
```

# The Front End

![](https://github.com/WagnerWD40/gympoint/blob/master/github-images/web-01.png)

![](https://github.com/WagnerWD40/gympoint/blob/master/github-images/web-02.png)

### How to run

```
cd gympoint-webapp
npm install
npm start
```

* It will run in your port 3000.

# The Mobile

![](https://github.com/WagnerWD40/gympoint/blob/master/github-images/mobile-01.png)
![](https://github.com/WagnerWD40/gympoint/blob/master/github-images/mobile-02.png)
![](https://github.com/WagnerWD40/gympoint/blob/master/github-images/mobile-03.png)

```
cd gympointMobile
npm install
```

And with your choosen android emulator from Android Studio open:

```
npx react-native run-android
```

* in linux it only worked with a metro server running in background with:

```
npm start
```

# Google maps need API access 
it can be found in
```
client/src/main.js
```
then paste your key at line 7
```
Vue.use(VueGoogleMaps, {
  load: {
    key: "api_key",
    libraries: "places",
  },
});
```
# Project setup
## Change Directory 
```
cd client
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

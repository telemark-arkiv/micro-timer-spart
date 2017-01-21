[![Build Status](https://travis-ci.org/telemark/micro-timer-spart.svg?branch=master)](https://travis-ci.org/telemark/micro-timer-spart)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# micro-timer-spart
Viser hvor mange timer som er spart vha automatisering av arbeidsprosesser siden 01. august 2016.

Henter konfigurasjonsfil fra [https://systems.config.tfk.allthethings.win](https://systems.config.tfk.allthethings.win)

## API

### **/json**

Returns json of formatted data.

#### GET

```bash
$ curl https://timer.status.t-fk.win/json
```

### **/html**

Renders formatted data to html. 

#### GET

```bash
$ curl https://timer.status.t-fk.win/html
```

## License
[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-timer-start.png "Robohash image of micro-timer-spart")

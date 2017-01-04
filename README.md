[![Build Status](https://travis-ci.org/telemark/micro-timer-spart.svg?branch=master)](https://travis-ci.org/telemark/micro-timer-spart)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# micro-timer-spart
Viser hvor mange timer som er spart vha automatisering av arbeidsprosesser siden 01. august 2016.

Henter konfigurasjonsfil fra [https://systems.config.tfk.allthethings.win](https://systems.config.tfk.allthethings.win)

## API

### **/**

Viser timer spart i html

### **/?format=json**

Returnerer json med timer spart

```JavaScript
 {
    timerSpart: 3876
 }
```

## License
[MIT](LICENSE)

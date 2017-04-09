Chocolate.grid.js
========

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[![Travis CI](https://travis-ci.org/DaniilSydorenko/chocolate.grid.js.svg?branch=master)](https://travis-ci.org/DaniilSydorenko/chocolate.grid.js)

- [Introduction](#introduction)
- [Installation](#installation)
 - [Bower](#bower)
 - [NPM](#npm)
 - [License](#license)

## Introduction
#### Welcome to Chocolate.grid.js. 
Chocolate.grid.js this is the mechanism that structures the items in the grid. It based on plain JavaScript, WebPack Module...

## Installation
```
git clone https://github.com/DaniilSydorenko/chocolate.grid.js.git
```

### Bower 

```
bower install or bower install --allow-root
```

### NPM

```
npm install --save-dev
```

## Configuration
Implement configuration code on the end of the page
```javascript

<script>
    new Chocolate({
        containerSelector: '.js-chocolate',
        containerMaxWidth: 1400,
        itemSelector: '.js-item',
        columnWidth: 250,
        columnMargin: 20
    });
</script>
```

License
-------

The MIT License (MIT)

Copyright (c) 2016 Daniil Sydorenko

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

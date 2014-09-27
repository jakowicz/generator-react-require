generator-react-require
=======================

# Introduction

This is a Yeoman generator that can be used to create a simple todo application using React/JSX, requireJS, Socket.IO, Express Jasmine, Sass, Bootstrap, JSHint and JSCS.

# Prerequisites

1. Node/Npm - http://nodejs.org/download/
2. Grunt installed globally (npm install -g grunt-cli) - http://gruntjs.com/getting-started (Grunt is also installed as a dev dependency if you'd rather use that)
3. Compass (gem install compass) - http://compass-style.org/install/
4. Sass (gem install sass) - http://sass-lang.com/install

# Install using Yeoman generator

Install generator-react-require:

```Bash
npm install -g generator-react-require
```

Make a new directory, and cd into it:

```Bash
mkdir my-react-proj && cd $_
```

Execute yo react-require:

```Bash
yo react-require
```

# How to use

Start the Node Express server using Grunt - This is used for persistent storage of your todo list entries.

```Bash
grunt backend
```

Start the frontend server using Grunt - This is the Javascript application.
Your terminal will tell you to point your browser at 0.0.0.0:9000 so see the application.

```Bash
grunt frontend
```

You can then point as many tabs/browsers at 0.0.0.0:9000 as you like. Use the form to add items to your todo list, you will see your changes appear on the other tabs in real time. Thanks to Socket IO.

# License

(The MIT license)

Copyright (c) 2014 Simon Jakowicz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

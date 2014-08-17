generator-react-require-socketio
=======================

# Introduction

This is a Yeoman generator that can be used to create a simple todo application using React/JSX, requireJS, Socket.IO, Express Jasmine, Sass, Bootstrap, JSHint and JSCS.

# Prerequisites

1. Node/Npm - http://nodejs.org/download/
2. Grunt installed globally (npm install -g grunt-cli) - http://gruntjs.com/getting-started
3. Compass (gem install compass) - http://compass-style.org/install/
4. Sass (gem install sass) - http://sass-lang.com/install

# How to use

Start the server using Node

```Bash
cd /path/to/yoreact/server;
node server.js;
```

Start the frontend using Grunt - Your terminal will tell you your point your browser at 0.0.0.0:9000 so see the application

```Bash
grunt start
```

You can then point as many tabs/browsers at 0.0.0.0:9000 as you like. Use the form to add items to your todo list, you will see your changes appear on the other tabs in real time. Thanks to Socket IO.

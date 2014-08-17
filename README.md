generator-react-require-socketio
=======================

# Introduction

This is a Yeoman generator that can be used to create a simple todo application using React/JSX, requireJS, Socket.IO, Express Jasmine, Sass and Bootstrap

# Prerequisites

1. Node/Npm - http://nodejs.org/download/
2. Grunt installed globally (npm install -g grunt-cli) - http://gruntjs.com/getting-started
3. Compass (gem install compass) - http://compass-style.org/install/
4. Sass (gem install sass) - http://sass-lang.com/install

# Start the Node server

The frontend will start a websocket with the Node server, this is used to sync updates between clients

```Bash
cd /path/to/yoreact/server;
node server.js;
```

# How to use

1. Create a virtualhost to the www folder, check this loads in your browser
2. Point as many tabs/browsers at your hostname as you like
3. Use the form to add items to your todo list, you will see your changes appear on the other tabs in real time. Thanks to Socket IO.

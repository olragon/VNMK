# I. Requires
## 1. Node.js
### Node.js: Evented I/O for V8 JavaScript
         __Homepage__: http://nodejs.org/
         __Document__: http://nodejs.org/docs/
         __Install__:
         `sudo apt-get update
         sudo apt-get install git-core curl build-essential openssl libssl-dev
         git clone https://github.com/joyent/node.git && cd node
         ./configure
         make
         sudo make install
         node -v`

### Node.js's library
      1. NPM: Node package management
         __Homepage__: http://npmjs.org/
         __Document__: https://github.com/isaacs/npm#readme
         __Install__: curl http://npmjs.org/install.sh | sh
      2. Express: High performance, high class web development for Node.js
         __Homepage__: http://expressjs.com
         __Document__: http://expressjs.com/guide.html
         __Install__: npm install express
      3. Nodemon: Monitor for any changes in your node.js application and automatically restart the server - perfect for development
         __Homepage__: https://github.com/remy/nodemon
         __Document__: https://github.com/remy/nodemon#readme
         __Install__: sudo npm install -g nodemon
      4. riak-js: Node.js client for Riak with support for HTTP and Protocol Buffers.
         __Homepage__: https://github.com/frank06/riak-js
         __Document__: https://github.com/frank06/riak-js#readme
         __Install__: npm install riak-js@lastest

## 2. Riak: Riak is a Dynamo-inspired database that is being used in production by companies like Mozilla and Comcast.
         __Homepage__: http://www.basho.com/
         __Document__: http://wiki.basho.com/
         __Install__:
          `wget http://downloads.basho.com/riak/riak-0.14/riak_0.14.0-1_amd64.deb`
          `sudo dpkg -i riak*.deb`

## 3. CoffeeScript: CoffeeScript is a little language that compiles into JavaScript.
         __Homepage__: http://jashkenas.github.com/coffee-script/
         __Document__: http://jashkenas.github.com/coffee-script/#overview
         __Install__: npm install coffee-script

__Tested on Ubuntu 10.10 desktop amd64__
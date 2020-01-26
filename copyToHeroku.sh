#!/usr/bin/env bash
cp -a dist/*                                                   /home/kentaro/local/heroku/takeyasu-app/public/dist/

cp -a earth.png                                                /home/kentaro/local/heroku/takeyasu-app/public/
cp -a node_modules/three/build/three.min.js                    /home/kentaro/local/heroku/takeyasu-app/public/node_modules/three/build/
cp -a node_modules/snapsvg/dist/snap.svg-min.js                /home/kentaro/local/heroku/takeyasu-app/public/node_modules/snapsvg/dist/
cp -a node_modules/three/examples/js/controls/OrbitControls.js /home/kentaro/local/heroku/takeyasu-app/public/node_modules/three/examples/js/controls/

cp -a three_earth.html                                         /home/kentaro/local/heroku/takeyasu-app/public/
cp -a three_earth.css                                          /home/kentaro/local/heroku/takeyasu-app/public/
cp -a js/three_earth.js                                        /home/kentaro/local/heroku/takeyasu-app/public/js/

cp -a three_lorenz.html                                        /home/kentaro/local/heroku/takeyasu-app/public/
cp -a three_lorenz.css                                         /home/kentaro/local/heroku/takeyasu-app/public/
cp -a js/three_lorenz.js                                       /home/kentaro/local/heroku/takeyasu-app/public/js/

cp -a three_body.html                                        /home/kentaro/local/heroku/takeyasu-app/public/
cp -a three_body.css                                         /home/kentaro/local/heroku/takeyasu-app/public/
cp -a js/three_body.js                                       /home/kentaro/local/heroku/takeyasu-app/public/js/

cp -a three_body2.html                                        /home/kentaro/local/heroku/takeyasu-app/public/
# cp -a three_body2.css                                         /home/kentaro/local/heroku/takeyasu-app/public/
cp -a js/three_body2.js                                       /home/kentaro/local/heroku/takeyasu-app/public/js/

cp -a mic.html                                        /home/kentaro/local/heroku/takeyasu-app/public/
cp -a mic.css                                         /home/kentaro/local/heroku/takeyasu-app/public/
cp -a js/mic.js                                       /home/kentaro/local/heroku/takeyasu-app/public/js/



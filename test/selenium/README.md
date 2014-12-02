Selenium Testing
================

Here are some instructions on how to get started with Selenium testing (on GNU).

From a clean directory:

    $ git clone git@github.com:johannessjoberg/soundnode-app.git
    $ cd soundnode-app
    $ git checkout tests
    $ npm install grunt-plato grunt-karma karma-jasmine karma-coverage karma-nodewebkit-launcher webdriverio nodewebkit grunt-contrib-compass grunt-contrib-watch grunt-node-webkit-builder

On GNU, do the following:

1. Open Gruntfile.js and change "linux64" from "false" to "true" on line 11, and comment out "download_url" on line 12.
2. Open node_modules/karma-nodewebkit-launcher/index.js and change "'/../.bin/nodewebkit'" to "'/../nodewebkit/bin/nodewebkit'" on line 49.
3. Run <code>find -name 'nw' -exec sed -i 's/udev\.so\.0/udev.so.1/g' {} \;</code> (still not a real solution).

Now we should be able to run the tests:

    $ grunt test

In order to run the Selenium tests, we have to start the Selenium server and specifically enable the suite.

From a separate terminal, acquire selenium-server-standalone-2.44.0.jar and run:

    $ java -jar selenium-server-standalone-2.44.0.jar

From the original terminal, open test/selenium/selenium_spec.js and change "var enableSelenium = false;" to "var enableSelenium = true;" on line 3. You should now be able to run the test suite with:

Create a symlink to the Soundnode-App binary:

    $ ln -s ../dist/Soundnode-App/linux64/Soundnode-App test/selenium/nw

Run the test suite with the Selenium tests enabled:

    $ grunt test

However, if the Selenium suite fails with "Error: Cannot find module 'webdriverio'", run the test suite like this instead:

    $ NODE_PATH=`pwd`/node_modules grunt test

Click on the "Connect" button on the window that pops up. In a few moments, the tests will be executed.

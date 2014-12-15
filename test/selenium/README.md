Selenium Testing
================

Here are some instructions on how to get started with Selenium testing (on GNU).

From a clean directory:

    $ git clone git@github.com:johannessjoberg/soundnode-app.git
    $ cd soundnode-app
    $ git checkout tests
    $ npm install grunt-plato grunt-karma karma-jasmine karma-coverage karma-nodewebkit-launcher webdriverio nodewebkit grunt-contrib-compass grunt-contrib-watch grunt-node-webkit-builder grunt-webdriver

On GNU, follow the instructions for making the system run at all (see separate README.md file).

Find out which version of nodewebkit we have - I had 0.11.0.

    $ npm list -g | grep nodewebkit

Let's do a hack and run Selenium from a separate terminal:

    $ cd dist/Soundnode-App/linux64
    $ wget http://selenium-release.storage.googleapis.com/2.44/selenium-server-standalone-2.44.0.jar
    $ wget http://dl.node-webkit.org/v0.11.0/chromedriver-nw-v0.11.0-linux-x64.tar.gz # ... or whatever version we need
    $ tar xvvzf chromedriver*.tar.gz
    $ mv chromedriver-nw-*/chromedriver .
    $ rm chromedriver-nw-* chromedriver*.tar.gz
    $ ln Soundnode-App nw
    $ java -jar selenium-server-standalone-2.44.0.jar -Dwebdriver.chrome.driver=./chromedriver

Now we should be able to run the tests:

    $ grunt webdriver

Click on the "Connect" button on the window that pops up. In a few moments, the tests will be executed.

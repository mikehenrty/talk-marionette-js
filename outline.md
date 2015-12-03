## Who are we?
 * Michael Henretty, Gareth Aye, Ghislain Lacroix
 * Engineers for Firefox OS and testing framework

## Who is this for?
 * People who know a little programming (preferably JS)
 * People who know automated testing (preferably mocha)
 * People who understand Integration Tests, but don't know Marionette JS

## What are Marionette JS Tests?
 * Tests for user interactions (tapping, swiping)
 * Can test backend APIs too, but usually only as part of UI interactions
 * Mostly runs on Mulet, but also device
 * Not for testing if display looks ok, but only interactions work

## What are Marionette JS Tests not?
 * Not for testing code components in isolation (mocking should be avoided)
 * Not for testing indiviual code paths (ie. function calls)
 * Not bulletproof, tests can be racy especially locally vs. in automation

## What happens when I run `make test-integration`?
 * downloads latest mulet (mozilla-download)
 * creates configurable profile (profile builder)
 * runs mulet with that profile
 * runs a client that connects to Marionette in mulet
 * client runs mocha tests using marionette commands

## What do I need to write Marionette Test?
 * Marionette Client
 * Marionette Element
 * Marionette Actions
 * Marionette Helper
 * Marionette Apps & Class Loader

## Marionette Client
 * Runs in a local nodejs process, talks to Marionette server in mulet
 * used to switch between system and app/tab contexts
 * can send JS to mulet to execute
 * can fetch Elements from the current context
 * takes screenshots for debugging
 * can waitFor things to happen
 * http://mozilla-b2g.github.io/marionette-js-client/api-docs/classes/Marionette.Client.html

## Marionette Element
 * JS Object that represents DOM element in mulet
 * can be queried to get DOM info (position, size, attributes, css, etc)
 * Can perform actions on it, like tap(position)
 * Can check if it is on screen, or hidden
 * Can be used as context for JS scripts
 * http://mozilla-b2g.github.io/marionette-js-client/api-docs/classes/Marionette.Element.html

## Marionette Actions
 * Helper library for performing user-like interactions
 * tap, double tap, long press, flick, drage, etc.
 * Actions can be queued and run in a particular order
 * add delays to simulate real user
 * uses Marionette Elements
 * http://mozilla-b2g.github.io/marionette-js-client/api-docs/classes/Marionette.Actions.html

## Marionette Helper
 * Useful Utility functions added to marionette client
 * waitForElement - wait for an element to appear on the screen
 * waitForElementToDisappear - waits for element to not show up on screen
 * fillInputField - add text into and input

## Marionette Apps & Class Loader
 * Marionette Apps allows easily launching/switching to apps
 * Each app has a library of useful functions
   * Opening Utility Tray
   * Entering search terms
   * Deleting app from Homescreen
   * opening day view in calendar
 * Class loader loads these utility libraries

## Anatomy of a test
 * import libraries (assert, helpers)
 * create the client
   * prefs, settings, apps
 * setup suite
   * get class libaries, wait for ready
 * running a test
   * launch app
   * perform action
   * wait for some element
   * assert result

## Tips and Tricks
 * Everything must wait!
 * Local environement likely much faster than automation
 * Passes once, might still be intermittent
 * don't always need to rebuild your profile each time
 * VERBOSE=1 to see mulet logs
 * put common actions into libraries

## Q&A

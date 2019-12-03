# Find the Pair Game

## Description
The game generates and hides a field of images. A player opens images by clicking them, if he finds 'twins' - the twin images will stay opened. When the whole field is opened, a player wins
![](https://github.com/wwwal2/findThePair/blob/master/src/img/gamePreview.png)

## Installation
* A production version of the game located inside the __/dist__ folder. Download __/dist__, open index.html in your browser and the game starts

* To launch the game in a developer's mode, you'll need [NodeJS](https://nodejs.org/en/download/) and [Npm](https://docs.npmjs.com/cli/install) pre-installed on your computer. Use the links to make installation.
Download the game and navigate your console inside the game folder (__/findThePair__ by default). Input in console:<br/>
`npm install`<br/>
Wait untill installation finished and then: <br/>
`npm run dev-server`<br/>
The game starts at:<br/>
[http://localhost:9000/](http://localhost:9000/)

* To build a new version of an app, after changes in the game code, run in a console:<br/>
`npm run build`<br/>
The app will generate a new __/dist__ folder with a changes done.

* To change the pictures - just replace those are in __/img__ folder. Keep the name numeration of the images from __1__ __to__ __18__, otherwise the game crashes.

## Usage
Set the time options in the menu, pick the difficulty (depends on a field size) and press __start__.<br/>
Press __play again__ to restart

## Contributing 
Alex Smirnov



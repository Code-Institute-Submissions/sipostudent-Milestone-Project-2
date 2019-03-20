# SIMON – Memory Game

## Table of contents

<!--ts-->

- [Table of contents](#table-of-contents)
- [About](#About)
  - [Goal](#Goal)
  - [Functionality](#Functionality)
  - [Initiation](#Initiation)
- [UX](#UX)
  - [Layout](#Layout)
  - [Tablet-Display](#Tablet-Display)
  - [Mobile-Display](#Mobile-Display)
  - [Additional-Note](#Additional-Note)
  - [Colour-Scheme](#Colour-Scheme)
  - [Font](#Font)
  - [Navigation](#Navigation)
  - [Audio-Content](#Audio-Content)
- [Technologies](#Technologies)
  - [Languages-Frameworks-Tools](#tests)
  - [Other-Resources](#Other-Resources)
- [Features](#Features)
  - [Separate-Functions](#Separate-Functions)
  - [Features-Left-to-Implement](#Features-Left-to-Implement)
- [Testing](#Testing)
  - [Key-Points](#Key-Points)
  - [Tools-and-Methods-Used-for-Testing](#Tools-and-Methods-Used-for-Testing)
  - [Additional-Points](#Additional-Points)
  - [Tested-Sections-1-HTML-CSS](#Tested-Sections-1-HTML-CSS)
  - [Tested-Sections-2-JavaScript-Using-The-Jasmine-Framework](#Tested-Sections-2-JavaScript-Using-The-Jasmine-Framework)
- [Deployment](#Deployment)
  - [Identified-Issues](#Identified-Issues)
  - [Result](#Result)
- [Credits](#Credits)
  - [Content](#Content)
  - [Acknowledgements](#Acknowledgements)
    <!--te-->

## About

Milestone Project Two / Interactive Frontend Development / Code Institute

This application (app) is a simple single-player memory game inspired by an electronic game of memory skill called 'Simon.' The purpose of the game is to replicate a continually growing sequence of signals which in this rendition displays via a synchronised combination of musical tones and animated buttons. To find out more about the SIMON memory game, please see this brief [video](https://www.youtube.com/watch?v=1Yqj76Q4jJ4 "about SIMON") and [Wikipedia](<https://en.wikipedia.org/wiki/Simon_(game)> "more about SIMON") entry for both rules and history of the original.

#### Goal

Reproduce a simple single-player memory game, suitable for website usage, and inspired by SIMON, a classic memory game which was popular in the 1980s. The core focus of this project is on functional game logic created with JavaScript.

#### Functionality

- A random series of synchronised sound & light buttons get presented to the user.

- The user is required to input a sequence of synchronised audio & light buttons correctly which can be done by either pressing the according button with a cursor on laptop/desktop devices, a finger/thumb on smaller devices or by pressing an individual letter on a keyboard which corresponds to a specific illuminated synchronised audio & light button. Additionally, upon valid input by the user, the same series of synchronised sound & bright buttons is replayed but with an additional step.

- Users will hear a sound that corresponds to an individual button whenever a pattern of synchronised audio & light controls play.

- If a user inputs the wrong pattern field, a notification by a specific sound accompanied with a text message will appear in the 'score tracker' display, after which point the series of synchronised audio & light buttons will play again to remind the user the of sequence so they may try again.

- The user can see how many steps are in the current sequence of synchronised audio & light buttons to be selected.

- If a user wants to restart the game, they can select a button which grants this action; thus, returning the app to a single step.

- The user has the option of playing in both 'Strict' mode which restarts the game whenever an incorrect field gets chosen or 'Normal' mode which only repeats the pattern subsequent of the wrong button getting pressed.

- The user can win the game by achieving a total of 10 correct steps, after which point the game app will salute them with a congratulations message in acknowledgement of their triumph and ends.

#### Initiation

- Research to understand what apps of similar scope were already doing in terms of functionality which provided me with a list of what I consider to be feasible options for functionality implementations to acknowledge and consider pre-production.

## UX

#### Layout

- In my opinion, Single Page Apps (SPA) are better for making responsive websites, supporting mobile devices, tablet & Desktop. Furthermore, game apps seem to demand this option as the user's attention is required to focus on interactive events and self-triggering actions; thus, an alternative option to SPA seems counterproductive.

- No extra queries are required to the server to download pages; which consequently makes the app load faster.

- By opting for a SPA, better user-friendliness arises via a purely linear experience, with a clear beginning, middle, and end.

- From research looking into apps which are similar in scope to that of the project requirement, I noticed that many adopted a circular user interface (UI) style alike to that of the [original Simon (game) product](<https://en.wikipedia.org/wiki/Simon_(game)> "Demonstration: Simon game project") of allowing a user to interact, they generally had little to no page/scale responsiveness and poor rendering. In my opinion, which is subjective, of course, I feel that the design structure used for the original real-world physical Simon game product diminishes the user experience when applied to a website format. For a quick look at the UI developed for this project, please refer to the image animations below. Alternatively, you can access a live demonstration of the Simon game project app by clicking [here](https://sipostudent.github.io/Milestone-Project-2/ "Demonstration: Simon game project").

#### Tablet-Display

- Please note, except a slight difference in page/scale responsiveness, desktop applies the same UI.

<img src="assets/img/simonGame2.gif" width="300">

#### Mobile-Display

- This image animation represents the standard UI across most modern mobile devices.

<img src="assets/img/simonGame1.gif" width="300">

#### Additional-Note

- Games generally require the user's to interact consistently; thus, the developed app is in a way that keeps things dense as opposed to thinly dispersed or scattered across multiple separate pages.

#### Colour-Scheme

- In the original Simon (game) colours differentiated the four wide plastic arcs on the face of the device, which consisted of blue, yellow, red, and green. To add some originality, a set of related colours has been utilised as an inspirational alternative to the original colour choice which entails the following:

- Deluminate colours

- ![#00db78](https://placehold.it/15/00db78/000000?text=+) `#00db78` colour description: Pure (or mostly pure) cyan - lime green.
- ![#D33131](https://placehold.it/15/D33131/000000?text=+) `#D33131` colour description: Strong red.
- ![#F7BF18](https://placehold.it/15/F7BF18/000000?text=+) `#F7BF18` colour description: Vivid orange.
- ![#1D89F4](https://placehold.it/15/1D89F4/000000?text=+) `#1D89F4` colour description: Vivid blue.

- Illuminate colours

- ![#29FF9E](https://placehold.it/15/29FF9E/000000?text=+) `#29FF9E` colour description: Vivid cyan - lime green.
- ![#E07070](https://placehold.it/15/E07070/000000?text=+) `#E07070` colour description: Soft red.
- ![#FAD362](https://placehold.it/15/FAD362/000000?text=+) `#FAD362` colour description: Soft orange.
- ![#66AFF8](https://placehold.it/15/66AFF8/000000?text=+) `#66AFF8` colour description: Soft blue.

A colour encyclopedia provided by [ColorHexa](https://www.colorhexa.com/ "ColorHexa Official Site") was used to generate matching colour palettes.

A placeholder image service provided by [Placeholder.com](https://placeholder.com/#How_To_Use_Our_Placeholders "Placeholder.com Official Site") was used to provide a list of colours for reference in the README file.

Opacity/Transparency – property to add transparency to the background of an element

- Navigation-bar

Box-shadow CSS – property to add shadow effects around an element's frame

- Navigation-bar

Linear-gradient – property to create an image consisting of a progressive transition between two or more colours along with a straight line

- Navigation-bar
- ScoreTracker & Controls Display

Hover-CSS – to display pseudo-class matches when the user interacts with an element with a pointing device but does not necessarily activate it.

- Navigation-bar

#### Font

- Being as the website modelling is off a digital app a square geometric sans-serif typeface choice was selected; thus, helping to emphasise a robotic tone to the displayed text content; a subjective opinion, of course.

#### Navigation

- Fixed navigation makes it easier for users to browse the website and increase retention: In some ways, it's a passive call to action; always visible, always available. As a frequent website user, I get tired of scrolling vertically and feel the need to change. People like things which save them complication and time. So, by consistently maintaining a browser bar or menu anchored while users are scrolling avoids them having to scroll up to get to the bar when they want to browse other environments, sections, content and so on.

- Maintaining the logo visible increases brand value. Today there is an enormous number of apps, many with identical or similar features, so I feel that it’s vital to make a good impact on users and retain their interest, which can be all linked to a good brand image. In this case, a solid brand reputation already exists due to the long-running popularity of the Simon (game) which this project is based.

- By having fixed navigation with an active hover which status highlights according to the user's position of any particular section, it makes it less likely that users will get lost and instead know where they are at all times. PLEASE NOTE: In this case, this feature is somewhat non-applicable as all app content is based off a single page, and the navigation links divert users to external websites.

#### Audio-Content

The physical retail Simon (game) product has sound in addition to lighted buttons. So, for this project, a home synthesiser was used to record sounds which replicated the keys of the original game audio but utilised different sound timbres. Also, original music jingles were created and placed to trigger at specific points in the game, either for both notification and increased user experience. These consisted of the following:

- Game Sounds


    - btnGreen sound description: A major
    - btnRed sound description: D major
    - btnYellow sound description: G major
    - btnBlue sound description: E major
    - soundOn sound description: A sus4
    - soundOff sound description: D M7
    - soundCorrect sound description: D M7
    - soundIncorrect sound description: A Dim
    - winGame sound description: A sus4
    - halfWaypoint sound description: B minor (not utilised)

- Individual Variable/DOM queries were set for each sound, for example, “sound1.”

- assets/sounds folder contains all of the mp3 audio files.

- Separate functions were created to play music keys and jingles.

## Technologies

#### Languages-Frameworks-Tools

- [HTML5](https://www.w3.org/TR/html5/ "HTML5 Official Site")

  - Semantic markup language utilised as the shell of the site.

- [CSS3](https://www.w3.org/Style/CSS/ "Cascading Style Sheets Official Site")

  - Cascading Style Sheets as the design of the site.

- [jQuery](http://jquery.com/ "Cascading Style Sheets Official Site")

  - HTML document traversal and manipulation, event handling.

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JavaScript Official Site")

  - Metrics

    - Function with the most significant signature takes 1 argument, while the median is 0.
    - The most significant function has 14 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 5 while the median is 2.

  - One unused variable
    - sound9 located at line 23/index.js

- [Bootstrap - v4.1.1](https://getbootstrap.com/docs/4.1/getting-started/introduction/ "Bootstrap Official Site")

  - Utilised for developing the entire UI and consistent throughout

- [Google Fonts](https://fonts.google.com/ "Google Fonts Official Site")

  - Saira font applied across the entire website

- [Font Awesome - v5.0.13](https://fontawesome.com/ "Fontawesome Official Site")

  - Source for all utilised icons

#### Other-Resources

- https://getbootstrap.com/
- https://www.w3schools.com/
- https://stackoverflow.com/
- https://slack.com/

## Features

#### Separate-Functions

Because the website uses a 'single page’ design, the encapsulation of all code or content is within just one document (index.html) was adequate.

- Bootstrap navigation bar/header – allows users to navigate to external websites. These consist of Wikipedia for Simon (game) history, Hasbro where users can purchase the original game, optional, of course, and the GitHub repository of the author/developer which contains the complete source code for the app; all assets included.

- HTML hyper Links – which refers to data that the user can directly follow either by clicking and which point to a whole document or a specific element within a document. These can be found by clicking the particular text, such as that in the navigation bar, or clicking on precise icons (Fontawesome) like those in the events and home section of the website.

- Power – A 'checkbox' allows users to toggle between having the Simon (game) app in either an activated or deactivated status. Also, once activated, the app will remain in a standby state unless the user unticks the checkbox which prompts deactivation.

- Start/Reset – Doubles as both a game initiation and rest game score trigger.

- Strict – A checkbox function which when ticked to signify 'Strict Mode' restarts the game whenever an incorrect field gets chosen. When the checkbox is unticked 'Normal Mode' is active which during gameplay only repeats the pattern in the event of the wrong button pressed.

- Game Levels – By default, the number of levels is to 10, although flexible to an integer of any amount, there is no limitation.

- Keyboard controls for the game.

  - Green - P
  - Red - L
  - Orange - A
  - Blue - Y

- Sound Stabs /Musical Jingles

  1. soundOn

     - Type = Musical Jingle
     - Purpose = game activation

  2. soundOff

     - Type = Musical Jingle
     - Purpose = game deactivation

  3. soundWingame

     - Type = Musical Jingle
     - Purpose = user wins the game

  4. soundHalfwaypoint

     - Type = Musical Jingle
     - Purpose = user reaching game halfway point (currently not utilised)

  5. btnGreen

     - Type = Sound Stab
     - Purpose = Syncs with BtnGreen

  6. btnRed

     - Type = Sound Stab
     - Purpose = Syncs with BtnRed

  7. btnYellow

     - Type = Sound Stab
     - Purpose = Syncs with BtnYellow

  8. btnBlue
     - Type = Sound Stab
     - Purpose = Syncs with BtnBlue

#### Features-Left-to-Implement

- Game Tempo – should speed up incrementally, perhaps on the 5th, 9th and then if modification of the game happened for winning completion number of 20 as opposed to the current number of 10, then perhaps another speed increase on the 13th step, but all subject to change pre-implementation.

- Facebook Login – would allow the storing of user details.

- Leaderboard - which would allow the storing of user identity details (name) and high scores.

- Animated icons, text, and gradient background – for transitions to connect between two visual states.

- Pause function - so the game can be paused at any stage. Consequently, this would also allow for the use of the onboard but currently not assigned 'sound9' musical jingle which was designed to signify a player reaching the 'halfway point' of the game. The game would need to pause, so not to clash with the playtime of the audio piece, but then resume it's randomised cycle of synchronised light & sound patterns once the music had ended. A text message which scrolled across the score tracker display in any direction could also be added to signify this milestone, perhaps animated for additional user experience.

## Testing

#### Key-Points

- N/A

#### Tools-and-Methods-Used-for-Testing

- HTML
  - Freeformatter.com https://www.freeformatter.com/
- CSS
  - Freeformatter.com https://www.freeformatter.com/
- JavaScript

  - JS Hint https://jshint.com/
  - JS Lint https://www.jslint.com/

#### Additional-Points

- Both virtual and real device tests were run to test and access the functionality of the app and identify any potential errors. Also, and although the app UI aesthetics are not a high priority requirement for this project, the app responsiveness was also tested by resizing the window with every addition of new code. Please see below a full list of devices used in the testing phase:

- Phones

  - Galaxy Note 3 (simulation and actual device)
  - Galaxy Note 9
  - Galaxy S5
  - Galaxy S9/S9+
  - iPhone 5/SE
  - iPhone 6/7/8 (simulated and real device)
  - iPhone 6/7/8 Plus
  - iPhone X
  - LG Optimus L70
  - Microsoft Lumia 550
  - Microsoft Lumia 950
  - Nexus 5X
  - Nexus 6P
  - Nokia 8110 4G
  - Pixel 2
  - Pixel 2 XL

- Tablets
  - iPad (simulation and actual device)
  - iPad Mini
  - iPad Pro (10.5-inch)
  - iPad Pro (12.9-inch) (simulated and real device)
  - Kindle Fire HDX
  - Nexus 10
  - Nexus 7

* Laptops

  - MacBook Pro (simulated and real device)
  - Asus UX 305 (simulation and actual device)

* Televisions
  - 1080p Full HD Television (simulated and real device)

- Website responsiveness was also tested by resizing the window with every addition of a new code sequence.

#### Tested-Sections-1-HTML-CSS

- External links to third party websites and code authors GitHub repository.

- Checked button sizes so, they were responsive and large enough to be clicked.

- Ensured individual section headers resized and appeared well when viewed on various device screens and added opacity to the navigation bar to allow for more visibility of section header area on smaller devices.

- Spell checked all text content.

- HTML and CSS validation via [w3.org](https://www.w3.org/ "W3C Official Site").

- Checked margins and padding of the container (sections) to ensure the content within it did not look disproportionate on various screen sizes, individually smaller devices.

#### Tested-Sections-2-JavaScript-Using-The-Jasmine-Framework

- To run tests performed by Jasmine, go into the folder entitled ‘Jasmine’ and view the file called ‘indexJasmine.html’ inside of a web browser.

- Testing user interface was performed via playing the game numerous times.
  Power and Strict checkboxes were clicked to guarantee that they worked accurately.

  - Start/Reset checkbox was pressed to guarantee that it worked accurately, both starting and resetting the game score.

  - I checked the featured buttons against the gameplay sequence in the browser developer console to guarantee that the right buttons illuminated.

  - I checked the score as I played to guarantee that it expanded by one point for each correct round selection.

  - I played the game numerous times to guarantee that all audio bites were triggered, and that alpha/numeric notifications, such as score, wrong button selection choice, and game win notification alerts showed conclusively at all times.

  - I made intentional blunders in strict mode to guarantee that the mistake tone played, the right notification message appeared, and the score reset after recommencing gameplay.

  - I made conscious mistakes in normal mode to guarantee that the blunder tone played, the right message notification appeared, and the game sequences resumed shortly afterwards and kept on working effectively.

## Deployment

- Used GitHub Pages to deploy the final version (https://sipostudent.github.io/Milestone-Project-2/).

- All the tests performed before deployment was processed a second time on the deployed final version.

#### Identified-Issues

- N/A

#### Result

- I would suffice this was a successful deployment. The achievement of all project requirements was successful, and the game app has indeed proven to be functional, user-friendly, and aesthetically pleasing.

## Credits

#### Content

- All written content is bespoke and created by the code author (Sipo Charles).

#### Acknowledgements

- I received inspiration for this project from visiting [miniclip.com](https://www.miniclip.com/games/en/ "Miniclip Official Site"), and searching Google Images for Simon (game) renditions which lead me to specific compositions, but mostly from my interaction with other students on Code Institute's Full Stack Software Development Programme.

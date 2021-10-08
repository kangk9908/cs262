# CS 262 Lab04
This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/04analysis/lab.html

## Answers to the lab questions:
### Part 1
1. What React construct is used to implement separate pages of an application (cf. separate webpages on the Web)?
* To implement separate pages of an application, the React construct Stack Screen and Navigator is used. They are both used for configuring the navigator. Screen elements are the Navigator's children to define the route configurations.
2. What is the React Navigation concept that is analogous to a URL/URI on the Web?
* React Navigation's concept that is analogous to a URL/URI on the web is the React Navigation's native stack navigator uses route to transition between screens and manage navigation history.
3. The onPress event handler for the home screen component is specified as () => navigation.navigate('Details'). Can we just say navigation.navigate('Details')? Why or why not?
* No, we cannot just say navigation.navigate('Details'). This is because the event handler is a function (anonymous or named), and not a function call.
### Part 2
1. Explain how the hard-coded movie list is presented as a list of titles on the homepage.
* The hard-coded movie list is presented as a list of titles on the homepage by not using a button but a flatlist instead. The flatlist contains 'item' and when pressed (onPress), takes you on a different route and presents 'item'.
2. Explain how the details screen presents the details of a single movie.
* When a movie is pressed, the detail screen receives the route parameters passed by the home screen navigation function.

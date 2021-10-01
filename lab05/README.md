# CS 262 Lab05
This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/05design/lab.html

## Answers to the lab questions:
1. Of what benefit was the refactoring phase of this lab?
* One of the many benefits of refactoring we learned from this lab is that instead of having one really long code in App.js, we can divide the code up and call functions created in a different directory located within the project file. This allows for other users to be able to better understand our code. Another benefit is that this way, when we run into a problem or bug, because it is divided up, we can debug it with less confusion.
2. What do the export commands do?
* The export commands allow the function to be sent out or called in from a different function. For example, we can call in a function to the main function from the export function.
3. This application uses stack navigation. What does the stack do here?What is the deepest this stack can get in this application?
* The stack is used to create screens so that the stack navigation can be used to transition between screens where each screen is placed on top of a stack. The deepest this stack can get in this specific application is the about screen after going into the details screen of a movie.
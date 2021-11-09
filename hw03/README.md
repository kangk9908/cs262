# CS 262 HW03
This homework is based on https://cs.calvin.edu/courses/cs/262/kvlinden/09is/homework.html

## Answers to the homework questions:
### Part 1
1. What are the (active) URLs for your data service?
* https://hidden-sands-53588.herokuapp.com/
* https://hidden-sands-53588.herokuapp.com/players
* https://hidden-sands-53588.herokuapp.com/players/1
* https://hidden-sands-53588.herokuapp.com/players/-1
* https://hidden-sands-53588.herokuapp.com/blob
* https://hidden-sands-53588.herokuapp.com/players/1/pr/
* https://hidden-sands-53588.herokuapp.com/players/2/pr/
* https://hidden-sands-53588.herokuapp.com/players/3/pr/
2. Which of these endpoints implement actions that are idempotent? nullipotent?
* Nullipotent - Get
* Idempotent - Put, Delete
3. Is the service RESTful? If not, why not? If so, what key features make it RESTful.
* Yes, it can be used for fast performance, is scalable, simple, can be modified, portable, visible, and reliable.
4. Is there any evidence in your implementation of an impedance mismatch?
* No, because we are calling onto a database, inputting, deleting, and calling information. Nothing is added that we didn't add.
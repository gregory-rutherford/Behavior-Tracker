# Behavior-Tracker

### The Idea
A chart that helps you monitor your own behavior. The *MVP* of this app will provide the user with a weekly calendar interface that allows them to enter tasks they wish to keep track of. The task can be marked *completed* or *not yet completed* for each day of the week. 

### The Working Outline (more for my own throught process than presentation)
__*MVP*__
An id is stored via local storage and once the user enters a task the task object will be saved with all the completed entries set to false. The entered name will be the _taskname_ and it will save a timestamp as well. 

### The Stack

__Front End__
* React
* Materialize
__Back End__
* Feathers.js
* Express (via Feathers)
* Mongoose

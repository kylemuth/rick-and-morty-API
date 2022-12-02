# SWAPI API Practice

---

## Scope of Project:

In this application I used the poster images of the first five Star Wars movies as clickable buttons that allow you to see information pertaining to each specific movie using the SWAPI API.

---

## Lessons Learned:

### ~~Having an event listener listen for the same class that is applied across multiple HTML tags~~

### Update: Determined another way to implement event handler when choosing a movie

Instead of creating a function that would cycle through HTML elements searching for a specific class, I decided to implement an event listener that listens for a click across the window element.

Once a user clicks, we store the PointEvent path into a variable and determine the ID of the selected element. Since ID's should be unique to a single element, we are able to determine which of the movies a user has selected.

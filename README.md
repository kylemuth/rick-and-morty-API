# SWAPI API Practice

---

## Scope of Project:

In this application I used the poster images of the first five Star Wars movies as clickable buttons that allow you to see information pertaining to each specific movie using the SWAPI API.

---

## Lessons Learned:

### Having an event listener listen for the same class that is applied across multiple HTML tags

In order to do so there are a number of ways to solve this problem. One would be to create a function that loops over all HTML elements and determining which ones possess a certain class that you have specified.

Then, to control the state of whether or not a certain button is selected we can assign a boolean value and check if that value is true or false to determine which specific button is selected. In order to do so, though, we must ensure that after every time a button is selected we remove said boolean value unless we click on an already selected button.

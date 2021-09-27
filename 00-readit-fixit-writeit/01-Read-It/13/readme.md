# READ IT

## EX 13

- Examine the parseMovieData function. What has changed? Why aren't we using forEach here?
  - we are now creating an empty variable called result and using for...in we go over all objects properties and store them in the result variable
- Look at the documentation of for...in
- Look at the documentation of the .sort() function. Explain how it's applied here.
  - we create a new constant named orderByYear and we use the year property. in the createList function we use sort() to sort in an ascending order, which is the default order.
- Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array before and after the createList function. What's the difference? Can you explain why there is a difference?
  -

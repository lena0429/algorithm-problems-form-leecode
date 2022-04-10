# How to Implement Combinations

### Possible Questions
* Given N things, in how many ways can we arrange them?
* In how many ways can we do X?
* What is the shortst way to do Y?

### What is a Combination?
A combination is a collection of things where `the order does not matter`.
<br />
Given a set of n things, there are 2^n possible combinations.
<br />

If we try to visualize a combination, it is going to be a tree. If we are trying to generate a combination from scratch, we probably start with an empty combination. And then from there, we are going to make a decistion about an item we choose. We can each choose to include the item, or NOT include the item. And the pattern to recognize in the visual tree is from one node to the next. The point is that the decision making process is binary, meaning every desicion we make has TWO possible outcomes. 

* Time Complexity - O(2^n)
* Space Complexity - O(n*n)
<br />

The space complexity starts with the number of recursive calls on the call stack - the stack depth we used. If we look at how the recursive case relates to the base case, at any point of time from one recursive call to the next we are shrinking the size of the array by exactly one element. That gives us at least `n` stack frames. Then we need to consider any work we do within each stack frame. We know that there are `n` stack frames and each stack frame is going to contain an array of at worst `n` elements. As a result the space complexity is going to be `O(n*n)`.
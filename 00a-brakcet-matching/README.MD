# Bracket Matcher

Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

* Examples
Input: "(coder)(byte))" <br/>
Output: 0 <br/>
Input: "(c(oder)) b(yte)" <br/>
Output: 1 <br/>

### Solution - the Stack Data Structure
I can use the stack data structure to solve this problem. I would iterate through the given string for example `"(hello (world))"` from left to right. When I see an opening symbol, I would `push` it on top the stack. For normal characters I don't need to do anything and just skip them. When I see another opening symbol, I push it on top of the stack. As soon as I see a closing symbol, that means I should be matching up an opening symbol that opend previously. At this moment I should `pop` the top of the opening symbol previously push out of the stack. When I finish my iterating and my stack is empty, that means I matched up all the symbols I needed to. Else if I finish my iterating and found there are still open parentheses left, I would return false or zero indicating that this is not a well-formed string. 

There are some other scenarios I should consider too. If I end up with any extra items by the end of my stack, that means I don't have enough closing parentheses to match up the opening symbols. So I should return false or zero indicating that this is not a well-formed string. If I see a closing symbol but there is no opening symbol on the stack, that means I can simply return false or zero in this scenario. 

After we finish iterating through all the elements, if the stack is empty in the end we will return 1 otherwise we will return 0.

### Big O
* Time Complexity - O(n)
* Space Complexity - O(n) 
<br />
Since we are using the stack, in the worst case of scenario, we will have to put an item on the stack for every character of the string if the string is composed with mostly parentheses. 
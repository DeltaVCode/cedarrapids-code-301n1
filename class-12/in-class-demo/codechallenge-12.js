// - a|b is an or in regex

// 286-123-4567
// (286)-123-4567
// 1-815-467-2889



// (^(286)|^(\(286\)))-


// look at the or
// lots of ways to write numbers

// (206) selects both but lets select more than those  ^(206)|^, which doesnt select the one in()

// doesnt select 602 looking for literal number 

// with square brackets ^[206]|^ is now looking for multiple numbers 
 
// to look for 206 and parentheses  ^(206)|^(\(206\))

// add the dash ^(206)|^(\(206\))-

// select everything (^(206)|^(\(206\)))-

// so we can keep digging down to find that number 
// 026

// 206-123-4567

// (206)-123-4567
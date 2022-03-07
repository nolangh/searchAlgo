/*2.  Given a string of text, write a function named search which takes two parameters: a string of text
    and a string to search for in the text, and returns an array of all the words that contain the specified string.
    Your function should be case insensitive.

    function search(text, searchTerm) {...}
   
    Example:
       search('Those who dare to fail miserably can achieve greatly.', 're') => ['dare', 'greatly']
       search('Success is how high you bounce when you hit bottom.', 'ce') => ['Success', 'bounce']
       search('Great minds discuss ideas; average minds discuss events; small minds discuss people.', 'discuss') => ['discuss', 'discuss', 'discuss']

    Hint 1: You can get an all uppercase copy of a string by calling .toUpperCase(), or an all lowercase copy by calling .toLowerCase()
    Hint 2: Think about how you would create an array from the string passed in
*/
function search(text, searchTerm) {
	let newText = text.toLowerCase();
}

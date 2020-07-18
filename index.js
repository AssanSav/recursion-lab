function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    string = string.substring(1, string.length)
    return printString(string)
  }
  else {
    return true
  }
}


function reverseString(string) {
  return string === "" ? "" : reverseString(string.slice(1)) + string[0]
}


function isPalindrome(string) {
  if (string.length === 1) return true
  else if (string[0] === string[string.length - 1]) return isPalindrome(string.slice(1, string.length -1)) 
  else return false
}


function addUpTo(array, index) {
  if (index > 0) return array[index] + addUpTo(array, --index)
  else return array[0]
}


function maxOf(array) {
  if (array.length > 1) return Math.max(array.shift(), maxOf(array))
  else return array[0]
}


function includesNumber(array, number) {
  if (array[0] === number) return true
  else if (array.length === 0) return false
  else return includesNumber(array.slice(1), number)

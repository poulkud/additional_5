module.exports = function check(str, bracketsConfig) {
  var chars = str.split(''),
      stack = [],
      open = ['{', '(', '['],
      close = ['}', ')', ']'],
      openBracket,closeBracket;
  for (var i = 0, len = chars.length; i < len; i++) {
         openBracket = open.indexOf(chars[i]);
         if (openBracket !== -1) {
            stack.push(openBracket);
            continue;
         }
         closeBracket = close.indexOf(chars[i]);
         if (closeBracket !== -1) {
          openBracket = stack.pop();
             if (closeBracket !== openBracket) {
                 return false;
               }
             }
           }
  if (stack.length !== 0) {
    return false;
      }
  return true;
    }
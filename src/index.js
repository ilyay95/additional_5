module.exports = function check(str, bracketsConfig) {
  // your solution
  if(str_odd(str)) return false;
  let brac_arr = str.split('');
  return remov(brac_arr, bracketsConfig);
}

function str_odd(str) {
  if(str.length % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

function remov(brac_arr, bracketsConfig) {
  var brackets_size = brac_arr.length;
  for( var j = 0; j < brackets_size; j++) {
    brac_arr.forEach(function(item, i, arr) {
      if(bracket_arr(item, arr[i+1], bracketsConfig)) {
        brac_arr.splice(i, 2);
      }
    });
  }
  return arr_empty(brac_arr);
}

function arr_empty(brac_arr) {
  if(brac_arr.length === 0) {
    return true;
  } else {
    return false;
  }
}

function bracket_arr(value, value_next, bracketsConfig) {
  for (let item of bracketsConfig) {
    if( value === item[0] && value_next === item[1] ) {
      return true;
      
    }
  }
  return false;
}


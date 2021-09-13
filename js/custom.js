function num(a) {
  let num = a;

  return {
    add: function(b) {
      if (isNaN(b)) {
        return NaN;
      }
      
      return num += b;
    },
    sub: function(b) {
      return num -= b;
    },
    set: function(b) {
      return num = b
    },
    get: () => num
  }
}

const myNum = num(100);
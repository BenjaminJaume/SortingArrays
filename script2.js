let convert = (str) => {
  //let color;
  
  const toDec = (num) => parseInt(num, 16);
  const toHex = (num) => ("0"+(Number(num).toString(16))).slice(-2).toUpperCase();
  
  if(str.indexOf("#") != -1) {
    return(`${toDec(str.substring(1, 3))},${toDec(str.substring(3, 5))},${toDec(str.substring(5, 7))}`);
  }
  else {
    const f = str.indexOf(',');
    const s = str.indexOf(',', f + 1);
    
    return(`#${toHex(str.substring(0, f))}${toHex(str.substring(f + 1, s))}${toHex(str.substring(s + 1, str.length))}`);
  }
}

console.log(`Color #AA00FF. Converted: ${convert("#AA00FF")}`);
console.log(`Color "0,255,0". Converted: ${convert("0,255,0")}`);
function labaOne() {
  let textOutPut = document.querySelector(".inputed-text");

  str = prompt("Enter the text suda", "");

  JSON.stringify(str);

  if (str) {
    textOutPut.textContent = `Вы ввели:
    ${str}`;
  }

  function chunkString(str, len) {
    const size = Math.ceil(str.length / len);
    const r = Array(size);
    let offset = 0;

    for (let i = 0; i < size; i++) {
      r[i] = str.substr(offset, len);
      offset += len;
    }

    return r;
  }

  let finalArray = chunkString(str, 80);

  function countLetters(inputObject) {
    for (let [key, value] of Object.entries(inputObject)) {
      console.log(`${key}: ${value}`);
      let ar = value;

      let str = ar.split(" ");

      o = {};
      str.forEach(w => w.split("").forEach(e => (o[e] = (o[e] || 0) + 1)));
      console.log(o);
    }
  }

  return countLetters(finalArray);
}
labaOne();

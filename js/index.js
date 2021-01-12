function convertToJson(){
  let outputArea = document.getElementById("text-area-2");
  let inputArea = document.getElementById("text-area-1").value
  
  try {
    outputArea.value = JSON.stringify(csv2json(inputArea));
  
    console.log(inputArea);
  } catch (err) {
    console.log(err);
    return outputArea.value = "Invalid input...";
  }
  
}

function convertToCsv(){
  let inputArea = document.getElementById("text-area-2").value;
  let outputArea = document.getElementById("text-area-1");

  try {
    outputArea.value = json2csv(inputArea);

    console.log(inputArea);
  } catch (err) {
    console.log(err);
    return outputArea.value = "Invalid input...";
  }
  
}

function csv2json(csv) {
  if (csv.length === 0) {
    return "Empty input";
  }

  const lines = csv.split('\n');
  const result = [];
  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {        
    if (!lines[i])
      continue
    const obj = {}
    const currentline = lines[i].split(',');

    for (let i = 0; i < headers.length; i++) {
      obj[headers[i]] = currentline[i];
    }
    
    result.push(obj);
  }

  console.log(result);
  return result;
}

function json2csv(array) {
  if (array.length === 0) {
    return "Empty or invalid input";
  }
  const array = typeof array !== 'object' ? JSON.parse(array) : array;
  let str = `${Object.keys(array[0]).map(value => `${value}`).join(",")}` + '\r\n';

  return array.reduce((str, next) => {
      str += `${Object.values(next).map(value => `${value}`).join(",")}` + '\r\n';
      return str;
     }, str);
}

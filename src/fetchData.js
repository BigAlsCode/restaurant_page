// sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
const sheetId = "1xFkryNUJ6z7jvS6cwxE-CPZ-YDBcq4xAWugDE2j5RWE";
// sheetName is the name of the TAB in your spreadsheet
const sheets=[
  'beer', 'cocktails', 'Dinner Front', 
  'Dinner Back', 'Breakfast Front', 'Breakfast Back', 
  'Special Events', 'contact'
];



function getData(sheetURL){
  return fetch(sheetURL)
  .then((response) => response.text())
  .then((csvText) => handleResponse(csvText));
}


function handleResponse(csvText) {
  let sheetObjects = csvToObjects(csvText);
  return sheetObjects;
}

function csvToObjects(csv) {
  const csvRows = csv.split("\n");
  const propertyNames = csvSplit(csvRows[0]);
  let objects = [];
  for (let i = 1, max = csvRows.length; i < max; i++) {
    let thisObject = {};
    let row = csvSplit(csvRows[i]);
    for (let j = 0, max = row.length; j < max; j++) {
      thisObject[propertyNames[j]] = row[j];
      // BELOW 4 LINES WILL CONVERT DATES IN THE "ENROLLED" COLUMN TO JS DATE OBJECTS
      // if (propertyNames[j] === "Enrolled") {
      //   thisObject[propertyNames[j]] = new Date(row[j]);
      // } else {
      //   thisObject[propertyNames[j]] = row[j];
      // }
    }
    objects.push(thisObject);
  }
  return objects;
}

function csvSplit(row) {
  // this prevents commas in spread sheet cells from acting as line breaks
  const regex=/,(?=(?:[^"]*"[^"]*")*[^"]*$)/
  return row.split(regex).map((val) => val.substring(1, val.length-1).replace(/"/g,''));
}

export async function main() {
  let data=[];
  for(let sheet of sheets){
    const sheetName = encodeURIComponent(sheet);
    const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

    const d=await getData(sheetURL);
    data.push(d);
  }
  return data;
}

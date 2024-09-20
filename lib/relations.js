import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

export function getRelationsForPerson(personId) {
  console.log({ personId });
  const filePath = path.join(dataDir, "relations.json");

  const relationsString = fs.readFileSync(filePath, "utf8");

  const relations = JSON.parse(relationsString);

  // we are going to filter the jsonObj
  // pass each relation in jsonObj to a function
  // that function will compare the personId on teh object to the personId passed to the getRelationsForPersonFunction
  return relations.filter(function (relation) {
    return relation.personId === parseInt(personId);
  });
}

export async function getData(idRequested) {
  const filePath = path.join(dataDir, "persons.json");
  const filePath2 = path.join(dataDir, "relations.json");

  const jsonString = fs.readFileSync(filePath, "utf8");

  const jsonObj = JSON.parse(jsonString);

  const objMatch = jsonObj.filter(function (obj) {
    return obj.id.toString() === idRequested;
  });

  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
  return objReturned;
}

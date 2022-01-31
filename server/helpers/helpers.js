import fs from 'fs';
import path from 'path';



const __rootData = "./Data"
const __rootUserData = `${__rootData}/UsersData`;

// json read/write

export function loadJsonFromFile(userName, date) {
    // check if the file exists, create it and if it does not 
    if (userName && date) {
        const myFile = path.resolve((`${__rootUserData}/${userName}`), `${date}.json`);
        if (!fs.existsSync(myFile)) {
            return { entries: [] };
        }
        return JSON.parse(fs.readFileSync(myFile));
    }
    const myFile = path.resolve(__rootData, "activities.json");
    if (!fs.existsSync(myFile)) {
        return { activities: [] };
    }
    return JSON.parse(fs.readFileSync(path.resolve(__rootData, "activities.json")));
};

export function saveJsonToFile(jsonObj, userName, date) {

    let dataFilePath = path.resolve(__rootData, "activities.json");
    let jsonPropertry = 'activities';
    if (userName && date) {
        dataFilePath = path.resolve((`${__rootUserData}/${userName}`), `${date}.json`);
        const dataFileFolder = path.resolve((`${__rootUserData}/${userName}`));
        if (!fs.existsSync(dataFileFolder)) {
            fs.mkdirSync(dataFileFolder);
        }
        jsonPropertry = 'entries';
    }
    // filter null/undefined 
    jsonObj[jsonPropertry] = clean(jsonObj, jsonPropertry);

    const jsonContent = JSON.stringify(jsonObj);

    fs.writeFile(dataFilePath, jsonContent, (err) => {
        if (err) {
            return false;
        }

    });
    return true;
};

// json manipulation 
export function addElementToJson(jsonObj, jsonPropertry, newElement) {
    jsonObj[jsonPropertry].push({
        date: newElement.date,
        time: newElement.time,
        code: newElement.code,
        description: newElement.description
    });
    return true;
};

export function deleteElementFromJson(jsonObj, jsonPropertry, elementId) {
    delete jsonObj[jsonPropertry][elementId];
    return jsonObj;
};

export function updateElementInJson(jsonObj, jsonPropertry, elementId, newElement) {
    jsonObj[jsonPropertry][elementId] = newElement;
}


function clean(jsonObj, jsonPropertry) {

    return jsonObj[jsonPropertry].filter(x => x !== null);

};



/* Creat Elements */
let addingDiv = document.querySelector(`.add`);
let text = addingDiv.querySelector(`input[type="text"]`);
let add =  addingDiv.querySelector(`input[type="submit"]`);
let tools = document.querySelector(`.tools`);
let ifEmpty = document.querySelector(`.if-empty`);
let s = {};
let t = {}; 
let index =0;
let coun;
let localArr = [];
let localTime = [];
if(localStorage.getItem(`coun`)){
    coun = +localStorage.getItem(`coun`)
}else {
    coun = 0;
}
/* Get The Values of Arrays From Local Storage */
// get the values of localArr from Local Storage 
if(localStorage.getItem(`tools`) && localStorage.getItem(`tools`).length > `{}`.length){
    for(i=0;i<+localStorage.getItem(`coun`);i++) {
        localArr[i] = localStorage.getItem(`tools`).toString().split(`,`)[i].split(`:`)[1].split(`"`)[1];
    }
}
// get the values of localTime from Local Storage 
if(localStorage.getItem(`time`) && localStorage.getItem(`time`).length > `{}`.length){
    for(i=0;i<+localStorage.getItem(`coun`);i++) {
        localTime[i] = localStorage.getItem(`time`).toString().split(`,`)[i].split(`"`)[3];
    }
}
// If Empty style
if(localArr.length != 0) {
    ifEmpty.style.display = `none`;
}
/* Get the information from local storge age */
if(localArr.length > 0) {
    for(i=0;i<localArr.length;i++) {
        // Creat Elements
        let tool = document.createElement(`div`);
        tool.className = `tool`;
        let textContainer = document.createElement(`div`);
        textContainer.className = `text-container`;
        let toolText = document.createElement(`input`);
        toolText.setAttribute(`type`,`text`);
        toolText.setAttribute(`readonly`,``);
        toolText.setAttribute(`maxlength`,`58`);
        toolText.className = `tool-text`;
        toolText.value = localArr[i];
        let time = document.createElement(`p`);
        time.className = `time`;
        time.textContent = localTime[i];
        let editDelete = document.createElement(`div`);
        editDelete.className = `edit-delete`;
        let edit = document.createElement(`i`);
        edit.className = `fas fa-pen`;
        let delet = document.createElement(`i`);
        delet.className = `fas fa-trash`;
        textContainer.appendChild(toolText);
        textContainer.appendChild(time);
        editDelete.appendChild(edit);
        editDelete.appendChild(delet);
        tool.appendChild(textContainer);
        tool.appendChild(editDelete);
        tools.appendChild(tool);
        // Edit function 
        edit.onclick = function() {
            toolText.removeAttribute(`readonly`);
            toolText.focus();
            let copyToolText = toolText.value;
            console.log(copyToolText);
            toolText.onblur = function() {
                toolText.setAttribute(`readonly`,``);
                for(i=0;i<localArr.length;i++){
                    if(localArr[i] == copyToolText) {
                        localArr[i] = toolText.value;
                    }
                }
                for(i=0;i<localArr.length;i++){
                    s[`${i}`] = localArr[i];
                }
                localStorage.setItem(`tools`,JSON.stringify(s));
            }
        }
        // delete Function
        delet.onclick = function() {
            console.log(toolText.value);
            for(i=0;i<localArr.length;i++){
                if(localArr[i] === toolText.value){
                    localArr[i] = ``;
                }
            }
            localArr = localArr.filter((e) => e !== ``);
            console.log(localArr);
            tool.remove();
            coun--;
            localStorage.setItem(`coun`,coun);
            for(i=0;i<localArr.length;i++){
                    s[`${i}`] = localArr[i];
            }
            localStorage.setItem(`tools`,JSON.stringify(s));
        }
    }
}
/* Add the div when clicked add */
add.onclick = function() {
    // Creat date Object
    let today  = new Date();
    let date1 = today.toString().split(` `);
    console.log(date1);
    let month = date1[1];
    let day = date1[2];
    let year = date1[3];
    let time2 = date1[4].slice(0,5);
    let date = `${month} ${day}  ${year} at ${time2}`;
    // Creat Elements
    let tool = document.createElement(`div`);
    tool.className = `tool`;
    let textContainer = document.createElement(`div`);
    textContainer.className = `text-container`;
    let toolText = document.createElement(`input`);
    toolText.setAttribute(`type`,`text`);
    toolText.setAttribute(`readonly`,``);
    toolText.setAttribute(`maxlength`,`58`);
    toolText.className = `tool-text`;
    toolText.value = text.value;
    let time = document.createElement(`p`);
    time.className = `time`;
    time.textContent = date;
    let editDelete = document.createElement(`div`);
    editDelete.className = `edit-delete`;
    let edit = document.createElement(`i`);
    edit.className = `fas fa-pen`;
    let delet = document.createElement(`i`);
    delet.className = `fas fa-trash`;
    textContainer.appendChild(toolText);
    textContainer.appendChild(time);
    editDelete.appendChild(edit);
    editDelete.appendChild(delet);
    tool.appendChild(textContainer);
    tool.appendChild(editDelete);
    tools.appendChild(tool);
    localArr.push(toolText.value);
    localTime.push(time.textContent);
    coun++;
    localStorage.setItem(`coun`,coun);
    console.log(localArr);
    console.log(localTime);
    for(i=0;i<localArr.length;i++){
        s[`${i}`] = localArr[i];
        t[`${i}`] = localTime[i];
    }
    localStorage.setItem(`tools`,JSON.stringify(s));
    localStorage.setItem(`time`,JSON.stringify(t));
    // Edit function 
    edit.onclick = function() {
        toolText.removeAttribute(`readonly`);
        toolText.focus();
        let copyToolText = toolText.value;
        console.log(copyToolText);
        toolText.onblur = function() {
            toolText.setAttribute(`readonly`,``);
            for(i=0;i<localArr.length;i++){
                if(localArr[i] == copyToolText) {
                    localArr[i] = toolText.value;
                }
            }
            for(i=0;i<localArr.length;i++){
                s[`${i}`] = localArr[i];
            }
            localStorage.setItem(`tools`,JSON.stringify(s));
        }
    }
    // delete Function
    delet.onclick = function() {
        for(i=0;i<localArr.length;i++){
            if(localArr[i] === toolText.value){
                localArr[i] = ``;
                localTime[i] = ``;
            }
        }
        localArr = localArr.filter((e) => e !== ``);
        console.log(localArr);
        localTime = localTime.filter((e) => e !== ``);
        console.log(localTime);
        tool.remove();
        coun--;
        localStorage.setItem(`coun`,coun);
        for(i=0;i<localArr.length;i++){
                s[`${i}`] = localArr[i];
                t[`${i}`] = localTime[i];
        }
        localStorage.setItem(`tools`,JSON.stringify(s));
        localStorage.setItem(`time`,JSON.stringify(t));
    }
    // Clear Add input text 
    text.value = ``;
    // If Empty style
    ifEmpty.style.display = `none`;
}


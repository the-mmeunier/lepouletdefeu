// import {convertAniBinaryToCSS} from 'ani-cursor';

// async function applyCursor(selector, aniUrl) {
//     const response = await fetch(aniUrl);
//     const data = new Uint8Array(await response.arrayBuffer());

//     const style = document.createElement('style');
//     style.innerText = convertAniBinaryToCSS(selector, data);

//     document.head.appendChild(style);
// }

// applyCursor("#contact", "./resources/media/cursors/Chicken Alternate Select.ani");

const showInfo = [
    { place: 'Theatre A', date: 'Septembre 3', time: '21:00' },
    { place: 'Theatre B', date: 'Septembre 4', time: '19:30' },
    { place: 'Theatre A', date: 'Septembre 3', time: '21:00' },
    { place: 'Theatre B', date: 'Septembre 4', time: '19:30' },
    { place: 'Theatre A', date: 'Septembre 3', time: '21:00' },
    { place: 'Theatre B', date: 'Septembre 4', time: '19:30' },
];

renderDates(showInfo);

function renderDates(showInfo) {
    const table = document.createElement("table");
    const thead = table.createTHead();
    const headerRowMain = thead.insertRow();
    const headerRow = thead.insertRow();

    const headerTitle = document.createElement("h2");
    headerTitle.textContent = "spectacles";
    const titleth = document.createElement("th");
    titleth.setAttribute("colspan", "3");
    titleth.appendChild(headerTitle);
    headerRowMain.appendChild(titleth);
    
    const headers = ["endroit", "date", "Heure"];
    for (let headerText of headers) {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    }
    
    const tbody = document.createElement("tbody");
    for (let info of showInfo) {
        let tr = tbody.insertRow();

        let place = tr.insertCell();
        place.textContent = info.place;

        let date = tr.insertCell();
        date.textContent = info.date;
        
        let time = tr.insertCell();
        time.textContent = info.time;
    }

    table.appendChild(tbody);

    const spectaclesSection = document.getElementById("spectacles");
    spectaclesSection.appendChild(table);
}
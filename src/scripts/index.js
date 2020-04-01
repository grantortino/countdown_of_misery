// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

import moment from 'moment';


// \/ All of your javascript should go here \/
console.log('is anybody there?');

let countdownTemplate =
//     `
// <p id="days">${moment().format('dddd')}</p>
// <p id="hours">${moment().hour()} Hours</p>
// <p id="minutes">${moment().minute()} Minutes</p>
// <p id="seconds">${moment().seconds()} Seconds</p>
// <p id="seconds"> TEST</p>
// `;
`
<p id="days">${moment().add(1, 'year').calendar()}</p>
`

const sectionLeft = document.querySelector('.left');
sectionLeft.innerHTML = countdownTemplate;

moment("20111031", "YYYYMMDD").fromNow(); // 8 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 8 years ago
moment().startOf('day').fromNow();        // 14 hours ago
moment().endOf('day').fromNow();          // in 10 hours
moment().startOf('hour').fromNow();      
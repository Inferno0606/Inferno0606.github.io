// countdown date
let launchDate = new Date("Mar 15, 2021 12:00:00").getTime();
let extime = 0;
let cta = 0;
let ctb = 3;
let ctc = 3;

var ldd1 = new Date("Mar 15, 2021 12:00:00");
document.querySelector('h5').textContent = 'Prevision : ' + ldd1.getDate()  + "/" + (ldd1.getMonth()+1) + "/" + ldd1.getFullYear() + " " + ldd1.getHours() + 'H';

// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

const bu1 = document.querySelector('button1');
bu1.addEventListener('click', addtime);

const bu2 = document.querySelector('button2');
bu2.addEventListener('click', removetime);

function addtime() {
  cta = cta +1*1;
  document.querySelector('h4').textContent = '  Oh non, encore une !';ctb = 0;
  
  if (cta > 2){
  extime = extime + 1000 * 60 * 60 * 24*3;
  ldd1 = new Date(ldd1.getTime() + 60 * 60 * 24 * 1000*3);
  document.querySelector('h5').textContent = 'Prevision : ' + ldd1.getDate()  + "/" + (ldd1.getMonth()+1) + "/" + ldd1.getFullYear() + " " + ldd1.getHours() + 'H';
}
}

function removetime() {
  if (cta === 0)
{document.querySelector('h4').textContent = '  I am sorry, I cannot do that !';ctb = 0;}
  else {
cta = cta -1*1;
document.querySelector('h4').textContent = '  Ouf, une de moins !';ctb = 0;
if (cta > 1){
extime = extime - 1000 * 60 * 60 * 24*3;
ldd1 = new Date(ldd1.getTime() - 60 * 60 * 24 * 1000*3);
document.querySelector('h5').textContent = 'Prevision : ' + ldd1.getDate()  + "/" + (ldd1.getMonth()+1) + "/" + ldd1.getFullYear() + " " + ldd1.getHours() + 'H';
}
}
}

function tick () {
  // Get current time
  let now = new Date().getTime();
  // Get the difference in time to get time left until reaches 0
  let t = launchDate - now + extime;

  // Check if time is above 0
  if (t > 0) {
    // Days
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // prefix any number below 10 with a "0" E.g. 1 = 01
    if (days < 10) { days = "0" + days; }
    
    // Hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    // Minutes
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    // Seconds
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

    // Create Time String
    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    // Set time on document
    document.querySelector('.countdown').innerText = time;
  }
 if (cta === 0){document.querySelector('h3').textContent = 'Aucune Ano Bloquante - Livraison a temps !';document.querySelector('h3').style.color = "#1BC705" ;document.querySelector('h5').style.color = "#FFF" ;document.querySelector('h2').textContent = 'ARRIVE BIENTOT !';}

 if (cta === 1){document.querySelector('h3').textContent = '1 seule Ano, ca peut encore le faire !';document.querySelector('h3').style.color = "#F59604" ;document.querySelector('h5').style.color = "#FFF" ;document.querySelector('h2').textContent = 'ARRIVE BIENTOT !';}

 if (cta === 2){document.querySelector('h3').textContent = '2 Anos, c est chaud mais on peut gerer !';document.querySelector('h3').style.color = "#EE7008" ;document.querySelector('h5').style.color = "#FFF" ;document.querySelector('h2').textContent = 'ARRIVE BIENTOT !';}

 if (cta === 3){document.querySelector('h3').textContent = '3 Anos, Ca commence a devenir chaud la !';document.querySelector('h3').style.color = "#EE5108" ;document.querySelector('h5').style.color = "#EE1208" ;document.querySelector('h2').textContent = 'ARRIVE PRESQUE BIENTOT !';}

 if (cta > 3 && cta < 10){document.querySelector('h3').textContent = cta + ' Anos, Ca ne va vraiment plus la !';document.querySelector('h3').style.color = "#EE1208" ;document.querySelector('h5').style.color = "#EE1208" ;document.querySelector('h2').textContent = 'ARRIVE PAS TOUT DE SUITE !';}

 if (cta > 9){document.querySelector('h3').textContent = cta + ' Anos, Alerte ! Alerte !';document.querySelector('h3').style.color = "#EE1208" ;document.querySelector('h5').style.color = "#EE1208" ;document.querySelector('h2').textContent = 'HELP !';}

 if (ctb > 2){document.querySelector('h4').textContent = '      ';}
else {ctb=ctb+1;}


}
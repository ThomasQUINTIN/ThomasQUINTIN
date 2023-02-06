
function getRandomNumber() {
    return Math.floor(Math.random() * 501);
}

function getDateString() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = new Date();
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    return `${monthName} ${day} ${hours}:${minutes}:${seconds} wks01 kernel:  `;
  }

let time = getRandomNumber();

fetch('/docs/boot.log')
  .then(response => response.text())
  .then(content => {
    const lines = content.split('\n');
    for (const line of lines) {
      console.log(line);
      setTimeout(function () {
        if (line == "<end>")
        window.location.assign("/html/project.html");
        document.getElementById("bootcontent").innerHTML += "<br>";
        document.getElementById("bootcontent").innerHTML += getDateString();
        document.getElementById("bootcontent").innerHTML += line;
    },time += getRandomNumber());
    }
  });

history.pushState({}, null, '/boot/EFI/bootmgr.efi');
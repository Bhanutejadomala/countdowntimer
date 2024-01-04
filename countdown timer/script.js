const countDown = () => {
    let futureDate = new Date("11 april 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;


    const dayText = Math.floor(myDate/1000 / 60 / 60 / 24);
    let hourText = Math.floor(myDate / 1000 / 60 / 60) % 24;
    const minuteText = Math.floor(myDate / 1000 / 60) % 60;
    const secondText = Math.floor(myDate / 1000) % 60;
  
    if (hourText < 10) {
      hourText = '0' + hourText;
    }

    document.querySelector('.day').textContent = dayText;
    document.querySelector('.hour').textContent = hourText;
    document.querySelector('.minute').textContent = minuteText;
    document.querySelector('.second').textContent = secondText;
  };
  
  countDown()
  setInterval(countDown, 1000);
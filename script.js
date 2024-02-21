function calculateTime() {
    const startDate = new Date('2019-08-24');
    const currentDate = new Date();
    
  
    const difference = currentDate - startDate;
  
    const totalSeconds = Math.floor(difference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalMonths = Math.floor(totalDays / 30);
    const years = Math.floor(totalMonths / 12);
  
    const months = totalMonths % 12;
    const days = totalDays % 30;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;
  
    document.getElementById('years').textContent = `${years} Anos`;
    document.getElementById('months').textContent = `${months} Meses`;
    document.getElementById('days').textContent = `${days} Dias`;
    document.getElementById('hours').textContent = `${hours} Horas`;
    document.getElementById('minutes').textContent = `${minutes} Minutos`;
    document.getElementById('seconds').textContent = `${seconds} Segundos`;
  
    // Exibindo a data atual no elemento com o id "currentDate"
    const currentDateElement = document.getElementById('currentDate');
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    currentDateElement.textContent = currentDate.toLocaleDateString('pt-BR', options);
  }
  
  calculateTime();
  setInterval(calculateTime, 1000);
  
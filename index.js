setInterval(() => {
    d = new Date();
    hourHand = d.getHours();
    minuteHand = d.getMinutes();
    secondHand = d.getSeconds();
    hourRotationSpeed = 30*hourHand + minuteHand/2;
    minuteRotationSpeed = 6*minuteHand;
    secondRotationSpeed = 6*secondHand;

    hour.style.transform = `rotate(${hourRotationSpeed}deg)`;
    minute.style.transform = `rotate(${minuteRotationSpeed}deg)`;
    second.style.transform = `rotate(${secondRotationSpeed}deg)`;
}, 1000);
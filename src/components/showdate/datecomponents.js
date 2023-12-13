




function getDay(day){
    const dayIndex=new Date().getDay()
  switch (day){
    case 0:
      return "Sunday"
    case 1:
      return "Monday"
    case 2:
      return "Tuesday"
    case 3:
      return "Wednesday"
    case 4:
      return "Thursday"
    case 5:
      return "Friday"
    case 6:
      return "Saturday"
    default:
      return "none"
  }
}

console.log (getDay(dayIndex))


const d= new Date();
let hour=d.getHours();
console.log(hour)

export function getGreeting(){
    let greeting;
     if(hour>=0 && hour<=11){
        greeting="Good Morning"}
     else if(hour>11 && hour<=15){
            greeting="Good Afternoon"}
     else{greeting="Good Night"}

     return greeting
}


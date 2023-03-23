export default defineEventHandler((event) => {
  const currentdate = new Date()
  const date = currentdate.getDate() +  "." + (currentdate.getMonth() + 1) + "." + currentdate.getFullYear()
  const time = currentdate.getHours().toString().padStart(2, "0") +":" + currentdate.getMinutes() +  ":" +  currentdate.getSeconds().toString().padStart(2, "0")


  return {
    currentDate: date,
    currentTime: time
  };
});

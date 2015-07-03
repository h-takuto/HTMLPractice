

function nowDate() {
  week = new Array ("日","月","火","水","木","金","土");
  today = new Date();

  year = today.getFullYear();
  month = today.getMonth() + 1;
  date = today.getDate();
  day = today.getDay();
  hours = today.getHours();
  minutes = today.getMinutes();
  seconds = today.getSeconds();

  myMess1 = year + "年" + month + "月" + date + "日" + week[day] + "曜日";
  myMess2 = hours + "時" + minutes + "分" + seconds + "秒";
  test = 3;
  document.dateForm.fromDate.value = myMess1;
  document.dateForm.fromTime.value = myMess2;
}



function myEvent() {
  week = new Array ("日","月","火","水","木","金","土");
  myeventTable = new Array (
      "火", "火曜日",
      "木", "木曜日",
      "土", "土曜日",
      "日", "日曜日"
      );
  message = "";
  eventTableCount = myeventTable.length / 2;
  today = new Date();
  day = today.getDay();
  for (i=0; i<eventTableCount; i++) {
    if(myeventTable[i*2]==week[day]) {
      message += myeventTable[i*2+1] +"<br>";
    }
  }
  if (message != "")document.getElementById("info").innerHTML = message;
}

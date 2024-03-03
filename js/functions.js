const setTimeinMinutes = (str)=>{

  const timeInNumber = str.split(':').map(Number);
  return (timeInNumber[0] * 60 + timeInNumber[1]);
};
const checkTimeMeeting = (workingDayStart,workingDayEnd,timeMeetingStart,durationMeeting) => {

  if ((setTimeinMinutes(timeMeetingStart) + durationMeeting) <= setTimeinMinutes(workingDayEnd)
&& setTimeinMinutes(timeMeetingStart) >= setTimeinMinutes(workingDayStart)){
    return true;
  } return false;
};

checkTimeMeeting('8:00', '17:30', '08:00', 900);


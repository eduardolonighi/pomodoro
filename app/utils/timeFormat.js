const timeFormat = time => {
  let formated = {
    minutes: Math.floor(time / 60).toString(), // 1 Minutes = 60 seconds
    seconds: Math.floor(time % 60).toString()
  };

  // adds 0 to the left when < 10
  for (const key of Object.keys(formated)) {
    // console.log(key, formated[key]);
    if (formated[key].length === 1) formated[key] = "0" + formated[key];
  }

  // console.log("minutes", formated.minutes);
  // console.log("seconds", formated.seconds);

  return formated;
};

export default timeFormat;

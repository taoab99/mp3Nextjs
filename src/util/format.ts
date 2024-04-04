export function fomatCurrentTime(seconds: number) {
  if (seconds <= 0) {
    return "00:00";
  }
  let minutes: number | string = Math.floor(seconds / 60);
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  let secondsTime: number | string = Math.floor(seconds % 60);
  secondsTime = secondsTime >= 10 ? secondsTime : "0" + secondsTime;
  return minutes + ":" + secondsTime;
}

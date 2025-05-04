import "./App.css";
function App() {
  const now = new Date();
  const taiwanTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Taipei" }));
  const hours = taiwanTime.getHours();
  const isPast9PM = hours >= 21;
  const isPast4PM = hours >= 16;

  const targetTime = new Date(taiwanTime);
  targetTime.setHours(21, 0, 0, 0);
  const timeLeftMs = targetTime.getTime() - taiwanTime.getTime();
  const hoursLeft = Math.floor(timeLeftMs / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeftMs % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeftMs % (1000 * 60)) / 1000);

  const targetTime4PM = new Date(taiwanTime);
  targetTime4PM.setHours(16, 0, 0, 0);
  const timeLeft4PMMs = targetTime4PM.getTime() - taiwanTime.getTime();
  const hoursLeft4PM = Math.floor(timeLeft4PMMs / (1000 * 60 * 60));
  const minutesLeft4PM = Math.floor((timeLeft4PMMs % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft4PM = Math.floor((timeLeft4PMMs % (1000 * 60)) / 1000);

  return (
    <>
      <>
        <h3>Passed 21:00？</h3>
        {isPast9PM ? (
          <>
            <p>Yes</p>
            <p style={{ color: "red" }}>
              It is: {taiwanTime.toLocaleTimeString()}
            </p>
          </>
        ) : (
          <>
            <p>Not yet</p>
            <p style={{ color: "green" }}>
              Timer: {hoursLeft} hr {minutesLeft} min {secondsLeft} sec
            </p>
          </>
        )}
      </>
      <>
        <h3>Passed 16:00？</h3>
        {isPast4PM ? (
          <>
            <p>Yes</p>
            <p style={{ color: "red" }}>
              It is: {taiwanTime.toLocaleTimeString()}
            </p>
          </>
        ) : (
          <>
            <p>Not yet</p>
            <p style={{ color: "green" }}>
              Timer: {hoursLeft4PM} hr {minutesLeft4PM} min {secondsLeft4PM} sec
            </p>
          </>
        )}
      </>
    </>
  );
}

export default App;
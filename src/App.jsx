import React, { useState } from "react";
import IntroScreens from "./components/IntroScreens";
import RomanticBirthday from "./components/RomanticBirthday";

function App() {
  const [showBirthday, setShowBirthday] = useState(false);

  return (
    <>
      {!showBirthday ? (
        <IntroScreens onFinish={() => setShowBirthday(true)} />
      ) : (
        <RomanticBirthday />
      )}
    </>
  );
}

export default App;

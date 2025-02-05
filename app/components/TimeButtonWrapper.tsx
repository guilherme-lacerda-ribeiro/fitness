'use client'

import { useState } from "react";
import TimeButton from "./TimeButton";

export default function TimeButtonWrapper() {
  const [selectedTime, setSelectedTime] = useState(30);

  return (
    <TimeButton
      onTimeSelect={(time) => setSelectedTime(time)}
      defaultTime={selectedTime}
    />
  );
}

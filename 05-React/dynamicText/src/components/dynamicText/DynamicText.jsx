import { useState } from "react"
import React from 'react'

function DynamicText() {
      // Step 1: Initialize state
      const [text, setText] = useState("");
    
      // Step 2: Handle input change
      const handleChange = (event) => {
        setText(event.target.value);
      };

  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Dynamic Input</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        You typed: <strong>{text}</strong>
      </p>
    </div>
  )
}

export default DynamicText

"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AIChatBox";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <button onClick={() => setChatBoxOpen(true)}>
        <Bot color="green" size={35} />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}

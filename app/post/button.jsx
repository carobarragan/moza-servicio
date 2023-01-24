"use client";
import { useState } from "react";

export default function Button({ id }) {
  const [like, setLike] = useState(false);
  return (
    <button onClick={() => setLike(!like)}>
      {like ? "me gusta" : "no me gusta"}
    </button>
  );
}

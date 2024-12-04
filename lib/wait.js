// lib/wait.js
export const wait = (duration = 3000) =>
  new Promise((resolve) => setTimeout(resolve, duration));

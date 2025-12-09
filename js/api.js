const API_URL = "https://script.google.com/macros/s/AKfycbwb4zkL_lj7dW0C_U3Cl9v1n47_y4W3VPvZF7Bn4c9HVWqtwLRvIx7B4cr3W7J8AZ0/exec";

async function apiGet(params) {
  const res = await fetch(API_URL + "?" + new URLSearchParams(params));
  return res.json();
}

async function apiPost(payload) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(payload)
  });
  return res.json();
}

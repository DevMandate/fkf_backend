async function hasUserAttempted(name) {
    const res = await apiGet({
      action: "hasAttempted",
      name
    });
    return res.attempted;
  }
  
  async function addAttemptedUser(name) {
    await apiPost({
      action: "addAttempt",
      name
    });
  }
  
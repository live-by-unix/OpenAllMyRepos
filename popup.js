async function loadRepos() {
  const response = await fetch(chrome.runtime.getURL("repos.json"));
  return await response.json();
}

document.getElementById("openThemAll").addEventListener("click", async () => {
  const repos = await loadRepos();

  // Bulk open all repos at once
  for (const url of repos) {
    chrome.tabs.create({ url });
  }
});

const app = document.getElementById("app");

const fetchData = async () => {
  try {
    const response = await fetch("https://www.noovomoi.ca/vivre/famille/parentalite-positive.html");
    const data = await response.text();
    app.innerHTML = `<h1>API Fetcher Example</h1><p>${data.title}</p>`;
  } catch (error) {
    console.error(error);
    app.innerHTML = "<p>An error occurred while fetching the data.</p>";
  }
};

fetchData();

const load = document.querySelector(".el-load");

const api_url = "https://api.covid19india.org/data.json";

async function getdata() {
  const res = await fetch(api_url);
  const data = await res.json();
  const index = data.statewise.findIndex((x) => x.statecode === "GA");
  const GA = data.statewise[index];
  document.getElementById("active").innerHTML = GA.active;
  document.getElementById("confirmed").innerHTML = GA.confirmed;
  document.getElementById("deaths").innerHTML = GA.deaths;
  document.getElementById("recovered").innerHTML = GA.recovered;
  document.getElementById("lastupdatedtime").innerHTML = GA.lastupdatedtime;
}

if (load) load.addEventListener("onload", getdata());

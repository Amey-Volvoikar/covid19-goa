const api_url = "https://api.covid19india.org/data.json";
async function getdata() {
  const res = await fetch(api_url);
  const data = await res.json();
  const GA = data.statewise[27];
  console.log(GA);
  document.getElementById("active").innerHTML = GA.active;
  document.getElementById("confirmed").innerHTML = GA.confirmed;
  document.getElementById("deaths").innerHTML = GA.deaths;
  document.getElementById("recovered").innerHTML = GA.recovered;
  document.getElementById("lastupdatedtime").innerHTML = GA.lastupdatedtime;
}

getdata();

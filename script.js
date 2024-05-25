const fetchData = async () => {
    let randomNumber = Math.ceil(Math.random() * 130);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
      console.log(response.data.sprites.front_default);
      document.getElementById("placepicture").innerHTML = `
      <img src="${response.data.sprites.front_default}">`;
    } catch (error) {
      // Handle error
      console.error(error);
    }
    
  };
  
  fetchData();


document.querySelector("button").addEventListener("click", fetchData);
const universitiesl = document.getElementById("universities");
      async function Universities(universities) {
        universitiesl.innerHTML = "";
        universities.forEach((university) => {
          const listItem = document.createElement("li");
          // лого
          const logo = document.createElement("img");
          logo.alt = university.name;
          logo.src = `https://logo.clearbit.com/${university.domains}`;
          // для текста
          const nametx = document.createElement("p");
          nametx.textContent = 'Название:';
          // текст
          const tx = document.createElement("p");
          tx.textContent = university.name;
          // для ссылки
          const namea = document.createElement("p");
          namea.textContent = 'Ссылка Университета:';
          //ссылка
          const link = document.createElement("a")
          link.href = university.web_pages[0];
          link.textContent = university.web_pages;
          
          
          listItem.appendChild(logo);
          listItem.appendChild(nametx);
          listItem.appendChild(tx);
          listItem.appendChild(namea);
          listItem.appendChild(link);
          
          universitiesl.appendChild(listItem);
        });
      }
      
      let button = document.getElementById("submit")
      button.addEventListener("click", unik)
      async function unik() {
        const searchu = document.getElementById("search").value;
        
        const url = searchu
        ? `http://universities.hipolabs.com/search?country=Finland&name=${searchu}`
        : "http://universities.hipolabs.com/search?country=Finland"; 
        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                Universities(data);
            })
            .catch((error) => {
                console.error("Ошибка:", error);
            })
      };
      async function getUniver() {
        
        const response = await fetch(`http://universities.hipolabs.com/search?country=Finland&name=`+searchu.value)
        user = await response.json();
        return user;
    }
    
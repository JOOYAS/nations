const CountriesContainer = document.getElementById("countries")

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then(data => {
        console.log("got contries data",data);

        //storing elements that are only needed
        var countries = data.map((country) =>({
                name: country.name.common,
                flag: country.flags.png
            })
        );

        //sorting the object in alphabetical order
        countries.sort((a,b) => 
            a.name.localeCompare(b.name)
        );
        console.log("sorted the countries",countries);

        //creating card for each country
        countries.forEach((country) => {
            const countrycard = `
                <article class='w-full bg-white border-2 hover:animate-pulse hover:z-2 hover:border-sky-500 p-1 flex sm:flex-col-reverse justify-between sm:justify-end'>
                    <div class='min-w-48 sm:min-w-full sm:text-center self-center'>
                        <h2 class='text-xl sm:text-base font-mono'>${country.name}</h2>
                    </div>
                    <div class='w-full overflow-hidden flex aspect-[16/9]'>
                        <img src="${country.flag}" class="object-cover w-full" alt="flag of ${country.name}">
                    </div>
                    
                </article>
            `;
            
            //making the cards available in html document
            const newCard = document.createElement('div');
                newCard.innerHTML = countrycard.trim();
                const card = newCard.firstChild;
                CountriesContainer.appendChild(card);
        });
    })
    .catch(error => console.error(error));
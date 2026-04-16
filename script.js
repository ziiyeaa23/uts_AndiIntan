fetch("https://www.logammulia.com/id")
  .then(response => response.text())
  .then(html) 
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const priceElement = doc.querySelector(".price");
        if (priceElement) {
            const price = priceElement.textContent.trim();
            console.log("Harga emas saat ini : " +price);
            let priceElement = document.querySelector(.price);
            if (priceElement) {
                priceElement.textContent = price;
            }
            

        }
    }
  
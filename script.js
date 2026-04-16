fetch("https://gist.githubusercontent.com/nurrachmat/f954f3aa979ab2a05daacae722418e72/raw/2cf704f88aa1a34255c281772abea2b88e121b76/harga-emas-maret2026.json")
  .then(response => response.text())
  .then(html) 
    .then((data)) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const priceElement = doc.querySelector(".price");
        if (priceElement) {
            const price = priceElement.textContent.trim();
            console.log("Harga emas saat ini : " + price);
            let priceElement = document.querySelector(".price");
            if (priceElement) {
                priceElement.textContent = price;
            } else if(price === "2636968") {
                console.log("Harga emas tidak berubah")}
                else {
                    console.log("Harga emas berubah menjadi ; " +price);
                }

              priceElement.textContent = parseFloat(price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });


        }
    }
  
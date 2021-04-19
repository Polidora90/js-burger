window.addEventListener("load", function () {

    var submitButton = document.getElementById("button");

    //attrubiosco un event listener al bottone "calculate"
    submitButton.addEventListener("click", function () {

        //inserire il nome burger è un campo obbligatrio quindi:
        var nameBurgerField = document.getElementById("name");
        if (!nameBurgerField.value) {
            alert("È necessario inserire un nome per il tuo burger")
        }

        var price = 50;
        //con quetSelectorAll ottengo tutti gli elementi check dell'html in una sorta di array che uso per il ciclo for
        var ingredientsList = document.querySelectorAll(".ingredient-checkbox");

        console.log(ingredientsList);


        for (var i = 0; i < ingredientsList.length; i++) {
            var ingredient = ingredientsList[i];

            price = addToPrice(price, ingredient);            
        }

        console.log(price);

        document.getElementById("price").innerText = price;


        //prezzo scontato con codice sconto
        //alert con codice sconto non valido



        function addToPrice(priceOfBurger, HtmlElement) {
            if (HtmlElement.checked) {
                priceOfBurger += parseInt(HtmlElement.value);
            }

            return  priceOfBurger;
        }
    })






})
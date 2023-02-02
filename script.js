document.addEventListener("DOMContentLoaded",function() {

    var numCase = 0;
    var computer = 1;

    data.forEach(function afficheNote(items){

        console.log(numCase);

        var liste = document.querySelector(".liste-analogies");
        liste.innerHTML = liste.innerHTML + "<section><h2>Si j’étais " + items.analogie + ", je serais " + items.valeurAnalogie+ ', </h2><h2 class="text-cliquable" id="'+numCase+'">parce que...</h2>\n<img src="' + items["image"] +'"class="image">' + '</p><br><div class="popup popup-invisible bouton cache-fenetre" id="p'+numCase+'">' + items.explication + "</div></section><br><br><br>";

        numCase++
        computer++
        
        var textpop = document.querySelectorAll('.popup');

        var textclick = document.querySelectorAll('.text-cliquable');

        textclick.forEach(function(element){

            element.addEventListener('click', function(event){

                var id = event.target.getAttribute('id');
                //console.log(id);
                textpop[id].classList.add('popup-visible');
                textpop[id].classList.remove('popup-invisible');

            });
        });

        var retour = document.querySelectorAll('.cache-fenetre');

        retour.forEach(function(item){

            item.addEventListener('click', function(event){

                var id = event.target.getAttribute('id').replace('p','');
                //console.log(id);
                textpop[id].classList.add('popup-invisible');
                textpop[id].classList.remove('popup-visible');

            });

        });

    });

    
    var clavierValeurAnalogie=document.querySelector('#valeurAnalogie');

    var clavierExplication=document.querySelector('#explication');

    var clavierImage=document.querySelector('#image');

    var clavierAnalogie=document.querySelector('#analogie');

    var tousChamps=document.querySelectorAll('input');

    tousChamps.forEach(function(element){

        element.addEventListener('keyup',function(e){

            console.log(clavierAnalogie.value);
            document.querySelector('.ajout').innerHTML='<section><h2>Si j’étais ' + clavierAnalogie.value +', je serais ' + clavierValeurAnalogie.value + ', </h2>\n<h2>parce que ' + clavierExplication.value + '</h2>\n<img src="' + clavierImage.value + '"></section>';

        })

    });

    document.querySelector('#sub').addEventListener('click', function (event) {

        event.preventDefault();

        document.querySelector('#ajout').innerHTML +=  "<section><h2>Si j'étais "+ ("#analogie").value + ", je serais " + ("#valeurAnalogie").value + ", </h2><h2>parce que " + ("#explication").value + "<img src='" + document.querySelector("#image").value + "</section>";
    
    
        fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=jade.celestine&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie").value + ", parce que " + document.querySelector("#explication").value).then(function (response) {

          response.json().then(function (data) {

            if (data.status == "success") {

              document.querySelector("#message").innerHTML = "Votre message a bien été reçu";

            } else {

              document.querySelector("#message").innerHTML = "Désolé votre message n'a pas été reçu";

            }

          })

        })

    });
    
});

console.log(data);
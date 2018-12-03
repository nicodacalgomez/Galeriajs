		
    let y=0;
		let images=Array("1.jpg","2.jpg","3.jpg",
		"4.jpg","5.jpg","6.jpg","7.jpg",
		"8.jpg");
    let titles = Array("La libertad guiando al pueblo. Delacroix","Los fusilamientos del 3 de Mayo. Goya","Guernica. Pablo Picasso",
        "La creación de Adán. Miguel Ángel","La tentación de San Antonio. Dalí","Los amantes. Magritte","Las meninas. Velázquez",
        "La persistencia de la memoria. Dalí");
		let titulo = "";
    let titulogrande = document.getElementById("titulogrande");
    let imagengrande = document.getElementById("cajap");

function cambiarimagen(imagensource, titulo){

		imagengrande.src = imagensource;
		titulogrande.innerHTML = titulo;
        imagengrande.title = titulo;
}
		
function siguiente(img) {
		let x= document.getElementById("cajap");

        if(y>=(images.length-1)){
        	y=0;
        }else {
           	y++;
        }
        
        x.src=images[y];
        titulogrande.innerHTML=titles[y]
}

function anterior(img) {
		let x=document.getElementById("cajap");
		
        if(y<=0){y=images.length-1;
        }else {
           	y--;
        }
    
        x.src=images[y];
        titulogrande.innerHTML=titles[y]
}

function basic(){
	   document.body.style.backgroundColor="white";
}

function dark(){
	   document.body.style.backgroundColor="grey";
}

function red(){
	   document.body.style.backgroundColor="salmon";
}
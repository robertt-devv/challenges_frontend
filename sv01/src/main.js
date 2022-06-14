const $ = x => {return document.querySelectorAll(x);}

const app_config = {
	localName: 'app01_dbV1',
	author: 'robertt-devv@gmail.com',
}

var app_function = {

	getd: function (){
		let rows = $('.row'); // get all rows
		let cols = []; let json = {};
		rows.forEach( x => {cols.push(x.innerText)}); // get cols values
		cols.forEach((x,i) =>{json[`row_${i}`] = x}); // convet array, to json
		return json;
	},

	save: function(){
		alert('**** AVISO ****: a opção salvar, imposibilita a recuperação de dados anteriores!')
		localStorage.setItem(app_config.localName,JSON.stringify(this.getd())); // save , Uau 
	},

	load: function(){
		let data = localStorage.getItem(app_config.localName);
		if (data == undefined ){alert(" Não há dados salvos "); return 1;}
		
		let json = JSON.parse(data)
        let json_len = Object.keys(json).length;
        let root_box = $('#data')[0]; let output = ''

        for (let x=0; x<json_len; x++) {
        	output += '<div class="row">';
        	let tmp = json[`row_${x}`].split('\n');
        	for (let y=0; y<tmp.length; y++) {output += `<span contentEditable="true" class="coll">${tmp[y]}</span>\n`;}
        	output += '</div>';
        }
        root_box.innerHTML = output;
        alert('dados carregados !!');
	},

	prnt : function(){window.print();},

   addrw : function(){
   	    let root_box = $('#data')[0];
   	    let output = '<div class="row">'
   	    for (let y=0; y<23; y++) { output += `<span contentEditable="true" class="coll">&nbsp;</span>\n`;}
   	    output += '</div>'
     	root_box.innerHTML += output;
   },

   color: function(){alert("Não implementado")},

   backup: function(){
   	    let date = new Date().toISOString();
           let data = localStorage.getItem(app_config.localName);
           let file_name =`sinvan-${date.substr(0,10)}.dat`
           let file_data = JSON.stringify(JSON.parse(data))
          
           let _link_ = document.createElement('a');
           _link_.download = file_name;
   		var file_container = new Blob([file_data],{type: "text/data"});
           _link_.href = window.URL.createObjectURL(file_container)
           _link_.click();
   }
}

var app = app_function;

/*
*
*
* qual'é mano!, tá achando que gosto de guambiarra?
* isso é só um quebragalho.. 
*
* Aliaís, pq vc está vendo meu códico?
*
* Eu te amo Sara, S2 
*
* Um salve para o ( grupo para pessoas pobres 
* com computadores ruins 5.1 )
*
*/






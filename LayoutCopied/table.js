class Table extends Animator {
		
	constructor(data){
		 super();
		 this.res = document.createElement("table");
		 let datas = Object.keys(data[0]); 



		 this.res.style.width = "400px";

		 console.log(data);
		 console.log(datas);

		 let vals = Object.values(data[0]);
		// this.generateTable(this.res, vals); // FIX HERE
		 this.generateTableHead(this.res, datas);


/*
		this.nextGen(this.res, [
		{name: "Filip", age:22}, 
		{name: "A", age: 36, a: 2}
	]);
		*/
	this.nextGen(this.res, 
		data
	);
		
		
		// this.generateTable(this.res, vals); // FIX HERE
			// this.responsive();
		 }
	
		 arrayPadding(arr, value) {
			if (arr.includes("left")){
				this.res.style.paddingLeft = value;
			}
			
			if (arr.includes("right")){
				this.res.style.paddingRight = value;
			}
			
			if (arr.includes("top")){
				this.res.style.paddingTop = value;
			}
			
			if (arr.includes("bottom")){
				this.res.style.paddingBottom = value;
			}
	
			if (!value){
				this.res.style.paddingBottom = arr;
					}
				
			
			return this;
		}



		arrayMargin(arr, value) {
			if (arr.includes("left")){
				this.res.style.marginLeft = value;
			}
			
			if (arr.includes("right")){
				this.res.style.marginRight = value;
			}
			
			if (arr.includes("top")){
				this.res.style.marginTop = value;
			}
			
			if (arr.includes("bottom")){
				this.res.style.marginBottom = value;
			}
	
			if (!value){
				this.res.style.marginBottom = arr;
					}
				
			
			return this;
		}
	
	style(obj){
		this.res.style.fontFamily = obj.font;
		return this;
	}
	
	center(){
		this.res.style.marginLeft = "auto";
		this.res.style.marginRight = "auto";
		return this;
	}



	
	borderRadius(){
		this.res.style.borderSpacing = "0";
		this.res.style.borderCollapse = "separate";
		  this.res.style.borderRadius = "10px";
		  this.res.style.border = "1px solid black";
		 
		//  this.res.style.overflow = "hidden";
		return this;
	}
	
	/*responsive(){
		let mq = window.matchMedia("(max-device-width: 400px)");
		if (mq.matches){
		
		for (var i = 0, row; row = this.res.rows[i]; i++) {
				this.res.rows[i].style.fontSize = "2.66em";
			}
		}
		return this;
	}
	*/
	
	cellPadding(padding){
		for (var i = 0, row; row = this.res.rows[i]; i++) {			
				for (var j = 0, col; col = row.cells[j]; j++) {
					this.res.rows[i].cells[j].style.padding = padding;
				}  
			}
		return this;
	}
	
	cellAlign(align){
		for (var i = 0, row; row = this.res.rows[i]; i++) {			
				for (var j = 0, col; col = row.cells[j]; j++) {
					this.res.rows[i].cells[j].style.textAlign = align;
				}  
			}
		return this;
	}
	
	headStyle(style){
		for (var i = 0, row; row = this.res.rows[i]; i++) {
			
			if (i === 0){
			this.res.rows[i].style.color = style.color;
				
			if (style.background){
				this.res.rows[i].style.backgroundColor = style.background;
			}
			}
			
			
				for (var j = 0, col; col = row.cells[j]; j++) {
					
					if (j === 0){
					//row.cells[j].style.color = style.color
					}
    
				}  
			}
		return this;
	}
	
	
	
	rowStyle(style){
		for (var i = 0, row; row = this.res.rows[i]; i++) {
			
			if (i % style.nth === 0 && i !== 0){
			this.res.rows[i].style.color = style.color;
				
			if (style.background){
				this.res.rows[i].style.backgroundColor = style.background;
			}
			}
			
			
				for (var j = 0, col; col = row.cells[j]; j++) {
					
					if (j === 0){
					//row.cells[j].style.color = style.color
					}
    
				}  
			}
		return this;
	}
	
		border(width, type, color){
			this.res.style.borderCollapse = "collapse";
			
			for (var i = 0, row; row = this.res.rows[i]; i++) {
				this.res.rows[i].style.border = `${width}px ${type} ${color}`;
  
				for (var j = 0, col; col = row.cells[j]; j++) {
					row.cells[j].style.border = `${width}px ${type} ${color}`;
    
				}  
			}
			
			
			return this;
		}
			
 generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
	th.style.borderTopLeftRadius = "10px";
	th.style.borderTopRightRadius = "10px";
	th.style.width = "150px";

    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

 generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (var key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}


nextGen(el, data){
	console.log("ORGASM")
	console.log(data);
	for (let element of data) {
		let row = el.insertRow();
		for (var key in element) {
		  let cell = row.insertCell();
		  let text = document.createTextNode(element[key]);
		  cell.appendChild(text);
		}
	  }
}
	
	
	
	
	
	
	sizes(arra) {
		this.res.style.fontSize = `${arra[0].size}rem`;
		
		const adj = () => {
			
			for (var i = 0; i < arra.length; i++) {
				if (arra[i].width) {
					let mq = window.matchMedia(`(min-width: ${arra[i].width}px)`);
					if (mq.matches) {
						// alert("Matches");
						console.warn(`----------${arra[i].size}`);
						this.res.style.fontSize = `${arra[i].size}`;
					} else { // added newly (jpij)
						this.res.style.fontSize = `1em`;
					}
				}
			}
			
			
			let isMobile = window.matchMedia(`(max-device-width: 415px)`);

			if (isMobile.matches) {
				this.res.style.fontSize = `${arra[arra.length - 1].mobile}`;
			}

		}
		adj();
		window.addEventListener("resize", adj);
		return this;
	}
	
		
		
	render(div){
		if (div) {
			
			
			let diva = document.createElement("div");
			diva.style.overflowX = "auto";
			diva.appendChild(this.res);
			
			document.querySelector(div).appendChild(/*this.res*/diva)
		} else {
			//return this.res;
			let diva = document.createElement("div");
			diva.style.overflowX = "auto";
			diva.appendChild(this.res);
			return diva;
		}
	}

	}
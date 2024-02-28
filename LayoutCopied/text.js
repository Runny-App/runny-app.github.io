// 13:28 07/04/2020 - BEGIN NOTHING GONNA STOP US NOW  Lets go!





class Texta extends Animator {
	constructor(text, obj) {
		super();
		this.text = text;
		this.res = null;
		this.setup(obj);
		// this.setRandom();
	}

	onTap(e){
		this.res.addEventListener("click", e);
		return this;
	}
	
	setClass(name){
		this.res.setAttribute("class", name);
		return this;
	}

	setRandom(){

		
    var result = "LAYOUT-";
    var chars =  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (var i = 90; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }

    result += new Date().getTime();
	this.res.setAttribute("class", result);

    return this;

	}



	set(obj){
		if (obj.color){
			this.color(obj.color);
		}


		if (obj.class){
			this.setClass(obj.class);
		}

		if (obj.fluid){
			this.fluid(obj.fluid);
		}

		if (obj.font){
			this.font(obj.font);
		}

		if (obj.align){
			this.res.style.textAlign = obj.align;
		}

		if (obj.weight){
			this.weight(obj.weight);
		}

		if (obj.padding){
			this.padding(obj.padding);
		}

		return this;
	}
	
	/*jumbotron() {
		const adj = () => {
			let query = window.matchMedia("(max-device-width: 415px)");
			if (query.matches) {
				this.res.style.fontSize = '6em';
			} else {
				this.res.style.fontSize = '6em';
			}
		}

		adj();
		window.addEventListener("resize", adj);
		return this;
	}*/
    
    
    
    
    
	clampExperiment(){

		this.res.style.fontSize = "clamp(1rem, calc(1rem * 10rem), 3rem)";
		// this.res.style.fontSize = "clamp(1.125rem, calc(1.125rem + (1.25 - 1.125) * ((100vw - 20rem) / (96 - 20))), 1.25rem)"; // "clamp(1rem, 4rem * 20vw, 7rem)";
		return this;
	}
    
    
	/*
	
	 between(name){
        
        
        if (name === "S1"){
             this.res.style.fontSize = "clamp(2rem, 8vw, 2.5rem)";
        }
        
        if (name === "S2"){
             this.res.style.fontSize = "clamp(4rem, 8vw, 5rem)";
        }
        
        if (name === "S3"){
             this.res.style.fontSize = "clamp(2rem, 5vw, 2.5rem)";
        }


		if (name === "S4"){
			this.res.style.fontSize = "clamp(1.5rem, 2vw, 1.6rem)";
	   }
        
         if (name === "S5"){
             this.res.style.fontSize = "clamp(1.2rem, 2vw, 1.3rem)";
        }

		if (name === "S6"){
			this.res.style.fontSize = "clamp(1rem, 2vw, 1.3rem)";
	   }
		
        
        return this;
    }
	
	
	*/
    
    between(name){
        
        
        if (name === "S1"){
             this.res.style.fontSize = "clamp(2rem, 8vw, 2.5rem)";
        }
        
        if (name === "S2"){
             this.res.style.fontSize = "clamp(4rem, 8vw, 5rem)";
        }
        
        if (name === "S3"){
             this.res.style.fontSize = "clamp(2rem, 5vw, 2.5rem)";
        }


		if (name === "S4"){
			this.res.style.fontSize = "clamp(1.5rem, 2vw, 1.6rem)";
	   }
        
         if (name === "S5"){
             this.res.style.fontSize = "clamp(1.2rem, 2vw, 1.3rem)";
        }

		if (name === "S6"){
			this.res.style.fontSize = "clamp(1rem, 2vw, 1.3rem)";
	   }
		
        
        return this;
    }



	betweenCopy(name){
        
        
        if (name === "S1"){
             this.res.style.fontSize = "clamp(2rem, 8vw, 2.5rem)";
        }
        
        if (name === "S2"){
             this.res.style.fontSize = "clamp(4rem, 8vw, 5rem)";
        }
        
        if (name === "S3"){
             this.res.style.fontSize = "clamp(2rem, 5vw, 2.5rem)";
        }


		if (name === "S4"){
			this.res.style.fontSize = "clamp(1.5rem, 2vw, 1.6rem)";
	   }
        
         if (name === "S5"){
             this.res.style.fontSize = "clamp(1.2rem, 2vw, 1.3rem)";
        }

		if (name === "S6"){
			this.res.style.fontSize = "clamp(1rem, 2vw, 1.3rem)";
	   }
		
        
        return this;
    }
    
    
     stringGen(len) {
  var text = "";
  
  var charset = "abcdefghijklmnopqrstuvwxyz";
  
  for (var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  
  return text;
}
    
    initLetter(n){
        let el  = document.createElement("style");
        document.body.appendChild(el);
        
       // let rand = new Rans
      //  this.res.
        
        
        
        let randID = Math.random();
        
        let str = this.stringGen(1000); //randID.toString().substr(3, 6);
        this.res.setAttribute("id", str);
        console.log();
        
        document.styleSheets[0].insertRule(`#${str}::first-letter { color: green; font-size: 3em; padding: 0.1em }`, 0);
       // this.res.style.initialLetter = n;
        return this;
    }



	


	constant(name){
		const display1 = "1.625rem";
        
        if (name === "S1"){
            this.jumbotron();
        }

        if (name === "S2"){
             this.large();
        }
        
        if (name === "S3"){
             this.medium();
        }

		/*const display4= "1.200rem";
        
        if (name === "S4"){
             this.res.style.fontSize = display4;
        }

		const display5= "1.000rem";
        
        if (name === "S5"){
             this.res.style.fontSize = display5;
        }
*/

		return this;
	} 
    
   
	
	
	
	fluid(name){
        
        const display1 = "calc(1.625rem + 4.3vw)";
        
        if (name === "S1"){
			this.res = document.createElement("h1");
			let node = document.createTextNode(this.text);
			this.res.appendChild(node);
             this.res.style.fontSize = display1;
        }
        
         
        const display2 = "calc(1.525rem + 3.525vw)";
        
        if (name === "S2"){
			this.res = document.createElement("h2");
			let node = document.createTextNode(this.text);
			this.res.appendChild(node);
             this.res.style.fontSize = display2;
        }
        
        
        const display3 = "calc(1.375rem + 2.75vw)";
        
        if (name === "S3"){
			this.res = document.createElement("h3");
			let node = document.createTextNode(this.text);
			this.res.appendChild(node);
             this.res.style.fontSize = display3;
        }

		const display4 = "calc(1.275rem + 1.975vw)";
        
        if (name === "S4"){
			this.res = document.createElement("h4");
			let node = document.createTextNode(this.text);
			this.res.appendChild(node);
             this.res.style.fontSize = display4;
        }

		const display5 = "calc(1.1rem + 1.2vw)";
        
        if (name === "S5"){
			//this.res = document.createElement("p");
			//let node = document.createTextNode(this.text);
		//	this.res.appendChild(node);
             this.res.style.fontSize = display5;
        }
        
              return this;
    } 
    


	fluidCopy(name){
        
        const display1 = "calc(1.625rem + 5.075vw)";
        
        if (name === "S1"){
			this.prevStylex = this.res.style;
			this.res = document.createElement("h1");
			this.res.style.cssText = this.prevStylex.cssText;
			let node = document.createTextNode(this.text);
			this.res.appendChild(node);
             this.res.style.fontSize = display1;
        }
         
        const display2 = "calc(1.500rem + 4.3vw)";
        
        if (name === "S2"){
			this.prevStylex = this.res.style;
			this.res = document.createElement("h2");
			this.res.style.cssText = this.prevStylex.cssText;
			let node = document.createTextNode(this.text);
			this.res.appendChild(node);
             this.res.style.fontSize = display2;
        }
        
        
        const display3 = "calc(1.375rem + 3.525vw)";
        
        if (name === "S3"){
			this.prevStylex = this.res.style;
			this.res = document.createElement("h3");
			this.res.style.cssText = this.prevStylex.cssText;
			let node = document.createTextNode(this.text);
			this.res.appendChild(node);
             this.res.style.fontSize = display3;
        }

		const display4 = "calc(1.250rem + 2.75vw)";
        
        if (name === "S4"){
			this.prevStylex = this.res.style;
			this.res = document.createElement("h4");
			this.res.style.cssText = this.prevStylex.cssText;
			let node = document.createTextNode(this.text);
			this.res.appendChild(node);
             this.res.style.fontSize = display4;
        }

		const display5 = "calc(1.125rem + 1.975vw)";
        
        if (name === "S5"){
			this.prevStylex = this.res.style;
			this.res = document.createElement("h5");
			this.res.style.cssText = this.prevStylex.cssText;
			let node = document.createTextNode(this.text);
			this.res.appendChild(node);
            this.res.style.fontSize = display5;
        }



		const display6 = "calc(1rem + 0.5vw)"; // calc(1rem + 1.2vw)
        
        if (name === "S6"){
             this.res.style.fontSize = display6;
        }
        
              return this;
    }
    
    
    
    
    
    
    
    



	
	
	

	myself(obj) {
		const adj = () => {
			let query = window.matchMedia("(max-device-width: 415px)");
			if (query.matches) {
				this.res.style.fontSize = obj.desktop;
			} else {
				this.res.style.fontSize = obj.phone;
			}
		}

		adj();
		window.addEventListener("resize", adj);
		return this;
	}
    

	
	jumbotron() {
		const adj = () => {
			let query = window.matchMedia("(max-device-width: 415px)");
			if (query.matches) {
				this.res.style.fontSize = '8rem';
			} else {
				this.res.style.fontSize = '6rem';
			}
		}

		adj();
		window.addEventListener("resize", adj);
		return this;
	}
	
	
	large() {
		const adj = () => {
			let query = window.matchMedia("(max-device-width: 415px)");
			if (query.matches) {
				this.res.style.fontSize = '7rem';
			} else {
				this.res.style.fontSize = '5rem';
			}
		}

		adj();
		window.addEventListener("resize", adj);
		return this;
	}
	


	frame(obj){
		this.res.style.width = obj.width;
		this.res.style.height = obj.height;
		return this;
	}

	
	
	vw(val, o, maxMin){
		
	}
	
	
	
	responsive(base){		
			this.set = false;
		this.setB = false;
		
		
		const adapt = () => {
			
			
			
		if (window.innerWidth < base.minw){
			this.setB = false;
			
			
			// *Â window.innerWidth);
			console.log(base.baseVW / 100 * window.innerWidth);
			// CONVERT CURRENT base.VW to pixels
			
			if (!this.set){
			
			this.res.style.color = "#3498db";
			this.res.style.fontSize = `${base.baseVW / 100 * window.innerWidth}px`;
				this.set = true;
			}
		} else if (window.innerWidth > base.maxw){
			this.set = false;
			if (!this.setB){
					//alert("ON REFRESH");
				this.res.style.color = "orange";
				this.res.style.fontSize = `${base.baseVW / 100 * base.maxw}px`;
			//this.res.style.fontSize = `${base.maxFont}px`;
				this.setB = true;
			}
			
			
			
		} else {
			this.set = false;
			this.setB = false;
		    this.res.style.color = "black";
			this.res.style.fontSize = `${base.baseVW}vw`;
		}
		}
		
	
		/*let query = window.matchMedia(`(max-device-width: ${o.w}px)`);
			if (query.matches) {
				alert("joa")
				this.res.style.fontSize = `${o.size}vw`;
			}*/
		

		adapt();
		
		
		
	
		
		
		window.addEventListener("resize", adapt);
		
		
		
		
		// this.res.style.fontSize = `calc(${base}px + 1vw)`;
		return this;
	}
	
	xlarge() {
		const adj = () => {
			let query = window.matchMedia("(max-device-width: 415px)");
			if (query.matches) {
				this.res.style.fontSize = '6.5rem';
			} else {
				this.res.style.fontSize = '8.5rem';
			}
		}

		adj();
		window.addEventListener("resize", adj);
		return this;
	}
	
	medium() {
		const adj = () => {
			let query = window.matchMedia("(max-device-width: 415px)");
			/* let query = window.matchMedia("(max-device-width: 415px)");
			if (window.innerWidth < h || query.matches) {
			} */

			if (query.matches) {
				this.res.style.fontSize = '2.25rem';
			} else {
				this.res.style.fontSize = '1.5em';
			}
		}

		adj();
		window.addEventListener("resize", adj);
		return this;
	}
    
    auto() {
		const adj = () => {
			let query = window.matchMedia("(max-device-width: 415px)");
			if (query.matches) {
				this.res.style.fontSize = '2rem';
			} else {
				this.res.style.fontSize = '1rem';
			}
		}

		adj();
		window.addEventListener("resize", adj);
		return this;
	}
	
	small() {
		const adj = () => {
			let query = window.matchMedia("(max-device-width: 415px)");
			/* let query = window.matchMedia("(max-device-width: 415px)");
			if (window.innerWidth < h || query.matches) {
			} */

			if (query.matches) {
				this.res.style.fontSize = '1.5em';
			} else {
				this.res.style.fontSize = '1em';
			}
		}

		adj();
		window.addEventListener("resize", adj);
		return this;
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
	
	setup(obj) {
		let el;
		
		if (obj){
			el = document.createElement(obj.type);
		} else {
			el = document.createElement("p");
		}
		
		
		let node = document.createTextNode( /*this.text.replace("$", obj)*/ this.text);
		el.appendChild(node);

		this.res = el;
		this.res.style.padding = 0;
		this.res.style.margin = 0;
		this.fluid("S5"); // default font size
		return this;
	}

	hide() {
		this.res.style.visibility = "hidden";
		return this;
	}

	font(font) {
		this.res.style.fontFamily = font;
		return this;
	}

	center() {
		this.res.style.textAlign = "center";
		return this;
	}

	size(s) {
		this.res.style.fontSize = s;
		return this;
	}

	em(e) {
		this.res.style.fontSize = `${e}em`;
		//alert("h")
		return this;
	}

	color(color) {
		this.res.style.color = color;
		return this;
	}

	align(direction) {
		this.res.style.textAlign = `${direction}`;
		return this;
	}

	weight(weight) {
		this.res.style.fontWeight = weight;
		return this;
	}

	bold() {
		this.res.style.fontWeight = "bold";
		return this;
	}

	italic() {
		this.res.style.fontStyle = "italic";
		return this;
	}

	/*padding(val){
		this.res.style.padding = val;
		return this;
	}*/


	
		width(w, shouldCenter){
		this.res.style.width = w;
		
		if (shouldCenter){
		this.res.style.marginLeft = "auto";
		this.res.style.marginRight = "auto";
		}
		return this;
	}

	border(color, w) {
		this.res.style.border = `${w}px solid ${color}`;
		return this;
	}

	padding(L, T, R, B) {
		if (L || T || R || B){ // CAUGHT MYSELF
		this.res.style.paddingLeft = L;
		this.res.style.paddingTop = T;
		this.res.style.paddingRight = R;
		this.res.style.paddingBottom = B;
		} 
		
		if (!T && !R && !B){
			//alert("j")
		this.res.style.padding = L;	
		}
		
		return this;
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
	
	margin(L, T, R, B) {
		if (L || T || R || B){ // CAUGHT MYSELF
		this.res.style.marginLeft = L;
		this.res.style.marginTop = T;
		this.res.style.marginRight = R;
		this.res.style.marginBottom = B;
		} 
		
		if (!T && !R && !B){
			// alert("j")
		this.res.style.margin = L;	
		}
		
		return this;
	}
	
	
	margin(direction, value){
		if (direction == "top"){
			this.res.style.marginTop = value;
		} else if (direction == "bottom"){
			this.res.style.marginBottom = value;
		}else if (direction == "left"){
			this.res.style.marginLeft = value;
		}else if (direction == "right"){
			this.res.style.marginRight = value;
		}
		
		return this;
	}

	headline() {
		this.em(4)
		this.font("Arial")
		this.bold()
		return this;
	}

	caption() {
		this.bold();
		this.res.style.fontFamily = "Arial";
		this.color("gray");
		this.padding("top", 20);
		
		this.res.style.fontSize = "1em";
		
		// responsive font size
		
		let mq = window.matchMedia("(max-device-width: 415px)");
		
		if (mq.matches){
		this.res.style.fontSize = "2em";
		} else {
		this.res.style.fontSize = "1em";
		}	
		
		
		return this;
	}

	updating(obj, key) {

		var copy = this.res;
		var txt = this.text;

		Object.defineProperty(obj, key, {
			set(newVal) {
				// 22:01


				// this.text
				// let node = document.createTextNode(`Pressed ${newVal}`);
				let node = document.createTextNode(txt.replace("$", newVal))
				copy.replaceChild(node, copy.childNodes[0]);
			}
		});

		return this;
	}


	style(st) {
		this.res.style.color = st.styles.color;
		this.res.style.fontWeight = st.styles.fontWeight;

		this.res.style.paddingLeft = st.styles.padding[0];
		this.res.style.paddingTop = st.styles.padding[1];
		this.res.style.paddingRight = st.styles.padding[2];
		this.res.style.paddingBottom = st.styles.padding[3];

		this.res.style.marginLeft = st.styles.margin[0];
		this.res.style.paddingTop = st.styles.margin[1];
		this.res.style.paddingRight = st.styles.margin[2];
		this.res.style.paddingBottom = st.styles.margin[3];

		this.res.style.opacity = st.styles.opacity;


		return this;
	}
	
	
	applyStyle(w, style){
		
	let query = window.matchMedia(`(max-width: ${w}px)`);
		if (query.matches){
		  Object.assign(this.res.style, style.styles);
		}

		console.log(style.styles);
		return this;
	}
	
	
	
	
	
	nextApply(arr){
		let queries = [];
		
		let initStyle = this.res.style;
		
		const change = (query) => {
			
			if (queries[0].matches){
				//alert("FIRST")
				Object.assign(this.res.style, arr[0].styles);
				console.log("FIRST !");
			} else if (queries[1].matches){
				//alert("SECOND")
				Object.assign(this.res.style, arr[1].styles);
				console.log("SECOND !");
			} else {
			//	alert("NO QUERY")
				Object.assign(this.res.style, arr[arr.length - 1].styles);
				console.log("NO MATCH !");
			}
		}
		
		
		for (var i = 0; i < arr.length; i++) {
			let el = arr[i];
			
			let query = window.matchMedia(`(min-width: ${el.min}px) and (max-width: ${el.max}px)`);
			queries.push(query);
			
			queries[i].addListener(change)
		}
		
		
		change();
		
		
		
		return this;
	}
	
	
	
	
	apply(arr) {
		
		var initStyle = this.res.styles;
		
	const goThroughStyles = () => {
		for (var i = 0; i < arr.length; i++) {
			let el = arr[i];
			
			
			if (el.min && el.max){
				let query = window.matchMedia(`(min-width: ${el.min}px) and (max-width: ${el.max}px)`);
			if (query.matches) {
				Object.assign(this.res.style, el.styles);
			} else {
				alert("YES min max, but does not match");
				Object.assign(this.res.style, initStyle);
			}
				
			} else {
				let query = window.matchMedia(`(max-width: ${el.max}px)`);
			if (query.matches) {
				Object.assign(this.res.style, el.styles);
			} else {
				//alert("nij")
					alert("NO min max, and does not match");
				Object.assign(this.res.style, initStyle);
			}
		}	
	  }
	}
	
	// setFirst
	/*let query = window.matchMedia(`(max-width: ${arr[0].width}px)`);
		if (!query.matches){
				Object.assign(this.res.style, arr[0].styles);
		}*/
	
	goThroughStyles();
	window.addEventListener("resize", goThroughStyles);  // never use "on" here. Will get overrwritten !
	return this;
}
	
	render(div) {
		/*
		render(el) {
		Array.from(this.res.children).forEach(e => e.style.padding = 0);
		Array.from(this.res.children).forEach(e => e.style.margin = 0);
		
		if (el) {
			document.querySelector(el).appendChild(this.res);
		} else {
			return this.res;
		}
	}
		*/
		Array.from(this.res.children).forEach(e => e.style.padding = 0);
		Array.from(this.res.children).forEach(e => e.style.margin = 0);
		
		if (div) {
			document.querySelector(div).appendChild(this.res);
		} else {

			return this.res;
		}
	}
}
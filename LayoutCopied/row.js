class Row {
	constructor(frs, saveEl) {
		this.saveEl = saveEl;
		this.frs = frs;
		this.res = null;
		this.setup();
		this.responsive();
	}
	
	center() {
	//	this.res.style.justifyItems = "center";
		return this;
	}

	setup(obj) {
		//let parent = document.createElement("div");
		//this.parent = parent;

		let flex = document.createElement("div");
        flex.setAttribute("class", "someClass");
		flex.style.display = "grid";
		flex.style.gridTemplateColumns = "1fr 1fr";
		flex.style.alignItems = "center";
		flex.style.margin = 0;
		flex.style.padding = "1em";
		//flex.style.width = "100%";
		
		//flex.style.display = "flex";
		
		this.res = flex;
		return this;
	}
	
    background(color){
        this.res.style.background = color;
        return this;
    }
    
    radius(val){
        this.res.style.borderRadius = `${val}px`;
        return this;
    }
    
    
	items(arr) {
        
        var frString = "";
        
        
		console.warn(this.res);
		for (var i = 0; i < arr.length; i++) {
			
			
			frString += "1fr ";
			
			
			
			let r = arr[i].render();
		 // r.style.width = "100%";
			//r.style.flex = 1;
			this.res.appendChild(r);
		}
        
        
        this.res.style.gridTemplateColumns = frString;
		return this;
	}
	
	
	responsive(h){
		let media = window.matchMedia(`(max-device-width: 415px)`);
		
		const adjust = () => {
			if (window.innerWidth < h || media.matches){
			this.res.style.gridTemplateColumns = "1fr";
		} else {
			this.res.style.gridTemplateColumns = "1fr 1fr";
		}
		}
		
		
		if (window.innerWidth < h || media.matches){
			this.res.style.gridTemplateColumns = "1fr";
		} else {
			this.res.style.gridTemplateColumns = "1fr 1fr";
		}
		
		
		window.addEventListener("resize", adjust);
		
		
		
		
		
		return this;
	}
	
     frame(obj){
        this.res.style.width = obj.width;
        this.res.style.height = obj.height;
        return this;
    }
	
	
	render(el) {
		if (el){
		document.querySelector(el).appendChild(this.res);
		} else {
			return this.res;
		}
	}
}



class FlexRow {
	constructor(frs, saveEl) {
		this.saveEl = saveEl;
		this.frs = frs;
		this.res = null;
		this.setup();
		this.responsive();
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
			
		
		return this;
	}

	borderAround(data){
		this.res.style.border = data;
		return this;
	}

	

	cornerRadius(el){
		this.res.style.borderRadius = el;
		return this;
	}
	


	set(options){
		if (options.padding){
			this.padding(options.padding);
		}

		return this;
	}



	padding(vals){
		this.res.style.padding = vals;
		return this;
	}
	
	center() {
	//	this.res.style.justifyItems = "center";
		return this;
	}
    
    toColumn(){
        this.res.style.flexDirection = "column";
        return this;
    }
    
    
    
    setClass(classa){
         this.res.setAttribute("class", classa);
        return this;
    }
    
    toCenter(classa) {
        this.res.style.marginLeft = "auto";
        this.res.style.marginRight = "auto";
         this.res.setAttribute("class", classa);
        return this;
    }

	setup() {
		let flex = document.createElement("div");
		flex.style.display = "flex";
		flex.style.justifyContent = "space-around";
        flex.style.alignItems = "center";
		flex.style.margin = 0;
		// flex.style.width = "100%";
		this.res = flex;
		return this;
	}





	itemAlignCenter(){
		this.res.style.justifyContent = "center";
        this.res.style.alignItems = "center";
		return this;
	}
    
    arrayMargin(arr, value) {
		if (arr.includes("left")){
			this.res.style.marginLeft = `${value}px`;
		}
		
		if (arr.includes("right")){
			this.res.style.marginRight = `${value}px`;
		}
		
		if (arr.includes("top")){
			this.res.style.marginTop = `${value}px`;
		}
		
		if (arr.includes("bottom")){
			this.res.style.marginBottom = `${value}px`;
        }
		return this;
	}
    
    
    
     frame(obj){
        this.res.style.width = obj.width;
        this.res.style.height = obj.height;
         
         
         let media = window.matchMedia("(max-device-width: 415px)");
         
         if (media.matches && obj.mobile){
              this.res.style.width = obj.mobile
         }
         
        return this;
    }
    
     background(color){
        this.res.style.background = color;
        return this;
    }
    
    radius(val){
        this.res.style.borderRadius = `${val}px`;
        return this;
    }
    
    shadow(x, y, radius){
          this.res.style.boxShadow = "0px 1px 10px 0px rgb(145 145 145)"; //`${x}px ${y}px ${radius}px #000`;
        return this;
    }
    
    onTap(e){
		this.res.addEventListener("click", e);
		return this;
	}
	
	
	items(arr) {
		console.warn(this.res);
		for (var i = 0; i < arr.length; i++) {
			
			
			
			
			
			
			let r = arr[i].render();
		 // r.style.width = "100%";
			//r.style.flex = 1;
			this.res.appendChild(r);
		}
		return this;
	}
	
	
	responsive(h){
		let media = window.matchMedia(`(max-device-width: 415px)`);
		
		const adjust = () => {
			if (window.innerWidth < h || media.matches){
			this.res.style.gridTemplateColumns = "1fr";
		} else {
			this.res.style.gridTemplateColumns = "1fr 1fr";
		}
		}
		
		
		if (window.innerWidth < h || media.matches){
			this.res.style.gridTemplateColumns = "1fr";
		} else {
			this.res.style.gridTemplateColumns = "1fr 1fr";
		}
		
		
		window.addEventListener("resize", adjust);
		
		
		return this; // :D
		return this;
	}
	
	
	render(el) {
		if (el){
		document.querySelector(el).appendChild(this.res);
		} else {
			return this.res;
		}
	}
}
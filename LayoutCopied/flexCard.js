/*
class Spacer {
	constructor() {}
	
	render(){
		
	
	let card = document.createElement("div");
	card.style.flex = "1";
	return card;
	
			
			}
}*/


class Spacer {
	constructor( hide) {
        
        
        
        
       
        
        if (hide){
            
        
    var card = document.createElement("div");
    card.style.flex = "1";
    this.res = card;
        }
        
        
         if (hide){
            this.res.setAttribute("class", "innerHider");
        }
        
	return this;
        
        
    }
	
	render(){
		
        var one = document.createElement("h2");
        one.style.display = "none !important";
	
	return this.res ?? one;
	
			
			}
}


class Card extends Animator {
	constructor(text, url) {
        super();
		this.text = text;
		this.url = url;
		this.setup();
	}

	setup() {
		let query = window.matchMedia("(max-device-width: 415px)");
		let card = document.createElement("div");
		card.style.display = "flex";
		card.style.flexDirection = "column";
		card.style.alignItems = "center";
		card.style.backgroundColor = "#fff";
		card.style.fontFamily = "Arial";
		card.style.width = "100%";
		this.res = card;	
		return this;	
	}

	frame(obj){

		if (obj.height){
		this.res.style.height = obj.height;
		}

		if (obj.width){
			this.res.style.width = obj.width;
			}

			return this;
	}
    
    scale(obj){
        
        let previousWidth = this.res.style.width;
          
        this.res.style.transition= "0.5s all";
      //  alert(previousWidth);
        
        this.res.addEventListener("mouseover", () => {
            let previousWidth = this.res.style.width;
             this.res.style.transform = "scale(1.04)";
        });
        
         this.res.addEventListener("mouseout", () => {
            let previousWidth = this.res.style.width;
              this.res.style.transform = "scale(1.0)";
        });
        
        
        return this;
    }
	
	background(color){
		this.res.style.backgroundColor = color;
		return this;
	}
	
	color(color){
		this.res.style.color = color;
		return this;
	}
	
	padding(pad){
		this.res.style.padding = `${pad}px`;
		return this;
	}
	
	items(els){
		for (var i = 0; i < els.length; i++){
			this.res.appendChild(els[i].render());
		}
		
		return this;
	}
	
	shadow(){
	this.res.style.boxShadow = "1px 1px 20px rgba(0, 0, 0, 0.60)";
	return this;
	}
	
	round(value){
	this.res.style.borderRadius = `${value}px`;
	return this;
	}
	
	render(div){
		if (div){
			document.querySelector(div).appendChild(this.res);
		} else {
			return this.res;
		}	
	}
}
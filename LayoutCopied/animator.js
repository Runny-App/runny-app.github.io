
// 22/08/2020 - 16:30
class Animator {
    
    constructor(){
         this.state = {
           isExpanded: false,
             isMovedUp: false,
              isMovedDown: false
        }
    }
    





    navBarExpand(){
        this.res.style.backgroundColor = "green";
        this.res.animate([
            {transform: "scaleY(3.0)"}
        ], {
            
				
                duration: 2000,
                iterations: 1,
                 fill: "both"
                
        })//.play();

        return this;
    }





    
	scrollFade(duration, direction){
		this.res.style.visibility = "hidden";
		this.faden(duration, direction, "scroll");
		return this;
	}
    
    
    
    
    expand(obj){
        
        
        
        if (this.state.isExpanded === false){
            
        
        if (obj.on === "click"){
            this.res.addEventListener("click", () => {
               this.innerExpand(obj); 
                // this.moveUp(obj);
            });
        } else {
            this.innerExpand(obj);
           
        }
        
        } else {
            
            this.innerExpandBack(obj);
            
            
        }
        
        this.state.isExpanded = !this.state.isExpanded;
        
        console.log("IS EXPANDED: " + this.state.isExpanded);
        return this;
    }
    
     
    move(obj){
        
        if (obj.on === "click"){
            this.res.addEventListener("click", () => {
               this.moveUpa(obj); 
                // this.moveUp(obj);
            });
        } else {
            
            
            
            
            
            
            
          //  if (this.state.isMovedUp === false){
                if (obj.direction === "up"){
                    this.moveUpa(obj);
                }
            
            if (obj.direction === "down"){
                    this.moveDowna(obj);
                }
          //  }
            
            
             this.state.isMovedUp = !this.state.isMovedUp;
            
            
            
            
            
                if (obj.direction === "left"){
                    this.moveLeft(obj);
                }
            
            
            
            
            
        }
        
        return this;
    }
    
    
    
    
     moveLeft(obj){
         this.res.animate([
        {transform: `translateX(0px)`},
             
             
            
         {transform: `translateX(-${obj.distance})`},
         
       //  {width: "100px", height: "100px"}
		],{
				
		duration: 900,
		iterations: obj.iterations,
         fill: "both"
		}).play();
        
        
        return this;
    }
    
   
    moveUpa(obj){
        if (this.state.isMovedUp === false){
            
        this.res.animate([
        {transform: `translateX(0px)`}, 
         {transform: `translateY(-${obj.distance})`},
		],{	
		duration: 900,
		iterations: obj.iterations,
         fill: "both"
		}).play();
        
        } else {
            
        this.res.animate([
        {transform: `translateX(0px)`}, 
         {transform: `translateY(${obj.distance})`},
		],{	
		duration: 900,
		iterations: obj.iterations,
         fill: "both"
		}).play();
            
        }
        return this;
    }
    
    
     moveDowna(obj){
        if (this.state.isMovedDown === false){
            
        this.res.animate([
        {transform: `translateX(0px)`}, 
         {transform: `translateY(${obj.distance})`},
		],{	
		duration: 900,
		iterations: obj.iterations,
         fill: "both"
		}).play();
        
        } else {
            
        this.res.animate([
        {transform: `translateX(0px)`}, 
         {transform: `translateY(-${obj.distance})`},
		],{	
		duration: 900,
		iterations: obj.iterations,
         fill: "both"
		}).play();
            
        }
        return this;
    }
    
    
    
    moveUpaBack(obj){
         this.res.animate([
        {transform: `translateX(0px)`},
             
             
            
        // {transform: `translateY(-${obj.distance})`},
         
       //  {width: "100px", height: "100px"}
		],{
				
		duration: 900,
		iterations: obj.iterations,
         fill: "both"
		}).play();
        
        
        return this;
    }
    
    
    
    
    innerExpandBack(obj){
         this.res.animate([
       
         
         {width: this.prevWidth,
          height: this.prevHeight},
         
       //  {width: "100px", height: "100px"}
		],{
				
		duration: 900,
		iterations: obj.iterations,
         fill: "both"
		});
    }
    
    innerExpand(obj){
        
        
     //   alert("TRYING TO GO FULLSCREEN");
        
       
        this.prevWidth = this.res.style.width;
        this.prevHeight = this.res.style.height;
            
     this.res.animate([
        {width: this.prevWidth,
        height: this.prevHeight},
         
         {width: obj.width ?? this.prevWidth,
          height: obj.height ?? this.prevHeight},
         
       //  {width: "100px", height: "100px"}
		],{
				
		duration: 900,
		iterations: obj.iterations,
         fill: "both"
		});
        
     /*   setTimeout(() => {
    this.res.animate([
        {width: "1000px",
        height: "1000px"},
        
		],{
				
		duration: 1300,
		iterations: obj.iterations,
         fill: "both"
               
		});
        }, 2000);*/
        
        console.warn(this.prevWidth);
         console.warn(this.prevHeight);
        
       // animation.play();
        
        
        
        
         /* if (obj.toggleBack){
             this.res
                 .animate([
                    {width: `${this.prevWidth}`, 
                     height: `${this.prevHeight}`}
                    ], {
                 composite: "add"
             })
                 .play();
             
                 alert("N")
                // console.log("BACK");
           
              }*/
        
        
     /*   animation.onfinish = () => {
            
            
              if (obj.toggleBack){
             this.res
                 .animate([
                    {width: `${this.prevWidth}`, 
                     height: `${this.prevHeight}`}
                    ], {
                 composite: "add"
             })
                 .play();
             
                 alert("N")
                // console.log("BACK");
           
              }
            
            
        };
        */
        
       
        
        
        
        
        
        
        return this;
        
        }
        
                                           
                                           
        
       /* setTimeout(() => {
            animation.pause()
        }, 2990);*/
        
   
	fade(obj){
		
		this.res.style.visibility = "hidden";
		this.faden(obj.duration, obj.from, "load");
		return this;
	}
	
	faden(duration, direction, event){
		this.res.style.visibility = "hidden";
		this.scrolled = false;
		
		
		 window.addEventListener(event, () => {
			this.res.style.visibility = "visible";
			 var height = window.innerHeight;
			   var top = this.res.getBoundingClientRect().top;
            if ((top - height <= 0) || (event == "load")) {
				
				
				
			//	alert("ihu");
			 if (this.scrolled == false){
				 
				 if (event == "load"){
					// alert("hui");
				 }
				 
				 
	if (direction == "left"){
					  
		this.res.animate([
			{transform: "translateX(-30px)"},
			{transform: "translateX(0px)"},
		],{
				
		duration: duration,
		iterations: 1
		});
	}
				 
	if (direction == "right"){
					  
		this.res.animate([
			{transform: "translateX(30px)"},
			{transform: "translateX(0px)"},
		],{
				
		duration: duration,
		iterations: 1
		});
	}
				 
				 
	if (direction == "top"){  
		this.res.animate([
			{transform: "translateY(-30px)"},
			{transform: "translateY(0px)"},
		],{
				
		duration: duration,
		iterations: 1
		});
	}
				 
	
	if (direction == "bottom"){
		this.res.animate([
			{transform: "translateY(30px)"},
			{transform: "translateY(0px)"},
		],{
				
		duration: duration,
		iterations: 1
		});
	}
				 
				 
				 
				
		this.res.animate([
			{opacity: "0.0"},
			{opacity: "1.0"}	
		],{
		duration: duration,
		iterations: 1
		});
				 
		this.scrolled = true;	 
			 }	
			} 
		 });
		return this;
	}
}
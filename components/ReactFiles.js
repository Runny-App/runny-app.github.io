if (React){
    React.Component.prototype.toJSX = (obj) => {
        
        const shouldAppend = (ref) => {
            if (ref){
            
                let all = document.querySelector("*");
                all.style.padding = 0;
                all.style.margin = 0;
    
                let got = `.${obj.getAttribute("class")}`;
                
                // alert();
                  let myClass = document.querySelector(got);
                 if (myClass === null){
                      ref.appendChild(obj);
                 }
            }
        }
    
        return <div ref={ref => {shouldAppend(ref) }} />;
        
        // return <div style={{width:"100vw"}} ref={ref => {shouldAppend(ref) }} />;
    }
    }

class LayoutHost extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        this.element = this.props.el;
        // this.element.setClass(randomString());
    }

    render(){
        return this.toJSX(this.element.render());
    }
}



class HeartRate extends React.Component { // LayoutComponent
heartRateElement(){

    return new FlexRow()
    .items([

    new Texta(this.props.value).fluid("S5"),
    new Texta("♥").fluid("S5")

    ]).toColumn();
    }

    render(){
       return (
       <div>
       <LayoutHost el={this.heartRateElement()}/>
     
       </div>);
       
    }
  }



  class RunTitle extends React.Component {
    textElement(){
            return new Texta(this.props.name)
            .font("Arial")
            .bold()
            .fluid("S2")
        }
    
        render(){
          return (<LayoutHost el={this.textElement()}/>);
        }
      }



  class DateTitle extends React.Component {
    textElement(){
            return new Texta(this.props.name)
            .font("Arial")
            .bold()
            .fluid("S6")
            .color("gray")
        }
    
        render(){
          return (<LayoutHost el={this.textElement()}/>);
        }
      }

      


        
      class GridViewax extends React.Component {
        constructor(props){
            super(props);
            this.props = props;
        }

        render(){
          // return <h2>A {this.props.runs.length} </h2>
          return <LayoutHost el={new Texta(`Wow ${this.props.runs.length}`)}/>
        }
      }
      
      class GridViewa extends React.Component {
        constructor(props){
            super(props);
           // alert(props.runs.length);
        }


         getCard(obj){
         return new Card().items([
            new Texta(`${obj.value}`)
            .fluid("S4"),
            new Texta(obj.title)
            .fluid("S5")
            .font("Helvetica") // Roboto nw ???
            .color("#1abc9c")
            .bold()
            // .color("#1abc9c")
          ])
        }

        grid(){
        


          console.log(this.props.runs);
          
          let storage = window.localStorage.getItem("unit") || "km";
          let ft = this.props.runs.filter(x => isNaN(x.distance) === false).map(d => Number(d.distance));
          let maxDist =  Math.max.apply(null, ft);
          console.log(ft);
          console.log(maxDist);

         if (storage === "mi") {
          maxDist = maxDist / 1.609;
         }

         maxDist = maxDist.toPrecision(2);

        

         let myConst = storage === "mi" ? 1.609 : 1;

         let convSum = this.props.runs
         .filter((x) => isNaN(Number(x.distance)) === false)
         .map(s => Number(s.distance) / myConst)
         .reduce((a, b) => a + b)
         .toPrecision(3);

      let sum = -1;/*this.props.runs
                .map(r => Number(r.distance))
                .reduce((a, b) => a + b);

                

             
*/

// alert(this.props.runs.filter((x) => isNaN(Number(x.distance)) === false).map(s => s.distance));
   let texts = [

    this.getCard({
      title: "Runs",
      value: this.props.runs.length
    }),

    this.getCard({
      title: "Longest run",
      value: maxDist
    }),

    this.getCard({
      title: "Sum",
      value: convSum
    })

  ]
   
    return new Grid(3)
    .items(texts)
    .center()
    .gap(20)
    .setColumns({count: 1, width: 600})
    .padding(20)
}
        
            render(){
              return <LayoutHost el={this.grid()}/>;
            }
          }
        
    
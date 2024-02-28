class SettingsView extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            unit : "",
        }

      


        window.setTimeout(() => {




        
    
        let it = window.localStorage.getItem("unit");

        if (it === null){
            it = "km";
        }

        this.setState({
            unit: it
           });

        });
      

      //  this.db = firebase.firestore();
       // this.gety();
    }

    


  

    switchTo = (unit) => {
        window.localStorage.setItem("unit", unit);
        
       this.setState({
        unit: unit
       });
    }

    render(){
        return (
            <div>
                <button class="backButton" onClick={this.props.switch}>←</button>
                <h2 class="settingsTitle">Units</h2>

<div class="large">
    <button class={this.state.unit === "km" ? "unitSwitcher high" : "unitSwitcher"} onClick={() => this.switchTo("km")}>{this.state.unit === "km" ? "km ✓" : "km"}</button>
    <button class={this.state.unit === "mi" ? "unitSwitcher high" : "unitSwitcher"} onClick={() => this.switchTo("mi")}>{this.state.unit === "mi" ? "mi	✓" : "mi"}</button>
 </div>
            </div>
        )
        
       
    }
}

// 12:57:27 Deploy
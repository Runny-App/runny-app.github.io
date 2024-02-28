

class LogIn extends React.Component {
	constructor(text){
		super(text);
		this.state = {
			email: "", 
            password: "", 
            errorMessage: "",
            invalidPassword: false, 
            invalidEmail: false,
			showMailReset: false
            };
		
		firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		window.open("app.html", "_top");
	}
		});

	}
	
	emailChanged = (e) => {
		console.log(e.target.value);
		this.setState({email: e.target.value});
	}
	
	passChanged = (e) => {
		console.log(e.target.value);
		this.setState({password: e.target.value});
	}
	
	login = (e) => {
		let email = this.state.email;
		let password = this.state.password;
		
		
		if (email.length > 0 && password.length > 0) {    
        firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
        
            this.setState({
                errorMessage: err.message
            });
            
            if (err.length > 0){
                this.setState({invalidEmail: true})
        
            } else {
                  this.setState({invalidEmail: false})
            }
        });
	} else {
        
        this.setState({
                errorMessage: "You must fill-in all fields."
            });
        
            this.setState({invalidEmail: email.length == 0})
            this.setState({invalidPassword: password.length == 0})
        
        
        
		// alert("You must fill-in all fields.");
	}
	}
	
	signUp = (e) => {
		window.open("signup.html", "_top")
	}

	showMailReset = () => {
		this.setState({
			showMailReset: true
		});
	}
	
	close = () => {
		this.setState({
			showMailReset: false
		});
	}
	

	render(){
		return (

			<div id="stack" style={{display: "flex", justifyContent: "center"}}>
		

			<div id="back">
			{/*<button id="backToIndex" className="backWhite" onClick={() => window.open("index.html", "_top")}>â†</button>*/}
                {/*<div id="existerr">wifhiowefjiewofhweiofhioweiohiohiohio</div>*/}
			<h1>Runny</h1>
			<div id="login">
                


           
                {this.state.errorMessage.length > 0 ? <p id="existerr" className="emailError">{this.state.errorMessage}</p> : null }     
                
			<input className={this.state.invalidEmail ? "invalidField" : "okay"} id={"emailField"} type={"text"} onChange = {this.emailChanged} placeholder="E-mail"/>
	    	<input className={this.state.invalidPassword ? "invalidField" : "okay"} id={"passwordField"} type={"password"} onChange = {this.passChanged} placeholder="Password"/> <br></br>
			<button id={"loginb"} onClick={this.login}>Log in</button><br></br>
			
			<button id={"toSignup"}  onClick={this.showMailReset}>Forgotten password</button>
			
			</div>
		</div>

		{this.state.showMailReset ? <MailReset close={this.close}/> : null }

	

		</div>



		);
	}
}









// Rewrite in hooks







//18:50:00
//20/01/2021 - Rewritten with hooks 19:44:49

function MailReset(props){
	// const [mail, errorText, sent, showError] = React.useState("", "", false, false);

	const [setProps, myProps] = React.useState({props});
	console.log(setProps);
	console.log(setProps.close);
	console.log(myProps);

	const [state, setAll] = React.useState({
			mail: "",
		   errorText: "",
	       sent: false, 
	       showError: false
		});

	 const sendReset = () => {
		var auth = firebase.auth();
		var emailAddress = state.mail;
		
	auth.sendPasswordResetEmail(emailAddress).then(() => {
		setAll({
			sent: true,
			showError: false
		});

		}).catch((error) => {
			console.log(error);
			setAll({
				showError: true,
				errorText: error.message
			});
		});
	}


	let myStyle = {
		display: "flex", 
	flexDirection: "column", 
	alignItems: "center",
padding: "1em",
borderRadius: "1em",
	 zIndex: "2", background: "white", marginTop: "12em", width: "80%", height: "auto"};

	return (

		<div style={myStyle}>

			<button onClick={() => setProps.props.close()} class="loginB">Close</button>
			<h3 class="forgotInstructions largeForgot">Forgot a password?</h3>
			<h3 class="forgotInstructions">No problem, enter your e-mail and we will send you password reset instructions.</h3>
			
			<input type="text" class={state.showError ? "onePointFour redBorder" : "onePointFour"} 
			onChange= {e => setAll({mail: e.target.value})}/>

			{state.sent ? <h3 class="green">The reset e-mail has been sent. Check your inbox.</h3> : null}
			{state.showError ? <h3 class="red">{state.errorText}</h3> : null}
			
			<button id={"send"} class="loginB" onClick={sendReset}>Send reset instructions</button>
		</div>
	);
}


ReactDOM.render(
<LogIn/>,
document.querySelector("#root")
);

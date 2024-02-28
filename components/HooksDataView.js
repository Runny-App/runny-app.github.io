function HooksDataView(props) {
  const [nickname, setNickname] = React.useState("");

   const logOut = () => {
        firebase.auth().signOut().then(function() {
  console.log('Signed Out');
  window.open("index.html");
}, function(error) {
  console.error('Sign Out Error', error);
});
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.uid);

        let db = firebase.firestore();

        db.collection("Users").doc(user.uid).get().then((snap) => {
          let datas = snap.data();
          console.warn(datas);

          if (datas != null){
            setNickname(datas.nickname);
          }
          
        });
      }
    });

        return (<div>
           {/*17:42:00*/}

        <button class="logoutButton" onClick={logOut}>Log out</button>
        <button class="logoutButton" onClick={props.toSettings}>Settings</button>

        <h1 style={{color: "black"}}>Welcome <span style={{color: "#3498db"}}>{nickname}</span></h1>         
        </div>);

}


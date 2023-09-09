import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Recognition from './components/Recognition/Recognition.js';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';


import './App.css';

 
 ///////////////////////////////////////////////////////////////////////////////////////////////////
 // In this section, we set the user authentication, user and app ID, model details, and the URL
 // of the image we want as an input. 
 //////////////////////////////////////////////////////////////////////////////////////////////////
 const returnClarifaiRequestOptions = (imageUrl) => { // return clarifai
     // Your PAT (Personal Access Token) can be found in the portal under Authentification
     const PAT = '3deb7aed10ef4c85b0fed0ea4873c719';
     // Specify the correct user_id/app_id pairings
     // Since you're making inferences outside your app's scope
     const USER_ID = 'mariimako';       
     const APP_ID = 'recognitionbrain';
     const IMAGE_URL = imageUrl;
 
     const raw = JSON.stringify({
       "user_app_id": {
           "user_id": USER_ID,
           "app_id": APP_ID
       },
       "inputs": [
           {
               "data": {
                   "image": {
                       "url": IMAGE_URL
                   }
               }
           }
       ]
     });
 
     const requestOptions = {
       method: 'POST',
       headers: {
           'Accept': 'application/json',
           'Authorization': 'Key ' + PAT
       },
       body: raw
     };
     return requestOptions

 }
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      route: 'signin' // keeps track where we are on page
    }
  }

  outputModerationValues = (output) => {

    output.forEach((element) => {
      console.log(element);
      const newDiv = document.createElement("div");
      const newContent = document.createTextNode(element.name + " " + element.value);
      newDiv.appendChild(newContent);
      const currentDiv = document.getElementById("result-values");
      currentDiv.appendChild(newDiv);
    });



  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }
  onInputChange = (event) => { // property of the app, access by this.onInputChange, this is an event listener
    this.setState({input: event.target.value});
  }


  onSubmit = () => { // when button is pressed, set the image url as the input
    console.log(this.state.input);
    this.setState({imageUrl: this.state.input}); // update the image url as this state input
   
    // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
    // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
    // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
    // If that isn't working, then that means you will have to wait until their servers are back up. 
    fetch("https://api.clarifai.com/v2/models/" + "moderation-recognition" + "/outputs", returnClarifaiRequestOptions(this.state.input))
      .then(response => response.json())
      .then(response => this.outputModerationValues(response.outputs[0].data.concepts))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <ParticlesBg type="fountain" bg={true} />
        <Navigation onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' 
            ? <div>
              <Logo />
              <ImageLinkForm 
                onInputChange={this.onInputChange}
                onSubmit={this.onSubmit}
              />
              <Rank />
              <Recognition imageUrl = {this.state.input}  />
              </div> 
              : (this.state.route === 'signin' 
              ? <Signin onRouteChange={this.onRouteChange}/> 
              : <Register onRouteChange={this.onRouteChange}/>
              )}
      </div>
    );

  };
}
export default App;

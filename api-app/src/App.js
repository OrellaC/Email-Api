import React, { Component } from 'react';

import EmailInfo from './Components/Email-info';

//https://verifier.meetchopra.com/verify/{{email_address}}

class App extends Component {
  state = {
    // baseUrl: 'https://verifier.meetchopra.com/verify/?',
    // token: 'token=' + 'db57c9ba3df5742b2082d22910f04e0341055b2a6779521a1bd5857bf24bb457',
    info: {}

  }
// componentDidMount(){
//   console.log('We are in here')
  // fetch('https://verifier.meetchopra.com/verify/?token=db57c9ba3df5742b2082d22910f04e0341055b2a6779521a1bd5857bf24bb457')
//   .then(response => response.json()) // returns second Promise
//   .then(data => this.setState({info: data}))
//   .catch(error => console.error(error))
// }
// componentDidUpdate() {
//   console.log('we did an update')
// }

handleSubmit = e => {
  e.preventDefault()
  
  fetch('https://verifier.meetchopra.com/verify/{{email_address}}token=db57c9ba3df5742b2082d22910f04e0341055b2a6779521a1bd5857bf24bb457')
  .then(response => response.json())
  .then(data => this.setState({ info: data[0] }))
  .then(() => console.log(this.state.info))
  .catch(error => console.error(error))
}



  render() {
    return (
      <div>
        <h2> Verify An Email Address</h2>
        <>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='emailAddress'>Email Address: </label>
            <input type='text' id='emailAddress' onChange={this.handleChange}
              value={this.state.emailAddress} />
            <button type="submit">Submit</button>

            <EmailInfo info={this.state.info} />

          </form>

        </>

      </div>
    );
  }
}

export default App;

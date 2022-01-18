import React, { Component } from 'react';
//API used https://eva.pingutil.com/
class App2 extends Component {
    state = {
        status: "",
        userInput: '',
        data: []
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.eva.pingutil.com/email?email= ${this.state.userInput}`)
            .then(res => this.setState({
                data: res.data.collection.items
            }))
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                {/* Creating a form allows user to input text for the search query in the above link */}

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='userInput'>Insert Email Address: </label>
                    <input
                        type='text'
                        id='userInput'
                        name='userInput'
                        onChange={this.handleChange}
                        value={this.state.userInput}
                    />
                    <input type='submit' value='submit' />
                </form>

                <div>
                    {
                        this.state.data.map((desc) => {
                            return (
                                <div>
                                    <p>Email Address: {desc.data[0].email_address}</p>
                                    <p>Domain: {desc.data[0].domain}</p>
                                    <p>Valid Syntax: {desc.data[0].valid_syntax}</p>
                                    <p>Disposable: {desc.data[0].disposable}</p>
                                    <p>Webmail: {desc.data[0].webmail}</p>
                                    <p>Deliverable: {desc.data[0].deliverable}</p>
                                    <p>Catch All: {desc.data[0].catch_all}</p>
                                    <p>Gibberish: {desc.data[0].gibberish}</p>
                                    <p>Spam: {desc.data[0].spam}</p>
                                    </div>
                            )
                        })
                    }
                    </div>
                </div>
                );
    }
}

                export default App2;

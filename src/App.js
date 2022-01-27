import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.clientId = "f88cd45b383dedb"
    this.clientSecret = ""
  }

  login = () => {
    let client_id = this.clientId
    let response_type = "token"
    let application_state = "login"

    let link = `https://api.imgur.com/oauth2/authorize?client_id=${client_id}&response_type=${response_type}&state=${application_state}`
    console.log(link)

    /*
    axios.get(link).then(data => {
      console.log(data)
    })
    */
  }

  refreshAccessToken = async (refreshToken) => {
    let link = "https://api.imgur.com/oauth2/token"
    let client_id = this.clientId

    axios.post(link, {
        "refresh_token": refreshToken,
        "client_id": client_id,
        "client_secret": this.clientSecret,
        "grant_type": "refresh_token"
    }).then(res => {
      console.log(res)
    })
  }

  componentDidMount() {
    let refreshToken = ""
    this.login()
    this.refreshAccessToken(refreshToken)
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;

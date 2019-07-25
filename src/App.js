import React from 'react';
import ListImgs from './ListImgs';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      term:'',
      images:[],
    }
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = process.env.REACT_APP_API_KEY
    const term = this.state.term;
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ term:'', images: []});
        for (let elem of data.data) {
          let images = this.state.images;
          let img_url = elem.images.fixed_width.url;
          this.setState({ term:'', images: images.concat(img_url)});
        }
        console.log('Ok');
        //this.setState({ term:'', img: data.data[0].images.fixed_height.url })
      })
      .catch(e => console.log('error', e));
  }

  render() {
    return (
      <div className="App">
        <form className='form' onSubmit = {this.handleSubmit}>
          <input className='input_field' value={this.state.term} onChange={this.onChange}/>
          <button className='submit_button'> Search</button>
        </form>
        <ListImgs images = {this.state.images} term = {this.state.term} />
      </div>
    );
  }
}


export default App;

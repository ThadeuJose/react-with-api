import React from 'react';


const imgStyle = {
   'background': '#EC985A',
   'flex': '0 0 auto',
};

const containerStyle = {
  'display': 'flex',
  'flex-wrap': 'wrap',
  'justify-content': 'center',
}

class ListImgs extends React.Component{

  render() {
    return (
      <div style = {containerStyle}>
        {this.props.images.map((item,idx) => <img key ={idx} src={item} alt={this.props.term} style = {imgStyle}/>)}
      </div>
    );
  }

}

export default ListImgs;

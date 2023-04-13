import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <div>
        <p className="f3">
          {'This Magic brain will detect faces in your picture.Give it a try.'}
        </p>
        <div className="center">
          <div className="center form pa4 br3 shadow-5">
            <input className="w-70 pa2 f4" type='text' onChange={onInputChange}></input>
            <button className="w-30 pointer grow f4" style={{backgroundColor: 'lightblue'}} onClick={onButtonSubmit}>Detect</button>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default ImageLinkForm;
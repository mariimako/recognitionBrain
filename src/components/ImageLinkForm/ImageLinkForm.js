import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit}) => {
    return (
      <div>
        <p className='f3'>
          {'This Magic Brain will detect faces in your pictures. Git it a try.'}
        </p>
        <div className='center'>
          <div className='form center pa4 br3 shadow-5'>
            <input className="f4 pa2 w-60 center" type='text' onChange = {onInputChange}/> 
            {/* onchange is a react synthetic event, mimics html's inputchange */}
            <button
              className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
              onClick = {onSubmit}
              // 
            >Detect</button>
          </div>
        </div>
      </div>
    );

}
export default ImageLinkForm;
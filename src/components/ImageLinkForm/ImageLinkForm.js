import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
      <div>
        <p class='f3'>
          {'This Magic Brain will detect faces in your pictures. Git it a try.'}
        </p>
        <div class='center'>
          <div class='form center pa4 br3 shadow-5'>
            <input class="f4 pa2 w-60 center" type='tex'/>
            <button
              class="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            >Detect</button>
          </div>
        </div>
      </div>
    );

}
export default ImageLinkForm;
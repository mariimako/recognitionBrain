import React from 'react';

const Recognition = ({imageUrl}) => {
      return (
        <div className = "center ma">
          <div className = " mt2">
            <img id = "detected-image" alt = "" src = {imageUrl} width = "500px" heigh = "auto"/>
            <div id = "result-names" className = " mt2">
            </div>
            <div id = "result-values" className = " mt2">
            </div>
          </div>
          
        </div>
        );
}

export default Recognition;
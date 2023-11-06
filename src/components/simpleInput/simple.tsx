import React, { useState, FormEvent, ChangeEvent } from 'react';


function Simple({labelName, value, handleFunction, source, testFunction}: { labelName: string, value: string, source:string, handleFunction: (event: ChangeEvent<HTMLInputElement>) => void, testFunction: (event: ChangeEvent<HTMLInputElement>) => void}): JSX.Element {
  return (
    <div>
        <div className="form-field">
          <label> {labelName} :</label>
          <input
            type="text"
            name={source}
            value={value}
            onChange={testFunction}
            
          />
        </div>
        <br />
    </div>
  );
}

export default Simple;
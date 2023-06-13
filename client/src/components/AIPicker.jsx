import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
      <div className="aipicker-container">
        <textarea
          placeholder="Pergunte a IA... "
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="aipicker-textarea"
        />
        <div className="flex flex-wrap gap-3">
          {generatingImg ? (
            <CustomButton 
            type="outline"
            title="Perguntando a IA..."
            customStyles="text-xs"
            />
          ) : (
            <>
              <CustomButton
                type="outline"
                title="IA Logo"
                customStyles="text-xs"
              />

              <CustomButton
                  type="filled"
                  title="IA Full"
                  customStyles="text-xs">

                  </CustomButton>
            </>
          )}
          
        </div>
      </div>
  );
}

export default AIPicker
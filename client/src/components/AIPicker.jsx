import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 526cc9031d202b21ef376798dc4c6aafd6d250c0
            />
          ) : (
            <>
              <CustomButton
                type="outline"
                title="IA Logo"
                customStyles="text-xs"
              />

<<<<<<< HEAD
            <CustomButton
              type="filled"
              title="IA Full"
              customStyles="text-xs"
            />
          </>
        )}
        
=======
              <CustomButton
                  type="filled"
                  title="IA Full"
                  customStyles="text-xs">

                  </CustomButton>
            </>
          )}
          
        </div>
>>>>>>> 526cc9031d202b21ef376798dc4c6aafd6d250c0
      </div>
  );
}

export default AIPicker
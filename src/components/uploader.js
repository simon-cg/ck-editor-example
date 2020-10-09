import React from 'react'

const uploader = () => {
    return (
        <>
            <div className="file is-large is-centered is-primary has-name is-boxed">
                <label className="file-label">
                    <input className="file-input" type="file" name="resume" />
                        <span className="file-cta">
                            <span className="file-icon">
                            <i>🎭</i>
                            </span>
                        <span className="file-label">
                            Choose a file…
                        </span>
                        </span>
                        <span className="file-name is-centered">
                        No file uploaded...
                        </span>
                </label>
            </div>
        </>
    )
}

{/* const fileInput = document.querySelector('#file-js-example input[type=file]');
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector('#file-js-example .file-name');
      fileName.textContent = fileInput.files[0].name;
    }
  } */}

export default uploader
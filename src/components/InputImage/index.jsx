import React, { useState } from 'react';
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
const InputImage = (props) => {
    const [fileList, setFileList] = useState([])
    const handleChange = (e) => setFileList(e.target.value);
    return (
        <>
            <input
                accept="image/*"
                type='file'
                onChange={handleChange}
            />
            {console.log(fileList)}
        </>
    )
}

export default InputImage;
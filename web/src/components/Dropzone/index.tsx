import React, {useCallback, useState} from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi'

import './styles.css';

interface Props {
    onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {

    const [selectedFileUrl, setSelectedFileUrl] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        
        const fileUrl = URL.createObjectURL(file);

        setSelectedFileUrl(fileUrl);
        onFileUploaded(file);
    }, [onFileUploaded])

    const { getRootProps, getInputProps } = useDropzone({
            onDrop,
            accept: 'image/*'
        })

    return (
        <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} accept="image/*" />

            { selectedFileUrl 
                ? <img src={selectedFileUrl} alt="Point tumbnail" />
                : (
                    <p>
                        <FiUploadCloud />
                        Envie uma foto do seu comércio.<br /> Basta clicar ou arratar seu arquivo para esta área.
                    </p>
                )
            }
        </div>
    )
}

export default Dropzone;
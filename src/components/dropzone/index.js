import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import "./styles.css";

const MyDropzone = ({ onFileUploaded, defaultFile = "" }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState(defaultFile);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);
      setSelectedFileUrl(fileUrl);

      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Imagem de perfil" />
      ) : (
        <p>
          <FiUpload />
          Selecione imagem de perfil
        </p>
      )}
    </div>
  );
};

export default MyDropzone;

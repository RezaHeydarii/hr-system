import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "..";

interface Props {
  className?: string;
  onChange?: (files: File) => void;
}

export const DropZone = (props: Props) => {
  const { className, onChange } = props;
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (onChange && acceptedFiles[0]) {
        onChange(acceptedFiles[0]);
        setSelectedFile(acceptedFiles[0]);
      }
      // Do something with the files
    },
    [onChange]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  if (selectedFile) {
    return (
      <div className="bg-greys-6 flex flex-col justify-center items-center py-8 px-4 rounded-lg border border-dashed border-greys-5">
        <a href={URL.createObjectURL(selectedFile)} className="font-bold">
          {selectedFile.name}
        </a>
        <Button
          onClick={() => setSelectedFile(null)}
          variant="text"
          color="secondary"
        >
          Select Another
        </Button>
      </div>
    );
  }

  return (
    <div className={className}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="bg-greys-6 flex flex-col justify-center items-center py-8 rounded-lg border border-dashed border-greys-5">
            <p className="font-bold">Drop file here to upload</p>
          </div>
        ) : (
          <div className="bg-greys-6 flex flex-col justify-center items-center py-8 rounded-lg border border-dashed border-greys-5">
            <p className="font-bold">Drag file here to upload</p>
            <p className="text-greys-3 py-4">Or</p>
            <Button color="secondary">CHOOSE FILE TO UPLOAD</Button>
          </div>
        )}
      </div>
    </div>
  );
};

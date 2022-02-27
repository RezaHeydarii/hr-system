import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "..";

interface Props {
  className?: string;
  onChange?: (files: any) => void;
}

export const DropZone = (props: Props) => {
  const { className, onChange } = props;
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (onChange) onChange(acceptedFiles);
      // Do something with the files
    },
    [onChange]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={className}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="bg-greys-6 flex flex-col justify-center items-center py-8 rounded-lg border border-dashed border-greys-5">
            <p className="font-bold">Drop files here to upload</p>
          </div>
        ) : (
          <div className="bg-greys-6 flex flex-col justify-center items-center py-8 rounded-lg border border-dashed border-greys-5">
            <p className="font-bold">Drag files here to upload</p>
            <p className="text-greys-3 py-4">Or</p>
            <Button color="secondary">CHOOSE FILE TO UPLOAD</Button>
          </div>
        )}
      </div>
    </div>
  );
};

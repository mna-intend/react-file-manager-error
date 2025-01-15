import React, { useState, useEffect } from 'react';
import { FileManager, File } from '@cubone/react-file-manager';
import '@cubone/react-file-manager/dist/style.css';

interface FileStorageViewComponentProps {
  storageId?: string;
  storagePath?: string;
}

const FileStorageViewComponent: React.FC<FileStorageViewComponentProps> = ({ storageId = '', storagePath = '/' }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {

        const formattedFiles: File[] = [];

        const test1: File =
            {
              isDirectory: true,
              name: "folder1",
              path: "/folder1",
              size: 0,
              updatedAt: "2025-01-07T08:42:48.333Z"
            };
        formattedFiles.push(test1);

        const test: File =
            {
              isDirectory: true,
              name: "folder2",
              path: "/folder1/folder2",
              size: 0,
              updatedAt: "2025-01-07T08:42:48.333Z"
            };
        formattedFiles.push(test);

        const test3: File =
            {
              isDirectory: false,
              name: "t.png",
              path: "/folder1/folder2/t.png",
              size: 0,
              updatedAt: "2025-01-07T08:42:48.333Z"
            };
        formattedFiles.push(test3);
        setFiles(formattedFiles);
        console.log('Formatted files:', formattedFiles);

      } catch (error) {
        console.error('Failed to fetch files:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [storageId, storagePath]);

  const handleDownload = async (files: File[]) => {

  };

  const handleFileOpen = (file: File) => {
  };

  return (
      <div>
        {loading ?
            <p>Loading...</p> :
            <FileManager
                files={files}
                enableFilePreview={false}
                filePreviewPath={'www.google.com'}
                onDownload={handleDownload}
                onFileOpen={handleFileOpen}
            />
        }
      </div>
  );
};

export default FileStorageViewComponent;
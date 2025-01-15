//This file is needed for the file manager to work. If you don't have it, the file manager will not work.
//Todo: Delete it, after issue is resolved from the repository

// src/cubone__react-file-manager.d.ts
declare module '@cubone/react-file-manager' {
    interface File {
        name: string;
        isDirectory: boolean;
        path: string;
        updatedAt: string;
        size?: number;
    }

    interface FileManagerProps {
        files: File[];
        filePreviewPath?: string;
        enableFilePreview?: boolean;
        onDownload?: (files: File[]) => void;
        onFileOpen?: (file: File) => void;
        onRefresh?: () => void;
        onCreateFolder?: (folderName: string, parentFolder: File) => void;
        onError?: (error: { type: string; message: string }, file: File) => void;
        onFileUploaded?: (response: { [key: string]: never }) => void;
        onFileUploading?: (file: File, parentFolder: File) => void;
        onLayoutChange?: (layout: "list" | "grid") => void;
        onPaste?: (files: File[], destinationFolder: File, operationType: "copy" | "move") => void;
        onRename?: (file: File, newName: string) => void;
        onDelete?: (files: File[]) => void;
    }

    export const FileManager: React.FC<FileManagerProps>;
}
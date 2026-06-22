import { ExternalBlob } from "@/backend";
import { useCallback, useState } from "react";

export interface UploadState {
  progress: number;
  isUploading: boolean;
  error: string | null;
}

export function useImageUpload() {
  const [state, setState] = useState<UploadState>({
    progress: 0,
    isUploading: false,
    error: null,
  });

  const upload = useCallback(
    async (file: File): Promise<ExternalBlob | null> => {
      setState({ progress: 0, isUploading: true, error: null });
      try {
        const arrayBuffer = await file.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        const blob = ExternalBlob.fromBytes(bytes).withUploadProgress(
          (percentage: number) => {
            setState((s) => ({ ...s, progress: percentage }));
          },
        );
        setState({ progress: 100, isUploading: false, error: null });
        return blob;
      } catch (err) {
        const message = err instanceof Error ? err.message : "Upload failed";
        setState({ progress: 0, isUploading: false, error: message });
        return null;
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setState({ progress: 0, isUploading: false, error: null });
  }, []);

  return { ...state, upload, reset };
}

export function useImagePreview() {
  const [preview, setPreview] = useState<string | null>(null);

  const generatePreview = useCallback((file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        resolve(result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }, []);

  const clearPreview = useCallback(() => {
    setPreview(null);
  }, []);

  return { preview, generatePreview, clearPreview };
}

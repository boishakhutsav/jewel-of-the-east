import { r as reactExports, I as ExternalBlob } from "./index-DmFk9ZaG.js";
function useImageUpload() {
  const [state, setState] = reactExports.useState({
    progress: 0,
    isUploading: false,
    error: null
  });
  const upload = reactExports.useCallback(
    async (file) => {
      setState({ progress: 0, isUploading: true, error: null });
      try {
        const arrayBuffer = await file.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        const blob = ExternalBlob.fromBytes(bytes).withUploadProgress(
          (percentage) => {
            setState((s) => ({ ...s, progress: percentage }));
          }
        );
        setState({ progress: 100, isUploading: false, error: null });
        return blob;
      } catch (err) {
        const message = err instanceof Error ? err.message : "Upload failed";
        setState({ progress: 0, isUploading: false, error: message });
        return null;
      }
    },
    []
  );
  const reset = reactExports.useCallback(() => {
    setState({ progress: 0, isUploading: false, error: null });
  }, []);
  return { ...state, upload, reset };
}
function useImagePreview() {
  const [preview, setPreview] = reactExports.useState(null);
  const generatePreview = reactExports.useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setPreview(result);
        resolve(result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }, []);
  const clearPreview = reactExports.useCallback(() => {
    setPreview(null);
  }, []);
  return { preview, generatePreview, clearPreview };
}
export {
  useImagePreview as a,
  useImageUpload as u
};

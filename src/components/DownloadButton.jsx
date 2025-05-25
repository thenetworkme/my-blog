import * as Dialog from '@radix-ui/react-dialog';
import { DownloadIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import './DownloadButton.css';

export default function DownloadButton({ files }) {
  const [open, setOpen] = useState(false);

  const handleDownload = () => {
    files.forEach(file => {
      const link = document.createElement('a');
      link.href = file.filePath;
      link.download = file.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="download-button">
          <DownloadIcon className="download-icon" />
          <span>Descargar Piezas de SolidWorks</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <Dialog.Title className="dialog-title">Descargar archivos de SolidWorks</Dialog.Title>
          <Dialog.Description className="dialog-description">
            Estás a punto de descargar {files.length} archivos de SolidWorks. ¿Deseas continuar?
          </Dialog.Description>
          <div className="dialog-buttons">
            <button className="dialog-button cancel" onClick={() => setOpen(false)}>
              Cancelar
            </button>
            <button className="dialog-button download" onClick={handleDownload}>
              Descargar
            </button>
          </div>
          <Dialog.Close asChild>
            <button className="dialog-close" aria-label="Close">
              ×
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
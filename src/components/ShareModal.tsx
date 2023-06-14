'use client'
import { useModal } from "react-hooks-use-modal";

export const ShareModal: React.VFC = () => {
    const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    focusTrapOptions : { 
       clickOutsideDeactivates : true
    },  
  });
  return (
    <div>
      <button onClick={open}>OPEN</button>
      <Modal>
      <div className="bg-white px-16 py-14 rounded-md text-center">
          <h1>Title</h1>
          <p>This is a customizable modal.</p>
          <button onClick={close}>CLOSE</button>
        </div>
        
      </Modal>
    </div>
  );
};
type ModalProps = { children: React.ReactNode };

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 bg-black  opacity-80 z-10 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Modal;

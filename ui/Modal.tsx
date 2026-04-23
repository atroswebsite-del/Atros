"use client"
import React from 'react';
import Button from '@/ui/Button';
import IconAtros from '@/assets/atros-logo.svg'
import IconClose from '@/assets/close.svg'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// MARK: 目前只有md状态下显示
const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="hidden md:block">
      {/* 遮罩层 - 确保完全覆盖整个视口 */}
      <div
        className="fixed inset-0 bg-gray-1 bg-opacity-80 z-[999] w-full h-full"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
        }}
      />

      {/* 模态框内容 */}
      <div className="flex flex-col items-start justify-between z-[1000] bg-gray-2 md:h-md-147 fixed top-0 left-0 right-0 md:px-md-16 md:py-md-16">
        <div className="w-full flex justify-between items-center">
          <IconAtros className="md:w-md-93 md:h-md-20" />
          <IconClose className="md:w-md-40 md:h-md-40" onClick={onClose} />
        </div>

        <div className="flex md:gap-md-16 w-full">
          <Button
            type={0}
            href="/blog"
          >
            Blog
          </Button>
          <Button
            type={1}
            href="/download.html"
          >
            DOWNLOAD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
import React, { ReactNode, useState } from 'react';
import { Button, ConfigProvider, Modal, Space } from 'antd';

interface IProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    title?: React.ReactNode;
    children: ReactNode;
    footer?: React.ReactNode;

}
const CustomModal: React.FC<IProps> = ({ open, setOpen, title, children, footer }) => {
    const modalStyles = {
        mask: {
            backdropFilter: 'blur(10px)',
        },
    };

    return (
        <ConfigProvider
            modal={{
                styles: modalStyles,
            }}
        >
            <Modal
                title={title}
                footer={footer}
                open={open}
                onCancel={() => setOpen(false)}
                okButtonProps={{ style: { display: "none" } }}
                cancelButtonProps={{ style: { display: "none" } }}
            >
                {children}
            </Modal>
        </ConfigProvider>
    );
};

export default CustomModal;
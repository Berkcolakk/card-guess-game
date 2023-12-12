"use client"
import { Layout, Flex } from 'antd';
import Image from 'next/image';
import Logo from "@/assets/logo.svg";
import { ReactNode } from 'react';

const { Footer: AntdFooter } = Layout;
const Footer = ({ children }: { children: ReactNode }) => {
    return (
        <AntdFooter className='!bg-main '>
            {children}
        </AntdFooter>
    )
}
export default Footer;
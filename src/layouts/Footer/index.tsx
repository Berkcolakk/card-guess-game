"use client"
import { Layout, Flex } from 'antd';
import Image from 'next/image';
import Logo from "@/assets/logo.svg";

const { Footer: AntdFooter } = Layout;
const Footer = () => {
    return (
        <AntdFooter className='!bg-main '>
            <Image src={Logo} alt="Logo" height={100} width={100} className="rounded-2xl" />
        </AntdFooter>
    )
}
export default Footer;
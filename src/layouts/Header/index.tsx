"use client"
import { Layout, Flex } from 'antd';
import Image from 'next/image';
import Logo from "@/assets/logo.svg";
import Link from 'next/link';

const { Header: AntdHeader } = Layout;
const Header = () => {
    return (
        <AntdHeader className='!bg-main place-self-center'>
            <Link href={"/"}><Image src={Logo} alt="Logo" height={100} width={100} className="rounded-2xl " /></Link>
        </AntdHeader>
    )
}
export default Header;
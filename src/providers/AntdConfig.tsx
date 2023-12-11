"use client";
import { ConfigProvider, theme } from "antd"
import { ReactNode } from "react"
import StyledComponentsRegistry from "./AntdRegistry";

const AntdConfig = ({ children }: { children: ReactNode }) => {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
            modal={{
                styles: {
                    mask: { backdropFilter: 'blur(10px)', },
                }
            }}
        >
            <StyledComponentsRegistry>
                {children}
            </StyledComponentsRegistry>
        </ConfigProvider >
    )
}
export default AntdConfig;
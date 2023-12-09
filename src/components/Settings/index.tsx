import { ReactNode, useState } from "react";
import CustomModal from "../CustomModal"
import { Segmented, Select, Space, Switch, message } from "antd";
import Title from "antd/es/typography/Title";
import { BugOutlined, RobotOutlined, SmileOutlined } from "@ant-design/icons";
import { SegmentedValue } from "antd/es/segmented";
import { gameOptionModule, TModeTypes } from "@/store/GameOptionStore";
import { observer } from "mobx-react-lite";
import { toggleFullScreen } from "@/utils/utils";

interface IProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Settings: React.FC<IProps> = observer(({ open, setOpen }) => {
    const successMsg = () => message.success("Ayarlarınız başarıyla güncellenmiştir.")
    const SettingLine = ({ titleName, children }: { titleName: string; children: ReactNode }) => {
        return (
            <Space className="grid grid-cols-3 m-1">
                <Title level={5} className="!mb-0">{titleName}: </Title>
                {children}
            </Space>
        )
    }
    return (
        <CustomModal
            title={<Title level={3} className="!mb-0">Ayarlar</Title>}
            open={open}
            setOpen={setOpen}>
            <>
                <SettingLine titleName="Oyun modu" >
                    <Segmented value={gameOptionModule.mode} className="bg-primary" options={[
                        { label: "Kolay", value: "easy", icon: <SmileOutlined /> },
                        { label: "Normal", value: "normal", icon: <RobotOutlined /> },
                        { label: "Zor", value: "hard", icon: <BugOutlined /> },
                    ]}
                        onChange={(value: SegmentedValue) => {
                            gameOptionModule.setMode(value as TModeTypes)
                            localStorage.setItem("mode", value as TModeTypes)
                            successMsg();
                        }} />
                </SettingLine>
                <SettingLine titleName="Dil" >
                    <Select
                        defaultValue={gameOptionModule.language}
                        onChange={(value: string) => {
                            gameOptionModule.setLanguage(value)
                            localStorage.setItem("language", value)
                            successMsg();
                        }}
                        size="middle"
                        style={{ width: '100%' }}
                        options={[
                            { value: 'tr', label: 'Türkçe' },
                            { value: 'en', label: 'İngilizce' },
                        ]}
                    />
                </SettingLine>
                <SettingLine titleName="Tam Ekran" >
                    <Switch className="bg-primary" onChange={(value: boolean) => {
                        toggleFullScreen()
                    }} />
                </SettingLine>
            </>
        </CustomModal>
    )
})
export default Settings;
import { useState } from "react";
import CustomModal from "../CustomModal"
import { Segmented, Space } from "antd";
import Title from "antd/es/typography/Title";
import { BugOutlined, RobotOutlined, SmileOutlined } from "@ant-design/icons";
import { SegmentedValue } from "antd/es/segmented";
import { gameOptionModule, TModeTypes } from "@/store/GameOptionStore";
import { observer } from "mobx-react-lite";

interface IProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Settings: React.FC<IProps> = observer(({ open, setOpen }) => {
    return (
        <CustomModal
            title={ <Title level={3} className="!mb-0">Ayarlar</Title>}
            open={open}
            setOpen={setOpen}>
            <>
                <div className="flex">
                    <Space>
                        <Title level={5} className="!mb-0">Oyun modu: </Title>
                        <Segmented value={gameOptionModule.mode} options={[
                            { label: "Kolay", value: "easy", icon: <SmileOutlined /> },
                            { label: "Normal", value: "normal", icon: <RobotOutlined /> },
                            { label: "Zor", value: "hard", icon: <BugOutlined /> },
                        ]}
                            onChange={(value: SegmentedValue) => {
                                gameOptionModule.setMode(value as TModeTypes)
                                localStorage.setItem("mode", value as TModeTypes)
                            }} />
                    </Space>
                </div>
            </>
        </CustomModal>
    )
})
export default Settings;
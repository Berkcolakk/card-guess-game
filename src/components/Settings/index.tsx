import { useState } from "react";
import CustomModal from "../CustomModal"
import { Segmented, Space } from "antd";
import Title from "antd/es/typography/Title";
import { BugOutlined, RobotOutlined, SmileOutlined } from "@ant-design/icons";

interface IProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Settings: React.FC<IProps> = ({ open, setOpen }) => {
    return (
        <CustomModal
            title={<h1>Ayarlar</h1>}
            open={open}
            setOpen={setOpen}>
            <>
                <div className="flex">
                    <Space>
                        <Title level={5} className="!mb-0">Oyun modu: </Title>
                        <Segmented options={[
                            { label: 'Kolay', value: 'easy', icon: <SmileOutlined /> },
                            { label: 'Normal', value: 'normal', icon: <RobotOutlined /> },
                            { label: 'Zor', value: 'hard', icon: <BugOutlined /> },
                        ]}
                            onClick={(e) => {
                            }} />
                    </Space>
                </div>
            </>
        </CustomModal>
    )
}
export default Settings;
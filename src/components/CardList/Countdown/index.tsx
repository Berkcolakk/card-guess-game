"use client"
import Chapter from "@/data/chapter.json";
import { observer } from "mobx-react-lite";
import { gameOption } from "@/store/GameOptionStore";
import { GameStore } from "@/store/Game";
import { Alert, CountdownProps } from "antd";
import { Statistic } from 'antd';
const { Countdown: AntdCountDown } = Statistic;
const Countdown = observer(() => {
    const second = (Chapter[gameOption.mode].duration) * 1000;
    const onFinish: CountdownProps['onFinish'] = () => {
        GameStore.setTimeOver(true);
    };
    return (
        <div className="fixed inset-0 flex items-end justify-center">
            <AntdCountDown loading={!GameStore.loadingBoxFinish} title="Kalan Süre" format={"ss:SS"} value={Date.now() + second} onFinish={onFinish} />
        </div>
    )
})
export default Countdown;
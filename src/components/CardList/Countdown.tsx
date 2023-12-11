import Chapter from "@/data/chapter.json";
import { observer } from "mobx-react-lite";
import { gameOption } from "@/store/GameOptionStore";
import { GameStore } from "@/store/Game";
import { Alert, CountdownProps } from "antd";
import { Statistic } from 'antd';
const { Countdown: AntdCountDown } = Statistic;
const Countdown = observer(() => {
    const second = Date.now() + ((Chapter[gameOption.mode].duration) * 1000);
    const onFinish: CountdownProps['onFinish'] = () => {
        GameStore.setTimeOver(true);
    };
    return (
        <div className="fixed h-20 w-28">
            <Alert
                banner
                message={
                    <AntdCountDown loading={!GameStore.loadingBoxFinish} title="Kalan Süre" format={"ss:SS"} value={second} onFinish={onFinish} />
                }
            />
        </div>
    )
})
export default Countdown;
import CardList from "@/components/CardList";
import GameLoadingCountdown from "@/components/GameLoadingCountdown";
import { GAME_LOADING_SCREEN_SECOND } from "@/configs";
import { Spin } from "antd";
import { Suspense } from "react";

const GameContainer = () => {
    return (
        <>
            <Suspense fallback={<><Spin spinning={true} fullscreen /></>}>
                <CardList />
                <GameLoadingCountdown defaultTimer={GAME_LOADING_SCREEN_SECOND} />
            </Suspense>
        </>
    )
}
export default GameContainer;
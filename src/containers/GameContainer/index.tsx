import CardList from "@/components/CardList";
import GameLoadingCountdown from "@/components/GameLoadingCountdown";
import { GAME_LOADING_SCREEN_SECOND } from "@/configs";

const GameContainer = () => {
    return (
        <>
            <CardList />
            <GameLoadingCountdown defaultTimer={GAME_LOADING_SCREEN_SECOND} />
        </>
    )
}
export default GameContainer;
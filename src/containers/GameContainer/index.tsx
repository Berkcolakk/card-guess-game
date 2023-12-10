import CardList from "@/components/CardList";
import Countdown from "@/components/Countdown";
import { GAME_LOADING_SCREEN_SECOND } from "@/configs";

const GameContainer = () => {
    return (
        <>
            <CardList />
            <Countdown defaultTimer={GAME_LOADING_SCREEN_SECOND} />
        </>
    )
}
export default GameContainer;
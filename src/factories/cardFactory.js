import SayHello from "../components/looks/SayHello";
import SayHelloForXSeconds from "../components/looks/SayHelloForXSeconds";
import MoveXSteps from "../components/motion/MoveXSteps";
import TurnACWXDegrees from "../components/motion/TurnACWXDegrees";
import TurnCWXDegrees from "../components/motion/TurnCWXDegrees";
import WhenFlagClicked from "../components/events/WhenFlagClicked";
import WhenSpriteClicked from "../components/events/WhenSpriteClicked";
import RepeatXTimes from "../components/control/RepeatXTimes";
import WaitXSeconds from "../components/control/WaitXSeconds";

const cardsMap = {
    'SAY_HELLO': SayHello,
    'SAY_HELLO_FOR_X_SECONDS': SayHelloForXSeconds,
    'MOVE_X_STEPS': MoveXSteps,
    'TURN_ACW_X_DEGREES': TurnACWXDegrees,
    'TURN_CW_X_DEGREES': TurnCWXDegrees,
    'WHEN_FLAG_CLICKED': WhenFlagClicked,
    'WHEN_SPRITE_CLICKED': WhenSpriteClicked,
    'REPEAT_X_TIMES': RepeatXTimes,
    'WAIT_X_SECONDS': WaitXSeconds,
}

const getCardFor = (name) => {
    return cardsMap[name];
}

export default getCardFor;
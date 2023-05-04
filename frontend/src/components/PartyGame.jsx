import PropTypes from "prop-types";
import Timer from "./Timer";
import Screen from "./Screen";
import Story from "./Story";
import AvatarDisplay from "./AvatarDisplay";

export default function PartyGame({
  avatarParams,
  tempsRestant,
  setTempsRestant,
  setTimer,
  endGame,
}) {
  return (
    <div>
      <AvatarDisplay avatarParams={avatarParams} />
      <p className="right-[2.3%] top-[22%] z-20 absolute text-xl">
        {avatarParams.pseudo}
      </p>
      <Timer
        tempsRestant={tempsRestant}
        setTempsRestant={setTempsRestant}
        setTimer={setTimer}
      />
      <Screen />
      <Story endGame={endGame} />
    </div>
  );
}
PartyGame.propTypes = {
  tempsRestant: PropTypes.string.isRequired,
  setTempsRestant: PropTypes.func.isRequired,
  setTimer: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,
  avatarParams: PropTypes.shape({
    avatarStyle: PropTypes.string.isRequired,
    accessoriesType: PropTypes.string.isRequired,
    topType: PropTypes.string.isRequired,
    clotheColor: PropTypes.string.isRequired,
    clotheType: PropTypes.string.isRequired,
    eyeType: PropTypes.string.isRequired,
    eyebrowType: PropTypes.string.isRequired,
    facialHairColor: PropTypes.string.isRequired,
    facialHairType: PropTypes.string.isRequired,
    hairColor: PropTypes.string.isRequired,
    mouthType: PropTypes.string.isRequired,
    skinColor: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
  }).isRequired,
};

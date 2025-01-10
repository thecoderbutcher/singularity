import OptionButtons from "./(components)/OptionButtons";
import ControlButtons from "./(components)/ControlButtons";
import ControlProgress from "./(components)/ControlProgress";

const ControlMusic = () => {
  return (
    <div className="grid grid-cols-12 items-center justify-center p-4 border-t border-t-accent">
        <OptionButtons/>
        <ControlButtons/>
        <ControlProgress/>
        
    </div>
  )
}

export default ControlMusic
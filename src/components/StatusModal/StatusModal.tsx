import "./statusModal.sass";
import imgO from "../../assets/images/icon-o.svg";
import imgX from "../../assets/images/icon-x.svg";
import OptionButton from "../Buttons/OptionButton";

interface StatusModalProps {
  statusMsg: string;
}
export const StatusModal = ({ statusMsg }: StatusModalProps) => {
  return (
    <dialog
      role='modal'
      open={false}
      aria-atomic='true'
      aria-live='assertive'
      aria-label='Game status'>
      <div className='status-selectors'>
        <h2 className='status-selector__header'>{statusMsg}</h2>
        <div className='status-selector__message'>
          <img className='message__img' src={imgO} alt=''></img>
          <p className='message__text x-winner'>TAKES THE ROUND</p>
        </div>
        <div className='status-selector__buttons'>
          <OptionButton colorScheme={"silver"} btnText={"QUIT"} />
          <OptionButton colorScheme={"yellow"} btnText={"NEXT ROUND"} />
        </div>
      </div>
    </dialog>
  );
};

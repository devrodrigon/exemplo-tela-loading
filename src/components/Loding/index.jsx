import ModalLoadingStyle from './styles';
import { AiFillHeart } from 'react-icons/ai';

const Loading = () => {
  return (
    <ModalLoadingStyle>
      <div></div>
      <AiFillHeart />
      <AiFillHeart className="heart" />
    </ModalLoadingStyle>
  );
};

export default Loading;

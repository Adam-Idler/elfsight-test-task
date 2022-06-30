import { ReactComponent as Male } from '../assets/male.svg';
import { ReactComponent as Female } from '../assets/female.svg';
import { ReactComponent as Genderless } from '../assets/genderless.svg';

export function GenderIcon({ gender }) {
  switch (gender) {
    case 'Male':
      return <Male width={32} height={32} />;
    case 'Female':
      return <Female width={32} height={32} />;
    case 'Genderless':
      return <Genderless width={32} height={32} />;
    default:
      return null;
  }
}

import { ReactComponent as Male } from '../assets/male.svg';
import { ReactComponent as Female } from '../assets/female.svg';
import { ReactComponent as Genderless } from '../assets/genderless.svg';

export function GenderIcon({ gender }) {
  switch (gender) {
    case 'Male':
      return <Male width={20} height={20} fill="#33b3c8" title="Male" />;
    case 'Female':
      return <Female width={24} height={24} fill="pink" title="Female" />;
    case 'genderless':
      return (
        <Genderless width={24} height={24} fill="#999" title="Genderless" />
      );
    default:
      return null;
  }
}

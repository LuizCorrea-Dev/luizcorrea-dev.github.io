/** @format */
import interKotlin from '../images/InterAndroid.jpg'
import santanderKotlin from '../images/SantanderBootcamp.jpg'
import everisKotlin from '../images/EverisKotlin.jpg'
import treinawebReact from '../images/ReactJS.jpg'
import treinawebReactN from '../images/ReactNative.jpg'

function Education(end, hours, title, description, image) {
  return {
    end,
    hours,
    title,
    description,
    image
  };
}

const educations = [
  Education(
    "July 2021",
    "98 hours ",
    'Bootcamp Inter Android Developer - Digital Innovation One Inc',

    'Credential number: 70C5FE42.',
    interKotlin
  ),

  Education(
    "July 2021",
    "107 hours ",
    'Santander Bootcamp | Mobile Developer - Digital Innovation One Inc',

    'Credential number: 01ADF63E.',
    santanderKotlin
  ),

  Education(
    "Juny 2021",
    "80 hours ",
    'Bootcamp Everis Kotlin Developer - Digital Innovation One Inc',

    'Credential number: 649A3F65.',
    everisKotlin  
  ),

  Education(
    "Jan 2021",
    "100 hours ",
    'Desenvolvedor React Native -TreinaWeb',

    'Credential number: RRKB0VVBKHQT.',
    treinawebReactN
  ),

  Education(
    "Jan 2021",
    "64 hours ",
    'Desenvolvedor React JS -TreinaWeb',

    'Credential number: CUBVHNAB8ZJM.',
    treinawebReact
  ),
  
];

export default educations;

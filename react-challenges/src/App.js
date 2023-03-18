import Toggle from "./components/useState Hook/Toggle";
import Counter from './components/useState Hook/Counter';
import Exam1 from "./components/useState Hook/Exam1";
import Exam2 from "./components/useState Hook/Exam2";
import Exam3 from "./components/useState Hook/Exam3";
import Exam4 from "./components/useState Hook/Exam4";
import Exam5 from "./components/useState Hook/Exam5";
import Exam6 from "./components/useState Hook/Exam6";
import Exam7 from "./components/useState Hook/Exam7";



function App() {

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod tortor vitae risus tristique, sit amet venenatis justo dapibus. Proin sagittis efficitur neque, vel aliquet massa tempor eget. Donec at malesuada nisl, vel elementum ex. Praesent gravida, quam sit amet tempus malesuada, lectus ipsum luctus magna, ac porttitor lacus magna sed velit. Sed quis magna vitae enim sagittis vestibulum. Nulla facilisi. Sed finibus vehicula enim, sed bibendum enim molestie ac. Donec mollis felis sit amet hendrerit vulputate. Quisque vitae dictum nisi, a lobortis orci.."

  return (
    <div className="App">
  {/* <Toggle /> */}
  {/* <Counter /> */}
  {/* <Exam1 /> */}
  {/* <Exam2 /> */}
  {/* <Exam3 text={text} maxLength={50} /> */}
  {/* <Exam4 /> */}
  {/* <Exam5 /> */}
  {/* <Exam6 /> */}
  <Exam7 />
    </div>
  );
}

export default App;

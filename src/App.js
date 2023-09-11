import './App.css';
import Calendar from './blocks/Calendar';
import InstructionColumn from './blocks/InstructionColumn';

function App() {
  return (
    <div className='w-full max-w-1440 bg-white min-h-screen mx-auto flex flex-row'>
      <InstructionColumn />
      <Calendar />
    </div>
  );
}

export default App;

import AnalysisResult from "./components/AnalysisResult";
import InputForm from "./components/InputForm";

function App() {


  return (
    <div className="min-h-screen bg-gray-900 text-center p-6">
      <h1 className="text-gray-400 text-2xl">AI-Powered Resume Analyzer</h1>
      <div className="flex flex-col justify-center items-center mt-3">
        <InputForm />
        <AnalysisResult/>
      </div>
    </div>
  );
}

export default App;

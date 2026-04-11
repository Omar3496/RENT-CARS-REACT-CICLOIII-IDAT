export function Stepper({ step }) {

  const getStepStyle = (currentStep) => {
    if (step === 4) return "bg-[#28BC3E] text-white"; // todos verdes

    if (currentStep < step) return "bg-[#28BC3E] text-white"; // verde
    if (currentStep === step) return "bg-[#3E546D] text-white"; // negro

    return "bg-gray-300 text-white"; // gris
  };

  const getLineStyle = (lineStep) => {
    if (step === 4) return "bg-[#28BC3E]";

    if (lineStep < step) return "bg-[#28BC3E]";
    return "bg-gray-300";
  };

  return (
    <div className="flex items-center justify-center my-6">

      {/* STEP 1 */}
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${getStepStyle(1)}`}>
          1
        </div>
        <div className={`w-10 h-1 ${getLineStyle(1)}`} />
      </div>

      {/* STEP 2 */}
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${getStepStyle(2)}`}>
          2
        </div>
        <div className={`w-10 h-1 ${getLineStyle(2)}`} />
      </div>

      {/* STEP 3 */}
      <div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${getStepStyle(3)}`}>
          3
        </div>
      </div>

    </div>
  );
}
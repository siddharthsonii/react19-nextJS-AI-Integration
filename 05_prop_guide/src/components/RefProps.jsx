import { useRef, forwardRef } from "react";

// Input component that accepts a ref prop
const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

export default function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  // First Input field ko focus karne ke liye function
  const focusInput = () => {
    inputRef.current?.focus();
  };

  // First Input field ka value read karne ke liye function
  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };

  // First Input field ko clear karne ke liye function
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  // Second Input field ko focus karne ke liye function
  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Ref Props</h2>
      <p className="text-gray-600 mb-6">
        Refs provide a way to access DOM nodes or React elements directly. Use{" "}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
          forwardRef
        </code>{" "}
        to pass refs to child components.
      </p>

      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Try it out:
          </h3>

          <CustomInput
            ref={inputRef}
            label="First Input (with ref)"
            placeholder="Type something..."
          />

          <CustomInput
            ref={secondInputRef}
            label="Second Input (with ref)"
            placeholder="Type something else..."
          />

          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={focusInput}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Focus First Input
            </button>
            <button
              onClick={focusSecondInput}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              Focus Second Input
            </button>
            <button
              onClick={getInputValue}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Get First Input Value
            </button>
            <button
              onClick={clearInput}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Clear First Input
            </button>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-gray-800 mb-2">
            When to use refs:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Managing focus, text selection, or media playback</li>
            <li>Triggering imperative animations</li>
            <li>Integrating with third-party DOM libraries</li>
            <li>Accessing DOM measurements (scroll position, element size)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Ref Props mai 2 chezein important hai, ref and forwardRef. Ref ek special prop hai jo aapko kisi bhi DOM element ya React component ke instance ko directly access karne ki suvidha deta hai. ForwardRef ek higher-order component hai jo aapko apne custom components ke andar refs ko forward (accept) karne ki suvidha deta hai, jisse parent component se child component ke DOM nodes ko access karna asaan ho jata hai.

// const CustomInput = forwardRef(({ label, placeholder, className }, ref)

// Jaise upar ke example mai ref ko pass kiya gaya hai leken NOT as a regular prop, balki forwardRef ke through. Isse parent component se child component ke input field ko directly access karna possible ho jata hai, jaise ki focus karna, value read karna, ya clear karna.

// inputRef.current.value se hum input field ke current value ko read kar sakte hain, aur

// inputRef.current.focus() se us field ko focus kar sakte hain. Is tarah se refs React components ke andar DOM elements ko directly manipulate karne ka ek powerful tool hai, lekin inhe sahi tarike se use karna chahiye, kyunki ye React ke declarative nature ke against ja sakte hain agar overused kiya jaye.

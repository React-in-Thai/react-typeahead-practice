import React from "react";
import "./tailwind.build.css";

import TextInput from "./components/TextInput";
import Avatar from "./components/Avatar";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen">
        <h1 className="h-full min-h-screen flex items-center justify-center text-5xl">
          Implement Typeahead Component Here!
        </h1>
      </div>
      <div className="pb-32 bg-gray-200">
        <caption className="text-center font-bold text-gray-500 text-xl block pt-8 pb-16 pointer-events-none">
          List of reusable components
        </caption>
        <div className="flex flex-wrap gap-8 container mx-auto">
          <div className="w-1/4 max-w-full">
            <TextInput placeholder="Type a name" />
            <caption className="text-center font-bold text-gray-500 text-base block py-8 pointer-events-none">
              TextInput
            </caption>
          </div>
          <div className="w-1/4 max-w-full text-center">
            <Avatar src="https://avatars0.githubusercontent.com/u/18292247?s=120" />
            <caption className="text-center font-bold text-gray-500 text-base block py-8 pointer-events-none">
              Avatar
            </caption>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./tailwind.build.css";

import TextInput from "./components/TextInput";
import Avatar from "./components/Avatar";
import Repository from "./components/Repository";
import Screen from './components/Screen';
import SearchHelpUI from './components/SearchHelpUI';
import SearchNoResult from './components/SearchNoResult';

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
          <div className="w-1/3 max-w-full">
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
          <div className="w-1/3 flex-1 max-w-full text-center">
            <Repository
              title="facebook/react"
              language="Javascript"
              starCount={158691}
              owner={{
                name: "facebook",
                avatar: "https://avatars3.githubusercontent.com/u/69631?v=4",
              }}
              repoUrl="https://github.com/facebook/react"
              homepageUrl="https://reactjs.org"
            />
            <caption className="text-center font-bold text-gray-500 text-base block py-8 pointer-events-none">
              Repository
            </caption>
          </div>
          <div className="flex-shrink-0 w-1/2 max-w-full text-center">
            <Screen />
            <caption className="text-center font-bold text-gray-500 text-base block py-8 pointer-events-none">
              Screen
            </caption>
          </div>
          <div className="w-1/4 flex-1 max-w-full text-center">
            <SearchHelpUI />
            <caption className="text-center font-bold text-gray-500 text-base block py-8 pointer-events-none">
              Search help UI
            </caption>
          </div>
          <div className="w-1/4 flex-1 max-w-full text-center">
            <SearchNoResult />
            <caption className="text-center font-bold text-gray-500 text-base block py-8 pointer-events-none">
              No Result
            </caption>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

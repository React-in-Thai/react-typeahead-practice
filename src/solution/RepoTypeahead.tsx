import React from "react";
import Repository from "../components/Repository";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

const RepoTypeahead = () => {
  return (
    <div className="bg-orange-100">
      <Screen>
        <div className="p-2">
          <TextInput placeholder="Search repository..." />
        </div>
        <div className="mx-2">
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
        <div className="my-4" />
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
        </div>
      </Screen>
    </div>
  );
};

export default RepoTypeahead;

import React, { useState } from "react";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Repository from "../components/Repository";
import Screen from "../components/Screen";
import SearchHelpUI from "../components/SearchHelpUI";
import SearchNoResult from "../components/SearchNoResult";
import TextInput from "../components/TextInput";
import { searchRepositories } from "../services/searchApi";

const Loader = () => (
  <div
    data-testid="loader"
    className="bg-gray-200 rounded-lg animate-pulse m-3"
    style={{ minHeight: "10rem" }}
  />
);

const NextPage = ({ text, page }: { text: string, page: number }) => {
  useSWR(text ? [text, page + 1] : null, searchRepositories);
  return null
}

const RepoTypeahead = () => {
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const { data, isValidating } = useSWR(text ? [text, page] : null, searchRepositories);

  return (
    <div className="bg-orange-100 relative">
      <div className="mx-auto max-w-sm relative">
      <Screen>
        <div className="pb-2 sticky top-0">
          <TextInput
            id="search-input"
            placeholder="Search repository..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {!isValidating && !data && (
          <div className="text-center">
            <SearchHelpUI />
          </div>
        )}
        {isValidating &&
          !data &&
          [...Array(5)].map((_, index) => <Loader key={index} />)}
        {!isValidating && data && !data.items?.length && <SearchNoResult />}
        <div className="mx-3">
          {data &&
            data.items.map((item) => (
              <React.Fragment key={item.id}>
                <Repository
                  title={item.full_name}
                  language={item.language}
                  starCount={item.stargazers_count}
                  owner={{
                    name: item.owner.login,
                    avatar: item.owner.avatar_url,
                  }}
                  repoUrl={item.url}
                  homepageUrl={item.homepage}
                />
                <div className="my-4" />
              </React.Fragment>
            ))}
        </div>
      </Screen>
      <NextPage page={page} text={text} />
      <button
        className="block absolute w-12 h-12 rounded-full bg-blue-900 text-white shadow-lg hover:bg-blue-700 focus:outline-none"
        style={{ bottom: 16, right: 16 }}
        onClick={() => setPage(p => p + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
      </button>
      </div>
    </div>
  );
};

export default RepoTypeahead;

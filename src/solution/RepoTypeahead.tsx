import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";
import Repository from "../components/Repository";
import SearchHelpUI from "../components/SearchHelpUI";
import Loader from "../components/Loader";
import SearchNoResult from "../components/SearchNoResult";
import { searchRepositories } from "../services/searchApi";
import useSWR from "swr";

const useDebounceValue = (value: string) => {
  const [debouncedValue, setDeValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDeValue(value);
    }, 300);
    return () => clearTimeout(timeout);
  }, [value]);
  return debouncedValue;
};

const useNextPage = (text: string, page: number) => {
  useSWR(text ? [text, page + 1] : null, searchRepositories);
};

const RepoTypeahead = () => {
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const finalText = useDebounceValue(text);
  const { data, isValidating } = useSWR(
    finalText ? [finalText, page] : null,
    searchRepositories
  );
  useNextPage(finalText, page);
  return (
    <div className="bg-blue-100">
      <div className="h-full relative max-w-sm mx-auto">
        <button
          onClick={() => setPage(p => p + 1)}
          className="flex items-center justify-center absolute w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 shadow-lg text-white"
          style={{ bottom: 16, right: 16 }}
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
        </button>
        <Screen>
          <TextInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="search-input"
            placeholder="Search repositories..."
          />
          <div className="h-3" />
          {data && data.items.length === 0 && <SearchNoResult />}
          {!data && !isValidating && <SearchHelpUI />}
          <div className="mx-3">
            {!data &&
              isValidating &&
              React.Children.toArray([...Array(5).fill(<Loader />)])}
            {data &&
              data.items.map((item) => (
                <React.Fragment key={item.id}>
                  <Repository
                    owner={{
                      name: item.owner.login,
                      avatar: item.owner.avatar_url,
                    }}
                    repoUrl={item.url}
                    starCount={item.stargazers_count}
                    title={item.full_name}
                    homepageUrl={item.homepage}
                    language={item.language}
                  />
                  <div className="my-4" />
                </React.Fragment>
              ))}
          </div>
        </Screen>
      </div>
    </div>
  );
};

export default RepoTypeahead;

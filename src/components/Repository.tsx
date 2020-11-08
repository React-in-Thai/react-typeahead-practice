import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook, faStar } from "@fortawesome/free-solid-svg-icons";

export type RepositoryProps = {
  title: string;
  language?: string | null;
  owner: {
    name: string;
    avatar: string;
  };
  starCount: number;
  repoUrl: string;
  homepageUrl?: string | null;
};

const Repository = ({
  title,
  language,
  starCount,
  owner,
  repoUrl,
  homepageUrl,
}: RepositoryProps) => {
  return (
    <div
      data-testid="repo-item"
      className="text-left flex items-center shadow-lg bg-gray-200 rounded-lg"
    >
      <div className="flex-1 rounded-lg bg-white px-4 py-2 min-w-0">
        <h2
          className="text-3xl font-semibold mb-1 overflow-hidden"
          style={{ textOverflow: "ellipsis" }}
        >
          <a
            className="hover:underline"
            href={repoUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            {title}
          </a>
        </h2>
        <div>
          <FontAwesomeIcon className="text-gray-600" icon={faStar} />{" "}
          <span className="inline-block mr-3 text-gray-900">{starCount}</span>
          {language && (
            <span className="text-sm inline-block bg-gray-200 text-gray-700 border border-gray-300 rounded px-2 py-px">
              {language}
            </span>
          )}
        </div>
        <div className="mt-3 mb-2 flex items-center gap-2">
          <img
            className="bg-gray-300 h-8 w-8 rounded-full"
            src={owner.avatar}
            alt=""
          />
          <div className="text-gray-700 text-sm">{owner.name}</div>
        </div>
      </div>
      <div className="flex self-stretch flex-col justify-center gap-2">
        <a
          className="flex items-center justify-center rounded text-gray-700 hover:text-gray-900 w-12 h-12"
          href={repoUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </a>
        {homepageUrl && (
          <a
            className="flex items-center justify-center rounded text-gray-700 hover:text-gray-900 w-12 h-12"
            href={homepageUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faBook} className="text-xl" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Repository;

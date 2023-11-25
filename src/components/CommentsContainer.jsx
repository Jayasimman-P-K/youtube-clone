import React from "react";
import { UserIcon } from "../utils/icons";

const dummyCommentData = [
  {
    name: "Jayasimman",
    comments:
      "This is a dummy comment List. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Jayasimman",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Jayasimman",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Jayasimman",
            comments:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },

          {
            name: "Jayasimman",
            comments:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Jayasimman",
                comments:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Jayasimman",
                comments:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Jayasimman",
                comments:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Jayasimman",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Jayasimman",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Jayasimman",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Jayasimman",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },

      {
        name: "Jayasimman",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Jayasimman",
            comments:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Jayasimman",
                comments:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },

              {
                name: "Jayasimman",
                comments:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },

          {
            name: "Jayasimman",
            comments:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Jayasimman",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Jayasimman",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
];

const Comment = (data) => {
  const { name, comments, replies } = data.data;
  return (
    <div className="my-2">
      <div className="flex bg-neutral-100 p-1 rounded-lg hover:bg-neutral-200">
        <img
          className=" h-8  rounded-full p-1 bg-neutral-100"
          src={UserIcon}
          alt=""
        />
        <div className=" pb-1 px-2">
          <h1>{name}</h1>
          <h1>{comments}</h1>
        </div>
      </div>
      <div className="border-l-2 border-neutral-500 rounded-sm ml-5 pl-2">
        <CommentList data={replies} />
      </div>
    </div>
  );
};

const CommentList = (data) => {
  return (
    <div>
      {data.data.map((commentData, index) => (
        <Comment key={index} data={commentData} />
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className=" my-4">
      <h1 className="font-semibold py-2 text-lg ">Comments:</h1>
      <div className="">
        <CommentList data={dummyCommentData} />
      </div>
    </div>
  );
};

export default CommentsContainer;

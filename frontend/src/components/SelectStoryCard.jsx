import React from "react";

const selectStoryList = [
  {
    tittle: "Toronto by night",
    summary: "A dark adventure on the streets of Toronto city.",
    image: "./src/assets/detective_city.jpg",
  },
  {
    tittle: "Back to the Maya's life !",
    summary: "This time you took your dictionary.",
    image: "./src/assets/maya-story.jpg",
  },
  {
    tittle: "Where is Aqua ?",
    summary: "Aqua is a very special color...",
    image: ".src/assets/Who-s-is-Aqua-colors.jpg",
  },
  {
    tittle: "Xavier and the little canibal unicorns ponies.",
    summary:
      "the question that we can ask ourselves and why xavier said: 'oh no not yet!'",
    image: "./src/assets/little-ponie.jpg",
  },
];

const SelectStoryCard = () => {
  const selectStory = selectStoryList[0];
  return (
    <div className="bg-amber-400 p-8 flex flex-col items-center rounded-lg justify-center max-md:m-16">
      <h4 className="pt-4 text-2xl">{selectStory.tittle}</h4>
      <img
        className=" object-contain px-8 py-8 max-lg: rounded-md"
        src={selectStory.image}
        alt=""
      />
      <p className=" text-lg">{selectStory.summary}</p>
      <button className="bg-teal-500 p-1 mt-3 rounded-md px-3" type="button">
        Play
      </button>
    </div>
  );
};

export default SelectStoryCard;

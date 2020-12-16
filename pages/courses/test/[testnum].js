import { useRouter } from "next/router";
import { useState } from "react";

import { LoginSubmitBtn } from "components/comps/loginItems";
import MainContentLayout from "components/layout/layoutMainContent";
import SlidingMenuLayout from "components/layout/layoutSlidingMenu";

const qlist = [
  { quest: "Hypothesis, observation, analysis, conclusion", truethy: true },
  {
    quest: "Observation, experimentation, hypothesis, conclusion",
    truethy: false,
  },
  {
    quest: "Observation, hypothesis, experimentation, conclusion",
    truethy: false,
  },
];
const question =
  "A student using the scientific method would proceed through the steps in which of the following orders?";

const Questions = ({ question, qlist }) => {
  const router = useRouter();
  const { testnum } = router.query;

  const questList = qlist.map((l, ind) => (
    <div key={ind}>
      <input name="question" type="radio" id={`quest-${ind}`}/>
      <label
        htmlFor={`quest-${ind}`}
        className={`answer ${l.truethy && "curr-answer"}`}
      >
        <h3>{l.quest}</h3>
        <span className="circle"></span>
      </label>
    </div>
  ));
  return (
    <div className="quest ">
      <h5 className="comp">question: {testnum}</h5>
      <h2 className="quest-top comp">{question}</h2>
      <div className="quest-bot comp">{questList}</div>
      <div className="quest-next flex j-c">
        <LoginSubmitBtn btnTxt="CONTINUE" />
      </div>
    </div>
  );
};

const Test = () => {
  /* state of a closing and opening menu */
  const [openedMenu, setOpenedMenu] = useState(false);

  /* change the state of the opened menu */
  const handleClick = () => {
    setOpenedMenu(!openedMenu);
    console.log("clicked");
  };
  return (
    <div className="dashboard">
      <MainContentLayout handleClick={handleClick} hide>
        <Questions qlist={qlist} question={question} />
      </MainContentLayout>
      <SlidingMenuLayout open={openedMenu} hideCenter>
        <div className="t-align-c">
          <h2 className="t-grey2">Biology Basic</h2>
          <p className="t-grey1">Heredity and Evolution</p>
          <h4>TIMER</h4>
        </div>
      </SlidingMenuLayout>
    </div>
  );
};

export default Test;

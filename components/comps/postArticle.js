import {Subheading,PostHead,Article} from "components/comps/postItems"

const Articles = () =>{

    const articles = [
        {title:"Introduction",content:'Biology is one of the major sciences. Scientists have acquired biological knowledge through a process known as the scientific method. The steps of the scientific method make up an orderly way of gaining information about the biological world.'},
        {title:"Observation",content:'The first step in the scientific method is stating a problem based on observation. In this stage, the scientist recognizes that something has happened and that it occurs repeatedly. Therefore, the scientist formulates a question or states a problem for investigation. The next step in the scientific method is to explore resources that may have information about that question or problem. Here, the scientist conducts a literature review and interacts with other scientists to develop knowledge about the question at hand.'},
        {title:"Conclusion",content:'After analyzing the data, the scientist draws a conclusion. A valid conclusion must be based on the facts observed in the experiments. If the data from repeated experiments support the hypothesis, the scientist publishes the hypothesis and experimental data for other scientists to review and discuss.'},
    ]

    return(
        <div className="lesson-wrapper">
            <Subheading title="Biology & The Scientific Method" des="2-4 hours a week" />
            <PostHead img="/bg/bg_opt1.jpg"/>
            <Article title={articles[0].title} content={articles[0].content} />
            <Article title={articles[1].title} content={articles[1].content} />
            <Article title={articles[2].title} content={articles[2].content} />
        </div>
    )
}

export default Articles
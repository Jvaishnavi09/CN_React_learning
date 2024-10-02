import React from "react";
import { useParams } from "react-router-dom";
import coursesData from "../../../data/courses.json";
function Chapter() {
  const param = useParams();
  const course = coursesData.find((item) => item.id === param.id);
  const chapter = course.chapters.find(
    (item) => String(item.chapter) === param.chapId
  );
  const chapter2 = course.chapters.map((item) => console.log(item.chapter));
  console.log(param.chapId, course.chapters, chapter);
  return (
    <>
      <h1>Chapter Page</h1>
    </>
    // <div>
    //   <h1>{chapter.title}</h1>
    //   <p>{chapter.description}</p>
    //   <p className={styles.para}>{chapter.details}</p>
    //   <br />
    //   <br />
    //   <div className={styles.videos}>
    //     <iframe
    //       width="800"
    //       height="560"
    //       src={chapter.video}
    //       title="YouTube video player"
    //       frameborder="1"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //       allowfullscreen
    //     ></iframe>
    //   </div>
    // </div>
  );
}

export default Chapter;

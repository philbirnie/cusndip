import * as React from "react"

const Bio = ({title, position, html}) => {

  const className = `c-bio c-bio--position-${position}`;

  return (
    <section className={className}>
      <h4>{title}</h4>
      <div
        className="c-bio__content"
        dangerouslySetInnerHTML={{__html: html}}/>
    </section>
  );
};

export default Bio;

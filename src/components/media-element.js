import * as React from "react";

const MediaElement = ({heading, content, Link, additionalClasses}) => {

  const classNames = `c-section ${additionalClasses}`;

  return (
    <>
      <section className={classNames}>
        <header>
          <h2 className="c-section__heading">{heading}</h2>
        </header>
        <div className="c-section__content" dangerouslySetInnerHTML={{__html: content}} />
      </section>
    </>
  )
};

export default MediaElement;

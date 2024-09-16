import React from "react";
import FaqItem from "./FaqItem";

const FaqPage = () => {
  const faqData = [
    {
      title: "Suspendisse ultrices pharetra libero sed interdum.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est non arcu porta.",
    },
    {
      title: "Fusce molestie condimentum facilisis.",
      content: (
        <>
          <p>
            Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi
            aliquet pulvinar orci non vulputate.
          </p>
          <ul>
            <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
            <li>
              Integer et lacus vitae justo fermentum rutrum. In nec ultrices
              massa.
            </li>
            <li>Proin blandit nunc risus, at semper turpis sagittis nec.</li>
            <li>Quisque ut dolor erat.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Quisque quis nunc quis urna tempor lobortis vel non orci.",
      content:
        "Donec rutrum ultrices ante nec malesuada. In accumsan eget nisi a rhoncus.",
    },
    {
      title: "Nulla sed sapien maximus, faucibus massa vitae.",
      content:
        "In nec ultrices massa. Vivamus sed est non arcu porta aliquet et vitae nulla.",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold ">Frequently Asked Questions</h2>
      <div id="accordion">
        {faqData.map((faq, index) => (
          <FaqItem key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
    </div>
  );
};

export default FaqPage;

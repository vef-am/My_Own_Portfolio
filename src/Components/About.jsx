/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/markus-spiske-iar-afB0QQw-unsplash.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a third-year Computer Science & Engineering student at the Polytechnic University of Catalonia (UPC), specializing in Computing. I enjoy solving problems.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "C++",
  "C",
  "Java",
  "Visual Studio",
  "SQL",
  "PostgreSQL",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about technology, and I am always looking forward to learning and developing my skills further. I am interested in opportunities that let me apply my knowledge and contribute to the success of a company.";

const About = () => {
  return (
    <section className="padding" id="about"
    style={{
      marginTop: "2rem",
      marginBottom: "2rem",
      //padding: "2rem",
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      //boxSizing: "border-box", // Asegura que el padding se incluya en el tamaño total
    }}>
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      <div
        style={{
          backgroundColor: "black",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "10px",
          border: "1px solid green",
        }}
      >
        <h2>About Myself</h2>
        <p className="large" style={{ color: "#efefef" }}>{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li
             style={{
              color: "white",
             }}
             key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0", color: "#efefef" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

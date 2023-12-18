import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about spoon" className="spoon__img" />
          <p className="p__opensans">
            Welcome to Red Lobster, where culinary excellence meets the allure of the sea. Situated in the heart of Lagos, our fine dining establishment is a sanctuary for seafood enthusiasts seeking an extraordinary gastronomic experience.

            At Red Lobster, we take pride in curating a menu that showcases the freshest and most succulent seafood delicacies. From the ocean to your plate, our chefs work diligently to present a symphony of flavors that reflect the richness of the sea. Each dish is a testament to our commitment to quality and culinary innovation.

            {/* Step into our inviting dining space, adorned with nautical-inspired decor that transports you to a maritime oasis. Whether you're celebrating a special occasion or simply craving the finest seafood, our restaurant provides a refined setting that complements the sophistication of our cuisine.

            Our attentive and knowledgeable staff is dedicated to ensuring your dining experience is nothing short of exceptional. From guiding you through our extensive menu to recommending the perfect wine pairing, we strive to create a memorable journey for your taste buds.

            At Red Lobster, we invite you to indulge in the art of fine dining, where the bounty of the sea takes center stage in an atmosphere of relaxed elegance. Join us for a culinary voyage that transcends ordinary dining, and immerse yourself in the flavors of the ocean. We look forward to welcoming you to Red Lobster, where every meal is a celebration of seafood excellence. */}
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Established in 2011, Red Lobster embarked on a culinary journey with a vision to redefine the seafood dining experience. From our humble beginnings in Lagos, we quickly garnered a reputation for our commitment to freshness, quality, and innovation.

            Over the years, Red Lobster has evolved into a beacon for seafood enthusiasts, offering a menu that celebrates the bounty of the sea. Our chefs, inspired by a passion for culinary excellence, craft each dish with meticulous attention to detail, ensuring a symphony of flavors that captivate the palate.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

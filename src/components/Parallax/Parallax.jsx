import "./Parallax.css";
import { useState, useEffect } from "react";
import { ParallaxImage, Section } from "../";
export const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ParallaxImage
        spanText="Example"
        backgroundImageNumber={1}
      ></ParallaxImage>

      <Section sectionTitle="Section 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab,
        nemo necessitatibus autem numquam a reiciendis excepturi, atque magnam
        beatae sunt odio laudantium et repudiandae, explicabo error delectus
        sint! Commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corrupti dolores debitis eius provident repudiandae labore consequatur
        quos optio? Eligendi fugiat, voluptates quae error ducimus impedit totam
        placeat expedita eum atque. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Iusto, nostrum reprehenderit, modi aut harum nemo
        ipsum alias, facere nobis veritatis doloremque. Quidem, repellat illo
        quasi cupiditate sed perspiciatis reprehenderit! Ratione! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Asperiores at tempore
        aperiam labore, possimus exercitationem! Ducimus distinctio
        voluptatibus, unde deserunt dolor atque natus reprehenderit beatae
        architecto exercitationem porro assumenda iusto!
      </Section>

      <ParallaxImage backgroundImageNumber={2} />

      <Section sectionTitle="Section 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab,
        nemo necessitatibus autem numquam a reiciendis excepturi, atque magnam
        beatae sunt odio laudantium et repudiandae, explicabo error delectus
        sint! Commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corrupti dolores debitis eius provident repudiandae labore consequatur
        quos optio? Eligendi fugiat, voluptates quae error ducimus impedit totam
        placeat expedita eum atque. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Iusto, nostrum reprehenderit, modi aut harum nemo
        ipsum alias, facere nobis veritatis doloremque. Quidem, repellat illo
        quasi cupiditate sed perspiciatis reprehenderit! Ratione! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Asperiores at tempore
        aperiam labore, possimus exercitationem! Ducimus distinctio
        voluptatibus, unde deserunt dolor atque natus reprehenderit beatae
        architecto exercitationem porro assumenda iusto!
      </Section>

      <ParallaxImage backgroundImageNumber={3} />
    </>
  );
};

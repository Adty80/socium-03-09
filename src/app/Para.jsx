import SimpleParallax from "simple-parallax-js/";
import Image from "next/image";

const Para = () => (
  <SimpleParallax>
    <Image src="image.jpg" alt="image" width={1024} height={1920} />
  </SimpleParallax>
)
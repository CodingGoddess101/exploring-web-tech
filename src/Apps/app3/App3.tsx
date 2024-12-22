import { useState } from "react";
import AppComponents from "../../components/Components";
import "./App3.css";

import image1 from "/src/images/DALL-E-Image1-Nature.png";
import image2 from "/src/images/DALL-E-Image2-Nature.png";
import image3 from "/src/images/DALL-E-Image3-Nature.png";
import image4 from "/src/images/DALL-E-Image4-Nature.png";
import image5 from "/src/images/DALL-E-Image5-Nature.png";
import image6 from "/src/images/DALL-E-Image6-Nature.png";
import Header3 from "./Header3";
import Div from "../../components/Div";
const App3 = () => {
  //The first slider
  const [currentIndex1, setCurrentIndex1] = useState<number>(0);
  let imageCluster1 = [image1, image2, image3];
  let imageCluster1_1 = [
    "Image1 nature 1",
    "Image2 nature 2",
    "Image3 nature 3",
  ];

  const nextImageSlider1 = () => {
    setCurrentIndex1((currentIndex1 + 1) % imageCluster1.length);
  };

  const prevImageSlider1 = () => {
    setCurrentIndex1(
      (currentIndex1 - 1 + imageCluster1.length) % imageCluster1.length
    );
  };

  //The second slider
  let imageCluster2 = [image1, image2, image3];
  let imageCluster2_1 = ["Image1 nature", "Image2 nature", "Image3 nature"];
  //acquire each array index and use them as deafult location to enable image selection without sliding
  const [prevIndex, setPrevIndex] = useState<number>(imageCluster2.length - 1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState<number>(1);

  const prevImageSlider2 = () => {
    setNextIndex(currentIndex);
    setCurrentIndex(prevIndex);
    setPrevIndex((nextIndex - 1 + imageCluster2.length) % imageCluster2.length);
    // setCurrentIndex2(
    //   (currentIndex2 - 1 + imageCluster2.length) % imageCluster2.length
    // );
  };
  const nextImageSlider2 = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex(nextIndex);
    setNextIndex((nextIndex + 1) % imageCluster2.length);

    // setCurrentIndex2((currentIndex2 + 1) % imageCluster2.length);
  };

  //The third slider
  const [currentIndex3, setCurrentIndex3] = useState<number>(0);
  let imageCluster3 = [image1, image2, image3];
  //acquire each array index and use them as deafult location to enable image selection without sliding
  const prevImageSlider_3 = () => {
    setCurrentIndex3(
      (currentIndex3 - 1 + imageCluster3.length) % imageCluster3.length
    );
  };
  const nextImageSlider_3 = () => {
    setCurrentIndex3((currentIndex3 + 1) % imageCluster3.length);
  };

  const getClassName = (index: number) => {
    const elementPos =
      (index - currentIndex3 + imageCluster3.length) % imageCluster3.length;
    switch (elementPos) {
      case 0:
        return "left";
      case 1:
        return "middle";
      case 2:
        return "right";
      default:
        return "";
    }
  };

  //The fourth slider
  const [currentIndex4, setCurrentIndex4] = useState<number>(0);
  let imageCluster4 = [image1, image2, image3, image4, image5, image6];
  //acquire each array index and use them as deafult location to enable image selection without sliding
  const prevImageSlider_4 = () => {
    setCurrentIndex4(
      (currentIndex4 - 1 + imageCluster4.length) % imageCluster4.length
    );
  };
  const nextImageSlider_4 = () => {
    setCurrentIndex4((currentIndex4 + 1) % imageCluster4.length);
  };

  const getClassName2 = (index: number) => {
    const elementPos =
      (index - currentIndex4 + imageCluster4.length) % imageCluster4.length;
    switch (elementPos) {
      case 0:
        return "first";
      case 1:
        return "second";
      case 2:
        return "third";
      case 3:
        return "fourth";
      case 4:
        return "fifth";
      case 5:
        return "sixth";
      default:
        return "";
    }
  };

  return (
    <>
      <Header3 />
      <AppComponents.Section class_Name={"app content"}>
        <AppComponents.Section class_Name={"header container"}>
          <AppComponents.Heading_One
            class_Name={"heading-one"}
            text={"Zone 3 | Image Sliders"}
          />
        </AppComponents.Section>

        <AppComponents.Section class_Name={"creative dynamic image slider"}>
          <AppComponents.Heading_Two
            class_Name="solo-image-slider"
            text="Dynamic Movement Image Slider"
          />
          <AppComponents.Section class_Name={"slider-one"}>
            <p className={"prev-image"} onClick={prevImageSlider1}>
              {"<"}
            </p>

            <AppComponents.Section class_Name={"select-image"}>
              <AppComponents.Image
                class_Name="selected-image"
                src={imageCluster1[currentIndex1]}
                alt={imageCluster1_1[currentIndex1]}
              />
            </AppComponents.Section>
            <p className={"next-image"} onClick={nextImageSlider1}>
              {">"}
            </p>
          </AppComponents.Section>
        </AppComponents.Section>
        <AppComponents.Section class_Name={"creative dynamic image slider"}>
          <AppComponents.Heading_Two
            class_Name="multi-image-slider"
            text="Dynamic Image Viewer"
          />
          <AppComponents.Section class_Name={"slider-two"}>
            <AppComponents.Section class_Name={"select-image"}>
              <AppComponents.Section class_Name={"view-slider-content"}>
                <Div class_name="image-selection">
                  <Div class_name="potential-selection">
                    <AppComponents.Image2
                      class_Name="potential-selected-image one"
                      src={imageCluster2[prevIndex]}
                      alt={imageCluster2_1[prevIndex]}
                    />
                    <AppComponents.Image2
                      class_Name="potential-selected-image two"
                      src={imageCluster2[currentIndex]}
                      alt={imageCluster2_1[currentIndex]}
                    />
                    <AppComponents.Image2
                      class_Name="potential-selected-image three"
                      src={imageCluster2[nextIndex]}
                      alt={imageCluster2_1[nextIndex]}
                    />
                  </Div>
                </Div>
              </AppComponents.Section>
            </AppComponents.Section>

            <AppComponents.Section class_Name="movement-controls">
              <p className={"prev-image"} onClick={prevImageSlider2}>
                {"<"}
              </p>
              <p className={"next-image"} onClick={nextImageSlider2}>
                {">"}
              </p>
            </AppComponents.Section>
          </AppComponents.Section>
        </AppComponents.Section>

        {/* third slider */}
        <AppComponents.Section
          class_Name={"creative dynamic image slider three"}
        >
          <AppComponents.Heading_Two
            class_Name="multi-image-slider"
            text="Dynamic X-axis 2D circle Slider"
          />
          <AppComponents.Section class_Name={"slider-three"}>
            <AppComponents.Section class_Name={"view-slider-content"}>
              <Div class_name="image-selection">
                {imageCluster3.map((image, i) => {
                  return (
                    <Div
                      key={i}
                      class_name={`potential-selection ${getClassName(i)}`}
                    >
                      <AppComponents.Image2
                        class_Name={`potential-selected-image slider-image${i}`}
                        src={image}
                        alt={`slider-image-${i}`}
                      />
                    </Div>
                  );
                })}
              </Div>
            </AppComponents.Section>

            <AppComponents.Section class_Name="movement-controls">
              <p className={"prev-image"} onClick={prevImageSlider_3}>
                {"<"}
              </p>
              <p className={"next-image"} onClick={nextImageSlider_3}>
                {">"}
              </p>
            </AppComponents.Section>
          </AppComponents.Section>
        </AppComponents.Section>

        {/* fourth slider */}
        <AppComponents.Section
          class_Name={"creative dynamic image slider three"}
        >
          <AppComponents.Heading_Two
            class_Name="multi-image-slider"
            text="Dynamic X+Y axis circle Slider"
          />
          <AppComponents.Section class_Name={"slider-four"}>
            <AppComponents.Section class_Name={"view-slider-content"}>
              <Div class_name="image-selection">
                {imageCluster4.map((image, i) => {
                  return (
                    <Div
                      key={i}
                      class_name={`potential-selection ${getClassName2(i)}`}
                    >
                      <AppComponents.Image2
                        class_Name={`potential-selected-image slider-image${i}`}
                        src={image}
                        alt={`slider-image-${i}`}
                      />
                    </Div>
                  );
                })}
              </Div>
            </AppComponents.Section>

            <AppComponents.Section class_Name="movement-controls">
              <p className={"prev-image"} onClick={prevImageSlider_4}>
                {"<"}
              </p>
              <p className={"next-image"} onClick={nextImageSlider_4}>
                {">"}
              </p>
            </AppComponents.Section>
          </AppComponents.Section>
        </AppComponents.Section>
      </AppComponents.Section>
    </>
  );
};

export default App3;

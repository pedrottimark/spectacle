import React from "react";
import { render } from "react-dom";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "./src";

import preloader from "./src/utils/preloader";

import Interactive from "./assets/interactive";

require("normalize.css");
require("./src/themes/default/index.css");

const images = {
  city: require("./assets/city.jpg"),
  kat: require("./assets/kat.png"),
  logo: require("./assets/formidable-logo.svg"),
  markdown: require("./assets/markdown.png")
};

preloader([images.city, images.kat, images.markdown]);

render(
  <Spectacle>
    <Deck transition={["zoom", "slide"]} transitionDuration={500}>
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Spectacle
        </Heading>
        <Heading size={1} fit caps>
          A ReactJS Presentation Library
        </Heading>
        <Heading size={1} fit caps textColor="black">
          Where You Can Write Your Decks In JSX
        </Heading>
        <Link href="https://github.com/FormidableLabs/spectacle">
          <Text bold caps textColor="tertiary">View on Github</Text>
        </Link>
        <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
      </Slide>
      <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
        <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
        <Heading size={1} fit textColor="primary" textFont="secondary">
          Wait what?
        </Heading>
      </Slide>
      <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
        <CodePane
          lang="jsx"
          source={require("raw!./assets/deck.example")}
          margin="20px auto"
        />
      </Slide>
      <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
        <Appear>
          <Heading size={1} caps fit textColor="primary">
            Full Width
          </Heading>
        </Appear>
        <Appear>
          <Heading size={1} caps fit textColor="tertiary">
            Adjustable Darkness
          </Heading>
        </Appear>
        <Appear>
          <Heading size={1} caps fit textColor="primary">
            Background Imagery
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={["zoom", "fade"]} bgColor="primary">
        <Heading caps fit>Flexible Layouts</Heading>
        <Layout>
          <Fill>
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Left
            </Heading>
          </Fill>
          <Fill>
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Right
            </Heading>
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} bgColor="black">
        <BlockQuote>
          <Quote>Wonderfully formatted quotes</Quote>
          <Cite>Ken Wheeler</Cite>
        </BlockQuote>
      </Slide>
      <Slide transition={["spin", "zoom"]} bgColor="tertiary">
        <Heading caps fit size={1} textColor="primary">
          Inline Markdown
        </Heading>
        <Markdown>
          {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
          `}
        </Markdown>
      </Slide>
      <Slide transition={["slide", "spin"]} bgColor="primary">
        <Heading caps fit size={1} textColor="tertiary">
          Smooth
        </Heading>
        <Heading caps fit size={1} textColor="secondary">
          Combinable Transitions
        </Heading>
      </Slide>
      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <List>
          <ListItem><Appear>Inline style based theme system</Appear></ListItem>
          <ListItem><Appear>Autofit text</Appear></ListItem>
          <ListItem><Appear>Flexbox layout system</Appear></ListItem>
          <ListItem><Appear>React-Router navigation</Appear></ListItem>
          <ListItem><Appear>PDF export</Appear></ListItem>
          <ListItem><Appear>And...</Appear></ListItem>
        </List>
      </Slide>
      <Slide transition={["fade"]} bgColor={"secondary"} textColor="primary">
        <List>
          <Appear order={123}><ListItem>Ninth 123</ListItem></Appear>
          <Appear order={1}><ListItem>Fifth 1</ListItem></Appear>
          <Appear order={0}><ListItem>Third specified 0</ListItem></Appear>
          <Appear order={2}><ListItem>Seventh 2</ListItem></Appear>
          <Appear order={1}><ListItem>Sixth 1</ListItem></Appear>
          <Appear><ListItem>Fourth unspecified 0</ListItem></Appear>
          <Appear order={-2}><ListItem>Second -2</ListItem></Appear>
          <Appear order={-13}><ListItem>First -13</ListItem></Appear>
          <Appear order={17}><ListItem>Eigth 17</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} bgColor="primary">
        <Heading size={1} caps fit textColor="tertiary">
          Your presentations are interactive
        </Heading>
        <Interactive/>
      </Slide>
      <Slide transition={["spin", "slide"]} bgColor="tertiary">
        <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
          Made with love in Seattle by
        </Heading>
        <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
      </Slide>
    </Deck>
  </Spectacle>
, document.getElementById("root"));

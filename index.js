import React from "react";
import { render } from "react-dom";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, FullWidth,
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
      <FullWidth>
        <Heading size={1} caps lineHeight={1} textColor="black">
          Spectacle
        </Heading>
      </FullWidth>
      <FullWidth>
        <Heading size={1} caps>
          A ReactJS Presentation Library
        </Heading>
      </FullWidth>
      <FullWidth>
        <Heading size={1} caps textColor="black">
          Where You Can Write Your Decks In JSX
        </Heading>
      </FullWidth>
      <Link href="https://github.com/FormidableLabs/spectacle">
        <Text bold caps textColor="tertiary">View on Github</Text>
      </Link>
      <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
    </Slide>
    <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
      <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
      <FullWidth>
        <Heading size={1} textColor="primary" textFont="secondary">
          Wait what?
        </Heading>
      </FullWidth>
    </Slide>
    <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
      <CodePane
        lang="jsx"
        source={require("raw!./assets/deck.example")}
        margin="20px auto"
      />
    </Slide>
    <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
      <Appear fid="1">
        <FullWidth>
          <Heading size={1} caps textColor="primary">
            Full Width
          </Heading>
        </FullWidth>
      </Appear>
      <Appear fid="2">
        <FullWidth>
          <Heading size={1} caps textColor="tertiary">
            Adjustable Darkness
          </Heading>
        </FullWidth>
      </Appear>
      <Appear fid="3">
        <FullWidth>
          <Heading size={1} caps textColor="primary">
            Background Imagery
          </Heading>
        </FullWidth>
      </Appear>
    </Slide>
    <Slide transition={["zoom", "fade"]} bgColor="primary">
      <FullWidth>
        <Heading caps>Flexible Layouts</Heading>
      </FullWidth>
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
      <FullWidth>
      <BlockQuote>
        <Quote>Wonderfully formatted quotes</Quote>
        <Cite>Ken Wheeler</Cite>
      </BlockQuote>
      </FullWidth>
    </Slide>
    <Slide transition={["spin", "zoom"]} bgColor="tertiary">
      <FullWidth>
        <Heading caps size={1} textColor="primary">
          Inline Markdown
        </Heading>
      </FullWidth>
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
      <FullWidth>
        <Heading caps size={1} textColor="tertiary">
          Smooth
        </Heading>
      </FullWidth>
      <FullWidth>
        <Heading caps size={1} textColor="secondary">
          Combinable Transitions
        </Heading>
      </FullWidth>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <List>
        <ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
        <ListItem><Appear fid="2">Autofit text</Appear></ListItem>
        <ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
        <ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
        <ListItem><Appear fid="5">PDF export</Appear></ListItem>
        <ListItem><Appear fid="6">And...</Appear></ListItem>
      </List>
    </Slide>
    <Slide transition={["slide"]} bgColor="primary">
      <FullWidth>
        <Heading size={1} caps textColor="tertiary">
          Your presentations are interactive
        </Heading>
      </FullWidth>
      <Interactive/>
    </Slide>
    <Slide transition={["spin", "slide"]} bgColor="tertiary">
      <FullWidth>
        <Heading size={1} caps lineHeight={1.5} textColor="primary">
          Made with love in Seattle by
        </Heading>
      </FullWidth>
      <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
    </Slide>
    <Slide bgColor="secondary">
      <FullWidth>
        <BlockQuote>
          <Quote>
            Spectacle<br/>is spectacular!
          </Quote>
          <Cite>Ken Wheeler</Cite>
        </BlockQuote>
      </FullWidth>
    </Slide>
    <Slide>
      <FullWidth>
        <List>
          <ListItem>Who’s on first?</ListItem>
          <ListItem>What’s on second?</ListItem>
          <ListItem>I don’t know.</ListItem>
        </List>
      </FullWidth>
    </Slide>
    <Slide>
      <FullWidth>
        <Text textAlign="left">Left and the longest line</Text>
        <Text>Center</Text>
        <Text textAlign="right">Right</Text>
      </FullWidth>
      <Text textAlign="left">Left and the longest line</Text>
      <Text>Center</Text>
      <Text textAlign="right">Right</Text>
    </Slide>
    <Slide>
      <FullWidth>
        <Text textAlign="left">Left</Text>
        <Text>Center and the longest line</Text>
        <Text textAlign="right">Right</Text>
      </FullWidth>
      <Text textAlign="left">Left</Text>
      <Text>Center and the longest line</Text>
      <Text textAlign="right">Right</Text>
    </Slide>
    <Slide>
      <FullWidth>
        <Text textAlign="left">Left</Text>
        <Text>Center</Text>
        <Text textAlign="right">Right and the longest line</Text>
      </FullWidth>
      <Text textAlign="left">Left</Text>
      <Text>Center</Text>
      <Text textAlign="right">Right and the longest line</Text>
    </Slide>
    <Slide bgColor="secondary">
      <FullWidth>
        <Text textColor="tertiary">Here it comes, ready or not…</Text>
        <Appear>
          <Text textColor="tertiary">Three</Text>
        </Appear>
        <Appear>
          <Text textColor="tertiary" textFont="secondary">Two</Text>
        </Appear>
        <Appear>
          <Text textColor="tertiary" bold>1</Text>
        </Appear>
        <Appear>
          <Heading size={1}>💥</Heading>
        </Appear>
      </FullWidth>
    </Slide>
    <Slide>
      <FullWidth style={{lineHeight: 1.5}}>
        <Text textAlign="left">Align left:</Text>
        <Text textAlign="left">Who’s on first?</Text>
        <Text textAlign="left">What’s on second?</Text>
        <Text textAlign="left">I don’t know. You don’t know. Nobody knows.</Text>
      </FullWidth>
    </Slide>
    <Slide>
      <FullWidth style={{lineHeight: 1.5}} bgColor="tertiary">
        <Text>Align center:</Text>
        <Text>Who’s on first?</Text>
        <Text>What’s on second?</Text>
        <Text>I don’t know. You don’t know. Nobody knows.</Text>
      </FullWidth>
    </Slide>
    <Slide>
      <FullWidth style={{lineHeight: 1.5}}>
        <Text textAlign="right">Align right:</Text>
        <Text textAlign="right">Who’s on first?</Text>
        <Text textAlign="right">What’s on second?</Text>
        <Text textAlign="right">I don’t know. You don’t know. Nobody knows.</Text>
      </FullWidth>
    </Slide>
    <Slide bgColor="tertiary">
      <Layout>
        <Fill>
          <Text>
            Left
          </Text>
        </Fill>
        <Fill>
          <Text>
            Right
          </Text>
        </Fill>
      </Layout>
      <Layout>
        <Fill>
          <FullWidth bgColor="primary">
            <Text margin="0.25rem 0">
              Left
            </Text>
          </FullWidth>
        </Fill>
        <Fill>
          <FullWidth bgColor="primary">
            <Text margin="0.25rem 0">
              Right
            </Text>
          </FullWidth>
        </Fill>
      </Layout>
    </Slide>
    <Slide bgColor="tertiary">
      <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
      <FullWidth>
        <Link href="http://www.formidablelabs.com"><Image src={images.logo}/></Link>
      </FullWidth>
    </Slide>
    </Deck>
  </Spectacle>
, document.getElementById("root"));

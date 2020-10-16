import React from "react";
import "./styles.css";
//import { title } from "process";

let brakePoints = [350, 500, 750];
let images = [];
const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
for (let i = 0; i < imgId.length; i++) {
  const ih = 200 + Math.floor(Math.random() * 10) * 15;
  images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
}

type Props = {
  images: any[];
};

class MasonryLayout extends React.Component<Props> {
  render() {
    return (
      <div className="container">
        <div className="masonry-container">
          {/* <p id="transition-modal-description">{data.description}</p> */}
          {/* <h2 id="transition-modal-title">{this.props.cardTitle}</h2> */}
          {/* <p id="transition-modal-description">{this.props.cardDescription}</p> */}

          <Masonry brakePoints={brakePoints}>
            {this.props.images.map((image, id) => {
              // {images.map((image, id) => {
              return <Tile src={image} />;
            })}
          </Masonry>
        </div>
      </div>
    );
  }
}

type TileProps = {
  src: string;
};

export const Tile = ({ src }: TileProps) => {
  return (
    <div className="tile">
      <img src={src} alt="" />
    </div>
  );
};

type MasonryProps = {
  brakePoints: number[];
  children: any;
};

type MasonryState = {
  columns: number;
};

export class Masonry extends React.Component<MasonryProps, MasonryState> {
  refs: any;

  constructor(props: MasonryProps) {
    super(props);
    this.state = {
      columns: 1,
    };
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  getColumns(w: number) {
    return (
      this.props.brakePoints.reduceRight((p, c, i) => {
        return c < w ? p : i;
      }, this.props.brakePoints.length) + 1
    );
  }

  onResize() {
    // console.log("this.refs.Masonry.offsetWidth", this.refs.Masonry.offsetWidth);
    const columns = this.getColumns(this.refs.Masonry.offsetWidth);
    console.log("colums", columns);
    if (columns !== this.state.columns) {
      this.setState({
        columns: columns,
      });
    }
  }

  mapChildren(): any[] {
    let col = [];
    const numC = this.state.columns;
    for (let i = 0; i < numC; i++) {
      col.push([]);
    }
    // @ts-ignore
    return (this.props.children as any).reduce((p, c, i) => {
      p[i % numC].push(c);

      return p;
    }, col);
  }

  render() {
    return (
      <div className="masonry" ref="Masonry">
        {this.mapChildren().map((col, ci) => {
          return (
            <div className="column" key={ci}>
              {col.map(
                // @ts-ignore
                (child, i) => {
                  return <div key={i}> {child} </div>;
                }
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default MasonryLayout;

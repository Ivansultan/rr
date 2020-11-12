import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

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



function MasonryLayout(props: { images: any[]; }) {

    return (
      <div className="container">
        <div className="masonry-container">

          <Masonry brakePoints={brakePoints}>
            {props.images.map((image, id) => {
              return <Tile src={image} />;
            })}
          </Masonry>
        </div>
      </div>
    );
  
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
  cardStyle?: {}
};

type MasonryState = {
  columns: number;
};

export const Masonry = (props: MasonryProps) => {
  // refs: any;

  // constructor(props: MasonryProps) {
  //   super(props);
  //   this.state = {
  //     columns: 1,
  //   };
  //   this.onResize = this.onResize.bind(this);
  // }

  // componentDidMount() {
  //   this.onResize();
  //   window.addEventListener("resize", this.onResize);
  // }

  const [columns, setColumns] = useState<number>(1)
  useEffect(
    () => {
      onResize();
      window.addEventListener("resize", onResize);
    }, 
    []
    )

  const ref = useRef(null)

  const getColumns = (w: number) => {
    return (
      props.brakePoints.reduceRight((p, c, i) => {
        return c < w ? p : i;
      }, props.brakePoints.length) + 1
    );
  }

  const onResize = () => {
    console.log(ref)
    const _columns = getColumns((ref!.current! as any).offsetWidth);
    console.log("colums", columns);
    if (_columns !== columns) {
      setColumns(_columns)
    }
  }


  const mapChildren = (): any[]  => {
    let col = [];
    const numC = columns;
    for (let i = 0; i < numC; i++) {
      col.push([]);
    }
    // @ts-ignore
    return (props.children as any).reduce((p, c, i) => {
      p[i % numC].push(c);

      return p;
    }, col);
  }


  return (
    <div className="masonry" ref={ref}>
      {mapChildren().map((col, ci) => {
        return (
          <div className="column" key={ci}>
            {col.map(
              // @ts-ignore
              (child, i) => {
                return <div style={{
                  borderRadius: 20, 
                  ...props.cardStyle
                }} key={i}> {child} </div>;
              }
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MasonryLayout;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Zoom from 'react-img-zoom';

//Component/Redux dependencies
import { magnifyView, expandView } from '../overviewSlice.js';

const MagnifiedView = (props) => {
  const dispatch = useDispatch();
  const currentPhoto = useSelector((state) => state.gallery.currentPhoto);

  function viewportToPixels (value) {
    var parts = value.match(/([0-9\.]+)(vh|vw)/);
    var q = Number(parts[1]);
    var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]];
    return side * (q / 100);
  }

  let w = viewportToPixels('100vw');
  let h = viewportToPixels('100vh');

  return (
    <div
      style={{
        cursor: "zoom-out",
        backgroundColor: "black"
      }}
      onClick={() => {
        dispatch(magnifyView(false));
        dispatch(expandView(true));
      }}>
      <Zoom
        img={currentPhoto.thumbnail_url}
        zoomScale={2.5}
        width={w}
        height={h}
      />
    </div>
  );
};

export default MagnifiedView;

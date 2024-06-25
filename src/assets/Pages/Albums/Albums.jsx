// Libraries
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// Thunk Creator
import { getAlbums_TC } from "../../Slices/albumsReducers";
// Loading (Library)
import { Atom } from "react-loading-indicators";
// CSS
import "./Albums.css";

export const Albums = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbums_TC());
  }, []);

  const { albums, isFetching } = useSelector((state) => state.albumsReducer);

  return (
    <div className="Albums">
      {isFetching ? (
        <div className="Loading_Atom">
          <Atom
            color="#00be00"
            size="medium"
            text="Loading"
            textColor="#ff0000"
          />
        </div>
      ) : (
        albums.map((element, index) => (
          <div key={"albums".concat(index + 1)} className="Albums_Item">
            <div className="Title_box">
              <span>title: </span>
              <h3>{element.title}</h3>
            </div>
            <div className="userId_id">
              <span>
                userId: <h3>{element.userId}</h3>
              </span>
              <span>
                id: <h3>{element.id}</h3>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

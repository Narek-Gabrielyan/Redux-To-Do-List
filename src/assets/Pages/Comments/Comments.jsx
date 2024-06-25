// Libraries
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// Thunk Creator
import { getComments_TC } from "../../Slices/commentsReducers";
// Loading (Library)
import { BlinkBlur } from "react-loading-indicators";
// CSS
import "./Comments.css";

export const Comments = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments_TC())
  }, [])

  const {comments, isFetching} = useSelector((state) => state.commentsReducer);
  // console.log(comments[0]);

  return (
    <div className="Comments">
      {isFetching ? (
        <div className="Loading_BlinkBlur">
          <BlinkBlur
            color="#00a300"
            size="large"
            text="Loading"
            textColor="#a47300"
          />
        </div>
      ) : (
        comments.map((comments, index) => (
          <div className="Comments_Item" key={"comments" + (index + 1)}>
            <div>
              <span>name: </span>
              <h4>{comments.name}</h4>
            </div>
            <div>
              <span>email: </span>
              <h4>{comments.email}</h4>
            </div>
            <p>
              <span>
                id: <b>{comments.id}</b>
              </span>
              <span>
                postId: <b>{comments.postId}</b>
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

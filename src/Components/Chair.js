import React, { Component } from "react";
import { connect } from "react-redux";
import "./Chair.css";
import clsx from "clsx";

class Chair extends Component {
  render() {
    const { chair, chairSelectedList, handleSelectedChair } = this.props;
    return (
      <div>
        <button
          className={clsx("chair", {
            booked: chair.daDat,

            // find: nếu có thì trả về chair thỏa mãn đk, ngược lại trả về undefined
            booking: chairSelectedList.find((ele) => ele.soGhe === chair.soGhe),
          })}
          disabled={chair.daDat}
          onClick={() => {
            handleSelectedChair(chair);
          }}
        >
          {chair.soGhe}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectedChair: (chair) => {
      dispatch({
        type: "CHANGE_CHAIR",
        payload: chair,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chair);

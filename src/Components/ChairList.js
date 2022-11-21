import React, { Component } from "react";
import Chair from "./Chair";
import { connect } from "react-redux";

class ChairList extends Component {
  render() {
    const { chairList } = this.props;
    return (
      <div
        className="d-flex flex-column gap-3 align-items-center"
        style={{
          marginRight: 30,
        }}
      >
        {chairList.map((item) => {
          return (
            <div key={item.hang} className="d-flex align-items-center">
              <div className="text-white" style={{ width: "30px" }}>
                {item.hang}
              </div>
              <div className="d-flex gap-3">
                {item.danhSachGhe.map((chair) => {
                  return <Chair key={chair.soGhe} chair={chair} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairList: state.chair.chairList,
  };
};

export default connect(mapStateToProps)(ChairList);

import React, { Component } from "react";
import { connect } from "react-redux";

class CheckOut extends Component {
  render() {
    const { chairSelectedList, handleCheckOut } = this.props;
    return (
      <div className="text-white ">
        <h1 className="text-center fs-2">CONFIRM SECTION</h1>
        <table className="table text-white">
          <thead>
            <tr>
              <th className="w-50">Seat</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {chairSelectedList.map((item) => {
              return (
                <tr key={item.soGhe}>
                  <td>{item.soGhe}</td>
                  <td>{item.gia.toLocaleString()} VND</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>
                {chairSelectedList
                  .reduce((total, item) => {
                    return (total += item.gia);
                  }, 0)
                  .toLocaleString()}{" "}
                VND
              </td>
            </tr>
          </tfoot>
        </table>
        <button onClick={handleCheckOut} className="btn btn-success text-white">
          Check Out
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
    handleCheckOut: () => {
      dispatch({
        type: "PAY",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);

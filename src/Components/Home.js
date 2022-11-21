import React, { Component } from "react";
import ChairList from "./ChairList";
import CheckOut from "./CheckOut";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage:
            "url(https://demo.w3layouts.com/demos_new/template_demo/23-03-2018/movie_seat_selection-demo_Free/759053290/web/images/banner.jpg)",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: 1300,
        }}
      >
        <div className="container">
          <h2
            style={{
              padding: 30,
            }}
            className="text-center fw-bold text-white"
          >
            Booking Ticket
          </h2>
          <div className="row">
            <div className="col-8">
              <div
                style={{
                  border: "1px solid",
                  borderBottomLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
                className="bg-black text-center text-white my-5"
              >
                Screen
              </div>
              <ChairList />
            </div>
            <div className="col-4">
              <CheckOut />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

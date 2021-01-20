import React from "react";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.saveSettings(),
      setPage: this.setPage,
      confirmFavourites: this.confirmFavourites,
    };
  }

  confirmFavourites = () => {
    this.setState({
      firstVisit: false,
      page: "dashboard",
    });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        test: "hello",
      })
    );
  };

  saveSettings() {
    let cryptoDataData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDataData) {
      return { page: "settings", firstVisit: true };
    }
    return { page: "settings" };
  }

  setPage = (page) => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

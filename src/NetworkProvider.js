import React from "react";
import NetInfo from "@react-native-community/netinfo";
import { notifyNetworkChanged } from "./reduxprovider/actions";
import { connect } from "react-redux";

export const NetworkContext = React.createContext({ isConnected: true });

class NetworkProvider extends React.PureComponent {
  state = {
    isConnected: true
  };

  async componentDidMount() {
    // get netinfo first time
    await NetInfo.fetch().then(state => {
      this.setState({ isConnected: state.isConnected });
    });

    // add network listener
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  handleConnectivityChange = isConnected => {
    this.props.networkStatusChanged(isConnected);
    this.setState({ isConnected });
  };

  render() {
    return (
      <NetworkContext.Provider value={this.state}>
        {this.props.children}
      </NetworkContext.Provider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    networkStatusChanged: status => {
      // dispatch(notifyNetworkChanged(status));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NetworkProvider);

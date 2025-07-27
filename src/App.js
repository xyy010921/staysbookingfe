import { Layout } from "antd";
import React from "react";

const { Header, Content } = Layout;

class App extends React.Component {
  state = {
    authed: false,
    asHost: false,
  };

  render() {
    return (
      <Layout>
        <Header>header</Header>
        <Content>Content</Content>
      </Layout>
    );
  }
}

export default App;

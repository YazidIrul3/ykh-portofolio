const { Children } = require("react");

const EachUtils = ({ of, render }) => {
  return Children.toArray(of?.map((item) => render(item)));
};

export default EachUtils;
// Slide instance calls in its constructor.
const stepVisitor = () => {
  let elements = [];

  // Appear and Replace instances call in their componentDidMount method.
  // order: order prop
  // count: number of steps
  //    1 for Appear
  //    max(Children.count - 1, 0) for Replace
  // callback(stepIndex): callback function sets the step index of the descendant
  const visitSteps = (order = 0, count = 1, callback) => {
    const index = elements.length; // document order of element

    elements.push({
      index,
      order,
      count,
      callback
    });
  };

  // Slide instance calls in its componentDidMount method.
  const getCount = () => {
    // Sort elements primary by order prop, secondary by document order.
    elements.sort(({ order: orderA, index: indexA }, { order: orderB, index: indexB }) =>
      orderA === orderB ? indexA - indexB : orderA - orderB);

    // The following reducer function is impure!
    // The callback sets the index of the first step in the element,
    // which is the total number of steps in preceding elements.
    const stepCount = elements.reduce((total, { callback, count }) => {
      callback(total);
      return total + count;
    }, 0);

    elements = null; // clean up, including references to callbacks
    return stepCount;
  };

  return {
    visitSteps,
    getCount
  };
};

export default stepVisitor;

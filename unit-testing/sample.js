class Test {
  constructor(tool) {
    this.tool = tool;
  }
}

const test_tool = new Test("Selenium");
console.log(test_tool);

// async function test_tool_demo(var1) {
//   console.log(var1);
//   return "abc";
// }
async function test_tool_demo(var1) {
  try {
    // const body = { url: "http://localhost:8080" };

    const test_handle_response = (body) => {
      if (body.url) {
        console.log(body);
        return body;
      }
    };

    return any_function(var1).then((res) => {
      const var1 = var1 + "test";
      {
        res = {
          status_code: 200,
          status_message,
          body: { url: "http://localhost:8080" },
        };
      }
      return test_handle_response(res);
    });
  } catch (error) {}
  return "abc";
}

console.log(test_tool_demo("test"));

module.exports = { test_tool_demo };

console.log(test_tool_demo);

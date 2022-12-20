import * as testcafe from "testcafe";

testcafe.fixture("Class instance getter").page(`http://127.0.0.1:1234/index.html`);

testcafe.test("Text should be the value", async tc => {
  await tc.expect(testcafe.Selector("div").innerText).eql("foo");
});

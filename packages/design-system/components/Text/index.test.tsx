import { customRender } from "@alura/test-commons/react-testing-libary";
import { Text } from "./index";

const render = customRender();

describe("<Text />", () => {
  it("renders h1", () => {
    const { container } = render(<Text tag="h1">Sample text</Text>);

    expect(container).toMatchSnapshot();
  });
});

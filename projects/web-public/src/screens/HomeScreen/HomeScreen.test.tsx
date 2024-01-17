import { customRender } from "@alura/test-commons/react-testing-libary";
import { HomeScreen } from "./HomeScreen";

const render = customRender();

describe("<HomeScreen />", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);

    expect(container).toMatchSnapshot();
  });
});

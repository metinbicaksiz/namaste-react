import RestCard from "../RestCard";
import {render} from "@testing-library/react";
import MOCK_DATA from "../mocks/RestCardMock.json";

it('renders RestCard component with props Data', () => {
    render(<RestCard restData={MOCK_DATA} />);
    const name = screen.getByText("Burgers");
    expect(name).toBeInTheDocument();
})
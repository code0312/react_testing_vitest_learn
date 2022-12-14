import { MemoryRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import { App, RoutedApp } from "./App"

describe("App", () => {
  it.todo("renders hello world", () => {
    // Arrange
    render(<RoutedApp />)
    // Act
    // Expect
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Count")
  })

  it.todo("renders not found if invalid path", () => {
    render(
      <MemoryRouter initialEntries={["/not-a-real-route"]}>
        <App />
      </MemoryRouter>
    )

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Not Found")
  })
})

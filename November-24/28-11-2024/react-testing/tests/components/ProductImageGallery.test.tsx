import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render nothing if array is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    // expect(container.firstChild).toBeNull()
    expect(container).toBeEmptyDOMElement();
  });
  it("should render list of images", () => {
    const imageUrls = ["url1", "url2", "url3"];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(imageUrls.length);
    images.forEach((image, index) => {
      expect(image).toHaveAttribute("src", imageUrls[index]);
    });
  });
});

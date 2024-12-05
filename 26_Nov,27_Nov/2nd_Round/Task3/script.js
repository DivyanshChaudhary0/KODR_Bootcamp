
const image = document.getElementById("image");
const circle = document.getElementById("circle");

let isDragging = false;

// Helper function to check if the image overlaps the circle
function isImageOverCircle(image, circle) {
  // Get bounding boxes for both elements
  const imageRect = image.getBoundingClientRect();
  const circleRect = circle.getBoundingClientRect();

  // Get the center and radius of the circle
  const circleRadius = circleRect.width / 2;
  const circleCenterX = circleRect.left + circleRadius;
  const circleCenterY = circleRect.top + circleRadius;

  // Check if any corner of the image is within the circle
  const corners = [
    { x: imageRect.left, y: imageRect.top }, // Top-left
    { x: imageRect.right, y: imageRect.top }, // Top-right
    { x: imageRect.left, y: imageRect.bottom }, // Bottom-left
    { x: imageRect.right, y: imageRect.bottom }, // Bottom-right
  ];

  return corners.some(corner => {
    const distance = Math.sqrt(
      Math.pow(corner.x - circleCenterX, 2) + Math.pow(corner.y - circleCenterY, 2)
    );
    return distance <= circleRadius;
  });
}

// Drag functionality
image.addEventListener("mousedown", (e) => {
  isDragging = true;

  // Offset to make the drag smoother
  const offsetX = e.clientX - image.offsetLeft;
  const offsetY = e.clientY - image.offsetTop;

  function onMouseMove(e) {
    if (!isDragging) return;

    // Move the image
    image.style.left = `${e.clientX - offsetX}px`;
    image.style.top = `${e.clientY - offsetY}px`;

    // Check if the image overlaps the circle
    if (isImageOverCircle(image, circle)) {
      image.style.display = "none"; // Hide the image
      document.removeEventListener("mousemove", onMouseMove);
    }
  }

  // Listen for mousemove while dragging
  document.addEventListener("mousemove", onMouseMove);

  // Stop dragging on mouseup
  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
  }, { once: true });
});

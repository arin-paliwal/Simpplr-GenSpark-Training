export function createRectangle(width, height) {
    return {
        type: 'rectangle',
        width,
        height,
        draw() {
            console.log(`Drawing a rectangle with width ${width} and height ${height}`);
        },
    };
}
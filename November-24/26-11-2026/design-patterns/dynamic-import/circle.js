export function createCircle(radius) {
    return {
        type: 'circle',
        radius,
        draw() {
            console.log(`Drawing a circle with radius ${radius}`);
        },
    };
}
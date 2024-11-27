export async function createShape(type, ...params) {
    if (type === 'circle') {
        const { createCircle } = await import('./circle.js');
        return createCircle(...params);
    } else if (type === 'rectangle') {
        const { createRectangle } = await import('./rectangle.js');
        return createRectangle(...params);
    } else {
        throw new Error(`Unknown shape type: ${type}`);
    }
}
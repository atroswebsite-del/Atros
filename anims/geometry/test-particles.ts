import { BufferGeometry, Color, Float32BufferAttribute, Points, PointsMaterial } from "three"


export const createTestParticles = () => {
  const geometry = new BufferGeometry();
  const vertices = [];
  for (let i = 0; i < 5000; i++) {

    const x = 0.5 * Math.random() - 0.25;
    const y = 0.5 * Math.random() - 0.25;
    const z = 0.5 * Math.random() - 0.25;

    vertices.push(x, y, z);

  }

  geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

  const particleMaterial = new PointsMaterial({ size: 0.015, color: new Color(0xE5DFDA) });

  const points = new Points(geometry, particleMaterial);
  return [points]
}
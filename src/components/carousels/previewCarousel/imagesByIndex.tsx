let image1 = 'https://img.vila.bg/g/2260/184154.jpg';
let image2 = 'https://img.vila.bg/g/2260/184189.jpg';
let image3 = 'https://img.vila.bg/g/2260/184155.jpg';


export const images: string[] = [image1, image2, image3]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
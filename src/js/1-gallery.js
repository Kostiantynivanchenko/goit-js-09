import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItems = [
  {
    href: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    src: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    alt: 'Hokkaido Flower'
  },
  {
    href: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    src: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    alt: 'Container Haulage Freight'
  },
  {
    href: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    src: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    alt: 'Aerial Beach View'
  },
  {
    href: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    src: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    alt: 'Flower Blooms'
    },
    {
        href: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        src: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        alt: 'Alpine Mountains'
    },
    {
        href: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        src: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        alt: 'Mountain Lake Sailing'
    },
    {
        href: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        src: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        alt: 'Alpine Spring Meadows'
    },
    {
        href: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        src: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        alt: 'Nature Landscape'
    },
    {
        href: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        src: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        alt: 'Lighthouse Coast Sea'
    },
];



const galleryContainer = document.querySelector('.gallery');


const galleryMarkup = galleryItems.map(({ href, src, alt }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${href}">
      <img class="gallery-image" src="${src}" alt="${alt}" />
    </a>
  </li>
`).join('');

galleryContainer.innerHTML = galleryMarkup;

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
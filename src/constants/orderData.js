let date = new Date();
const [month, day, year] = [
  date.getMonth() + 1,
  date.getDay(),
  date.getFullYear(),
];
export const orderData = [
  {
    title: `Ordered on ${day}/${month}/${year}`,
    id: '1',
    url: 'https://picsum.photos/id/100/200/300',
    total: 1100,
    details: '1. Speaker',
    products: 1,
    subP: '1100*1',
  },
  {
    title: `Ordered on 31/12/2021`,
    id: '2',
    url: 'https://picsum.photos/id/130/200/300',
    total: 200,
    details: '1. Mouse-pad',
    products: 1,
    subP: '200*1',
  },
  {
    title: `Ordered on 15/05/2021`,
    id: '3',
    url: 'https://picsum.photos/id/280/200/300',
    total: 500,
    details: '1. Keyboard',
    products: 1,
    subP: '500*1',
  },
  {
    title: `Ordered on 14/04/2021`,
    id: '4',
    url: 'https://picsum.photos/id/10/200/300',
    total: 2000,
    details: `1. Pen 
            2.Sharpner
            3.Pencil
            4.Compass box
            5.Scale`,
    products: 5,
    subP: '400*5',
  },
];

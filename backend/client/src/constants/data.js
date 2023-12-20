import images from './images';

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "₦50,000",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "₦53,000",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "₦47,000",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "₦36,000",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "₦26,000",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "₦15,000",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "₦11,000",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "₦5,000",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "₦7,500",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "₦6,000",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
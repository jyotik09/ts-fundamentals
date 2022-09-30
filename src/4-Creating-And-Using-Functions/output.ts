import { productsURL } from "../lib";

const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
};

export default async function updateOutput(id:string) {
  const products = await getPrds();
  const output = document.querySelector(`#${id}`);
  const html = layoutPrds(products);
  if(output && html){
    output.innerHTML = html;
  }
}

async function getPrds(): Promise<ProductType[]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

function layoutPrds(prds: ProductType[]){
  const items = prds.map(p=>{
    const prdHtml = `
    <span class="card-id">#${p.id}</span>
    <i class="card-icon ${p.icon} fa-lg"></i>
    <span class="card-name">#${p.name}</span>
    `;

    const cardHtml =`
    <li>
      <div class="card>
        <div class="card-content">
          <div class="content">
          ${prdHtml}
          </div>
        </div>
      </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

runSamples();

function runSamples(){
  function displayPrdInfo(id: number, name: string){
    console.log(`${prefix} typed params`);
    console.log(`product id is ${id}, name is ${name}`);
  }

  displayPrdInfo(10, 'Joyzz');

  console.log(`${prefix} fn declaration`);
  console.log(addNumbersDeclaration(6,9));

  function addNumbersDeclaration(x: number, y: number): number {
    const sum: number = x+y;
    return sum;
  }

  const addNumbersExpr = function(x: number, y: number){
    const sum = x+y;
    return sum;
  };

  console.log(addNumbersExpr(12,90));

  const samplePrds = [
    {
      id: 10,
      name: 'Pizza slice',
      icon: 'fas fa-pizza-slice'
    },
    {
      id: 20,
      name: 'Ice cream',
      icon: 'fas fa-ice-cream'
    },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese'
    },
  ];

  function getPrdsName(): string[]{
    return samplePrds.map(p=> p.name);
  }
  console.log(getPrdsName());

  function getPrdById(id: number): ProductType | undefined {
    return samplePrds.find(p=> p.id === id); 
  }

  const getRandomInt = (max: number = 1000) => Math.floor(Math.random()*max);
  
  function createProduct(name: string, icon?: string): ProductType{
    return{
      id: getRandomInt(),
      name,
      icon
    };
  }

  console.log(`${prefix} optional params`);
  let pineapple = createProduct('pineappe', 'pine-apple.jpg');
  let mango = createProduct('mango');
  console.log(pineapple, mango);
} 
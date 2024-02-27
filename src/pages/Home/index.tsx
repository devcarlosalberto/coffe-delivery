import { Header } from './components/Header'
import { Card } from './components/Card'

import { Cards, CoffeList } from './styles'

import cafeExpresso from '../../assets/expresso.png'
import cafeExpressoAmericano from '../../assets/americano.png'
import cafeExpressoCremoso from '../../assets/express-cremoso.png'
import cafeExpressoGelado from '../../assets/cafe-gelado.png'
import cafeComLeite from '../../assets/cafe-com-leite.png'
import latte from '../../assets/latte.png'
import capuccino from '../../assets/capuccino.png'
import macchiato from '../../assets/macchiato.png'
import mocaccino from '../../assets/mochaccino.png'

const products = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['tradicional'],
    image: cafeExpresso,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['tradicional'],
    image: cafeExpressoAmericano,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['tradicional'],
    image: cafeExpressoCremoso,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['tradicional', 'gelado'],
    image: cafeExpressoGelado,
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: cafeComLeite,
  },
  {
    id: 6,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: latte,
  },
  {
    id: 7,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: capuccino,
  },
  {
    id: 8,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: macchiato,
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: mocaccino,
  },
]

export function Home() {
  return (
    <>
      <Header />

      <CoffeList>
        <h2>Nossos cafés</h2>

        <Cards>
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              tags={product.tags}
              image={product.image}
            />
          ))}
        </Cards>
      </CoffeList>
    </>
  )
}

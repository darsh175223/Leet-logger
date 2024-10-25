import Link from 'next/link';
import { Base } from '../templates/Base';

const Index = () => (
  <Base>
    <h1>Welcome to Our Website</h1>
    <Link href="/about">Go to About Page</Link>
    <Link href="/problems">Go to Problems Page</Link>
    <Link href="/one">Go to Problems Page</Link>
    <Link href="/two">Go to Problems Page</Link>

  </Base>
);

export default Index;

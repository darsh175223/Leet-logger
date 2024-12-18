import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/darsh175223">
            GitHub
          </Link>
        <Link href="/tips" className="ml-4">
          <Button size="sm" className="px-4 py-2">Explore Coding Tips</Button>
        </Link>
        </li>
       
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Logging\n'}
            <span className="text-primary-500">Coding Problems</span>
          </>
        }
        button={
          <Link href="/problems">
            <Button xl>Look at the solved problems</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

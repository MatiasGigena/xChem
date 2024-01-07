'use client';
import Card from './Card';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
const OurApproach = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const projects = [
    {
      title: 'New Standards',
      subtitle: 'Innovating Medicine',
      description:
        'The focus is on developing broad-spectrum antibiotics and exploring ageing and longevity research, with targets selected on societal needs. The Proof-of-Synthesis technology enhances this process, tokenizing each synthesis step and transforming it into an NFT. This ensures an unalterable and transparent record of the entire synthesis process, further advancing the field of medicine.',
      color: 'glassmorphism',
      img: '/images/image2 (1).webp',
    },
    {
      title: 'Innovation with Norachem',
      subtitle: 'Synergistic Partnership',
      description:
        'Learn about the dynamic partnership between XChem and Norachem (Norachem.io). Discover how our collaboration enhances both entities capabilities, leading to breakthroughs in drug discovery and synthesis pathways.',
      color: 'glassmorphism',
      img: '/images/image2 (2).webp',
    },
    {
      title: 'AI Meets Chemistry',
      subtitle: 'Empirical Data and AI Integration',
      description:
        'Explore how XChem contributes empirical data to Norachem’s algorithms, enhancing molecule design, synthesis feasibility, and expanding the training data for AI models. Understand the role of Algebraic Data Types (ADTs) in structuring this data and how AI research agents are designed to run our Chemputers.',
      color: 'glassmorphism',
      img: '/images/image2 (4).webp',
    },
    {
      title: 'Global Expansion',
      subtitle: 'Empowering Global Communities',
      description:
        'Our plan involves establishing labs in the developing world. These labs not only enhance local capabilities but also contribute to the decentralisation of science and technology, feeding valuable data back into our central system. We navigate the complex landscape of global regulations and with the help of legal advisors, ensuring our operations are both impactful and responsible.',
      color: 'glassmorphism',
      img: '/images/image2 (3).webp',
    },
  ];
  return (
    <section
      id='Approach'
      className='mt-[10vh] lg:mt-[5vh]'
    >
      <h1 className='text-center text-[#303036] text-6xl leading-[86px] xxl:text-[100px]'>
        Our Unique Approach
      </h1>
      {projects.map((project, i) => {
        const targetScale =
          1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};
export default OurApproach;

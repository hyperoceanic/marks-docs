import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'People',
    Svg: require('@site/static/img/undraw_engineering_team_a7n2.svg').default,
    link: 'docs/category/people',
    description: (
      <>
        Humans, eh? When I started out, little did I suspect that the biggest
        factor in a spftware project was the people involved.
      </>
    ),
  },
  {
    title: 'Process',
    link: '/docs/category/process',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Agile, Extreme, Kanban. Waterfall or Rational.
      </>
    ),
  },
  {
    title: 'Tech',
    link: '/docs/category/technology',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Mainly focused around .net
      </>
    ),
  },

];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}><h3>{title}</h3></Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Developer',
    Svg: require('@site/static/img/undraw_developer.svg').default,
    description: (
      <>
        A full time developer with experience in Web & Android App Development. <code> ANDROID</code>
      </>
    ),
  },
  {
    title: 'Graphic Designer',
    Svg: require('@site/static/img/undraw_designer.svg').default,
    description: (
      <>
        Self made Designer, well versed in Figma. Currently guiding juniors as Design Head of a Student Club in VIT University. 
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Programmer',
    Svg: require('@site/static/img/undraw_code.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

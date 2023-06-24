import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Developer',
    Svg: require('@site/static/img/undraw_developer.svg').default,
    description: (
      <> 
        A full time developer with experience in Web & Android App Development. <br></br> <br></br> 
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html logo" height="30px"></img></a> &nbsp;
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="node logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="git logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify Logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap Logo" height="30px"></img> &nbsp;
      </>
    ),
  },
  {
    title: 'Graphic Designer',
    Svg: require('@site/static/img/undraw_designer.svg').default,
    description: (
      <>
        Self made Designer, well versed in Figma. Currently guiding juniors as Design Head of a Student Club in VIT University. <br></br> <br></br>
        <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="figma logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" alt="canva logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white" alt="adobe Illustrator logo" height="30px"></img>
      </>
    ),
  },
  {
    title: 'Programmer',
    Svg: require('@site/static/img/undraw_code.svg').default,
    description: (
      <>
        Programmer <br></br> <br></br>
        <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="c++ logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="python logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="android logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="vs code logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white" alt="android-studio logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github logo" height="30px"></img> &nbsp;
        <img src="https://img.shields.io/badge/apache%20netbeans-1B6AC6?style=for-the-badge&logo=apache%20netbeans%20IDE&logoColor=white" alt="NETBEANS logo" height="30px"></img>
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

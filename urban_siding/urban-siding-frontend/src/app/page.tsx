import Image from 'next/image';
import styles from './page.module.css';
import Intro from './components/index/intro';
import MainInfo from './components/index/mainInfo';
import ProjectSlider from './components/index/projectSlider';

export default function Home() {
  return (
    <main>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flickity@2.3.0/dist/flickity.css"></link>
      <script src="https://unpkg.com/flickity@2.3.0/dist/flickity.pkgd.js"></script>
      <Intro />
      <MainInfo />
      <ProjectSlider />
    </main>
  );
}

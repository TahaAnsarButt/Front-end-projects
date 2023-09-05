import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslations } from 'next-intl';

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`./locales/${locale}.json`),
    },
  };
}


export default function names() {
  const t = useTranslations('names');

}

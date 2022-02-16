import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { CardsFunctionalities } from '../components/CardsFunctionalities';
import { Header } from '../components/Header'
import { Container } from '../styles/global'

import { Calendar, File, Clock } from 'react-feather';

import { ContentFunctionalities, ContentHome, ContentProject } from './styles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Teraph</title>
        <meta name="description" content="Aqui você irá encontrar tudo que deseja assistir. Bem vindo ao Watching.io!" />
      </Head>

      <Header />

      <Container>
        <ContentHome>
          <div className="hero-section">
            <h1>
              <span>Sua Plataforma</span> de Atendimento e Gerenciamento de pacientes
            </h1>

            <p>
              Melhore seus resultados na clínica com organização e segurança.
            </p>

            <section>
              <Link href="https://play.google.com/store/apps/details?id=com.teraph" passHref>
                <Image
                  src="/google-play-badge.svg"
                  alt="disponível na google play"
                  width={190}
                  height={72}
                />
              </Link>

              <Link href="https://www.apple.com/br/app-store/" passHref>
                <Image
                  src="/app-store-badge.svg"
                  alt="disponível na google play"
                  width={145}
                  height={72}
                />
              </Link>
            </section>
          </div>

          <figure>
            <Image
              src="/doutores.svg"
              alt="imagem com vários doutores"
              width={659}
              height={489}
            />
          </figure>
        </ContentHome>

        <ContentProject>
          <figure>
            <Image
              src="/projeto.svg"
              alt="explicação do projeto teraph"
              width={660}
              height={490}
            />
          </figure>

          <div className="description-project">
            <h1>Teraph</h1>

            <p>
              Nossa plataforma foi desenvolvida com o intuito de melhorar sua experiência com seus
              pacientes/clientes. Oferecemos um ambiente para que você possa agendar suas consultas,
              organizar informações pessoais, evoluções e criar documentos profissionais. Tudo isso com
              muita segurança e criatividade. Seja um profissional de excelência com sua agenda e informações sobre as pessoas que você atende em um só lugar!
            </p>
          </div>
        </ContentProject>

        <ContentFunctionalities>
          <h1>Funcionalidades</h1>

          <div className="box-cards">
            <CardsFunctionalities
              icon={<Calendar size={60} color="#6B5BD4" />}
              title="Agendamento"
              content="Faça o agendamento de seus pacientes de uma forma rápida, simples e produtiva."
            />

            <CardsFunctionalities
              icon={<File size={60} color="#6B5BD4" />}
              title="Documentos"
              content="Tenha documentado todas as consultas na palma das mãos."
            />

            <CardsFunctionalities
              icon={<Clock size={60} color="#6B5BD4" />}
              title="Administração"
              content="Administre o seu tempo, seus pacientes e seja mais produtivo. "
            />
          </div>
        </ContentFunctionalities>
      </Container>
      
  </>
  )
}

export default Home

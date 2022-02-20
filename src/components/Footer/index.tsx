import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';
import { IoIosArrowUp } from 'react-icons/io'

import {
  ContainerFooter,
  ContentFooter,
  FooterFooter,
  LeftFooter,
  RightFooter,
  GridFooterContainer,
  SocialMedias,
  TopButton,
} from './styles';

export function Footer() {
  return (
    <ContainerFooter id="contact">
      <ContentFooter>
        <GridFooterContainer>
          <RightFooter>
            <img src="/logo.svg" alt="Logo Flying High" />
            <span>Teraph</span>
            <span>Todos os direitos reservados</span>
          </RightFooter>

          <LeftFooter>
            <ul>
              <li>Tópicos</li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#teraph">Teraph</a>
              </li>
              <li>
                <a href="#functionalities">Funcionalidades</a>
              </li>
              <li>
                <a href="#testimony">Depoimentos</a>
              </li>
              <li>
                <a href="#plans">Planos</a>
              </li>
            </ul>

            <ul>
              <li>Ações</li>
              <li>Cadastro</li>
              <li>Parcerias</li>
            </ul>

            <ul>
              <li>Contato</li>
              <li>contato@teraph.com.br</li>
              <li>
                +55 11 96972-7693
              </li>
            </ul>
          </LeftFooter>
        </GridFooterContainer>
      </ContentFooter>

      <FooterFooter>
        <SocialMedias>
          <button>
            <a href="https://api.whatsapp.com/send?phone=5511278823232">
              <ImWhatsapp />
            </a>
          </button>

          <button>
            <a href="https://www.instagram.com/appteraph/">
              <BsInstagram />
            </a>
          </button>

          <button>
            <a href="https://www.instagram.com/appteraph/">
              <BsLinkedin />
            </a>
          </button>
        </SocialMedias>

        <TopButton>
          <a href="#home">
            <button>
              <IoIosArrowUp />
            </button>
          </a>
        </TopButton>
      </FooterFooter>
    </ContainerFooter>
  );
}
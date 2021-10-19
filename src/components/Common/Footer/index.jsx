import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import { ContainerCopy, ContainerFooter, LinkExternal, SocialList } from './styles'

import { Msg } from '../../../constants'

import { Container } from '../../../ui/styles'

const Footer = () => {
  return (
    <ContainerFooter>
      <Container hiddenMargin>
        <ContainerCopy>
          Create with 💛 by Yadurani López.
          <SocialList>
            <li>
              <LinkExternal rel="noopener" href={Msg.Linkedin} target="_blank" title="Linkedin">
                <span>Red social de Linkedin</span>
                <FaLinkedinIn size="1.2rem"/>
              </LinkExternal>
            </li>
            <li>
              <LinkExternal rel="noopener" href={Msg.Twitter} target="_blank">
                <span>Red social de Twitter</span>
                <FaTwitter size="1.2rem"/>
              </LinkExternal>
            </li>
            <li>
              <LinkExternal rel="noopener" href={Msg.Github} target="_blank">
                <span>Red social de Github</span>
                <FaGithub size="1.2rem"/>
              </LinkExternal>
            </li>
          </SocialList>
        </ContainerCopy>
      </Container>
    </ContainerFooter>
  )
}

export default Footer
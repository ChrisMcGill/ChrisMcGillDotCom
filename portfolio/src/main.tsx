import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Textbox from './components/text/textbox.tsx'
import Header from './components/text/header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />

    <Header>
      Hello,<br/>
      I’m Chris McGill.<br/>
      Here’s What I’m<br/>
      Working On*
    </Header>

    <Textbox>
      *This portfolio and its contents are 100% vibe-free!
    </Textbox>

    <Textbox>
      Full-stack software development with comprehensive apprenticeship experience in the e2e development of next-generation information management products. Proven ability to translate high-fidelity UX/UI designs into responsive applications using Angular, TypeScript, and modern technologies including AI agents. Experience in back-end development with C#/.NET, API design, and working with the Elastic Stack. A strong collaborator accustomed to working in Agile/Scrum teams alongside designers, developers, and QA specialists to deliver robust software solutions.
    </Textbox>

  </StrictMode>,
)

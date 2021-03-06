import React from "react"

import SEO from "../components/SEO"
import { PageContainer } from "../components/SharedStyledComponents"

const EthereumPage = () => (
  <>
    <SEO title="What is Ethereum?" />
    <PageContainer>
      <h1>What is Ethereum?</h1>
      <p>Ethereum is the world’s leading programmable blockchain. </p>

      <p>
        Launched in 2015, Ethereum serves as a global, open-source platform for
        decentralized applications that allow users have control over their own
        data.
      </p>

      <p>
        Applications built on Ethereum can vary widely in type. Whether they are
        financial (like payments, lending, or insurance), gaming or identity
        related, or they serve another purpose, each “web 3” application
        benefits from censorship resistance, decentralization, and security.
      </p>

      <p>
        Ethereum is not controlled by anyone - it is built and maintained by
        thousands of people, companies, organizations and users all over the
        world.
      </p>

      <p>
        To learn more about Ethereum or its native token (Ether), visit{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ethereum.org"
        >
          ethereum.org
        </a>
      </p>
    </PageContainer>
  </>
)

export default EthereumPage

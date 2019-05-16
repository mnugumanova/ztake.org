<template>
  <div class="about" itemscope itemtype="http://schema.org/AboutPage">
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>About</h3>

            <p>We are early blockchain adopters with an extensive background in tech space. We have both worked for
              various size IT companies in the past including Amazon and Salesforce. Our tech lead - Roman is a
              top-notch blockchain engineer with a particular passion to smart contracts and Mira (COO) is a
              certified Washington notary who has been a long time PoA validator and specializes in Proof of Stake
              consensus research. Our headquarter is in Seattle, US, one of the most stable countries on a
              political, economic, and social level.</p>

            <p>We have been actively involved in running and testing the COSMOS testnets as well as participated in
              Game of Stakes. Due to our deep tech background and connections, we would like to leverage our
              network to help build value-add products for the Cosmos network.</p>
          </div>
          <div class="col-lg-6 d-flex align-items-center justify-content-center">
            <img src="../assets/img/about.svg" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </section>
    <section id="projects">
      <div class="container">
        <h3>Crypto projects we were part of</h3>

        <div class="projects">
          <a href="https://vault12.com" target="_blank" rel="noopener" aria-label="Read more about Vault12">
            <img src="../assets/img/projects/logo-vault-12.png" srcset="../assets/img/projects/logo-vault-12@2x.png 2x, ../assets/img/projects/logo-vault-12@3x.png 3x" class="img-fluid" alt="">
          </a>
          <a href="https://poa.network" target="_blank" rel="noopener" aria-label="Read more about POA network">
            <img src="../assets/img/projects/logo-poa.svg" class="img-fluid" alt="">
          </a>
          <a href="https://multisender.app" target="_blank" rel="noopener" aria-label="Read more about multisender">
            <img src="../assets/img/projects/logo-multisender.png" srcset="../assets/img/projects/logo-multisender@2x.png 2x, ../assets/img/projects/logo-multisender@3x.png 3x" class="img-fluid" alt="">
          </a>
          <a href="https://peppersec.com" target="_blank" rel="noopener" aria-label="Read more about peppersec">
            <img src="../assets/img/projects/logo-peppersec.svg" class="img-fluid" alt="">
          </a>
          <a href="https://www.blockchainlabs.nz" target="_blank" rel="noopener" aria-label="Read more about blockchainlabz">
            <img src="../assets/img/projects/logo-blockchainlabs.svg" class="img-fluid" alt="">
          </a>
          <a href="https://dragonereum.io" target="_blank" rel="noopener" aria-label="Read more about dragonereum">
            <img src="../assets/img/projects/logo-dragonereum.svg" class="img-fluid" alt="">
          </a>
        </div>
      </div>
    </section>
    <section id="terms">
      <div class="container">
        <h3>Terms of Services</h3>

        <div class="row">
          <div class="col-lg-6">
            <h4>Acceptance of Terms</h4>
            <p>The services that Ztake.org provides to User is subject to the following Terms of Service (ToS).
              Ztake.org reserves the right to update the ToS at any time without notice to User. The most
              current version of the ToS can be reviewed on our web page: https://Ztake.org/about</p>
            <p>Ztake.org shall have the right at any time to change or discontinue any aspect or feature of the
              website or service.</p>

            <h4 class="pt-5">Description of Services</h4>
            <p>As a validator we operate a fullnode on the Cosmos network. We participate in consensus by
              broadcasting votes which contain cryptographic signatures signed with our private key.</p>
            <p>Ztake.org operate a highly available validator infrastructure for the Cosmos Network featuring:</p>
            <ul>
              <li>Proactive 24/7 monitoring and on-call personnel</li>
              <li>Fully redundant hardware and co-location environment</li>
              <li>Fully redundant network connectivity with dedicated bandwidth</li>
              <li>High level of operational automation for scaling and predictability</li>
            </ul>
            <p>To completely align our interests with those of our delegators, Ztake.org will be staking through
              our own service.</p>
            <p>Ztake.org’ infrastructure is designed from the ground up for security, high availability and to
              eliminate any single point of failure.</p>
            <p>Ztake.org use a hybrid of cloud and physical servers. Cloud is used for scalability and high
              availability, while the physical servers are used to secure sensitive key material.</p>
          </div>
          <div class="col-lg-6">
            <h4>Changed Terms</h4>
            <p>Ztake.org shall have the right at any time to change or modify the terms and conditions
              applicable to User's use of the website or service, or any part thereof, or to impose new
              conditions, including, but not limited to, adding fees and charges for use. Such changes,
              modifications, additions or deletions shall be effective immediately upon notice thereof, which may
              be given by means including, but not limited to, posting on the website, or by electronic or
              conventional mail, or by any other means by which User obtains notice thereof. Any use of the
              website or service by User after such notice shall be deemed to constitute acceptance by User of
              such changes, modifications or additions.</p>
            <p>All services, including any updates, enhancements and new features are subject to the ToS.</p>

            <h4 class="pt-5">User Conduct</h4>
            <p>User shall use the website and the services for lawful purposes only.</p>

            <h4 class="pt-5">Miscellaneous</h4>
            <p>This Agreement and any operating rules for the website and its services established by Ztake.org
              constitute the entire agreement of the parties with respect to the subject matter hereof, and
              supersede all previous written or oral agreements between the parties with respect to such subject
              matter. This Agreement shall be construed in accordance with the laws of the Washington without regard
              to its conflict of laws rules. No waiver by either party of any breach or default hereunder shall be
              deemed to be a waiver of any preceding or subsequent breach or default. The section headings used
              herein are for convenience only and shall not be given any legal import.</p>

            <h4 class="pt-5">Copyright Notice</h4>
            <p>Ztake.org and its logos are trademarks of Ztake.org. All rights
              reserved. All other trademarks appearing on the website are the property of their respective
              owners.</p>
          </div>
        </div>
      </div>
    </section>
    <Newsletter/>
  </div>
</template>

<script>
import Newsletter from '@/components/Newsletter.vue'
export default {
  components: {
    Newsletter
  },
  head() {
    return {
      title: 'About - ZTAKE',
      meta: [
        { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'About - ZTAKE'},
      ]
    }
  }
}
</script>
